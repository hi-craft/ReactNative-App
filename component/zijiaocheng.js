
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
var jiaocheng = require('./jiaocheng');
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
class zijiaocheng extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Navigator
                initialRoute={{ component: cheng }}
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
class cheng extends Component {
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
                                <Image source={{ uri: 'zijiaochenglista' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglistb' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglistc' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglistd' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochengliste' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglistf' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglistg' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglisth' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglisti' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglistj' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglista' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglistb' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglistc' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { this.pushToDetail() }} >
                            <View style={styles.innerListView}>
                                <Image source={{ uri: 'zijiaochenglistd' }} style={{ width: WW * 584, height: WH * 288 }} resizeMode="contain" />
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
                component: jiaocheng
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
module.exports = zijiaocheng;