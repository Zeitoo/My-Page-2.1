window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const dots = document.querySelectorAll(".dots");
    const bols = document.querySelectorAll(".bols");
    const tracos = document.querySelectorAll(".traco");

    Array.from(dots).forEach((element, index) => {
        element.classList.add(`dot-${index}`);
        for (let c = 0; c < 374; c++) {
            let newDot = document.createElement("div");
            newDot.classList.add("sub-dot");
            newDot.classList.add(`sub-dot${c}`);
            element.append(newDot);
        }
    });
    Array.from(bols).forEach((element, index) => {
        element.classList.add(`bols-${index}`);
        for (let c = 0; c < 5; c++) {
            let newBol = document.createElement("div");
            newBol.classList.add("sub-bol");
            newBol.classList.add(`sub-bol${c}`);
            element.append(newBol);
        }
    });
    Array.from(tracos).forEach((element, index) => {
        element.classList.add(`traco-${index}`);
    });

    // Animação do nome
    gsap.to(".name span", {
        rotateX: "0deg",
        duration: 0.7,
        stagger: 0.12,
        delay: 2.2,
        ease: "bounce",
    });

    gsap.from(".name span:nth-of-type(1)", {
        x: "70px",
        duration: 0.5,
        delay: 2,
        ease: "sine",
    });

    // Animações de transição
    gsap.to(".logo", {
        x: "100px",
        scale: 95,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "50px top",
            end: "400px top",
            scrub: 1,
        },
    });

    gsap.to(".section-1", {
        scale: 1,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "200px top",
            end: "700px top",
            scrub: 1,
        },
    });

    gsap.to(".section-1-transition", {
        scale: 100,
        y: "0px",
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "920px top",
            end: "1300px top",
            scrub: 1,
            force3D: true,
        },
    });

    gsap.to(".section-2", {
        scale: 1,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "970px top",
            end: "1350px top",
            scrub: 1,
            force3D: true,
        },
    });

    gsap.to(".section-2 .transition", {
        scale: 25,
        y: "0px",
        x: "0px",
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "1500px top",
            end: "1900px top",
            scrub: 1,
            force3D: true,
        },
    });

    gsap.to(".section-3", {
        scale: 1,
        y: "0px",
        x: "0px",
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "1880px top",
            end: "2100px top",
            scrub: 1,
            force3D: true,
        },
    });

    gsap.to(".section-3", {
        y: "-100vh",
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "2220px top",
            end: "2500px top",
            scrub: 1,
            force3D: true,
        },
    });

    gsap.to(".section-4", {
        y: "-155vh",
        backgroundColor: "#a7dfff",
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "2300px top",
            end: "3000px top",
            scrub: 1,
            force3D: true,
        },
    });

    // Adicionar pontos de fundo
    const bgContainer = document.querySelector("main .section-3 .bg");
    const amount = 1200;
    const colors = ["#00ff94", "#112d4e", "#ff2e63", "#50c4ed"];

    for (let c = 0; c < amount; c++) {
        const newDot = document.createElement("span");
        newDot.textContent = "JoZeito";
        newDot.style.color = colors[Math.floor(Math.random() * 4)];
        newDot.style.left = `${Math.floor(Math.random() * 20)}px`;
        newDot.style.top = `${Math.floor(Math.random() * 20)}px`;
        bgContainer.append(newDot);
    }

    // Expandir/contrair ícone de cabeçalho
    const headerIcon = document.querySelector(".icon");
    const headerBox = document.querySelector(".header-box");

    headerIcon.addEventListener("click", () => {
        headerBox.classList.toggle("expanded");
        headerIcon.classList.toggle("expanded");
    });

    // Função para fechar o menu ao clicar fora dele
    document.addEventListener("click", function (event) {
        if (
            !headerIcon.contains(event.target) &&
            !headerBox.contains(event.target)
        ) {
            headerBox.classList.remove("expanded");
            headerIcon.classList.remove("expanded");
        }
    });

    // Vinculação do cabeçalho
    const navItems = document.querySelectorAll(".nav-item");

    navItems[0].addEventListener("click", () => window.scrollTo(0, 10));
    navItems[1].addEventListener("click", () => window.scrollTo(0, 1350));
    navItems[2].addEventListener("click", () => window.scrollTo(0, 2120));
    navItems[3].addEventListener("click", () => window.scrollTo(0, 2650));

    // Vinculação do lado
    const asideItems = document.querySelectorAll(".nav-indicators");

    asideItems[0].addEventListener("click", () => window.scrollTo(0, 0));
    asideItems[1].addEventListener("click", () => window.scrollTo(0, 1350));
    asideItems[2].addEventListener("click", () => window.scrollTo(0, 2120));
    asideItems[3].addEventListener("click", () => window.scrollTo(0, 2650));

    // Listener de rolagem para os indicadores de navegação
    window.addEventListener("scroll", () => {
        const removeAll = (v1, v2, v3) => {
            document
                .querySelector(".nav-indicators-wrapper")
                .classList.remove(`active-${v1}`);
            document
                .querySelector(".nav-indicators-wrapper")
                .classList.remove(`active-${v2}`);
            document
                .querySelector(".nav-indicators-wrapper")
                .classList.remove(`active-${v3}`);
        };

        if (window.scrollY > 2600) {
            removeAll(1, 2, 3);
            document
                .querySelector(".nav-indicators-wrapper")
                .classList.add("active-4");
        } else if (window.scrollY > 2100) {
            removeAll(1, 2, 4);
            document
                .querySelector(".nav-indicators-wrapper")
                .classList.add("active-3");
        } else if (window.scrollY > 1330) {
            removeAll(1, 3, 4);
            document
                .querySelector(".nav-indicators-wrapper")
                .classList.add("active-2");
        } else if (window.scrollY > -5) {
            removeAll(2, 3, 4);
            document
                .querySelector(".nav-indicators-wrapper")
                .classList.add("active-1");
        }
    });

    // Galeria de imagens com rolagem
    const images = document.querySelectorAll("img");
    const lftBtn = document.querySelector(".btn-left");
    const rgtBtn = document.querySelector(".btn-right");
    let currentImage = 0;

    images.forEach((img, index) => img.classList.add(`img-${index}`));

    rgtBtn.addEventListener("click", () => {
        currentImage < 2 ? currentImage++ : (currentImage = 0);
        document
            .querySelector(".gallery-wrapper .image-wrapper")
            .scrollTo(currentImage * 300, 0);
    });

    lftBtn.addEventListener("click", () => {
        currentImage > 0 ? currentImage-- : (currentImage = 2);
        document
            .querySelector(".gallery-wrapper .image-wrapper")
            .scrollTo(currentImage * 300, 0);
    });
});
