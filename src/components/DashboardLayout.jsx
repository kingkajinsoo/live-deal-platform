import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Package, 
  Calendar, 
  Settings, 
  BarChart3, 
  LogOut, 
  Menu, 
  X,
  ChevronDown,
  Bell,
  Search
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu.jsx'

function DashboardLayout({ children, userType = 'buyer' }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const location = useLocation()
  
  // 사용자 유형에 따른 사이드바 메뉴 설정
  const sidebarMenus = {
    buyer: [
      { icon: <LayoutDashboard size={20} />, label: '대시보드', path: '/dashboard/buyer' },
      { icon: <ShoppingCart size={20} />, label: '주문/배송 현황', path: '/dashboard/buyer/orders' },
      { icon: <Calendar size={20} />, label: '라이브 방송 일정', path: '/dashboard/buyer/live-schedule' },
      { icon: <Users size={20} />, label: '팔로우 중인 판매자', path: '/dashboard/buyer/following' },
      { icon: <Settings size={20} />, label: '계정 설정', path: '/dashboard/buyer/settings' }
    ],
    seller: [
      { icon: <LayoutDashboard size={20} />, label: '대시보드', path: '/dashboard/seller' },
      { icon: <Calendar size={20} />, label: '라이브 방송 관리', path: '/dashboard/seller/live-management' },
      { icon: <ShoppingCart size={20} />, label: '판매 관리', path: '/dashboard/seller/sales' },
      { icon: <BarChart3 size={20} />, label: '정산 관리', path: '/dashboard/seller/settlement' },
      { icon: <Settings size={20} />, label: '프로필 관리', path: '/dashboard/seller/profile' }
    ],
    supplier: [
      { icon: <LayoutDashboard size={20} />, label: '대시보드', path: '/dashboard/supplier' },
      { icon: <Package size={20} />, label: '상품 관리', path: '/dashboard/supplier/products' },
      { icon: <ShoppingCart size={20} />, label: '입고/재고 관리', path: '/dashboard/supplier/inventory' },
      { icon: <BarChart3 size={20} />, label: '판매/정산 관리', path: '/dashboard/supplier/sales' },
      { icon: <Settings size={20} />, label: '계정 설정', path: '/dashboard/supplier/settings' }
    ],
    admin: [
      { icon: <LayoutDashboard size={20} />, label: '통합 대시보드', path: '/dashboard/admin' },
      { icon: <Users size={20} />, label: '회원 관리', path: '/dashboard/admin/users' },
      { icon: <Package size={20} />, label: '상품 관리', path: '/dashboard/admin/products' },
      { icon: <ShoppingCart size={20} />, label: '주문 관리', path: '/dashboard/admin/orders' },
      { icon: <Calendar size={20} />, label: '라이브 방송 관리', path: '/dashboard/admin/live' },
      { icon: <BarChart3 size={20} />, label: '정산 관리', path: '/dashboard/admin/settlement' },
      { icon: <Settings size={20} />, label: '시스템 관리', path: '/dashboard/admin/system' }
    ]
  }
  
  // 사용자 유형에 따른 사용자 정보 설정
  const userInfo = {
    buyer: {
      name: '김구매',
      email: 'buyer@example.com',
      role: '일반 회원',
      avatar: ''
    },
    seller: {
      name: '이판매',
      email: 'seller@example.com',
      role: '판매자',
      avatar: ''
    },
    supplier: {
      name: '박도매',
      email: 'supplier@example.com',
      role: '도매상',
      avatar: ''
    },
    admin: {
      name: '최관리',
      email: 'admin@example.com',
      role: '관리자',
      avatar: ''
    }
  }
  
  // 현재 사용자 정보
  const currentUser = userInfo[userType]
  
  // 현재 사용자 유형에 맞는 메뉴
  const menus = sidebarMenus[userType]
  
  // 사용자 유형에 따른 대시보드 색상 설정
  const dashboardColors = {
    buyer: 'bg-blue-600',
    seller: 'bg-purple-600',
    supplier: 'bg-green-600',
    admin: 'bg-red-600'
  }
  
  const dashboardColor = dashboardColors[userType]
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 사이드바 - 데스크톱 */}
      <div 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } hidden md:block transition-all duration-300 ease-in-out bg-white border-r border-gray-200 shadow-sm`}
      >
        <div className={`h-16 flex items-center justify-center ${dashboardColor} text-white`}>
          <Link to="/" className="flex items-center">
            {isSidebarOpen ? (
              <span className="text-xl font-bold">Live Deal</span>
            ) : (
              <span className="text-xl font-bold">LD</span>
            )}
          </Link>
        </div>
        
        <div className="p-4">
          {isSidebarOpen && (
            <div className="mb-6 text-center">
              <Avatar className="w-16 h-16 mx-auto mb-2">
                <AvatarImage src={currentUser.avatar} />
                <AvatarFallback className="bg-gray-200 text-gray-700">
                  {currentUser.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-medium">{currentUser.name}</h3>
              <p className="text-xs text-gray-500">{currentUser.role}</p>
            </div>
          )}
          
          <nav className="space-y-1">
            {menus.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
                    isActive 
                      ? `${dashboardColor} text-white` 
                      : 'text-gray-700 hover:bg-gray-100'
                  } ${!isSidebarOpen && 'justify-center'}`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {isSidebarOpen && <span>{item.label}</span>}
              </NavLink>
            ))}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                to="/"
                className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              >
                <LogOut size={20} className="mr-3" />
                {isSidebarOpen && <span>메인으로 돌아가기</span>}
              </Link>
            </div>
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex justify-center"
          >
            {isSidebarOpen ? (
              <ChevronDown size={20} className="rotate-90" />
            ) : (
              <ChevronDown size={20} className="-rotate-90" />
            )}
          </Button>
        </div>
      </div>
      
      {/* 모바일 사이드바 오버레이 */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* 모바일 사이드바 */}
      <div 
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className={`h-16 flex items-center justify-between px-4 ${dashboardColor} text-white`}>
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">Live Deal</span>
          </Link>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-white hover:bg-white/20"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </Button>
        </div>
        
        <div className="p-4">
          <div className="mb-6 text-center">
            <Avatar className="w-16 h-16 mx-auto mb-2">
              <AvatarImage src={currentUser.avatar} />
              <AvatarFallback className="bg-gray-200 text-gray-700">
                {currentUser.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-medium">{currentUser.name}</h3>
            <p className="text-xs text-gray-500">{currentUser.role}</p>
          </div>
          
          <nav className="space-y-1">
            {menus.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
                    isActive 
                      ? `${dashboardColor} text-white` 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                to="/"
                className="flex items-center px-4 py-3 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
              >
                <LogOut size={20} className="mr-3" />
                <span>메인으로 돌아가기</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 헤더 */}
        <header className="h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden mr-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={20} />
            </Button>
            <h1 className="text-xl font-semibold">
              {userType === 'buyer' && '구매자 대시보드'}
              {userType === 'seller' && '판매자 대시보드'}
              {userType === 'supplier' && '도매상 대시보드'}
              {userType === 'admin' && '관리자 대시보드'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Avatar className="w-8 h-8 mr-2">
                    <AvatarImage src={currentUser.avatar} />
                    <AvatarFallback className="bg-gray-200 text-gray-700">
                      {currentUser.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline">{currentUser.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>프로필 설정</DropdownMenuItem>
                <DropdownMenuItem>알림 설정</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/" className="flex w-full">메인으로 돌아가기</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

