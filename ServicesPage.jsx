import { Users, Shield, Sparkles } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

const ServicesPage = () => {
  const services = [
    {
      icon: Users,
      title: "团体疗愈",
      description: "营造支持性氛围，让妈妈们交流心得、获得同伴支持，共同面对产后挑战",
      color: "#A57F75",
      bgColor: "#F4E5E1"
    },
    {
      icon: Shield,
      title: "一对一疗愈",
      description: "根据个人具体情况（如特定的身体疼痛、严重的失眠或情绪问题）提供高度个性化的深度干预方案",
      color: "#6B8E9F",
      bgColor: "#C7D3BF"
    },
    {
      icon: Sparkles,
      title: "光+音联合",
      description: "光疗与声音疗愈同步进行，创造多感官、沉浸式的疗愈场域，产生1+1>2的协同效应",
      color: "#8D7B74",
      bgColor: "#E6D7E7"
    }
  ]

  const chartData = [
    { name: '治疗前', score: 15, color: '#A57F75' },
    { name: '治疗后', score: 5, color: '#6B8E9F' }
  ]

  return (
    <div className="min-h-screen bg-[#FFF8F4] py-12 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C7D3BF] via-[#F4E5E1] to-[#E6D7E7]"></div>
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#F4E5E1] opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[#E6D7E7] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#5A4A42] mb-4 font-serif">现场服务</h1>
          <div className="h-1 w-40 mx-auto mb-4 bg-gradient-to-r from-[#C7D3BF] to-[#E6D7E7] rounded-full"></div>
          <p className="text-xl text-[#6B5750] font-light">专业团队提供沉浸式疗愈体验</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Service Options */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: service.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#5A4A42] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#6B5750] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Side: Results Visualization */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-[#5A4A42] mb-4 text-center">
              疗愈效果量化
            </h3>
            <p className="text-[#6B5750] mb-6 text-center">
              通过标准化的心理评估量表（如爱丁堡产后抑郁量表），量化疗愈效果
            </p>
            
            {/* Depression Score Chart */}
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 14, fill: '#6B5750' }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 14, fill: '#6B5750' }}
                    label={{ value: '抑郁评分', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#6B5750' } }}
                  />
                  <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="text-center mb-4">
              <p className="text-[#5A4A42] font-bold">
                抑郁评分：
                <span className="text-[#A57F75]">15分</span>（中度风险）→ 
                <span className="text-[#6B8E9F]">5分</span>（低风险）
              </p>
            </div>

            <div className="text-center">
              <p className="text-[#6B5750] italic text-sm">
                *效果数据基于试点项目
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-right text-sm text-[#8D7B74] mt-8">
          声光疗愈研究院 | 2025.07
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

