// 首页导入的页面
import React, {Component} from 'react';
import {Platform, View, Text, Image, TouchableOpacity, TouchableHighlight, StyleSheet, Dimensions,Alert,AsyncStorage} from 'react-native';
import {StackNavigator, DrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import {SignIn} from './component/Sign';
import {House} from './component/House';
import {Edu} from './component/Edu';
import Storage from 'react-native-storage';
let storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
});
global.storage = storage;
global.WEB={
    Action:"https://app.haipaiweisheng.com/jsonAction/",
    IMG:"https://app.haipaiweisheng.com/img/",
    Upload:"https://app.haipaiweisheng.com/",
    AjaxError:"网络超时",
};
const config = {
        topColor: "#4aac78",
        title: "首页",
        label: "Index"
    },
    style = StyleSheet.create({
        warp: {},
        nav: {
            height: 60,
        },
        nav_house: {
            backgroundColor: "#4bae7b"
        },
        nav_edu: {
            backgroundColor: "#49a0bf"
        },
        nav_visa: {
            backgroundColor: "#f1c834"
        },
        nav_tourism: {
            backgroundColor: "#ffb5b6"
        },
        nav_fashion: {
            backgroundColor: "#000"
        },
        nav_business: {
            backgroundColor: "#fca01b"
        },
        white: {
            color: "#ffffff"
        },
        navIcon: {
            width: 30,
            height: 60,
            marginLeft: 20,
        },
        navText: {
            marginLeft: 50,
            lineHeight: 60,
            height: 60,
            position: "absolute",
            color: "#000",
        },
        icon: {
            width: 40,
            height: 40,
        },
        logo: {
            marginTop: 60,
            justifyContent: "center",
            width: Dimensions.get('window').width,
            height: 70,
            flexDirection: "row",
            alignItems: "center",
        },
        logoImage: {
            height: 26,
            resizeMode: "contain",
        },
        backgroundImage: {
            position: "absolute",
            top: 0,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            resizeMode: "contain",
            backgroundColor: 'rgba(0,0,0,0)',
        },
        btns: {
            flexDirection: "row",
            height: 80,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
        },
        btn: {
            height: 80,
            flex: 1,
            justifyContent: "center",
            borderRadius: 5,
            borderColor: "#efc671",
            borderWidth: 1,
            borderStyle: "solid",
            margin: 5,
        },
        btnTop: {
            alignItems: "center",
            height: 35,
            paddingTop: 5,
        },
        btnIcon: {
            position: "absolute",
            left: "50%",
            top: 0,
            marginLeft: -50,
            width: 35,
            height: 35,
        },
        btnTxt: {
            paddingLeft: 35,
            paddingTop: 8,
            color: "#efc671",
            fontSize: 16,
        },
        btnBottom: {
            alignItems: "center",
            height: 30,
        },
        btnDesc: {
            color: "#efc671",
            paddingTop: 10,
            fontSize: 12,
        },
        btns2: {
            height: 100,
            paddingTop: 20,
            marginLeft: 10,
            marginRight: 10,
            flexDirection: "row",
        },
        btn2s: {
            height: 80,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
        },
        btn2: {
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
            borderColor: "#efc671",
            borderWidth: 1,
            borderStyle: "solid",
        },
        btnTxt2: {
            color: "#efc671",
            fontSize: 16,
        },
        leftBtn: {},
        header: {
            paddingTop: 50,
            height: 180,
        },
        userHeaderWarp: {
            height: 76,
            alignItems: "center",
            justifyContent: "center",
        },
        userHeader: {
            width: 76,
            height: 76,
            borderWidth: 1,
            borderColor: "#dddddd",
            borderStyle: "solid",
            borderRadius: 38,
            flex: 1,
            overflow: "hidden",
        },
        sideUserHeaderImg: {
            width: 76,
            height: 76,
            borderRadius: 38,
        },
        userName: {
            textAlign: "center",
            height: 55,
            lineHeight: 55,
        },
        user:{
            marginTop:120,
            marginLeft:20,
            marginRight:20,
            position:"relative",
            marginBottom:20,
        },
        userHeaderImg:{
            width:80,
            height:80,
            borderRadius:40,
            borderColor:"#efc671",
            borderWidth:1,
        },
        userDesc:{
            position:"absolute",
            left:100,
            top:10,
            height:60,
        },
        userDescTxt:{
            height:30,
            lineHeight:30,
            fontSize:18,
            color:"#efc671",
        },


    });

class LeftBtn extends Component {
    render() {
        let image, active = this.props.activekey,
            css = [style.nav],
            txt = [style.navText];
        switch (this.props.to) {
            case "index":
                image = require("./images/nav_index.png");
                break;
            case "house":
                if (active === "House") {
                    image = require("./images/nav_house_2.png");
                    css.push(style.nav_house);
                    txt.push(style.white);
                } else {
                    image = require("./images/nav_house.png");
                }
                break;
            case "edu":
                if (active === "Edu") {
                    image = require("./images/nav_edu_2.png");
                    css.push(style.nav_edu);
                    txt.push(style.white);
                } else {
                    image = require("./images/nav_edu.png");
                }
                break;
            case "tourism":
                if (active === "Tourism") {
                    image = require("./images/nav_tourism_2.png");
                    css.push(style.nav_tourism);
                    txt.push(style.white);
                } else {
                    image = require("./images/nav_tourism.png");
                }
                break;
            case "visa":
                if (active === "Visa") {
                    image = require("./images/nav_visa_2.png");
                    css.push(style.nav_visa);
                    txt.push(style.white);
                } else {
                    image = require("./images/nav_visa.png");
                }
                break;
            case "fashion":
                if (active === "Fashion") {
                    image = require("./images/nav_fashion_2.png");
                    css.push(style.nav_fashion);
                    txt.push(style.white);
                } else {
                    image = require("./images/nav_fashion.png");
                }
                break;
            case "business":
                if (active === "Business") {
                    image = require("./images/nav_business_2.png");
                    css.push(style.nav_business);
                    txt.push(style.white);
                } else {
                    image = require("./images/nav_business.png");
                }
                break;
        };
        return (
            <TouchableOpacity style={style.leftBtn} onPress={this.props.touch}>
                <View style={css}>
                    <Image source={image} style={style.navIcon}/>
                    <Text style={txt}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class CustomDrawerContentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signed: 0,
            userName: "未登录",
            userImageURL: require('./images/toplogo.png'),
        };
    }
    componentWillMount() {
        this.load();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.activeItemKey=="Index") {
            this.load();
        }
    }
    load(){
        storage.load({
            key: "userInfo",
        }).then((userInfo) => {
            if (userInfo.userName) {
                this.setState({
                    signed: 1,
                    userName: userInfo.userName,
                    userPhone: userInfo.userPhone,
                    userImageURL: {uri: WEB.Upload + 'img/' + userInfo.userImageURL},
                });
            } else {
                this.setState({
                    signed: 0,
                    userName: "未登录",
                    userImageURL: require('./images/toplogo.png'),
                });
            }
        }).catch((x) => {
            this.setState({
                signed: 0,
                userName: "未登录",
                userImageURL: require('./images/toplogo.png'),
            });
        });
    }
    render() {
        const {navigate} = this.props.navigation;
        const where = this.state.signed ? 'Index' : 'SignIn';
        return (
            <View>
                <TouchableOpacity style={style.header} touch={() => navigate(where)}>
                    <View style={style.userHeaderWarp}>
                        <View style={style.userHeader}>
                            <Image style={style.sideUserHeaderImg} source={this.state.userImageURL}/>
                        </View>
                    </View>
                    <Text style={style.userName}>{this.state.userName}</Text>
                </TouchableOpacity>
                <LeftBtn text="首页" activekey={this.props.activeItemKey} to="index" touch={() => navigate('Index')}/>
                <LeftBtn text="海派美居" activekey={this.props.activeItemKey} to="house" touch={() => navigate('House')}/>
                <LeftBtn text="海派优学" activekey={this.props.activeItemKey} to="edu" touch={() => navigate('Edu')}/>
            </View>
        );
    }
}

class IndexBtn extends Component {
    render() {
        let image;
        switch (this.props.to) {
            case "house":
                image = require("./images/index_house.png");
                break;
            case "edu":
                image = require("./images/index_edu .png");
                break;
            case "tourism":
                image = require("./images/index_tourism.png");
                break;
            case "visa":
                image = require("./images/index_visa.png");
                break;
            case "fashion":
                image = require("./images/index_fashion.png");
                break;
            case "business":
                image = require("./images/index_business.png");
                break;
        };
        return (
            <TouchableOpacity style={style.btn} onPress={this.props.touch}>
                <View style={style.btnTop}>
                    <Image source={image} style={style.btnIcon}/><Text style={style.btnTxt}>{this.props.text}</Text>
                </View>
                <View style={style.btnBottom}>
                    <Text style={style.btnDesc}>{this.props.desc}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class AccountBtn extends Component {
    render() {
        return (
            <TouchableOpacity style={style.btn2s} onPress={this.props.touch}>
                <View style={style.btn2}>
                    <Text style={style.btnTxt2}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            txt:"11",
            signed:0,
            userName:'',
            userPhone:'',
            userImageURL:'./images/toplogo.png',
        }
    }
    componentWillMount(){
        storage.load({
            key:"userInfo",
        }).then((userInfo)=>{
            if(userInfo.userName){
                this.setState({
                    signed:1,
                    userName:userInfo.userName,
                    userPhone:userInfo.userPhone,
                    userImageURL:WEB.Upload+'img/'+userInfo.userImageURL,
                });
            }
        }).catch((x)=>{});
    }
    componentWillUnmount() {}
    render() {
        let {navigate} = this.props.navigation;
        return (
            <View>
                <Image source={require('./images/mainbg.png')} style={style.backgroundImage}></Image>
                {this.state.signed?<View style={style.user}>
                    <Image style={style.userHeaderImg} source={{uri:this.state.userImageURL}}/>
                    <View style={style.userDesc}>
                        <Text style={style.userDescTxt}>hi~{this.state.userName||this.state.userPhone}</Text>
                        <Text style={style.userDescTxt}>准备好出国了么？</Text>
                    </View>
                </View>:<View style={style.logo}>
                    <Image source={require('./images/logo.png')} style={style.logoImage}/>
                </View>}
                <View style={style.btns}>
                    <IndexBtn touch={() => navigate('House')} to="house" text="海派美居" desc="海外置业 一站服务"/>
                    <IndexBtn touch={() => navigate('Edu')} to="edu" text="海派优学" desc="海外留学 专业解答"/>
                </View>

                <View style={style.btns}>
                    <IndexBtn touch={() => {alert(1)}} to="tourism" text="海派乐活" desc="海外移民 乐享生活"/>
                    <IndexBtn touch={() => {alert(1)}} to="visa" text="海派易游" desc="精品线路 环游世界"/>
                </View>

                <View style={style.btns}>
                    <IndexBtn touch={() => {alert(1)}} to="fashion" text="海派潮流" desc="网购全球 应有尽有"/>
                    <IndexBtn touch={() => {alert(1)}} to="business" text="海派信商" desc="商务合作 服务全球"/>
                </View>
                {this.state.signed?<View></View>:<View style={style.btns2}>
                    <AccountBtn touch={() => {
                        Alert.alert(
                            'Alert Title',
                            'My Alert Msg',
                            [
                                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            { cancelable: false }
                        )
                    }} text="注册"/>
                    <AccountBtn touch={() => {navigate("SignIn")}} text="登录"/>
                </View>}
            </View>
        );
    }
};

const hpws = DrawerNavigator({
    Index: {
        screen: Index
    },
    SignIn:{
        screen:SignIn,
    },
    House: {
        screen: House,
    },
    Edu: {
        screen: Edu,
    }
}, {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'Index',
    drawerWidth: 300,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
        activeTintColor: "#ffffff",
        inactiveTintColor: "#000000",
        activeBackgroundColor: "#ff6600",
    },
    drawerPosition: "left"
});
export default hpws;