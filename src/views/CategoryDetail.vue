<template>
  <div class="category-detail-page">
    <div class="container">
      <div class="page-header">
        <router-link to="/categories" class="back-link">
          <span>←</span> 返回分类
        </router-link>
        <div class="category-header">
          <div class="category-icon" :style="{ background: getCategoryColor(slug) }">
            {{ getCategoryEmoji(slug) }}
          </div>
          <div class="category-info">
            <h1 class="page-title">{{ categoryName }}</h1>
            <p class="page-subtitle">共 {{ categoryTools.length }} 个工具</p>
          </div>
        </div>
      </div>

      <div class="tools-grid">
        <router-link
          v-for="(tool, index) in categoryTools"
          :key="tool.id"
          :to="`/tools/${tool.id}`"
          class="tool-card"
          :style="{ animationDelay: `${index * 30}ms` }"
        >
          <div class="tool-icon" :style="{ background: tool.color }">
            {{ getInitials(tool.name) }}
          </div>
          <div class="tool-content">
            <h3 class="tool-name">{{ tool.name }}</h3>
            <p class="tool-desc">{{ tool.description }}</p>
            <div class="tool-tags">
              <span v-for="tag in tool.tags" :key="tag" class="tool-tag">
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="tool-arrow">→</div>
        </router-link>
      </div>

      <div v-if="categoryTools.length === 0" class="empty-state">
        <p>该分类暂无工具</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { tools, getInitials } from '@/data'

const route = useRoute()
const slug = computed(() => route.params.slug)

const categoryNames = {
  chatbot: 'AI对话',
  writing: 'AI写作',
  image: 'AI图像',
  video: 'AI视频',
  office: 'AI办公',
  agent: 'AI智能体',
  programming: 'AI编程',
  design: 'AI设计',
  audio: 'AI音频',
  search: 'AI搜索',
  framework: 'AI开发',
  model: 'AI模型',
  detection: 'AI检测',
  prompt: 'AI提示词',
  learning: 'AI学习'
}

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

const categoryName = computed(() => categoryNames[slug.value] || '全部工具')
const categoryTools = computed(() => tools.filter(t => t.category === slug.value))

function getCategoryColor(id) {
  return categoryColors[id] || '#6366F1'
}

function getCategoryEmoji(id) {
  return categoryEmojis[id] || '📦'
}
</script>

<style scoped lang="scss">
.category-detail-page {
  padding: 60px 0;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-header {
  margin-bottom: 40px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 24px;
  transition: color 0.3s;

  &:hover {
    color: #6366f1;
  }
}

.category-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.category-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}

.category-info {
  flex: 1;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 4px;
}

.page-subtitle {
  font-size: 1rem;
  color: #6b7280;
}

.tools-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tool-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e5e7eb;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;

  &:hover {
    transform: translateX(8px);
    border-color: #6366f1;
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.1);
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
  color: #1f2937;
  margin-bottom: 4px;
}

.tool-desc {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tool-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tool-tag {
  padding: 4px 10px;
  background: #f3f4f6;
  border-radius: 6px;
  font-size: 0.75rem;
  color: #6b7280;
}

.tool-arrow {
  font-size: 1.5rem;
  color: #9ca3af;
  transition: all 0.3s;
}

.tool-card:hover .tool-arrow {
  color: #6366f1;
  transform: translateX(4px);
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #6b7280;
}
</style>
