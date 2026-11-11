<p align="center">
  <img src="assets/icon-512.png" width="96" alt="icon">
</p>

<h1 align="center">抖音分享链接提取跳转</h1>

<p align="center">
  把抖音 App 复制出来的那一大段分享口令，一键变成可以直接打开的链接。
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <img src="https://img.shields.io/badge/Chrome-Manifest%20V3-ff5a7a.svg" alt="Manifest V3">
</p>

<p align="center">简体中文 · <a href="#english">English</a></p>

---

## 为什么需要这个

在抖音 App 里点「分享 → 复制链接」，得到的是这样一段文字：

```
9.94 Yzg:/ :0pm k@P.Kj 11/17 来新西兰骑山地车…… # 骑行  https://v.douyin.com/z9R_tp99QxI/ 复制此链接，打开Dou音搜索，直接观看视频！
```

想在电脑上看，还得手动把链接挑出来。这个插件帮你自动完成这一步。

## 功能

| 用法 | 操作 |
| --- | --- |
| 🖱️ 点击图标 | 复制分享文本后点插件图标（或按 `Alt+D`），自动读取剪贴板并显示链接，可一键打开或复制 |
| ⚡ 自动跳转 | 在弹窗中勾选「识别到链接后自动跳转」，之后点图标就直接打开 |
| 📋 右键菜单 | 在网页上选中分享文本 → 右键 →「提取抖音链接并打开」 |
| 🔍 地址栏 | 在地址栏输入 `dy` + 空格，粘贴分享文本，回车 |

支持 `v.douyin.com` 短链、`www.douyin.com` / `iesdouyin.com` 长链；文本中没有抖音链接时会退回提取第一个 http(s) 链接。

## 安装

### 从源码安装（开发者模式）

1. 下载本仓库（`git clone` 或 Code → Download ZIP 后解压）
2. Chrome 打开 `chrome://extensions`
3. 右上角开启「开发者模式」
4. 点「加载已解压的扩展程序」，选择仓库中的 **`extension`** 文件夹

### Chrome 网上应用店

（上架后补上链接）

## 隐私

插件所有处理都在本地完成，**不收集、不上传任何数据**，也不会联网（除了你主动打开的链接）。详见 [PRIVACY.md](PRIVACY.md)。

| 权限 | 用途 |
| --- | --- |
| `clipboardRead` | 打开弹窗时读取你刚复制的分享文本 |
| `contextMenus` | 提供右键菜单入口 |
| `storage` | 在本地记住「自动跳转」开关 |

## 开发

```bash
npm test         # 运行链接提取的单元测试（需 Node.js 18+）
npm run build    # 打包为 dist/douyin-link-opener-vX.Y.Z.zip，可直接上传应用店
```

项目结构：

```
extension/          插件本体（加载这个文件夹）
  manifest.json
  extract.js        链接提取逻辑
  background.js     右键菜单、地址栏
  popup.html/js     弹窗界面
  icons/
assets/             图标源文件（SVG）
test/               单元测试
scripts/build.sh    打包脚本
```

欢迎提 Issue 和 PR，参见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 免责声明

本项目为个人开源工具，与抖音、字节跳动没有任何关联。「抖音」为其各自所有者的商标。

## License

[MIT](LICENSE)

---

<a id="english"></a>

## English

A Chrome extension (Manifest V3) that extracts the URL from Douyin (Chinese TikTok) share text and opens it directly.

- **Popup**: copy the share text, click the icon (or press `Alt+D`); the extension reads your clipboard and shows the link. Optional auto-open.
- **Context menu**: select the share text on any page → right-click → open.
- **Omnibox**: type `dy`, space, paste the text, press Enter.

Everything runs locally; no data is collected or sent anywhere. See [PRIVACY.md](PRIVACY.md).

**Install from source:** open `chrome://extensions`, enable Developer mode, click "Load unpacked" and select the `extension` folder.

**Develop:** `npm test` runs the unit tests, `npm run build` creates a store-ready zip in `dist/`.

Not affiliated with Douyin or ByteDance. Licensed under [MIT](LICENSE).
