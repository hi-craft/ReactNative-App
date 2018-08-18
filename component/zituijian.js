
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
var tuijian = require('./tuijian');
import { Navigator } from 'react-native-deprecated-custom-components';
let { width: winWidth, height: winHeight, scale: winScale } = Dimensions.get('window');
let WH = winHeight / 2295;
let WW = winWidth / 1243;
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
class zituijian extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Navigator
                initialRoute={{ component: jian }}
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
class jian extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={{ width: winWidth, flex: 1, backgroundColor: 'rgba(255,255,255,1)', alignItems: 'center', paddingTop: 20, }}>
                <ScrollView>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { this.pushToDetail() }} >
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 1100 * WW, height: 600 * WH, backgroundColor: 'rgba(99,179,70,1)' }}>
                            <Text style={{ fontSize: 80 * WW, fontWeight: 'bold' }}>觅食</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { this.pushToDetail() }} >
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 1100 * WW, height: 600 * WH, backgroundColor: 'rgba(87,87,166,1)', marginTop: 20, }}>
                            <Text style={{ fontSize: 80 * WW, fontWeight: 'bold' }}>下榻</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { this.pushToDetail() }} >
                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 1100 * WW, height: 600 * WH, backgroundColor: 'rgba(216,105,59,1)', marginTop: 20, }}>
                            <Text style={{ fontSize: 80 * WW, fontWeight: 'bold' }}>探店</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
    pushToDetail() {
        this.props.navigator.push(
            {
                component: tuijian
            }
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,1)',
    },
    innerListView: {
        marginLeft: (winWidth - 584 * WW * 2) / 3,
        marginTop: WH * 15,
    }
});
module.exports = zituijian;