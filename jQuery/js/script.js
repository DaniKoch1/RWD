$("#exampleButtonId").on("click", function() {
    var attributeContent = $("#imageId").attr("src");
    $(this).text(attributeContent);
});
$("#fontSizeChangeButtonId").click(function(){
    $("h2").css("font-size", "40px");
});
$("#textButtonId").click(function(){
    $(this).text("Unbelievable!!");
});
$("#imageId").click(function(){
    if($(this).attr("src").match("sad"))
        $(this).attr("src", "images/glad.jpg");
    else
        $(this).attr("src", "images/sad.jpg");
});
$("u").click(function(){
    if($(this).text()==="NOT")
        $(this).text("NEVER");
    else
        $(this).text("NOT");
});
$("li").click(function(){
    $("#spanFieldId").text($(this).attr("value"));
});
$("*").click(function(event){
    $("#xcoordId").text(event.pageX);
    $("#ycoordId").text(event.pageY);
});
var colors=["blue","red","yellow","green"];
$("#colorBox1Id").hover(function(){
    $(this).css("background-color", colors[Math.floor(Math.random()*4)]);
});
$("#textFieldId").keyup(function(){
   $("#colorBox1Id").css("background-color", colors[$("#textFieldId").val()]);
});
$("#textFieldId").focus(function(){
    $("#colorBox2Id").css("background-color", "green");
});
$("#textFieldId").blur(function(){
    $("#colorBox2Id").css("background-color", "black");
});
