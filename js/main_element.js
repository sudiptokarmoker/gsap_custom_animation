//register the plugin (just once)
//gsap.registerPlugin(MotionPathPlugin);
/*
MorphSVGPlugin.convertToPath('.circlePath');
gsap.to(".imageSelector", {
  duration: 5, 
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: ".circlePath",
    align: ".circlePath",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});
*/
gsap.to(
    ".imageSelector",
    { xPercent: -35, yPercent: -5 },
    {
        motionPath: {
            path: function () {
                return MotionPathPlugin.convertToPath(".circlePath", false)[0];
            },
            align: ".circlePath",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 1.03,
            end: 1.22,
        },
        ease: "none",
        yoyo: true,
        repeat: -1,
    },
    "orbs"
);
