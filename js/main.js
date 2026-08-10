// ===== 主脚本文件 =====

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initScrollEffects();
    initNavbar();
    initSmoothScroll();
    animateNumbers();
});

// 导航栏滚动效果
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(107, 185, 232, 0.2)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(107, 185, 232, 0.15)';
        }

        lastScroll = currentScroll;
    });
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 滚动动画效果
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    document.querySelectorAll('.card, .feature-card, .milestone-card, .diary-item, .family-member, .why-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 数字动画
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');

    numbers.forEach(num => {
        const target = parseInt(num.textContent);
        if (isNaN(target)) return;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            num.textContent = target;
                            clearInterval(timer);
                        } else {
                            num.textContent = Math.floor(current);
                        }
                    }, 30);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(num);
    });
}

// 工具函数：格式化日期
function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

// 工具函数：计算两个日期之间的天数
function daysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return Math.round(Math.abs((d1 - d2) / oneDay));
}
