
$(document).ready(function () {
    $("div.overlay").hover(function(){
        $(this).css({
            "opacity":"1",
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

