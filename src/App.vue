<template>
  <div id="app" class="min-h-screen bg-reflect-dark">
    <!-- Header Navigation -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-reflect-dark/80 backdrop-blur-sm border-b border-white/10">
      <nav class="container-custom py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <div
              class=" h-8 bg-gradient-to-r from-reflect-purple to-reflect-purple-light rounded-lg flex items-center justify-center">
              <img src="../public/tp1.png" style="width:80px; height: 80px;" alt="">
            </div>
            <span class="text-xl font-semibold text-white ">未知者科技</span>
          </div>
          <!-- Auth Buttons -->
          <div class="  items-center space-x-4">
            <button @click="openContactModal" class=" btn-primary sound-hover sound-click">联系我们</button>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <section class="pt-32 pb-16 relative overflow-hidden">
        <div class="container-custom relative z-10">

          <div
            class="mx-auto max-w-5xl group shadow-2xl shadow-reflect-purple/20 rounded-2xl overflow-hidden border border-white/10 md:relative">
            <!-- 1. 背景视频 (保持不变) -->
            <video ref="videoPlayer" autoplay loop muted playsinline class="w-full h-full object-cover">
              <!-- 2. 移除 source 标签 -->
              您的浏览器不支持 video 标签。
            </video>

            <!-- 
              2. 文字层: 
              - 移动端 (默认): 依然是位于视频下方的独立块，但背景色移除了。
              - 桌面端 (md: 前缀):
                - md:absolute md:inset-0: 恢复绝对定位。
                - md:justify-end: 内容推向底部。
                - md:bg-gradient-to-t ...: 我们在底部保留一个非常微妙的渐变，
                  这能让带有背景的文字更好地融入视频，视觉效果更佳。
            -->
            <div
              class="text-center text-white p-6 md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-end md:pb-12 md:bg-gradient-to-t md:from-black/40 md:to-transparent">

              <!-- 副标题 1 -->
              <p class="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide font-light">
                <!-- 
                  关键修改: 
                  - 所有样式都应用在这个 <span> 上。
                  - inline-block: 让 span 像一个块级元素一样拥有 padding，但又保持在文本行内。
                  - bg-black/50: 50% 透明度的黑色背景。
                  - backdrop-blur-sm: 添加iOS风格的毛玻璃效果，模糊背景视频。
                  - px-4 py-2: 合适的内边距。
                  - rounded-lg: 圆角。
                  - leading-relaxed: 增加行高，让文字更舒展。
                 -->
                <span class="inline-block bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg leading-relaxed">
                  60+人专业研发团队 | 3步需求梳理 | 16项流程标准管控 | 12项核心内容交付
                </span>
              </p>

              <!-- 副标题 2 -->
              <p class="mt-4 text-xs sm:text-sm md:text-base lg:text-lg tracking-wide font-light">
                <span class="inline-block bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg leading-relaxed">
                  合理报价 | 费用透明 | 价格低于行业均价 <span class="text-red-500 text-xl sm:text-2xl md:text-3xl font-bold">20%</span>
                </span>
              </p>
            </div>

          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- Hero Section End -->
      <!-- ================================================================= -->


      <!-- Features Grid -->
      <section class=" " id="product">
        <div class="container-custom">
          <div class="text-center mb-16 scroll-animate">
            <h2
              class="text-3xl md:text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300 sound-hover">
              核心<span
                class="text-gradient hover:from-reflect-accent hover:to-reflect-purple-light transition-all duration-500 cursor-default">业务领域</span>
            </h2>
            <p
              class="text-xl text-reflect-text-muted max-w-3xl mx-auto hover:text-white transition-colors duration-300">
              未知者科技为企业提供软件外包、系统设计、产品研发及技术咨询服务，并在预算范围内按时高质量交付项目，助力企业实现数字化转型。
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate">
            <!-- Feature Card 1: 软件外包开发 -->
            <div
              class="bg-white/5  rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-reflect-purple/20 group sound-hover sound-click cursor-pointer">
              <div
                class="jjfa w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-reflect-purple/30 transition-colors duration-300 group-hover:scale-110">
                <svg
                  class="w-6 h-6 text-reflect-purple group-hover:text-reflect-purple-light transition-colors duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 style="margin-left: 10px;"
                  class="text-lg font-semibold text-white group-hover:text-reflect-purple-light transition-colors duration-300">
                  软件外包开发</h3>
              </div>
              <p class="text-reflect-text-muted group-hover:text-reflect-text transition-colors duration-300">
                我们提供全栈开发服务，精通Vue, React, Uni-App等前端框架，以及.Net, Java, PHP等后端技术，为您打造高性能、高可靠的应用程序。</p>
            </div>

            <!-- Feature Card 2: 企业解决方案 -->
            <div
              class="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-reflect-purple/20 group sound-hover sound-click cursor-pointer">
              <div
                class="jjfa w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-reflect-purple/30 transition-colors duration-300 group-hover:scale-110">
                <svg
                  class="w-6 h-6 text-reflect-purple group-hover:text-reflect-purple-light transition-colors duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <h3 style="margin-left: 10px;"
                  class="text-lg font-semibold text-white group-hover:text-reflect-purple-light transition-colors duration-300">
                  企业解决方案</h3>
              </div>
              <p class="text-reflect-text-muted group-hover:text-reflect-text transition-colors duration-300">
                深入理解行业需求，提供定制化的CRM, ERP, SCM等企业管理系统。采用微服务、容器化等先进架构，确保系统高可用和可扩展性。</p>
            </div>

            <!-- Feature Card 3: 质量保证与支持 -->
            <div
              class="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-reflect-purple/20 group sound-hover sound-click cursor-pointer">
              <div
                class="jjfa w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-reflect-purple/30 transition-colors duration-300 group-hover:scale-110">
                <svg
                  class="w-6 h-6 text-reflect-purple group-hover:text-reflect-purple-light transition-colors duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 style="margin-left: 10px;"
                  class="text-lg font-semibold text-white group-hover:text-reflect-purple-light transition-colors duration-300">
                  质量保证与支持</h3>
              </div>
              <p class="text-reflect-text-muted group-hover:text-reflect-text transition-colors duration-300">
                提供从系统部署、安装调试到后期维护的全周期技术支持。通过严谨的测试流程，保障软件质量，确保系统稳定、安全、高效运行。</p>
            </div>

            <!-- Feature Card 4: 一站式服务 -->
            <div
              class="card bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-reflect-purple/20 group sound-hover sound-click cursor-pointer">
              <div
                class="jjfa w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-reflect-purple/30 transition-colors duration-300 group-hover:scale-110">
                <svg
                  class="w-6 h-6 text-reflect-purple group-hover:text-reflect-purple-light transition-colors duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3 style="margin-left: 10px;"
                  class="text-lg font-semibold text-white group-hover:text-reflect-purple-light transition-colors duration-300">
                  一站式服务</h3>
              </div>
              <p class="text-reflect-text-muted group-hover:text-reflect-text transition-colors duration-300 mb-4">
                从需求沟通到源码交付，提供7×24小时极速响应，让您的创意光速变为现实，承诺100%源码交付。
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="tag">APP开发</span>
                <span class="tag">小程序</span>
                <span class="tag">网页系统</span>
                <span class="tag">企业门户</span>
                <span class="tag">AI集成</span>
                <span class="tag">自动化办公</span>
              </div>
            </div>

            <!-- NEW Feature Card 5: AI应用开发 -->
            <div
              class="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-reflect-purple/20 group sound-hover sound-click cursor-pointer">
              <div
                class="jjfa w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-reflect-purple/30 transition-colors duration-300 group-hover:scale-110">
                <svg
                  class="w-6 h-6 text-reflect-purple group-hover:text-reflect-purple-light transition-colors duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 style="margin-left: 10px;"
                  class="text-lg font-semibold text-white group-hover:text-reflect-purple-light transition-colors duration-300">
                  AI应用开发</h3>
              </div>
              <p class="text-reflect-text-muted group-hover:text-reflect-text transition-colors duration-300 mb-4">
                我们具有丰富的大模型应用与AIGC落地经验，能将前沿AI技术融入您的业务，构建独特的智能化产品与服务。
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="tag">大语言模型</span>
                <span class="tag">AIGC</span>
                <span class="tag">智能客服</span>
                <span class="tag">数据分析</span>
                <span class="tag">机器学习</span>
                <span class="tag">流程自动化</span>
              </div>
            </div>

            <!-- UPDATED Feature Card 6: 应用场景 -->
            <div
              class="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-reflect-purple/20 group sound-hover sound-click cursor-pointer">
              <div
                class="jjfa w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-reflect-purple/30 transition-colors duration-300 group-hover:scale-110">
                <svg
                  class="w-6 h-6 text-reflect-purple group-hover:text-reflect-purple-light transition-colors duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <h3 style="margin-left: 10px;"
                  class="text-lg font-semibold text-white group-hover:text-reflect-purple-light transition-colors duration-300">
                  应用场景</h3>
              </div>
              <p class="text-reflect-text-muted group-hover:text-reflect-text transition-colors duration-300 mb-4">
                我们为各行各业提供成熟的解决方案，覆盖全平台终端，助力您的业务在多领域开花结果。
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="tag">APP/小程序</span>
                <span class="tag">H5/网站</span>
                <span class="tag">高定UI商城</span>
                <span class="tag">智慧物联网</span>
                <span class="tag">本地服务</span>
                <span class="tag">教育培训</span>
                <span class="tag">可视化大屏</span>
                <span class="tag">会员/ERP系统</span>
                <span class="tag">物流/医疗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Brain Superpowers Section -->
      <section class="py-20 relative">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-reflect-purple/10 to-transparent" />
        <div class="container-custom relative z-10">
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm text-reflect-text-muted mb-6 animate-fade-in-down hover:bg-white/20 transition-all duration-300 hover:scale-105">
              企业管理系统定制类别
            </div>
            <h2
              class="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up hover:scale-105 transition-transform duration-300">
              深度集成<br>
              <span
                class="text-gradient animate-gradient-shift bg-[length:200%_auto] hover:from-reflect-accent hover:to-reflect-purple transition-all duration-500 cursor-default">赋能企业管理</span>
            </h2>
            <p class="text-xl text-reflect-text-muted max-w-3xl mx-auto animate-fade-in-up hover:text-white transition-colors duration-300"
              style="animation-delay: 0.2s;">
              我们支持与主流ERP、电商平台及办公系统无缝对接，包括但不限于金蝶、用友、SAP、管家婆、淘宝、京东、钉钉等，打破数据孤岛。
            </p>
          </div>

          <!-- Brain Features Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left Side - Feature List -->
            <div class="space-y-8">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-reflect-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z">
                    </path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">财务资金管理</h3>
                  <p class="text-reflect-text-muted">提供应收应付、成本核算、预算控制、电子发票集成等功能，实现财务流程自动化，提升资金使用效率。</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-reflect-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z">
                    </path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">营销服务管理</h3>
                  <p class="text-reflect-text-muted">构建客户360度视图，实现从线索到回款的全流程管理，通过数据分析驱动精准营销和优质客户服务。</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-reflect-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h5m-5 4h5">
                    </path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">供应链生产管理</h3>
                  <p class="text-reflect-text-muted">整合采购、库存、生产、物流等环节，实现供应链协同与透明化，优化库存，提高订单交付能力。</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-reflect-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0l3-3m0 0l3 3m-3-3v11">
                    </path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">办公协同管理</h3>
                  <p class="text-reflect-text-muted">定制开发OA系统，集成流程审批、项目管理、知识文档、即时通讯等功能，提升内部协作效率。</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-reflect-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-reflect-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                    </path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-white mb-2">人力资源管理</h3>
                  <p class="text-reflect-text-muted">涵盖组织架构、员工档案、考勤、薪酬、绩效、招聘等模块，构建一体化的人力资源管理平台。</p>
                </div>
              </div>
            </div>
            <div class="relative h-96">
              <img loading="lazy" src="../public/code01.jpg" alt="企业管理系统集成"
                class="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            </div>
          </div>
        </div>
      </section>

      <!-- Security Section -->
      <section class="py-20 relative">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm text-reflect-text-muted mb-6">
              <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                </path>
              </svg>
              系统安全
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              <span class="text-gradient">全方位安全</span>保障体系
            </h2>
            <p class="text-xl text-reflect-text-muted max-w-3xl mx-auto">
              多维度的系统安全防范，是您项目稳定运行的坚实基础。
            </p>
          </div>

          <!-- Security Visual -->
          <div class="max-w-3xl mx-auto">
            <div
              class="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10 space-y-6">
              <div>
                <h3 class="text-2xl font-bold text-white mb-3 text-center">代码级别</h3>
                <p class="font-mono text-sm text-reflect-text-muted text-center break-all">防SQL注入 | 过滤拦截 | 并发安全 |
                  加密(MD5/RSA/DES/SM1/SM2/SM3/SM4) | 防XSS/CSRF攻击 | 防目录遍历</p>
              </div>
              <div class="border-t border-white/10"></div>
              <div>
                <h3 class="text-2xl font-bold text-white mb-3 text-center">应用级别</h3>
                <p class="font-mono text-sm text-reflect-text-muted text-center break-all">身份认证机制 | 角色权限控制(RBAC) | 渗透测试
                  |
                  详细日志追踪 | API接口鉴权</p>
              </div>
              <div class="border-t border-white/10"></div>
              <div>
                <h3 class="text-2xl font-bold text-white mb-3 text-center">数据级别</h3>
                <p class="font-mono text-sm text-reflect-text-muted text-center break-all">RAID存储 | 双机热备 | 定时/异地备份 |
                  核心数据加密 | 数据完整性校验</p>
              </div>
              <div class="border-t border-white/10"></div>
              <div>
                <h3 class="text-2xl font-bold text-white mb-3 text-center">网络级别</h3>
                <p class="font-mono text-sm text-reflect-text-muted text-center break-all">防火墙策略 | 入侵检测(IDS) |
                  网络隔离(VLAN) | 虚拟专用网(VPN) | SSL/TLS加密传输</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- AI Section -->
      <section class="py-20 relative">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-reflect-purple/5 to-transparent" />
        <div class="container-custom relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              AI赋能<br>
              <span class="text-gradient">驱动业务智能升级</span>
            </h2>
            <p class="text-xl text-reflect-text-muted max-w-3xl mx-auto">
              我们运用前沿的AI技术，如大语言模型(LLM)与机器学习，为您的业务提供数据分析、智能客服、流程自动化等解决方案，成为您的企业智慧大脑。
            </p>
          </div>

          <!-- AI Demo -->
          <div class="max-w-4xl mx-auto">
            <div style="padding: 5px;"
              class="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div style="padding: 5px;"
                class="bg-gradient-to-br from-reflect-purple/20 to-reflect-purple-light/20 rounded-lg p-12 text-center">
                <img src="../public/ai.png" loading="lazy" alt="AI赋能演示" class="rounded-lg shadow-xl">
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Process Section -->
      <section class="py-20 relative">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm text-reflect-text-muted mb-6">
              合作流程
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              严谨规范的<br>
              <span class="text-gradient">项目交付流程</span>
            </h2>
            <p class="text-xl text-reflect-text-muted max-w-3xl mx-auto">
              我们遵循标准化的开发流程，确保项目透明、高效，并在每个阶段与您保持紧密沟通。
            </p>
          </div>

          <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <!-- Step 1 -->
            <div class="bg-white/5  rounded-xl p-6 border border-white/10 hover:border-reflect-purple transition-all">
              <div class="text-3xl font-bold text-reflect-purple mb-2">01</div>
              <h3 class="text-lg font-semibold text-white mb-2">需求沟通与分析</h3>
              <p class="text-sm text-reflect-text-muted">深入了解您的业务目标与痛点，共同梳理和明确项目需求。</p>
            </div>
            <!-- Step 2 -->
            <div class="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-reflect-purple transition-all">
              <div class="text-3xl font-bold text-reflect-purple mb-2">02</div>
              <h3 class="text-lg font-semibold text-white mb-2">原型与方案设计</h3>
              <p class="text-sm text-reflect-text-muted">提供UI/UX设计和技术架构方案，让您提前预见产品形态。</p>
            </div>
            <!-- Step 3 -->
            <div class="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-reflect-purple transition-all">
              <div class="text-3xl font-bold text-reflect-purple mb-2">03</div>
              <h3 class="text-lg font-semibold text-white mb-2">开发与测试</h3>
              <p class="text-sm text-reflect-text-muted">采用敏捷开发模式，定期迭代。通过严格测试，确保软件质量。</p>
            </div>
            <!-- Step 4 -->
            <div class=" bg-white/5 rounded-xl p-6 border border-white/10 hover:border-reflect-purple transition-all">
              <div class="text-3xl font-bold text-reflect-purple mb-2">04</div>
              <h3 class="text-lg font-semibold text-white mb-2">交付、部署与支持</h3>
              <p class="text-sm text-reflect-text-muted">协助系统上线，提供操作培训，并提供持续的技术维护与支持服务。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Integrations Section -->
      <section class="py-20 relative">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              我们<span class="text-gradient">擅长的技术</span>
            </h2>
            <p class="text-xl text-reflect-text-muted max-w-3xl mx-auto">
              我们掌握行业前沿的全栈技术，能够满足您多样化、高标准的企业需求。
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              class="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
              <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4"><span
                  class="text-blue-400 font-bold text-2xl">前</span></div>
              <h3 class="text-lg font-semibold text-white mb-2">前端技术</h3>
              <p class="text-reflect-text-muted text-sm">Vue.js, React, Angular, Uni-App, TypeScript, Webpack</p>
            </div>
            <div
              class="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
              <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4"><span
                  class="text-green-400 font-bold text-2xl">后</span></div>
              <h3 class="text-lg font-semibold text-white mb-2">后端技术</h3>
              <p class="text-reflect-text-muted text-sm">Java, SpringBoot, .NET Core, PHP, Python, Go, Node.js</p>
            </div>
            <div
              class="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
              <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4"><span
                  class="text-purple-400 font-bold text-2xl">移</span></div>
              <h3 class="text-lg font-semibold text-white mb-2">移动端开发</h3>
              <p class="text-reflect-text-muted text-sm">iOS (Swift), Android (Kotlin), Flutter, React Native</p>
            </div>
            <div
              class="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
              <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4"><span
                  class="text-orange-400 font-bold text-2xl">维</span></div>
              <h3 class="text-lg font-semibold text-white mb-2">数据库与运维</h3>
              <p class="text-reflect-text-muted text-sm">MySQL, PostgreSQL, Redis, Docker, Kubernetes, Jenkins</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-20 relative">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm text-reflect-text-muted mb-6">
              客户之声
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              <span class="text-gradient">深受客户信赖</span>
            </h2>
            <p class="text-xl text-reflect-text-muted">
              听听我们的合作伙伴怎么说。
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white/5 rounded-xl p-6 border border-white/10">
              <div class="flex items-start space-x-3 mb-4">
                <div
                  class="w-10 h-10 bg-gradient-to-r from-reflect-purple to-reflect-purple-light rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-sm">李</span>
                </div>
                <div>
                  <div class="text-white font-semibold">李总</div>
                  <div class="text-reflect-text-muted text-sm">某智能制造企业 CEO</div>
                </div>
              </div>
              <p class="text-reflect-text text-sm">
                未知者科技为我们开发的生产管理系统（MES）非常专业，帮助我们实现了生产流程的数字化，效率提升了30%。他们的团队响应迅速，服务周到。
              </p>
            </div>

            <div class="bg-white/5 rounded-xl p-6 border border-white/10">
              <div class="flex items-start space-x-3 mb-4">
                <div
                  class="w-10 h-10 bg-gradient-to-r from-reflect-purple to-reflect-purple-light rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-sm">王</span>
                </div>
                <div>
                  <div class="text-white font-semibold">王经理</div>
                  <div class="text-reflect-text-muted text-sm">某电商平台 运营总监</div>
                </div>
              </div>
              <p class="text-reflect-text text-sm">
                与未知者科技合作开发我们的CRM系统是一次非常愉快的经历。系统功能强大且稳定，完美对接了我们的电商平台，客户管理和营销自动化变得前所未有的简单。
              </p>
            </div>

            <div class="bg-white/5 rounded-xl p-6 border border-white/10">
              <div class="flex items-start space-x-3 mb-4">
                <div
                  class="w-10 h-10 bg-gradient-to-r from-reflect-purple to-reflect-purple-light rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-sm">张</span>
                </div>
                <div>
                  <div class="text-white font-semibold">张先生</div>
                  <div class="text-reflect-text-muted text-sm">初创公司 创始人</div>
                </div>
              </div>
              <p class="text-reflect-text text-sm">
                作为一家初创公司，我们需要一个快速、可靠的技术伙伴。未知者科技不仅技术过硬，而且能深刻理解我们的商业模式，为我们打造的App产品非常有竞争力。
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 合作伙伴 -->
      <section class="py-20 relative scroll-animate">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
              <span class="text-gradient">合作服务商</span>
            </h2>
            <!-- <p class="text-xl text-reflect-text-muted max-w-3xl mx-auto">
        我们与全球顶尖的云服务提供商深度合作，为您的项目提供稳定、可靠的基础设施。
      </p> -->
          </div>
          <div class="multi-marquee-container">
            <div v-for="(row, rowIndex) in partnerRows" :key="rowIndex" class="partner-marquee-container"
              :style="getRowStyle(rowIndex)">
              <div class="partner-marquee-content">
                <div v-for="partner in row" :key="partner.name + '-1'" class="partner-logo-item">
                  <img :src="partner.logo"  :alt="partner.name" />
                </div>
                <div v-for="partner in row" :key="partner.name + '-2'" class="partner-logo-item">
                  <img :src="partner.logo"  :alt="partner.name" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <!-- Pricing Section 隐藏 -->
      <section style="display: none;" class="py-20" id="pricing"></section>

      <!-- Footer -->
      <footer class="py-12 border-t border-white/10">
        <div class="container-custom text-center text-reflect-text-muted">

          <!-- 主要信息: 联系方式与地址 -->
          <div class="text-sm space-y-3">
            <p>
              <span>咨询热线：</span>
              <a href="tel:13866661447" class="hover:text-white transition-colors">13866661447</a>

            </p>
            <p>
              <span>合肥分公司地址：</span>合肥市瑶海区香格里拉国际中心A座1909室
            </p>
          </div>

          <!-- 版权与备案信息 -->
          <div class="pt-6 mt-6 border-t border-white/10 text-xs space-y-2">
            <p>
              Copyright © 2023-2025 www.hfwzz.com | 未知者科技(合肥)有限公司 版权所有
            </p>
            <div class="flex items-center justify-center space-x-4">
              <span class="inline-flex items-center">
                <img class="w-4 h-4 mr-1.5" loading="lazy" src="../public/tb/beian.webp" alt="">
                网安备：等待备案
              </span>
              <br class="sm:hidden">
              <a href="https://beian.miit.gov.cn/" target="_blank"
                class="hover:text-reflect-purple-light transition-colors">
                ICP:皖ICP备2025077290号-3
              </a>
            </div>
          </div>

        </div>
      </footer>
    </main>
  </div>
  <ContactModal :show="isModalVisible" @close="closeContactModal" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated,defineAsyncComponent } from 'vue'

import Hls from 'hls.js'

import { useScrollAnimation } from './composables/useScrollAnimation'
// 1. 导入我们新创建的 ContactModal 组件
const ContactModal = defineAsyncComponent(() => 
  import('./components/ContactModal.vue')
)

// 2. 创建一个 ref 来引用 video 元素
const videoPlayer = ref<HTMLVideoElement | null>(null)


const { animateOnScroll } = useScrollAnimation()
const audioContext = ref<AudioContext | null>(null)

// 2. 定义一个响应式状态来控制弹窗的显示/隐藏
const isModalVisible = ref(false)

// 3. 创建打开和关闭弹窗的函数
const openContactModal = () => {
  isModalVisible.value = true
}
const closeContactModal = () => {
  isModalVisible.value = false
}


// 1. 定义合作伙伴数据的 JSON 结构
//    这是一个数组，每个元素代表一行。
//    每一行又是一个数组，包含该行的合作伙伴对象。
const partnerRows = ref([
  // 第一行
  [
    { name: '阿里云', logo: '/logo/阿里云.svg' },
    { name: '腾讯云', logo: '/logo/腾讯云.svg' },
    { name: '华为云', logo: '/logo/华为云.svg' },
    { name: 'google', logo: '/logo/google.svg' },
  ],
  // // 第二行
  [
    { name: '中国电信', logo: '/logo/中国电信.svg' },
    { name: '中国移动', logo: '/logo/中国移动.svg' },
    { name: '联想', logo: '/logo/联想.svg' },
    { name: '华硕', logo: '/logo/华硕.svg' },
    { name: '小米', logo: '/logo/小米.svg' }
  ],
  // // 第三行 
  // [
  //  { name: '阿里云', logo: '/logo/阿里云.svg' },
  //   { name: '腾讯云', logo: '/logo/腾讯云.svg' },
  //   { name: '华为云', logo: '/logo/华为云.svg' }
  // ]
]);

// 2. 定义一个方法来根据行索引决定滚动方向
const getRowStyle = (index: number) => {
  // 如果是偶数行 (0, 2, 4...), 则反向滚动
  if (index % 2 === 0) {
    return { '--scroll-direction': 'reverse' };
  }
  // 奇数行默认方向
  return {};
};



const playHoverSound = (frequency = 800, duration = 100) => {
  if (!audioContext.value) return
  const oscillator = audioContext.value.createOscillator()
  const gainNode = audioContext.value.createGain()
  oscillator.connect(gainNode)
  gainNode.connect(audioContext.value.destination)
  oscillator.frequency.value = frequency
  oscillator.type = 'sine'
  gainNode.gain.setValueAtTime(0, audioContext.value.currentTime)
  gainNode.gain.linearRampToValueAtTime(0.1, audioContext.value.currentTime + 0.01)
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.value.currentTime + duration / 1000)
  oscillator.start(audioContext.value.currentTime)
  oscillator.stop(audioContext.value.currentTime + duration / 1000)
}

const playClickSound = () => {
  if (!audioContext.value) return
  const oscillator = audioContext.value.createOscillator()
  const gainNode = audioContext.value.createGain()
  oscillator.connect(gainNode)
  gainNode.connect(audioContext.value.destination)
  oscillator.frequency.value = 1200
  oscillator.type = 'square'
  gainNode.gain.setValueAtTime(0, audioContext.value.currentTime)
  gainNode.gain.linearRampToValueAtTime(0.2, audioContext.value.currentTime + 0.01)
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.value.currentTime + 0.1)
  oscillator.start(audioContext.value.currentTime)
  oscillator.stop(audioContext.value.currentTime + 0.1)
}

onMounted(() => {

  // 3. 初始化 HLS 播放器
  const videoSrc = '../m3u8/2/output.m3u8' // 您的 M3U8 文件路径

  if (videoPlayer.value && Hls.isSupported()) {
    const hls = new Hls({
      maxBufferLength: 30, // 减少最大缓冲时长，节省带宽
      maxMaxBufferLength: 60,
      startLevel: -1, // 自动选择最佳起始清晰度
      capLevelToPlayerSize: true, // 限制分辨率不超过播放器大小（节省流量）
    })
    hls.loadSource(videoSrc)
    hls.attachMedia(videoPlayer.value)
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      // 在元数据加载后可以尝试播放，尽管您已经有 autoplay
      videoPlayer.value?.play().catch(error => {
        console.warn("Autoplay was prevented:", error)
      });
    });
  } else if (videoPlayer.value?.canPlayType('application/vnd.apple.mpegurl')) {
    // 这是为原生支持 HLS 的设备（如 Safari）准备的后备方案
    videoPlayer.value.src = videoSrc;
  }

  const sections = document.querySelectorAll('.scroll-animate')
  sections.forEach(section => {
    animateOnScroll(section)
  })
  const interactiveElements = document.querySelectorAll('.sound-hover')
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => playHoverSound())
  })
  const clickElements = document.querySelectorAll('.sound-click')
  clickElements.forEach(element => {
    element.addEventListener('click', () => playClickSound())
  })
})

onUpdated(() => {
  const sections = document.querySelectorAll('.scroll-animate')
  sections.forEach(section => {
    animateOnScroll(section)
  })
  const interactiveElements = document.querySelectorAll('.sound-hover')
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => playHoverSound())
  })
  const clickElements = document.querySelectorAll('.sound-click')
  clickElements.forEach(element => {
    element.addEventListener('click', () => playClickSound())
  })
})
</script>

<style>
/* (您的 Style 样式内容保持不变，此处省略) */
/* =================================================================
   卡片内标签 (Tag) 的样式
   ================================================================= */

.tag {
  /* --- 布局与盒模型 --- */
  display: inline-block;
  /* 确保 padding 生效且元素保持行内特性 */
  padding: 0.25rem 0.625rem;
  /* 垂直 4px, 水平 10px (类似 py-1 px-2.5) */

  /* --- 字体与文本 --- */
  font-size: 0.75rem;
  /* 12px (类似 text-xs) */
  font-weight: 500;
  /* (类似 font-medium) */

  /* --- 背景与颜色 --- */
  /* 假设你的颜色变量定义在 :root 中，如果没有，请直接替换为具体颜色值 */
  /* Fallback color (备用色): #a1a1aa (一个中性灰色) */
  color: var(--reflect-text-muted, #a1a1aa);
  background-color: rgba(255, 255, 255, 0.05);
  /* (类似 bg-white/5) */

  /* --- 边框与圆角 --- */
  border-radius: 9999px;
  /* (类似 rounded-full)，使其呈药丸形状 */

  /* --- 过渡动画 --- */
  /* (类似 transition-all duration-300) */
  transition-property: color, background-color, transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

/* =================================================================
   当鼠标悬停在父级 .group 元素上时，.tag 的样式变化
   ================================================================= */

.group:hover .tag {
  /* Fallback color (备用色): #c4b5fd (一个淡紫色) */
  color: var(--reflect-purple-light, #c4b5fd);

  /* Fallback color (备用色): rgba(141, 99, 241, 0.2) (一个带透明的紫色) */
  background-color: var(--reflect-purple-20, rgba(141, 99, 241, 0.2));
}

.card {
  background: rgba(35, 46, 51, 0.25);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
}

.jjfa {
  display: flex;
  align-items: center;
  width: auto;
}

/* =================================================================
   1. 基础与全局设置
   ================================================================= */
body {
  /* 平滑滚动行为 */
  scroll-behavior: smooth;
}

/* 定义渐变文字的基础样式 */
.text-gradient {
  /* background-image: linear-gradient(90deg, var(--reflect-purple), var(--reflect-purple-light), var(--reflect-accent)); */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media (max-width: 768px) {}

/* =================================================================
   2. Keyframes 核心动画帧定义
   ================================================================= */

/* 英雄区域元素入场动画 */
@keyframes hero-entrance {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 极光背景动画 */
@keyframes aurora {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1.2);
  }

  50% {
    transform: translate(-50%, -50%) rotate(180deg) scale(1.5);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(1.2);
  }
}

/* 发光脉冲动画 */
@keyframes glow-pulse {

  0%,
  100% {
    opacity: 0.8;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

/* 缓慢浮动动画 */
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

/* 渐变背景位移动画 */
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* 向上淡入 */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 向下淡入 */
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 缓慢弹跳动画 */
@keyframes bounce-slow {

  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

/* 闪烁动画 (如果您想启用HTML中被注释掉的闪烁星星) */
@keyframes sparkle {

  0%,
  100% {
    opacity: 0;
    transform: scale(0.5);
  }

  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}


/* =================================================================
   3. 动画类应用
   ================================================================= */

/* 英雄区域 (Hero Section) 入场动画 */
.animate-hero-badge {
  animation: hero-entrance 0.8s ease-out forwards;
}

.animate-hero-title {
  animation: hero-entrance 1s ease-out 0.2s forwards;
  opacity: 0;
  /* 动画开始前隐藏 */
}

.animate-hero-subtitle {
  animation: hero-entrance 1s ease-out 0.4s forwards;
  opacity: 0;
}

.animate-hero-demo {
  animation: hero-entrance 1.2s ease-out 0.6s forwards;
  opacity: 0;
}

/* 应用动画到具体类名 */
.animate-aurora {
  animation: aurora 20s linear infinite;
}

.animate-glow-pulse {
  animation: glow-pulse 4s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-gradient-shift {
  animation: gradient-shift 5s ease infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out both;
}

.animate-fade-in-down {
  animation: fade-in-down 1s ease-out both;
}

.animate-sparkle {
  animation: sparkle 3s ease-in-out infinite;
}

/* =================================================================
   4. 滚动触发动画
   ================================================================= */
.scroll-animate {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* 当JS添加is-visible类时触发动画 */
.scroll-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
}


.bg-reflect-dark {
  position: relative;
  /* background-color: #0c0a09; */
  overflow: hidden;
}


/**
 * =================================================================
 * 5. 【最终优化版】高密度粒子背景动画
 * =================================================================
 */

/* 创建两个伪元素作为两组独立的粒子容器 */
.bg-reflect-dark::before,
.bg-reflect-dark::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 1px;
  /* 伪元素本身的大小不重要，关键是 box-shadow */
  height: 1px;
  z-index: -1;
  border-radius: 50%;
}

/* =================================================================
   第一组粒子 (运动较慢)
   ================================================================= */
.bg-reflect-dark::before {
  box-shadow:
    /* --- 紫色系粒子 (主色) --- */
    20vw 40vh 2px 2px rgba(141, 99, 241, 0.9),
    88vw 21vh 3px 3px rgba(141, 99, 241, 1),
    73vw 92vh 2px 2px rgba(141, 99, 241, 0.8),
    5vw 5vh 2px 2px rgba(141, 99, 241, 0.7),
    95vw 55vh 3px 3px rgba(141, 99, 241, 1),
    50vw 50vh 2px 2px rgba(141, 99, 241, 0.8),
    15vw 80vh 3px 3px rgba(141, 99, 241, 0.9),
    66vw 12vh 2px 2px rgba(141, 99, 241, 0.7),
    -2vw 60vh 3px 3px rgba(141, 99, 241, 1),
    42vw 98vh 2px 2px rgba(141, 99, 241, 0.8),
    78vw 33vh 3px 3px rgba(141, 99, 241, 0.9),
    28vw 2vh 2px 2px rgba(141, 99, 241, 0.7),
    61vw 68vh 3px 3px rgba(141, 99, 241, 1),
    91vw 8vh 2px 2px rgba(141, 99, 241, 0.8),
    4vw 35vh 3px 3px rgba(141, 99, 241, 0.9),

    /* --- 蓝色系粒子 (点缀色) --- */
    12vw 15vh 2px 2px rgba(56, 189, 248, 0.9),
    45vw 75vh 3px 3px rgba(56, 189, 248, 1),
    80vw 5vh 2px 2px rgba(56, 189, 248, 0.8),
    30vw 90vh 3px 3px rgba(56, 189, 248, 1),
    65vw 30vh 2px 2px rgba(56, 189, 248, 0.9),
    90vw 70vh 3px 3px rgba(56, 189, 248, 0.8),
    2vw 58vh 2px 2px rgba(56, 189, 248, 1),
    55vw 18vh 3px 3px rgba(56, 189, 248, 0.9),
    83vw 88vh 2px 2px rgba(56, 189, 248, 0.8),
    18vw 45vh 3px 3px rgba(56, 189, 248, 1),
    38vw 62vh 2px 2px rgba(56, 189, 248, 0.9);

  /* 应用一个较慢的动画，时长 30 秒 */
  animation: move-up 50s linear infinite;
}

/* =================================================================
   第二组粒子 (运动稍快，且有延迟)
   ================================================================= */
.bg-reflect-dark::after {
  box-shadow:
    /* --- 亮紫色粒子 (高光色) --- */
    8vw 10vh 3px 3px rgba(168, 85, 247, 1),
    91vw 44vh 2px 2px rgba(168, 85, 247, 0.8),
    48vw 60vh 3px 3px rgba(168, 85, 247, 0.9),
    19vw 95vh 2px 2px rgba(168, 85, 247, 1),
    70vw 25vh 3px 3px rgba(168, 85, 247, 0.8),
    33vw 82vh 2px 2px rgba(168, 85, 247, 0.9),
    -5vw 20vh 3px 3px rgba(168, 85, 247, 1),
    58vw 1vh 2px 2px rgba(168, 85, 247, 0.8),
    24vw 70vh 3px 3px rgba(168, 85, 247, 0.9),
    77vw 85vh 2px 2px rgba(168, 85, 247, 1),
    10vw 30vh 3px 3px rgba(168, 85, 247, 0.8),

    /* --- 更多混合色粒子 --- */
    85vw 5vh 2px 2px rgba(141, 99, 241, 0.8),
    14vw 65vh 3px 3px rgba(56, 189, 248, 0.9),
    52vw 32vh 2px 2px rgba(168, 85, 247, 1),
    98vw 98vh 3px 3px rgba(141, 99, 241, 0.7),
    3vw 88vh 2px 2px rgba(56, 189, 248, 0.8),
    29vw 55vh 3px 3px rgba(168, 85, 247, 0.9),
    68vw 80vh 2px 2px rgba(141, 99, 241, 1),
    41vw 12vh 3px 3px rgba(56, 189, 248, 0.8),
    93vw 30vh 2px 2px rgba(168, 85, 247, 0.9),
    22vw 19vh 3px 3px rgba(141, 99, 241, 0.7),
    75vw 50vh 2px 2px rgba(56, 189, 248, 1),
    5vw 105vh 3px 3px rgba(168, 85, 247, 0.8);

  /* 应用一个不同的动画：时长25秒，延迟5秒开始 */
  animation: move-up 25s 5s linear infinite;
}

/* 动画效果保持不变，适用于两组粒子 */
@keyframes move-up {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    /* 确保粒子完全移出视口顶部后才循环 */
    transform: translateY(-110vh);
    opacity: 0;
  }
}

/* =================================================================
   6. 【新增】炫酷的背景模糊线条动画
   ================================================================= */

/* 定义线条动画的 Keyframes */
@keyframes animate-blurry-lines {
  from {
    transform: rotate(0deg) scale(1.2);
  }

  to {
    transform: rotate(360deg) scale(1.5);
  }
}

/*
 * 为主背景容器 .bg-reflect-dark 添加 ::after 伪元素
 * 这个伪元素将作为我们所有线条的画布
 */
.bg-reflect-dark::after {
  content: '';
  position: fixed;
  /* 使用 fixed 定位，使其固定在视窗背景，不随页面滚动 */
  top: -50%;
  /* 扩大伪元素尺寸，确保旋转时边缘不会穿帮 */
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: -1;
  /* 将其置于最底层，位于所有内容之后 */
  pointer-events: none;
  /* 确保它不会捕获鼠标事件，不影响交互 */

  /*
   * 核心：使用多个线性渐变来绘制线条
   * 每个 linear-gradient() 就是一条线
   * 我们通过调整角度、颜色和色标位置来定义每条线的外观
   */
  background-image:
    /* 线条1: 紫色 */
    linear-gradient(160deg,
      transparent 49.5%,
      rgba(141, 99, 241, 0.4) 50%,
      transparent 50.5%),
    /* 线条2: 亮紫色 */
    linear-gradient(80deg,
      transparent 49.5%,
      rgba(168, 85, 247, 0.3) 50%,
      transparent 50.5%),
    /* 线条3: 蓝色调 */
    linear-gradient(-20deg,
      transparent 49.5%,
      rgba(56, 189, 248, 0.4) 50%,
      transparent 50.5%);

  /*
   * 灵魂：应用强大的模糊滤镜
   * 这是创造“模糊”和“柔和”效果的关键
   */
  filter: blur(50px);

  /*
   * 应用动画：让线条动起来！
   * 动画名称: animate-blurry-lines
   * 持续时间: 200秒 (非常缓慢，营造氛围感)
   * 速度曲线: linear (匀速)
   * 循环方式: infinite (无限循环)
   */
  animation: animate-blurry-lines 20s linear infinite;
}

/* 确保您的主要内容容器有一个 z-index，使其位于背景效果之上 */
main {
  position: relative;
  z-index: 10;
}

/* 1. 定义滚动动画 (保持不变) */
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

/* 2. 多行主容器样式 */
.multi-marquee-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  /* 设置行与行之间的垂直间距 */
}

/* 3. 单行滚动容器样式 (保持不变) */
.partner-marquee-container {
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
  mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
}

/* 4. 内容层样式 (核心改动) */
.partner-marquee-content {
  display: flex;
  width: max-content;

  /* 
   * 应用动画: 
   * - animation-duration: 滚动时长
   * - animation-timing-function: 速度曲线
   * - animation-iteration-count: 循环次数
   * - animation-name: 动画名
   * - animation-direction: 动画方向 (通过 CSS 变量控制)
   */
  animation: scroll-left 35s linear infinite;
  animation-direction: var(--scroll-direction, normal);
  /* 默认为 normal (正向) */
}

/* 5. 悬停暂停 (作用于主容器) */
.multi-marquee-container:hover .partner-marquee-content {
  animation-play-state: paused;
}

/* 6. 单个 Logo 容器样式 (保持不变) */
.partner-logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.5rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

/* 7. Logo 图片样式 (保持不变) */
.partner-logo-item img {
  max-width: 130px;
  max-height: 45px;
  object-fit: contain;
  /* filter: grayscale(100%) brightness(0.8); */
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
}

/* 8. Logo 悬停效果 (保持不变) */
.partner-logo-item:hover {
  transform: scale(1.1);
}

.partner-logo-item:hover img {
  filter: grayscale(0%) brightness(1);
  opacity: 1;
}
</style>