window.onresize = window.onload = function () {
    gsap.set(".m1_stage", { x: "50%", opacity: 1 });
};

let logoVueJs1 = document.querySelector('.orba1'), 
    lineObjToPath = document.querySelector('.c1_line'),
    logoVueJs2 = document.querySelector('.orba2'),
    lineObjToPath2 = document.querySelector('.c2_line');

var timelineObj = gsap
    .timeline({ defaults: { duration: 45 } })
    .fromTo(
        //".orb4b",
        logoVueJs1,
        { xPercent: -50, yPercent: -25 },
        {
            motionPath: {
                path: function () {
                    return MotionPathPlugin.convertToPath(
                        lineObjToPath,
                        false
                    )[0];
                },
                start: 0.10,
                //end: 0.75
            },
            ease: "none",
            yoyo: true,
            repeat: -1,
            duration: 10,
        },
        "orbs" // i dont know why this code here
    )
    .fromTo(
      //".orb4b",
      logoVueJs2,
      { xPercent: -50, yPercent: -25 },
      {
          motionPath: {
              path: function () {
                  return MotionPathPlugin.convertToPath(
                      lineObjToPath2,
                      false
                  )[0];
              },
          },
          ease: "none",
          yoyo: true,
          repeat: -1,
          duration: 10,
      },
      "orbs" // i dont know why this code here
  )
    /*
    .fromTo(
        ".m1Orb",
        { scale: 0, transformOrigin: "50% 50%" },
        {
            duration: 0.8,
            scale: 1.5,
            ease: "back.out(3)",
            stagger: 0.15,
            overwrite: "auto",
        },
        "orbs"
    );*/
