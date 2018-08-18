
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image,
    Text, ScrollView, TouchableOpacity
} from 'react-native';
import Video from 'react-native-video'
import VideoControls from 'react-native-video-controls'
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

class Homedetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ width: winWidth, height: winHeight * 0.5 }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10, padding: 10
                        }}>
                            <TouchableOpacity onPress={() => { this.popTopHome() }}>
                                <Image source={{ uri: 'zijiaochengh' }} resizeMode='contain' style={{ width: WW * 100, height: WH * 100 }} />
                            </TouchableOpacity>

                            <View>
                                <Text style={{ alignSelf: 'flex-end', fontSize: WW * 73, fontWeight: 'bold', color: 'rgba(72,89,109,1)' }}>
                                    视频
                        </Text>
                            </View>
                        </View>
                        <VideoControls source={{ uri: "http://p7ik6bm59.bkt.clouddn.com/%E7%B4%A2%E8%8F%B2%E4%BA%9A%E6%95%99%E5%A0%82.mp4" }}
                            disableBack={true}
                            disableTimer={true}
                            disableVolume={true}
                            showOnStart={false}
                            toggleResizeModeOnFullscreen={false}
                            resizeMode="cover"
                            paused={true}
                        />
                    </View>
                    <Image source={{ uri: 'http://p7ik6bm59.bkt.clouddn.com/%E7%B4%A2%E9%9D%9E%E4%BA%9A%E6%95%99%E5%A0%82.jpg' }} style={{ width: winWidth * 0.8, height: winHeight * 0.3, alignSelf: 'center' }} resizeMode="contain" />
                    <View style={{ width: winWidth, marginTop: 10, height: winHeight * 0.2 }}>
                        <Text style={{ fontWeight: 'bold', margin: 10, fontSize: 90 * WW, color: 'rgba(72, 89, 109, 1)', alignSelf: 'center' }}>
                            音频
                        </Text>
                        <VideoControls source={{ uri: "http://p7ik6bm59.bkt.clouddn.com/%E7%B4%A2%E9%9D%9E%E4%BA%9A%E6%95%99%E5%A0%82.mp3" }}
                            disableBack={true}
                            disableFullscreen={true}
                            disableVolume={true}
                            showOnStart={false}
                            resizeMode="cover"
                            paused={true}
                            poster="http://p7ik6bm59.bkt.clouddn.com/%E7%B4%A2%E9%9D%9E%E4%BA%9A%E6%95%99%E5%A0%82.jpg"
                            posterResizeMode="cover"
                        />
                    </View>
                </ScrollView>

            </View>
        );
    }
    popTopHome() {
        this.props.navigator.pop();
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
module.exports = Homedetail;
