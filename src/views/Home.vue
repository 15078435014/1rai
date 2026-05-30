<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-inner">
            <div class="hero-text">
              <div class="badge">
                <span class="badge-icon">✨</span>
                <span>AI 工具导航专家</span>
              </div>
              <h1 class="hero-title">
                智能驱动未来
                <br />
                <span class="text-gradient">发现 AI 无限可能</span>
              </h1>
              <p class="hero-subtitle">
                汇聚全球顶尖 AI 工具资源，覆盖 16 大领域，为个人和企业提供一站式 AI 工具导航服务，助力数字化转型与创新发展。
              </p>
              <div class="hero-actions">
                <router-link to="/tools" class="btn btn-primary btn-lg">
                  <span>立即探索</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </router-link>
                <router-link to="/categories" class="btn btn-outline-white">
                  <span>浏览分类</span>
                </router-link>
              </div>
              <div class="hero-stats">
                <div class="stat-item">
                  <div class="stat-icon" style="background: rgba(26, 188, 156, 0.2);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1ABC9C" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <span class="stat-number">{{ tools.length }}+</span>
                  <span class="stat-label">精选工具</span>
                </div>
                <div class="stat-item">
                  <div class="stat-icon" style="background: rgba(243, 156, 18, 0.2);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F39C12" stroke-width="2">
                      <path d="M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4"/>
                    </svg>
                  </div>
                  <span class="stat-number">16</span>
                  <span class="stat-label">分类领域</span>
                </div>
                <div class="stat-item">
                  <div class="stat-icon" style="background: rgba(52, 152, 219, 0.2);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3498DB" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <span class="stat-number">1万+</span>
                  <span class="stat-label">服务用户</span>
                </div>
                <div class="stat-item">
                  <div class="stat-icon" style="background: rgba(155, 89, 182, 0.2);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B59B6" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <span class="stat-number">99%</span>
                  <span class="stat-label">工具有效</span>
                </div>
              </div>
            </div>
            <div class="hero-visual">
              <div class="floating-card card-1">
                <div class="card-icon" style="background: linear-gradient(135deg, #0F3460 0%, #164272 100%);">🤖</div>
                <span class="card-text">AI对话助手</span>
                <span class="card-count">30+ 工具</span>
              </div>
              <div class="floating-card card-2">
                <div class="card-icon" style="background: linear-gradient(135deg, #1ABC9C 0%, #16A085 100%);">🎨</div>
                <span class="card-text">AI图像生成</span>
                <span class="card-count">25+ 工具</span>
              </div>
              <div class="floating-card card-3">
                <div class="card-icon" style="background: linear-gradient(135deg, #F39C12 0%, #E67E22 100%);">✍️</div>
                <span class="card-text">AI内容创作</span>
                <span class="card-count">20+ 工具</span>
              </div>
              <div class="floating-card card-4">
                <div class="card-icon" style="background: linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%);">💻</div>
                <span class="card-text">AI编程开发</span>
                <span class="card-count">15+ 工具</span>
              </div>
              <div class="floating-card card-5">
                <div class="card-icon" style="background: linear-gradient(135deg, #3498DB 0%, #2980B9 100%);">🎬</div>
                <span class="card-text">AI视频制作</span>
                <span class="card-count">12+ 工具</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">为什么选择我们</h2>
          <p class="section-subtitle">我们致力于为用户提供最优质的 AI 工具推荐服务</p>
        </div>
        <div class="features-grid">
          <div class="feature-card card">
            <div class="feature-icon" style="background: rgba(37, 99, 235, 0.1); color: #2563EB;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 class="feature-title">精选优质工具</h3>
            <p class="feature-desc">经过严格筛选，只推荐真正有价值的 AI 工具，帮你节省时间和精力。</p>
          </div>
          <div class="feature-card card">
            <div class="feature-icon" style="background: rgba(16, 185, 129, 0.1); color: #10B981;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3 class="feature-title">持续更新</h3>
            <p class="feature-desc">紧跟 AI 技术发展潮流，定期更新工具库，让你始终掌握最新工具动态。</p>
          </div>
          <div class="feature-card card">
            <div class="feature-icon" style="background: rgba(245, 158, 11, 0.1); color: #F59E0B;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="12 22 12 15"/>
                <polyline points="12 11 12 2"/>
              </svg>
            </div>
            <h3 class="feature-title">分类清晰</h3>
            <p class="feature-desc">16 个细分领域，精准定位你的需求，快速找到合适的工具。</p>
          </div>
          <div class="feature-card card">
            <div class="feature-icon" style="background: rgba(139, 92, 246, 0.1); color: #8B5CF6;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20V10"/>
                <path d="M18 20V4"/>
                <path d="M6 20v-6"/>
              </svg>
            </div>
            <h3 class="feature-title">免费使用</h3>
            <p class="feature-desc">所有工具推荐均免费提供，无需注册即可浏览和使用。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="categories-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">探索 AI 工具分类</h2>
          <p class="section-subtitle">按需求快速找到合适的 AI 工具</p>
          <router-link to="/categories" class="view-all">
            查看全部分类
            <span class="arrow">→</span>
          </router-link>
        </div>
        <div class="categories-grid">
          <router-link
            v-for="category in displayCategories"
            :key="category.id"
            :to="`/categories/${category.id}`"
            class="category-card card"
          >
            <div class="category-icon" :style="{ background: getCategoryColor(category.id) }">
              {{ getCategoryEmoji(category.id) }}
            </div>
            <div class="category-info">
              <h3 class="category-name">{{ category.name }}</h3>
              <p class="category-count">{{ getCategoryCount(category.id) }} 个工具</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="tools-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">热门 AI 工具</h2>
          <p class="section-subtitle">最受用户欢迎的 AI 工具推荐</p>
          <router-link to="/tools" class="view-all">
            查看全部工具
            <span class="arrow">→</span>
          </router-link>
        </div>
        <div class="tools-grid">
          <router-link
            v-for="(tool, index) in popularTools"
            :key="tool.id"
            :to="`/tools/${tool.id}`"
            class="tool-card card"
            :style="{ animationDelay: `${index * 50}ms` }"
          >
            <div class="tool-icon" :style="{ background: tool.color }">
              {{ getInitials(tool.name) }}
            </div>
            <div class="tool-content">
              <h3 class="tool-name">{{ tool.name }}</h3>
              <p class="tool-desc">{{ tool.description }}</p>
              <div class="tool-tags">
                <span v-for="tag in tool.tags.slice(0, 2)" :key="tag" class="tool-tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="news-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">最新资讯</h2>
          <p class="section-subtitle">了解 AI 行业动态，把握技术前沿</p>
          <router-link to="/news" class="view-all">
            查看全部资讯
            <span class="arrow">→</span>
          </router-link>
        </div>
        <div class="news-grid">
          <router-link
            v-for="article in latestNews"
            :key="article.id"
            :to="`/news/${article.id}`"
            class="news-card card"
          >
            <div class="news-header">
              <span class="news-category">{{ article.category }}</span>
              <span class="news-date">{{ article.date }}</span>
            </div>
            <h3 class="news-title">{{ article.title }}</h3>
            <p class="news-desc">{{ article.description }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-content card-glass">
          <h2 class="cta-title">开始你的 AI 之旅</h2>
          <p class="cta-desc">加入超过 10 万用户，探索 AI 工具的无限可能</p>
          <div class="cta-actions">
            <router-link to="/tools" class="btn btn-primary btn-lg">立即探索</router-link>
            <router-link to="/about" class="btn btn-outline">了解更多</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { categories, tools, news, getCategoryCount, getInitials } from '@/data'

const displayCategories = computed(() => {
  return categories.filter(c => c.id !== 'all').slice(0, 8)
})

const popularTools = computed(() => {
  return tools.slice(0, 6)
})

const latestNews = computed(() => {
  return news.slice(0, 3)
})

const categoryColors = {
  chatbot: '#2563EB',
  writing: '#8B5CF6',
  image: '#EC4899',
  video: '#F97316',
  office: '#10B981',
  agent: '#3B82F6',
  programming: '#22D3EE',
  design: '#F59E0B',
  audio: '#8B5CF6',
  search: '#6366F1',
  framework: '#EC4899',
  model: '#10B981',
  detection: '#F97316',
  prompt: '#3B82F6',
  learning: '#22D3EE'
}

const categoryEmojis = {
  chatbot: '💬',
  writing: '✍️',
  image: '🎨',
  video: '🎬',
  office: '📊',
  agent: '🤖',
  programming: '💻',
  design: '🎨',
  audio: '🎵',
  search: '🔍',
  framework: '🔧',
  model: '🧠',
  detection: '🔎',
  prompt: '💡',
  learning: '📚'
}

function getCategoryColor(id) {
  return categoryColors[id] || '#2563EB'
}

function getCategoryEmoji(id) {
  return categoryEmojis[id] || '📦'
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 800px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #0F3460 0%, #1A2733 50%, #0F172A 100%);
}

.hero-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 30%, rgba(26, 188, 156, 0.15) 0%, transparent 40%),
    radial-gradient(circle at 90% 20%, rgba(52, 152, 219, 0.12) 0%, transparent 40%),
    radial-gradient(circle at 60% 80%, rgba(155, 89, 182, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 30% 70%, rgba(243, 156, 18, 0.08) 0%, transparent 35%);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 80px;
  }
}

.hero-text {
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: rgba(26, 188, 156, 0.15);
  border: 1px solid rgba(26, 188, 156, 0.3);
  border-radius: 24px;
  font-size: 13px;
  color: #1ABC9C;
  margin-bottom: 24px;
  font-weight: 500;
}

.badge-icon {
  font-size: 18px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
}

.text-gradient {
  background: linear-gradient(135deg, #1ABC9C 0%, #3498DB 50%, #9B59B6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: #94A3B8;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 32px;
  
  @media (min-width: 1024px) {
    margin-left: 0;
  }
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-bottom: 48px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
  
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.stat-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  display: block;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}

.hero-visual {
  position: relative;
  height: 500px;
}

.floating-card {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 28px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  animation: float 8s ease-in-out infinite;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.card-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.card-text {
  font-size: 14px;
  color: white;
  font-weight: 600;
}

.card-count {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.card-1 {
  top: 10%;
  left: -5%;
  animation-delay: 0s;
}

.card-2 {
  top: 30%;
  right: 5%;
  animation-delay: 1.6s;
}

.card-3 {
  top: 55%;
  left: 15%;
  animation-delay: 3.2s;
}

.card-4 {
  top: 75%;
  right: 10%;
  animation-delay: 4.8s;
}

.card-5 {
  top: 45%;
  left: -3%;
  animation-delay: 2.4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.features {
  padding: 80px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.feature-card {
  text-align: center;
  padding: 32px;
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.feature-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 0.875rem;
  color: #64748B;
  line-height: 1.6;
}

.categories-section {
  padding: 80px 0;
  background: #F8FAFC;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1E293B;
  margin-bottom: 12px;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
}

.section-subtitle {
  font-size: 1rem;
  color: #64748B;
  max-width: 500px;
  margin: 0 auto 24px;
}

.view-all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #2563EB;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    gap: 12px;
  }
}

.arrow {
  font-size: 1rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  text-decoration: none;
}

.category-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 16px;
}

.category-info {
  flex: 1;
}

.category-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 4px;
}

.category-count {
  font-size: 0.875rem;
  color: #64748B;
}

.tools-section {
  padding: 80px 0;
}

.tools-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.tool-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  text-decoration: none;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.tool-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 20px;
  flex-shrink: 0;
}

.tool-content {
  flex: 1;
  min-width: 0;
}

.tool-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 6px;
}

.tool-desc {
  font-size: 0.875rem;
  color: #64748B;
  line-height: 1.5;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tool-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tool-tag {
  padding: 4px 10px;
  background: #F1F5F9;
  border-radius: 6px;
  font-size: 0.75rem;
  color: #64748B;
}

.news-section {
  padding: 80px 0;
  background: #F8FAFC;
}

.news-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.news-card {
  text-decoration: none;
  padding: 24px;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.news-category {
  padding: 4px 12px;
  background: rgba(37, 99, 235, 0.1);
  color: #2563EB;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.news-date {
  font-size: 0.875rem;
  color: #94A3B8;
}

.news-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 8px;
  line-height: 1.4;
}

.news-desc {
  font-size: 0.875rem;
  color: #64748B;
  line-height: 1.6;
}

.cta {
  padding: 80px 0;
}

.cta-content {
  text-align: center;
  padding: 60px 40px;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1E293B;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
}

.cta-desc {
  font-size: 1.125rem;
  color: #64748B;
  margin-bottom: 32px;
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
