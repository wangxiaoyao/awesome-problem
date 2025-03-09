# mac-envConfiguration
about how to configure the env of mac to develop more efficiently.



## 一 提升效率方案：纯键盘

> 关闭所有电子设备信息提醒，按照自己的律动感



vim快捷键

```bash
## 跳转k行并编辑
:k | o

## 
```



vscode快捷键

```bash
## delete a line at any position
cmd + shift + k
```



浏览器

```bash
## 删除cookie和记录
cmd + shift + dele 
```





## 二 configuration

###  1 xcode-select

```bash
## 安装
xcode-select --install

## 查看xcode更新,以及OS系统更新
softwareupdate --list

## 选择xcode更新
softwareupdate --install "Label"

## xcode + OS系统版本全部更新(慎用！)
softwareupdate --install -a
```



### 2 homebrew

[官网安装](https://brew.sh/)

```bash
## 更新brew/software,清理，检查
brew update
brew upgrade
brew cleanup
brew doctor
```

2.1 设置定时拉取最新代码



###  3 Oh My Zsh

[官网安装](https://ohmyz.sh/)

```bash
# 目录
~/.oh-my-zsh


# 配置 .zshrc
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="ys"
HIST_STAMPS="yyyy-mm-dd"

plugins=(git)

## brew install autojump
[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh
source $ZSH/oh-my-zsh.sh

## brew install zsh-syntax-highlighting
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

## brew install zsh-autosuggestions
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

## alias
alias zshconfig="vim ~/.zshrc"
alias gitconfig="vim ~/.gitconfig"
alias vimconfig="vim ~/.vimrc"
```



### 4 Development Tools

```bash
## git
brew install git

## node/npm
brew install nvm
```



### 5 **Useful Utilities**:

```bash
brew install wget

brew install htop

## brew install fzf
echo export 
$(brew --prefix)/opt/fzf/install
```



6 image

```
 brew install webp
```





























## 基本构造

mac 终端编程环境的搭建，以下一套工具构成一个完美的IDE。

1 软件库 homebrew

2 内核shell： zsh (oh-my-zsh)

3 编辑器

- vim：  负责代码编辑；

5 C/CPP的编辑环境

- ctags ： 负责代码解析生成tags；

- gdb ： 负责调试；

- gcc： 负责编译。

- cmake:  负责构建

6 web端编译环境

- node（环境）



## 编辑器vim

使用brew 安装vim 替代mac 自带（usr/bin）。关闭重启即可查看新版本。

### 1 新建配置文件.vimrc 

```
"显示行号
set nu

"启动时隐去援助提示
set shortmess=atI

"语法高亮
syntax on

"使用vim的键盘模式,避免vi的键盘模式
set nocompatible

"不需要备份文件
set nobackup

"没有保存或文件只读时弹出确认
set confirm

"鼠标可用
set mouse=a

"tab缩进
set tabstop=4
"自动缩进时,缩进长度为4
set shiftwidth=4
set expandtab
set smarttab

"c文件自动缩进
set cindent

"自动对齐
set autoindent

"智能缩进
set smartindent

"高亮查找匹配
set hlsearch

"显示匹配
set showmatch

"显示标尺，就是在右下角显示光标位置
set ruler

"不要闪烁
set novisualbell

"启动显示状态行
set laststatus=2

"浅色显示当前行
autocmd InsertLeave * se nocul

"用浅色高亮当前行
autocmd InsertEnter * se cul

"显示输入的命令
set showcmd

"被分割窗口之间显示空白
set fillchars=vert:/
set fillchars=stl:/
set fillchars=stlnc:/

"配色方案（将 XXX.vim的配色文件放在.vim/colors下）
set background=dark
"colorscheme solarized
"colorscheme molokai
"colorscheme gruvbox
colorscheme one

" 设置状态栏主题风格
let g:Powerline_colorscheme='solarized256'
syntax keyword cppSTLtype initializer_list

"禁止折行
set nowrap

"基于缩进或语法进行代码折叠
"set foldmethod=indent
set foldmethod=syntax
"启动 vim 时关闭折叠代码
set nofoldenable

"编码设置
set encoding=utf-8

"允许用退格键删除字符
set backspace=indent,eol,start
set backspace=2

"共享剪切板
set clipboard=unnamed

"inoremap  就只在插入(insert)模式下生效
"vnoremap 只在visual模式下生效
"nnoremap/nmap 就在normal模式下(狂按esc后的模式)生效

" 设置快捷键将选中文本块复制至系统剪贴板
vnoremap <Leader>y "+y
" 设置快捷键将系统剪贴板内容粘贴至 vim
nmap <Leader>p "+p
" 定义快捷键关闭当前分割窗口
nmap <Leader>q :q<CR>
" 定义快捷键保存当前窗口内容
nmap <Leader>w :w<CR>
" 定义快捷键保存所有窗口内容并退出 vim
nmap <Leader>WQ :wa<CR>:q<CR>
" 不做任何保存，直接退出 vim
nmap <Leader>Q :qa!<CR>

- " 定义快捷键到行首和行尾
nmap LB 0
nmap LE $
" 跳转至右方的窗口 我看加w不方便
nnoremap <Leader>l <C-W>l
" 跳转至左方的窗口
nnoremap <Leader>h <C-W>h
" 跳转至上方的子窗口
nnoremap <Leader>k <C-W>k
" 跳转至下方的子窗口
nnoremap <Leader>j <C-W>j
" 定义快捷键在结对符之间跳转
nmap <Leader>m %


"插件管理
call plug#begin('~/.vim/plugged')

Plug 'preservim/nerdtree'
Plug 'github/copilot.vim'

call plug#end()
```

### 2 插件管理 vim-plug

- copilot.vim 
- NERDTree 文件树


### 3 进制转化问题

对于非文本文件的读写. 实现ultra

```
## 在vi命令状态下：

## 转化为16进制格式
:%!xxd        

##  转回来
:%!xxd -r   
```





## 工具

```
## 视频转换
ffmpeg

## 下载
wget
yt-dlp

## nvm

```







