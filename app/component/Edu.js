// 美居
import React, { Component } from 'react';
import {
    Platform,
    View,
    Text,
    Button,
    Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

const config={
    topColor:"#49a0bf",
    title:"海派优学",
    label:"Edu"
},style={
    warp:{
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    menu:{
        color:"#ffffff"
    },
    icon: {
        width: 40,
        height: 40,
    }
};

class EduIndex extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = ({ navigation })=>{
        return {
            headerLeft:<Text style={style.menu} onPress={()=>{navigation.navigate('DrawerOpen')}}>首页</Text>,
            headerStyle:{
                backgroundColor:config.topColor,
                borderBottomColor:config.topColor,
            },
            headerTitleStyle:{
                color:"#ffffff",
            },
            headerBackTitleStyle:{
                color:"#ffffff",
            },
            title: `${config.title}`,
            drawerLabel: `${config.title}`,
            drawerIcon: ({ tintColor }) => (
                <Image source={require('../images/nav_edu.png')} style={[style.icon, {tintColor: tintColor}]}/>
            ),
        };
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={style.warp}>
                <Text onPress={() => this.props.navigation.navigate('EduList', {user: 'Lucy'})}>this.state.txt</Text>
            </View>
        )
    }
};

class EduList extends Component{
    static navigationOptions = {
        headerRight:<Text>Right</Text>,
        title: `${config.title}-列表`,
        headerStyle:{
            backgroundColor:config.topColor,
            borderBottomColor:config.topColor,
        },
        headerTitleStyle:{color:"#ffffff",},
    };
    render(){
        return(
            <View style={style.warp}>
                <Text onPress={() => this.props.navigation.navigate('EduDetail', {user: 'Lucy'})}>this.state.txt</Text>
            </View>
        )
    }
}


class EduDetail extends Component{
    static navigationOptions = ({ navigation })=>{
        const { state, setParams } = navigation;
        return {
            title: `${state.params.user}-${config.title}`,
            headerStyle:{
                backgroundColor:config.topColor,
                borderBottomColor:config.topColor,
            },
            headerTitleStyle:{
                color:"#ffffff",
            },
        };
    };

    render(){
        return(
            <View style={style.warp}>
                <Text>详情</Text>
            </View>
        )
    }
}



const Edu = StackNavigator({
    EduIndex: {screen:EduIndex},
    EduList: { screen: EduList},
    EduDetail: { screen: EduDetail},
});
export {Edu};

