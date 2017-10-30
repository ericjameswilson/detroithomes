$(document).ready(function() { 
 $.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/ericjameswilson/int3p2json/master/data3.json',
    dataType: 'json',
    success: function(data) {
	    
      $.each(data, function(i, house) {
        if (house.columncount == 1) {
          $('#col-1').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +  house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 2) {
          $('#col-2').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +   house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 3) {
          $('#col-3').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +   house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 4) {
          $('#col-4').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +   house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 5) {
          $('#col-5').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +   house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 6) {
          $('#col-6').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +  house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 7) {
          $('#col-7').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">'  +  house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 8) {
          $('#col-8').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +   house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 9) {
          $('#col-9').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +   house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 10) {
          $('#col-10').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +   house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 11) {
          $('#col-11').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +  house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 12) {
          $('#col-12').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +  house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 13) {
          $('#col-13').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +   house.taxpayer + ' ' +house.addressfull + '</div>')
        } else if (house.columncount == 14) {
          $('#col-14').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' +   house.taxpayer + ' ' + house.addressfull + '</div>')
        } else if (house.columncount == 15) {
          $('#col-15').prepend('<div data-timer="' + house.timer + '" data-columncount="' + house.columncount + '" class="house fade' + '">' + house.taxpayer + ' ' + house.addressfull + '</div>')

        }
      });
    },
    complete: function() {
			
			
			  
	       $('.house').each(function(i, house) {
        $(this).delay(5 * i).fadeIn(5);


        //var house = this;
        //var $house = $(house);

        //KP 
        //$(this) = individial .house element from the .each function
        var timer = $(this).attr('data-timer');
        var counter = 1300;
        var demolitionCountdown = setInterval(function(i) {

          $('.house').each(function() {
            var boxTimer = $(this).attr('data-timer');
            if (boxTimer == counter) {
              $(this).fadeOut(1000);
            } else if (counter < 1) {
              clearInterval(demolitionCountdown);
            }
            //      boxTimer--;
            //		$(this).attr('data-timer', boxTimer);
          })
          counter--;
           //console.log(counter);
        }, 1000);
        
        $('#button').click(function(){
        	counter++;
        });
      });	
      $('body').jGravity({
            target: 'everything',
           ignoreClass: 'ignoreMe',
           weight:1,
           depth: 5,
           drag: false
         });
       				
    },
  });
});
