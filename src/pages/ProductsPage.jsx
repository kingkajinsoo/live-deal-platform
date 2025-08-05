import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Slider } from '@/components/ui/slider.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Label } from '@/components/ui/label.jsx'
import { 
  Search, 
  Filter, 
  Star, 
  Heart, 
  ShoppingCart,
  ChevronDown
} from 'lucide-react'
import heroImage from '../assets/hero-image.jpg'
import liveStreamingImage from '../assets/live-streaming.png'
import liveCommerceImage from '../assets/live-commerce.jpg'

function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 500000])
  
  // 상품 데이터
  const products = [
    {
      id: 1,
      name: "프리미엄 겨울 코트",
      price: 89000,
      originalPrice: 178000,
      discount: 50,
      rating: 4.8,
      reviews: 324,
      image: heroImage,
      category: "패션"
    },
    {
      id: 2,
      name: "무선 이어폰 Pro",
      price: 129000,
      originalPrice: 159000,
      discount: 19,
      rating: 4.9,
      reviews: 567,
      image: liveStreamingImage,
      category: "전자제품"
    },
    {
      id: 3,
      name: "스마트 주방 저울",
      price: 45000,
      originalPrice: 65000,
      discount: 31,
      rating: 4.7,
      reviews: 189,
      image: liveCommerceImage,
      category: "주방용품"
    },
    {
      id: 4,
      name: "울 캐시미어 니트",
      price: 76000,
      originalPrice: 95000,
      discount: 20,
      rating: 4.6,
      reviews: 142,
      image: heroImage,
      category: "패션"
    },
    {
      id: 5,
      name: "스마트 워치",
      price: 215000,
      originalPrice: 250000,
      discount: 14,
      rating: 4.8,
      reviews: 387,
      image: liveStreamingImage,
      category: "전자제품"
    },
    {
      id: 6,
      name: "프리미엄 커피 머신",
      price: 320000,
      originalPrice: 400000,
      discount: 20,
      rating: 4.9,
      reviews: 215,
      image: liveCommerceImage,
      category: "주방용품"
    },
    {
      id: 7,
      name: "가죽 크로스백",
      price: 68000,
      originalPrice: 85000,
      discount: 20,
      rating: 4.7,
      reviews: 178,
      image: heroImage,
      category: "패션"
    },
    {
      id: 8,
      name: "블루투스 스피커",
      price: 55000,
      originalPrice: 70000,
      discount: 21,
      rating: 4.5,
      reviews: 231,
      image: liveStreamingImage,
      category: "전자제품"
    },
    {
      id: 9,
      name: "에어프라이어",
      price: 89000,
      originalPrice: 110000,
      discount: 19,
      rating: 4.8,
      reviews: 342,
      image: liveCommerceImage,
      category: "주방용품"
    }
  ]

  // 카테고리 목록
  const categories = [
    { id: "fashion", label: "패션" },
    { id: "electronics", label: "전자제품" },
    { id: "kitchen", label: "주방용품" },
    { id: "beauty", label: "뷰티" },
    { id: "sports", label: "스포츠/레저" },
    { id: "books", label: "도서/음반" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            상품 둘러보기
          </h1>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            다양한 카테고리의 상품들을 살펴보고 특별한 할인 혜택을 놓치지 마세요.
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
                placeholder="상품 검색..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                필터
              </Button>
              <Button variant="outline" size="sm">
                인기순
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                할인율
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-4">필터</h3>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-sm mb-3">가격 범위</h4>
                  <Slider
                    defaultValue={[0, 500000]}
                    max={500000}
                    step={10000}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{priceRange[0].toLocaleString()}원</span>
                    <span>{priceRange[1].toLocaleString()}원</span>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-sm mb-3">카테고리</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox id={category.id} />
                        <Label htmlFor={category.id} className="ml-2 text-sm">
                          {category.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Rating */}
                <div className="mb-6">
                  <h4 className="font-medium text-sm mb-3">평점</h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map(rating => (
                      <div key={rating} className="flex items-center">
                        <Checkbox id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`} className="ml-2 text-sm flex items-center">
                          {Array(rating).fill(0).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          {Array(5-rating).fill(0).map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-gray-300" />
                          ))}
                          <span className="ml-1">이상</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Discount */}
                <div>
                  <h4 className="font-medium text-sm mb-3">할인</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox id="discount-50" />
                      <Label htmlFor="discount-50" className="ml-2 text-sm">50% 이상</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="discount-30" />
                      <Label htmlFor="discount-30" className="ml-2 text-sm">30% 이상</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox id="discount-10" />
                      <Label htmlFor="discount-10" className="ml-2 text-sm">10% 이상</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
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
                      <Badge variant="secondary" className="mb-2">{product.category}</Badge>
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
              
              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>이전</Button>
                  <Button variant="outline" size="sm" className="bg-purple-600 text-white">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">다음</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage

