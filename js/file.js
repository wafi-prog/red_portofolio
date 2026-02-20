
// load animasi
        window.addEventListener("load", () => {
            const elements = document.querySelectorAll(".animate-fade");

            elements.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add("opacity-100", "translate-y-0");
                }, i * 200);
            });
        });

// efek navbar
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            if (window.scrollY > 50) {
                nav.style.background = "rgba(120,0,0,0.45)";
                nav.style.backdropFilter = "blur(20px)";
            } else {
                nav.style.background = "rgba(255,255,255,0.03)";
            }
        });


//  floating card
        const card = document.querySelector(".floating-card");
        let angle = 0;

        function floatAnim() {
            angle += 0.02;
            card.style.transform = `translateY(${Math.sin(angle) * 10}px)`;
            requestAnimationFrame(floatAnim);
        }
        floatAnim();

        function focusImage(id) {

            document.querySelectorAll('.expImage').forEach(img => {
                img.classList.remove('active')
            })

            const target = document.getElementById(id);
            target.classList.add('active');

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

        }

        function showTab(tab, btn) {
            document.querySelectorAll('.tabContent').forEach(el => {
                el.classList.add('hidden')
            })

            document.getElementById(tab).classList.remove('hidden')

            document.querySelectorAll('.tabBtn').forEach(b => {
                b.classList.remove('active', 'glow')
            })

            btn.classList.add('active', 'glow')
        }

        function filterProject(category) {
            document.querySelectorAll('.projectCard').forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block'
                } else {
                    if (card.classList.contains(category)) {
                        card.style.display = 'block'
                    } else {
                        card.style.display = 'none'
                    }
                }
            })
        }

        const sections = document.querySelectorAll(".sectionFade");

        window.addEventListener("scroll", () => {
            sections.forEach(sec => {
                const top = sec.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) {
                    sec.classList.add("show");
                }
            });
        });

        function toggleMenu() {
         const menu = document.getElementById("mobileMenu");
            menu.classList.toggle("hidden");}

