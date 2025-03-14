#!/bin/zsh

# 开启错误处理
set -e
set -u

# 检查是否安装 Git
check_git_installed() {
    if ! command -v git &>/dev/null; then
        echo "错误: Git 未安装！请先安装 Git。" >&2
        exit 1
    fi
}

# 检查当前目录是否为 Git 仓库
check_git_repo() {
    if ! git rev-parse --is-inside-work-tree &>/dev/null; then
        echo "错误: 该目录不是一个 Git 仓库！" >&2
        exit 1
    fi
}

# 显示未提交的文件
show_changes() {
    echo "以下是未提交的更改："
    git status -s
}

# 读取提交消息并提交更改
commit_changes() {
    read -p "请输入提交消息: " commit_msg
    git add .
    git commit -m "$commit_msg"
    echo "✅ 提交成功！"
}

# 询问用户是否推送
push_changes() {
    read -p "是否推送到远程仓库？(y/n): " push_choice
    if [[ "$push_choice" == "y" ]]; then
        git branch | grep '*' | awk '{print $2}' | read -r branch
        git push origin "$branch"
        echo "✅ 已推送到远程仓库！"
    else
        echo "🚀 本地提交已完成，未推送到远程。"
    fi
}

# 主函数
main() {
    check_git_installed
    check_git_repo
    show_changes
    commit_changes
    push_changes
}

# 捕获错误
trap 'echo "❌ 发生错误，请检查日志或重试！" >&2' ERR

# 运行主函数
main

