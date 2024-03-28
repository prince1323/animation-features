gsap.to(".image-container",{
    width: "100%",
    ease: Expo.easeInOut,
    stagger:2,
})

gsap.to(".text h1",{
    top: 0,
    ease: Expo.easeInOut,
    stagger:2,
})

gsap.to(".text h1",{
    delay:2,
    top: "-100%",
    ease: Expo.easeInOut,
    stagger:2,
})


// let imageContainer = document.querySelectorAll(".image-container");

// imageContainer.forEach(function (e) {
//     gsap.to(e, {
//         width: "100%",
//         ease: Expo.easeInOut,
//         duration: 2,
//         stagger:2
//     })
// })