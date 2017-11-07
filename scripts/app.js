$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/ericjameswilson/int3p2json/master/data3.json',
    dataType: 'json',
    success: function(data) {
      $.each(data, function(i, house) {
        $("#container").append('<div data-addressnumber="' + house.addressnumber + '" data-timer="' + house.timer + '" data-datedemolished="' + house.datedemolished + '"class ="house' + '"id ="' + house.addressnumber + '">' + house.addressnumber + '</div>');
      });
    },
    complete: function() {
      var houseAddress = [];
      $('.house').each(function() {
        var id = $(this).attr('id');
        houseAddress.push(id);
      });
      //     console.log(houseAddress);
      $('.house').each(function(i, house) {
        $(this).delay(5 * i).fadeIn(5);
      });
      var counter = 1300;
      var demolitionCountdown = setInterval(function(i) {
         
         $('.house').each(function() {
       var boxTimer = $(this).attr('data-timer');
         if (boxTimer == counter) {
              $(this).fadeOut(3000);

            } else if (counter < 1) {
              clearInterval(demolitionCountdown);
              //  location.reload();
            }
            boxTimer--;
            // $(this).attr('data-timer', boxTimer);
            $('.countdown').html('Brightmoor, Detroit: ' + 'Day ' + counter);
          })
          // console.log(counter);
        counter--;
      
            if (annyang) {
              // Let's define our first command. First the text we expect, and then the function it should call
              var commands = {
                '14622': function() {
                 	$('#14622').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15877': function() {
                 	$('#15877').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14882': function() {
                 	$('#14882').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15045': function() {
                 	$('#15045').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14615': function() {
                 	$('#14615').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14884': function() {
                 	$('#14884').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14864': function() {
                 	$('#14864').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14834': function() {
                 	$('#14834').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15370': function() {
                 	$('#15370').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14858': function() {
                 	$('#14858').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14823': function() {
                 	$('#14823').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14910': function() {
                 	$('#14910').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14656': function() {
                 	$('#14656').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14648': function() {
                 	$('#14648').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14640': function() {
                 	$('#14640').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14608': function() {
                 	$('#14608').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14574': function() {
                 	$('#14574').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15915': function() {
                 	$('#15915').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15721': function() {
                 	$('#15721').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14344': function() {
                 	$('#14344').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15351': function() {
                 	$('#15351').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14895': function() {
                 	$('#14895').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14888': function() {
                 	$('#14888').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15095': function() {
                 	$('#15095').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15064': function() {
                 	$('#15064').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15011': function() {
                 	$('#15011').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15011': function() {
                 	$('#15011').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15050': function() {
                 	$('#15050').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15038': function() {
                 	$('#15038').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15713': function() {
                 	$('#15713').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15031': function() {
                 	$('#15031').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15503': function() {
                 	$('#15503').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14589': function() {
                 	$('#14589').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14580': function() {
                 	$('#14580').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14554': function() {
                 	$('#14554').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14839': function() {
                 	$('#14839').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14628': function() {
                 	$('#14628').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14614': function() {
                 	$('#14614').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14863': function() {
                 	$('#14863').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14607': function() {
                 	$('#14607').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14581': function() {
                 	$('#14581').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14818': function() {
                 	$('#14818').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14810': function() {
                 	$('#14810').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14620': function() {
                 	$('#14620').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14629': function() {
                 	$('#14629').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14635': function() {
                 	$('#14635').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14641': function() {
                 	$('#14641').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14627': function() {
                 	$('#14627').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14541': function() {
                 	$('#14541').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14851': function() {
                 	$('#14851').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '13577': function() {
                 	$('#13577').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '13503': function() {
                 	$('#13503').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15915': function() {
                 	$('#15915').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15914': function() {
                 	$('#15914').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15908': function() {
                 	$('#15908').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '13511': function() {
                 	$('#13511').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15220': function() {
                 	$('#15220').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14889': function() {
                 	$('#14889').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14916': function() {
                 	$('#14916').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15089': function() {
                 	$('#15089').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15065': function() {
                 	$('#15065').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15156': function() {
                 	$('#15156').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15106': function() {
                 	$('#15106').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15100': function() {
                 	$('#15100').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15801': function() {
                 	$('#15801').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14931': function() {
                 	$('#14931').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15151': function() {
                 	$('#15151').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15045': function() {
                 	$('#15045').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15039': function() {
                 	$('#15039').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14924': function() {
                 	$('#14924').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14917': function() {
                 	$('#14917').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14861': function() {
                 	$('#14861').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14855': function() {
                 	$('#14855').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14868': function() {
                 	$('#14868').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14802': function() {
                 	$('#14802').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14875': function() {
                 	$('#14875').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14918': function() {
                 	$('#14918').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14902': function() {
                 	$('#14902').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14379': function() {
                 	$('#14379').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14325': function() {
                 	$('#14325').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14145': function() {
                 	$('#14145').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14051': function() {
                 	$('#14051').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14428': function() {
                 	$('#14428').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14420': function() {
                 	$('#14420').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14364': function() {
                 	$('#14364').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14358': function() {
                 	$('#14358').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '13949': function() {
                 	$('#13949').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14032': function() {
                 	$('#14032').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14336': function() {
                 	$('#14336').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15497': function() {
                 	$('#15497').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15052': function() {
                 	$('#15052').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15109': function() {
                 	$('#15109').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14363': function() {
                 	$('#14363').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15701': function() {
                 	$('#15701').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14619': function() {
                 	$('#14619').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15100': function() {
                 	$('#15100').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14406': function() {
                 	$('#14406').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15844': function() {
                 	$('#15844').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14535': function() {
                 	$('#14535').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15122': function() {
                 	$('#15122').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14856': function() {
                 	$('#14856').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14101': function() {
                 	$('#14101').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15520': function() {
                 	$('#15520').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14560': function() {
                 	$('#14560').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14527': function() {
                 	$('#14527').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14358': function() {
                 	$('#14358').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14591': function() {
                 	$('#14591').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14592': function() {
                 	$('#14592').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14131': function() {
                 	$('#14131').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14610': function() {
                 	$('#14610').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14801': function() {
                 	$('#14801').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14377': function() {
                 	$('#14377').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14000': function() {
                 	$('#14000').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14190': function() {
                 	$('#14190').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14253': function() {
                 	$('#14253').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14197': function() {
                 	$('#14197').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14137': function() {
                 	$('#14137').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14049': function() {
                 	$('#14049').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14029': function() {
                 	$('#14029').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14364': function() {
                 	$('#14364').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14156': function() {
                 	$('#14156').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14110': function() {
                 	$('#14110').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15073': function() {
                 	$('#15073').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14150': function() {
                 	$('#14150').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15103': function() {
                 	$('#15103').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14931': function() {
                 	$('#14931').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14007': function() {
                 	$('#14007').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14586': function() {
                 	$('#14586').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14542': function() {
                 	$('#14542').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '13994': function() {
                 	$('#13994').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '13987': function() {
                 	$('#13987').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15836': function() {
                 	$('#15836').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14330': function() {
                 	$('#14330').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14252': function() {
                 	$('#14252').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14205': function() {
                 	$('#14205').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14140': function() {
                 	$('#14140').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14118': function() {
                 	$('#14118').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '13986': function() {
                 	$('#13986').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15150': function() {
                 	$('#15150').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14165': function() {
                 	$('#14165').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '22465': function() {
                 	$('#22465').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '22459': function() {
                 	$('#22459').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '21321': function() {
                 	$('#21321').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '21540': function() {
                 	$('#21540').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15445': function() {
                 	$('#15445').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15498': function() {
                 	$('#15498').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15757': function() {
                 	$('#15757').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15174': function() {
                 	$('#15174').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15830': function() {
                 	$('#15830').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15484': function() {
                 	$('#15484').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15720': function() {
                 	$('#15720').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15720': function() {
                 	$('#15720').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15484': function() {
                 	$('#15484').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14897': function() {
                 	$('#14897').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14580': function() {
                 	$('#14580').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15765': function() {
                 	$('#15765').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15351': function() {
                 	$('#15351').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15861': function() {
                 	$('#15861').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15410': function() {
                 	$('#15410').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15778': function() {
                 	$('#15778').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '21630': function() {
                 	$('#21630').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '21674': function() {
                 	$('#21674').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15915': function() {
                 	$('#15915').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15471': function() {
                 	$('#15471').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15710': function() {
                 	$('#15710').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15708': function() {
                 	$('#15708').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15700': function() {
                 	$('#15700').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15455': function() {
                 	$('#15455').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15437': function() {
                 	$('#15437').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15364': function() {
                 	$('#15364').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15011': function() {
                 	$('#15011').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15070': function() {
                 	$('#15070').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15416': function() {
                 	$('#15416').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '12918': function() {
                 	$('#12918').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15450': function() {
                 	$('#15450').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15019': function() {
                 	$('#15019').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15361': function() {
                 	$('#15361').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15041': function() {
                 	$('#15041').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15111': function() {
                 	$('#15111').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15707': function() {
                 	$('#15707').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14800': function() {
                 	$('#14800').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14590': function() {
                 	$('#14590').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14880': function() {
                 	$('#14880').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14864': function() {
                 	$('#14864').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14858': function() {
                 	$('#14858').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14565': function() {
                 	$('#14565').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15114': function() {
                 	$('#15114').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15092': function() {
                 	$('#15092').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15022': function() {
                 	$('#15022').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15137': function() {
                 	$('#15137').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '14585': function() {
                 	$('#14585').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '21600': function() {
                 	$('#21600').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '21450': function() {
                 	$('#21450').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '21618': function() {
                 	$('#21618').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '21442': function() {
                 	$('#21442').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '21256': function() {
                 	$('#21256').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '22303': function() {
                 	$('#22303').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '22113': function() {
                 	$('#22113').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '22100': function() {
                 	$('#22100').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '21603': function() {
                 	$('#21603').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '22112': function() {
                 	$('#22112').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '22128': function() {
                 	$('#22128').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '22313': function() {
                 	$('#22313').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '22136': function() {
                 	$('#22136').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '22133': function() {
                 	$('#22133').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15346': function() {
                 	$('#15346').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15355': function() {
                 	$('#15355').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15360': function() {
                 	$('#15360').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15103': function() {
                 	$('#15103').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14184': function() {
                 	$('#14184').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14895': function() {
                 	$('#14895').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14239': function() {
                 	$('#14239').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14647': function() {
                 	$('#14647').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14562': function() {
                 	$('#14562').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14370': function() {
                 	$('#14370').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14654': function() {
                 	$('#14654').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14569': function() {
                 	$('#14569').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15000': function() {
                 	$('#15000').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15130': function() {
                 	$('#15130').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15094': function() {
                 	$('#15094').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15086': function() {
                 	$('#15086').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '13947': function() {
                 	$('#13947').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14880': function() {
                 	$('#14880').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14591': function() {
                 	$('#14591').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14576': function() {
                 	$('#14576').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15757': function() {
                 	$('#15757').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15095': function() {
                 	$('#15095').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14337': function() {
                 	$('#14337').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15100': function() {
                 	$('#15100').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14582': function() {
                 	$('#14582').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14014': function() {
                 	$('#14014').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14356': function() {
                 	$('#14356').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14001': function() {
                 	$('#14001').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14526': function() {
                 	$('#14526').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14917': function() {
                 	$('#14917').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14245': function() {
                 	$('#14245').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '23330': function() {
                 	$('#23330').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15121': function() {
                 	$('#15121').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14657': function() {
                 	$('#14657').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14615': function() {
                 	$('#14615').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14609': function() {
                 	$('#14609').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14581': function() {
                 	$('#14581').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14561': function() {
                 	$('#14561').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14876': function() {
                 	$('#14876').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14644': function() {
                 	$('#14644').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '13506': function() {
                 	$('#13506').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '13564': function() {
                 	$('#13564').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '13556': function() {
                 	$('#13556').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15728': function() {
                 	$('#15728').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15451': function() {
                 	$('#15451').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15439': function() {
                 	$('#15439').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '21581': function() {
                 	$('#21581').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '21501': function() {
                 	$('#21501').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11685': function() {
                 	$('#11685').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11473': function() {
                 	$('#11473').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11689': function() {
                 	$('#11689').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11185': function() {
                 	$('#11185').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11721': function() {
                 	$('#11721').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11831': function() {
                 	$('#11831').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11664': function() {
                 	$('#11664').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11572': function() {
                 	$('#11572').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11580': function() {
                 	$('#11580').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11708': function() {
                 	$('#11708').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11248': function() {
                 	$('#11248').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11232': function() {
                 	$('#11232').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11156': function() {
                 	$('#11156').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11930': function() {
                 	$('#11930').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '12128': function() {
                 	$('#12128').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11466': function() {
                 	$('#11466').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11182': function() {
                 	$('#11182').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11162': function() {
                 	$('#11162').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11504': function() {
                 	$('#11504').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '12350': function() {
                 	$('#12350').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '12194': function() {
                 	$('#12194').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '12340': function() {
                 	$('#12340').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '12339': function() {
                 	$('#12339').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11770': function() {
                 	$('#11770').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11778': function() {
                 	$('#11778').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '11692': function() {
                 	$('#11692').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '22486': function() {
                 	$('#22486').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15930': function() {
                 	$('#15930').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15144': function() {
                 	$('#15144').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15761': function() {
                 	$('#15761').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15703': function() {
                 	$('#15703').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15736': function() {
                 	$('#15736').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15347': function() {
                 	$('#15347').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15436': function() {
                 	$('#15436').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14587': function() {
                 	$('#14587').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14629': function() {
                 	$('#14629').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14526': function() {
                 	$('#14526').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '13950': function() {
                 	$('#13950').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15349': function() {
                 	$('#15349').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14130': function() {
                 	$('#14130').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15400': function() {
                 	$('#15400').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '14301': function() {
                 	$('#14301').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '13500': function() {
                 	$('#13500').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15914': function() {
                 	$('#15914').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '13563': function() {
                 	$('#13563').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                  '15734': function() {
                 	$('#15734').fadeIn(1000);
                    counter++
                    console.log("Success!");
                },
                 '15333': function() {
                 	$('#15333').fadeIn(1000);
                    counter++
                    console.log("Success!");
                }
              };

              // Add our commands to annyang
              annyang.addCommands(commands);

              // Start listening. You can call this here, or attach this call to an event, button, etc.
              annyang.start();
            }
          

      }, 1000);
    },



  });
});
