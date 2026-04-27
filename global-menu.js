document.body.insertAdjacentHTML("afterbegin", `
<style>
#menuBtn {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 100000;
    background: #333;
    color: #fff;
    border: none;
    padding: 10px 14px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
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
</style>

<button id="menuBtn">菜单</button>
<div id="sideMenu" class="sideMenu">
    <button class="pageBtn" onclick="go('index.html')">林沛颖《揭阳上河图》</button>
    <button class="pageBtn" onclick="go('pages/liu.html')">刘益杰《潮粥烟火》</button>
    <button class="pageBtn" onclick="go('page3.html')">詹培彦《人间烟火 耕织卷》</button>
    <button class="pageBtn" onclick="go('page4.html')">徐楷泳《慢煮时光 细品家常》</button>
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