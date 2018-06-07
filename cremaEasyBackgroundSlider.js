$(document).ready(function(){
 cremaEasySlider();
});

function cremaEasySlider() {
   
   /* General Objects */
   
   var divname       = $("#imagesdiv");            /* Element's Name */
   var width         = "100%";                /* Element's Width */
   var height       = "449px";                /* Element's Height */
   var seconds       = "5000";                /* Slide Duration [Default:5000] */
   var effect_duration  = "1000";                /* Effect Duration [Default:1000] */
   var first_image     = "/images/bg1.jpg";       /* Wellcome Image */
    
   divname.css("backgroundImage","url("+ first_image +")");    /* Shows wellcome image */
   divname.css("width",width);                  /* Sets width */
   divname.css("height",height);                   /* Sets height */
 
   var imgArr = new Array(                     /* Images Array */
     '/images/bg1.jpg',
     '/images/bg2.jpg',
     '/images/bg3.jpg',
      '/images/bg4.jpg',
      '/images/bg5.jpg',
      '/images/bg6.jpg'

   );
 
  
   var preloadArr = new Array();
   var i;

   for(i=0; i < imgArr.length; i++){                /* Looping Images */
     preloadArr[i] = new Image();
     preloadArr[i].src = imgArr[i];
   }
 
   var currImg = 1;
   var intID = setInterval(changeImg, seconds);          /* SetInterval Function */ 
 

     function changeImg(){                    /* Image Changer */ 
       divname.animate({opacity: 0}, effect_duration, function(){
       divname.css('background','url(' + preloadArr[currImg++%preloadArr.length].src +')');
       }).animate({opacity: 1}, effect_duration);
     }
 
};