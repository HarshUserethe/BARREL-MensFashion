function show() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
// show();



var subscribebutton =  document.querySelector(".subs>button");






var flag = 0;

subscribebutton.addEventListener("click", function(){
    if(flag == 0){
        subscribebutton.innerHTML = "SUBSCRIBED";
        flag = 1;
    }
    else{
        subscribebutton.innerHTML = "SUBSCRIBE NOW";
        flag = 0;
    }
})


// <!-- SWIPER JS PART -->

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

// <!-- ------------------------- -->

 

var menu = document.querySelector(".ri-menu-line");
var pannel = document.querySelector("#menupannel");


var pointer = 0;

menu,addEventListener("click", ()=>{
  if(pointer == 0){
    pannel.style.right = " 0";
    pointer = 1;
  }
  else{
    pannel.style.right = "-80%";
    pointer = 0;
  }
})


gsap.from(".rec11",{
  y: 30,
  opacity: 0,
  duration: .5,
   
  scrollTrigger: {
    scroller: "body",
    trigger: ".rec11",
    
    start: "top 80%",
  }
})
gsap.from(".textone>h1",{
  y: 30,
  opacity: 0,
  duration: .5,
   
  scrollTrigger: {
    scroller: "body",
    trigger: ".rec11",
    
    start: "top 80%",
  }
})
gsap.from(".texttwo>p",{
  y: 30,
  opacity: 0,
  duration: .5,
   delay: .2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".rec11",
    
    start: "top 80%",
  }
})
gsap.from(".readmorebtn",{
  y: 30,
  opacity: 0,
  duration: .5,
   delay: .3,
  scrollTrigger: {
    scroller: "body",
    trigger: ".rec11",
    
    start: "top 80%",
  }
})

 
gsap.from("#page3>.left>h1",{
  y: 30,
  opacity: 0,
  duration: .5,
  
  scrollTrigger: {
    scroller : "body",
    trigger: "#page3>.left>h1",
    
    start: "top 80%",
  
  }
})


gsap.from("#page3>.left>p",{
  y: 30,
  opacity: 0,
  duration: .5,
  delay: .2,

  scrollTrigger: {
    scroller: "body",
    trigger: "#page3>.left>h1",
    
    start: "top 80%",
  }

})

gsap.from("#page3>button",{
  y: 30,
  duration: .5,
  delay: .3,

  scrollTrigger: {
    scroller: "body",
    trigger: "#page3>.left>h1",
    
    start: "top 80%",

  }
})

gsap.from("#photoframe",{
  y: 30,
  duration: .5,
  opacity: 0,

  scrollTrigger: {
    scroller: "body",
    trigger: "#page3>.left>h1",
    
    start: "top 80%",

  }

})

gsap.from("#page4>h1",{
  y: 30,
  duration: .5,
  opacity: 0,
  delay: .3,

  scrollTrigger: {
    scroller: "body",
    trigger: "#page4>h1",
    
    start: "top 80%",


  }

})
gsap.from(".rec111",{
  y: 30,
  duration: .5,
  opacity: 0,

  scrollTrigger: {
    scroller: "body",
    trigger: "#page4>h1",
    
    start: "top 80%",

  }

})

gsap.from(".txtarea>h1",{
  y: 30,
  duration: .5,
  opacity: 0,

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea>h1",
    
    start: "top 90%",

  }

})

gsap.from(".txtarea>p",{
  y: 30,
  duration: .5,
  opacity: 0,
  delay: .2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea>h1",
    
    start: "top 90%",

  }

})

gsap.from(".txtarea>button",{
  y: 30,
  duration: .5,
 delay: .3,

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea>h1",
    
    start: "top 90%",

  }

})

gsap.from(".image1",{
  y: 30,
  duration: .5,
  opacity: 0,
   scaleY: 0.5,
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea>h1",
    
    start: "top 90%",

  }

})
gsap.from(".image2",{
  y: 30,
  duration: .5,
  opacity: 0,
   scaleY: 0.5,
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea2>h1",
    
    start: "top 90%",

  }

})

gsap.from(".image3",{
  y: 30,
  duration: .5,
  opacity: 0,
   scaleY: 0.5,
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea3>h1",
    
    start: "top 90%",

  }

})

gsap.from(".image4",{
  y: 30,
  duration: .5,
  opacity: 0,
   scaleY: 0.5,
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea4>h1",
    
    start: "top 90%",

  }

})


gsap.from(".txtarea2>h1",{
  y: 30,
  duration: .5,
  opacity: 0,
  
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea2>h1",
    
    start: "top 90%",

  }

})

gsap.from(".txtarea2>p",{
  y: 30,
  duration: .5,
  opacity: 0,
  delay: .2,
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea2>h1",
    
    start: "top 90%",

  }

})


gsap.from(".txtarea3>h1",{
  y: 30,
  duration: .5,
  opacity: 0,
  
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea3>h1",
    
    start: "top 90%",

  }

})

gsap.from(".txtarea3>p",{
  y: 30,
  duration: .5,
  opacity: 0,
  delay: .2,
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea3>h1",
    
    start: "top 90%",

  }

})


gsap.from(".txtarea4>h1",{
  y: 30,
  duration: .5,
  opacity: 0,
  
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea4>h1",
    
    start: "top 90%",

  }

})

gsap.from(".txtarea4>p",{
  y: 30,
  duration: .5,
  opacity: 0,
  delay: .2,
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea4>h1",
    
    start: "top 90%",

  }

})


gsap.from(".txtarea5>h1",{
  y: 30,
  duration: .5,
  opacity: 0,
  
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea5>h1",
    
    start: "top 90%",

  }

})

gsap.from(".txtarea5>p",{
  y: 30,
  duration: .5,
  opacity: 0,
  delay: .2,
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".txtarea5>h1",
    
    start: "top 90%",

  }

})

gsap.from(".testimonial>h1",{
  y: 30,
  duration: .5,
  opacity: 0,
 
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".testimonial>h1",
    
    start: "top 90%",

  }

})

gsap.from(".circle",{
  y: 30,
  duration: .5,
  opacity: 0,

 

  scrollTrigger: {
    scroller: "body",
    trigger: ".circle",
    
    start: "top 90%",

  }

})
gsap.from("#page8>h1",{
  y: 30,
  duration: .5,
  opacity: 0,
  delay: .2,
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".circle",
    
    start: "top 70%",

  }

})


gsap.from(".subs",{
  y: 30,
  duration: .5,
  opacity: 0,
  delay: .3,
 

  scrollTrigger: {
    scroller: "body",
    trigger: ".circle",
    
    start: "top 70%",

  }

})


gsap.from("#logo",{
  y: -30,
  duration: .5,
  opacity: 0,

})



