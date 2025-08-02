import { Phone, MessageCircle, Heart, Ban, Moon as MoonIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ContactPage = () => {
  const solutions = [
    {
      icon: Heart,
      label: "情绪波动",
      color: "#A57F75",
      bgColor: "#F4E5E1"
    },
    {
      icon: MoonIcon,
      label: "睡眠障碍",
      color: "#6B8E9F",
      bgColor: "#C7D3BF"
    },
    {
      icon: Ban,
      label: "身体恢复",
      color: "#8D7B74",
      bgColor: "#E6D7E7"
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFF8F4] py-12 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C7D3BF] via-[#F4E5E1] to-[#E6D7E7]"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#C7D3BF] via-[#F4E5E1] to-[#E6D7E7]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#5A4A42] mb-3 font-serif">联系我们</h1>
          <div className="h-1 w-40 mx-auto mb-3 bg-gradient-to-r from-[#C7D3BF] to-[#E6D7E7] rounded-full"></div>
        </div>

        {/* One-stop Solution Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-[#5A4A42] mb-6 text-center">
            一站式解决产后妈妈的核心困扰
          </h2>
          
          <div className="flex justify-center flex-wrap gap-4 mb-6">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <div 
                  key={index}
                  className="flex items-center px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: solution.bgColor }}
                >
                  <IconComponent 
                    className="w-5 h-5 mr-2" 
                    style={{ color: solution.color }}
                  />
                  <span 
                    className="font-medium"
                    style={{ color: solution.color }}
                  >
                    {solution.label}
                  </span>
                </div>
              )
            })}
          </div>
          
          <p className="text-center text-[#6B5750] leading-relaxed">
            声光疗愈方案将科技疗愈与人文关怀深度融合，精准契合"疗愈经济"时代下高端月子中心的发展趋势
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-[#5A4A42] mb-8 text-center">合作諮詢</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone Contact */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-[#F4E5E1] rounded-full flex items-center justify-center mr-4">
                <Phone className="w-8 h-8 text-[#A57F75]" />
              </div>
              <div>
                <p className="text-sm text-[#8D7B74] mb-1">諮詢專線</p>
                <p className="text-lg text-[#5A4A42] font-medium">18102535583</p>
              </div>
            </div>
            
            {/* WeChat Contact */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-[#E6D7E7] rounded-full flex items-center justify-center mr-4">
                <MessageCircle className="w-8 h-8 text-[#8D7B74]" />
              </div>
              <div>
                <p className="text-sm text-[#8D7B74] mb-1">微信</p>
                <p className="text-lg text-[#5A4A42] font-medium">Joseph5784</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#5A4A42] text-white p-6 rounded-xl shadow-lg">
            <p className="text-xl">
              <span className="bg-[#A57F75] px-3 py-1 rounded">立即合作</span>
              ，率先引入前沿声光疗愈体系，打造行业服务新标杆
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-[#8D7B74] mt-8">
          声光疗愈研究院 | 2025.07
        </div>
      </div>
    </div>
  )
}

export default ContactPage

