<template>
  <div class="about-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">关于我们</h1>
        <p class="page-desc">了解 1人 AI 的故事和使命</p>
      </div>
    </section>
    
    <section class="about-content">
      <div class="container">
        <div class="about-card glass-card">
          <div class="logo-section">
            <span class="logo-icon">🤖</span>
            <span class="logo-text">1人 AI</span>
          </div>
          <h2 class="section-title">关于 1人 AI</h2>
          <p class="description">
            <strong>1人 AI</strong> 是一个专注于 AI 工具发现的导航平台。精选全球优质 AI 工具，让每个人都能轻松驾驭 AI。我们致力于为年轻人提供一站式 AI 工具发现与探索平台，降低 AI 工具使用门槛。
          </p>
        </div>
        
        <div class="mission-card glass-card">
          <h2 class="section-title">我们的理念</h2>
          <p class="description">
            我们不是冷冰冰的工具目录，而是年轻人的 AI 探索伙伴。强调"一人也能玩转 AI"的理念，传递赋能个人的价值主张。
          </p>
        </div>
        
        <div class="contact-card glass-card">
          <h2 class="section-title">联系方式</h2>
          <div class="contact-list">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span class="contact-text">邮箱：nd1rai@163.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">💬</span>
              <span class="contact-text">公众号：遇见-今生</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">⏰</span>
              <span class="contact-text">工作时间：周一至周五 9:00-18:00</span>
            </div>
          </div>
        </div>
        
        <div class="join-card glass-card">
          <h2 class="section-title">加入我们</h2>
          <p class="description">
            如果你对 AI 充满热情，想要帮助更多人发现优质的 AI 工具，欢迎联系我们！
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  padding: 60px 0;
  color: white;
}

.page-title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 12px;
}

.page-desc {
  font-size: 18px;
  opacity: 0.9;
}

.about-content {
  padding: 60px 0;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo-icon {
  font-size: 40px;
}

.logo-text {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #1E293B;
  margin-bottom: 16px;
}

.description {
  font-size: 16px;
  color: #64748B;
  line-height: 1.8;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-icon {
  font-size: 24px;
}

.contact-text {
  font-size: 16px;
  color: #334155;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }
}
</style>
