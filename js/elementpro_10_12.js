let logoVueJs1 = document.querySelector('.logo-1'),
    lineObjToPath = document.querySelector('#circle'),
    logoAngular = document.querySelector('.logo-2'),
    logoReact = document.querySelector('.logo-3'),
    logoNodejs = document.querySelector('.logo-4'),
    showHideToogle = true;

    MotionPathPlugin.convertToPath('circle');
var timelineObj = gsap
    .timeline({ defaults: { duration: 45 } })
    .fromTo(
        //".orb4b",
        logoVueJs1,
        { xPercent: -50, yPercent: -25 },
        {
            motionPath: {
                path: '#circle',
                align: '#circle',
                start: 0,
                //end: 1
            },
            ease: "none",
            //yoyo: true,
            repeat: -1,
            duration: 10,
            onUpdate: function(){
                //console.log(timelineObj.time());
                if(timelineObj){
                    //console.log(timelineObj.time());
                    var currentProgressTime = parseInt(timelineObj.time());
                    //console.log(timelineObj.time() > 7.5 && timelineObj.time() < 7.6 ? "trigger 7.5" : '');
                    //console.log(currentProgressTime);
                    //console.log(timelineObj.time());
                    if(timelineObj.time() && timelineObj.time() > 7.5 && showHideToogle === true){
                        //console.log("trigger time");
                        timelineObj.pause();
                        //alert("s");
                        setTimeout(function(){ 
                            //$('.center-position').fadeIn('slow').css('visibility', 'visible');
                            $('.center-position').addClass('active');
                            //timelineObj.resume();
                        }, 1000);
                        setTimeout(function(){ 
                            $('.center-position').removeClass('active');
                            //$('.text-renderred').fadeOut('hide');
                            timelineObj.resume();
                            showHideToogle = false;
                       }, 5000);
                    }
                }
                //console.log($('.logo-1').position().top);
                // /console.log(timelineObj.getDuration());
            }
        },
        "orbs" // i dont know why this code here
    );
    /*
    .fromTo(
        //".orb4b",
        logoAngular,
        { xPercent: -50, yPercent: -25 },
        {
            motionPath: {
                path: '#circle',
                align: '#circle',
                start: .25,
                end: 1.25 // here this means total full leanth + .5 (10 sec + %50 of total animation)
            },
            ease: "none",
            //yoyo: true,
            repeat: -1,
            duration: 10,
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
            path: '#circle',
            align: '#circle',
            start: 0.5,
            end: 1.5
          },
          ease: "none",
          //yoyo: true,
          repeat: -1,
          duration: 10,
          //reverse: true
      },
      "orbs" // i dont know why this code here
  )
  .fromTo(
    logoNodejs,
    { xPercent: -50, yPercent: -25 },
    {
        motionPath: {
          path: '#circle',
          align: '#circle',
          start: 0.749,
          end: 1.749
        },
        ease: "none",
        //yoyo: true,
        repeat: -1,
        duration: 10,
        //reverse: true
    },
    "orbs" // i dont know why this code here
)*/