---
title: "How To Code Review"
description: "Share my code review experience"
pubDate: "2024/08/05"
heroImage: "https://gz-blog-storage-1252787757.cos.ap-guangzhou.myqcloud.com/books/202408-article-how2codereview.webp?imageMogr2/format/webp"
---


# How To Code Review 
> reference: ![code review](https://www.hitzhangjie.pro/blog/2019-09-10-%E5%A6%82%E4%BD%95%E6%9B%B4%E5%A5%BD%E5%9C%B0%E8%BF%9B%E8%A1%8C%E4%BB%A3%E7%A0%81review/#what-do-code-reviewers-look-for)
> 根據自己的經驗跟別人遇到的問題總結的 code review

## 1) Picking the Best Reviewers (who）

* **Appropriated Reviewer** 自己仰慕或想他給意見，可以 CC or @ 這個 reviewer, 即時別人沒時間也讓他知道、
* **Reviewer Ability** 是否有能力 review developer 寫得 code ？
* **In-Person Reviews** 團隊中面對面 Review，可集成多人的觀點意見，但這個決定於公司文化、

## 2) How to Do a Code Review (How)

### The Standard of Code Review (標準)
> reference: https://google.github.io/eng-practices/review/reviewer/standard.html
> In general, reviewers should favor approving a CL once it is in a state where it definitely improves the overall code health of the system being worked on, even if the CL isn’t perfect.

* **Maintain** code 可持續優化，即可以多次修改維護
* **Modify** Reviewer 必須有責任維護涉及到修改部分
* **Owner** Reviewer 得有代碼的修改權限，即使自己去修改也保證不出問題
* **Not important** Reviewer comment 分享經驗 & 新東西，並不是強制 coder 要這樣做
* **Blemishes** no best, only better, 允許瑕疵，代碼可持續維護&優化即可
* **Principles** code style/library，沒有明確規定就可以使用自己的風格
* **Resolving Conflicts** 意見不一致，咨詢多個人的意見，若都有支持方，建議沒有大的缺陷，基本可以不去修改，這個建議最好由 reviewer 說出、

### What to Look For In a Code Review (注意)
> reference: https://google.github.io/eng-practices/review/reviewer/looking-for.html

* **Naming** 初級工程師會犯的錯, 变量名、类名、方法名... 是否清晰、精炼
* **Design** 程序设计、架构设计... 是否合理，是否帶有產品思維
* **Functionality** 功能上是否滿足，產品人員是否接受；要考慮未來可能會用到的功能，是否存在 bug, deadlocks、race conditions、並發處理安全
* **Complexity** keep the code simple, 不要過度設計 / 控制 API 
* **Test** Unit Test && Feature Test
* **Comments** 注釋盡可能少，不要為了寫注釋而注釋，不要為了讓 Reviewer 看懂而注釋，不要因語言特性而寫注釋。@todo @notice 要提醒 coder release 之前解決並刪除
* **Style** 符合规范代码风格。Not Import Pick，寫出例子；做邏輯修改的同時，不要大片 code format\
* **Documentation** 發現文檔 outdated ，要提醒更新。
* **Every Line** 若看不懂的代碼，要跟開發者聯繫，並且商議不損失複雜度的情況下是否可以寫得更加簡單、
* **Context** 如果需要看大量的上下文，應當拆分出多個小函數去實現、
* **Good Things** 有好的做法，請告訴開發者，review 過程也是互相分享，互相學習的過程，比如分享優秀的 package/library

### Navigating a CL in Review (定位)
> reference: https://google.github.io/eng-practices/review/reviewer/navigate.html

* *Take a broad view of the change* 先看修改是否有意義，如無意義，直接 reject， 请用合适的措辞向开发者解释、
* *Examine the main parts of the CL* 先看 commit msg，是否有需求的背景，是否有相應的 ticket id 
* *Look through the rest of the CL in an appropriate sequence* 先看 business logic 實現部分，若沒問題再看其他、

### Speed of Code Reviews (時間)
> reference: https://google.github.io/eng-practices/review/reviewer/speed.html

#### Why Should Code Reviews Be Fast?

* 团队整体推进的速度被严重拖慢
> 被擱置的 review，首先會耽擱 release， 如果公司允許 release 滯後；
> 因 developer start new feature，隔了幾天、周、月，記憶已經不清晰的，需要重新看舊代碼或者修改，reviewer 如果你是 developer 該怎樣想？

* developer 开始抗议 / 不重视 Code review
> developer 隔幾天才收到 feedback， 改完又等幾天， reviewer 是否在意 developer 的心情變化呢？

* 代码整体健康度会受到影响
> 速度過慢，別的 feature 已經準備 release 了，幾天前的 feature 還在 review status, 讓 developer 怎麼去 merge code 去 release 呢？

#### How Fast Should Code Reviews Be?

immediately review > in 1 day > assign other people

#### Fast Responses

* 固定時間 review
* 不同時區，盡量不要在下班時間 review，不然 developer 在你下班時間 response 你該怎麼辦？
* 如果沒什麼大問題，立刻 comment LGTM / 給點小建議, 這可讓 developer 心情愉悅

#### Speed vs Interruption

* 在 developer 空閒時 review
* 避免自己忙的時候去 review

#### Supplement

* large amount of change list, developer 應拆分多個 commits / feature branch
* Emergencies 區分出緊急的，優先 review

## 3) How to Write Code Review Comments
> reference: https://google.github.io/eng-practices/review/reviewer/comments.html

* **Courtesy** 禮貌，語言的藝術。reviewer 並不總比 developer 優秀
* **Explain Why** reasons
* **Giving Guidance** write a demo / share article, 讓 developer 知道你是認真 review，並不是空穴來風。
* **Accepting Explanations** 虛心請教 developer, 記得要在他有時間的時候

## 4) Handling Push Back in Code Reviews
> reference: https://google.github.io/eng-practices/review/reviewer/pushback.html

* *Who is Right?*  reviewer 是否是對的，developer 可清楚業務。保持傾聽，若還是沒解決，尋求多人幫助、
* *Upsetting Developers* developer vs reviewer，基本上是 reviewer 沒做好功夫
* *Cleaning it Up Later* developer 答應之後修改，記得要督促 developer 修改
* *General Complaints About Strictness reviewr* 代碼的寬鬆程度先松後嚴，並且嚴格按照規範來 review


## 5）Developer's Perspective

* *Commit Msg* 可參考 https://www.jvt.me/posts/2024/07/12/things-know-commits
* *Don’t Take it Personally* 控制情緒，不要懟回去；reviewer incompetent，無禮貌，無建設性，先私下說明不喜歡他這種 review 方式, 還沒解決，需要換一個、
* *Fix the Code* reviewer 無法看懂這段 code, 想想是否自己實現複雜了，若是就修改一番；不是，那麼就添加一些 comment 或者花點時間解釋、