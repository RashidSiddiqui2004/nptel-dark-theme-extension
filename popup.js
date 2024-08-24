
document.getElementById('darkModeToggle').addEventListener('change', (event) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleDarkMode' }, (response) => {
                const statusText = document.getElementById('statusText');
                if (event.target.checked) {
                    statusText.textContent = 'On';
                } else {
                    statusText.textContent = 'Off';
                }
            });
        }
    });
});
