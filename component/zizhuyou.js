
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
var zhuyou = require('./zhuyou');
var zhuyoua = require('./zhuyoua');
var zhuyoub = require('./zhuyoub');
var zhuyouc = require('./zhuyouc');
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
class zizhuyou extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Navigator
                initialRoute={{ component: you }}
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
class you extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={{ width: winWidth, flex: 1, backgroundColor: 'rgba(255,255,255,1)' }}>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetaila() }} >
                            <View style={styles.innerListView} >
                                <Image source={{ uri: 'zizhuyoulista' }} style={{
                                    width: WW * 1000, height: WH * 360
                                }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetailb() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zizhuyoulistb' }} style={{ width: WW * 1000, height: WH * 360 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetailc() }} >
                            <View style={styles.innerListView} >
                                <Image source={{ uri: 'zizhuyoulistc' }} style={{
                                    width: WW * 1000, height: WH * 360
                                }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView} >
                                <Image source={{ uri: 'zizhuyoulistd' }} style={{
                                    width: WW * 1000, height: WH * 360
                                }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView} >
                                <Image source={{ uri: 'zizhuyouliste' }} style={{
                                    width: WW * 1000, height: WH * 360
                                }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView} >
                                <Image source={{ uri: 'zizhuyoulistf' }} style={{
                                    width: WW * 1000, height: WH * 360
                                }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView} >
                                <Image source={{ uri: 'zizhuyoulistg' }} style={{
                                    width: WW * 1000, height: WH * 360
                                }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView} >
                                <Image source={{ uri: 'zizhuyoulisth' }} style={{
                                    width: WW * 1000, height: WH * 360
                                }} resizeMode="contain" />
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
                component: zhuyou
            }
        )
    }
    pushToDetaila() {
        this.props.navigator.push(
            {
                component: zhuyoua
            }
        )
    }
    pushToDetailb() {
        this.props.navigator.push(
            {
                component: zhuyoub
            }
        )
    }
    pushToDetailc() {
        this.props.navigator.push(
            {
                component: zhuyouc
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
        marginTop: WH * 30,
    }
});
module.exports = zizhuyou;