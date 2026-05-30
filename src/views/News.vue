<template>
  <div class="news-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">最新资讯</h1>
        <p class="page-desc">了解 AI 行业动态，学习使用技巧，把握技术前沿</p>
      </div>
    </section>
    
    <section class="news-list">
      <div class="container">
        <div class="grid">
          <router-link 
            v-for="article in news" 
            :key="article.id" 
            :to="`/news/${article.id}`"
            class="news-card card"
          >
            <div class="news-header">
              <span class="news-category tag tag-primary">{{ article.category }}</span>
              <span class="news-date">{{ article.date }}</span>
            </div>
            <h3 class="news-title">{{ article.title }}</h3>
            <p class="news-desc">{{ article.description }}</p>
            <span class="read-more">阅读全文 →</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { news } from '@/data'
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

.news-list {
  padding: 60px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.news-card {
  text-decoration: none;
  color: inherit;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.news-category {
  font-size: 12px;
}

.news-date {
  color: #94A3B8;
  font-size: 13px;
}

.news-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1E293B;
}

.news-desc {
  font-size: 14px;
  color: #64748B;
  margin-bottom: 16px;
  line-height: 1.6;
}

.read-more {
  color: #6366F1;
  font-weight: 600;
  font-size: 14px;
}

.tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  
  &-primary {
    background: rgba(99, 102, 241, 0.1);
    color: #6366F1;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }
  
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
