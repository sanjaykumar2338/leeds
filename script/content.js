let date = new Date;
localStorage.removeItem('link_next');  
var _apiUrl = "https:www.facebook.com/";  //link on which extension work 
var timeOut;
chrome.runtime.onMessage.addListener(   
function(request, sender, sendResponse)      
  {  
	$('.uiScrollableAreaGripper').css('top', "1000px");
	$(".uiScrollableArea ").animate({ scrollTop: 1000 }, 2000);
	$("._19hf").bind('scroll');
	$("._19hf").mouseover();
	
	var jsonData = 'batch_name=MessengerGraphQLThreadlistFetcher&__user=100002737065358&__a=1&__dyn=7AzkXghFo-4Q9UoGyaeFxqewKKEKEW76-C11xGdwIhE98nwgUaqwSBxebHyodEbbxW4EeU4eczobrzoeopDxicG4K1Zxa2m4oqwi88-7Q3GE2SwaS4pEtxy5Urwr8lx-bx-2K1KxO4Wx2fwoEKi8xa4oC2bwExLwEx2cGEC9xC2bCweqbG6WKuV8y1kyEiwTwwz89ory84urwzgK7o88vw&__req=11&__be=1&__pc=PHASED%3Aufi_home_page_pkg&dpr=1&__rev=4655353&fb_dtsg=AQH8S7IL9h63%3AAQEAP_5e6Q_S&jazoest=21807&__spin_r=4655353&__spin_b=trunk&__spin_t=1545505095&queries=%7B%22o0%22%3A%7B%22doc_id%22%3A%221893187534113576%22%2C%22query_params%22%3A%7B%22limit%22%3A12%2C%22before%22%3A1544503979567%2C%22tags%22%3A[%22INBOX%22]%2C%22isWorkUser%22%3Afalse%2C%22includeDeliveryReceipts%22%3Atrue%2C%22includeSeqID%22%3Afalse%7D%7D%7D';
	
	var serviceUrl = 'https://www.facebook.com/api/graphqlbatch/';
	
	$.ajax({
    url: serviceUrl,
	headers :{
        ":authority":"www.facebook.com",
		":method:": "POST",
		":path":"/api/graphqlbatch/",
		":scheme:":"https",
		"accept:":"*/*",
		"accept-encoding":"gzip, deflate, br",
		"accept-language":"en-IN,en;q=0.9,en-GB;q=0.8,en-US;q=0.7,de;q=0.6",
		"content-length":"733",
		"content-type": "application/x-www-form-urlencoded, application/x-www-form-urlencoded",
		"cookie": "sb=Z5LAWidW9IUmFdfCjmZC-Nzv; datr=Z5LAWu_Qp5JT-jC7ZXx3SHdM; c_user=100002737065358; xs=7%3ADQHAIHIwlGivAQ%3A2%3A1541003433%3A9907%3A5026; pl=n; spin=r.4655353_b.trunk_t.1545505095_s.1_v.2_; dpr=0.8999999761581421; fr=04hYS8IS1Uibcretx.AWW_oGcRj1tM3yzeUNH7YAeeyVg.BbwvU0.U6.FwX.0.0.BcH16J.AWXOVDLC; wd=1517x335; presence=EDvF3EtimeF1545560313EuserFA21B02737065358A2EstateFDutF1545560313569CEchFDp_5f1B02737065358F4CC",
		"origin": "https://www.facebook.com",
		"referer":"https://www.facebook.com/messages/t/jennah.danielle.5",
		"user-agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
		"x-msgr-region": "ATN"
    },
    type: "POST",
    dataType: "json",
    data: jsonData,
    contentType: "application/json",
	 success: function(result){
		console.log(result,'here i am') 
	 }	 
	  	 
	}); 
  
  	$('._1ht1').each(function(){
		$(".uiScrollableAreaGripper").css('top',"200.4118px");
	    var msg = $(this).find('._1htf').text();		
		var str1 = msg;
		var str2 = "Facebook";
		
	    if(str1.indexOf(str2)  === -1){
		  console.log($(this).find('._5l-3').attr('id'));		
		  console.log($(this).find('img').attr('src'));
		  console.log($(this).find('._1qt3').attr('data-tooltip-content'));
	    }	
		 	
	});
/**** Pagination  ********/  
    if(request.action == 'start'){             
      	timeOut = setInterval(function(){	
      		myTimer();				
		},5000);

		function myTimer() {
	
	  		var count_n = 1;
	     $('#groupsMemberSection_self_bio').find('.uiList').each(function(){

			 	$(this).find('._6a').each(function(){	
	          	  	 $(this).find('div._6a:last').each(function(){	
	          	  	 	var href = $(this).find('a').attr('href');
	          	  	 	console.log('===',count_n,'***');

	          	  	 		jQuery('body .row_count').html(count_n);
	          	  	 		count_n++;
			  		})	
			  	    })
	          	  });	

	     /*2*/
	     $('#groupsMemberSection_admins_moderators').find('.uiList').each(function(){  
		 	$(this).find('._6a').each(function(){	
          	  	 $(this).find('div._6a:last').each(function(){	
          	  	 	var href = $(this).find('a').attr('href');
	          	  	 	console.log('===',count_n,'***');
	          	  	 		jQuery('body .row_count').html(count_n);
	          	  	 		count_n++;
		  		
		  		})	
		  	    })
          	  });
	     /*3*/
	     $('#groupsMemberSection_things_in_common').find('.uiList').each(function(){   
		 	 $(this).find('._6a').each(function(){	
          	  	 $(this).find('div._6a:last').each(function(){	 
          	  	 	var href = $(this).find('a').attr('href');
	          	  	 	console.log('===',count_n,'***');
	          	  	 		
	          	  	 		jQuery('body .row_count').html(count_n);
	          	  	 		count_n++; 
          	  	 })	
		  	    })
          	  });	         

/*4*/
    $('#groupsMemberSection_recently_joined').find('.uiList').each(function(i,v){  
          	  $(this).find('._6a').each(function(){	
          	  	 $(this).find('div._6a:last').each(function(){	
          	  	 	var href = $(this).find('a').attr('href');
	          	  	 	console.log('===',count_n,'***');
          	  	 	
	          	  	 		jQuery('body .row_count').html(count_n);
	          	  	 		count_n++;
          	  	 })	
		  	    })
          	  });
		    $(document).scrollTop($(document).height());
		} 
    }
    
/*************** Data Scrap Section *************/

   else if(request.action == 'scrap')           
   {

   

   	var main = [];
  	var count_n = 1;
     $('#groupsMemberSection_self_bio').find('.uiList').each(function(){

		 	$(this).find('._6a').each(function(){	
          	  	 $(this).find('div._6a:last').each(function(){	
          	  	 	var href = $(this).find('a').attr('href');
          	  	 	if(href != undefined){	

          	  	 		jQuery('.row_count').html(count_n);
          	  	 		count_n++;
      	  	 			var obj = {};
		          	  	 var profile_url = $(this).find('a').attr('href');
		          	 	 var name = $(this).find('a').text();
		  				 var company_name_position = $(this).find('._60rj').next().text();
		  				 
		  				 obj['url'] = profile_url;
		  				 obj['name'] = name;
		  				 obj['company_name'] = company_name_position;
                     }	   		  
		  			if(obj != undefined){		
		  			main.push(obj)
		  		}
		  		})	
		  	    })
          	  });	

/*************Admin Section**********/
    $('#groupsMemberSection_admins_moderators').find('.uiList').each(function(){  
		 	$(this).find('._6a').each(function(){	
          	  	 $(this).find('div._6a:last').each(function(){	
          	  	 	var href = $(this).find('a').attr('href');
          	  	 	if(href != undefined){	
      	  	 			var obj = {};
		          	  	 var profile_url = $(this).find('a').attr('href');
		          	 	 var name = $(this).find('a').text();
		  				 var company_name_position = $(this).find('._60rj').next().text();
		  				 
		  				 obj['url'] = profile_url;
		  				 obj['name'] = name;
		  				 obj['company_name'] = company_name_position;
                     }	   		  
		  			if(obj != undefined){		
		  			main.push(obj)
		  		}
		  		})	
		  	    })
          	  });	  
  

/*********** Member in things Common Section ***********/
    $('#groupsMemberSection_things_in_common').find('.uiList').each(function(){   
		 	 $(this).find('._6a').each(function(){	
          	  	 $(this).find('div._6a:last').each(function(){	 
          	  	 	var href = $(this).find('a').attr('href');
          	  	 	if(href != undefined){	
      	  	 			var obj = {};
		          	  	 var profile_url = $(this).find('a').attr('href');
		          	 	 var name = $(this).find('a').text();
		  				 var company_name_position = $(this).find('._60rj').next().text();
		  				 
		  				 obj['url'] = profile_url;
		  				 obj['name'] = name;
		  				 obj['company_name'] = company_name_position;
		  				 		  				 
		  				 
		  			}	   		  
		  			if(obj != undefined){		
		  			main.push(obj)
		  			}
          	  	 })	
		  	    })
          	  });	         

/********** Members Recently Joined Section **********/
    $('#groupsMemberSection_recently_joined').find('.uiList').each(function(i,v){  
          	  $(this).find('._6a').each(function(){	
          	  	 $(this).find('div._6a:last').each(function(){	
          	  	 	var href = $(this).find('a').attr('href');
          	  	 	if(href != undefined){	
      	  	 			var obj = {};
		          	  	 var profile_url = $(this).find('a').attr('href');
		          	 	 var name = $(this).find('a').text();
		  				 var company_name_position = $(this).find('._60rj').next().text();
		  				 
		  				 obj['url'] = profile_url;
		  				 obj['name'] = name;
		  				 obj['company_name'] = company_name_position;
		  				 		  				 
		  				 
		  			}
                   if(obj != undefined){		
		  			main.push(obj)
		  			}
          	  	 })	
		  	    })
          	  });
   


  /*************** SAVE ARRAY LINKS FOR SEE MORE SECTION ***************/        	  	          	 	           	 
     var myarr = [];
     var data = $('#groupsMemberSection_admins_moderators').find('.uiMorePagerPrimary').attr('href');
	  // var data1 = $('#groupsMemberSection_things_in_common').find('.uiMorePagerPrimary').attr('href');
	 var newURL = 'https:www.facebook.com'+data;		
	 var obj = [];	//window.open(newURL,'_blank');
	  obj['url'] = data;		
	  if(obj != undefined)
	  {
	  	myarr.push(obj);
	  }
	  console.log('myarr',myarr);
    //   var newURL1 = 'https:www.facebook.com'+data1;	
	 		// window.open(newURL1,'_blank');
    if(myarr.length >= 1)
    { 
    	chrome.runtime.sendMessage({action: "new",url: newURL}, function(res)
         {
         	$('#groupsMemberSection_admins_moderators').find('.uiList').each(function(){ 
	 	 	$(this).find('._6a').each(function(){	
           	  	 $(this).find('div._6a:last').each(function(){	
           	  	 	var href = $(this).find('a').attr('href');
           	  	 	if(href != undefined){	
       	  	 			var obj = {};
	 	          	  	 var profile_url = $(this).find('a').attr('href');
	 	          	 	 var name = $(this).find('a').text();
	 	  				 var company_name_position = $(this).find('._60rj').next().text();
		  				 
	 	  				 obj['url'] = profile_url;
	 	  				 obj['name'] = name;
	 	  				 obj['company_name'] = company_name_position;
                      }	   		  
	 	  			if(obj != undefined){		
	 	  			main.push(obj)
	 	  		}
                })	
	 	  	    })
           	  });
         })
     }			
     else
     {
     	alert('link not found')
     }     	
          
/**************** Download CSV Part ***************/ 
       downloadCSV('data.csv', main)
 
     function convertArrayOfObjectsToCSV(args) {  
	 	 var result, ctr, keys, columnDelimiter, lineDelimiter, data;

             data = args.data || null;
	 	        if (data == null || !data.length) {
	 	            return null;
	 	        }

	 	        columnDelimiter = args.columnDelimiter || ',';
	 	        lineDelimiter = args.lineDelimiter || '\n';

	 	        keys = Object.keys(data[0]);

	 	        result = '';
	 	        result += keys.join(columnDelimiter);
	 	        result += lineDelimiter;

	 	        data.forEach(function(item) {
	 	            ctr = 0;
	 	            keys.forEach(function(key) {
	 	                if (ctr > 0) result += columnDelimiter;

	 	                result += item[key];
	 	                ctr++;
	 	            });
	 	            result += lineDelimiter;
	 	        });

	 	        return result;
	 	    }

	  function downloadCSV(args, stockData) {  
         var data, filename, link;
         var csv = convertArrayOfObjectsToCSV({
             data: stockData
         });
         if (csv == null) return;

         filename = args.filename || 'export.csv';
         if (!csv.match(/^data:text\/csv/i)) {
             csv = 'data:text/csv;charset=utf-8,' + csv;
         }
         data = encodeURI(csv);

         link = document.createElement('a');
         link.setAttribute('href', data);
         link.setAttribute('download', filename);
         link.click();
     }
   }
   else if(request.action == 'end')
   {

  	 clearInterval(timeOut);   	
   }
   else
   {
   	alert('Wrong button placed')
   }

   
});

/********** End of Code  **************/


