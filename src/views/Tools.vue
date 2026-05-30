<template>
  <div class="tools-page">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">全部 AI 工具</h1>
        <p class="page-subtitle">共 {{ filteredTools.length }} 个工具</p>
      </div>

      <!-- Search and Filter -->
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="搜索工具名称或描述..."
          class="search-input"
        />
      </div>

      <!-- Category Tabs -->
      <div class="category-tabs">
        <button
          v-for="category in displayCategories"
          :key="category.id"
          :class="['category-tab', { active: currentCategory === category.id }]"
          @click="currentCategory = category.id"
        >
          {{ category.name }}
          <span class="tab-count">{{ getCategoryCount(category.id) }}</span>
        </button>
      </div>

      <!-- Tools Grid -->
      <div class="tools-grid">
        <router-link
          v-for="(tool, index) in filteredTools"
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
              <span v-for="tag in tool.tags.slice(0, 2)" :key="tag" class="tool-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <div v-if="filteredTools.length === 0" class="empty-state">
        <p>未找到匹配的工具</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { categories, tools, getCategoryCount, getInitials, filterTools } from '@/data'

const searchQuery = ref('')
const currentCategory = ref('all')

const displayCategories = computed(() => categories)

const filteredTools = computed(() => {
  return filterTools(currentCategory.value, searchQuery.value)
})
</script>

<style scoped lang="scss">
.tools-page {
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
  margin-bottom: 40px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
}

.page-subtitle {
  font-size: 1rem;
  color: #6b7280;
}

// Search Bar
.search-bar {
  margin-bottom: 32px;
}

.search-input {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: block;
  padding: 16px 24px;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
}

// Category Tabs
.category-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
  overflow-x: auto;
  padding-bottom: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.category-tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;

  &:hover {
    border-color: #6366f1;
    color: #6366f1;
  }

  &.active {
    background: #6366f1;
    border-color: #6366f1;
    color: white;
  }
}

.tab-count {
  padding: 2px 8px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  font-size: 0.75rem;
}

.category-tab.active .tab-count {
  background: rgba(255, 255, 255, 0.2);
}

// Tools Grid
.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.tool-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: white;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e5e7eb;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-4px);
    border-color: #6366f1;
    box-shadow: 0 12px 40px rgba(99, 102, 241, 0.15);
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
  margin-bottom: 6px;
}

.tool-desc {
  font-size: 0.875rem;
  color: #6b7280;
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
  background: #f3f4f6;
  border-radius: 6px;
  font-size: 0.75rem;
  color: #6b7280;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #6b7280;
  font-size: 1.125rem;
}
</style>
