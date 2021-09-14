let tl = gsap.timeline({repeat:20});
let target = document.querySelectorAll(".studies-container img" );
let numberOfTarget = target.length;
let time = 0.5;

let stop = 3;
let staggered = time + stop; 
let repeat = (staggered * (numberOfTarget - 1)) + stop;

function init() {
  gsap.set(".studies-container", {autoAlpha:1})
  tl.from(target, {x:200, duration:time, opacity: 0, stagger:{
    each:staggered,
    repeat:-1,
    repeatDelay:repeat
  }})
    .to(target, {x:-200, duration:time, opacity: 0, stagger:{
      each:staggered,
      repeat:-1,
      repeatDelay:repeat
    }}, staggered)
}

init();

let t = gsap.timeline({re:20});
let ta = document.querySelectorAll(".chibi-point .fas" );
let numberOfTa = target.length;
let ti = 0.5;

let st = 3;
let sta = ti + st; 
let re = (sta * (numberOfTa - 1)) + st;

function play() {
  gsap.set(".chibi-point", {autoAlpha:1})
  t.from(ta, {x:0, duration:ti, opacity: 0, stagger:{
    each:sta,
    repeat:-1,
    repeatDelay:re
  }})
    .to(ta, {x:0, duration:ti, opacity: 0, stagger:{
      each:sta,
      repeat:-1,
      repeatDelay:re
    }}, sta)
}

play();




