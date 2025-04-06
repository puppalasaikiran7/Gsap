let tl = gsap.timeline();

tl.from("#nav h3" , {
    y:-50,
    duration : 0.8,
    opacity :0,
    delay: 0.4,
    stagger : 0.2    
})

gsap.from("#footer h3" ,{
    y:10,
    opacity:0,
    duration:1,
    stagger:0.7,
    delay:1
})


tl.from("#main h1", {
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.5
})


tl.from("img" , {
    x: 100,
    rotate :45,
    duration: 0.5,
    opacity:0,
    stagger:0.5
})

