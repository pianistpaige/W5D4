$('.navItem').each(function(){
    var elem = $(this);
    elem.css("color", "white");
})

$('#nav').css("background-color", "#145");

let evenList = $("li:even")
$(evenList).css("background-color", "#ccc");

let oddList = $("li:odd")
$(oddList).css("background-color", "#aaa");

let nameChange = $('#myInput').parent()[0];
let inputName = $(nameChange).children()[4];
$(inputName).text("Paige");
