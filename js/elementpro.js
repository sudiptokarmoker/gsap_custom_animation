let logoVueJs1 = document.querySelector('.logo-1'),
    lineObjToPath = document.querySelector('#circle'),
    logoAngular = document.querySelector('.logo-2'),
    logoReact = document.querySelector('.logo-3'),
    logoNodejs = document.querySelector('.logo-4'),
    getNumberOfItem = parseInt($('.text-renderred').length),
    baseDuration = 10,
    slotPerUnit = getNumberOfItem > 0 ? baseDuration / getNumberOfItem : null;
var timeSlotArray = [], showHideToogle = true, lastMatchIndex = -1;

    for(let i = 0; i < getNumberOfItem; i++){
        let inc_i = i + 1;
        let valueOfSlot = slotPerUnit * inc_i;
        console.log(valueOfSlot);
        timeSlotArray.push(valueOfSlot);
    }
    console.log(timeSlotArray);
var processingResumeStart = true;
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
                //end: 1 // 2.5
            },
            ease: "none",
            //yoyo: true,
            repeat: -1,
            duration: baseDuration, // 10
            onUpdate: function(){
                //console.log("1 " + timelineObj.time());
                //onUpdateEffectProcessing(1, 0, 0);
                if(timelineObj){
                   onUpdateEffectProcessing(1);
                    //console.log("1 " + timelineObj.time());
                }
            }
        },
        "orbs" // i dont know why this code here
    )
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
            duration: baseDuration, // 10
            onUpdate: function(){
                //console.log("2 " + timelineObj.time());
                //onUpdateEffectProcessing(2, .25, 1.25);
                if(timelineObj){
                    //onUpdateEffectProcessing(2, .25, 1.25);
                    onUpdateEffectProcessing(2);
                    //console.log("2 " + timelineObj.time());
                }
            }
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
          duration: baseDuration,
          onUpdate: function(){
            //console.log("3 " + timelineObj.time());
            if(timelineObj){
                //onUpdateEffectProcessing(3, 0.5, 1.5);
                onUpdateEffectProcessing(3);
                //console.log("3 " + timelineObj.time());
            }
            //onUpdateEffectProcessing(3, 0.5, 1.5);
        }
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
        duration: baseDuration,
        onUpdate: function(){
            if(timelineObj){
                //console.log("4 " + timelineObj.time());
                //onUpdateEffectProcessing(4, 0.749, 1.749);
                onUpdateEffectProcessing(4)
            }
            //onUpdateEffectProcessing(4, 0.749, 1.749);
        }
    },
    "orbs" // i dont know why this code here
);

function onUpdateEffectProcessing(identifier){
    let atTopPosition, baseTime;
    if(timelineObj && timelineObj.time() && identifier > 0 && getNumberOfItem > 0 && showHideToogle === true){
        if(timelineObj.time() >= 10){
            baseTime = timelineObj.time() % 10;
            let getTimeWithOneDecimalPoint = Math.round(baseTime * 10) / 10;
            let getIndexOfItem = timeSlotArray.indexOf(getTimeWithOneDecimalPoint);
            if(getIndexOfItem >= 0 && lastMatchIndex !== getIndexOfItem){
                timelineObj.pause();
                showHideToogle = false;
                lastMatchIndex = getIndexOfItem;
                let valueOfPosition = getNumberOfItem - (getIndexOfItem + 1);
                atTopPosition = valueOfPosition === 0 ? timeSlotArray.length : valueOfPosition; // 4 
                $('.logo-' + atTopPosition +'-text').addClass('active');
                setTimeout(function(){ 
                    $('.logo-' + atTopPosition + '-text').removeClass('active');
                    timelineObj.resume();
                    showHideToogle = true;
                }, 5000);
            }
        } else {
            let getTimeWithOneDecimalPoint = Math.round(timelineObj.time() * 10) / 10;
            let getIndexOfItem = timeSlotArray.indexOf(getTimeWithOneDecimalPoint);
            if(getIndexOfItem >= 0 && lastMatchIndex !== getIndexOfItem){
                timelineObj.pause();
                showHideToogle = false;
                lastMatchIndex = getIndexOfItem;
                let valueOfPosition = getNumberOfItem - (getIndexOfItem + 1);
                atTopPosition = valueOfPosition === 0 ? timeSlotArray.length : valueOfPosition; // 4 
                $('.logo-' + atTopPosition +'-text').addClass('active');
                setTimeout(function(){ 
                    $('.logo-' + atTopPosition + '-text').removeClass('active');
                    timelineObj.resume();
                    showHideToogle = true;
                }, 5000);
            }
        }
    }
}

function getTopPosition(start_time, end_time){
    return end_time + 2.5;
}