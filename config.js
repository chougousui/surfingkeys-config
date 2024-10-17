// example setting https://github.com/Foldex/surfingkeys-config/blob/master/config.js
const { unmapAllExcept, mapkey, Normal, RUNTIME, Hints, map } = api;

// https://github.com/brookhong/Surfingkeys/tree/master?tab=readme-ov-file#edit-your-own-settings
settings.smoothScroll = false;
settings.hintAlign = "left";

// TODO why not working?
// Surfingkeys/src/content_scripts/common/runtime.js
// settings.nextLinkRegex = /(\b(next)\b)|下页|下一页|后页|下頁|下一頁|後頁|>>|»/i;
// settings.prevLinkRegex = /(\b(prev|previous)\b)|上页|上一页|前页|上頁|上一頁|前頁|<<|«/i;

// Surfingkeys/docs/API.md
unmapAllExcept([
  // 帮助
  "?",
  ";ql",
  ";s",

  // 鼠标点击
  "gi",
  "[[",
  "]]",
  "f",
  "af",
  "gf",
  "q",

  // 滚动
  "gg",
  "G",

  // 标签页
  "yt",
  "yT",
  "gxx",
  "T",
  "<Alt-p>",
  "<Alt-m>",
  "x",
  "X",

  // 缩放
  "zr",
  "zi",
  "zo",

  // 网页浏览
  "gU",
  "S",
  "D",

  // 剪贴板
  "yG",
  "yS",
  "yg",
  "yy",
  "yY",
  "yl",
  "yf",
  "yp",

  // 搜索栏
  "om",
  ":",
  "<Esc>",
  "<Ctrl-'>",
  "<ArrowDown>",
  "<ArrowUp>",
  "<Ctrl-n>",
  "<Ctrl-p>",

  // 可视模式
  "/",
  "n",
  "N",

  // 设置
  ";pm",
  ";e",
  ";v",

  // Chrome内置功能
  "gd",
  "ge",
  ";i",

  // 插入模式
  "<Ctrl-e>",
  "<Ctrl-f>",
  "<Ctrl-u>",
  "<Alt-b>",
  "<Alt-f>",
  "<Alt-w>",
  "<Alt-d>",
  "<Esc>",
  "<Ctrl-'>",
  "<Ctrl-i>",
  "<Ctrl-Alt-i>",
]);

mapkey("r", "Scroll up", () => {
  Normal.scroll("pageUp");
});

mapkey("h", "Scroll down", () => {
  Normal.scroll("pageDown");
});

// 1. "刷新当前页"
// 2. Surfingkeys/src/pages/l10n.json
// 3. "Reload the page"
// 4. Surfingkeys/src/content_scripts/common/default.js
// 5. RUNTIME("reloadTab", { nocache: false });
mapkey("R", "Reload the page", () => {
  RUNTIME("reloadTab", { nocache: false });
});

map("F", "gf");
