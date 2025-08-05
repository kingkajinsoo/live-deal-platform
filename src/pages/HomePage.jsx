import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  Play, 
  ShoppingCart, 
  Users, 
  Calendar, 
  Star, 
  Heart, 
  Search, 
  Menu, 
  User, 
  LayoutDashboard, 
  Package, 
  BarChart3, 
  Video, 
  DollarSign, 
  TrendingUp, 
  Award, 
  Zap,
  BarChart,
  Truck,
  PieChart,
  Layers
} from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-image.jpg'
import liveStreamingImage from '../assets/live-streaming.png'
import liveCommerceImage from '../assets/live-commerce.jpg'
import liverImage1 from '../assets/liver/liver-image1.jpg'
import liverImage2 from '../assets/liver/liver-image2.jpg'
import partnersImage1 from '../assets/partners/partners-image1.png'
import partnersImage2 from '../assets/partners/partners-image2.png'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 현재 진행중인 라이브 방송 데이터
  const liveStreams = [
    {
      id: 1,
      title: "🔥 겨울 패션 특가! 코트 50% 할인",
      streamer: "패션 큐레이터 김민지",
      viewers: 1234,
      thumbnail: liveStreamingImage,
      category: "패션",
      isLive: true
    },
    {
      id: 2,
      title: "📱 최신 스마트폰 언박싱 & 리뷰",
      streamer: "테크 리뷰어 박준호",
      viewers: 856,
      thumbnail: liveCommerceImage,
      category: "전자제품",
      isLive: true
    },
    {
      id: 3,
      title: "🍳 주방용품 실전 테스트",
      streamer: "요리 전문가 이수진",
      viewers: 432,
      thumbnail: heroImage,
      category: "생활용품",
      isLive: true
    }
  ]

  // 인기 상품 데이터
  const popularProducts = [
    {
      id: 1,
      name: "프리미엄 겨울 코트",
      price: 89000,
      originalPrice: 178000,
      discount: 50,
      rating: 4.8,
      reviews: 324,
      image: heroImage
    },
    {
      id: 2,
      name: "무선 이어폰 Pro",
      price: 129000,
      originalPrice: 159000,
      discount: 19,
      rating: 4.9,
      reviews: 567,
      image: liveStreamingImage
    },
    {
      id: 3,
      name: "스마트 주방 저울",
      price: 45000,
      originalPrice: 65000,
      discount: 31,
      rating: 4.7,
      reviews: 189,
      image: liveCommerceImage
    }
  ]

  // 라이버 성공 사례
  const liverSuccessCases = [
    {
      name: "김민지",
      category: "패션",
      followers: "25,000+",
      monthlyRevenue: "1,200만원+",
      quote: "라이브 딜을 통해 제 패션 감각을 많은 분들과 나눌 수 있게 되었어요. 이제는 전업 라이버로 활동하며 월 1,000만원 이상의 수익을 올리고 있습니다."
    },
    {
      name: "박준호",
      category: "테크",
      followers: "18,000+",
      monthlyRevenue: "950만원+",
      quote: "전자제품 리뷰어로 시작해 이제는 라이브 방송을 통해 제품을 판매하고 있습니다. 시청자들과 실시간으로 소통하며 신뢰를 쌓는 것이 가장 큰 장점이에요."
    }
  ]

  // 파트너스 성공 사례
  const partnersSuccessCases = [
    {
      name: "모던홈",
      category: "홈리빙",
      salesIncrease: "215%",
      quote: "라이브 딜 파트너스로 참여한 후 매출이 2배 이상 증가했습니다. 다양한 라이버들이 우리 제품을 소개해주어 브랜드 인지도도 크게 향상되었습니다."
    },
    {
      name: "테크노바",
      category: "전자기기",
      salesIncrease: "180%",
      quote: "재고 부담 없이 신제품을 소개할 수 있어 마케팅 비용이 크게 절감되었습니다. 라이브 방송을 통한 실시간 피드백도 제품 개선에 큰 도움이 됩니다."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              라이브로 만나는
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                새로운 쇼핑 경험
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              실시간 방송을 통해 상품을 직접 확인하고, 판매자와 소통하며, 특별한 할인 혜택을 받아보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Play className="mr-2 h-5 w-5" />
                <Link to="/live">라이브 방송 보기</Link>
              </Button>
              <Button size="lg" variant="outline">
                <ShoppingCart className="mr-2 h-5 w-5" />
                <Link to="/products">상품 둘러보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Streams Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">🔴 현재 진행중인 라이브</h3>
            <Button variant="outline">
              <Link to="/live">전체 보기</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveStreams.map((stream) => (
              <Card key={stream.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={stream.thumbnail} 
                    alt={stream.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-500">
                    <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                    LIVE
                  </Badge>
                  <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    <Users className="inline w-3 h-3 mr-1" />
                    {stream.viewers.toLocaleString()}
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{stream.category}</Badge>
                  <h4 className="font-semibold text-lg mb-2 line-clamp-2">{stream.title}</h4>
                  <p className="text-gray-600 text-sm">{stream.streamer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">⭐ 인기 상품</h3>
            <Button variant="outline">
              <Link to="/products">전체 보기</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-500">
                    {product.discount}% OFF
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h4>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-purple-600">
                        {product.price.toLocaleString()}원
                      </span>
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        {product.originalPrice.toLocaleString()}원
                      </span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-purple-100">활성 판매자</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-purple-100">등록 상품</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-purple-100">만족한 고객</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-100">라이브 방송</div>
            </div>
          </div>
        </div>
      </section>

      {/* Liver Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">라이브로 수익을 창출하세요</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              라이브 딜의 라이버가 되어 나만의 쇼핑 채널을 운영해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-100 rounded-full z-0"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <img 
                  src={liverImage1} 
                  alt="라이버 이미지" 
                  className="rounded-lg shadow-lg transform translate-y-6"
                />
                <img 
                  src={liverImage2} 
                  alt="라이브 방송 이미지" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">라이버의 특별한 혜택</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">초기 투자 없이 시작 가능</h5>
                    <p className="text-gray-600">스마트폰만 있다면 누구나 시작할 수 있어요. 전문 장비가 필요 없습니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                    <Video className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">전문 스튜디오 지원</h5>
                    <p className="text-gray-600">인기 라이버에게는 전문 스튜디오와 장비를 무상으로 지원합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">실시간 시청자 소통</h5>
                    <p className="text-gray-600">시청자와 실시간으로 소통하며 높은 전환율을 경험해보세요.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">판매 수수료 수익 모델</h5>
                    <p className="text-gray-600">판매 실적에 따른 수수료로 안정적인 수익을 창출할 수 있습니다.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                  <Link to="/dashboard/seller">라이버 등록하기</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-center mb-8">성공한 라이버 스토리</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {liverSuccessCases.map((liver, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{liver.name}</CardTitle>
                        <CardDescription>{liver.category} 전문 라이버</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        팔로워 {liver.followers}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm font-medium">월 평균 수익: {liver.monthlyRevenue}</span>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-600 border-l-4 border-purple-200 pl-4">
                      "{liver.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">상품의 가치를 높이는 새로운 판로</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              라이브 딜 파트너스가 되어 라이브 커머스의 힘을 경험하세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">파트너스의 특별한 혜택</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">다양한 라이버를 통한 상품 홍보</h5>
                    <p className="text-gray-600">다양한 분야의 전문 라이버들이 귀사의 상품을 홍보해드립니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">재고 부담 감소</h5>
                    <p className="text-gray-600">실시간 판매로 재고 회전율을 높이고 재고 부담을 줄일 수 있습니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">브랜드 인지도 향상</h5>
                    <p className="text-gray-600">라이브 방송을 통해 브랜드 스토리를 효과적으로 전달할 수 있습니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold">데이터 기반 마케팅 인사이트</h5>
                    <p className="text-gray-600">실시간 시청자 반응과 판매 데이터를 통해 마케팅 전략을 개선할 수 있습니다.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" asChild>
                  <Link to="/dashboard/supplier">파트너스 등록하기</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-100 rounded-full z-0"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <img 
                  src={partnersImage1} 
                  alt="파트너스 이미지" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src={partnersImage2} 
                  alt="파트너스 상품 이미지" 
                  className="rounded-lg shadow-lg transform translate-y-6"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8">
            <h4 className="text-2xl font-bold text-center mb-8">성공한 파트너스 스토리</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnersSuccessCases.map((partner, index) => (
                <Card key={index} className="bg-gray-50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{partner.name}</CardTitle>
                        <CardDescription>{partner.category} 브랜드</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        매출 증가 {partner.salesIncrease}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="italic text-gray-600 border-l-4 border-blue-200 pl-4">
                      "{partner.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

