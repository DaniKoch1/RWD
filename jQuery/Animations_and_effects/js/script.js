// Call to function
$("#orangeBoxId").animate({left: "+=200"},"slow",function() {squareMovement(this)});
$("#stopButtonId").click(function(){$("#orangeBoxId").stop(true);});
$("#startButtonId").click(function(){squareMovement("#orangeBoxId");});
$("#greenBoxId").mouseenter(function(){ moveRandom(this)});
$("div").click(function(){$(this).stop(true).fadeOut();});
$("#showButtonId").click(function(){ appear()});
$(window).keydown(function(e){moveWithArrows(e)});

// Declaration of function
function squareMovement(IdRef) {
    $(IdRef).delay(1000).animate({top: "+=100"}).delay(1000).animate({left: "+=100"}).delay(1000).animate({top: "-=100"}).delay(1000).animate({left: "-=100"}, function(){squareMovement(IdRef);});
}
function moveRandom(IdRef){
    var x=Math.floor(Math.random()* ($(window).width()-$(IdRef).width()));
    var y=Math.floor(Math.random()* ($(window).height()-$(IdRef).height()));
    $(IdRef).offset({top: y, left: x});
}
function appear()
{
    $("div").each(function(){
        $(this).slideDown();
    });
}
function moveWithArrows(e){
    switch(e.key){
        case 'ArrowUp':
            $("#blueBoxId").animate({top: '-=100'});
            break;
        case 'ArrowDown':
            $("#blueBoxId").animate({top: '+=100'});
            break;
        case 'ArrowLeft':
            $("#blueBoxId").animate({left: '-=100'});
            break;
        case 'ArrowRight':
            $("#blueBoxId").animate({left: '+=100'});
            break; 
    }
}