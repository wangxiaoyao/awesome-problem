

**chatgpt O1:**



1 Readme.md 文档（英文版本）



- 产品需求文档（PRD）



- 架构师：设计技术栈，设计算法，定义数据库结构，配色和UI设计





2 技术开发整体流程/步骤：请你依据技术栈，指导我一步一步完成该项目。其中代码实现交给cursor，你专注于：项目的整体流程和步骤。必须考虑流程步骤的合理性和正确性。感谢！





**V0：**



作用：快速出图，考虑配色和UI方案



1 参考图（Dribbble） + 设计方案，构成UI基础



2 替换单个页面





**Cursor：页面开发**



依据O1 的“技术开发流程/步骤”进行指挥操作。记住每一步骤都形成一次“git commit” 记录。

标记官方文档以获取准确信息 在使用特定框架或服务时，我会在 Cursor 中同步它们的官方文档。这样，我的提示总能获取最新最准确的信息，最大程度地减少错误并提升准确性。





1 配置文件：

.cursorrules

Readme.md





2 页面开发和组件划分 prompt



\```

Page Logic and Component Splitting

\- “Component” UI and internal logic is placed inside the “component”.

\- API requests and state management are placed in the parent component: page.tsx.

\- API uses public method lib/fetch.ts. for unified management of interface requests.



Please note the definition of the API interface. The backend API has been implemented api/XXX Please make sure that the front-end and back-end can communicate with the data



The ts types for this page are defined in types/xxx, and all other new generation is managed here.



Use shadcn/ui to check the components that already exist in components/ui.



Tools are placed in @utils.ts There is no need to write a tool when there is one already written.



Please implement all the components step by step to ensure that they meet the requirements and are correct.



\```





3 自我检查prompt



\```

After generating the code, please review all of it against the requirements stated above. Check for:



- API endpoints correctness and parameter usage.
- Proper handling of success and error scenarios.
- Correct data structures, fields, and validation rules.
- UI elements and interactions as specified.
- Code format and best practices.



Once you finish reviewing, describe any discrepancies or confirm that everything matches the requirements.

\```