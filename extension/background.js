importScripts("extract.js");

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-douyin",
    title: "提取抖音链接并打开",
    contexts: ["selection"]
  });
});

// 右键菜单：选中分享文本 → 打开
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== "open-douyin") return;
  const url = extractDouyinUrl(info.selectionText);
  if (url) {
    chrome.tabs.create({ url, index: tab ? tab.index + 1 : undefined });
  }
});

// 地址栏：输入 dy + 空格，粘贴整段分享文本，回车
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  const url = extractDouyinUrl(text);
  chrome.omnibox.setDefaultSuggestion({
    description: url ? `打开：${url}` : "未识别到链接，请粘贴抖音分享文本"
  });
});

chrome.omnibox.onInputEntered.addListener((text, disposition) => {
  const url = extractDouyinUrl(text);
  if (!url) return;
  if (disposition === "currentTab") {
    chrome.tabs.update({ url });
  } else {
    chrome.tabs.create({ url, active: disposition === "newForegroundTab" });
  }
});
