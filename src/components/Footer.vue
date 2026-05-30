<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="logo">
              <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="9" width="26" height="18" rx="3" fill="url(#footerGradient)"/>
                <path d="M13 15L18 20L23 13" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="24" cy="15" r="2.5" fill="white"/>
                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#0F3460"/>
                    <stop offset="100%" stop-color="#1ABC9C"/>
                  </linearGradient>
                </defs>
              </svg>
              <span class="logo-text">壹人AI</span>
            </div>
            <p class="brand-description">
              发现全球优质 AI 工具，助力个人和企业提升生产力。我们致力于为用户提供最全面、最实用的 AI 工具推荐服务。
            </p>
            <div class="social-links">
              <a href="#" class="social-link" title="微信">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c4.801 0 8.692-3.287 8.692-7.341 0-4.054-3.891-7.341-8.692-7.341z"/>
                  <path d="M5.785 5.991c-.642 0-1.162.529-1.162 1.18a1.17 1.17 0 0 0 1.162 1.178A1.17 1.17 0 0 0 6.947 7.17c0-.651-.52-1.18-1.162-1.18zm5.813 0c-.642 0-1.162.529-1.162 1.18a1.17 1.17 0 0 0 1.162 1.178 1.17 1.17 0 0 0 1.162-1.178c0-.651-.52-1.18-1.162-1.18zm5.34 2.867c-1.797-.052-3.52.512-4.942 1.726-.58.462-1.029 1.066-1.31 1.75a.29.29 0 0 1-.268.207c-.134 0-.24-.111-.268-.25a.376.376 0 0 0-.141-.276C4.99 10.249 2.95 8.259 2.95 5.991c0-.651.52-1.18 1.162-1.18.718 0 1.39.367 1.782.953a.48.48 0 0 1 .098.275c0 .163-.13.295-.29.295a.326.326 0 0 0-.167.054l-1.44 8.548a.227.227 0 0 0 .048.167c.076.054.162.054.248 0l1.513-.884a.722.722 0 0 1 .598-.082 12.21 12.21 0 0 0 3.42.485c5.801 0 10.692-3.287 10.692-7.341 0-3.217-3.89-5.838-8.691-6.148V2.18c.537.027 1.06.141 1.56.332.63.246 1.17.598 1.612 1.038.507.508.884 1.108 1.121 1.776a.324.324 0 0 1-.082.374c-.119.103-.288.09-.403.015l-.704-.408a.36.36 0 0 0-.353.015c-1.25.722-2.76 1.116-4.375 1.064z"/>
                </svg>
              </a>
              <a href="#" class="social-link" title="微博">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.208-.779.312-1.179.312-.533 0-1.058-.198-1.475-.545-.814-.688-.991-1.819-.446-2.759.545-.939 1.703-1.494 2.913-1.494.217 0 .432.028.639.081a3.2 3.2 0 0 1-.791 2.778 3.19 3.19 0 0 1-2.386.898c-.426 0-.834-.149-1.171-.414-.604-.486-.838-1.212-.617-1.903.221-.691.789-1.204 1.501-1.345.711-.141 1.462.115 1.971.65.509.535.605 1.279.362 1.927a2.59 2.59 0 0 1-.413 1.285 2.608 2.608 0 0 1-1.86.718c-.398 0-.786-.127-1.125-.361-.57-.379-.793-1.071-.572-1.714.221-.644.793-1.125 1.513-1.271.719-.146 1.476.107 1.984.636.509.53.604 1.276.361 1.924a2.209 2.209 0 0 1-1.443 1.898c.648.249 1.35.373 2.061.373 1.641 0 3.12-1.06 3.653-2.587.193-.587.207-1.198.041-1.761-.166-.563-.522-1.041-1.001-1.365-.872-.591-1.983-.759-3.002-.518-.99.236-1.862.851-2.427 1.729a3.816 3.816 0 0 0-.895 2.51c0 1.02.377 1.987 1.043 2.728.666.741 1.581 1.226 2.622 1.226.714 0 1.394-.203 2.001-.579.609-.379 1.105-.909 1.461-1.524.357-.614.538-1.297.538-2.018 0-.712-.18-1.391-.519-1.979a3.069 3.069 0 0 0-1.417-1.028c.127-.472.193-.961.193-1.463 0-2.06-1.673-3.737-3.737-3.737-2.064 0-3.738 1.673-3.738 3.737 0 1.034.426 1.997 1.138 2.686.713.689 1.664 1.081 2.692 1.081z"/>
                </svg>
              </a>
              <a href="#" class="social-link" title="邮箱">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="footer-links">
            <div class="footer-section">
              <h4>产品服务</h4>
              <ul>
                <li><router-link to="/tools">AI工具库</router-link></li>
                <li><router-link to="/categories">分类浏览</router-link></li>
                <li><router-link to="/news">行业资讯</router-link></li>
                <li><router-link to="/about">关于我们</router-link></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>帮助支持</h4>
              <ul>
                <li><a href="#">使用指南</a></li>
                <li><a href="#">常见问题</a></li>
                <li><a href="#">反馈建议</a></li>
                <li><a href="#">合作伙伴</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>法律条款</h4>
              <ul>
                <li><a href="#">隐私政策</a></li>
                <li><a href="#">服务条款</a></li>
                <li><a href="#">版权声明</a></li>
                <li><a href="#">免责声明</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-contact">
            <h4>联系我们</h4>
            <div class="contact-info">
              <p class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>📧 nd1rai@163.com</span>
              </p>
              <p class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                <span>💬 公众号：遇见-今生</span>
              </p>
              <p class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>⏰ 工作时间：周一至周五 9:00-18:00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p>&copy; 2024 1人 AI. 保留所有权利.</p>
          <div class="footer-bottom-links">
            <a href="#">隐私政策</a>
            <a href="#">服务条款</a>
            <a href="#">网站地图</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #0A1628 0%, #0F3460 50%, #1A2733 100%);
  color: #E8ECF0;
  margin-top: auto;
  border-top: 1px solid rgba(26, 188, 156, 0.1);
}

.footer-top {
  padding: 70px 0;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  
  @media (min-width: 768px) {
    grid-template-columns: 2.5fr 2fr 1.5fr;
  }
}

.footer-brand {
  max-width: 400px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo-text {
  font-size: 26px;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: 1px;
}

.brand-description {
  font-size: 15px;
  line-height: 1.8;
  color: #8E99A4;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 14px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #8E99A4;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #1ABC9C 0%, #16A085 100%);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(26, 188, 156, 0.3);
  }
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}

.footer-section {
  min-width: 140px;
}

.footer-section h4 {
  font-size: 15px;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 12px;
}

.footer-section a {
  color: #94A3B8;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #2563EB;
  }
}

.footer-contact {
  background: rgba(255, 255, 255, 0.05);
  padding: 24px;
  border-radius: 16px;
}

.footer-contact h4 {
  font-size: 15px;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #94A3B8;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 0;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.footer-bottom p {
  font-size: 13px;
  color: #64748B;
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-links a {
  font-size: 13px;
  color: #64748B;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #94A3B8;
  }
}
</style>
