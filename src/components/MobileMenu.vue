<template>
  <div class="md:hidden">
    <!-- Hamburger Button -->
    <button
      @click="toggleMenu"
      class="relative z-50 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-reflect-purple"
      :class="{ 'fixed top-4 right-4': isOpen }"
    >
      <div class="w-6 h-6 flex flex-col justify-center items-center">
        <!-- Hamburger Lines -->
        <span
          class="block w-6 h-0.5 bg-white transition-all duration-300 transform"
          :class="isOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'"
        />
        <span
          class="block w-6 h-0.5 bg-white transition-all duration-300 mt-1"
          :class="isOpen ? 'opacity-0' : 'opacity-100'"
        />
        <span
          class="block w-6 h-0.5 bg-white transition-all duration-300 transform mt-1"
          :class="isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'"
        />
      </div>
    </button>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        @click="closeMenu"
      />
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isOpen"
        class="fixed top-0 right-0 z-40 w-80 h-full bg-gradient-to-b from-reflect-dark-blue to-reflect-dark border-l border-white/10 shadow-2xl"
      >
        <!-- Menu Header -->
        <div class="flex items-center justify-between p-6 border-b border-white/10">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-reflect-purple to-reflect-purple-light rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">R</span>
            </div>
            <span class="text-xl font-semibold text-white">Reflect</span>
          </div>
        </div>

        <!-- Menu Items -->
        <nav class="p-6 space-y-4">
          <a
            v-for="(item, index) in menuItems"
            :key="item.name"
            :href="item.href"
            class="block py-3 px-4 text-lg text-reflect-text-muted hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:translate-x-1"
            :style="{ animationDelay: `${index * 100}ms` }"
            :class="isOpen ? 'animate-slide-in-right' : ''"
            @click="closeMenu"
          >
            {{ item.name }}
          </a>
        </nav>

        <!-- Auth Buttons -->
        <div class="absolute bottom-6 left-6 right-6 space-y-3">
          <button
            class="w-full py-3 px-4 text-reflect-text-muted hover:text-white transition-colors duration-300 text-center border border-white/20 rounded-lg hover:bg-white/10"
            @click="closeMenu"
          >
            Login
          </button>
          <button
            class="w-full btn-primary text-center"
            @click="closeMenu"
          >
            Sign up
          </button>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute top-1/2 -left-20 w-40 h-40 bg-reflect-purple/20 rounded-full blur-3xl animate-pulse" />
        <div class="absolute bottom-1/4 -right-16 w-32 h-32 bg-reflect-purple-light/15 rounded-full blur-2xl animate-float" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const menuItems = [
  { name: 'Product', href: '#product' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Company', href: '#company' },
  { name: 'Blog', href: 'https://reflect.app/blog' },
  { name: 'Changelog', href: 'https://reflect.app/changelog' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  // Prevent body scroll when menu is open
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

// Close menu on escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>
