
$(document).ready(function () {
    $(".hidden").click(function (){
        $(".hidden").toggle();
        $(".descript-hide p").toggle();
        $(".caption").css({
            "font-weight": "bold",
            "transition": "1s",
            "cursor": "pointer"
        })
    });
    $(".descript-hide p").click(function (){
        $(".hidden").show();
        $(".descript-hide p").hide();
    });

    $(".hidden2").click(function (){
        $(".hidden2").toggle();
        $(".descript-hide2 p").toggle();
        $(".caption").css({
            "font-weight": "bold",
            "transition": "1s",
            "cursor": "pointer"
        })
    });
    

    $(".descript-hide2 p").click(function (){
        $(".hidden2").show();
        $(".descript-hide2 p").hide();
    });

    $(".hidden3").click(function (){
        $(".hidden3").toggle();
        $(".descript-hide3 p").toggle();
        $(".caption").css({
            "font-weight": "bold",
            "transition": "1s",
            "cursor": "pointer"
        })
    });

    $(".descript-hide3 p").click(function (){
        $(".hidden3").show();
        $(".descript-hide3 p").hide();
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



/***********************Message received JS function**** */


function returnValue()
{
    var name = document.getElementById("name").value;
  alert(name + ' message recieved! Thank you For contacting us!');
  return false;
}