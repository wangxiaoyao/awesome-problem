# mac-envConfiguration

> ‼️ Frist turn off all electronic device information alerts  and follow your own rhythmic senses.

> build end-to-end workflows on Mac to maximize software development efficiency. think more manipulating Applications in the CLI.



## mac config

```shell
## 基本设置
system setting

## 设置时区
sudo systemsetup -settimezone Asia/Shanghai

# 重置SMC:电池问题
18年型号： ctrl（左侧） + option（左侧） + shift（右侧） ： 三个键7秒后 ， 额外加上开机键7秒

#xcode-select: 
## 安装
xcode-select --install

## 查看xcode更新,以及OS系统更新
softwareupdate --list

## 选择xcode更新
softwareupdate --install "Label"

## xcode + OS系统版本全部更新(慎用！)
softwareupdate --install -a
```



## 一 shortcut key

vim

```bash
## 跳转行
G : Go to Last Line
nG:
gg : Go to first Line

## 复制yank 粘贴paste 剪切cut
全局

## 给多行添加注释：#
可视块模式，移动光标选择所有行，必须大写I进入输入模式，输入字符， 记住按下esc才生效

## 左移动/右移动tab
V 进入可视行模式，然后按下 < 或者 >
```

vscode：

```bash
## delete a line at any position
cmd + shift + k

## 编码中当前作用域相同变量名。选中一个后，会闪光，按下快捷键一次性改动。
cmd+d
```

chrome：

```bash
## 删除cookie和记录
cmd + shift + dele 
```



## 二 configuration

### 1 homebrew（package manager）

> 除了homebrew：还可以设置其他自动更新的soft： omz, nvm, npm -g 等非brew

[官网安装](https://brew.sh/)

```bash
## 更新brew/software,清理，检查
brew update
brew upgrade
brew cleanup
brew doctor

## 目录约定
$(brew --prefix)/bin      # 可执行文件 (binaries)
$(brew --prefix)/lib      # 库文件 (libraries)
$(brew --prefix)/include  # 头文件 (header files)
$(brew --prefix)/share    # 共享资源 (documentation, scripts, plugins)
```

设置定时更新（插电的情况下）

```apl
## 设置mac:每天04:00 AM 唤醒
sudo pmset repeat wake MTWRFSU 04:00:00

## 插电，合上盖子可以睡眠（设置没啥用，因为插电状态依旧阻止了睡眠。）
sudo pmset -c disablesleep 0
## 插电（charging），不会睡眠
sudo pmset -c sleep 0
## 电池（battery），会睡眠（不然电池损耗很严重。）
sudo pmset -b sleep 1

## 保持网络防止vpn断开（all情况，优点鸡肋）
sudo pmset -a networkoversleep 1

## 编写脚本：其中设置 osascript 消息提醒，需要通过Script Editor间接打开Notifications中的消息提示。
vim ~/.scripts/brew-update.sh

## launchctl：设置自动运行脚本:每天4:05分进行更新。
### 推荐目录
vim ~/Library/LaunchAgents/com.user.brewupdate.plist
### launchctl： load unload start stop
launchctl load ~/Library/LaunchAgents/com.user.brewupdate.plist
```



### 2 Terminal Emulator

[iTerm2官网](https://iterm2.com/)

```bash
brew install --cask iterm2

## 拷贝历史
Cmd + Shift + H

## 内置tmux
cmd + D

## imgcat
展示图片
```



###  3 zsh（shell）=> Oh My Zsh

[官网安装](https://ohmyz.sh/)

```bash
# 目录
~/.oh-my-zsh

# 配置 .zshrc的插件
plugins=(git)

## brew install autojump
[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh
source $ZSH/oh-my-zsh.sh

## brew install zsh-syntax-highlighting   $(brew --prefix) 为获取brew安装目录/usr/local
source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

## brew install zsh-autosuggestions
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

## alias
alias zshconfig="vim ~/.zshrc"
alias gitconfig="vim ~/.gitconfig"
alias vimconfig="vim ~/.vimrc"
```



### 4 vim 和  Neovim + lazyvim (IDE)

```bash
## vim: export PATH="/usr/local/bin:$PATH" 替代mac自带。 配置文件：vimrc
brew install vim

## neovim
brew install neovim

## lazyvim配置：后端开发/脚本语言/远程开发ssh。lua语言
[官网配置](https://www.lazyvim.org/installation)

LSP、Treesitter(语法高亮/感知)、调试器（DAP）、自动补全和格式化工具
```



### 5 **Useful Utilities**:

OS shell

```bash
## fd 替换 find (faster)
brew install fd

## rg 替换 grep (faster)
brew install ripgrep

## fzf模糊搜索(不精确)
brew install fzf

## mac自带trash:替代rm -rf。

## 进程管理工具
htop

## 目录结构可视化
tree

## 下载:油管等视频
yt-dlp

# network
## 测速（Macos build-in）
networkQuality

## CF
## 测试 Cloudflare WARP 连接
cloudflarewarpspeedtest

## 用于 Warp+ 账户配置的工具	
wgcf

## iterm2 CLI查看图片
imgcat xxx.png

## 图片压缩处理: imageMagick
magick XXX -quality 80 XXX

## 图片转换为webp
cwebp

## 视频播放器(GUI 需要：brew install --cask iina)
iina

## 视频转换
ffmpeg
```



Dev

```bash
## github
### ssh-keygen, passphrase（使用private key,需要密码）：拷贝.pub 到github官网。创建两种type的ssh key。 for auth/signing
ssh-keygen -t ed25519 -C "U-mail"

### 启用ssh-agent 并记住ssh passphrase。 并入.zshrc。 验证 ssh-add -l
eval '${ssh-agent -s}'
ssh-add .ssh/私钥

### signature： SSH/GPG for git commit/tag。 配置gitconfig。
#### 使用ssh而不是GPG
git config --global gpg.format ssh
git config --global user.signingkey "$(cat ~/.ssh/id_ed25519.pub)"
#### 自动签名不需要 -S
git config --global commit.gpgsign true


## github （github CLI）
- github官网创建token进行配置
- gh auth login
- 配置 Dependabot alerts
gh

## 自动管理环境变量：目录级别
direnv

## 检测开发目录文件防止信息泄漏
gitleaks

## C/CPP的编辑环境
- ctags ： 负责代码解析生成tags；

- gdb ： 负责调试；

- gcc： 负责编译。

- cmake:  负责构建

## node（git）
- nvm
### 查看版本安装过版本。=》 brew-update.sh脚本会自动拉最新node并删除major以外的node版本
nvm list
### 设置默认值
nvm alias default node

## npm
- npm audit/npm audit fix： 运行安全检查和修复
### npm项目更新( 1 默认是更新到package中的最新版本. 2 npm registry最新： --target latest)
npm outdated
npx npm-check-updates -u
npm install

## yarn/pnpm
### Corepack内置于node>16中。默认关闭。启用后：可依据项目中package.json =》 packageManager 字段管理yarn版本：项目隔绝
corepack enable
### 在全局启用一个默认版本（如果项目没有packageManager字段，可用全局）
corepack prepare yarn@stable --activate


## docker 客户端包含Docker CLI、Docker Engine 和 Docker Compose
brew install --cask docker


## 处理json数据(格式化，查询，筛选，修改)
jq


## go

## python
- pyenv: 版本管理器
- pytest： 测试


## lua 语言的包管理器（nvim需要）
luarocks
```



AI

```shell
## 配置阿里云百炼 API环境变量 到 zsh 
$DASHSCOPE_API_KEY
```



## 三 软件

```shell
微信

VPN

飞书

chrome

vscode

cursor
```



