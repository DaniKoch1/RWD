var document;
var listItemArray = document.getElementsByTagName("li");

listItemArray[0].innerHTML = listItemArray[0].innerHTML + " " + add_two_numbers(5, 7);
listItemArray[1].innerHTML += " "+multipy_three_numbers(2, 3, 4);
listItemArray[2].innerHTML += " "+area_of_a_circle(2);

var dances=["ballet", "hip-hop", "house", "break dance", "polonez"];
listItemArray[3].innerHTML += " "+mysterious_dance(dances);
listItemArray[4].innerHTML += " "+new Date().toDateString()+"; The number of days: "+today();
listItemArray[5].innerHTML += " "+odd_or_even(today());
increment_with_interval(1000,1,"counter1Id");
increment_with_interval(2000,2,"counter2Id");


//Write your function declarations below this line
function add_two_numbers(n1, n2) {
    return n1 + n2;
}
function multipy_three_numbers(n1,n2,n3){
    return n1*n2*n3;
}
function area_of_a_circle(radious){
    return Math.round(Math.PI*Math.pow(radious, 2)*100)/100;
}
function mysterious_dance(arr){
    var num=Math.floor(Math.random()*5);
    return arr[num];
}
function today(){
    var date=new Date(2015,0,1);
    return Math.floor((new Date()-date)/(1000*60*60*24));
}
function odd_or_even(num){
    if(num%2===0)
        return "even";
    else
        return "odd";
}
function increment_with_interval(time, value, id){
    var myCounter=0;
    var myInterval= setInterval(function(){
        var print=document.getElementById(id);
        if(myCounter<10)
            {
                myCounter+=value;
                print.innerHTML="Counter "+value+": "+myCounter;
            }
        else
            clearInterval(myInterval);
    }, time);
}
