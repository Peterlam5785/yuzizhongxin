import { Flame, Moon, Lightbulb } from 'lucide-react'

const LightTherapyPage = () => {
  const lightSolutions = [
    {
      icon: Flame,
      title: "红光 (600-700nm)",
      subtitle: "穿透力强，可达皮下组织",
      highlight: "伤口愈合效率提升30%",
      description: "增强细胞线粒体活性，加速血液循环，促进剖腹产或顺产伤口愈合，减轻局部疼痛",
      color: "#A57F75",
      bgColor: "#F4E5E1"
    },
    {
      icon: Moon,
      title: "天青光",
      subtitle: "高效调节生物钟",
      highlight: "同步褪黑素分泌",
      description: "产后荷尔蒙波动及夜间哺乳常导致妈妈的昼夜节律紊乱，天青光能有效改善失眠和睡眠碎片化问题",
      color: "#6B8E9F",
      bgColor: "#C7D3BF"
    },
    {
      icon: Lightbulb,
      title: "互动光",
      subtitle: "动态变化的柔和光影",
      highlight: "情绪舒缓 & 亲子互动",
      description: "创造安全感和趣味性环境，有效舒缓产后妈妈的紧张和焦虑情绪，增进母婴间的情感连接",
      color: "#8D7B74",
      bgColor: "#E6D7E7"
    }
  ]

  const spectrumColors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#9400D3'  // Violet
  ]

  const spectrumLabels = ['红光', '橙光', '黄光', '绿光', '蓝光', '靛光', '紫光']

  return (
    <div className="min-h-screen bg-[#C7D3BF] py-12">
      {/* Top decorative line */}
      <div className="w-full h-2 bg-gradient-to-r from-[#FFF8F4] via-[#F4E5E1] to-[#E6D7E7] mb-8"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[#5A4A42] mb-4 font-serif">光疗系统</h1>
          <div className="h-1 w-40 mx-auto mb-4 bg-gradient-to-r from-[#FFF8F4] to-[#E6D7E7] rounded-full"></div>
          <p className="text-xl text-[#5A4A42] font-light">三种特定光谱的产后恢复解决方案</p>
        </div>

        {/* Light Spectrum Visualization */}
        <div className="mb-12 px-16">
          <div 
            className="h-20 rounded-full shadow-lg relative overflow-hidden"
            style={{
              background: `linear-gradient(90deg, ${spectrumColors.join(', ')})`
            }}
          >
            {/* Animated overlay for spectrum effect */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(90deg, ${spectrumColors.join(', ')})`,
                animation: 'spectrum-flow 4s ease-in-out infinite alternate'
              }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-[#5A4A42]">
            {spectrumLabels.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>
        </div>

        {/* Light Therapy Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {lightSolutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div 
                key={index}
                className="bg-white/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: solution.bgColor }}
                >
                  <IconComponent 
                    className="w-10 h-10" 
                    style={{ color: solution.color }}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#5A4A42] mb-2">
                  {solution.title}
                </h3>
                <p className="text-[#5A4A42] mb-3">
                  {solution.subtitle}
                </p>
                <div 
                  className="w-full rounded-lg p-3 mb-3"
                  style={{ backgroundColor: solution.bgColor }}
                >
                  <p 
                    className="text-center font-bold"
                    style={{ color: solution.color }}
                  >
                    {solution.highlight}
                  </p>
                </div>
                <p className="text-[#5A4A42] text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Scientific Reference */}
        <div className="text-center text-sm text-[#5A4A42] opacity-70 mb-4">
          <p>Meta分析表明，红光治疗组的伤口愈合总有效率显著高于对照组 (RR=1.21)</p>
        </div>

        {/* Page Number */}
        <div className="text-right text-sm text-[#5A4A42] opacity-70">
          3/8
        </div>
      </div>

      <style jsx>{`
        @keyframes spectrum-flow {
          0% { transform: translateX(-10%); }
          100% { transform: translateX(10%); }
        }
      `}</style>
    </div>
  )
}

export default LightTherapyPage

