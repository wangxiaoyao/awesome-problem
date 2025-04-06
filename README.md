# awesome-problem

> 日常积累的各类语言的练习题，以及反思积累的blog。以帮助巩固各语言，方便面试。并记录具体问题的解决思路。PS：感谢醒醒小朋友在我生命的低谷期无微不至的鼓励和支持！😊！thank U! 

## 一 instruction

1 命名规范：所有文件夹名称一律使用： kebab-case。 映射 URL 友好、主流风格一致，防止linux操作系统对大小写敏感而不稳定。

2 文件以 `创立时间 + 问题 `命名，每一个文件夹包含README文件：问题，思路。（多文件表示多种解题方式）



## 二 theme



### C：

- mac：Xcode
- 编译器：gcc



```shell
## CLI 编译
1 MAC系统只要安装了 Xcode就有了 clang。编译套餐GCC！

2 利用GCC进行编译
gcc XXX.c -o "可执行程序名称"

3 点击生成的可执行程序，即可运行。
```



### Cpp：

- mac： Xcode
- 编译器：clang/llvm





### WEB

> web开发问题：分 question 为：常见练习题；demo：开发小案例

### 一 question



### 二 demo

Nextjs项目结构以及命名方式：（WEB项目结构命名）

```shell
my-next-app/											# 文件夹统一使用：kebab-case
├── src/                       # Static assets (images, fonts)
    ├── app/                          # Routing (app directory for App Router)
    │   ├── layout.js
    │   ├── page.js                   # Root page
    │   └── dashboard/                # route即url。短：全部小写，长：kebab-case	egg：/user-settings
    │       ├── layout.js
    │       └── page.js               # 默认页面导出：Page命名。如下
    │       └── components						# 文件夹
    │           └── DashboardStatus.js # 组件命名：不论是组件文件夹名还是文件名都是：大驼峰（PascalCase）
                                      # DashboardStatus （如果没有内嵌子组件，直接一个文件名）
                                        /index.js
                                        /DashboardStatus.module.css																										              						/Other.js 子组件
    ├── components/                   # Reusable components
    │   ├── ui/                       # UI-specific components (Button, Modal, Card...)
    │   └── shared/                   # Shared components across features
    ├── lib/                          # 系统模块或第三方集成封装，有副作用、非纯函数。工具库 / API 封装 / 第三方整合
    │   ├── api.js                    # API calls or data fetching methods
    │   └── parseToken.ts             # Miscellaneous utility functions => 使用小驼峰
		└── utils/                				# 小而通用的“纯函数”，不依赖应用上下文，职责单一，可重复使用：lodash
       └── formatDate.ts
    ├── hooks/                        # Custom React hooks => use 开头，小驼峰
    │   ├── useAuth.js
    │   ├── useFetch.js
    │   └── index.js                  # Export all hooks
    ├── styles/                       # Global CSS, Tailwind configs, etc.
    │   ├── globals.css
    │   └── tailwind.css
    ├── contexts/                     # React Context API providers => Context结尾，大驼峰
    │   └── AuthContext.js
    ├── types/                        # TS类型
    │   └── index.ts
    ├── constants/                    # 常量
    │   └── index.ts
├── public/                       # Static assets (images, fonts)
├── middleware.js                 # Next.js middleware (optional)
├── next.config.js                # Next.js configuration
├── jsconfig.json or tsconfig.json # Path aliases configuration
└── package.json
└── .eslintrc.js              		# ESLint 配置
```



```shell
## 路由页面统一使用：Page 命名。默认导出，或者 DashboardPage
export default function Page() {
    return (
        <div>
        		<组件 />
        </div>
    )
}
```


```shell
TypeScript

Tailwind CSS

ESLint + Prettier

Husky + Lint-staged (for git hook & code quality)

React Testing Library + Vitest / Jest (for testing)

```



## leetcode

2020-2-5开启的项目，悄然间，四年而过。24-6-23将接过这一棒。

---

本项目：以英文名作为试题名，试题的序列号和[leetcode官网](https://leetcode.com/)对应。

每个试题一个文件夹，包含：

- README文件，该文件为：分析题意以及多种算法的解题思路。
- 不同语言的解题文件。

运行方式：复制解题文件中的某一方法(对应语言)，到 leedcode官网对应题号下运行。 



## blog

> 日常博客内容



