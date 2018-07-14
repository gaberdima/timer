	$(function(){
		get_timer();
		
		function get_timer(){
			var date_new = "November 20,2018 17:00";
			var date_t = new Date(date_new);
			var date = new Date();
			var timer = date_t - date;

			if(date_t > date){
				//day
				var day = parseInt(timer/(24*60*60*1000));
				if(day<10){
					day = '0' + day;
				}
				day = day.toString();
				// alert(day);

				//hours
				var hour = parseInt(timer/(60*60*1000))%24;
				if(hour<10){
					hour = '0' + hour;
				}
				hour = hour.toString();
				// alert(hour);

				//minutes
				var min = parseInt(timer/(60*1000))%60;
				if(min<10){
					min = '0' + min;
				}
				min = min.toString();
				// alert(min);

				//seconds
				var sec = parseInt(timer/(1000))%60;
				if(sec<10){
					sec = '0' + sec;
				}
				sec = sec.toString();
				// alert(sec);
				$('#day0').html( day[0]);
				$('#day1').html( day[1]);

				$('#hour0').html( hour[0]);
				$('#hour1').html( hour[1]);

				$('#min0').html( min[0]);
				$('#min1').html( min[1]);

				$('#sec0').html( sec[0]);
				$('#sec1').html( sec[1]);

			}
			else{
				$('#clock').html('<span id="stop">Отсчет закончен!</span>');
			}	
				

		setTimeout(get_timer, 1000);
	}
});

	// $('.btn').click(function(){
	// 	myButtonClick($(this).html(), $(this).attr('id'), $(this).attr('class'));
	
	// });

	// function myButtonClick(x, y, z){
	// 	alert(x +' '+ y +' '+ z);
	// }
	
	
