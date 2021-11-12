$(".restart").hide();

$(".calculate").click(function(){
	let year = $(".Year").val();
	let name = $(".Name").val();
    let hour = $(".Hour").val();
    let time = ((2050-year)*365)*hour;
    
    $(".result").append("<br>" + "<p>" + "Starting from year " + year +", you would have approximately spent " + time + " hours in the sun" + "</p>");
    $(".result").append("<br>" + "<h3>" +"See you in 2050, " + name +"</h3>");
    $(".result").append("<p>" +"If you can live that long, that is." +"</p>");
    $(".restart").appendTo($(".result"));
    $(".start").hide();
    $(".result").show();
    $(".restart").show();
});

$(".restart").click(function(){
	location.reload();
});
