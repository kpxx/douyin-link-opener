const input = document.getElementById("input");
const result = document.getElementById("result");
const openBtn = document.getElementById("open");
const copyBtn = document.getElementById("copy");
const autoBox = document.getElementById("auto");

let currentUrl = null;

function update() {
  currentUrl = extractDouyinUrl(input.value);
  if (currentUrl) {
    result.textContent = currentUrl;
    result.className = "ok";
    openBtn.disabled = false;
  } else {
    result.textContent = input.value.trim() ? "未找到链接" : "等待输入…";
    result.className = input.value.trim() ? "err" : "";
    openBtn.disabled = true;
  }
  return currentUrl;
}

function openUrl() {
  if (!currentUrl) return;
  chrome.tabs.create({ url: currentUrl });
  window.close();
}

input.addEventListener("input", () => {
  if (update() && autoBox.checked) openUrl();
});
openBtn.addEventListener("click", openUrl);
copyBtn.addEventListener("click", async () => {
  if (!currentUrl) return;
  await navigator.clipboard.writeText(currentUrl);
  copyBtn.textContent = "已复制 ✓";
  setTimeout(() => (copyBtn.textContent = "复制链接"), 1200);
});
autoBox.addEventListener("change", () => {
  chrome.storage.local.set({ autoJump: autoBox.checked });
});

// 打开弹窗时：读取设置 + 自动读取剪贴板
(async () => {
  const { autoJump = false } = await chrome.storage.local.get("autoJump");
  autoBox.checked = autoJump;
  try {
    const text = await navigator.clipboard.readText();
    if (text) {
      input.value = text;
      if (update() && autoJump) openUrl();
    }
  } catch (e) {
    // 读取失败时让用户手动粘贴
  }
  input.focus();
})();
