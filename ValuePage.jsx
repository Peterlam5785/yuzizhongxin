import { Heart, Building, Brain, Bandage, Baby, Gem, RotateCcw } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

const ValuePage = () => {
  const motherBenefits = [
    {
      icon: Brain,
      title: "情绪稳定",
      description: "通过定制化的声光环境，有效缓解产后焦虑与抑郁情绪，帮助妈妈们平稳度过心理适应期",
      color: "#A57F75"
    },
    {
      icon: Bandage,
      title: "伤口快愈",
      description: "科学验证的红光疗法能加速伤口愈合，减轻疼痛，提升身体恢复的舒适度与效率",
      color: "#A57F75"
    },
    {
      icon: Baby,
      title: "宝宝安睡",
      description: "妈妈情绪的稳定和放松，结合宁静的疗愈环境，有助于改善新生儿的睡眠质量，形成和谐的母婴互动",
      color: "#A57F75"
    }
  ]

  const centerBenefits = [
    {
      icon: Gem,
      title: "服务溢价",
      highlight: "50%",
      description: "引入高科技疗愈项目，使中心从传统的母婴照护升级为高端身心健康管理，为服务提供了坚实的溢价基础，满足了新生代家庭对高品质、精细化服务的需求",
      color: "#6B8E9F"
    },
    {
      icon: RotateCcw,
      title: "复购/转介绍率提升",
      highlight: "50%",
      description: "卓越的疗愈效果和独特的客户体验，能极大提升客户满意度和忠诚度，形成强大的口碑效应，从而有效提高二胎家庭的复购率及新客户的转介绍率，构筑品牌核心竞争力",
      color: "#6B8E9F"
    }
  ]

  const chartData = [
    { category: "服务溢价", value: 50, color: "#F4E5E1" },
    { category: "复购率", value: 50, color: "#C7D3BF" }
  ]

  return (
    <div className="min-h-screen bg-[#FFF8F4] py-12 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C7D3BF] via-[#F4E5E1] to-[#E6D7E7]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[#5A4A42] mb-3 font-serif">双赢价值</h1>
          <div className="h-1 w-40 mx-auto mb-3 bg-gradient-to-r from-[#C7D3BF] to-[#E6D7E7] rounded-full"></div>
          <p className="text-xl text-[#6B5750] font-light">
            方案为妈妈带来情绪稳定、伤口快速愈合和宝宝安睡，同时为月子中心创造50%服务溢价和50%复购率提升
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mother Benefits */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#F4E5E1] rounded-full flex items-center justify-center mr-4">
                <Heart className="w-8 h-8 text-[#A57F75]" />
              </div>
              <h2 className="text-2xl font-bold text-[#5A4A42]">对产后妈妈的价值</h2>
            </div>
            <div className="space-y-4">
              {motherBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#F4E5E1]"
                  >
                    <div className="flex items-center">
                      <IconComponent className="w-6 h-6 text-[#A57F75] mr-3" />
                      <div>
                        <h3 className="text-lg font-bold text-[#5A4A42]">{benefit.title}</h3>
                        <p className="text-[#6B5750] text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Care Center Benefits */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#C7D3BF] rounded-full flex items-center justify-center mr-4">
                <Building className="w-8 h-8 text-[#6B8E9F]" />
              </div>
              <h2 className="text-2xl font-bold text-[#5A4A42]">对月子中心的价值</h2>
            </div>
            <div className="space-y-4">
              {centerBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#C7D3BF]"
                  >
                    <div className="flex items-center">
                      <IconComponent className="w-6 h-6 text-[#6B8E9F] mr-3" />
                      <div>
                        <h3 className="text-lg font-bold text-[#5A4A42]">
                          {benefit.title}
                          <span className="text-[#A57F75] ml-2">{benefit.highlight}</span>
                        </h3>
                        <p className="text-[#6B5750] text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-[#5A4A42] mb-6 text-center">月子中心收益提升</h3>
          <div className="space-y-6">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-24 text-right text-[#5A4A42] font-bold">
                  {item.category}
                </div>
                <div className="flex-1 relative">
                  <Progress 
                    value={item.value} 
                    className="h-8 bg-[#F4E5E1]"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold">
                    {item.value}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-[#8D7B74]">
          声光疗愈方案 - 为产后妈妈和月子中心创造双重价值
        </div>
      </div>
    </div>
  )
}

export default ValuePage

