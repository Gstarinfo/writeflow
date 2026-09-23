// Background Service Worker for Manifest V3
chrome.runtime.onInstalled.addListener(() => {
  console.log('[WriteFlow] Extension installed successfully.');

  // Create context menu for quick WordNet synonym lookup
  chrome.contextMenus.create({
    id: 'writeflow-synonyms',
    title: 'Find synonyms for "%s"',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'writeflow-synonyms' && tab?.id && info.selectionText) {
    chrome.tabs.sendMessage(tab.id, {
      type: 'WRITEFLOW_OPEN_SYNONYMS',
      selectedText: info.selectionText
    });
  }
});
