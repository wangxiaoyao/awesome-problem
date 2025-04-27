## 一 AI learing

> how AI like GPTs can be used  to  train our brains to learn subjects for more effectively 

```apl
## 使用英文! 
一 mindMap

// knowleage mindMap （技术推荐： https://roadmap.sh/）
Hi, I want to learn “XXX”.  Please guide me as an education specialist to effectively learn this skill. 

Please deconstruct the skill to make a detailed list of latest "syllabus"/"roadmap", and build a knowledge mindMap.

Furthermore, please elaborate on:
- Emerging trends and future directions in "the skill".
- Relevant and latest technologies, tools, or platforms used in this field.
thank U!


// source
Finally, could you suggest some high-quality learning resources (e.g., online courses, books, communities) that align with the prioritized core knowledge and the learning path you've outlined?"


二 education

// 1 选取mindMap根节点
Now you are an education specialist. “XXX” as the theme content for teaching and explaining


// 2 核心问题（flashCard）=> 记录于mindmap 

// conception
What is the concept of XXX, what dose it mean.How it works.Please give me some examples in layman's terms.


// connection: 连接
// 概念"联系"
what "XXX" knowledge nodes are associated with it? parent node?Sub-Nodes?
// 问题"联系"
What variant of the classical problem am I running into and with what solution.


// Common Pitfalls： 经典的错误事项（记录于github）
For this section：Typical mistakes or misconceptions to watch out for.


=》 flashCard:(核心问题)
please，Make some spaced repetition flashcards for this section. Format as Q&A.


=》 visual
“Generate a flowchart/diagram for how a XXX works.”

Please use XXX as your theme for the above learning. Create a personalized  Memory Palace (also known as the Method of Loci)


三 Practical Exercises：记录于github

// 生成练习题
In response to the above learning.please, Generate step-by-step problem walkthroughs and Create specific tasks or mini-projects for hands-on practice. Use non-downloadable Markdown format.

For the learning stage focusing on [Specify the concept or topic just learned], I need practical exercises to solidify my understanding and develop proficiency. Please generate:
- A few practice questions that directly test my comprehension of the concepts.
- At least one step-by-step problem walkthrough demonstrating how to apply the concepts to solve a typical problem.
- One or more specific tasks or mini-projects that will allow me to apply the learned concepts in a more hands-on and integrated way.
Please ensure these exercises are relevant to my goal and help me become more effective in my knowledge. If possible, suggest the expected outcome or key considerations for the tasks/mini-projects.


// thinking
for this question please give me the right guidance, and hints for thinking. Never tell me the answer.


// Correction:  
What is Best practice?



四 review
In order to test what I have learned above, carry out: Feynman Learning Method and Socratic Method (Prompting Critical Thinking).
You will be asked to ask/question and I will answer as the teacher. A question and answer format.



## 其他
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

1 Readme.md：

- Can you please generate a product requirements document for me based on this information?（PRD）

- Please act as a good architect to design a good technology stack, design algorithms, define database structure, and give colour scheme and UI design suggestions based on PRD documents.

  Ensure that all aspects of my Software Development Life Cycle (SDLC) Devops such as development, testing, deployment, monitoring and maintenance are efficient, automated and secure.（Technical Design Document :TDD）


2 开发整体流程/步骤：

You are asked to open a step-by-step guide for the project based on the design of this technical document. Where the code implementation is left to cursor and you focus on: the overall process and steps of the project. The rationality and correctness of the process steps must be considered. Thanks to!

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

