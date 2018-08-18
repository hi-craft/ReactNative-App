
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
var daiyou = require('./daiyou');
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
class zidaiyou extends Component {
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
                    <View style={{ width: winWidth, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulista' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulistb' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulistc' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulistd' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyouliste' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulistf' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulistg' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulisth' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulisti' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulista' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulistb' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zidaiyoulistc' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
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
                component: daiyou
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
module.exports = zidaiyou;