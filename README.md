# jysht.github.io
## index.html
### 加载模型弹窗---68
```bash
<div class="loading" id="loading">正在加载模型...</div>
```
### 

```bash
loadModel("./主图.glb");
```
### 模型切换按钮---72--可添加新增
```bash
<div class="model-buttons">
    <button class="model-btn active" data-model="./主图.glb">模型 1</button>
    <button class="model-btn" data-model="./分割1.glb">模型 2</button>
    <button class="model-btn" data-model="./分割2.glb">模型 3</button>
    <button class="model-btn" data-model="./分割3.glb">模型 4</button>
</div>
```

## global-menu.js
### 菜单健---85--可添加新增

```bash
<button id="menuBtn">菜单</button>
<div id="sideMenu" class="sideMenu">
    <button class="pageBtn" onclick="go('pages/page5.html')">无《无》</button>
    <button class="pageBtn" onclick="go('pages/page5.html')">无《无》</button>
    <button class="pageBtn" onclick="go('pages/page5.html')">无《无》</button>
```

### 菜单健底下二维码---101

```bash
<!-- 菜单底部二维码 -->
    <div class="qrcode-box">
        <img src="images/二维码.jpg" alt="联系二维码" />
        <span>投稿上传 扫码联络</span>
    </div>
```

### 提示栏---108

```bash
<div class="loading-tip">
由于网站部署于GitHub海外服务器，3D模型加载速度会相对缓慢，首次加载约需10秒。实际加载时长受设备性能与网络环境影响<br>
PS:若遇到模型画面重叠问题，刷新页面即可<br>
PS:推荐开启加速器访问效果更佳哦qwq
</div>
```

## 扫码访问网站
## <a href="https://insi360der.github.io/jysht.github.io" target="_blank">点击访问3D模型主页</a>
<img src="二维码.png" alt="网站二维码" />
## 扫码联系
<img src="images/二维码.jpg" alt="联系二维码" />


## 

**粗体**  *斜体*  ~~删除线~~

- 无序列表111
- 无序列表2222
1. 有序列表1111
2. 有序列表2222
3. 
```代码块```

> 引用文本
