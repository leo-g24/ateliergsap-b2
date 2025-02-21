gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,)
gsap.to(".bulle", {
    scrollTrigger:{
        target: "#section1",
        markers: true,
        start: "top 0%",
        end: "bottom 20%",
        toogleActions: "play none reverse reset",
        scrub: 1,   
    },
    x:"-100px",
    duration: 2,
})


gsap.from(".liste",{
    scrollTrigger:{
        target: "#section2",
        start: "top 0%",
        end: "bottom 120%",
        toogleActions: "play none reverse reset",
        scrub: 1,
    },
    x:"-200px",
    duration: 2,
})


gsap.to(".cursor",{
    duration: 2.5,
    scale: 0.8,
    motionPath: {
        path: "M629.5 394C488 393.5 232.8 349.5 344 177.5C455.2 5.49994 161.667 -9.16672 1 4.99995",
    },
    onComplete: () => {
        gsap.to(".cursor", {
            duration: 0.5,
            rotation: -15,
            scale: 1,            
        })
    }
})

// let timelineWindow4 = gsap.timeline();

// timelineWindow4.to("#section2",{x:100})
// .to("#section2",{y:100})
// .to("#section2",{x:-100})
// .to("#section2",{y:-100})
// .to("#section2",{x:0})



gsap.to(".liste-projet", {
    scrollTrigger: {
        trigger: "#section2",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 2,
        markers: true
    },
    x: "-200%"
});

// Animation des cartes services
gsap.from(".card1, .card2, .card3", {
    scrollTrigger: {
        trigger: ".s3div1",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        markers: true
    },
    x: "33%",  // Toutes les cartes commencent au centre
    opacity: 0.3,
    scale: 0.8,
    stagger: {
        each: 0.2,  // Léger décalage entre chaque carte
        from: "center"
    }
});

// Créer un Draggable pour chaque time slot
Draggable.create(".heure", {
    type: "x,y",
    bounds: "#section4",
    onClick: function() {
        console.log("click");
    },
    onDrag: function() {
        console.log("déplace");
    },
    onDragEnd: function() {
        console.log("dépose");
    },
    inertia: true,
    cursor: "wait"
});