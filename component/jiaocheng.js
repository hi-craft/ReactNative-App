
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
class Jiaocheng extends Component {
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
                                <Text style={{ alignSelf: 'flex-end', fontSize: WW * 53, fontWeight: 'bold', color: 'rgba(72,89,109,1)' }}>
                                    穿搭
                        </Text>
                                <Text style={{ fontSize: WW * 28, color: 'rgba(72,89,109,1)' }}>
                                    宇宙最帅的旅行方式
                        </Text>
                            </View>
                        </View>
                        <Image source={{ uri: 'zigongluea' }} resizeMode="contain" style={{ height: 745 * WH }} />
                        <Text style={{ fontSize: WW * 80, fontWeight: 'bold', color: 'rgba(72,89,109,1)' }}>穿什么去旅行才不拉低逼格</Text>
                        <Text style={{ lineHeight: 100 * WH }}>
                            出门在外，不时遇到形象糟糕的游客。{"\n"}
                            欧洲小镇里大腹便便穿着彩色沙滩衣的美国大叔；登山却穿长裙戴草帽，束手束脚的女孩。会玩不会穿，真有点可怕。{"\n"}
                            快拿出小本本，今天咱们的FASHION IDOL坏狗要给大家开课——如何就地取材，使你的出游行头轻便又不俗套
                        </Text>
                        <View>
                            <Text>
                                this is shipin
                            </Text>
                        </View>
                        <Image source={{ uri: 'zigonglueb' }} style={{ height: 1000 * WH }} />
                        <Text style={{ lineHeight: 200 * WH, fontSize: WW * 80, fontWeight: 'bold', color: 'rgba(72,89,109,1)' }}>少带衣服多带钞票</Text>
                        <Text style={{ lineHeight: 100 * WH }}>很多人把旅行和时髦分得很开，觉得旅行根本不用收拾自己。这真是一个大大的误解。{"\n"}
                            早在十八世纪，欧洲的壮游者都是贵族子弟，后来这种传统旅行方式也扩展到富有的平民阶层。但他们都是绅士，状游是为了满足求知欲，而他们的行头无一不在彰显自己的品味和格调。{"\n"}
                            如今中国人最爱的时尚奢侈品牌之一路易威登，正是从其设计退出的一款轻便旅行箱而受到青睐的。这两年爆火的PETITE MALLE MONOGRAM小包，也是在向其经典旅行箱设计致敬。{"\n"}
                            在这个问题上，我也曾经奋力地蠢过。从前旅行箱恨不得拖家带口把所有家当都戴上，懒得仔细考虑，懒得细心搭配，一股脑把新置的单品全扔进行李箱，从没想过时髦的问题。
                            </Text>
                        <Image source={{ uri: 'zigongluec' }} style={{ height: WH * 2280 }} />
                        <Text style={{ lineHeight: 200 * WH, fontSize: WW * 80, fontWeight: 'bold', color: 'rgba(72,89,109,1)' }}>只带基本款走天下</Text>
                        <Text style={{ lineHeight: 100 * WH }}>现在想想，旅行中的模样很重要，自我欣赏才能带来好心情。而且，时髦真的不是一件无脑之事，用脑力劳动代替体力劳动才是上乘之举，要诀是：
                        </Text>
                        <View style={{ alignItems: 'center' }}>
                            <Text>基本款</Text>
                            <Text>+</Text>
                            <Text>目的地风格</Text>
                            <Text>=</Text>
                            <Text>好了，出发！</Text>
                        </View>
                        <Image source={{ uri: 'zigonglued' }} style={{ height: 1500 * WH }} resizeMode="contain" />
                        <Text style={{ lineHeight: 200 * WH, fontSize: WW * 80, fontWeight: 'bold', color: 'rgba(72,89,109,1)' }}>重装饰轻装修</Text>
                        <Text style={{ lineHeight: 100 * WH }}>重装饰轻装修，这是家居设计中人尽皆知的概念，也是我的搭配法则：{"\n"}
                            将简单但质地优良的基本款当做硬装，而软装靠细节和配饰来调度。{"\n"}
                            基本款是衣柜中的核心单品，不必每次旅行都另外添置；基本款可调度性极强，本身无显著风格，所谓风格，全屏搭配赋予</Text>
                        <Image source={{ uri: 'zigongluee' }} style={{ height: 1080 * WH }} resizeMode="contain" />
                        <Text style={{ lineHeight: 100 * WH }}>重装饰轻装修，这是家居设计中人尽皆知的概念，也是我的搭配法则：{"\n"}
                            将简单但质地优良的基本款当做硬装，而软装靠细节和配饰来调度。{"\n"}
                            基本款是衣柜中的核心单品，不必每次旅行都另外添置；基本款可调度性极强，本身无显著风格，所谓风格，全屏搭配赋予</Text>
                        <Image source={{ uri: 'zigongluef' }} style={{ height: 1144 * WH }} resizeMode="contain" />
                        <Text style={{ lineHeight: 100 * WH }}>白衬衫的质地和款式的区别，本身就有不同意味。衬衫的材质，从阮道硬：真丝、雪纺、麻、棉、牛津纺。{"\n"}
                            真丝最优雅，最能体现女性柔和的线条美，但不推荐BF风的真丝衬衫，垂坠感太强反而没了精神。另外真丝需要保养，遇汗易发黄，在旅行中穿略肉痛。牛津纺最硬挺，英伦风绝佳单品，但是洗涤比较难干。{"\n"}
                            相较之下，麻料吸汗排汗，最适合旅行，连褶皱都有几分慵懒闲适的度假气息，宽松的衬衫太能藏肉了，建议像我一样苹果型身材的姑娘能多入几件。</Text>
                        <Image source={{ uri: 'zigonglueg' }} style={{ height: 1516 * WH }} resizeMode="contain" />
                        <Text style={{ lineHeight: 100 * WH }}>去年夏天，我想出了一个非常变态的计划。按照54321的收纳原则，我带了5件衬衫，4件下装，3条薄外套，2双鞋和1个包，打算在旅行期间轮番穿着他们，尝试尽可能多的搭配。旅途从加州出发，途径纽约，抵达伦敦和罗马，历时三周</Text>
                        <Image source={{ uri: 'zigonglueh' }} style={{ height: 1100 * WH }} resizeMode="contain" />
                        <Text style={{ lineHeight: 100 * WH }}>在美国环西线公路，我穿着一件麻料衬衫，配高腰牛仔裤，再披一件的鹿皮马甲，和永远灿烂的加州阳光天然融合，脑海里单曲循环《IT NEVER RAINS IN SOUTHERN CALIFORNIA》。{"\n"}
                            在纽约，BODYSUIT加长款衬衫当外套，配上灰色的SKINNYSCARF。虽然这一身不够QUEENB，但走在曼哈顿的街头也不至于心虚。{"\n"}
                            在伦敦，为了使英伦范更足一些，我在衬衫领口搭了一个长领结。伦敦的阴冷天气风衣还是可以传到六月，感冒一次拖拉半个月才能好，出门前我还是披上了风衣。跨上剑桥包，此行所带唯一的包包，我发现他意外地百搭。</Text>
                        <Image source={{ uri: 'zigongluei' }} style={{ height: 1666 * WH }} resizeMode="contain" />
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
module.exports = Jiaocheng;