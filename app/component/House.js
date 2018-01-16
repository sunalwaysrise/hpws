// 美居
import React, { Component } from 'react';
import {Platform,StyleSheet,ListView,View,ScrollView,Text,FlatList, Image, Alert, TouchableOpacity, Dimensions} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {Util,CommonSearch,CommonCountry,CommonNews,HouseItem,ItemsEmpty,ItemsEnd,SearchConditionsBtn,CommonContact} from './Common';
import axios from 'axios';

const config={
        topColor:"#4aac78",
        title:"海派美居",
        label:"House"
    },
    style={
    main:{
        flex: 1,
        backgroundColor:"#fff",
    },
    warp:{
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    menu:{
        color:"#ffffff"
    },
    icon: {
        width: 40,
        height: 40,
    },
    hotCity:{
        paddingTop:10,
        height:150,
    },
    commonTitle:{
        height:20,
        paddingBottom:20,
        position:"relative",
    },
    commonTitleLine:{
        position:"absolute",
        width:300,
        height:1,
        backgroundColor:"#4AAC78",
        left:(Dimensions.get('window').width-300)/2,
        top:10,
    },
    commonTitleTxt:{
        position:"absolute",
        width:100,
        left:(Dimensions.get('window').width-100)/2,
        backgroundColor:"#fff",
        height:20,
        lineHeight:20,
        textAlign:"center",
        fontSize:15,
        color:"#4AAC78",
    },
    flagList:{
        marginLeft:15,
        marginRight:15,
        flex: 1,
        height:80,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flagItem:{
        width:50,
        height:50,
    },
    flagWarp:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width:50,
        height:50,
    },
    flagTxtAll:{
        width:50,
        height:50,
        borderRadius:25,
        borderColor:"#dddddd",
        borderWidth:1,
        textAlign:"center",
        lineHeight:50,
    },
    flag:{
        borderRadius:25,
        width:50,
        height:50,
    },
    flagTxt:{
        textAlign:"center",
        height:30,
        lineHeight:30,
    },
    guide:{
        height:211,
        borderTopWidth:7,
        borderBottomWidth:7,
        borderTopColor:"#f0f0f0",
        borderBottomColor:"#f0f0f0",
        backgroundColor:"#fff",
    },
    guideTop:{
        height:32,
        position:"relative",
    },
    guideTopTitle:{
        height:32,
        lineHeight:32,
        position:"absolute",
        left:15,
        width:85,
        top:0,
        fontSize:16,
        color:"#4a76ac",
        fontStyle:"italic",
    },
    guideTopContent:{
        position:"absolute",
        left:100,
        top:0,
        height:32,
        overflow:"hidden",
    },
    guideTopContentTxt:{
        height:32,
        lineHeight:32,
    },
    guideContent:{
        height:70,
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    guideContentItem:{
        marginLeft:15,
        height:70,
        width:Dimensions.get('window').width/2-15,
        borderColor:"#eaeaea",
        overflow:"hidden",
        borderWidth:1,
        flexDirection:"row",
    },
    guideContentItemLeft:{
        width:70,
        height:70,
    },
    guideContentItemIMG:{
        width:70,
        height:70,
    },
    guideContentItemRight:{
        flex:1,
        paddingLeft:5,
        paddingRight:5,
    },
    guideIntoTitle:{
        height:30,
        lineHeight:30,
    },
    guideInfoProfile:{
        lineHeight:18,
        height:40,
        overflow:"hidden",
    },
    guideGuide:{
        marginLeft:10,
        marginRight:10,
        height:95,
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    guideGuideItem:{
        height:95,
        alignItems:"center",
    },
    guideIcon:{
        width:25,
        height:37,
        marginTop:17,
        marginBottom:8,
    },
    guideTxt:{
        height:30,
        lineHeight:30,
    },
    guideTxt_01:{
        fontSize:15,
        color:"#4aac78",
    },
    bestHouse:{
        paddingLeft:15,
        paddingRight:15,
        paddingTop:20,
    },
    search:{
        paddingBottom:5,
        backgroundColor:"#eee",
    },
    picker:{
        height:36,
        flexDirection:"row",
        borderBottomColor:"#eee",
        borderBottomWidth:1,
    },
    row: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    scrollview: {
        flex: 1,
    },
    houseList:{
        height:Dimensions.get('window').height-150,
    },
    houseListEnd:{
        height:Dimensions.get('window').height-180,
    }
};



class HotCity extends Component{
    constructor(props) {
        super(props);
        this.state = {
            citys: []
        };
    }
    componentWillMount() {
        const CancelToken = axios.CancelToken;
        this.ajax = CancelToken.source();
        const cancelToken=this.ajax.token;
        new Util().AllParameter((res)=>{
            let citys,result=[],all,k;
            all=res.mapCountryCate.tnmt;
            all.map((x)=>{
                x.cityCate.map((y)=>{
                    result.push(y);
                });
            });
            citys = result.map((x,index) =>{
                let img={uri:WEB.IMG + 'flag/city/' + x.cateName + '.jpg'};
                return (
                    <TouchableOpacity key={index} onPress={() => this.props.navigate("HouseList", {id:x.parentCateSeq,city: x.cateSequence})} style={style.flagItem}>
                        <View style={style.flagWarp}>
                            <Image source={img} style={style.flag} />
                        </View>
                        <Text style={style.flagTxt}>{x.cateName}</Text>
                    </TouchableOpacity>)
            });
            if(citys.length>5){
                citys=citys.slice(0, 5);
            }
            this.setState({
                citys: citys
            });
        },cancelToken);
    }
    componentWillUnmount() {
        this.ajax.cancel();
    }
    render() {
        return (
            <View style={style.hotCity}>
                <View style={style.commonTitle}>
                    <View style={style.commonTitleLine}></View>
                    <Text style={style.commonTitleTxt}>热门城市</Text>
                </View>
                <View style={style.flagList}>
                    {this.state.citys}
                </View>
            </View>
        )
    }
}

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top:{},
            news: []
        }
    }
    componentWillMount() {
        const CancelToken = axios.CancelToken;
        this.ajax = CancelToken.source();
        axios.get(this.props.source).then (rs=>{
            var result=rs.data.data.row||[],news,top,
                len = result.length;
            if (len > 3) {
                result = result.slice(0, 3);
            }
            top=result.slice(0,1);
            result = result.slice(1, 3);
            news = result.map((x,index) =>
                <TouchableOpacity style={[style.guideContentItem]} onPress={() => this.props.navigate('Article',{id: x.infoSequence})} key={index}>
                    <View style={style.guideContentItemLeft}>
                        <Image resizeMode={"contain"} style={style.guideContentItemIMG} source={{uri: WEB.Upload+'/img/'+new Util().firstImg(x.infoImgUrl)}}/>
                    </View>
                    <View style={style.guideContentItemRight}>
                        <Text style={style.guideIntoTitle}>{x.infoTitle}</Text>
                        <Text style={style.guideInfoProfile}>{x.infoProfile}</Text>
                    </View>
                </TouchableOpacity>
            );
            this.setState({
                top:top[0],
                news: news
            });
        });
    }
    componentWillUnmount(){
        this.ajax.cancel();
    }
    render() {
        return (
            <View style={style.guide}>
                <View style={style.guideTop}>
                    <Text style={style.guideTopTitle}>国际指南</Text>
                    {this.state.top.infoSequence?
                        <TouchableOpacity style={style.guideTopContent} onPress={() => this.props.navigate('Article',{id: this.state.top.infoSequence})}>
                            <Text style={style.guideTopContentTxt}>{this.state.top.infoTitle}</Text>
                        </TouchableOpacity> :<Text></Text>
                    }
                </View>
                <View style={style.guideContent}>{this.state.news}</View>
                <View style={style.guideGuide}>
                    <TouchableOpacity style={[style.guideGuideItem,style.guideGuideItem_01]} onPress={() => this.props.navigate('HouseBranch')}>
                        <Image resizeMode={"contain"} style={style.guideIcon} source={require('./../images/beaut/brand.png')} />
                        <Text style={[style.guideTxt,style.guideTxt_01]}>品牌专区</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.guideGuideItem} onPress={() => this.props.navigate('Article', {id: '1000000071'})}>
                        <Image resizeMode={"contain"} style={style.guideIcon} source={require('./../images/beaut/house.png')} />
                        <Text style={style.guideTxt}>购房流程</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.guideGuideItem} onPress={() => this.props.navigate('Article', {id: '1000000076'})}>
                        <Image resizeMode={"contain"} style={style.guideIcon} source={require('./../images/beaut/layer.png')} />
                        <Text style={style.guideTxt}>律师会计咨询</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.guideGuideItem} onPress={() => this.props.navigate('Article', {id: '1000000077'})}>
                        <Image resizeMode={"contain"} style={style.guideIcon} source={require('./../images/beaut/money.png')} />
                        <Text style={style.guideTxt}>购房贷款</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
class BestHouse extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    _keyExtractor = (item, index) => index;
    componentWillMount() {
        const CancelToken = axios.CancelToken;
        this.ajax = CancelToken.source();
        axios.get(this.props.source,{cancelToken: this.ajax.token}).then (result=>{
            this.setState({
                items: result.data.data.row||[]
            });
        });
    }
    componentWillUnmount() {
        this.ajax.cancel();
    }
    render() {
        return (
            <View style={style.bestHouseBox}>
                <View style={style.commonTitle}>
                    <View style={style.commonTitleLine}></View>
                    <Text style={style.commonTitleTxt}>{this.props.title}</Text>
                </View>
                <FlatList
                    extraData={this.state}
                    style={style.bestHouse}
                    keyExtractor={this._keyExtractor}
                    data={this.state.items}
                    renderItem={({item, separators}) => (
                        <HouseItem navigate={this.props.navigate} data={item} />
                    )}
                />
            </View>
        )
    }
}
class HouseIndex extends Component{
    constructor(props){
        super(props);
        this.state={
            priceUnit:"",
        };
        this.search=this.search.bind(this);
    }
    static navigationOptions = ({ navigation })=>{
        return {
            headerLeft:<TouchableOpacity onPress={()=>{navigation.navigate('DrawerOpen')}} style={{flexDirection:"row",}}>
                <Icon
                    name="ios-menu"
                    color="#ffffff"
                    style={{textAlign:"center",width:30,marginLeft:10,fontSize:30,height:30,lineHeight:30}}
                ></Icon>
                <Text style={{fontSize:16,height:30,lineHeight:29,color:"#fff"}}>首页</Text>
            </TouchableOpacity>,
            headerStyle:{
                backgroundColor:config.topColor,
                borderBottomColor:config.topColor,
            },
            headerTitleStyle:{
                color:"#ffffff",
            },
            headerBackTitle:'返回',
            headerTitle: `${config.title}`,
            drawerLabel: `${config.title}`,
            labelStyle:{fontSize:20},
            activeBackgroundColor:config.topColor,
            drawerIcon: ({ tintColor }) => (
                <Image source={require('../images/nav_house.png')} style={[style.icon, {tintColor: tintColor}]}/>
            ),
        };
    };
    componentWillMount(){
        let n=new Util().priceUnitFormat('01',(x)=>{
            this.setState({
                priceUnit:x
            });
        });
        storage.load({
            key:"userInfo",
        }).then((x)=>{
            console.log('houseindex.userinfo.success'+x);
        }).catch((x)=>{
            console.log('houseindex.userinfo.error'+x);
        });
    }
    search(x){
        Alert.alert('提示','您想搜索：'+x,[{'text':'知道了'}]);
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <ScrollView style={style.main}>
                <View style={{paddingTop:10}}><CommonSearch search={this.search}/></View>
                <CommonCountry
                    navigate={navigate}
                    path="house"
                    link="HouseList"
                />
                <HotCity
                    navigate={navigate}
                />
                <Guide
                    navigate={navigate}
                    source={WEB.Action+'advertisingapi_queryAdvertising.action?branchContentType=2&advtsType=2&branchType=01'}
                />
                <CommonNews
                    navigate={navigate}
                    title="最新资讯"
                    source={WEB.Action+'advertisingapi_queryAdvertising.action?branchContentType=2&advtsType=1&branchType=01'}
                />
                <BestHouse
                    navigate={navigate}
                    title="优选房源"
                    source={WEB.Action+'advertisingapi_queryAdvertising.action?branchContentType=1&advtsType=2&branchType=01'}
                />
            </ScrollView>
        )
    }
};
class HouseList extends Component{
    static navigationOptions = ({ navigation })=>{
        const { state, setParams } = navigation;
        return {
            headerTitle: `${config.title} 搜索`,
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:config.topColor,
                borderBottomColor:config.topColor,
            },
            headerTitleStyle:{
                color:"#ffffff",
            },
            headerBackTitleStyle:{
                color:"#ffffff"
            },
            headerBackTitle:'返回',
        };
    };
    constructor(props){
        super(props);
        this.changeCountry=this.changeCountry.bind(this);
        this.changeCity=this.changeCity.bind(this);
        this.changePrice=this.changePrice.bind(this);
        this.changeStyle=this.changeStyle.bind(this);
        this.search=this.search.bind(this);
        this.state={
            tnmtCountry:"",
            tnmtCity:"",
            tnmtName:"",
            tnmtPrice:"",
            tnmtHouseType:"",
            allCountry:[],
            allCitys:[],
            allPrice:[],
            allStyle:[],
            countryTitle:"国家",
            cityTitle:"城市",
            priceTitle:"价格",
            styleTitle:"户型",
            urlCountry:0,
            urlCity:0,
            items:[],
            loading:false,
            hasMorePage:true,
        };
    }
    search(tnmtName){
        Alert.alert('提示','您想搜索：'+tnmtName,[{'text':'知道了'}]);
        if (tnmtName) {
            tnmtName=tnmtName.trim();
        }else{
            tnmtName="";
        }
        this.setState({
            tnmtName: tnmtName,
            loading: false,
            hasMorePage: true,
        }, () => {
            this.load(true);
        });
    }
    changeCountry(id,txt){
        if(id=="0"){
            txt="国家";
        }
        this.setState({
            tnmtCountry:id,
            countryTitle:txt,
            cityTitle:"城市",
            tnmtCity:0,
            loading:false,
            hasMorePage:true,
        },() => {
            this.load(true);
        });
        let i=0,len=this.state.allCountry.length;
        for(i;i<len;i++){
            if(this.state.allCountry[i].cateSequence==id){
                this.setState({
                    allCitys:this.state.allCountry[i].cityCate
                });
                break;
            }
        }
    }
    changeCity(id,txt){
        if(id=="0"){
            txt="城市";
        }
        this.setState({
            tnmtCity:id,
            cityTitle:txt,
            loading:false,
            hasMorePage:true,
        },() => {
            this.load(true);
        });
    }
    changePrice(id,txt){
        if(id=="0"){
            txt="价格";
        }
        this.setState({
            tnmtPrice:id,
            priceTitle:txt,
            loading:false,
            hasMorePage:true,
        },() => {
            this.load(true);
        });
    }
    changeStyle(id,txt){
        if(id=="0"){
            txt="户型";
        }
        this.setState({
            tnmtHouseType:id,
            styleTitle:txt,
            loading:false,
            hasMorePage:true,
        },() => {
            this.load(true);
        });
    }
    componentWillMount(){
        const { state, setParams } = this.props.navigation,CancelToken = axios.CancelToken;
        this.ajax = CancelToken.source();
        const cancelToken=this.ajax.token;
        new Util().AllParameter((res)=>{
            let allCountry=res.mapCountryCate.tnmt,
                i=0,
                len=allCountry.length,
                urlCountry,
                urlCity,
                allCitys=[],
                tnmtCountry=state.params.id||0,
                tnmtCity=state.params.city||0,
                countryTitle='',
                cityTitle='城市';
            if(state.params.id) {
                for (i; i < len; i++) {
                    if (allCountry[i].cateSequence == state.params.id) {
                        urlCountry = allCountry[i];
                        countryTitle=urlCountry.cateName;
                        break;
                    }
                }
                allCitys=urlCountry.cityCate;
                if(state.params.city){
                    i=0;
                    len=allCitys.length;
                    for(i;i<len;i++){
                        if (allCitys[i].cateSequence == state.params.city) {
                            urlCity = allCitys[i];
                            cityTitle = urlCity.cateName;
                            break;
                        }
                    }
                }
            }
            this.setState({
                tnmtCountry:tnmtCountry,
                tnmtCity:tnmtCity,
                allCountry:allCountry,
                allCitys:allCitys,
                countryTitle:countryTitle,
                cityTitle:cityTitle,
                allPrice:res.mapPD["000039"],
                allStyle:res.mapPD["000040"],
            });
            this.load(true);
        },cancelToken);
    }
    _keyExtractor = (item, index) => index;
    load(isRefresh){
        if (isRefresh) {
            this.end=false;
            this.PageNo = 1;
        }
        if(this.lock || this.end){
            return false;
        }
        this.lock=true;
        this.setState({
            loading: true
        });
        let CancelToken = axios.CancelToken,params={
            pageSize:5,
            pageNo:this.PageNo
        };
        this.ajaxData = CancelToken.source();
        if(this.state.tnmtCountry &&this.state.tnmtCountry !="0"){
            params.tnmtCountry=this.state.tnmtCountry;
        }
        if(this.state.tnmtCity &&this.state.tnmtCity !="0"){
            params.tnmtCity=this.state.tnmtCity;
        }
        if(this.state.tnmtName &&this.state.tnmtName !=""){
            params.tnmtName=this.state.tnmtName;
        }
        if(this.state.tnmtPrice &&this.state.tnmtPrice !="0"){
            params.tnmtPrice=this.state.tnmtPrice;
        }
        if(this.state.tnmtHouseType &&this.state.tnmtHouseType !="0"){
            params.tnmtHouseType=this.state.tnmtHouseType;
        }
        axios.get(WEB.Action+'tenementapi_queryTenementList.action',{
            params:params,
            cancelToken: this.ajaxData.token
        }).then((result)=>{
            this.lock=false;
            let data = result.data.data,items=data.row||[],hasMorePage=true;
            if(isRefresh){
                if(items.length==0){
                    hasMorePage="empty";
                    this.end=true;
                }else if(items.length<params.pageSize){
                    hasMorePage=false;
                    this.end=true;
                }else{
                    this.PageNo++;
                }
            }else{
                if(items.length<params.pageSize){
                    hasMorePage=false;
                    this.end=true;
                }else{
                    this.PageNo++;
                }
                items=this.state.items.concat(data.row);
            }
            this.setState({
                loading: false,
                hasMorePage:hasMorePage,
                items: items
            });
        }).catch((err)=>{
            this.setState({loading: false,hasMorePage:false});
        });
    }
    render(){
        let _style=[style.houseList],items=this.state.items||[];
        if(this.state.hasMorePage==false){
            if(items.indexOf('isend')==-1){
                items.push('isend');
            }
        }
        return(
            <View style={style.main}>
                <View style={style.search}>
                    <CommonSearch search={this.search} />
                </View>
                <View style={style.picker}>
                    <SearchConditionsBtn len={4} ind={0} last={0} k="country" txt={this.state.countryTitle} type="1" changed={this.changeCountry} items={this.state.allCountry}/>
                    <SearchConditionsBtn len={4} ind={1} last={0} k="city" txt={this.state.cityTitle} type="1" changed={this.changeCity} items={this.state.allCitys}/>
                    <SearchConditionsBtn len={4} ind={2} last={0} k="price" txt={this.state.priceTitle} changed={this.changePrice} items={this.state.allPrice}/>
                    <SearchConditionsBtn len={4} ind={3} last={1} k="style" txt={this.state.styleTitle} changed={this.changeStyle} items={this.state.allStyle}/>
                </View>
                {
                    this.state.hasMorePage=="empty"
                    ?
                    <ItemsEmpty/>
                    :
                    <FlatList
                        extraData={this.state}
                        style={_style}
                        keyExtractor={this._keyExtractor}
                        data={items}
                        renderItem={this._renderItemComponent}
                        onEndReachedThreshold={50}
                        onEndReached={()=>{this.load()}}
                    />
                }
            </View>
        )
    }
    _renderItemComponent=({item, separators}) => {
        let r;
        if(item=="isend"){
            r=<ItemsEnd />;
        }else{
            r=<HouseItem navigate={this.props.navigation.navigate} data={item} />;
        }
        return r;
    }
}

class HouseDetail extends Component{
    static navigationOptions = ({ navigation })=>{
        const { state, setParams } = navigation;
        return {
            headerTitle: `${config.title}`,
            headerBackTitle:'返回',
            headerStyle:{
                backgroundColor:config.topColor,
                borderBottomColor:config.topColor,
            },
            headerTitleStyle:{
                color:"#ffffff",
            },
            headerBackTitleStyle:{
                color:"#ffffff"
            }
        };
    };
    constructor(props){
        super(props);
        const { state, setParams } = this.props.navigation;
        this.state={
            tnmtDescImgUrl:[],
            showTag1:false,
            currentTab:0,
            tnmtSequence:state.params.id,
            D:{},
            loading:false,
        };
        this.toggleTag1=this.toggleTag1.bind(this);
        this.selected=this.selected.bind(this);
        this.load=this.load.bind(this);
    }
    selected(e){this.setState({currentTab:e});}
    toggleTag1(){
        this.setState((prevState, props) => ({
            showTag1: !prevState.showTag1
        }));
    }
    componentWillMount(){
        const { state, setParams } = this.props.navigation;
        this.load(state.params.id);
    }
    componentWillReceiveProps(nextProps){
        this.load(nextProps.params.id);
    }
    load(tnmtSequence){
        const CancelToken = axios.CancelToken;
        this.ajaxKey = CancelToken.source();
        this.setState({loading:true});
        axios.get(WEB.Action+'tenementapi_queryTenementInfoBySeq.action',{
            params:{tnmtSequence: tnmtSequence},
            cancelToken: this.ajaxKey.token
        }).then((res)=>{
            res=res.data;
            const D=res.tnmt;
            if(res.statusCode=="200"){
                D.tnmtDescImgUrl=D.tnmtDescImgUrl.split(',');
                this.setState({D:D});
            }
            this.setState({loading:false});
        }).catch((error)=>{
            this.setState({loading:false});
            Alert.alert('网络错误',WEB.AjaxError,[{text:"知道了"}]);
        });
    }
    componentWillUnmount() {
        if(this.ajaxKey){
            this.ajaxKey.cancel("操作被用户取消");
        }
    }

    render(){
        let D=this.state.D,houseTypeUrl=[],houseTypeTxt=[],address;
        if(D.uploadURL){
            houseTypeUrl=D.uploadURL.split(',')
        }
        if(D.uploadURLImageName){
            houseTypeTxt=D.uploadURLImageName.split('$');
        }
        if(D.tnmtAddr){address="https://down.zjhzgm.com/hpwsmap.html?address="+encodeURIComponent(D.tnmtAddr);}
        let tag=[D.tnmtTypeText,D.tnmtSaleStatusText,D.tnmtEstateTypeText];

        D.branchEmail='luwenbin@live.com';
        return(
            <View style={style.warp}>
                <ScrollView>
                    <Text>这是中间的滚动页面   (flex: 1)</Text>
                    <Text>页面展示在这个组件中</Text>
                </ScrollView>
                <View style={{height: 45}}>
                    <CommonContact mobile={D.branchTelephone} tel={D.branchTelephone} email={D.branchEmail}/>
                </View>
            </View>
        )
    }
}

class _HouseDetail extends React.Component {


    render() {

        return (
            <div className="home beautdetail">
                <CommonHeaderBack navClass="nav_ico" navTxt="返回" txt="海派美居"/>
                <div className="topBannerWarp">
                    {(D.tnmtDescImgUrl&&D.tnmtDescImgUrl.length>0)?<TopBanner images={D.tnmtDescImgUrl} ></TopBanner>:""}
                </div>
                <div className="simp_introdu border_bottom">
                    <div className="title_introdu">
                        {D.tnmtName}
                        <Col branchType="01" connectSequence={D.tnmtSequence} fav={D.userCollected} />
                    </div>
                    <div>
                        <div className="hbtn">
                            <CommonTag tags={tag}/>
                        </div>
                        <p className="hprice_introdu">
                            <a>约¥</a><span className="money">{new Util().priceFormat(D.tnmtPrice)}</span>万
                            <span className="dollar">{new Util().priceFormat(D.tnmtFgcrc)}万{new Util().priceUnitFormat(D.tnmtFgcrcCurrency)}</span>
                        </p>
                        <p>
                        </p><p className="haddress_introdu">{D.tnmtAddr}</p>
                        <Link to={"housebranchdetail/"+D.branchSequence} className="hprovide_introdu">房源供应商：{D.branchName}</Link>
                    </div>
                </div>
                <div className="hdetail">
                    <p className="title">房源详情</p>
                    <div className="foundation">
                        <p><span>开发商/中介：</span><span>{D.tnmtDevelopers}</span></p>
                        <p><span>物业类型：</span><span>{D.tnmtEstateTypeText}</span></p>
                        <p><span>产权年限：</span><span>{D.tnmtPropertyRightTerm}</span></p>
                        {D.isSupportChinese=="1"?<p><span>提供服务：</span><span>中文</span></p>:""}
                        <p>{D.tnmtDesc}</p>
                    </div>
                    <div className={'detail '+this.state.showTag1}>
                        <p className="title">基础信息</p>
                        <p><span>建成年限：</span><span>{D.tnmtCompletionDate}年</span></p>
                        <p><span>使用面积：</span><span>{D.tnmtUsableArea}㎡</span></p>
                        <p><span>土地面积：</span><span>{D.tnmtLandArea}㎡</span></p>
                        <p><span>平均每平米价格：</span><span>{D.tnmtPoaAvg}{new Util().priceUnitFormat(D.tnmtPoaAvgUnit)}</span></p>
                        <p><span>房屋类型：</span><span>{D.tnmtTypeText}</span></p>
                        <p><span>房屋类别：</span><span>{D.tnmtClassesText}</span></p>
                        <p><span>户型类别：</span><span>{D.tnmtHouseType}</span></p>
                        <p><span>销售状态：</span><span>{D.tnmtSaleStatusText}</span></p>
                        <p className="title">配套设施</p>
                        <TnmtFacilityDesc tnmtFacilityType={D.tnmtFacilityTypeText} tnmtFacilityDesc={D.tnmtFacilityDesc} />
                        <div className="innerhtml" dangerouslySetInnerHTML={{__html:D.tnmtDescDetail}}></div>
                    </div>
                    <p className="all" onClick={this.toggleTag1}>{this.state.showTag1?"收起":"查看全部"}</p>
                </div>
                <div className="hdetail">
                    <p className="title">费用说明<span className="prompting">数据仅供参考，详情可致电咨询</span></p>
                    <TnmtChargeName tnmtChargeTypeText={D.tnmtChargeTypeText} tnmtChargeTypeList={D.tnmtChargeTypeList} />
                    <p className="all"></p>
                </div>

                <div className="map">
                    <p className="title">房屋地址：<span>{D.tnmtAddr}</span></p>
                    <div className="show_map">
                        {address?(<iframe src={address} frameBorder="0"></iframe>):""}
                    </div>
                    {
                        D.tnmtSequence ? (
                            <div>
                                <ul className={"ulflex ulflex_"+this.state.currentTab}>
                                    <li data="0" onClick={this.selected}>周边商场</li>
                                    <li data="1" onClick={this.selected}>周边学校</li>
                                    <li data="2" onClick={this.selected}>周边交通</li>
                                    <li data="3" onClick={this.selected}>周边美食</li>
                                </ul>
                                <div className={"cont inform inform_"+this.state.currentTab}>
                                    <Aside branchType="01" connectSequence={D.tnmtSequence} infoCate="01"/>
                                    <Aside branchType="01" connectSequence={D.tnmtSequence} infoCate="02"/>
                                    <Aside branchType="01" connectSequence={D.tnmtSequence} infoCate="03"/>
                                    <Aside branchType="01" connectSequence={D.tnmtSequence} infoCate="04"/>
                                </div>
                            </div>
                        ): ""
                    }
                </div>
                <div className="cont htype">
                    <p className="title">房源户型</p>
                    <HouseType images={houseTypeUrl} txt={houseTypeTxt} />
                </div>
                <AlertContainer ref={a => this.msg = a} {...alertOptions} />
                <Best
                    source={WEB.Action+'advertisingapi_queryAdvertising.action?branchContentType=1&branchType=01&advtsType=2'} />

                <Lock loading={this.state.loading} />
            </div>
        )
    }
}

class HouseBranch extends Component{
    static navigationOptions = ({ navigation })=>{
        const { state, setParams } = navigation;
        return {
            headerTitle: `品牌专区-${config.title}`,
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:config.topColor,
                borderBottomColor:config.topColor,
            },
            headerTitleStyle:{
                color:"#ffffff",
            },
            headerBackTitleStyle:{
                color:"#ffffff"
            }
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
class Article extends Component{
    static navigationOptions = ({ navigation })=>{
        const { state, setParams } = navigation;
        return {
            headerTitle: `${state.params.id}-${config.title}`,
            headerBackTitle:null,
            headerStyle:{
                backgroundColor:config.topColor,
                borderBottomColor:config.topColor,
            },
            headerTitleStyle:{
                color:"#ffffff",
            },
            headerBackTitleStyle:{
                color:"#ffffff"
            }
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


const House = StackNavigator({
    HouseIndex: {screen:HouseIndex},
    HouseList: { screen: HouseList },
    HouseDetail: { screen: HouseDetail},
    HouseBranch: { screen: HouseBranch},
    Article: { screen: Article},
});
export {House};

