<template>
  <div class="categories-page">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">AI 工具分类</h1>
        <p class="page-subtitle">按照功能分类，快速找到你需要的 AI 工具</p>
      </div>

      <div class="categories-grid">
        <router-link
          v-for="category in displayCategories"
          :key="category.id"
          :to="`/categories/${category.id}`"
          class="category-card"
        >
          <div class="category-icon" :style="{ background: getCategoryColor(category.id) }">
            {{ getCategoryEmoji(category.id) }}
          </div>
          <div class="category-info">
            <h3 class="category-name">{{ category.name }}</h3>
            <p class="category-count">{{ getCategoryCount(category.id) }} 个工具</p>
          </div>
          <div class="category-arrow">→</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { categories, getCategoryCount } from '@/data'

const displayCategories = computed(() => {
  return categories.filter(c => c.id !== 'all')
})

const categoryColors = {
  chatbot: '#6366F1',
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
  return categoryColors[id] || '#6366F1'
}

function getCategoryEmoji(id) {
  return categoryEmojis[id] || '📦'
}
</script>

<style scoped lang="scss">
.categories-page {
  padding: 60px 0;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
}

.page-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.category-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: white;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateX(8px);
    border-color: #6366f1;
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.1);
  }
}

.category-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  flex-shrink: 0;
}

.category-info {
  flex: 1;
}

.category-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
}

.category-count {
  font-size: 0.875rem;
  color: #6b7280;
}

.category-arrow {
  font-size: 1.5rem;
  color: #9ca3af;
  transition: all 0.3s;
}

.category-card:hover .category-arrow {
  color: #6366f1;
  transform: translateX(4px);
}
</style>
