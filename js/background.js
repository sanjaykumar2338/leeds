var manifestData = chrome.runtime.getManifest();
var authorizationObject = {
	client_id: manifestData.oauth2.client_id,// '1018444700498-8v2eo61dh0s8nbf6e77sm6ha9dc76s8t.apps.googleusercontent.com',
	immediate: true,
	scope: manifestData.oauth2.scopes.join(', ')//'https://www.googleapis.com/auth/spreadsheets.readonly'
}
BROWSER.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    switch(request.cmd){
		case "getAuthorize":getAuthorize(sendResponse);break;
		case "doAuthorize":doAuthorize(sendResponse);break;
		case "findCoach": findCoach(request.email,sendResponse);break;
    }
    return true;
});
function findCoach(email,imFinish){
	gapi.auth.authorize(
		authorizationObject,
		function(key){
			gapi.client.load('sheets', 'v4', function(){
				var appendPre = console.log;
				
				var values = [
				  [
					'dddddd'
				  ],
				  // Additional rows ...
				];
				var body = {
				  values: values
				};
				
				gapi.client.sheets.spreadsheets.values.append({
				   spreadsheetId: manifestData.oauth2.spreadsheetId,
				   range: 'A1:F',
				   resource: body
				}).then((response) => {
					console.log(response,'response');
				});
				
				
				gapi.client.sheets.spreadsheets.values.get({
					spreadsheetId: manifestData.oauth2.spreadsheetId,
					range: 'A1:C',
					key: manifestData.oauth2.key,
				}).then(function(response) {
					var range = response.result;
					
					console.log(range,'range');	
					
					if (range.values.length > 0) {
						let find = false;
						for (i = 0; i < range.values.length; i++) {
							var row = range.values[i];
							appendPre(row[0] + ', ' + row[1],',',row[2]);
							if(row[1]==email){
								imFinish(row[2]);
								find = true;				
								break;
							}
						}
						if(!find){
							imFinish(false);
						}
					} else {
						appendPre('No data found.');
						imFinish(false);
					}
				}, function(response) {
					console.log(response,'response');
					
					appendPre('Error: ' + response.result.error.message);
					imFinish(false);
				});
			});
			
		}
	)
}
BROWSER.identity.onSignInChanged.addListener(function (account, signedIn) {
	common.setLocal({'isSingedIn':signedIn});
});
function doAuthorize(sendResponse){
	chrome.identity.getAuthToken(
		{'interactive': true},
		function(token){
			console.log('this is the token: ', token);
			gapi.auth.authorize(
				authorizationObject,
				function(key){
					//gapi.client.load('sheets', 'v4', gmailAPILoaded);
				}
			);
		}
	);
}
function getAuthorize(sendResponse){
	chrome.identity.getAuthToken({'interactive': true}, function(token) {
		console.log('user token: ' + token);
		let isSingedIn = false;
		if(token){
			isSingedIn = true;
		}
		common.setLocal({'isSingedIn':isSingedIn});
		sendResponse(isSingedIn);
	});
}
loadScript('https://apis.google.com/js/client.js');


function loadScript(url){
  var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState !== 4) {
			return;
		}
		if(request.status !== 200){
			return;
		}
		eval(request.responseText);
	};
	request.open('GET', url);
	request.send();
}


