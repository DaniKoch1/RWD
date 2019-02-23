var document;
var exampleLine = document.getElementById("exampleLineId");
exampleLine.innerHTML = "This is just an <u>example line</u> of how innerHTML works.";
var spanLine = document.getElementById("firstFieldId");
spanLine.innerHTML = 15;
var firstLine = document.getElementById("firstLineId");
firstLine.innerHTML += 18;
var animals = ["Cat", "Dog", "Parrot"];
var secondLine = document.getElementById("secondLineId");
secondLine.innerHTML = animals;
var fruits = document.getElementsByClassName("fruitClass");
fruits[0].innerHTML = "apple";
fruits[1].innerHTML = "banana";
var thirdLine = document.getElementById("thirdLineId");
thirdLine.innerHTML="<u>"+thirdLine.innerHTML+"</u>";
var readyList=document.getElementById("fourthLineId");
var list="<li>" + animals[0] + "</li>";
for(var i=1;i<3;i++)
    {
        list+="<li>" + animals[i] + "</li>";
    }
readyList.innerHTML="<ul>"+list+"</ul>";