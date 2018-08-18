import React, {
    Component
} from 'react';
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
var Homedetail = require('./homedetail'); { /*引入路由组件*/ }
import {
    TabNavigator,
    TabBarBottom,
    TabBarTop
} from 'react-navigation';
import {
    Navigator
} from 'react-native-deprecated-custom-components'; { /*颜色渐变组件*/ }
import LinearGradient from 'react-native-linear-gradient'; { /*引入List组件json文件*/ } { /*let ListJson = require('../ListJson.json');*/ } { /*导入路由页面*/ }
let homedetail = require('./homedetail');
import luyouhome from './luyouhome';
import zigonglue from './zigonglue';
import zidaiyou from './zidaiyou';
import zijiaocheng from './zijiaocheng';
import zituijian from './zituijian';
import zizhuyou from './zizhuyou'; { /*获取设备尺寸*/ }
let {
    width: winWidth,
    height: winHeight,
    scale: winScale
} = Dimensions.get('window');
let WH = winHeight / 2295;
let WW = winWidth / 1243;
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'home'
        }
    }
    render() {
        return (

            <Tab />
        )
    }
    pushToDetail() {
        this.props.navigator.push({
            component: Homedetail
        })
    }

}
const Tab = TabNavigator({
    主页: {
        screen: luyouhome
    },
    自攻略: {
        screen: zigonglue
    },
    自助游: {
        screen: zizhuyou
    },
    自带游: {
        screen: zidaiyou
    },
    自推荐: {
        screen: zituijian
    },
    自教程: {
        screen: zijiaocheng
    }
}, {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        tabBarOptions: {
            tabStyle: {
                borderTopWidth: 0,
                borderBottomWidth: 0,
                paddingHorizontal: 0
            },
            labelStyle: {
                borderTopWidth: 0,
                borderBottomWidth: 0,
                paddingHorizontal: 0
            },
            activeTintColor: 'rgba(236,174,62,1)',
            inactiveTintColor: 'rgba(255,255,255,1)',
            style: {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderTopWidth: 0,
                elevation: 0,
                borderBottomWidth: 0,
                paddingHorizontal: 0
            }
        },
        animationEnabled: true,
        swipeEnabled: false,
    }); { /*轮播图组件*/ }
class TimerPhoto extends Component {
    constructor() {
        super()
        this.state = {
            currentPage: 0,
        }
    }
    render() {
        return (

            <ScrollView ref="ScrollView"
                horizontal={
                    true
                }
                showsHorizontalScrollIndicator={
                    false
                }
                pagingEnabled={
                    true
                }
                onMomentumScrollEnd={
                    (e) => this.onAnimationEnd(e)
                }
                style={
                    {
                        height: WH * 584
                    }
                } >
                <Image source={
                    {
                        uri: 'lunbof'
                    }
                }
                    style={
                        {
                            width: winWidth,
                            height: WH * 584
                        }
                    }
                /> <Image source={
                    {
                        uri: 'lunbos'
                    }
                }
                    style={
                        {
                            width: winWidth,
                            height: WH * 584
                        }
                    }
                /> <Image source={
                    {
                        uri: 'lunbot'
                    }
                }
                    style={
                        {
                            width: winWidth,
                            height: WH * 584
                        }
                    }
                /> < Image source={
                    {
                        uri: 'lunbofo'
                    }
                }
                    style={
                        {
                            width: winWidth,
                            height: WH * 584
                        }
                    }
                /> </ScrollView >
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
} { /*列表组件*/ }
class List extends Component {
    constructor(props) {
        super(props)
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.state = {
            dataSource: ds.cloneWithRows(ListJson)
        }

    }
    render() {
        return (<View >
            <ListView dataSource={
                this.state.dataSource
            }
                renderRow={
                    this.renderRow
                }
                contentContainerStyle={
                    styles.listViewStyle
                } >
            </ListView>

        </View>
        )
    }
    renderRow(rowdata, sectionid, rowid, highlightrow) {
        return (<TouchableOpacity activeOpacity={
            0.8
        }
            onPress={
                () => {
                    this.pushToDetail()
                }
            } >
            <View style={
                styles.innerListView
            } >
                <Image source={
                    {
                        uri: rowdata.lists
                    }
                }
                    style={
                        {
                            width: WW * 584,
                            height: WH * 288
                        }
                    }
                /> </View >

        </TouchableOpacity>
        )
    }
    pushToDetail() {
        this.props.navigator.push({
            component: Homedetail
        })
    }
} { /*全局样式*/ }
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