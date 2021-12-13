var Animation = function (els) {
    var dur = 0.3,
    amount = "55%",
    t1  = new TimelineMax({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
    });
    // above default configuarion end
    t1.add(fromLeft(els[0], els[2]))
      .add(fromRight(els[1]));
    // from left function here
    function fromLeft(el){
        return TweenMax.from(el, dur, {x:"-=" + amount, autoAlpha:0});
    }
    // from right animation
    function fromRight(el) {
        return TweenMax.from(el, dur, {x:"+=" + amount, autoAlpha:0});
    }
}