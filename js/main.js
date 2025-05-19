// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Menu Mobile Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const iconOpen = menuToggle.querySelector(".icon-open");
  const iconClose = menuToggle.querySelector(".icon-close");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isActive = mainNav.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", isActive);
      if (isActive) {
        iconOpen.style.display = "none";
        iconClose.style.display = "block";
      } else {
        iconOpen.style.display = "block";
        iconClose.style.display = "none";
      }
    });
  }

  // Smooth Scroll para links âncora (ex: #contact)
  document
    .querySelectorAll('a[href^="index.html#"], a[href^="#contact"]')
    .forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        let targetId = this.getAttribute("href");
        // Se for link para index.html#contact de outra página
        if (targetId.startsWith("index.html#")) {
          // Se não estiver na index.html, redireciona e o navegador cuidará do scroll
          if (
            !window.location.pathname.endsWith("index.html") &&
            !window.location.pathname.endsWith("/")
          ) {
            return; // Deixa o navegador redirecionar
          }
          targetId = targetId.substring(targetId.indexOf("#")); // Pega só a parte da âncora
        }

        const targetElement = document.getElementById(targetId.substring(1));

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
          });

          // Fechar menu mobile se estiver ativo e for um clique em âncora
          if (mainNav && mainNav.classList.contains("active")) {
            mainNav.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            if (iconOpen && iconClose) {
              iconOpen.style.display = "block";
              iconClose.style.display = "none";
            }
          }
        }
      });
    });

  // Atualizar ano no footer
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Efeito Glitch no título Hero
  const glitchTitle = document.querySelector(".glitch");
  if (glitchTitle) {
    setInterval(() => {
      glitchTitle.classList.add("glitching");
      setTimeout(() => {
        glitchTitle.classList.remove("glitching");
      }, 600); // Duração da animação do glitch (deve ser menor que o intervalo)
    }, 4000 + Math.random() * 2000); // Intervalo aleatório para naturalidade
  }

  // Animação de "fade-in" para elementos ao rolar a página
  const revealElements = document.querySelectorAll(
    ".feature-card, .service-item, .team-member-card, .content-section > p, .content-section > h2, .cta-content > *"
  );
  const revealObserverOptions = {
    threshold: 0.1, // Revela quando 10% do elemento está visível
    rootMargin: "0px 0px -50px 0px", // Começa a carregar um pouco antes de entrar totalmente na viewport
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // Para animar apenas uma vez
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)"; // Começa um pouco abaixo
    el.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
    revealObserver.observe(el);
  });
});
