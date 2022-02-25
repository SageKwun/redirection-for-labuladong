// ==UserScript==
// @name         labuladong的算法小抄不便发布内容自动跳转
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  try to take over the world!
// @author       Sage Kwun
// @match        https://labuladong.gitee.io/algo/*
// @icon         https://www.google.com/s2/favicons?domain=gitee.io
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  let url = location.href;
  switch (url) {
    // 动态规划之子序列问题解题模板
    case "https://labuladong.gitee.io/algo/3/24/83/":
      open(
        "https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484666&idx=1&sn=e3305be9513eaa16f7f1568c0892a468"
      );
      break;
    // 经典动态规划：最长公共子序列
    case "https://labuladong.gitee.io/algo/3/24/82/":
      open("https://mp.weixin.qq.com/s/ZhPEchewfc03xWv9VP3msg");
      break;
    // 一个方法团灭 LEETCODE 打家劫舍问题
    case "https://labuladong.gitee.io/algo/3/26/100/":
      open("https://mp.weixin.qq.com/s/z44hk0MW14_mAQd7988mfw");
      break;
    // 动态规划之子序列问题解题模板
    case "https://labuladong.gitee.io/algo/3/24/83/":
      open("https://mp.weixin.qq.com/s/zNai1pzXHeB2tQE6AdOXTA");
      break;
  }
})();
