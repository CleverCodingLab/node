setTimeout(function () {
    console.log('2 sec is passed');
},2000);


//set time interval
var time=0;
var timer = setInterval(function () {
    time += 2;
    console.log(time + ' sec is passed');
    if(time > 10){
        clearInterval(timer);
    }
},2000);


