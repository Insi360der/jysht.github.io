文件.身体.insertAdjacentHTML(" afterbegin ", `
<风格>
#menuBtn {
位置:固定；
top:20px；
左:20px
z-index:100000；
背景:# 333；
颜色:# fff
边框:无；
填充:10px 14px
边框-半径:6px
光标:指针；
字体大小:16px
}
。侧菜单{
位置:固定；
top:0；
左:0；
宽度:240像素
身高:100vh
背景:# 222；
z指数:99998;
转换:平移x(-100%)；
转场:0.3秒缓和；
填充:80像素20像素20像素
框大小:边框-框；
}
。sideMenu.open {
转换：平移x(0)；
}
。pageBtn {
显示:块；
宽度:100%；
填充:12px
边距-底部:10px
背景:# 3498db
颜色:白色；
边框:无；
边框-半径:6px
光标:指针；
文本对齐:左对齐；
}
。pageBtn:悬停{
背景:# 2980b9
}
</style >

< button id="menuBtn " >菜单</button >
< div id= "侧面菜单" class= "侧面菜单">
< button class = " page BTN " onclick = " go(' index .html ')" >林沛颖《揭阳上河图》</button >
刘。html ')" >刘益杰《潮粥烟火》</button >
< button class = " page BTN " onclick = " go('第3页. html ')" >詹培彦《人间烟火 耕织卷》</button >
< button class = " page BTN " onclick = " go('第四页。html ')" >徐楷泳《慢煮时光 细品家常》</button >
< button class = " page BTN " onclick = " go('第5页。html ')" >未命名</button >
</div >
`);

功能 去(小路) {
    定义变量 编码路径 = encodeURI(小路);
    如果 (窗户.位置.路径名.包含(/pages/')) {
        窗户.位置.href = '../' + 编码路径;
    } 其他 {
        窗户.位置.href = './' + 编码路径;
    }
}

文件.addEventListener(' DOMContentLoaded ', 功能() {
    定义变量 m = 文件.getElementById("菜单");
    定义变量 s = 文件.getElementById("侧菜单");
    如果 (m && s) {
        m.addEventListener("点击", 功能() {
            s.优等生名单.套索扣("打开");
        });
    }
});
