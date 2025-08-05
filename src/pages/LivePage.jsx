import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Users, Search, Calendar, Filter } from 'lucide-react'
import heroImage from '../assets/hero-image.jpg'
import liveStreamingImage from '../assets/live-streaming.png'
import liveCommerceImage from '../assets/live-commerce.jpg'

function LivePage() {
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
    },
    {
      id: 4,
      title: "💄 여름 메이크업 트렌드",
      streamer: "뷰티 전문가 최지현",
      viewers: 1567,
      thumbnail: liveStreamingImage,
      category: "뷰티",
      isLive: true
    },
    {
      id: 5,
      title: "🏋️ 홈트레이닝 기구 추천",
      streamer: "피트니스 트레이너 강현우",
      viewers: 789,
      thumbnail: heroImage,
      category: "스포츠/레저",
      isLive: true
    },
    {
      id: 6,
      title: "🎮 신작 게임 플레이",
      streamer: "게임 스트리머 이진호",
      viewers: 2345,
      thumbnail: liveCommerceImage,
      category: "게임/취미",
      isLive: true
    }
  ]

  // 예정된 라이브 방송 데이터
  const upcomingStreams = [
    {
      id: 7,
      title: "🌱 친환경 생활용품 소개",
      streamer: "에코 라이프 전문가 박소영",
      scheduledTime: "오늘 18:00",
      thumbnail: heroImage,
      category: "생활용품"
    },
    {
      id: 8,
      title: "📚 베스트셀러 북 리뷰",
      streamer: "북 큐레이터 김태희",
      scheduledTime: "오늘 20:00",
      thumbnail: liveStreamingImage,
      category: "도서/음반"
    },
    {
      id: 9,
      title: "🍷 와인 테이스팅 가이드",
      streamer: "소믈리에 정민수",
      scheduledTime: "내일 19:00",
      thumbnail: liveCommerceImage,
      category: "식품"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            라이브 방송
          </h1>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            실시간으로 진행되는 라이브 방송을 통해 상품을 생생하게 확인하고 판매자와 직접 소통하세요.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="라이브 방송 검색..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                필터
              </Button>
              <Button variant="outline" size="sm">
                카테고리
              </Button>
              <Button variant="outline" size="sm">
                정렬
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="live" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="live">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  현재 방송중
                </div>
              </TabsTrigger>
              <TabsTrigger value="upcoming">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  예정된 방송
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="live" className="mt-6">
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
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingStreams.map((stream) => (
                  <Card key={stream.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={stream.thumbnail} 
                        alt={stream.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-purple-500 hover:bg-purple-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {stream.scheduledTime}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2">{stream.category}</Badge>
                      <h4 className="font-semibold text-lg mb-2 line-clamp-2">{stream.title}</h4>
                      <p className="text-gray-600 text-sm">{stream.streamer}</p>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        알림 받기
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

export default LivePage

