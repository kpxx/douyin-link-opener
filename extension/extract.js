// 从抖音分享文本中提取链接
function extractDouyinUrl(text) {
  if (!text) return null;
  const patterns = [
    // 短链：https://v.douyin.com/z9R_tp99QxI/
    /https?:\/\/v\.douyin\.com\/[A-Za-z0-9_\-]+\/?/i,
    // 其他抖音域名：www.douyin.com / iesdouyin.com 等
    /https?:\/\/(?:[\w-]+\.)*(?:douyin|iesdouyin)\.com\/[^\s　-〿＀-￯"'<>]*/i,
    // 兜底：任意 http(s) 链接
    /https?:\/\/[^\s　-〿＀-￯"'<>]+/i
  ];
  for (const re of patterns) {
    const m = text.match(re);
    if (m) return m[0];
  }
  return null;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { extractDouyinUrl };
}
