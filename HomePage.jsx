import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F4] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-[-100px] right-[-80px] w-64 h-64 rounded-full bg-gradient-to-br from-[#F4E5E1] to-[#E6D7E7] opacity-80 z-0"></div>
      <div className="absolute bottom-[-10px] left-[100px] w-40 h-40 rounded-full bg-gradient-to-br from-[#F4E5E1] to-[#E6D7E7] opacity-80 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen p-12">
        {/* Title Section */}
        <div className="text-center mt-8">
          <h1 className="text-5xl font-bold text-[#5A4A42] mb-6 font-serif">
            月子中心声光疗愈解决方案
          </h1>
          <div className="h-1 w-96 mx-auto mb-6 bg-gradient-to-r from-[#C7D3BF] to-[#E6D7E7] rounded-full"></div>
          <p className="text-2xl text-[#6B5750] font-light">
            为产后妈妈解决
            <span className="text-[#A57F75] font-medium">情绪</span>·
            <span className="text-[#A57F75] font-medium">睡眠</span>·
            <span className="text-[#A57F75] font-medium">身体恢复</span>
            三大难题
          </p>
        </div>

        {/* Main Image */}
        <div className="my-8 rounded-xl shadow-2xl overflow-hidden relative">
          <img 
            src="https://picture-search.skywork.ai/aippt/image/sheet/5873531dedc9a4bb5e6c010604ef9e02.jpg" 
            alt="母婴温馨时刻" 
            className="w-[700px] h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F4] to-transparent opacity-20"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-8">
          <Link to="/problems">
            <Button 
              size="lg" 
              className="bg-[#A57F75] hover:bg-[#8D6B61] text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              了解解决方案
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-between items-center mt-4">
          <div className="flex items-center text-lg text-[#8D7B74]">
            <Heart className="mr-2 h-5 w-5" />
            声光疗愈研究院
          </div>
          <div className="text-lg text-[#8D7B74]">
            2025.07
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#C7D3BF] via-[#F4E5E1] to-[#E6D7E7]"></div>
    </div>
  )
}

export default HomePage

