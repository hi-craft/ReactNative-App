
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView,
    TouchableOpacity,
} from 'react-native';
{/*引入渐变色API*/ }
import LinearGradient from 'react-native-linear-gradient';
{/*引入导航API*/ }
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Navigator } from 'react-native-deprecated-custom-components';
{/*引入全局component*/ }
let Dimensions = require('Dimensions');
let { width: winWidth, height: winHeight, scale: winScale } = Dimensions.get('window');
let WH = winHeight / 2295;
let WW = winWidth / 1243;
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
class daiyou extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container} >
                    <View style={{ marginTop: 30, paddingLeft: 100 * WW, paddingRight: 100 * WW }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity onPress={() => { this.popTopHome() }}>
                                <Image source={{ uri: 'zijiaochengh' }} resizeMode='contain' style={{ width: WW * 100, height: WH * 100 }} />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ alignSelf: 'flex-end', fontSize: WW * 53, fontWeight: 'bold', color: 'rgba(72,89,109,1)' }}>新玩法，深度泰国</Text>
                                <Text style={{ fontSize: WW * 28, color: 'rgba(72,89,109,1)' }}>玩成当地人，在普吉岛走走停停</Text>
                            </View>
                        </View>
                        <Image source={{ uri: 'zidaiyoua' }} style={{ height: 1000 * WH }} resizeMode="contain" />
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: 'where' }} style={{ width: WW * 100, height: 130 * WH }} resizeMode="contain" />
                            <Text style={{ fontWeight: 'bold', fontSize: 90 * WW, color: 'rgba(72,89,109,1)' }}>泰国</Text>
                        </View>
                        <Text style={{ marginTop: 10, lineHeight: 30 }}>普吉镇是普吉岛聚集最多当地正宗夜市的地方，所以是体验当地生活必来之地，镇上很多色彩缤纷的建筑，著名的泰朗路（ THALANG ROAD）、罗曼尼巷（ SOI ROMMAND）都是值得一逛的街道{"\n"}普吉镇中有很多中国和葡萄牙特色的多元化老建筑，完好保留了过去商贸发达时的殖民风情。除了老房子，镇子上还有各式老爷车、老式巴士，出镜率也很高.</Text>
                        <Image source={{ uri: 'zijiaochenge' }} style={{ height: 1350 * WH }} resizeMode="contain" />
                        <Image source={{ uri: 'zidaiyoub' }} style={{ height: 1600 * WH }} resizeMode="contain" />
                        <Image source={{ uri: 'zidaiyouc' }} style={{ height: 1000 * WH }} resizeMode="contain" />
                        <Text style={{ fontWeight: 'bold', fontSize: 90 * WW, color: 'rgba(72,89,109,1)' }}>限时开放小岛——洛克岛</Text>
                        <Text style={{ marginTop: 10, lineHeight: 30 }}>因远离大陆以及游客集中的普吉岛，洛克岛一直以来未被游客所
熟知，岛上保持着非常原生态的状态，珊瑚多且绝大多数状兄非
常好，80％以上?湖都是活瑚，每年仅10月ー次年5月半年时间开
放。</Text>
                        <Image source={{ uri: 'zidaiyoud' }} style={{ height: 980 * WH }} resizeMode="contain" />
                        <Text style={{ marginTop: 10, lineHeight: 30 }}>外洺克岛的NASM海湾可看到成群结队的小丑鱼，内洛克岛的
PALONG海湾是观看活瑚的最佳澘水点，大片五彩斑的瑚
绝对让你过目难忘；为了保护?瑚和海洋环境，希望大家不要触摸
珊瑚。</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 90 * WW, color: 'rgba(72,89,109,1)' }}>偶遇海豚小岛——蜜月岛</Text>
                        <Text style={{ marginTop: 10, lineHeight: 30 }}>月岛除了可以体验浮的乐趣外，也是普吉岛近海唯一的野生
海豚栖息地。毎天限制上岛人数，这里能看到海豚的几率是70％。</Text>
                        <Image source={{ uri: 'zidaiyoue' }} style={{ height: 980 * WH }} resizeMode="contain" />
                        <Text style={{ marginTop: 10, lineHeight: 30 }}>选择帆船出海，到达蜜月岛以后先进行浮潜，然后去追寻野生海豚
的踪迹，登陆蜜月岛享用泰式午餐和BBQ，下午会在船上有海钓活
动，船员会为客人制作新鲜的刺身。</Text>
                        <Image source={{ uri: 'zidaiyouf' }} style={{ height: 980 * WH }} resizeMode="contain" />
                        <Text style={{ marginTop: 10, lineHeight: 30 }}>到达蜜月岛可以选择参加一日游，不仅能在帆船上体验海钓和浮
潜，还能享用美味的泰式午餐。在网上预订会比在当地预订更便宜
哦。</Text>
                        <TouchableOpacity><Image source={{ uri: 'zidaiyoug' }} style={{ marginTop: 30, alignSelf: 'center', height: 83 * WH, width: WW * 451 }} resizeMode="contain" /></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
    popTopHome() {
        this.props.navigator.pop();
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

module.exports = daiyou;