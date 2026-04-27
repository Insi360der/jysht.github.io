document.body.insertAdjacentHTML("afterbegin", `
<style>
#menuBtn {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 100000;
    background: #333;
    color: #fff;
    border: none;
    padding: 10px 14px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 10px;
}
.sideMenu {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background: #222;
    z-index: 99998;
    transform: translateX(-100%);
    transition: 0.3s ease;
    padding: 80px 20px 20px;
    box-sizing: border-box;
    
    /* 👇 这里开启上下滑动 */
    overflow-y: auto;
    overflow-x: hidden;
}
.sideMenu.open {
    transform: translateX(0);
}
.pageBtn {
    display: block;
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-align: left;
}
.pageBtn:hover {
    background: #2980b9;
}

.loading-tip {
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 99999;
    color: white;
    font-size: 12px;
    text-align: right;
    line-height: 1.5;
    background: rgba(0,0,0,0.4);
    padding: 6px 10px;
    border-radius: 6px;
    max-width: 250px;
}
</style>

<button id="menuBtn">菜单</button>
<div id="sideMenu" class="sideMenu">
    <button class="pageBtn" onclick="go('index.html')">林沛颖《揭阳上河图》</button>
    <button class="pageBtn" onclick="go('pages/liu.html')">刘益杰《潮粥烟火》</button>
    <button class="pageBtn" onclick="go('pages/pei.html')">詹培彦《人间烟火 耕织卷》</button>
    <button class="pageBtn" onclick="go('pages/xu.html')">徐楷泳《慢煮时光 细品家常》</button>
    <button class="pageBtn" onclick="go('pages/hao.html')">陈浩祺《潮音·戏影》</button>
    <button class="pageBtn" onclick="go('pages/linshuo.html')">林烁豪《嵌瓷里的红色征程》</button>
    <button class="pageBtn" onclick="go('pages/he.html')">何浩铭《门映鎏光》</button>
    <button class="pageBtn" onclick="go('pages/wu.html')">吴俊程《榕影金晖》</button>
    <button class="pageBtn" onclick="go('pages/huang.html')">黄志鹏《潮厝夜辉》</button>
    <button class="pageBtn" onclick="go('pages/page5.html')">无《无》</button>
    <button class="pageBtn" onclick="go('pages/page5.html')">无《无》</button>
</div>

<div class="loading-tip">
由于网站部署于GitHub海外服务器，3D模型加载速度会相对缓慢，首次加载约需10秒。实际加载时长，受设备性能与网络环境影响<br>
PS:推荐开启加速器访问效果更佳哦qwq
</div>
`);

function go(path) {
    var encodedPath = encodeURI(path);
    if (window.location.pathname.includes('/pages/')) {
        window.location.href = '../' + encodedPath;
    } else {
        window.location.href = './' + encodedPath;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var m = document.getElementById("menuBtn");
    var s = document.getElementById("sideMenu");
    if (m && s) {
        m.addEventListener("click", function() {
            s.classList.toggle("open");
        });
    }
});