import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  ShoppingCart, 
  Package, 
  Calendar, 
  TrendingUp, 
  ArrowRight,
  ArrowUp,
  ArrowDown,
  UserPlus,
  DollarSign,
  BarChart3,
  AlertCircle,
  CheckCircle,
  Clock,
  Truck
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import DashboardLayout from '@/components/DashboardLayout.jsx'
import heroImage from '../../../assets/hero-image.jpg'
import liveStreamingImage from '../../../assets/live-streaming.png'
import liveCommerceImage from '../../../assets/live-commerce.jpg'

function AdminDashboard() {
  // 플랫폼 현황 데이터
  const platformStats = {
    totalSales: 125000000,
    totalOrders: 3250,
    activeUsers: 18500,
    newUsers: 450,
    comparedToLastMonth: {
      sales: 12, // 퍼센트
      orders: 8, // 퍼센트
      activeUsers: 15, // 퍼센트
      newUsers: 22 // 퍼센트
    }
  }
  
  // 회원 현황 데이터
  const userStats = {
    total: 25000,
    buyers: 23500,
    sellers: 1200,
    suppliers: 300,
    newToday: 120
  }
  
  // 주문 현황 데이터
  const orderStats = {
    total: 3250,
    processing: 450,
    shipping: 850,
    delivered: 1950,
    cancelled: 0
  }
  
  // 라이브 방송 현황 데이터
  const liveStats = {
    ongoing: 12,
    scheduled: 45,
    completed: 320,
    totalViewers: 85000
  }
  
  // 최근 주문 데이터
  const recentOrders = [
    {
      id: 'ORD-2023-0012',
      date: '2023-08-01 14:25',
      customer: '김구매',
      items: [
        { name: '프리미엄 겨울 코트', price: 89000, quantity: 1 }
      ],
      status: 'delivered',
      total: 89000
    },
    {
      id: 'ORD-2023-0011',
      date: '2023-08-01 13:10',
      customer: '이소비',
      items: [
        { name: '무선 이어폰 Pro', price: 129000, quantity: 1 },
        { name: '보호 케이스', price: 15000, quantity: 1 }
      ],
      status: 'shipping',
      total: 144000
    },
    {
      id: 'ORD-2023-0010',
      date: '2023-08-01 11:45',
      customer: '박고객',
      items: [
        { name: '스마트 주방 저울', price: 45000, quantity: 1 }
      ],
      status: 'processing',
      total: 45000
    },
    {
      id: 'ORD-2023-0009',
      date: '2023-08-01 10:30',
      customer: '최사용',
      items: [
        { name: '블루투스 스피커', price: 55000, quantity: 1 }
      ],
      status: 'processing',
      total: 55000
    }
  ]
  
  // 현재 진행 중인 라이브 방송 데이터
  const ongoingLives = [
    {
      id: 1,
      title: '🔥 겨울 패션 특가! 코트 50% 할인',
      streamer: '패션 큐레이터 김민지',
      viewers: 1234,
      startTime: '14:00',
      duration: '01:25:30',
      thumbnail: heroImage
    },
    {
      id: 2,
      title: '📱 최신 스마트폰 언박싱 & 리뷰',
      streamer: '테크 리뷰어 박준호',
      viewers: 856,
      startTime: '13:30',
      duration: '01:55:12',
      thumbnail: liveStreamingImage
    },
    {
      id: 3,
      title: '🍳 주방용품 실전 테스트',
      streamer: '요리 전문가 이수진',
      viewers: 432,
      startTime: '15:00',
      duration: '00:25:45',
      thumbnail: liveCommerceImage
    }
  ]
  
  // 최근 가입 판매자/도매상 데이터
  const recentSellers = [
    {
      id: 1,
      name: '패션 큐레이터 김민지',
      type: 'seller',
      joinDate: '2023-08-01',
      status: 'pending',
      category: '패션',
      image: heroImage
    },
    {
      id: 2,
      name: '테크 리뷰어 박준호',
      type: 'seller',
      joinDate: '2023-07-31',
      status: 'approved',
      category: '전자제품',
      image: liveStreamingImage
    },
    {
      id: 3,
      name: '(주)패션월드',
      type: 'supplier',
      joinDate: '2023-07-30',
      status: 'pending',
      category: '패션',
      image: liveCommerceImage
    }
  ]
  
  // 주문 상태에 따른 아이콘 및 색상
  const orderStatusConfig = {
    processing: { icon: <ShoppingCart className="h-5 w-5" />, color: 'bg-blue-500' },
    shipping: { icon: <Truck className="h-5 w-5" />, color: 'bg-yellow-500' },
    delivered: { icon: <CheckCircle className="h-5 w-5" />, color: 'bg-green-500' }
  }
  
  return (
    <DashboardLayout userType="admin">
      {/* 플랫폼 현황 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">총 매출</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <DollarSign className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{(platformStats.totalSales / 100000000).toFixed(1)}억원</p>
                </div>
              </div>
              <div className={`flex items-center ${platformStats.comparedToLastMonth.sales >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {platformStats.comparedToLastMonth.sales >= 0 ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                <span>{Math.abs(platformStats.comparedToLastMonth.sales)}%</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-gray-500">전월 대비</p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">총 주문</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <ShoppingCart className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{platformStats.totalOrders.toLocaleString()}건</p>
                </div>
              </div>
              <div className={`flex items-center ${platformStats.comparedToLastMonth.orders >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {platformStats.comparedToLastMonth.orders >= 0 ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                <span>{Math.abs(platformStats.comparedToLastMonth.orders)}%</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-gray-500">전월 대비</p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">활성 사용자</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{platformStats.activeUsers.toLocaleString()}명</p>
                </div>
              </div>
              <div className={`flex items-center ${platformStats.comparedToLastMonth.activeUsers >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {platformStats.comparedToLastMonth.activeUsers >= 0 ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                <span>{Math.abs(platformStats.comparedToLastMonth.activeUsers)}%</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-gray-500">전월 대비</p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">신규 가입자</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                  <UserPlus className="h-5 w-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{platformStats.newUsers.toLocaleString()}명</p>
                </div>
              </div>
              <div className={`flex items-center ${platformStats.comparedToLastMonth.newUsers >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {platformStats.comparedToLastMonth.newUsers >= 0 ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                <span>{Math.abs(platformStats.comparedToLastMonth.newUsers)}%</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-gray-500">전월 대비</p>
          </CardFooter>
        </Card>
      </div>
      
      {/* 회원, 주문, 라이브 방송 현황 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* 회원 현황 */}
        <Card>
          <CardHeader>
            <CardTitle>회원 현황</CardTitle>
            <CardDescription>총 {userStats.total.toLocaleString()}명</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>구매자</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">{userStats.buyers.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">({((userStats.buyers / userStats.total) * 100).toFixed(1)}%)</span>
                </div>
              </div>
              <Progress value={(userStats.buyers / userStats.total) * 100} className="h-2" />
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-purple-500" />
                  </div>
                  <span>판매자</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">{userStats.sellers.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">({((userStats.sellers / userStats.total) * 100).toFixed(1)}%)</span>
                </div>
              </div>
              <Progress value={(userStats.sellers / userStats.total) * 100} className="h-2" />
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Package className="h-4 w-4 text-green-500" />
                  </div>
                  <span>도매상</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">{userStats.suppliers.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">({((userStats.suppliers / userStats.total) * 100).toFixed(1)}%)</span>
                </div>
              </div>
              <Progress value={(userStats.suppliers / userStats.total) * 100} className="h-2" />
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center">
                <UserPlus className="h-5 w-5 text-blue-500 mr-2" />
                <span>오늘 <strong>{userStats.newToday}</strong>명 신규 가입</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/dashboard/admin/users">
                회원 관리
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        {/* 주문 현황 */}
        <Card>
          <CardHeader>
            <CardTitle>주문 현황</CardTitle>
            <CardDescription>총 {orderStats.total.toLocaleString()}건</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <ShoppingCart className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>처리중</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">{orderStats.processing.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">({((orderStats.processing / orderStats.total) * 100).toFixed(1)}%)</span>
                </div>
              </div>
              <Progress value={(orderStats.processing / orderStats.total) * 100} className="h-2" />
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                    <Truck className="h-4 w-4 text-yellow-500" />
                  </div>
                  <span>배송중</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">{orderStats.shipping.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">({((orderStats.shipping / orderStats.total) * 100).toFixed(1)}%)</span>
                </div>
              </div>
              <Progress value={(orderStats.shipping / orderStats.total) * 100} className="h-2" />
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <span>배송완료</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">{orderStats.delivered.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">({((orderStats.delivered / orderStats.total) * 100).toFixed(1)}%)</span>
                </div>
              </div>
              <Progress value={(orderStats.delivered / orderStats.total) * 100} className="h-2" />
              
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                <span><strong>{orderStats.processing}</strong>건의 주문 처리 필요</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/dashboard/admin/orders">
                주문 관리
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        {/* 라이브 방송 현황 */}
        <Card>
          <CardHeader>
            <CardTitle>라이브 방송 현황</CardTitle>
            <CardDescription>총 시청자 {liveStats.totalViewers.toLocaleString()}명</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <span>진행중</span>
                </div>
                <span className="font-bold">{liveStats.ongoing}개</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <Calendar className="h-4 w-4 text-purple-500" />
                  </div>
                  <span>예정됨</span>
                </div>
                <span className="font-bold">{liveStats.scheduled}개</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-gray-500" />
                  </div>
                  <span>완료됨</span>
                </div>
                <span className="font-bold">{liveStats.completed}개</span>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">현재 시청자 분포</h4>
                <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div className="flex h-full">
                    <div className="bg-red-500 h-full" style={{ width: '45%' }}></div>
                    <div className="bg-yellow-500 h-full" style={{ width: '30%' }}></div>
                    <div className="bg-green-500 h-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>패션 45%</span>
                  <span>전자제품 30%</span>
                  <span>기타 25%</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/dashboard/admin/live">
                라이브 방송 관리
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* 최근 주문 내역 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>최근 주문 내역</CardTitle>
          <CardDescription>오늘의 최신 주문</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">주문번호</th>
                  <th className="text-left py-3 px-4 font-medium">일시</th>
                  <th className="text-left py-3 px-4 font-medium">고객</th>
                  <th className="text-left py-3 px-4 font-medium">상품</th>
                  <th className="text-right py-3 px-4 font-medium">금액</th>
                  <th className="text-center py-3 px-4 font-medium">상태</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <Link to={`/dashboard/admin/orders/${order.id}`} className="text-blue-600 hover:underline">
                        {order.id}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{order.date}</td>
                    <td className="py-3 px-4">{order.customer}</td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{order.items[0].name}</p>
                        {order.items.length > 1 && (
                          <p className="text-xs text-gray-500">외 {order.items.length - 1}건</p>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-medium">
                      {order.total.toLocaleString()}원
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex justify-center">
                        <Badge 
                          variant="outline" 
                          className={`flex items-center ${
                            order.status === 'processing' ? 'border-blue-500 text-blue-500' :
                            order.status === 'shipping' ? 'border-yellow-500 text-yellow-500' :
                            'border-green-500 text-green-500'
                          }`}
                        >
                          {orderStatusConfig[order.status].icon}
                          <span className="ml-1">
                            {order.status === 'processing' ? '처리중' :
                             order.status === 'shipping' ? '배송중' : '배송완료'}
                          </span>
                        </Badge>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="ml-auto" asChild>
            <Link to="/dashboard/admin/orders">
              모든 주문 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
      
      {/* 현재 진행 중인 라이브 방송 및 최근 가입 판매자/도매상 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 현재 진행 중인 라이브 방송 */}
        <Card>
          <CardHeader>
            <CardTitle>현재 진행 중인 라이브 방송</CardTitle>
            <CardDescription>실시간 모니터링</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ongoingLives.map((live) => (
                <div key={live.id} className="flex items-center">
                  <div className="relative w-16 h-16 rounded overflow-hidden mr-4 flex-shrink-0">
                    <img src={live.thumbnail} alt={live.title} className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-1 py-0.5 flex items-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse"></div>
                      LIVE
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{live.title}</p>
                    <p className="text-sm text-gray-500">{live.streamer}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{live.startTime} ({live.duration})</span>
                      <Users className="h-3 w-3 ml-2 mr-1" />
                      <span>{live.viewers.toLocaleString()}명 시청 중</span>
                    </div>
                  </div>
                  <Button size="sm">
                    모니터링
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/dashboard/admin/live">
                모든 방송 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        {/* 최근 가입 판매자/도매상 */}
        <Card>
          <CardHeader>
            <CardTitle>최근 가입 판매자/도매상</CardTitle>
            <CardDescription>승인 대기 및 최근 승인</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSellers.map((seller) => (
                <div key={seller.id} className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img src={seller.image} alt={seller.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <p className="font-medium">{seller.name}</p>
                      <Badge variant="outline" className="ml-2">
                        {seller.type === 'seller' ? '판매자' : '도매상'}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{seller.joinDate} 가입</span>
                      <Badge variant="outline" className="ml-2 text-xs" color={seller.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}>
                        {seller.status === 'pending' ? '승인 대기' : '승인됨'}
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" variant={seller.status === 'pending' ? 'default' : 'outline'}>
                    {seller.status === 'pending' ? '승인' : '상세'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/dashboard/admin/users">
                모든 회원 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default AdminDashboard

