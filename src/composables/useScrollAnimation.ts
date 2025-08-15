import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observedElements = ref<Set<Element>>(new Set())
  const observer = ref<IntersectionObserver | null>(null)

  const animateOnScroll = (element: Element, animationClass: string = 'animate-fade-in-up') => {
    if (!element) return

    // Add initial state
    element.classList.add('opacity-0', 'translate-y-8')
    observedElements.value.add(element)

    if (observer.value) {
      observer.value.observe(element)
    }
  }

  const initObserver = () => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target
            // Trigger animation
            element.classList.remove('opacity-0', 'translate-y-8')
            element.classList.add('animate-fade-in-up')

            // Stop observing this element
            observer.value?.unobserve(element)
            observedElements.value.delete(element)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all existing elements
    observedElements.value.forEach(element => {
      observer.value?.observe(element)
    })
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    observer.value?.disconnect()
    observedElements.value.clear()
  })

  return {
    animateOnScroll
  }
}
