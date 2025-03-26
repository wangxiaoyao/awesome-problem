## 一 AI learing

> how AI like GPTs can be used  to  train our brains to learn subjects for more effectively 



```apl
## 尽可能的使用英文!
1 知识网络体系（mindMap）

- 关键节点: 20%核心知识自主推导80%内容


Hi, I want to learn XXX. please guide me as a XXX technologist. Please make a detailed list of latest syllabus, and build a knowledge mindMap.Expand on future trends, latest technologies, and usage scenarios and directions


- 核心问题：“核心节点”（概念/作用， 节点联系，案例/练习）


学习上述大纲内容，自我提炼出核心问题，或者AI生成：
“please，Make some spaced repetition flashcards for the XXX. Format as Q&A.”
=》 记录进flashcards库（mindMap的笔记）


- 可视化记忆（知识节点）

“Generate a flowchart/diagram for how a XXX works.”



2 实战经验（practice）


- 解决问题：明确目标，想象力/创造力去解决实际问题，鼓励犯错然后纠正。


In response to the above learning.please, Generate step-by-step problem walkthroughs and Create mini-projects for hands-on learning.



3 巩固（ review）


- 费曼学习法 +  Socratic Method

In order to test what I have learned above, carry out: Feynman Learning Method and Socratic Method (Prompting Critical Thinking).
You will be asked to ask/question and I will answer as the teacher. A question and answer format.


- Review flashcards 

利用艾宾浩斯遗忘曲线每天复习flashcard


```



```apl
// 其他“冒出来”的“知识”： 1 概念 2 关联 3 练习题

// conception
What is the concept of XXX, what dose XXX mean.Please give me some examples in layman's terms.

// connection
what “knowledge nodes” are associated with it?
What variant of the classical problem am I running into and with what solution.

// exercise
How can I apply this in conjunction with the above concepts? please give me a few common practice questions to help me become more solid and effective in my knowledge.


What dose this error message mean and how do I fix it.

Please explain this code ，how does this code work.


// key words
simplified explanations
analogies
detailed deep dives

```



#### thinking：

1 AI 会受上下文的干扰。未必是最优解。可：重启新的窗口。



## 二 AI开发流程

**chatgpt O1:**

1 Readme.md 文档（英文版本）

- 产品需求文档（PRD）

- 请你作为架构师，依据PRD，设计技术栈，设计算法，定义数据库结构，配色和UI设计。

2 技术开发整体流程/步骤：

请你作为架构师。帮助我选型技术栈，是否需要拓展？确保我软件开发生命周期（SDLC）中的各个环节Devops，如开发、测试、部署、监控和维护高效，自动化，安全。那么请你对我开启这个项目步骤进行指导吧。其中代码实现交给cursor，你专注于：项目的整体流程和步骤。必须考虑流程步骤的合理性和正确性。感谢！



**V0：**

作用：快速出图，考虑配色和UI方案

1 参考图（Dribbble） + 设计方案，构成UI基础

2 替换单个页面



**Cursor：**

依据O1 的“技术开发流程/步骤”进行指挥操作。记住每一步骤都形成一次“git commit” 记录。

标记官方文档以获取准确信息 在使用特定框架或服务时，我会在 Cursor 中同步它们的官方文档。这样，我的提示总能获取最新最准确的信息，最大程度地减少错误并提升准确性。



1 配置文件：

- .cursorrules

- Readme.md



2 页面开发和组件划分 prompt

```apl
Page Logic and Component Splitting

- “Component” UI and internal logic is placed inside the “component”.

- API requests and state management are placed in the parent component: page.tsx.

- API uses public method lib/fetch.ts. for unified management of interface requests.

Please note the definition of the API interface. The backend API has been implemented api/XXX Please make sure that the front-end and back-end can communicate with the data

The ts types for this page are defined in types/xxx, and all other new generation is managed here.

Use shadcn/ui to check the components that already exist in components/ui.

Tools are placed in @utils.ts There is no need to write a tool when there is one already written.

Please implement all the components step by step to ensure that they meet the requirements and are correct.
```



3 自我检查prompt

```apl
After generating the code, please review all of it against the requirements stated above. Check for:

- API endpoints correctness and parameter usage.
- Proper handling of success and error scenarios.
- Correct data structures, fields, and validation rules.
- UI elements and interactions as specified.
- Code format and best practices.

Once you finish reviewing, describe any discrepancies or confirm that everything matches the requirements.
```

