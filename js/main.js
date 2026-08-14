/* ========================================
   小宝贝成长记 - 主脚本
   移动端优先设计
   ======================================== */

(function() {
    'use strict';

    // ===== DOM 加载完成 =====
    document.addEventListener('DOMContentLoaded', function() {
        initScrollAnimations();
        initSmoothScroll();
        initNavbarScroll();
        initActiveNav();
        initLazyImages();
    });

    // ===== 滚动渐入动画 =====
    function initScrollAnimations() {
        const elements = document.querySelectorAll('.fade-in');
        if (elements.length === 0) return;

        if (!('IntersectionObserver' in window)) {
            elements.forEach(el => el.classList.add('visible'));
            return;
        }

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 60);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -20px 0px'
        });

        elements.forEach(el => observer.observe(el));
    }

    // ===== 平滑滚动 =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const offset = 70;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===== 导航栏滚动效果 =====
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        const desktopNav = document.querySelector('.desktop-nav');
        const target = navbar || desktopNav;
        if (!target) return;

        let ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrollY = window.pageYOffset;
                    if (scrollY > 10) {
                        target.style.boxShadow = '0 2px 12px rgba(74, 144, 217, 0.08)';
                    } else {
                        target.style.boxShadow = '';
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ===== 高亮当前导航 =====
    function initActiveNav() {
        const currentPage = getCurrentPage();
        if (!currentPage) return;

        // 底部Tab
        document.querySelectorAll('.tab-item').forEach(item => {
            const href = item.getAttribute('data-page');
            if (href === currentPage) {
                item.classList.add('active');
            }
        });

        // 桌面端导航
        document.querySelectorAll('.desktop-menu a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(currentPage)) {
                link.classList.add('active');
            }
        });
    }

    function getCurrentPage() {
        const path = window.location.pathname;
        let filename = path.substring(path.lastIndexOf('/') + 1);
        if (!filename || filename === '/') filename = 'index.html';
        return filename;
    }

    // ===== 图片懒加载占位 =====
    function initLazyImages() {
        const placeholders = document.querySelectorAll('[data-lazy]');
        if (placeholders.length === 0) return;

        placeholders.forEach(el => {
            // 可以在这里接入真实的图片加载逻辑
            el.classList.add('loaded');
        });
    }

    // ===== 全局工具函数 =====
    window.BabyApp = {
        // 格式化日期
        formatDate(date, format) {
            format = format || 'YYYY年MM月DD日';
            const d = new Date(date);
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return format
                .replace('YYYY', year)
                .replace('MM', month)
                .replace('DD', day);
        },

        // 计算天数差
        daysBetween(date1, date2) {
            date2 = date2 || new Date();
            const oneDay = 24 * 60 * 60 * 1000;
            const d1 = new Date(date1);
            const d2 = new Date(date2);
            return Math.floor(Math.abs((d2 - d1) / oneDay));
        },

        // 计算月龄
        monthsBetween(date1, date2) {
            date2 = date2 || new Date();
            const d1 = new Date(date1);
            const d2 = new Date(date2);
            let months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months += d2.getMonth() - d1.getMonth();
            if (d2.getDate() < d1.getDate()) months--;
            return months;
        },

        // 数字滚动动画
        animateNumber(element, target, duration) {
            duration = duration || 800;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(target * easeOut);
                element.textContent = current;
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    element.textContent = target;
                }
            }

            requestAnimationFrame(update);
        },

        // 显示 Toast
        toast(message, duration) {
            duration = duration || 2000;
            let toastEl = document.querySelector('.app-toast');
            if (!toastEl) {
                toastEl = document.createElement('div');
                toastEl.className = 'app-toast';
                toastEl.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0.9);
                    background: rgba(0, 0, 0, 0.75);
                    color: white;
                    padding: 12px 24px;
                    border-radius: 12px;
                    font-size: 14px;
                    z-index: 9999;
                    opacity: 0;
                    transition: all 0.25s ease;
                    pointer-events: none;
                    max-width: 80%;
                    text-align: center;
                `;
                document.body.appendChild(toastEl);
            }
            toastEl.textContent = message;
            toastEl.style.opacity = '1';
            toastEl.style.transform = 'translate(-50%, -50%) scale(1)';

            clearTimeout(toastEl._timer);
            toastEl._timer = setTimeout(() => {
                toastEl.style.opacity = '0';
                toastEl.style.transform = 'translate(-50%, -50%) scale(0.9)';
            }, duration);
        }
    };

})();
