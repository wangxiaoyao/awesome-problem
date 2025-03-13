# mac-envConfiguration

> Frist turn off all electronic device information alerts ‼️ and follow your own rhythmic senses.

about how to configure the env of mac to develop more efficiently. think more manipulating Applications in the CLI



## 一 提升效率



vim快捷键

```bash
## 跳转k行并编辑
:k | o

## 拷贝（使用鼠标后）
y
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



### 2 homebrew（软件库）

[官网安装](https://brew.sh/)

```bash
## 更新brew/software,清理，检查
brew update
brew upgrade
brew cleanup
brew doctor
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



###  3 Oh My Zsh（内核shell）

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



### 4 vim

lazyvim

```
## 配置文件：.vimrc
使用brew 安装vim 替代mac 自带（usr/bin）。关闭重启即可查看新版本。



### 插件管理 vim-plug


- copilot.vim  去掉
- NERDTree 文件树
```



### 5 **Useful Utilities**:

好好整理一下对应的工具



```bash
## 进程管理工具
htop

## 目录跳转工具
autojump

## 版本控制
git

## github （github CLI）:github官网创建token进行配置。 gh auth login
gh


## C/CPP的编辑环境

- ctags ： 负责代码解析生成tags；

- gdb ： 负责调试；

- gcc： 负责编译。

- cmake:  负责构建

## web ENV

- node

- nvm

## go ENV



## 目录结构可视化
tree

## 下载
- wget
- yt-dlp

## 远程连接工具
telnet		


## 模糊搜索工具
fzf

## CF
## 测试 Cloudflare WARP 连接
cloudflarewarpspeedtest

## 用于 Warp+ 账户配置的工具	
wgcf

## 图片处理
webp

## 视频播放器(GUI 需要：brew install --cask iina)
iina

## 视频转换
ffmpeg
```
