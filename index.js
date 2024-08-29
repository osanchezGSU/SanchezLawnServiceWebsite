$(window).on("scroll", () =>{
     if ($(window).scrollTop() > 0) {
        $(".nav-bar").addClass("bottom-border");
    } else {
        $(".nav-bar").removeClass("bottom-border");
    }
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const cards = document.querySelectorAll('.service-card');
let serviceCardContainer = document.querySelector(".services-cards");

cards.forEach(card => {
    const cardOveraly = card.querySelector('.card-overlay');
    const cardContent = card.querySelectorAll('.card-content');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: serviceCardContainer,
            start: '25% 70%',
            end: '60% 75%',
            scrub: true,
            markers: false
        }
    })
    
    tl.fromTo(cardOveraly, {
        opacity: 0
    },
    {
        opacity: 1
    },
    '<' );
    tl.fromTo(cardContent, {
        opacity: 0,
        yPercent: 100
    },
    {
        opacity: 1,
        yPercent: 0
    },
    '>' );

})



