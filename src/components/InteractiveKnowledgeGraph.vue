<template>
  <div class="relative w-full h-full group cursor-pointer" @mouseenter="startAnimation" @mouseleave="stopAnimation">
    <svg
      ref="svgRef"
      class="w-full h-full"
      viewBox="0 0 400 300"
      @click="triggerPulse"
    >
      <!-- Background Grid -->
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(99, 102, 241, 0.1)" stroke-width="0.5"/>
        </pattern>

        <!-- Gradient Definitions -->
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
        </linearGradient>

        <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.6" />
          <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0.6" />
        </linearGradient>

        <!-- Filters -->
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Background -->
      <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />

      <!-- Connection Lines -->
      <g ref="linksGroup">
        <path
          v-for="(link, index) in links"
          :key="`link-${index}`"
          :d="link.path"
          stroke="url(#linkGradient)"
          stroke-width="2"
          fill="none"
          :opacity="link.opacity"
          class="transition-all duration-500"
          :style="{ animationDelay: `${index * 200}ms` }"
        >
          <animate
            v-if="isAnimating"
            attributeName="stroke-dasharray"
            values="0,1000;50,950;100,900;0,1000"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      <!-- Nodes -->
      <g ref="nodesGroup">
        <g
          v-for="(node, index) in nodes"
          :key="`node-${index}`"
          :transform="`translate(${node.x}, ${node.y})`"
          class="cursor-pointer transition-transform duration-300 hover:scale-125"
          @mouseenter="highlightNode(index)"
          @mouseleave="unhighlightNode(index)"
          @click="pulseNode(index)"
        >
          <!-- Node Glow -->
          <circle
            :r="node.size + 4"
            fill="url(#nodeGradient)"
            :opacity="node.glowOpacity"
            filter="url(#glow)"
            class="transition-all duration-500"
          >
            <animate
              v-if="node.isPulsing"
              attributeName="r"
              :values="`${node.size + 4};${node.size + 12};${node.size + 4}`"
              dur="1s"
              repeatCount="3"
            />
          </circle>

          <!-- Main Node -->
          <circle
            :r="node.size"
            fill="url(#nodeGradient)"
            :opacity="node.opacity"
            class="transition-all duration-300"
          />

          <!-- Node Label -->
          <text
            :y="node.size + 16"
            text-anchor="middle"
            class="text-xs fill-white opacity-70 transition-opacity duration-300"
            :class="{ 'opacity-100': node.isHighlighted }"
          >
            {{ node.label }}
          </text>

          <!-- Floating Data Points -->
          <circle
            v-for="(point, pointIndex) in node.dataPoints"
            :key="`point-${index}-${pointIndex}`"
            :cx="point.x"
            :cy="point.y"
            :r="point.size"
            :fill="point.color"
            :opacity="point.opacity"
            class="transition-all duration-1000"
          >
            <animateTransform
              v-if="isAnimating"
              attributeName="transform"
              type="rotate"
              :values="`0 ${point.x} ${point.y};360 ${point.x} ${point.y}`"
              :dur="`${3 + pointIndex}s`"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>

      <!-- Flowing Particles -->
      <g v-if="isAnimating">
        <circle
          v-for="(particle, index) in particles"
          :key="`particle-${index}`"
          :r="particle.size"
          :fill="particle.color"
          :opacity="particle.opacity"
        >
          <animateMotion
            :dur="`${particle.duration}s`"
            repeatCount="indefinite"
            :path="particle.path"
          />
        </circle>
      </g>
    </svg>

    <!-- Interaction Hints -->
    <div class="absolute bottom-2 left-2 text-xs text-reflect-text-muted opacity-60 group-hover:opacity-100 transition-opacity duration-300">
      Click nodes • Hover to explore
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'

interface Node {
  x: number
  y: number
  size: number
  opacity: number
  glowOpacity: number
  label: string
  isHighlighted: boolean
  isPulsing: boolean
  dataPoints: DataPoint[]
}

interface DataPoint {
  x: number
  y: number
  size: number
  color: string
  opacity: number
}

interface Link {
  path: string
  opacity: number
}

interface Particle {
  size: number
  color: string
  opacity: number
  duration: number
  path: string
}

const svgRef = ref<SVGElement>()
const isAnimating = ref(false)

// Reactive data
const nodes = reactive<Node[]>([
  {
    x: 200, y: 150, size: 12, opacity: 1, glowOpacity: 0.3,
    label: 'Core Ideas', isHighlighted: false, isPulsing: false,
    dataPoints: []
  },
  {
    x: 120, y: 80, size: 8, opacity: 0.8, glowOpacity: 0.2,
    label: 'Projects', isHighlighted: false, isPulsing: false,
    dataPoints: []
  },
  {
    x: 280, y: 90, size: 8, opacity: 0.8, glowOpacity: 0.2,
    label: 'Research', isHighlighted: false, isPulsing: false,
    dataPoints: []
  },
  {
    x: 160, y: 220, size: 8, opacity: 0.8, glowOpacity: 0.2,
    label: 'Meetings', isHighlighted: false, isPulsing: false,
    dataPoints: []
  },
  {
    x: 320, y: 200, size: 8, opacity: 0.8, glowOpacity: 0.2,
    label: 'Insights', isHighlighted: false, isPulsing: false,
    dataPoints: []
  },
  {
    x: 80, y: 180, size: 6, opacity: 0.7, glowOpacity: 0.15,
    label: 'Notes', isHighlighted: false, isPulsing: false,
    dataPoints: []
  }
])

const links = reactive<Link[]>([
  { path: 'M 200 150 Q 160 115 120 80', opacity: 0.6 },
  { path: 'M 200 150 Q 240 120 280 90', opacity: 0.6 },
  { path: 'M 200 150 Q 180 185 160 220', opacity: 0.6 },
  { path: 'M 200 150 Q 260 175 320 200', opacity: 0.6 },
  { path: 'M 120 80 Q 100 130 80 180', opacity: 0.4 },
  { path: 'M 280 90 Q 300 145 320 200', opacity: 0.4 }
])

const particles = reactive<Particle[]>([])

const generateDataPoints = (node: Node) => {
  const points: DataPoint[] = []
  const numPoints = 3

  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2
    const radius = node.size + 20
    points.push({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      size: 2,
      color: ['#6366f1', '#8b5cf6', '#ec4899'][i],
      opacity: 0.7
    })
  }

  node.dataPoints = points
}

const generateParticles = () => {
  particles.length = 0
  links.forEach((link, _) => {
    particles.push({
      size: 1.5,
      color: '#8b5cf6',
      opacity: 0.8,
      duration: 4 + Math.random() * 2,
      path: link.path
    })
  })
}

const startAnimation = () => {
  isAnimating.value = true
  generateParticles()

  // Enhance all nodes
  nodes.forEach(node => {
    node.glowOpacity = 0.5
    generateDataPoints(node)
  })

  // Enhance all links
  links.forEach(link => {
    link.opacity = 0.8
  })
}

const stopAnimation = () => {
  isAnimating.value = false

  // Reset nodes
  nodes.forEach(node => {
    node.glowOpacity = node.size > 10 ? 0.3 : 0.2
    node.dataPoints = []
  })

  // Reset links
  links.forEach(link => {
    link.opacity = 0.6
  })
}

const highlightNode = (index: number) => {
  nodes[index].isHighlighted = true
  nodes[index].glowOpacity = 0.8

  // Highlight connected links
  if (index === 0) {
    // Central node - highlight all links
    links.forEach(link => link.opacity = 1)
  }
}

const unhighlightNode = (index: number) => {
  nodes[index].isHighlighted = false
  nodes[index].glowOpacity = isAnimating.value ? 0.5 : (nodes[index].size > 10 ? 0.3 : 0.2)

  // Reset links
  links.forEach(link => {
    link.opacity = isAnimating.value ? 0.8 : 0.6
  })
}

const pulseNode = (index: number) => {
  nodes[index].isPulsing = true

  // Create ripple effect
  setTimeout(() => {
    nodes[index].isPulsing = false
  }, 3000)

  // Generate temporary particles
  const tempParticles = []
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2
    const endX = nodes[index].x + Math.cos(angle) * 100
    const endY = nodes[index].y + Math.sin(angle) * 100

    tempParticles.push({
      size: 2,
      color: '#ec4899',
      opacity: 0.9,
      duration: 1.5,
      path: `M ${nodes[index].x} ${nodes[index].y} L ${endX} ${endY}`
    })
  }

  particles.push(...tempParticles)

  setTimeout(() => {
    particles.splice(-tempParticles.length)
  }, 1500)
}

const triggerPulse = () => {
  // Create global pulse effect
  nodes.forEach((_, index) => {
    setTimeout(() => {
      pulseNode(index)
    }, index * 200)
  })
}

onMounted(() => {
  // Initialize data points for central node
  generateDataPoints(nodes[0])
})
</script>
