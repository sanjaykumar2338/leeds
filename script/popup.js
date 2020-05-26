var _apiUrl = "https://www.facebook.com/";
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.task === "start_error") {
		swal({
			title: "",
			text: "This extension will work on groups  page only",
			type: "error",
			customClass: "swal-small"
		})
	}
	if (request.task === "start_error1") {
		swal({
			title: "",
			text: "Extension already running. Please stop and start extension again.",
			type: "error",
			customClass: "swal-small"
		})
	}
});




document.querySelector(".start-button").addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "start"});
    });
});

document.querySelector(".scrap-button").addEventListener("click", function () {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "scrap"});
    });
});

document.querySelector(".end-button").addEventListener("click", function () {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "end"});
    });
});