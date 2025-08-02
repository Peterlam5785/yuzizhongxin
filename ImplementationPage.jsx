import { Home, HandHeart, Package, ChevronRight } from 'lucide-react'

const ImplementationPage = () => {
  const steps = [
    {
      number: 1,
      icon: Home,
      title: "样板房体验",
      description: "打造标准化声光疗愈体验房，作为展示服务亮点、提供前置体验的绝佳场景，提升签约转化率",
      color: "#A57F75",
      bgColor: "#F4E5E1"
    },
    {
      number: 2,
      icon: HandHeart,
      title: "现场疗愈",
      description: "将声光疗愈服务正式纳入妈妈的入住套餐，提供系统化的团体或一对一疗愈课程，作为中心的核心特色服务",
      color: "#6B8E9F",
      bgColor: "#C7D3BF"
    },
    {
      number: 3,
      icon: Package,
      title: "带回家设备",
      description: "提供便携式家用疗愈设备的销售或租赁服务，延续对客户的关怀，开辟新的零售收入渠道，实现价值链延伸",
      color: "#8D7B74",
      bgColor: "#E6D7E7"
    }
  ]

  const timeline = [
    { phase: "方案设计", position: 10, color: "#A57F75" },
    { phase: "样板房建设", position: 25, color: "#A57F75" },
    { phase: "设备采购", position: 40, color: "#6B8E9F" },
    { phase: "人员培训", position: 55, color: "#6B8E9F" },
    { phase: "服务推出", position: 70, color: "#8D7B74" },
    { phase: "持续优化", position: 85, color: "#8D7B74" }
  ]

  return (
    <div className="min-h-screen bg-[#FFF8F4] py-12 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C7D3BF] via-[#F4E5E1] to-[#E6D7E7]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#5A4A42] mb-4 font-serif">3步落地</h1>
          <div className="h-1 w-40 mx-auto mb-4 bg-gradient-to-r from-[#C7D3BF] to-[#E6D7E7] rounded-full"></div>
          <p className="text-xl text-[#6B5750] font-light">三步实施流程，确保方案顺利落地</p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 pt-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative">
                    {/* Step Number */}
                    <div 
                      className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl font-serif"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 mt-4"
                      style={{ backgroundColor: step.bgColor }}
                    >
                      <IconComponent 
                        className="w-10 h-10" 
                        style={{ color: step.color }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#5A4A42] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#6B5750] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-8 h-8 text-[#C7D3BF]" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-[#5A4A42] mb-6 text-center">实施时间线</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#C7D3BF] rounded-full transform -translate-y-1/2"></div>
            
            {/* Timeline points */}
            <div className="relative flex justify-between items-center h-16">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-4 h-4 rounded-full border-4 border-white shadow-md z-10"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="text-xs text-[#5A4A42] mt-2 text-center max-w-16">
                    {item.phase}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-right text-sm text-[#8D7B74]">
          声光疗愈解决方案 | 2025.07
        </div>
      </div>
    </div>
  )
}

export default ImplementationPage

