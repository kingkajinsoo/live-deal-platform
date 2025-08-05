import { Link } from 'react-router-dom'
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  AlertCircle, 
  ArrowRight,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Users,
  Truck,
  BarChart2
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

function PartnersDashboard() {
  // 재고 현황 데이터
  const inventoryData = {
    total: 1250,
    inStock: 980,
    lowStock: 180,
    outOfStock: 90,
    pendingDelivery: 150
  }
  
  // 판매 현황 데이터
  const salesData = {
    today: 450000,
    week: 3250000,
    month: 12500000,
    comparedToLastPeriod: {
      today: 12, // 퍼센트
      week: 8, // 퍼센트
      month: -3 // 퍼센트
    }
  }
  
  // 정산 예정 금액 데이터
  const settlementData = {
    pending: 8750000,
    nextSettlement: '2023-08-15',
    lastSettlement: {
      date: '2023-07-15',
      amount: 7650000
    }
  }
  
  // 재고 부족 상품 데이터
  const lowStockProducts = [
    {
      id: 1,
      name: "프리미엄 겨울 코트",
      sku: "WC-1001",
      currentStock: 8,
      minStock: 20,
      image: heroImage
    },
    {
      id: 2,
      name: "무선 이어폰 Pro",
      sku: "EP-2001",
      currentStock: 5,
      minStock: 15,
      image: liveStreamingImage
    },
    {
      id: 3,
      name: "스마트 주방 저울",
      sku: "KS-3001",
      currentStock: 3,
      minStock: 10,
      image: liveCommerceImage
    }
  ]
  
  // 인기 판매 상품 데이터
  const popularProducts = [
    {
      id: 1,
      name: "프리미엄 겨울 코트",
      sku: "WC-1001",
      quantity: 45,
      totalSales: 4005000,
      image: heroImage
    },
    {
      id: 2,
      name: "무선 이어폰 Pro",
      sku: "EP-2001",
      quantity: 32,
      totalSales: 4128000,
      image: liveStreamingImage
    },
    {
      id: 3,
      name: "스마트 주방 저울",
      sku: "KS-3001",
      quantity: 28,
      totalSales: 1260000,
      image: liveCommerceImage
    }
  ]
  
  // 판매자별 판매 현황 데이터
  const sellerPerformance = [
    {
      id: 1,
      name: "패션 큐레이터 김민지",
      products: 12,
      sales: 3450000,
      period: "지난 30일"
    },
    {
      id: 2,
      name: "테크 리뷰어 박준호",
      products: 8,
      sales: 2980000,
      period: "지난 30일"
    },
    {
      id: 3,
      name: "요리 전문가 이수진",
      products: 10,
      sales: 1850000,
      period: "지난 30일"
    }
  ]
  
  // 입고 예정 상품 데이터
  const incomingProducts = [
    {
      id: 1,
      name: "프리미엄 겨울 코트",
      sku: "WC-1001",
      quantity: 50,
      expectedArrival: "2023-08-10",
      status: "처리중"
    },
    {
      id: 2,
      name: "무선 이어폰 Pro",
      sku: "EP-2001",
      quantity: 30,
      expectedArrival: "2023-08-12",
      status: "처리중"
    },
    {
      id: 3,
      name: "스마트 주방 저울",
      sku: "KS-3001",
      quantity: 40,
      expectedArrival: "2023-08-15",
      status: "확인됨"
    }
  ]

  return (
    <DashboardLayout
      title="파트너스 대시보드"
      userName="박파트너스"
      userRole="파트너스"
      navItems={[
        { label: "대시보드", icon: <BarChart3 className="w-4 h-4" />, active: true },
        { label: "상품 관리", icon: <Package className="w-4 h-4" /> },
        { label: "입고/재고 관리", icon: <Truck className="w-4 h-4" /> },
        { label: "판매/정산 관리", icon: <BarChart2 className="w-4 h-4" /> },
        { label: "계정 설정", icon: <Users className="w-4 h-4" /> }
      ]}
    >
      {/* 재고 현황 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">총 재고</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Package className="w-8 h-8 text-blue-500 bg-blue-100 p-1.5 rounded-full mr-2" />
              <div className="text-2xl font-bold">{inventoryData.total}개</div>
            </div>
            <p className="text-xs text-gray-500 mt-2">전체 상품</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">정상 재고</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Package className="w-8 h-8 text-green-500 bg-green-100 p-1.5 rounded-full mr-2" />
              <div className="text-2xl font-bold">{inventoryData.inStock}개</div>
            </div>
            <p className="text-xs text-gray-500 mt-2">충분한 재고</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">부족 재고</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertCircle className="w-8 h-8 text-yellow-500 bg-yellow-100 p-1.5 rounded-full mr-2" />
              <div className="text-2xl font-bold">{inventoryData.lowStock}개</div>
            </div>
            <p className="text-xs text-gray-500 mt-2">재고 부족</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">품절</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertCircle className="w-8 h-8 text-red-500 bg-red-100 p-1.5 rounded-full mr-2" />
              <div className="text-2xl font-bold">{inventoryData.outOfStock}개</div>
            </div>
            <p className="text-xs text-gray-500 mt-2">재고 없음</p>
          </CardContent>
        </Card>
      </div>
      
      {/* 판매 현황 및 정산 예정 금액 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>판매 현황</CardTitle>
            <CardDescription>일별/주별/월별 판매 현황</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="today">
              <TabsList className="mb-4">
                <TabsTrigger value="today">오늘</TabsTrigger>
                <TabsTrigger value="week">이번 주</TabsTrigger>
                <TabsTrigger value="month">이번 달</TabsTrigger>
              </TabsList>
              
              <TabsContent value="today">
                <div className="text-3xl font-bold mb-4">
                  {salesData.today.toLocaleString()}원
                </div>
                <div className={`flex items-center text-sm ${salesData.comparedToLastPeriod.today >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {salesData.comparedToLastPeriod.today >= 0 ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  <span>{Math.abs(salesData.comparedToLastPeriod.today)}% 전일 대비</span>
                </div>
              </TabsContent>
              
              <TabsContent value="week">
                <div className="text-3xl font-bold mb-4">
                  {salesData.week.toLocaleString()}원
                </div>
                <div className={`flex items-center text-sm ${salesData.comparedToLastPeriod.week >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {salesData.comparedToLastPeriod.week >= 0 ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  <span>{Math.abs(salesData.comparedToLastPeriod.week)}% 전주 대비</span>
                </div>
              </TabsContent>
              
              <TabsContent value="month">
                <div className="text-3xl font-bold mb-4">
                  {salesData.month.toLocaleString()}원
                </div>
                <div className={`flex items-center text-sm ${salesData.comparedToLastPeriod.month >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {salesData.comparedToLastPeriod.month >= 0 ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  <span>{Math.abs(salesData.comparedToLastPeriod.month)}% 전월 대비</span>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="border-t border-gray-100 pt-4">
            <Button variant="outline" className="w-full">
              <Link to="#" className="flex items-center justify-center w-full">
                판매 통계 상세 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
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
      </div>
      
      {/* 재고 부족 상품 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>재고 부족 상품</CardTitle>
          <CardDescription>최소 재고 수량보다 적은 상품</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left font-medium text-gray-500 pb-3">상품</th>
                  <th className="text-left font-medium text-gray-500 pb-3">SKU</th>
                  <th className="text-center font-medium text-gray-500 pb-3">현재 재고</th>
                  <th className="text-center font-medium text-gray-500 pb-3">최소 재고</th>
                  <th className="text-right font-medium text-gray-500 pb-3">상태</th>
                </tr>
              </thead>
              <tbody>
                {lowStockProducts.map((product) => (
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
                    <td>{product.sku}</td>
                    <td className="text-center text-red-500 font-medium">{product.currentStock}개</td>
                    <td className="text-center">{product.minStock}개</td>
                    <td className="text-right">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        입고 신청
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* 인기 판매 상품 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>인기 판매 상품</CardTitle>
          <CardDescription>지난 30일간 가장 많이 판매된 상품</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularProducts.map((product, index) => (
              <div key={product.id} className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-bold mr-4">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-sm text-gray-500">SKU: {product.sku}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">{product.quantity}개</span>
                    <span className="font-bold">{product.totalSales.toLocaleString()}원</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* 판매자별 판매 현황 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>라이버별 판매 현황</CardTitle>
          <CardDescription>내 상품을 판매하는 라이버</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sellerPerformance.map((seller) => (
              <Card key={seller.id} className="border-none shadow-none bg-gray-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{seller.name}</CardTitle>
                  <CardDescription>{seller.products}개 상품 판매 중</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold mb-1">
                    {seller.sales.toLocaleString()}원
                  </div>
                  <p className="text-sm text-gray-500">{seller.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-gray-100 pt-4">
          <Button variant="outline" className="w-full">
            <Link to="#" className="flex items-center justify-center w-full">
              모든 라이버 보기
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
      
      {/* 입고 예정 상품 */}
      <Card>
        <CardHeader>
          <CardTitle>입고 예정 상품</CardTitle>
          <CardDescription>처리 중인 입고 신청</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left font-medium text-gray-500 pb-3">상품</th>
                  <th className="text-left font-medium text-gray-500 pb-3">SKU</th>
                  <th className="text-center font-medium text-gray-500 pb-3">수량</th>
                  <th className="text-center font-medium text-gray-500 pb-3">예상 입고일</th>
                  <th className="text-right font-medium text-gray-500 pb-3">상태</th>
                </tr>
              </thead>
              <tbody>
                {incomingProducts.map((product) => (
                  <tr key={product.id} className="border-b border-gray-100">
                    <td className="py-3">
                      <div className="font-medium">{product.name}</div>
                    </td>
                    <td>{product.sku}</td>
                    <td className="text-center">{product.quantity}개</td>
                    <td className="text-center">{product.expectedArrival}</td>
                    <td className="text-right">
                      <Badge className={product.status === "확인됨" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                        {product.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}

export default PartnersDashboard

