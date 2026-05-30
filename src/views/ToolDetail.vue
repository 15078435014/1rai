<template>
  <div class="tool-detail-page" v-if="tool">
    <div class="container">
      <router-link to="/tools" class="back-link">
        <span>←</span> 返回工具列表
      </router-link>

      <div class="tool-detail">
        <div class="tool-header">
          <div class="tool-icon" :style="{ background: tool.color }">
            {{ getInitials(tool.name) }}
          </div>
          <div class="tool-info">
            <h1 class="tool-name">{{ tool.name }}</h1>
            <p class="tool-description">{{ tool.description }}</p>
            <div class="tool-tags">
              <span v-for="tag in tool.tags" :key="tag" class="tool-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div class="action-buttons">
          <a :href="tool.url" target="_blank" class="btn btn-primary">
            访问官网
            <span class="external-icon">↗</span>
          </a>
        </div>

        <div class="tool-sections">
          <div class="info-section">
            <h2 class="section-title">工具简介</h2>
            <p class="section-content">{{ tool.description }}</p>
          </div>

          <div class="info-section" v-if="tool.features">
            <h2 class="section-title">核心功能</h2>
            <ul class="feature-list">
              <li v-for="feature in tool.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>

          <div class="info-section" v-if="tool.platforms">
            <h2 class="section-title">支持平台</h2>
            <div class="platform-tags">
              <span v-for="platform in tool.platforms" :key="platform" class="platform-tag">
                {{ platform }}
              </span>
            </div>
          </div>

          <div class="info-section" v-if="tool.pricing">
            <h2 class="section-title">价格说明</h2>
            <p class="section-content">{{ tool.pricing }}</p>
          </div>

          <div class="info-section" v-if="tool.highlights">
            <h2 class="section-title">亮点特色</h2>
            <p class="section-content">{{ tool.highlights }}</p>
          </div>

          <div class="info-section" v-if="tool.pros">
            <h2 class="section-title">优势</h2>
            <ul class="feature-list pros">
              <li v-for="pro in tool.pros" :key="pro">{{ pro }}</li>
            </ul>
          </div>

          <div class="info-section" v-if="tool.cons">
            <h2 class="section-title">不足</h2>
            <ul class="feature-list cons">
              <li v-for="con in tool.cons" :key="con">{{ con }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>工具未找到</h1>
      <p>抱歉，您查找的工具不存在。</p>
      <router-link to="/tools" class="btn btn-primary">返回工具列表</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getToolById, getInitials } from '@/data'

const route = useRoute()
const tool = computed(() => getToolById(parseInt(route.params.id)))
</script>

<style scoped lang="scss">
.tool-detail-page {
  padding: 60px 0;
  min-height: calc(100vh - 200px);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 32px;
  transition: color 0.3s;

  &:hover {
    color: #6366f1;
  }
}

.tool-detail {
  background: white;
  border-radius: 20px;
  padding: 40px;
  border: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    padding: 24px;
  }
}

.tool-header {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.tool-icon {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 36px;
  flex-shrink: 0;
}

.tool-info {
  flex: 1;
}

.tool-name {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
}

.tool-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 16px;
}

.tool-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    justify-content: center;
  }
}

.tool-tag {
  padding: 6px 14px;
  background: #f3f4f6;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #6b7280;
}

.action-buttons {
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: #6366f1;
  color: white;

  &:hover {
    background: #5558e3;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  }
}

.external-icon {
  font-size: 0.875rem;
}

.tool-sections {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.info-section {
  padding-bottom: 32px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
}

.section-content {
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.7;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 24px;
    margin-bottom: 12px;
    font-size: 1rem;
    color: #4b5563;
    line-height: 1.6;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #6366f1;
      font-weight: bold;
    }
  }
}

.feature-list.pros li::before {
  color: #10b981;
}

.feature-list.cons li::before {
  color: #ef4444;
}

.platform-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.platform-tag {
  padding: 8px 16px;
  background: #e0e7ff;
  color: #4338ca;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
}

.not-found {
  padding: 120px 0;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 12px;
  }

  p {
    font-size: 1.125rem;
    color: #6b7280;
    margin-bottom: 32px;
  }
}
</style>
