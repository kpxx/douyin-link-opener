const test = require("node:test");
const assert = require("node:assert/strict");
const { extractDouyinUrl } = require("../extension/extract.js");

test("从完整分享口令中提取短链", () => {
  const text =
    "9.94 Yzg:/ :0pm k@P.Kj 11/17 来新西兰骑山地车…… # 骑行  " +
    "https://v.douyin.com/z9R_tp99QxI/ 复制此链接，打开Dou音搜索，直接观看视频！";
  assert.equal(extractDouyinUrl(text), "https://v.douyin.com/z9R_tp99QxI/");
});

test("短链后面紧接中文也能正确截断", () => {
  assert.equal(
    extractDouyinUrl("看这个https://v.douyin.com/abc123/复制此链接"),
    "https://v.douyin.com/abc123/"
  );
});

test("支持 www.douyin.com 长链接", () => {
  assert.equal(
    extractDouyinUrl("链接：https://www.douyin.com/video/7300000000000000000 ，快看"),
    "https://www.douyin.com/video/7300000000000000000"
  );
});

test("没有链接时返回 null", () => {
  assert.equal(extractDouyinUrl("这里没有链接"), null);
  assert.equal(extractDouyinUrl(""), null);
  assert.equal(extractDouyinUrl(null), null);
});
