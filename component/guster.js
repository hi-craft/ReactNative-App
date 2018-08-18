
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    ListView,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
let { width: winWidth, height: winHeight, scale: winScale } = Dimensions.get('window');
let WH = winHeight / 2295;
let WW = winWidth / 1243;
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


export default class Information extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#ff006f', '#792197']}
                    style={{
                        width: winWidth,
                        paddingLeft: WW * 84,
                        paddingRight: WW * 84,
                        paddingTop: WH * 67,
                    }} >



                    <Text style={{
                        color: 'rgba(255,255,255,1)', textAlign: 'center', alignItems: 'center', justifyContent: 'center'
                    }}>
                        我的
                        </Text>

                </LinearGradient>
                <View style={{ marginTop: 150 * WH }}>
                    <View style={{ flexDirection: 'row', marginLeft: 100 * WW, }}>
                        <Image source={{ uri: 'touxiang' }} style={{ marginRight: 30 * WW, width: WW * 250, height: WH * 250, resizeMode: 'contain' }} />
                        <View style={{ marginTop: 85 * WH }}>
                            <Text style={{ color: 'rgba(66,85,107,1)' }}>
                                WANGYUE
                                </Text>
                            <View style={{ flexDirection: 'row', marginTop: 45 * WH, }}>
                                <Image source={{ uri: 'eyes' }} style={{ width: WW * 60, height: WH * 60, marginRight: 20 * WW, resizeMode: 'contain' }} />
                                <Text style={{ color: 'rgba(66,85,107,1)' }}>
                                    1556
                                   </Text>
                                <Image source={{ uri: 'great' }} style={{ width: WW * 60, height: WH * 60, marginRight: 20 * WW, resizeMode: 'contain', marginLeft: 26 * WW }} />
                                <Text style={{ color: 'rgba(66,85,107,1)' }}>
                                    2264
                                   </Text>
                                <Image source={{ uri: 'people' }} style={{ width: WW * 60, height: WH * 60, marginRight: 20 * WW, resizeMode: 'contain', marginLeft: 26 * WW }} />
                                <Text style={{ color: 'rgba(66,85,107,1)' }}>
                                    64
                                   </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 80 * WH, alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.viewstyle}>
                                <Image source={{ uri: 'where' }} style={styles.mestyle} />
                                <Text style={styles.colorstyle}>行程</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.viewstyle}>
                                <Image source={{ uri: 'add' }} style={styles.mestyle} />
                                <Text style={styles.colorstyle}>上传</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.viewstyle}>
                                <Image source={{ uri: 'meadd' }} style={styles.mestyle} />
                                <Text style={styles.colorstyle}>关注</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.viewstyle}>
                                <Image source={{ uri: 'star' }} style={styles.mestyle} />
                                <Text style={styles.colorstyle}>收藏</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.viewstyle}>
                                <Image source={{ uri: 'shorttext' }} style={styles.mestyle} />
                                <Text style={styles.colorstyle}>收件箱</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.viewstyle}>
                                <Image source={{ uri: 'setting' }} style={styles.mestyle} />
                                <Text style={styles.colorstyle}>设置</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.viewstyle}>
                                <Image source={{ uri: 'listen' }} style={styles.mestyle} />
                                <Text style={styles.colorstyle}>发送反馈</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    mestyle: {
        width: WW * 60,
        height: WH * 95,
        marginRight: 100 * WW,
        resizeMode: 'contain'
    },
    colorstyle: {
        fontWeight: 'bold',
        fontSize: WW * 50,
        alignSelf: 'center',
    },
    viewstyle: {
        flexDirection: 'row',
        width: winWidth * 0.8,
        borderBottomWidth: 0.8,
        borderBottomColor: 'gray',
        padding: 40 * WH
    }

});
