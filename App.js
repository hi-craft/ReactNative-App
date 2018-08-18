/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import TabNavigator from 'react-native-tab-navigator';
import { Navigator } from 'react-native-deprecated-custom-components';
{/*引入全局component*/ }
import Home from './component/home';
import Information from './component/information';
import Guster from './component/guster';
import home from './component/home';
let tabBarHeight = 0;
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


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'home'
        }
    }

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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: '#ffecff', fontSize: 48 / 3.5, }}>
                            哈尔滨
                    </Text>
                        <TouchableOpacity>
                            <Image source={{ uri: 'search' }} style={{ width: WH * 75, height: WH * 75 }} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#ff006f', '#792197']}
                    style={{
                        width: winWidth, flex: 1, paddingHorizontal: 0, borderWidth: 0,
                        elevation: 0
                    }} >
                    <TabNavigator shadowHidden={true} tabBarStyle={styles.navsBottom}
                        sceneStyle={{ bottom: 10, overflow: 'hidden', paddingHorizontal: 0, borderWidth: 0, elevation: 0 }}
                    >
                        <TabNavigator.Item
                            renderIcon={() => <Image source={{ uri: 'information' }} style={styles.iconStyle} />}
                            renderSelectedIcon={() => <Image source={{ uri: 'Informationactive' }} style={styles.iconStyle} />}
                            onPress={() => { this.setState({ selectedTab: 'information' }) }}
                            selected={this.state.selectedTab === 'information'}
                            style={{ backgroundColor: 'black', borderWidth: 10, }}
                        >
                            <Information />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            renderIcon={() => <Image source={{ uri: 'home' }}
                                style={styles.iconStyle} />}
                            renderSelectedIcon={() => <Image source={{ uri: 'homeactive' }} style={styles.iconStyle} />}
                            onPress={() => { this.setState({ selectedTab: 'home' }) }}
                            selected={this.state.selectedTab === 'home'}
                        >
                            <Home />
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            renderIcon={() => <Image source={{ uri: 'guster' }}
                                style={styles.iconStyle} />}
                            renderSelectedIcon={() => <Image source={{ uri: 'gusteractive' }} style={styles.iconStyle} />}
                            onPress={() => { this.setState({ selectedTab: 'Guster' }) }}
                            selected={this.state.selectedTab === 'Guster'}
                        >
                            <Guster />
                        </TabNavigator.Item>
                    </TabNavigator>
                </LinearGradient >

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF', paddingHorizontal: 0, borderWidth: 0,
        elevation: 0

    },
    iconStyle: {
        width: WW * 84,
        height: WH * 90
    },
    navsBottom: {
        width: winWidth,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(255,255,255,0)',
        paddingHorizontal: 0, borderWidth: 0,
        borderColor: 'rgba(255,255,255,0)',
        elevation: 0,

    }
});
{/*
<Navigator
                            initialRoute={{ component: home }}
                            configureScene={() => {
                                return Navigator.SceneConfigs.HorizontalSwipeJump;
                            }}
                            renderScene={(route, navigator) => {
                                let Component = route.component;
                                return <Component {...route.passProps} navigator={navigator} />
                            }}
                        />*/}