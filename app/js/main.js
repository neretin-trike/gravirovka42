
$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.services').css('background-position-y',(0-(scrolled*.35))+'px');
}

$(window).on('load', function() {

    $('.layer,.luna-caption')
    .delay(250)
    .animate(
    {
        'opacity': 0.7
    }, 750);

    $('.qhcmUktk_0')
    .animate(
    {
        'stroke-dashoffset': 0,
        'stroke-width': 1,
    }, {   
        easing: "easeInOutQuint", 
        duration: 1000,
        complete: function () {
            var script = document.createElement('script');
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=DsNRUjoO28_cg3Oa6Y2lH2aHHWzY2Nvp&width=100%&height=450px";
            document.body.appendChild(script);
        }
     })

    var requestOpen = false;

    $(".request-call").click(function() {
        if (!requestOpen)
        {
            $(this)
            .animate(
            {
                'top': '-170px',
                'height': '340px'
            },250,"easeInOutQuint");

            requestOpen = true;
        }
    });

    $(".close-req").click(function() {
        $(".request-call")
        .animate(
        {
            'top': '-10px',
            'height': '50px'
        }, {
            easing: "easeInOutQuint",
            duration: 250,
            complete: function() {
                requestOpen = false;
            }
        });
    });
   // $(".gallery .gallery-slider:first-of-type").css({display: "block"});



    history.pushState("", document.title, window.location.pathname);
    $(".gallery-categories a").click(function() {
        $('#wedding-rings').removeClass('gallery-first');
    });
    // $.scrollSpeed(100, 500, 'easeOutQuint');
});

$(document).ready(function () {
    arrGallery = [
        [25, "wedding-rings"],
        [29,"jewellery"],
        [14, "dog-tags"],
        [8, "raster-engraving"],
        [9, "hours-engraving"],
        [18, "wood-engraving"],
        [10, "leather-engraving"],
        [2, "technological-skins"],
        [31, "trinkets"],
        [3, "laser-cutting"],
        [9, "else"],
    ];
    $.each(arrGallery, function(i, value) {
        var cat = [];
        for (j = 0; j<value[0]; j++) {
            cat.push({addr: "images\\gallery\\" + value[1] + "\\py" + (j+1) + ".jpg"}); 
        };
         $("#" + value[1] + "Tmpl").template({cat}).appendTo("#" + value[1]);
    });


    $(".owl-carousel").owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        lazyLoad:true,
        items:4
    });
});

