<template>
  <div class="news-detail-page">
    <section class="page-header">
      <div class="container">
        <div class="back-link" @click="goBack">
          <span>←</span>
          <span>返回资讯列表</span>
        </div>
        <span class="article-category tag tag-primary">{{ article?.category }}</span>
        <span class="article-date">{{ article?.date }}</span>
        <h1 class="page-title">{{ article?.title }}</h1>
        <p class="page-desc">{{ article?.description }}</p>
      </div>
    </section>
    
    <section class="article-content">
      <div class="container">
        <div class="content-body" v-html="renderedContent"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { news } from '@/data'

const route = useRoute()
const article = ref(null)

const renderedContent = computed(() => {
  if (!article.value) return ''
  let content = article.value.content
  
  content = content.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  content = content.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  content = content.replace(/^- (.*$)/gim, '<li>$1</li>')
  content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  content = content.replace(/\n\n/g, '</p><p>')
  
  return `<p>${content}</p>`
})

const goBack = () => {
  window.history.back()
}

onMounted(() => {
  article.value = news.find(n => n.id === route.params.id)
})
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
  padding: 60px 0;
  color: white;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
}

.article-category {
  margin-right: 12px;
}

.article-date {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.page-title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 16px;
}

.page-desc {
  font-size: 18px;
  opacity: 0.9;
  margin-top: 0;
}

.article-content {
  padding: 60px 0;
}

.content-body {
  max-width: 800px;
  margin: 0 auto;
  color: #1E293B;
  line-height: 1.8;
  
  h2 {
    font-size: 28px;
    font-weight: 600;
    margin: 32px 0 16px;
    color: #1E293B;
  }
  
  h3 {
    font-size: 22px;
    font-weight: 600;
    margin: 24px 0 12px;
    color: #334155;
  }
  
  p {
    margin-bottom: 16px;
    color: #475569;
    font-size: 16px;
  }
  
  li {
    margin-bottom: 8px;
    color: #475569;
    padding-left: 8px;
  }
  
  strong {
    color: #1E293B;
    font-weight: 600;
  }
}

.tag {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  
  &-primary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }
  
  .content-body {
    padding: 0 10px;
    
    h2 {
      font-size: 24px;
    }
  }
}
</style>
