// // chrome.runtime.onMessage.addListener(function (msg, sender) {
// //   // First, validate the message's structure
// //   if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
// //     // Enable the page-action for the requesting tab
// //     chrome.pageAction.show(sender.tab.id);
// //   }
// // });

// /*******Open New tab **********/
//  // chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
//  // 	chrome.tabs.create({url: message["URL"]}, function(tab){
//  //       chrome.windows.create(tab.windowId, {focused: true});
//  // });
//  // })


// // chrome.tabs.create({url:someUrl}, function(tab){
// //   if(!tab) {
// //     // Probably, there was no active window
// //     chrome.windows.create({url:someUrl, focused:true});
// //   } else {
// //     chrome.windows.update(tab.windowId, {focused: true});
// //   }
// // });

// // chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
// //          chrome.tabs.create({ url:  message["url"]}); 
// //          chrome.tabs.remove(sender.tab.id);
// //          sendResponse("bar");
// // });

var tokenS;
chrome.runtime.onInstalled.addListener(function() {

    chrome.identity.getAuthToken({
        interactive: false
    }, function(token) { 
        tokenS = token
        console.log(token)
    });
});
function writeData(request, sender){
    myspreadsheetId = "myspreadsheetId " 
    var params = {
        "range":"Sheet1!A1:A",
        "majorDimension": "ROWS",
        "values": [
            [request.name]
        ],
    }
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://sheets.googleapis.com/v4/spreadsheets/' + myspreadsheetId + '/values/Sheet1!A1:A1?valueInputOption=USER_ENTERED');
    console.log(tokenS)
    xhr.setRequestHeader('Authorization', 'Bearer '+tokenS);
    xhr.send(JSON.stringify(params));
};
chrome.runtime.onMessage.addListener(writeData)