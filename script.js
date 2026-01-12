document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.getElementById('main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('-translate-y-full');
            header.classList.remove('shadow-sm');
            header.classList.add('py-4');
            header.classList.remove('py-2');
        } 
        else if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('-translate-y-full');
        } 
        else {
            header.classList.remove('-translate-y-full');
            header.classList.add('shadow-sm');
            header.classList.remove('py-4');
            header.classList.add('py-2');
        }
        lastScroll = currentScroll;
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const modal = document.getElementById('privacy-modal');
    const openModalBtn = document.getElementById('privacy-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalBackdrop = document.getElementById('modal-backdrop');

    function toggleModal() {
        modal.classList.toggle('hidden');
    }

    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });

    closeModalBtn.addEventListener('click', toggleModal);
    modalBackdrop.addEventListener('click', toggleModal);

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));
});