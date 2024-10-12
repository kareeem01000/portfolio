// تأثير الدوران لزر الواتساب عند اقتراب الماوس
const whatsappButton = document.querySelector('.whatsapp-button');

whatsappButton.addEventListener('mouseover', () => {
    whatsappButton.style.transform = 'rotate(360deg)';
});

whatsappButton.addEventListener('mouseout', () => {
    whatsappButton.style.transform = 'rotate(0deg)';
});

// إضافة تأثير التمرير السلس للأقسام
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// إظهار زر التمرير للأعلى عند التمرير
const scrollToTopButton = document.getElementById('scrollToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// التمرير للأعلى عند النقر على الزر
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// تأثير التحريك عند التمرير
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
