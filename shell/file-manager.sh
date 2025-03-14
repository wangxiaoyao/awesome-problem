#!/bin/zsh

# 开启错误处理
set -e
set -u

# 获取用户输入的目录
get_directory() {
    read -p "请输入要分析的目录路径: " dir

    # 检查目录是否存在
    if [[ ! -d "$dir" ]]; then
        echo "错误: 目录 $dir 不存在！" >&2
        exit 1
    fi
}

# 列出文件大小排序
list_files() {
    echo "按大小排序的文件列表："
    ls -lhS "$dir" | grep -v '^d' | awk '{print NR".", $5, $9}' | head -n 5
}

# 获取最大文件
get_largest_file() {
    largest_file=$(find "$dir" -type f -exec ls -lS {} + | awk '{print $NF}' | head -n 1)
    
    if [[ -z "$largest_file" ]]; then
        echo "错误: 没有找到文件！" >&2
        exit 1
    fi
    
    echo "最大文件: $largest_file"
}

# 处理用户选择
handle_choice() {
    echo "你想 (a) 归档 还是 (d) 删除 最大文件？"
    read -p "输入 a 或 d: " choice

    case "$choice" in
        a)
            tar -czf "${largest_file}.tar.gz" "$largest_file"
            echo "已归档: ${largest_file}.tar.gz"
            ;;
        d)
            rm "$largest_file"
            echo "已删除: $largest_file"
            ;;
        *)
            echo "无效选择，请输入 a 或 d。" >&2
            exit 1
            ;;
    esac
}

# 主函数
main() {
    get_directory
    list_files
    get_largest_file
    handle_choice
}

# 捕获错误
trap 'echo "脚本执行出错！" >&2' ERR

# 运行主函数
main

