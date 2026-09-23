document.getElementById('open-editor-btn')?.addEventListener('click', () => {
  chrome.tabs.create({ url: 'http://localhost:5173' });
});
