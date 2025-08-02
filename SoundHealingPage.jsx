import { Music, Heart, Clock, Spa, Brain, Ban, Sun, Moon as MoonIcon } from 'lucide-react'

const SoundHealingPage = () => {
  const features = [
    {
      icon: Music,
      title: "林泽鑫定制疗愈音乐",
      description: "基于脑波共振原理和心理声学研究创作，每首曲目均旨在引导大脑产生α波，快速缓解压力和负面情绪，提升身心健康",
      color: "#A57F75",
      bgColor: "#F4E5E1"
    },
    {
      icon: Heart,
      title: "30分钟焦虑缓解",
      description: "临床测试表明，聆听定制疗愈音乐30分钟，即可显著降低心率和皮质醇水平，有效缓解焦虑、紧张等负面情绪",
      color: "#6B8E9F",
      bgColor: "#C7D3BF",
      highlight: "30分钟"
    },
    {
      icon: Clock,
      title: "四季能量×昼夜节律",
      description: "独创性地将\"四季\"的能量特质与\"昼夜\"的节律变化相结合，根据不同季节和一天中的不同时段，播放与之匹配的能量音乐",
      color: "#8D7B74",
      bgColor: "#E6D7E7"
    },
    {
      icon: Spa,
      title: "月子中心环境音乐",
      description: "专为月子中心打造的沉浸式音乐环境，通过精心校准的频率与节奏，创造温馨舒适的空间氛围，形成一个包容、安全的声音场域，让产后妈妈在不知不觉中获得情绪支持与身心滋养",
      color: "#A57F75",
      bgColor: "#F4E5E1"
    }
  ]

  const timeSlots = [
    {
      icon: Sun,
      name: "清晨唤醒",
      time: "6:00-10:00",
      color: "#F4A460",
      bgColor: "#F4E5E1"
    },
    {
      icon: Sun,
      name: "午间小憩",
      time: "12:00-14:00",
      color: "#FFD700",
      bgColor: "#C7D3BF"
    },
    {
      icon: Sun,
      name: "傍晚舒缓",
      time: "18:00-20:00",
      color: "#FF8C00",
      bgColor: "#E6D7E7"
    },
    {
      icon: MoonIcon,
      name: "深夜助眠",
      time: "22:00-2:00",
      color: "#4682B4",
      bgColor: "#F4E5E1"
    }
  ]

  const benefits = [
    { icon: Brain, label: "调节脑波", color: "#A57F75" },
    { icon: Heart, label: "降低心率", color: "#6B8E9F" },
    { icon: Ban, label: "减少焦虑", color: "#8D7B74" },
    { icon: MoonIcon, label: "改善睡眠", color: "#A57F75" }
  ]

  return (
    <div className="min-h-screen bg-[#E6D7E7] py-12">
      {/* Top decorative line */}
      <div className="w-full h-2 bg-gradient-to-r from-[#C7D3BF] via-[#F4E5E1] to-[#E6D7E7] mb-8"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[#5A4A42] mb-3 font-serif">声音疗愈</h1>
          <div className="h-1 w-40 mx-auto mb-3 bg-gradient-to-r from-[#C7D3BF] to-[#E6D7E7] rounded-full"></div>
          <p className="text-xl text-[#5A4A42] font-light">专业声音疗愈体系，引导大脑产生α波，快速缓解压力</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: feature.bgColor }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: feature.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#5A4A42] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B5750] text-sm leading-relaxed">
                      {feature.highlight && (
                        <span className="text-[#A57F75] font-medium">{feature.highlight}</span>
                      )}
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Seasonal & Day-Night Visualization */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-[#5A4A42] mb-6 text-center">
              四季能量与昼夜节律音乐方案
            </h3>
            
            {/* Time Slots */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {timeSlots.map((slot, index) => {
                const IconComponent = slot.icon
                return (
                  <div 
                    key={index}
                    className="rounded-full p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: slot.bgColor }}
                  >
                    <IconComponent 
                      className="w-6 h-6 mx-auto mb-2" 
                      style={{ color: slot.color }}
                    />
                    <div className="text-sm font-medium text-[#5A4A42]">{slot.name}</div>
                    <div className="text-xs text-[#6B5750]">{slot.time}</div>
                  </div>
                )
              })}
            </div>

            {/* Music Flow Visualization */}
            <div className="h-28 bg-gradient-to-r from-[#F4E5E1] via-[#C7D3BF] to-[#E6D7E7] rounded-lg mb-4 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-1 bg-[#A57F75] relative">
                  {/* Animated music nodes */}
                  <div className="absolute w-3 h-3 bg-[#6B8E9F] rounded-full animate-pulse" style={{ left: '10%', top: '-5px' }}></div>
                  <div className="absolute w-2 h-2 bg-[#8D7B74] rounded-full animate-pulse" style={{ left: '30%', top: '-4px', animationDelay: '0.5s' }}></div>
                  <div className="absolute w-3 h-3 bg-[#A57F75] rounded-full animate-pulse" style={{ left: '60%', top: '-5px', animationDelay: '1s' }}></div>
                  <div className="absolute w-2 h-2 bg-[#6B8E9F] rounded-full animate-pulse" style={{ left: '80%', top: '-4px', animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="text-center">
                    <IconComponent 
                      className="w-6 h-6 mx-auto mb-1" 
                      style={{ color: benefit.color }}
                    />
                    <p className="text-xs text-[#6B5750]">{benefit.label}</p>
                  </div>
                )
              })}
            </div>

            {/* Enhanced section about music energy */}
            <div className="bg-[#F4E5E1] bg-opacity-30 rounded-lg p-4">
              <h4 className="font-bold text-center text-[#5A4A42] mb-2">
                音乐能量改变月子中心氛围
              </h4>
              <p className="text-xs text-[#6B5750] text-center leading-relaxed">
                专业定制的环境音乐能显著提升月子中心的整体氛围，创造一个更加温馨、平静的恢复环境。特定频率的声波能够直接影响人体自主神经系统，帮助产后妈妈更快进入放松状态，促进情绪稳定，加速身体恢复。同时，这种和谐的声音场域也能安抚新生儿情绪，改善亲子互动质量，为母婴关系奠定良好基础。
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-right text-sm text-[#5A4A42] mt-8">
          林泽鑫 | 音乐疗愈师
        </div>
      </div>
    </div>
  )
}

export default SoundHealingPage

