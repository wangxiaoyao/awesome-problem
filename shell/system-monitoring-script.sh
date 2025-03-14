#!/bin/zsh

set -e
set -u

LOG_FILE="$(pwd)/system_monitor.log"
ERROR_LOG="$(pwd)/system_monitor.err"

get_date(){
    echo "$(date '+%Y-%m-%d %H:%M:%S')"
}

get_top_processes(){
    echo "Top 5 CPU Processes:"
    ps aux | head -n 1 && ps aux | sort -nrk 3 | head -n 5;
}

check_disk_usage(){
    local threshold=80
    local diskUsage=$(df -h | awk '$1 ~ /^\/dev\/disk1s4s1/ {print $5}' | sed 's/%//');
    if [ "$diskUsage" -gt "$threshold" ];then
        echo "Disk Usage: $diskUsage%,Warning:High Disk Usage!";
    else
        echo "Disk Usage: $diskUsage%,everything is OK!"
    fi
}


log_message(){
    local message="$1"
    echo "$(get_date)-$message" | tee -a "$LOG_FILE"
}


main(){
    log_message "system-monitoring-script start";
    
    #top processes
    get_top_processes | tee -a "$LOG_FILE";

    #disk usage
    check_disk_usage | tee -a "$LOG_FILE";

    log_message "Script finished Successfully";

    exit 0;
}

# 你可以添加exit 1 在 trap的内容中，表明：任何报错就会停止，但是会影响到if else的运行。不建议使用
trap 'echo "Script failed! check $ERROR_LOG"; log_message "Script encountered an error"; exit 1' ERR

main 2>> "$ERROR_LOG"






