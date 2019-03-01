
## Manual installation

npm install react-native-cz-statusview --save

	

## Usage
###  1.引入组件
```
import StatusView from "react-native-cz-statusview";
```

###  2.属性:
```
mainStyle: 主视图样式 {'backgroundColor': 'white'}
```
```
title: 标题，可不填
```
```
titleStyle: 标题样式 {}
```
```
content: 内容，可不填
```
```
contentStyle: 内容样式 {}
```
```
image: 图片对象 require('./')
```
```
imageWidth: 图片宽
```
```
imageHeight: 图片高
```
###  3.属性方法:
```
tapStatusViewAction: 点击StatusView事件
```
###  4.供外部调用的方法:
```
modifyShowStatusView(data = {}): 更改显示的视图, {title = '', titleStyle = {}, content = '', contentStyle = {}, image = {}, imageWidth = 0, imageHeight = 0}
```

