let historyStack = [];
let currentIndex = 0;
const iframe = document.getElementById("Webview");
function Refresh() {
    iframe.src = iframe.src;
}
function Back() {
    if (currentIndex > 0) {
        currentIndex--;
        iframe.src = historyStack[currentIndex];
    } else {
        alert("Can't go back!");
    }
}
function Forward() {
    if (currentIndex < historyStack.length - 1) {
        currentIndex++;
        iframe.src = historyStack[currentIndex];
    } else {
        alert("Can't Forward!");
    }
}
function newURL() {
    let newURl = prompt("Nhập URL mới:");
            if (newURL) {
                historyStack = historyStack.slice(0, currentIndex + 1); // Xóa lịch sử phía trước nếu có
                historyStack.push(newURl);
                currentIndex = historyStack.length - 1;
                iframe.src = newURl;
            }
}
historyStack.push(iframe.src);