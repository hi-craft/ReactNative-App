
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
var gonglue = require('./gonglue');
var gongluea = require('./gongluea');
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
class zigonglue extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Navigator
                initialRoute={{ component: lue }}
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
class lue extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={{ width: winHeight, backgroundColor: 'rgba(255,255,255,1)', flex: 1 }}>
                <ScrollView>
                    <View style={{ width: winWidth, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'http://p7ik6bm59.bkt.clouddn.com/%E5%93%88%E5%B0%94%E6%BB%A8%E5%A4%A7%E5%89%A7%E9%99%A2.jpg' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetails() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'http://p7ik6bm59.bkt.clouddn.com/%E9%98%B2%E6%B4%AA%E7%BA%AA%E5%BF%B5%E5%A1%94.jpg' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zigongluelistc' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zigongluelistd' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zigonglueliste' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zigongluelistf' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zigongluelistg' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zigongluelisth' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zigongluelisti' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zigongluelista' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zigongluelistb' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zigongluelistc' }} style={{ width: WW * 584, height: WH * 288 }} reszieMode="contain" />
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
                component: gonglue
            }
        )
    }
    pushToDetails() {
        this.props.navigator.push(
            {
                component: gongluea
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
module.exports = zigonglue;
