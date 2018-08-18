import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    ListView,
    TouchableOpacity,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

var Homedetail = require('./homedetail');

let { width: winWidth, height: winHeight, scale: winScale } = Dimensions.get('window');
let WH = winHeight / 2295;
let WW = winWidth / 1243;
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
class testz extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Navigator
                initialRoute={{ component: Luyouhome }}
                configureScene={() => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator} />
                }}
            />
        )
    }
}
class Luyouhome extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={{ width: winHeight, backgroundColor: 'rgba(255,255,255,1)' }}>
                <TimerPhoto />
                <ScrollView>
                    <View style={{ width: winWidth, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'haerbin' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'chengdu' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'chaoshan' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'quanzhou' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'nanjing' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'nanchang' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'moluoge' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'haerbin' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'chengdu' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'chaoshan' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
    pushToDetail() {
        this.props.navigator.push(
            {
                component: Homedetail
            }
        )
    }


}

{/*轮播图组件*/ }
class TimerPhoto extends Component {
    constructor() {
        super()
        this.state = {
            currentPage: 0,
        }
    }
    render() {
        return (

            <ScrollView
                ref="ScrollView"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                style={{ height: WH * 584 }}
            >
                <Image source={{ uri: 'lunbof' }} style={{ width: winWidth, height: WH * 584 }} />
                <Image source={{ uri: 'lunbos' }} style={{ width: winWidth, height: WH * 584 }} />
                <Image source={{ uri: 'lunbot' }} style={{ width: winWidth, height: WH * 584 }} />
                <Image source={{ uri: 'lunbofo' }} style={{ width: winWidth, height: WH * 584 }} />
            </ScrollView>
        )
    }
    componentDidMount() {
        this.startTimer();
    }
    onScrollBeginDrag() {
        clearInterval(this.timer)
    }
    onScrollEndDrag() {
        this.startTimer();
    }
    onAnimationEnd(e) {
        let offSetX = e.nativeEvent.contentOffset.x;
        this.setState({
            currentPage: Math.floor(offSetX / winWidth)
        })
    }



    startTimer() {
        let ScrollView = this.refs.ScrollView;
        this.timer = setInterval(() => {
            let activePage = 0;
            if (this.state.currentPage >= 4) {
                activePage = 0;
            } else {
                activePage = this.state.currentPage + 1;
            }
            this.setState({
                currentPage: activePage
            })
            let timerX = activePage * winWidth;
            ScrollView.scrollTo({
                x: timerX,
                animated: true
            })
        }, 2500)
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,1)',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    listViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    innerListView: {
        marginLeft: (winWidth - 584 * WW * 2) / 3,
        marginTop: WH * 15,
    },
    textstyle: {
        fontSize: 48 / 4,
        color: '#ff9cec'
    },
    navsBottom: {
        width: winWidth,
        flex: 1,
        top: 0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(255,255,255,0)',
    }
});
module.exports = testz;