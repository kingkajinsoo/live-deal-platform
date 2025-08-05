import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Search, 
  Users, 
  Star, 
  TrendingUp,
  ShoppingBag,
  Calendar,
  Award
} from 'lucide-react'
import heroImage from '../assets/hero-image.jpg'
import liveStreamingImage from '../assets/live-streaming.png'
import liveCommerceImage from '../assets/live-commerce.jpg'

function SellersPage() {
  // 인기 라이버 데이터
  const popularLivers = [
    {
      id: 1,
      name: "패션 큐레이터 김민지",
      followers: 12500,
      rating: 4.9,
      reviews: 324,
      image: heroImage,
      category: "패션",
      description: "10년 경력의 패션 MD 출신으로 트렌디한 스타일링을 제안합니다.",
      badges: ["인증 라이버", "베스트 셀러"]
    },
    {
      id: 2,
      name: "테크 리뷰어 박준호",
      followers: 8700,
      rating: 4.8,
      reviews: 256,
      image: liveStreamingImage,
      category: "전자제품",
      description: "IT 전문 기자 출신으로 정확하고 전문적인 리뷰를 제공합니다.",
      badges: ["인증 라이버", "전문가"]
    },
    {
      id: 3,
      name: "요리 전문가 이수진",
      followers: 15300,
      rating: 4.9,
      reviews: 412,
      image: liveCommerceImage,
      category: "주방용품",
      description: "요리 연구가로 활동하며 실용적인 주방 용품을 소개합니다.",
      badges: ["인증 라이버", "베스트 셀러", "전문가"]
    },
    {
      id: 4,
      name: "뷰티 전문가 최지현",
      followers: 21000,
      rating: 4.7,
      reviews: 378,
      image: heroImage,
      category: "뷰티",
      description: "메이크업 아티스트로 활동하며 트렌디한 뷰티 제품을 소개합니다.",
      badges: ["인증 라이버", "인플루언서"]
    },
    {
      id: 5,
      name: "피트니스 트레이너 강현우",
      followers: 9800,
      rating: 4.8,
      reviews: 187,
      image: liveStreamingImage,
      category: "스포츠/레저",
      description: "10년 경력의 퍼스널 트레이너로 효과적인 운동 기구를 추천합니다.",
      badges: ["인증 라이버", "전문가"]
    },
    {
      id: 6,
      name: "게임 스트리머 이진호",
      followers: 32000,
      rating: 4.6,
      reviews: 523,
      image: liveCommerceImage,
      category: "게임/취미",
      description: "프로 게이머 출신으로 최신 게임 및 게이밍 기어를 소개합니다.",
      badges: ["인증 라이버", "인플루언서"]
    }
  ]

  // 신규 라이버 데이터
  const newLivers = [
    {
      id: 7,
      name: "인테리어 디자이너 정유진",
      followers: 3200,
      rating: 4.7,
      reviews: 42,
      image: heroImage,
      category: "홈/인테리어",
      description: "공간 디자이너로 활동하며 실용적인 인테리어 제품을 소개합니다.",
      badges: ["인증 라이버", "신규"]
    },
    {
      id: 8,
      name: "여행 전문가 김태우",
      followers: 4500,
      rating: 4.8,
      reviews: 67,
      image: liveStreamingImage,
      category: "여행/레저",
      description: "여행 작가로 활동하며 유용한 여행 용품을 추천합니다.",
      badges: ["인증 라이버", "신규"]
    },
    {
      id: 9,
      name: "반려동물 전문가 이하은",
      followers: 5100,
      rating: 4.9,
      reviews: 89,
      image: liveCommerceImage,
      category: "반려동물",
      description: "수의사로 활동하며 반려동물을 위한 건강한 제품을 소개합니다.",
      badges: ["인증 라이버", "전문가", "신규"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            라이버 찾기
          </h1>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            전문성과 신뢰도를 갖춘 다양한 분야의 라이버들을 만나보세요.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="라이버 검색..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm">
                카테고리
              </Button>
              <Button variant="outline" size="sm">
                인기순
              </Button>
              <Button variant="outline" size="sm">
                평점순
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="popular" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="popular">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  인기 라이버
                </div>
              </TabsTrigger>
              <TabsTrigger value="new">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  신규 라이버
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularLivers.map((liver) => (
                  <Card key={liver.id} className="hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={liver.image} 
                        alt={liver.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <Badge className="bg-purple-500 hover:bg-purple-500">{liver.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{liver.name}</h4>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{liver.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{liver.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {liver.badges.map((badge, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-100">
                            {badge === "인증 라이버" && <Award className="w-3 h-3 mr-1" />}
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-1" />
                          {liver.followers.toLocaleString()} 팔로워
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <ShoppingBag className="w-4 h-4 mr-1" />
                          {liver.reviews} 리뷰
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600">
                        팔로우
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newLivers.map((liver) => (
                  <Card key={liver.id} className="hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={liver.image} 
                        alt={liver.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <Badge className="bg-purple-500 hover:bg-purple-500">{liver.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{liver.name}</h4>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{liver.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{liver.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {liver.badges.map((badge, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-100">
                            {badge === "인증 라이버" && <Award className="w-3 h-3 mr-1" />}
                            {badge === "신규" && <Calendar className="w-3 h-3 mr-1" />}
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-1" />
                          {liver.followers.toLocaleString()} 팔로워
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <ShoppingBag className="w-4 h-4 mr-1" />
                          {liver.reviews} 리뷰
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600">
                        팔로우
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Become a Liver */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">라이버로 등록하고 수익을 창출하세요</h2>
            <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
              초기 투자 없이 라이브 커머스를 시작하고, 자신만의 팬층을 구축하며 안정적인 수익을 얻을 수 있습니다.
            </p>
            <Button size="lg" variant="secondary">
              라이버 등록하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SellersPage

