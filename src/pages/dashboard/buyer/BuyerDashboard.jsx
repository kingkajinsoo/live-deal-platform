import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ShoppingCart, 
  Package, 
  Truck, 
  CheckCircle, 
  Calendar, 
  Clock, 
  Heart, 
  Star,
  ArrowRight,
  TrendingUp
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

function BuyerDashboard() {
  // 주문 현황 데이터
  const orderStatusData = {
    total: 12,
    processing: 2,
    shipping: 3,
    delivered: 7
  }
  
  // 최근 주문 데이터
  const recentOrders = [
    {
      id: 'ORD-2023-0012',
      date: '2023-08-01',
      items: [
        { name: '프리미엄 겨울 코트', price: 89000, quantity: 1 }
      ],
      status: 'delivered',
      total: 89000
    },
    {
      id: 'ORD-2023-0011',
      date: '2023-07-28',
      items: [
        { name: '무선 이어폰 Pro', price: 129000, quantity: 1 },
        { name: '보호 케이스', price: 15000, quantity: 1 }
      ],
      status: 'shipping',
      total: 144000
    },
    {
      id: 'ORD-2023-0010',
      date: '2023-07-25',
      items: [
        { name: '스마트 주방 저울', price: 45000, quantity: 1 }
      ],
      status: 'delivered',
      total: 45000
    }
  ]
  
  // 예정된 라이브 방송 데이터
  const upcomingLives = [
    {
      id: 1,
      title: '🌱 친환경 생활용품 소개',
      streamer: '에코 라이프 전문가 박소영',
      scheduledTime: '오늘 18:00',
      thumbnail: heroImage,
      category: '생활용품'
    },
    {
      id: 2,
      title: '📚 베스트셀러 북 리뷰',
      streamer: '북 큐레이터 김태희',
      scheduledTime: '오늘 20:00',
      thumbnail: liveStreamingImage,
      category: '도서/음반'
    },
    {
      id: 3,
      title: '🍷 와인 테이스팅 가이드',
      streamer: '소믈리에 정민수',
      scheduledTime: '내일 19:00',
      thumbnail: liveCommerceImage,
      category: '식품'
    }
  ]
  
  // 찜한 상품 데이터
  const wishlistItems = [
    {
      id: 1,
      name: '프리미엄 겨울 코트',
      price: 89000,
      originalPrice: 178000,
      discount: 50,
      image: heroImage
    },
    {
      id: 2,
      name: '무선 이어폰 Pro',
      price: 129000,
      originalPrice: 159000,
      discount: 19,
      image: liveStreamingImage
    },
    {
      id: 3,
      name: '스마트 주방 저울',
      price: 45000,
      originalPrice: 65000,
      discount: 31,
      image: liveCommerceImage
    }
  ]
  
  // 팔로우 중인 판매자 데이터
  const followingSellers = [
    {
      id: 1,
      name: '패션 큐레이터 김민지',
      followers: 12500,
      rating: 4.9,
      image: heroImage,
      category: '패션'
    },
    {
      id: 2,
      name: '테크 리뷰어 박준호',
      followers: 8700,
      rating: 4.8,
      image: liveStreamingImage,
      category: '전자제품'
    },
    {
      id: 3,
      name: '요리 전문가 이수진',
      followers: 15300,
      rating: 4.9,
      image: liveCommerceImage,
      category: '주방용품'
    }
  ]
  
  // 주문 상태에 따른 아이콘 및 색상
  const orderStatusConfig = {
    processing: { icon: <ShoppingCart className="h-5 w-5" />, color: 'bg-blue-500' },
    shipping: { icon: <Truck className="h-5 w-5" />, color: 'bg-yellow-500' },
    delivered: { icon: <CheckCircle className="h-5 w-5" />, color: 'bg-green-500' }
  }
  
  return (
    <DashboardLayout userType="buyer">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* 주문 현황 요약 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">주문 현황</CardTitle>
            <CardDescription>최근 3개월 주문 상태</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <ShoppingCart className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">처리중</p>
                  <p className="font-semibold">{orderStatusData.processing}건</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <Truck className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">배송중</p>
                  <p className="font-semibold">{orderStatusData.shipping}건</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">배송완료</p>
                  <p className="font-semibold">{orderStatusData.delivered}건</p>
                </div>
              </div>
            </div>
            <Progress value={(orderStatusData.delivered / orderStatusData.total) * 100} className="h-2" />
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to="/dashboard/buyer/orders">
                주문 상세 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        {/* 예정된 라이브 방송 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">예정된 라이브 방송</CardTitle>
            <CardDescription>오늘과 내일 예정된 방송</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingLives.slice(0, 2).map((live) => (
              <div key={live.id} className="flex items-center">
                <div className="w-12 h-12 rounded overflow-hidden mr-3 flex-shrink-0">
                  <img src={live.thumbnail} alt={live.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{live.title}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{live.scheduledTime}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  알림
                </Button>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to="/dashboard/buyer/live-schedule">
                전체 일정 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        {/* 활동 요약 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">나의 활동</CardTitle>
            <CardDescription>찜한 상품 및 팔로우 현황</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Heart className="h-5 w-5 text-pink-500 mr-2" />
                  <h4 className="font-medium">찜한 상품</h4>
                </div>
                <p className="text-2xl font-bold">{wishlistItems.length}</p>
                <p className="text-xs text-gray-500">최근 30일</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-purple-500 mr-2" />
                  <h4 className="font-medium">팔로우</h4>
                </div>
                <p className="text-2xl font-bold">{followingSellers.length}</p>
                <p className="text-xs text-gray-500">판매자</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="grid grid-cols-2 gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/buyer/wishlist">찜 목록</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/buyer/following">팔로우</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* 최근 주문 내역 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>최근 주문 내역</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">주문번호</th>
                  <th className="text-left py-3 px-4 font-medium">주문일자</th>
                  <th className="text-left py-3 px-4 font-medium">상품</th>
                  <th className="text-right py-3 px-4 font-medium">금액</th>
                  <th className="text-center py-3 px-4 font-medium">상태</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <Link to={`/dashboard/buyer/orders/${order.id}`} className="text-blue-600 hover:underline">
                        {order.id}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{order.date}</td>
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
            <Link to="/dashboard/buyer/orders">
              모든 주문 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
      
      {/* 찜한 상품 및 팔로우 중인 판매자 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 찜한 상품 */}
        <Card>
          <CardHeader>
            <CardTitle>찜한 상품</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex items-center">
                  <div className="w-16 h-16 rounded overflow-hidden mr-4 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.name}</p>
                    <div className="flex items-center">
                      <p className="font-bold text-purple-600">{item.price.toLocaleString()}원</p>
                      <p className="ml-2 text-sm text-gray-500 line-through">{item.originalPrice.toLocaleString()}원</p>
                      <Badge className="ml-2 bg-red-500">{item.discount}% OFF</Badge>
                    </div>
                  </div>
                  <Button size="sm">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    구매
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/dashboard/buyer/wishlist">
                모든 찜 목록 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        {/* 팔로우 중인 판매자 */}
        <Card>
          <CardHeader>
            <CardTitle>팔로우 중인 판매자</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {followingSellers.map((seller) => (
                <div key={seller.id} className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img src={seller.image} alt={seller.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{seller.name}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Badge variant="outline" className="mr-2 text-xs">{seller.category}</Badge>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{seller.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    방송
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/dashboard/buyer/following">
                모든 팔로우 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default BuyerDashboard

