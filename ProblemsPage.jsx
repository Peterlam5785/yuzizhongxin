import { Brain, Moon, Bandage } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

const ProblemsPage = () => {
  const challenges = [
    {
      icon: Brain,
      percentage: 30,
      title: "产后抑郁/焦虑",
      description: "产后妈妈经历不同程度的抑郁或焦虑情绪，影响母亲与新生儿的亲密连接",
      color: "#A57F75",
      bgColor: "#F4E5E1"
    },
    {
      icon: Moon,
      percentage: 90,
      title: "失眠",
      description: "产后妈妈存在失眠或睡眠质量严重下降，导致精神疲劳，身体恢复缓慢",
      color: "#6B8E9F",
      bgColor: "#C7D3BF"
    },
    {
      icon: Bandage,
      percentage: 70,
      title: "身体恢复",
      description: "剖腹产或侧切伤口愈合缓慢，持续性腰背疼痛，以及乳腺问题困扰",
      color: "#8D7B74",
      bgColor: "#E6D7E7"
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFF8F4] py-12">
      {/* Top decorative line */}
      <div className="w-full h-2 bg-gradient-to-r from-[#C7D3BF] via-[#F4E5E1] to-[#E6D7E7] mb-8"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#5A4A42] mb-4 font-serif">三大挑战</h1>
          <div className="h-1 w-40 mx-auto mb-4 bg-gradient-to-r from-[#C7D3BF] to-[#E6D7E7] rounded-full"></div>
          <p className="text-xl text-[#6B5750] font-light">产后妈妈面临的三大核心问题</p>
        </div>

        {/* Challenges Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: challenge.bgColor }}
                >
                  <IconComponent 
                    className="w-10 h-10" 
                    style={{ color: challenge.color }}
                  />
                </div>
                <div 
                  className="text-5xl font-bold mb-2 font-serif"
                  style={{ color: challenge.color }}
                >
                  {challenge.percentage}%
                </div>
                <h3 className="text-xl font-bold text-[#5A4A42] mb-3">
                  {challenge.title}
                </h3>
                <p className="text-[#6B5750] leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Data Visualization */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-[#5A4A42] mb-6 text-center">问题严重程度统计</h3>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-32 text-right text-[#5A4A42] font-medium">
                  {challenge.title}
                </div>
                <div className="flex-1 relative">
                  <Progress 
                    value={challenge.percentage} 
                    className="h-6 bg-[#F4E5E1]"
                    style={{
                      '--progress-foreground': challenge.color
                    }}
                  />
                  <div 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-bold text-sm"
                  >
                    {challenge.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Source */}
        <div className="text-center text-sm text-[#8D7B74]">
          数据来源：国家卫健委/《2023中国睡眠质量白皮书》
        </div>
      </div>
    </div>
  )
}

export default ProblemsPage

