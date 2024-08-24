
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        const urlPattern = /https:\/\/onlinecourses\.nptel\.ac\.in\/.*\/unit\?unit=.*&assessment=.*/;

        if (urlPattern.test(tab.url)) {
            chrome.storage.sync.get('darkThemeEnabled', data => {
                if (data.darkThemeEnabled) {
                    chrome?.scripting?.executeScript({
                        target: { tabId: tabId },
                        files: ['content.js']
                    });
                }
            });
        }
    }
});
