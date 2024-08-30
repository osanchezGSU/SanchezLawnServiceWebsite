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



/* Service Section Animation on Scroll*/
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
        opacity: 0,

    },
    {
        opacity: 1,
        ease: "power2.out"
      
    },
    '<' );
    tl.fromTo(cardContent, {
        opacity: 0,
        yPercent: 100,

        
    },
    {
        yPercent: 0,
        opacity: 1,
        ease: "power4.out",
        duration: 5
        
    },
    '>' );

})


/* Landing Page Animation on Scroll */
let landingPageContainer = document.querySelector('.home');
const grassImage = landingPageContainer.querySelector('.grass-image');
let landingPageTL = gsap.timeline({
    scrollTrigger: {
        trigger: landingPageContainer,
        start: 'start 10%',
        end: '65% 40%',
        scrub: true,
        markers: false
    }
});

landingPageTL.fromTo(grassImage, {
    filter: ('drop-shadow(5px -25px 2px)')
},
{
    filter: ('drop-shadow(1px -5px 2px)'),
    ease: 'power2.out'
})



