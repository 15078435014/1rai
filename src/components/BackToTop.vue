<template>
  <Transition name="fade">
    <div 
      v-show="isVisible" 
      class="back-to-top" 
      @click="scrollToTop"
      :class="{ 'back-to-top-visible': isVisible }"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5"/>
        <path d="M5 12l7-7 7 7"/>
      </svg>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const showThreshold = 400

const handleScroll = () => {
  isVisible.value = window.scrollY > showThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 52px;
  height: 52px;
  background: linear-gradient(135deg, #0F3460 0%, #164272 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(15, 52, 96, 0.4);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.back-to-top-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.back-to-top:hover {
  background: linear-gradient(135deg, #1ABC9C 0%, #16A085 100%);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 30px rgba(26, 188, 156, 0.4);
}

.back-to-top:active {
  transform: translateY(-2px) scale(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

@media (max-width: 768px) {
  .back-to-top {
    width: 46px;
    height: 46px;
    bottom: 20px;
    right: 20px;
  }
}
</style>
