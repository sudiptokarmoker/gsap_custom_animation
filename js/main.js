window.onresize = window.onload = function () {
    gsap.set(".m1_stage", { x: "50%", opacity: 1 });
};

let logoVueJs1 = document.querySelector('.orba1'),
    lineObjToPath = document.querySelector('.c1_line'),
    logoAngular = document.querySelector('.orba2'),
    logoReact = document.querySelector('.orba3');

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
                start: 7.5,
                end: 0
            },
            ease: "none",
            yoyo: true,
            repeat: -1,
            duration: 100,
        },
        "orbs" // i dont know why this code here
    )
    .fromTo(
      //".orb4b",
      logoAngular,
      { xPercent: -50, yPercent: -25 },
      {
          motionPath: {
              path: function () {
                  return MotionPathPlugin.convertToPath(
                    lineObjToPath,
                      false
                  )[0];
              },
              start: 0
          },
          ease: "none",
          //yoyo: true,
          repeat: -1,
          duration: 30,
          //reverse: true
      },
      "orbs" // i dont know why this code here
  )
  .fromTo(
    //".orb4b",
    logoReact,
    { xPercent: -50, yPercent: -25 },
    {
        motionPath: {
            path: function () {
                return MotionPathPlugin.convertToPath(
                  lineObjToPath,
                    false
                )[0];
            },
            start: 0
        },
        ease: "none",
        //yoyo: true,
        repeat: -1,
        duration: 15,
        //reverse: true
    },
    "orbs" // i dont know why this code here
);