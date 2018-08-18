
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
class tuijian extends Component {
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
                                <Text style={{ alignSelf: 'flex-end', fontSize: WW * 53, fontWeight: 'bold', color: 'rgba(72,89,109,1)' }}>觅食</Text>
                                <Text style={{ fontSize: WW * 28, color: 'rgba(72,89,109,1)' }}>有趣店铺推荐</Text>
                            </View>
                        </View>
                        <Image source={{ uri: 'zituijianlista' }} resizeMode='contain' style={{ width: winWidth * 0.8, height: WH * 388, marginTop: 10 }} />
                        <Image source={{ uri: 'zituijianlistb' }} resizeMode='contain' style={{ width: winWidth * 0.8, height: WH * 388, marginTop: 10 }} />
                        <Image source={{ uri: 'zituijianlistc' }} resizeMode='contain' style={{ width: winWidth * 0.8, height: WH * 388, marginTop: 10 }} />
                        <Image source={{ uri: 'zituijianlistd' }} resizeMode='contain' style={{ width: winWidth * 0.8, height: WH * 388, marginTop: 10 }} />
                        <Image source={{ uri: 'zituijianliste' }} resizeMode='contain' style={{ width: winWidth * 0.8, height: WH * 388, marginTop: 10 }} />
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

module.exports = tuijian;