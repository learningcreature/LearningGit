/* Main Scripts navigation, slider, foundation */
        $(document).foundation();
        
        $(document).ready(function(){
                var slider = $('.my-slider');
                slider.unslider({
                 autoplay: true,
                 speed: 600, 
                 delay:3000, 
                 arrow: true, 
                 /*arrows: {
                    //  Unslider default behaviour
                    prev: '<a class="unslider-arrow prev"></a>',
                    next: '<a class="unslider-arrow next"></a>',
                }*/
             });
                
            slider.unslider('initSwipe');
        });
        

/*Highlighting current link*/

        $(function(){
            $(".top-bar-section .right li").on("click", function(e){
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
            })
               
            
        });


$(function(){
    $("#procurement").target(function(){
        $(this).css("background: red");
    })
})



/* Read More Functionality */


//first hide the extra content:
$('.read-more-content').addClass('hide')
$('.read-more-show, .read-more-hide').removeClass('hide')

// Set up the toggle effect:
$('.read-more-show').on('click', function(e) {
  $(this).next('.read-more-content').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();
});

// Changes
$('.read-more-hide').on('click', function(e) {
  var para = $(this).parent('.read-more-content');
  para.addClass('hide');
  para.prev('.read-more-show').removeClass('hide'); // Hide only the preceding "Read More"
  e.preventDefault();
});