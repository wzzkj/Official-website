<template>
  <!-- 使用 Vue 的 Transition 组件实现平滑的淡入淡出效果 -->
  <Transition name="fade">
    <div 
      v-if="show" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click.self="close"
    >
      <!-- 遮罩背景 -->
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <!-- 弹窗内容 -->
      <div class="relative w-full max-w-md bg-gray-800/80 border border-white/20 rounded-2xl shadow-xl text-white p-8 text-center">
        
        <!-- 关闭按钮 -->
        <button @click="close" class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 class="text-2xl font-bold mb-4">扫码联系我们</h2>
        <p class="text-gray-400 mb-6">添加企业微信，获取专属技术支持</p>

        <!-- 
          重要提示：
          请将下面 img 标签的 src 替换成你的企业微信二维码图片地址！
        -->
        <img src="../../public/qr.jpg" alt="企业微信二维码" class="w-48 h-48 mx-auto rounded-lg mb-6 border-2 border-white/20">
        
        <!-- 其他联系方式 -->
        <div class="space-y-2 text-left">
          <p class="text-gray-300">
            <strong class="font-semibold text-white">联系电话:</strong> 13866661447
          </p>
          <!-- <p class="text-gray-300">
            <strong class="font-semibold text-white">电子邮箱:</strong> contact@yourcompany.com
          </p> -->
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

// 1. 定义组件的 props 和 emits
// 'show' prop 用于控制弹窗的显示状态
const props = defineProps<{
  show: boolean
}>()

// 'close' event 用于通知父组件关闭弹窗
const emit = defineEmits(['close'])

// 2. 定义关闭弹窗的函数
const close = () => {
  emit('close');
}

// 3. (高级功能) 添加键盘 Escape 键关闭弹窗
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.show) {
    close();
  }
}

// 在组件挂载时添加事件监听，在卸载时移除，防止内存泄漏
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
})
</script>

<style scoped>
/* 定义 Transition 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>