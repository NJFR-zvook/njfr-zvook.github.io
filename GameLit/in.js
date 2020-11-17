"use strict";
let a=0;
up.classList.add('unvis');

function getPrecScroll(){
  console.log(100*window.pageYOffset/(document.body.clientHeight-window.innerHeight+80));
  return 100*window.pageYOffset/(document.body.clientHeight-window.innerHeight+80);
}
document.addEventListener("scroll", function(e){
  let b=getPrecScroll();
  
  lin.style.width=b/5.5+'%';

  if(getPrecScroll()>=200)
  {
    up.classList.add('vis');
    up.classList.remove('unvis');
  }else{
    up.classList.remove('vis');
    up.classList.add('unvis');
  };
  if(getPrecScroll()>=0&&getPrecScroll()<25)
  {
    a1.classList.add('active');
  }else{
    a1.classList.remove('active');
  };
  if(getPrecScroll()>=20&&getPrecScroll()<90)
  {
    a2.classList.add('active');
  }else{
    a2.classList.remove('active');
  };
  if(getPrecScroll()>=90&&getPrecScroll()<550)
  {
    a3.classList.add('active');
  }else{
    a3.classList.remove('active');
  };
  if(getPrecScroll()>=550&&getPrecScroll()<=6000)
  {
    a4.classList.add('active');
  }else{
    a4.classList.remove('active');
  };
});

up.addEventListener("click", function(e){
  document.body.scrollIntoView({behavior: 'smooth'});
  //window.scrollTo(0,0);
});

a1.addEventListener("click", function(e){
  const domRect = first.getBoundingClientRect();
  let t2=setInterval(function(){
    window.scrollBy(0, domRect.top/250);
  }, 4);
  setTimeout(function(){
    clearInterval(t2);
  },1000);
});

a2.addEventListener("click", function(e){
  const domRect = two.getBoundingClientRect();
  let t3=setInterval(function(){
    window.scrollBy(0, domRect.top/250);
  }, 4);
  setTimeout(function(){
    clearInterval(t3);
  },1000);
});

a3.addEventListener("click", function(e){
  const domRect = three.getBoundingClientRect();
  let t4=setInterval(function(){
    window.scrollBy(0, domRect.top/250);
  }, 4);
  setTimeout(function(){
    clearInterval(t4);
  },1000);
});

a4.addEventListener("click", function(e){
  const domRect = four.getBoundingClientRect();
  let t5=setInterval(function(){
    window.scrollBy(0, domRect.top/250);
  }, 4);
  setTimeout(function(){
    clearInterval(t5);
  },1000);
});

let preloader=document.body.querySelector(".preloader");
let boi=document.body.querySelector(".legoman");
let t1=setInterval(function(){
  boi.classList.toggle("bigsmall");
}, 1000);
setTimeout(function(){
  preloader.remove();
  clearInterval(t1);
  //clearInterval(t2);
},3000);



