import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Live Deal
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-purple-600 font-medium" 
                      : "text-gray-700 hover:text-purple-600 font-medium"
                  }
                  end
                >
                  홈
                </NavLink>
                <NavLink 
                  to="/live" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-purple-600 font-medium" 
                      : "text-gray-700 hover:text-purple-600 font-medium"
                  }
                >
                  라이브
                </NavLink>
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-purple-600 font-medium" 
                      : "text-gray-700 hover:text-purple-600 font-medium"
                  }
                >
                  상품
                </NavLink>
                <NavLink 
                  to="/sellers" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-purple-600 font-medium" 
                      : "text-gray-700 hover:text-purple-600 font-medium"
                  }
                >
                  라이버
                </NavLink>
              </nav>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/dashboard/buyer">
                    <User className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive 
                    ? "block px-3 py-2 rounded-md text-base font-medium bg-purple-50 text-purple-600" 
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                }
                end
                onClick={() => setIsMenuOpen(false)}
              >
                홈
              </NavLink>
              <NavLink 
                to="/live" 
                className={({ isActive }) => 
                  isActive 
                    ? "block px-3 py-2 rounded-md text-base font-medium bg-purple-50 text-purple-600" 
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                라이브
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  isActive 
                    ? "block px-3 py-2 rounded-md text-base font-medium bg-purple-50 text-purple-600" 
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                상품
              </NavLink>
              <NavLink 
                to="/sellers" 
                className={({ isActive }) => 
                  isActive 
                    ? "block px-3 py-2 rounded-md text-base font-medium bg-purple-50 text-purple-600" 
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                라이버
              </NavLink>
              <div className="flex space-x-2 px-3 py-2">
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/dashboard/buyer">
                    <User className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Live Deal
              </h4>
              <p className="text-gray-400">
                라이브 커머스의 새로운 경험을 제공하는 플랫폼입니다.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">서비스</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/live" className="hover:text-white">라이브 방송</Link></li>
                <li><Link to="/products" className="hover:text-white">상품 판매</Link></li>
                <li><Link to="/dashboard/seller" className="hover:text-white">라이버 등록</Link></li>
                <li><Link to="/dashboard/supplier" className="hover:text-white">파트너스 등록</Link></li>
                <li><Link to="/dashboard/admin" className="hover:text-white">Admin</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">고객지원</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">고객센터</a></li>
                <li><a href="#" className="hover:text-white">이용약관</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">회사정보</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">회사소개</a></li>
                <li><a href="#" className="hover:text-white">채용정보</a></li>
                <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Live Deal Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

