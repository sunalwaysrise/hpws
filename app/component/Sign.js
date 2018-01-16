import React, {Component} from 'react';
import {Platform, View, Text, Image, TouchableOpacity, TouchableHighlight, StyleSheet, Dimensions,TextInput,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Util} from './Common';
import axios from 'axios';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
const style = StyleSheet.create({
    backgroundImage: {
        position: "absolute",
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: "contain",
        backgroundColor: 'rgba(0,0,0,0)',
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
    mt60:{
        marginTop:60,
    },
    line:{
        height:60,
        marginLeft:20,
        marginRight:20,
        borderBottomWidth:1,
        borderBottomColor:"#efc671",
    },
    icon:{
        marginLeft:10,
        marginRight:10,
        marginTop:15,
        width:30,
        height:30,
        color:"#efc671",
        fontSize:36,
    },
    iconRight:{
        position:"absolute",
        right:15,
        top:15,
        width:30,
        height:30,
        color:"#efc671",
        fontSize:30
    },
    input:{
        position:"absolute",
        left:40,
        top:0,
        height:60,
        right:0,
        padding:0,
        color:"#efc671",
        fontSize:16
    },
    tips:{
        paddingLeft:30,
        paddingTop:10,
    },
    tipsTxt:{
        fontSize:14,
        color:"#6a91e2"
    },
    btn:{
        height:45,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"#efc671",
        borderRadius:5,
        marginTop:40,
        alignItems:"center",
    },
    btnTxt:{
        lineHeight:40,
        color:"#000",
        fontSize:18,
    },
    navto:{
        paddingTop:40,
        alignItems:"center",
    },
    navtoTxt:{
        color:"#efc671",
        lineHeight:20,
        height:20,
    }
});

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            secureTextEntry:true,
            password:"111111",
            mobile:"18258128870",
        };
        this.toggleEye=this.toggleEye.bind(this);
        this.signIn=this.signIn.bind(this);

    }
    setPassword(e){
        this.setState({
            password: e
        });
    }
    setMobile(val){
        this.setState({
            mobile: val
        });
    }
    toggleEye(){
        this.setState((prevState,props) => ({
            secureTextEntry:!prevState.secureTextEntry
        }));
    }
    signIn(){
        const {navigate} = this.props.navigation;
        if(!new Util().isMobile(this.state.mobile)){
            return Alert.alert('注意','请输入合法的手机号',[{text:"知道了"}]);
        }else if(!this.state.password){
            return Alert.alert('注意','请输入密码',[{text:"知道了"}]);
        }else{
            let params={
                "userBean.userPwd":this.state.password,
                "userBean.userID":this.state.mobile,
            };
            const CancelToken = axios.CancelToken;
            this.ajaxKey = CancelToken.source();
            axios({
                url:WEB.Action+'login_applogin.action',
                method:"post",
                timeout: 3000,
                data:params,
                transformRequest: [function (data) {
                    let ret = []
                    for (let it in data) {
                        ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]));
                    }
                    return ret.join('&');
                }],
                cancelToken: this.ajaxKey.token
            }).then((res)=>{
                res=res.data;
                if(res.statusCode=="200"){
                    storage.save({
                        key:"userInfo",
                        data:res.User
                    });
                    navigate("Index");
                }else{
                    Alert.alert('登录失败',res.message,[{text:"知道了"}]);
                }
            }).catch((error)=>{
                try{
                    Alert.alert('登录失败',error.response.data.message,[{text:"知道了"}]);
                }catch(e){
                    Alert.alert('网络错误',WEB.AjaxError,[{text:"知道了"}]);
                }
            });

        }
    }
    componentWillUnmount() {
        if(this.ajaxKey){
            this.ajaxKey.cancel();
        }
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <Image source={require('./../images/mainbg.png')} style={style.backgroundImage}></Image>
                <View style={style.logo}>
                    <Image source={require('./../images/logo.png')} style={style.logoImage}/>
                </View>
                <View style={[style.mt60,style.line]}>
                    <Icon style={style.icon} name="mobile-phone"/>
                    <TextInput
                        onEndEditing={(event) => this.setMobile(event.nativeEvent.text)}
                        maxLength={11}
                        placeholder={"手机号"}
                        placeholderTextColor="#666"
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        keyboardType={"phone-pad"}
                        style={style.input} />
                </View>
                <View style={[style.line]}>
                    <Icon style={[style.icon,{fontSize:25}]} name="lock"/>
                    <TextInput
                        onEndEditing={(event) => this.setPassword(event.nativeEvent.text)}
                        placeholder={"请输入密码"}
                        secureTextEntry={this.state.secureTextEntry}
                        placeholderTextColor="#666"
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={style.input} />
                    <Icon onPress={this.toggleEye} style={[style.iconRight]} name={this.state.secureTextEntry?"eye-slash":"eye"} />
                </View>
                <View style={style.tips}><Text style={style.tipsTxt} onPress={() => {navigate('Index')}}>找回密码</Text></View>
                <TouchableOpacity style={style.btn} onPress={this.signIn}>
                    <Text style={style.btnTxt}>登录{this.state.txt}</Text>
                </TouchableOpacity>
                <View style={style.navto}><Text style={style.navtoTxt} onPress={()=>{navigate('SignUp')}}>没有账号，去注册</Text></View>
            </View>
        );
    }
}



export {
    SignIn,
};

