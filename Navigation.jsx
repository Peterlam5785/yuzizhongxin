import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navigation = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation()
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

  const navItems = [
    { name: '首页', path: '/' },
    { name: '问题分析', path: '/problems' },
    { 
      name: '解决方案', 
      path: '/solutions',
      submenu: [
        { name: '光疗系统', path: '/solutions/light-therapy' },
        { name: '声音疗愈', path: '/solutions/sound-healing' }
      ]
    },
    { name: '服务介绍', path: '/services' },
    { name: '价值展示', path: '/value' },
    { name: '实施方案', path: '/implementation' },
    { name: '联系我们', path: '/contact' }
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E6D7E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-[#A57F75]" />
            <span className="text-xl font-bold text-[#5A4A42]">声光疗愈</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-[#A57F75] bg-[#F4E5E1]'
                          : 'text-[#5A4A42] hover:text-[#A57F75] hover:bg-[#F4E5E1]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isSolutionsOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-[#E6D7E7] py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(subItem.path)
                                ? 'text-[#A57F75] bg-[#F4E5E1]'
                                : 'text-[#5A4A42] hover:text-[#A57F75] hover:bg-[#F4E5E1]'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-[#A57F75] bg-[#F4E5E1]'
                        : 'text-[#5A4A42] hover:text-[#A57F75] hover:bg-[#F4E5E1]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#5A4A42]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#E6D7E7] py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="px-3 py-2 text-sm font-medium text-[#5A4A42]">
                        {item.name}
                      </div>
                      <div className="pl-6 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                              isActive(subItem.path)
                                ? 'text-[#A57F75] bg-[#F4E5E1]'
                                : 'text-[#5A4A42] hover:text-[#A57F75] hover:bg-[#F4E5E1]'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-[#A57F75] bg-[#F4E5E1]'
                          : 'text-[#5A4A42] hover:text-[#A57F75] hover:bg-[#F4E5E1]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

