let ani = gsap.timeline({repeat:20});
let targ = document.querySelectorAll(".slider-cell img");
let numberTag = targ.length;
let dura = 0.5;

let pau = 3;
let stag = dura + pau;
let repeatDel = (stag * (numberTag - 1)) + pau;

function init() {
  gsap.set(".slider-cell", {autoAlpha:1})
  ani.from(targ, {x:0, duration:dura, opacity: 0, stagger:{
    each:stag,
    repeat:-1,
    repeatDelay:repeatDel
  }})
    .to(targ, {x:-0, duration:dura, opacity: 0, stagger:{
      each:stag,
      repeat:-1,
      repeatDelay:repeatDel
    }}, stag)
}

init();
