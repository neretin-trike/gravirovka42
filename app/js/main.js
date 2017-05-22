
$(window).on('load', function() {

    $('.layer')
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
    },
    {   
        easing: "easeInOutQuint", 
        duration: 1000,
        complete: function () {
            var script = document.createElement('script');
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=DsNRUjoO28_cg3Oa6Y2lH2aHHWzY2Nvp&width=100%&height=450px";
            document.body.appendChild(script);
        }
     })

});


