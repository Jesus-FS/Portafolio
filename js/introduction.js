let animation = gsap.timeline({repeat:20});
let targets = document.querySelectorAll(".img-container img");
let numberOfTargets = targets.length;
let duration = 0.5;

let pause = 4;
let stagger = duration + pause;
let repeatDelay = (stagger * (numberOfTargets - 1)) + pause;

function init() {
  gsap.set(".img-container", {autoAlpha:1})
  animation.from(targets, {x:80, duration:duration, opacity: 0, stagger:{
    each:stagger,
    repeat:-1,
    repeatDelay:repeatDelay
  }})
    .to(targets, {x:-80, duration:duration, opacity: 0, stagger:{
      each:stagger,
      repeat:-1,
      repeatDelay:repeatDelay
    }}, stagger)
}

init();


