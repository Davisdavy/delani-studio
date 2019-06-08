
$(document).ready(function () {
    $(".hidden").click(function (){
        $(".descript-hide").toggle();
        $(".hidden").toggle();
    });

    $(".hidden2").click(function (){
        $(".descript-hide2").toggle();
        $(".hidden2").toggle();
        
    });

    $(".hidden3").click(function (){
        $(".descript-hide3").toggle();
        $(".hidden3").toggle();
    });



    $("div.overlay").hover(function(){
        $(this).css({
            "opacity":"5",
            "transition": "2s",
            "cursor": "pointer"
        });
    },
    function () { 
        $(this).css({
                "opacity": "0"
            });
        }
    );
});

