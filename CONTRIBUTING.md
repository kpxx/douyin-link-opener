# 贡献指南

感谢你愿意参与！

## 回报问题

如果某段分享文本提取失败，请在 Issue 中附上**完整的分享文本**（可以把视频描述部分删掉，只保留口令和链接），以及 Chrome 版本。

## 提交代码

1. Fork 本仓库并新建分支：`git checkout -b fix/xxx`
2. 修改代码。链接提取逻辑在 `extension/extract.js`，修改时请在 `test/extract.test.js` 补上对应测试
3. 确认测试通过：`npm test`
4. 在 `chrome://extensions` 重新加载插件，手动验证弹窗、右键菜单、地址栏三种用法
5. 更新 `CHANGELOG.md` 的「未发布」区块
6. 提交 PR，说明改了什么、为什么

## 原则

- 不引入任何会联网、收集数据的功能或第三方库
- 不新增非必要的权限
- 保持零依赖、无需构建即可加载

## 发布新版本（维护者）

1. 修改 `extension/manifest.json` 与 `package.json` 的 `version`
2. 更新 `CHANGELOG.md`
3. `npm run build`，把 `dist/` 里的 zip 上传到 Chrome Web Store 开发者后台
4. 打 tag：`git tag v1.x.x && git push --tags`
