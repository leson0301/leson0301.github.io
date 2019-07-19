// owl caruosel

$(document).ready(function(){
    //default settings:
autoplay:false
autoplayTimeout:5000
autoplayHoverPause:false




var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,

    loop:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        300:{
            items:1,
            nav:true
        },
        400:{
            items:2,
            nav:true
        },
        500:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        700:{
            items:3,
            nav:true
        },
        800:{
            items:3,
            nav:true
        },
        900:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000]);
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay');
})




// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })

$(".btndathang").click(function(){
    $(".xacnhandonhang").toggle();
  });


  });