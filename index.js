import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

/*
* props:
* mainStyle: 主视图样式 {'backgroundColor': 'white'}
* title: 标题，可不填
* titleStyle: 标题样式 {}
* content: 内容，可不填
* contentStyle: 内容样式 {}
* image: 图片对象 require('./')
* imageWidth: 图片宽
* imageHeight: 图片高
*
* func:
* tapStatusViewAction: 点击StatusView事件
*
* export func:
* modifyShowStatusView(data = {}): 更改显示的视图, {title = '', titleStyle = {}, content = '', contentStyle = {}, image = {}, imageWidth = 0, imageHeight = 0}
* */
export default class CustomStatusView extends Component{

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
    }

    componentDidMount() {
        if (this.props.evaluateView) this.props.evaluateView(this);
    }
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /*
    * 初始化参数
    * */
    initializeParams = () => {
        const { title = '', content = '', image = null, imageWidth = 0, imageHeight = 0, titleStyle = null, contentStyle = null } = this.props;
        this.state = {
            title: title,
            titleStyle: titleStyle,
            content: content,
            contentStyle: contentStyle,
            image: image,
            imageWidth: imageWidth,
            imageHeight: imageHeight
        }
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /*
    * 更改显示的视图
    * {title = '', titleStyle = {}, content = '', contentStyle = {}, image = {}, imageWidth = 0, imageHeight = 0}
    * */
    modifyShowStatusView = (data) => {
        this.setState({
            title: data['title'] ? data['title'] : this.state.title,
            titleStyle: data['titleStyle'] ? data['titleStyle'] : this.state.titleStyle,
            content: data['content'] ? data['content'] : this.state.content,
            contentStyle: data['contentStyle'] ? data['contentStyle'] : this.state.contentStyle,
            image: data['image'] ? data['image'] : this.state.image,
            imageWidth: (typeof data['imageWidth'] != 'undefined') ? data['imageWidth'] : this.state.imageWidth,
            imageHeight: (typeof data['imageHeight'] != 'undefined') ? data['imageHeight'] : this.state.imageHeight
        });
    }
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
    //中间视图点击事件
    _tapAction = () => {
        if (this.props.tapStatusViewAction) this.props.tapStatusViewAction();
    }


    render() {
        const { title, content, image, imageWidth, imageHeight, titleStyle, contentStyle } = this.state;

        let titleStyles = [{
            fontSize: 16,
            color: '#000000',
            fontFamily: 'PingFangSC-Medium',
            textAlign: 'center',
            marginTop: 10
        }];
        if (titleStyle) titleStyles.push(titleStyle);
        let contentStyles = [{
            fontSize: 13,
            color: '#C0C0C0',
            fontFamily: 'PingFangSC-Regular',
            textAlign: 'center',
            marginTop: 2
        }];
        if (contentStyle) contentStyles.push(contentStyle);

        return (
            <View style={[styles.MainView]}>
                <TouchableOpacity onPress={this._tapAction}>
                    <View style={[{justifyContent: 'center', alignItems: 'center'}]}>
                        {
                            image ? (
                                <Image style={[{width: imageWidth, height: imageHeight}]} source={image}/>
                            ) : null
                        }
                        {
                            title.length > 0 ? (
                                <Text style={titleStyles}>{title}</Text>
                            ) : null
                        }
                        {
                            content.length > 0 ? (
                                <Text style={contentStyles}>{content}</Text>
                            ) : null
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        backgroundColor: 'white'
    }
})