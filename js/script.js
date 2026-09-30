// Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if(menuBtn){
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
        link.classList.add('active');
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        portfolioItems.forEach(item => {
            if(filter === 'all' || item.dataset.category === filter){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// FAQ
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('active'));
        if(!isActive) item.classList.add('active');
    });
});

// Back to top
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
    if(window.scrollY > 400) topBtn.style.display = 'block';
    else topBtn.style.display = 'none';
});
topBtn.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
});

// Contact form
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.background = '#20d58a';
            contactForm.reset();
            setTimeout(() => {
                btn.innerHTML = original;
                btn.style.background = '';
            }, 2000);
        }, 1200);
    });
}

// Smooth active nav on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if(scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if(a.getAttribute('href') === '#'+current) a.classList.add('active');
    });
});
