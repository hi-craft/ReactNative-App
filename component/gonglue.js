
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
import VideoControls from 'react-native-video-controls'
{/*引入渐变色API*/ }
import LinearGradient from 'react-native-linear-gradient';
{/*引入导航API*/ }
import TabNavigator from 'react-native-tab-navigator';
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
class gonglue extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container} >
                    <View style={{ paddingTop: 80 * WH, paddingLeft: 100 * WW, paddingRight: 100 * WW }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between'
                        }}>
                            <TouchableOpacity onPress={() => { this.popTopHome() }}>
                                <Image source={{ uri: 'zijiaochengh' }} resizeMode='contain' style={{ width: WW * 100, height: WH * 100 }} />
                            </TouchableOpacity>

                            <View>
                                <Text style={{ alignSelf: 'flex-end', fontSize: WW * 53, fontWeight: 'bold', color: 'rgba(72,89,109,1)' }}>
                                    哈尔滨
                        </Text>
                                <Text style={{ fontSize: WW * 28, color: 'rgba(72,89,109,1)' }}>
                                    绕开三亚，玩转哈尔滨
                        </Text>
                            </View>
                        </View>
                        <Image source={{ uri: 'zijiaochengf' }} resizeMode="contain" style={{ height: 820 * WH }} />
                        <Image source={{ uri: 'zijiaochenge' }} resizeMode="contain" style={{ height: 1024 * WH }} />
                        <View style={{ width: winWidth * 0.8, height: 800 * WH, justifyContent: 'center', alignItems: 'center' }}>
                            <VideoControls source={{ uri: "http://p7ik6bm59.bkt.clouddn.com/%E5%93%88%E5%B0%94%E6%BB%A8%E5%A4%A7%E5%89%A7%E9%99%A2.mp4" }}
                                disableBack={true}
                                disableTimer={true}
                                disableVolume={true}
                                showOnStart={false}
                                toggleResizeModeOnFullscreen={false}
                                resizeMode="cover"
                                paused={true}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 114 * WH, }}>
                            <Image source={{ uri: 'zijiaochengg' }} resizeMode="contain" style={{ height: 114 * WH, width: 100 * WW }} />

                            <Text style={{ fontSize: 80 * WW, color: 'rgba(99,179,70,1)' }}>哈尔滨</Text>
                        </View>
                        <Text style={{ color: 'rgba(72,89,109,1)', fontSize: 40 * WW, lineHeight: 70 * WH }}>之前咱们一篇《十大旅行失望之城》引起了大家的热议，有些读者跑来说，如果失望那就不要出来旅行啊！玻璃心真可怕，碎成渣势必到处扎。{"\n"}讲真，老艺术家可从从来不是只破不立的。最近我在召集一帮好友，准备搞一个值得推荐的国内目的地专题，前两天推送的《去云南，绕开大理和丽江！》就是其中之一。今天呢，我的朋友莎士比亚要为被黑出天际的哈尔滨小小正一下名：哈尔滨也有值得一去的地方，关键是，你懂不懂经！</Text>
                        <Image source={{ uri: 'zijiaochenga' }} resizeMode="contain" style={{ height: 1100 * WH }} />
                        <Text style={{ alignSelf: 'center', color: 'rgba(72,89,109,1)', fontSize: 48 * WW, fontWeight: 'bold' }}>別去亚龙湾了，去万宁石梅湾吧。</Text>
                        <Text style={{ color: 'rgba(72,89,109,1)', fontSize: 48 * WW, lineHeight: 80 * WH, marginTop: 30 * WH }}>被誉为“天下第一湾”的亚龙湾，沙滩平缓宽阔，沙子洁白细软，海水清澈湛蓝。可是，作为海南岛最早开发的沙滩之一，这里早已成为高档酒店的聚集地，每逢节假日，下海玩水就如下锅煮佼子，眼前涌涌不知道是人浪还是海浪。{"\n"}同样是碧海银滩，石梅湾宁静开阔，背靠山丘，由于地理位置离最早开发的三亚有一段距离，即使是旅游黄金时段，游客也远远没有亚龙湾多，想要住豪华度假酒店这里也能满足你。{"\n"}更完美的是，你可以在沙滩上看日落，椰树的剪影再加上橙红的云彩，绝对能够俘获你的心。石梅湾是《非诚勿扰2》取景的其中一个地方，现在免费开放，但这福利可能不久之后就消失了</Text>
                        <Image source={{ uri: 'zijiaochengb' }} resizeMode="contain" style={{ height: 1896 * WH }} />
                        <Text style={{ alignSelf: 'center', color: 'rgba(72,89,109,1)', fontSize: 48 * WW, fontWeight: 'bold' }}>別去热带天堂森林公园了，去五指山吧。</Text>
                        <Text style={{ color: 'rgba(72,89,109,1)', fontSize: 48 * WW, lineHeight: 80 * WH, marginTop: 30 * WH }}>被誉为“天下第一湾”的亚龙湾，沙滩平缓宽阔，沙子洁白细软，海水清澈湛蓝。可是，作为海南岛最早开发的沙准之一，这里早已成为高档酒店的聚集地，每逢节假日，下海玩水就如下锅煮饺子，眼前涌涌不知道是人浪还是海浪。{"\n"}同样是碧海银滩，石梅湾宁静开阔，背靠山丘，由于地理位置离最早开发的三亚有一段距离，即使是旅游黄金时段，游客也远远没有亚龙湾多，想要住豪华度假酒店这里也能满足你。{"\n"}更完美的是，你可以在沙滩上看日落，椰树的剪影再加上橙红的云彩，绝对能够俘获你的心。石梅湾是《非诚勿扰2》取景的其中一个地方，现在免费开放，但这福利可能不久之后就消失了。</Text>
                        <Image source={{ uri: 'zijiaochengc' }} resizeMode="contain" style={{ height: 736 * WH }} />
                        <Text style={{ alignSelf: 'center', color: 'rgba(72,89,109,1)', fontSize: 48 * WW, fontWeight: 'bold' }}>別去凤凰岭了，去文昌铜鼓吧。</Text>
                        <Text style={{ color: 'rgba(72,89,109,1)', fontSize: 48 * WW, lineHeight: 80 * WH, marginTop: 30 * WH }}>三亚的凤凰岭，能够俯瞰三亚四大海湾以及整个城市的风貌。它配备了先进的索道，加上山顶上有各种适合拍婚纱照的人造景观，吸引了一拨游客。不过，很多人会觉得，人造景观是什么鬼！{"\n"}文昌的铜鼓岭是一个同样能够让你体会登高望远快感的地方。它位于海南的最东角，在这里你可以鸟瞰附近的海滩，看到月亮湾的全景，弯弯的海岸，加上碧绿的树林，湛蓝的海岸。可惜的是，这个景点原本免费开放，最近已经紧锣密鼓准备开始收费管理了。</Text>
                        <Image source={{ uri: 'zijiaochengd' }} resizeMode="contain" style={{ height: 896 * WH }} />
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
module.exports = gonglue;