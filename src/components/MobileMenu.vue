<template>
  <div>
    <!-- Desktop and Mobile Button -->
    <div class="flex items-center space-x-4">
      <button @click="openContactModal" class="btn-primary sound-hover sound-click">
        联系我们2
      </button>
    </div>

    <!-- 
      遮罩层 (Backdrop/Overlay)
      - 使用 <Transition> 实现淡入淡出效果
      - v-if="isModalVisible" 控制其显示和隐藏
      - @click="closeContactModal" 实现点击遮罩关闭弹窗的功能
    -->
    <!-- <Transition
      enter-active-class="transition-opacity duration-100 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isModalVisible"
        @click="closeContactModal"
        class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      ></div>
    </Transition> -->

    <!-- 
      联系弹窗组件 (Contact Modal Component)
      - 注意：这个组件的 z-index (例如 z-50) 需要高于遮罩层的 z-index (z-40)
    -->
    <ContactModal  :show="isModalVisible" @close="closeContactModal" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted} from 'vue'
// 确保您已经创建并正确导入了 ContactModal 组件
import ContactModal from './ContactModal.vue' 

// 1. 响应式状态控制弹窗的显示/隐藏
const isModalVisible = ref(false)

// 2. 打开弹窗的函数
const openContactModal = () => {
  isModalVisible.value = true
}

// 3. 关闭弹窗的函数
const closeContactModal = () => {
  isModalVisible.value = false
}

// 4. 监听弹窗状态变化，控制 body 滚动
// watch(isModalVisible, (newValue) => {
//   if (newValue) {
//     document.body.style.overflow = 'hidden'
//   } else {
//     document.body.style.overflow = ''
//   }
// })

// 5. (可选) 添加键盘事件监听器，用于按 "Escape" 键关闭弹窗
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalVisible.value) {
    closeContactModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  // 确保在组件卸载时恢复滚动
  document.body.style.overflow = ''
})
</script>

<style>
/* 您的基础样式 */
.btn-primary {
  padding: 10px 20px;
  background-color: #4f46e5;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #4338ca;
}
</style>