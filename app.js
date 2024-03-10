var os = navigator.platform == 'Win32';
var downloadButton = document.querySelector('#download');
var download32 = document.getElementsByClassName('download')[0];

downloadButton.innerHTML = os ? "[Windows 下载]" : "暂时不可下载";

if(os) {
    download32.setAttribute('href','data\\下载包-Beta-x86.exe');
    downloadButton.setAttribute('href','data\\下载包-Beta.exe');
}

var genshinBtn = document.querySelector('.top span');

genshinBtn.addEventListener('click',() => {
    window.open('https://ys.mihoyo.com');
})