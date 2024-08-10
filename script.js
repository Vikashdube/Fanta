var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
  //  markers: true,
}})

tl.to("#fenta",{
    top:"120%",
    left:"5%"
})

var t2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
   // markers: true,
}})

tl.to("#fenta",{
    top:"216%",
    left:"40%"
})