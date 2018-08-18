
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
                        color: 'rgba(255,255,255,1)', textAlign: 'center', alignItems: 'center', justifyContent: 'center',
                    }}>
                        消息
                        </Text>

                </LinearGradient>
                <ScrollView>
                    <View style={{ alignItems: 'center', marginTop: WH * 84, }}>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.liebiao}>
                                <Image source={{ uri: 'touxiangu' }} style={styles.touxiangstyle} />
                                <View >
                                    <Text style={{ fontWeight: 'bold', color: 'rgba(66,85,107,1)', fontSize: 40 * WW, marginBottom: 30 * WH }}>
                                        丫丫
                        </Text>
                                    <Text style={{ color: 'rgba(184,184,184,1)', fontSize: 40 * WW }}>
                                        NIHAO
                        </Text>
                                </View>
                                <Text style={{ position: 'absolute', right: WW * 100, top: WH * 150, color: 'rgba(179,179,179,1)' }}>
                                    07:23
                            </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.liebiao}>
                                <Image source={{ uri: 'touxiangv' }} style={styles.touxiangstyle} />
                                <View >
                                    <Text style={{ fontWeight: 'bold', color: 'rgba(66,85,107,1)', fontSize: 40 * WW, marginBottom: 30 * WH }}>
                                        自由人
                        </Text>
                                    <Text style={{ color: 'rgba(184,184,184,1)', fontSize: 40 * WW }}>
                                        什么时候出发
                        </Text>
                                </View>
                                <Text style={{ position: 'absolute', right: WW * 100, top: WH * 150, color: 'rgba(179,179,179,1)' }}>
                                    07:10
                            </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.liebiao}>
                                <Image source={{ uri: 'touxiangw' }} style={styles.touxiangstyle} />
                                <View >
                                    <Text style={{ fontWeight: 'bold', color: 'rgba(66,85,107,1)', fontSize: 40 * WW, marginBottom: 30 * WH }}>
                                        黑大人
                        </Text>
                                    <Text style={{ color: 'rgba(184,184,184,1)', fontSize: 40 * WW }}>
                                        记得过来找我
                        </Text>
                                </View>
                                <Text style={{ position: 'absolute', right: WW * 100, top: WH * 150, color: 'rgba(179,179,179,1)' }}>
                                    06:10
                            </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.liebiao}>
                                <Image source={{ uri: 'touxiangx' }} style={styles.touxiangstyle} />
                                <View >
                                    <Text style={{ fontWeight: 'bold', color: 'rgba(66,85,107,1)', fontSize: 40 * WW, marginBottom: 30 * WH }}>
                                        浪涛
                        </Text>
                                    <Text style={{ color: 'rgba(184,184,184,1)', fontSize: 40 * WW }}>
                                        HEY
                        </Text>
                                </View>
                                <Text style={{ position: 'absolute', right: WW * 100, top: WH * 150, color: 'rgba(179,179,179,1)' }}>
                                    昨天
                            </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.liebiao}>
                                <Image source={{ uri: 'touxiangy' }} style={styles.touxiangstyle} />
                                <View >
                                    <Text style={{ fontWeight: 'bold', color: 'rgba(66,85,107,1)', fontSize: 40 * WW, marginBottom: 30 * WH }}>
                                        海南当地
                        </Text>
                                    <Text style={{ color: 'rgba(184,184,184,1)', fontSize: 40 * WW }}>
                                        没问题
                        </Text>
                                </View>
                                <Text style={{ position: 'absolute', right: WW * 100, top: WH * 150, color: 'rgba(179,179,179,1)' }}>
                                    昨天
                            </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.liebiao}>
                                <Image source={{ uri: 'touxiangu' }} style={styles.touxiangstyle} />
                                <View >
                                    <Text style={{ fontWeight: 'bold', color: 'rgba(66,85,107,1)', fontSize: 40 * WW, marginBottom: 30 * WH }}>
                                        丫丫
                        </Text>
                                    <Text style={{ color: 'rgba(184,184,184,1)', fontSize: 40 * WW }}>
                                        NIHAO
                        </Text>
                                </View>
                                <Text style={{ position: 'absolute', right: WW * 100, top: WH * 150, color: 'rgba(179,179,179,1)' }}>
                                    07:23
                            </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}>
                            <View style={styles.liebiao}>
                                <Image source={{ uri: 'touxiangv' }} style={styles.touxiangstyle} />
                                <View >
                                    <Text style={{ fontWeight: 'bold', color: 'rgba(66,85,107,1)', fontSize: 40 * WW, marginBottom: 30 * WH }}>
                                        自由人
                        </Text>
                                    <Text style={{ color: 'rgba(184,184,184,1)', fontSize: 40 * WW }}>
                                        什么时候出发
                        </Text>
                                </View>
                                <Text style={{ position: 'absolute', right: WW * 100, top: WH * 150, color: 'rgba(179,179,179,1)' }}>
                                    07:10
                            </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    touxiangstyle: {
        height: 250 * WH,
        width: 250 * WW,
        resizeMode: 'contain',
        marginRight: 75 * WW,
        borderRadius: 50

    },
    liebiao: {
        marginBottom: WH * 23,
        width: WW * 1100,
        height: WH * 284,
        backgroundColor: 'rgba(255,255,255,1)',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 32 * WW,
        elevation: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5

    }

});
