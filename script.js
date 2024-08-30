var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
})

function circleSkew(){
    //define default scale value
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",(dets)=>{
      clearTimeout(timeout);
        xscale=gsap.utils.clamp(.7,1.3,dets.clientX-xprev);
        yscale=gsap.utils.clamp(.7,1.3,dets.clientY-yprev);
        xprev=dets.clientX;
        yprev=dets.clientY;
        

        circleMouseFollow(xscale,yscale);

       timeout= setTimeout(()=>{
            document.querySelector('#min-circle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;

        },100)

    })
}
circleSkew();

function circleMouseFollow(xscale,yscale){
        window.addEventListener("mousemove",(dets)=>{
            document.querySelector('#min-circle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
        })
}
circleMouseFollow();



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
