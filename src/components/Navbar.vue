<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" class="logo">
          <div class="logo-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="9" width="26" height="18" rx="3" fill="url(#navGradient)"/>
              <path d="M13 15L18 20L23 13" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="24" cy="15" r="2.5" fill="white"/>
              <defs>
                <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0F3460"/>
                  <stop offset="100%" stop-color="#1ABC9C"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="logo-text">壹人AI</span>
        </router-link>
        
        <div class="nav-links" :class="{ 'nav-links-active': isMobileMenuOpen }">
          <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }" @click="closeMobileMenu">首页</router-link>
          <router-link to="/categories" class="nav-link" :class="{ active: $route.path.startsWith('/categories') }" @click="closeMobileMenu">分类</router-link>
          <router-link to="/tools" class="nav-link" :class="{ active: $route.path.startsWith('/tools') }" @click="closeMobileMenu">工具</router-link>
          <router-link to="/news" class="nav-link" :class="{ active: $route.path.startsWith('/news') }" @click="closeMobileMenu">资讯</router-link>
          <router-link to="/about" class="nav-link" :class="{ active: $route.path === '/about' }" @click="closeMobileMenu">关于我们</router-link>
        </div>
        
        <div class="navbar-actions">
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换到浅色模式' : '切换到深色模式'">
            <svg v-if="!isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
            </svg>
          </button>
          <button class="btn btn-primary btn-sm" @click="scrollToContact">联系我们</button>
          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <span v-if="!isMobileMenuOpen">☰</span>
            <span v-else>✕</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToContact = () => {
  const aboutPage = document.querySelector('.contact-section')
  if (aboutPage) {
    aboutPage.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = '/about'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 52, 96, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.navbar-scrolled {
  background: rgba(15, 52, 96, 0.98);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 0;
  
  &:hover {
    color: #FFFFFF;
  }
  
  &.active {
    color: #1ABC9C;
    font-weight: 600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #1ABC9C 0%, #16A085 100%);
      border-radius: 2px;
    }
  }
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.98);
  }
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  color: #FFFFFF;
  padding: 8px 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

@media (max-width: 900px) {
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #0F3460;
    flex-direction: column;
    padding: 20px 24px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    gap: 4px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }
  
  .nav-links-active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .nav-link {
    padding: 14px 16px;
    width: 100%;
    text-align: left;
    border-radius: 8px;
    
    &:hover, &.active {
      background: rgba(26, 188, 156, 0.1);
    }
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .navbar-actions .btn-primary {
    display: none;
  }
}
</style>
