import { Link } from 'react-router-dom'
import { 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Calendar, 
  Clock, 
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Eye,
  DollarSign,
  BarChart3,
  Package
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

function LiverDashboard() {
  // 오늘의 판매 현황 데이터
  const todaySales = {
    orders: 24,
    revenue: 1250000,
    viewers: 1876,
    orderRate: 3.2,
    comparedToYesterday: {
      orders: 15, // 퍼센트
      revenue: -5, // 퍼센트
      viewers: 8 // 퍼센트
    }
  }
  
  // 정산 예정 금액 데이터
  const settlementData = {
    pending: 2450000,
    nextSettlement: '2023-08-15',
    lastSettlement: {
      date: '2023-07-15',
      amount: 1850000
    }
  }
  
  // 예정된 라이브 방송 데이터
  const upcomingLives = [
    {
      id: 1,
      title: "🔥 겨울 패션 특가! 코트 50% 할인",
      scheduledAt: "오늘 18:00",
      category: "패션",
      products: 12,
      thumbnail: heroImage
    },
    {
      id: 2,
      title: "📱 최신 스마트폰 언박싱 & 리뷰",
      scheduledAt: "내일 14:00",
      category: "전자제품",
      products: 5,
      thumbnail: liveStreamingImage
    }
  ]
  
  // 최근 판매 상품 데이터
  const recentSoldProducts = [
    {
      id: 1,
      name: "프리미엄 겨울 코트",
      price: 89000,
      quantity: 15,
      totalSales: 1335000,
      image: heroImage
    },
    {
      id: 2,
      name: "무선 이어폰 Pro",
      price: 129000,
      quantity: 8,
      totalSales: 1032000,
      image: liveStreamingImage
    },
    {
      id: 3,
      name: "스마트 주방 저울",
      price: 45000,
      quantity: 12,
      totalSales: 540000,
      image: liveCommerceImage
    }
  ]
  
  // 최근 라이브 방송 성과 데이터
  const recentLivePerformance = [
    {
      id: 1,
      title: "여름 패션 특가전",
      date: "2023-07-28",
      duration: "1시간 30분",
      viewers: 1245,
      orders: 32,
      sales: 1560000
    },
    {
      id: 2,
      title: "신상 스마트폰 언박싱",
      date: "2023-07-25",
      duration: "1시간 15분",
      viewers: 1876,
      orders: 24,
      sales: 2340000
    },
    {
      id: 3,
      title: "홈 인테리어 아이템 소개",
      date: "2023-07-20",
      duration: "1시간 45분",
      viewers: 980,
      orders: 18,
      sales: 890000
    }
  ]
  
  // 공지사항 데이터
  const notices = [
    {
      id: 1,
      title: "8월 라이브 커머스 라이버 이벤트 안내",
      category: "이벤트",
      date: "2023-08-01"
    },
    {
      id: 2,
      title: "라이버 수수료 정책 변경 안내",
      category: "정책",
      date: "2023-07-25"
    },
    {
      id: 3,
      title: "라이브 방송 화질 개선 업데이트 안내",
      category: "시스템",
      date: "2023-07-20"
    }
  ]

  return (
    <DashboardLayout userType="seller">
      {/* 오늘의 판매 현황 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">오늘의 주문</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingCart className="w-8 h-8 text-blue-500 bg-blue-100 p-1.5 rounded-full mr-2" />
                <div className="text-2xl font-bold">{todaySales.orders}건</div>
              </div>
              <div className={`flex items-center ${todaySales.comparedToYesterday.orders >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {todaySales.comparedToYesterday.orders >= 0 ? (
                  <ArrowUp className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDown className="w-4 h-4 mr-1" />
                )}
                <span>{Math.abs(todaySales.comparedToYesterday.orders)}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">어제 대비</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">오늘의 매출</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <DollarSign className="w-8 h-8 text-green-500 bg-green-100 p-1.5 rounded-full mr-2" />
                <div className="text-2xl font-bold">{todaySales.revenue.toLocaleString()}원</div>
              </div>
              <div className={`flex items-center ${todaySales.comparedToYesterday.revenue >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {todaySales.comparedToYesterday.revenue >= 0 ? (
                  <ArrowUp className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDown className="w-4 h-4 mr-1" />
                )}
                <span>{Math.abs(todaySales.comparedToYesterday.revenue)}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">어제 대비</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">오늘의 시청자</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Eye className="w-8 h-8 text-purple-500 bg-purple-100 p-1.5 rounded-full mr-2" />
                <div className="text-2xl font-bold">{todaySales.viewers.toLocaleString()}명</div>
              </div>
              <div className={`flex items-center ${todaySales.comparedToYesterday.viewers >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {todaySales.comparedToYesterday.viewers >= 0 ? (
                  <ArrowUp className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDown className="w-4 h-4 mr-1" />
                )}
                <span>{Math.abs(todaySales.comparedToYesterday.viewers)}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">어제 대비</p>
          </CardContent>
        </Card>
      </div>
      
      {/* 정산 정보 및 예정된 라이브 방송 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>정산 예정 금액</CardTitle>
            <CardDescription>다음 정산일: {settlementData.nextSettlement}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-4">
              {settlementData.pending.toLocaleString()}원
            </div>
            <p className="text-sm text-gray-500">정산 예정</p>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">최근 정산</p>
                  <p className="font-medium">{settlementData.lastSettlement.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{settlementData.lastSettlement.amount.toLocaleString()}원</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-100 pt-4">
            <Button variant="outline" className="w-full">
              <Link to="#" className="flex items-center justify-center w-full">
                정산 내역 상세 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>예정된 라이브 방송</CardTitle>
            <CardDescription>다가오는 방송 일정</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingLives.map((live) => (
                <div key={live.id} className="flex items-center gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <img 
                      src={live.thumbnail} 
                      alt={live.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-500">
                      {live.category}
                    </Badge>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium line-clamp-1">{live.title}</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{live.scheduledAt}</span>
                      <Package className="w-3 h-3 ml-3 mr-1" />
                      <span>{live.products}개 상품</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">준비</Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-100 pt-4">
            <Button variant="outline" className="w-full">
              <Link to="#" className="flex items-center justify-center w-full">
                모든 방송 일정 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* 최근 판매 상품 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>최근 판매 상품</CardTitle>
          <CardDescription>지난 30일간 판매된 상품</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left font-medium text-gray-500 pb-3">상품</th>
                  <th className="text-right font-medium text-gray-500 pb-3">판매가</th>
                  <th className="text-right font-medium text-gray-500 pb-3">판매수량</th>
                  <th className="text-right font-medium text-gray-500 pb-3">총 매출</th>
                </tr>
              </thead>
              <tbody>
                {recentSoldProducts.map((product) => (
                  <tr key={product.id} className="border-b border-gray-100">
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 mr-3 flex-shrink-0">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="text-right">{product.price.toLocaleString()}원</td>
                    <td className="text-right">{product.quantity}개</td>
                    <td className="text-right font-medium">{product.totalSales.toLocaleString()}원</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* 최근 라이브 방송 성과 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>최근 라이브 방송</CardTitle>
          <CardDescription>지난 방송 성과</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentLivePerformance.map((live) => (
              <Card key={live.id} className="border-none shadow-none bg-gray-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{live.title}</CardTitle>
                  <CardDescription>{live.date}</CardDescription>
                  <p className="text-xs text-gray-500">방송 시간: {live.duration}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-xs text-gray-500">시청자</p>
                      <p className="font-bold">{live.viewers.toLocaleString()}명</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">주문</p>
                      <p className="font-bold">{live.orders}건</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">매출</p>
                      <p className="font-bold">{(live.sales / 10000).toFixed(0)}만원</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* 공지사항 */}
      <Card>
        <CardHeader>
          <CardTitle>공지사항</CardTitle>
          <CardDescription>플랫폼 정책 및 이벤트 안내</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notices.map((notice) => (
              <div key={notice.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center mb-1">
                  <Badge variant="outline" className="mr-2">
                    {notice.category}
                  </Badge>
                  <p className="text-sm text-gray-500">{notice.date}</p>
                </div>
                <h4 className="font-medium">{notice.title}</h4>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-gray-100 pt-4">
          <Button variant="outline" className="w-full">
            <Link to="#" className="flex items-center justify-center w-full">
              모든 공지사항 보기
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </DashboardLayout>
  )
}

export default LiverDashboard

