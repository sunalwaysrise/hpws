import React, { Component } from 'react';
import {Platform,Linking,Modal,View,FlatList,Text,Image,TouchableOpacity,TouchableHighlight,StyleSheet,Dimensions,Alert,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const style={
    searchBar:{
        marginLeft:15,
        marginTop:5,
        marginRight:15,
        height:40,
        borderColor:"#eee",
        backgroundColor:"#fff",
        borderWidth:2,
    },
    searchBtn:{width:40,height:38,alignItems: "center",},
    searchBtnIcon:{
        width:40,
        height:30,
        lineHeight:30,
        textAlign:"center",
        marginTop:2,
        marginLeft:0,
        fontSize:20,
        color:"#ddd",
    },
    input:{
        position:"absolute",
        left:40,
        top:0,
        right:0,
        height:40,
        padding:0,
    },
    menu:{
        color:"#ffffff"
    },
    icon: {
        width: 40,
        height: 40,
    },
    topCountryWarp:{
        marginTop:10,
        marginLeft:15,
        marginRight:15,
        height:88,
    },
    topCountry:{
        flex: 1,
        height:88,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flagList:{
        margin:0,
        padding:0,
    },
    flagWarp:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width:50,
        height:50,
    },
    flag:{
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
    flagTxt:{
        textAlign:"center",
        height:30,
        lineHeight:30,
    },
    flagAllBack:{
        position:"absolute",
        left:0,
        top:64,
        right:0,
        bottom:0,
        backgroundColor:"rgba(0,0,0,.5)"
    },
    conditionAllBack:{
        position:"absolute",
        left:0,
        top:150,
        right:0,
        bottom:0,
        backgroundColor:"rgba(0,0,0,.1)"
    },
    conditionAllList:{
        position:"absolute",
        top:0,
        backgroundColor:"rgb(255,255,255)",
    },
    conditionAllBackImg:{
        position:"absolute",
        left:0,
        top:0,
        right:0,
        bottom:0,
    },
    flagAllBackImg:{
        position:"absolute",
        left:0,
        top:0,
        right:80,
        bottom:0,
    },
    flagAllList:{
        position:"absolute",
        width:115,
        top:0,
        right:0,
        bottom:0,
        backgroundColor:"rgb(255,255,255)",
    },
    flagAllListItem:{
        height:40,
        overflow:"hidden",
    },
    flagAllListItemTxt:{
        textAlign:"center",
        lineHeight:40,
        overflow:"hidden",
        color:"#aaaaaa",
    },
    conditionAllListItemTxt:{
        textAlign:"center",
        lineHeight:40,
        overflow:"hidden",
        color:"#111",
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
    commonNewsWarp:{
        paddingTop:20,
        backgroundColor:"#ffffff",
        paddingBottom:20,
    },
    commonNews:{
        paddingLeft:15,
        paddingRight:15,
    },
    commonNewsItems:{
        height:44,
        marginTop:12,
        backgroundColor:"#f0f0f0",
    },
    commonNewsItem:{
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    commonNewsItemIMGBox:{
        width:40,
        height:40,
        marginTop:2,
        marginLeft:4,
    },
    commonNewsItemIMG:{
        width:40,
        height:40,
    },
    commonNewsTitle:{
        padding:4,
        flex:1,
    },
    HouseItem:{
        height:100,
        flexDirection:"row",
        marginBottom:15,
    },
    HouseItemIMGBox:{
        width:120,
        height:100,
        overflow:"hidden",
        marginRight:15,
    },
    HouseItemIMG:{
        width:120,
        height:100,
    },
    HouseItemDesc:{
        flex:1,
    },
    tnmtName:{
        height:24,
        lineHeight:24,
        fontSize:14,
        overflow:"hidden",
    },
    tnmtUsableArea:{
        height:20,
        lineHeight:20,
        fontSize:13,
        overflow:"hidden",
    },
    tag:{
        height:20,
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"row",
    },
    tagTxt:{
        height:20,
        lineHeight:18,
        backgroundColor:"#65bcc8",
        color:"#fff",
        marginRight:4,
        borderRadius:2,
        paddingLeft:2,
        paddingRight:2,
    },
    tnmtPrice:{
        height:20,
        lineHeight:20,
        color:"#ff2727",
    },
    tnmtFgcrc:{
        height:20,
        lineHeight:20,
    },
    pickers4:{
        width:Dimensions.get('window').width/4,
        borderRightWidth:1,
        borderRightColor:"#eee",
        height:35,
        overflowX:"hidden",
        backgroundColor:"red"
    },
    condition:{
        height:35,
        width:Dimensions.get('window').width/3,
    },
    conditionLast0:{
        borderRightWidth:1,
        borderRightColor:"#eee",
    },
    conditionLast1:{
        borderRightWidth:0
    },
    conditionAllList_1_0:{left:0},
    conditionAllList_2_0:{left:0},
    conditionAllList_3_0:{left:0},
    conditionAllList_4_0:{left:0},
    conditionAllList_5_0:{left:0},
    conditionAllList_2_1:{right:0},
    conditionAllList_3_2:{right:0},
    conditionAllList_4_3:{right:0},
    conditionAllList_5_4:{right:0},
    conditionAllList_3_1:{left:Dimensions.get('window').width/3},
    conditionAllList_4_1:{left:Dimensions.get('window').width/4},
    conditionAllList_4_2:{left:Dimensions.get('window').width/2},
    conditionAllList_5_1:{left:Dimensions.get('window').width/5},
    conditionAllList_5_1:{left:Dimensions.get('window').width/5*2},
    conditionAllList_5_3:{left:Dimensions.get('window').width/5*3},
    condition2:{width:Dimensions.get('window').width/2,},
    condition3:{width:Dimensions.get('window').width/3,},
    condition4:{width:Dimensions.get('window').width/4,},
    condition5:{width:Dimensions.get('window').width/5,},
    conditionTxt:{height:35, lineHeight:35, textAlign:"center",},
    contact:{
        height:45,
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#fff",
        borderTopColor:"#ddd",
        borderTopWidth:1,
    },
    contactItem:{
        flexDirection:"row",
        justifyContent:"center",
        borderRightWidth:1,
        borderRightColor:"#ddd",
    },
    contactItem_1:{width:Dimensions.get('window').width},
    contactItem_2:{width:Dimensions.get('window').width/2},
    contactItem_3:{width:Dimensions.get('window').width/3},
    contactIcon:{
        height:44,
        lineHeight:40,
        fontSize:15,
    },
    contactTxt:{
        height:44,
        lineHeight:45,
        fontSize:15,
    }
};
class Util {
    makeCancelable(promise){
        // TODO 待评估，暂无用
        let hasCanceled_ = false;
        const wrappedPromise = new Promise((resolve, reject) => {
            promise.then((val) =>
                hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
            );
            promise.catch((error) =>
                hasCanceled_ ? reject({isCanceled: true}) : reject(error)
            );
        });
        return {
            promise: wrappedPromise,
            cancel() {
                hasCanceled_ = true;
            },
        };
    };
    constructor(){
        this.countrys=["澳大利亚","德国","法国","韩国","加拿大","马来西亚","美国","葡萄牙","日本","塞浦路斯","泰国","西班牙","希腊","新加坡","匈牙利","意大利","英国","中国","全部"];
        this.citys=["巴塞罗那","柏林","波尔图","多伦多","华盛顿","旧金山","堪培拉","里斯本","伦敦","洛杉矶","马德里","曼彻斯特","墨尔本","慕尼黑","纽约","温哥华","渥太华","悉尼","芝加哥"];
        this.img404="default.jpg";
        this.resUrl="";
        this.defaultImg=this.resUrl+"style/images/logo/xhdpi.png";
    }
    phoneHiden(x){
        let r='';
        if(x){
            r=x.substring(0,x.length-4)+'****';
        }
        return r;
    }
    playTimeFormat(x){
        if(x){
            x=parseInt(x);
            let h='',m='',s='';
            if(x>3600){
                h=parseInt(x/3600)+":";
                x=(x%3600);
            }
            if(x>60){
                m=parseInt(x/60)+":";
                x=(x%60);
            }
            s=parseInt(x);
            return h+m+s;
        }
    }
    timeFormat(x){
        if(x){
            let n=x.split('');
            n=new Date(n[0]+n[1]+n[2]+n[3]+'/'+n[4]+n[5]+'/'+n[6]+n[7]+' '+n[8]+n[9]+':'+n[10]+n[11]+':'+n[12]+n[13]);
            return n.toDateString();
        }else{
            return "";
        }
    }
    priceUnitFormat(y,fn){
        storage.load({
            key:"AllParameter",
        }).then((AllParameter)=>{
            if(AllParameter['mapPD']){
                if(AllParameter['mapPD']['000007']){
                    AllParameter['mapPD']['000007'].map((x)=>{
                        if(x.pdCode==y){
                            fn(x.pdName);
                        }
                    });
                }
            }
        }).catch((x)=>{});
    }
    userInfo(fn){
        storage.load({
            key:"userInfo",
        }).then((x)=>{
            fn(x);
        }).catch((x)=>{
            fn({})
        });
    }
    timeFormatBase(x,type='YYYY/MM/DD'){
        if(x){
            let n=x.split(''),r;
            switch (type){
                case 'YYYY/MM/DD':
                    r=(n[0]+n[1]+n[2]+n[3]+'/'+n[4]+n[5]+'/'+n[6]+n[7]);
                    break;
                case 'YYYY/MM/DD HH:mm:ss':
                default:
                    r=(n[0]+n[1]+n[2]+n[3]+'/'+n[4]+n[5]+'/'+n[6]+n[7]+' '+n[8]+n[9]+':'+n[10]+n[11]+':'+n[12]+n[13]);
                    break;
            }
            return r;
        }else{
            return "";
        }
    }
    dateUnitFormat(x){
        const R={"W":"周", "M":"月", "Y":"年",};
        return R[x];
    }
    priceFormat(x) {
        if(x){
            return (x/10000).toFixed(0);
        }else{
            return "";
        }
    }
    firstImg(x){
        if(x){
            return (x.split(',')[0]);
        }else{
            return (this.img404);
        }
    }
    isMobile(mobile){
        var r=false;
        if( mobile.length == 11 ){
            var re = /^1(3|4|5|7|8)\d{9}$/;
            if(re.test(mobile)){
                r=true;
            }
        }
        return r;
    }
    AllParameter(fn,cancelToken){
        let tf=true;
        storage.load({
            key: "AllParameter",
        }).then((AllParameter) => {
            if(AllParameter.endTime>new Date().getTime()){
                tf=false;
                fn(AllParameter);
            }else{
                storage.remove({
                    key:"AllParameter"
                });
            }
        }).catch((x) => {

        });
        if(tf){
            axios.get(WEB.Action+'parametersapi_queryAllParameter.action',{cancelToken: cancelToken})
                .then((res)=>{
                    if(res.data.statusCode=="200"){
                        let AllParameter=res.data;
                        AllParameter.endTime=new Date().getTime()+3*60*60*1000;
                        storage.save({
                            key:"AllParameter",
                            data:AllParameter
                        });
                        fn(AllParameter);
                    }
                });
        }
    }
}
class CommonSearch extends Component {
    constructor(p){
        super(p);
        this.state={
            txt:'',
        };
    }
    done(x){
        this.setState({
            txt:x
        });
    }
    search(){
        if(this.state.txt){
            this.props.search(this.state.txt);
        }else{
            Alert.alert('提示','请输入您要搜索的内容',[{'text':'知道了'}]);
        }
    }
    render() {
        return (
            <View style={style.searchBar}>
                <TouchableOpacity style={style.searchBtn} onPress={() =>{this.search()}}>
                    <Icon name="search" style={style.searchBtnIcon}/>
                </TouchableOpacity>
                <TextInput
                    onEndEditing={(event) => {this.done(event.nativeEvent.text)}}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    style={style.input} />
            </View>
        );
    }
}
class CountryFalg extends Component{
    render(){
        const x=this.props.data;
        let img;
        if(new Util().countrys.indexOf(x.cateName)!=-1){
            switch (x.cateName){
                case "美国":
                    img=require('./../images/flag/美国.png');
                    break;
                case "中国":
                    img=require('./../images/flag/中国.png');
                    break;
                case "加拿大":
                    img=require('./../images/flag/加拿大.png');
                    break;
                case "匈牙利":
                    img=require('./../images/flag/匈牙利.png');
                    break;
                case "塞浦路斯":
                    img=require('./../images/flag/塞浦路斯.png');
                    break;
                case "希腊":
                    img=require('./../images/flag/希腊.png');
                    break;
                case "德国":
                    img=require('./../images/flag/德国.png');
                    break;
                case "意大利":
                    img=require('./../images/flag/意大利.png');
                    break;
                case "新加坡":
                    img=require('./../images/flag/新加坡.png');
                    break;
                case "日本":
                    img=require('./../images/flag/日本.png');
                    break;
                case "法国":
                    img=require('./../images/flag/法国.png');
                    break;
                case "泰国":
                    img=require('./../images/flag/泰国.png');
                    break;
                case "澳大利亚":
                    img=require('./../images/flag/澳大利亚.png');
                    break;
                case "英国":
                    img=require('./../images/flag/英国.png');
                    break;
                case "葡萄牙":
                    img=require('./../images/flag/葡萄牙.png');
                    break;
                case "西班牙":
                    img=require('./../images/flag/西班牙.png');
                    break;
                case "中国":
                    img=require('./../images/flag/韩国.png');
                    break;
                case "马来西亚":
                    img=require('./../images/flag/马来西亚.png');
                    break;
                default:
                    img={uri:WEB.IMG + 'flag/' + x.cateName + '.png'};
                    break;
            }
        }else{
            img={uri:WEB.IMG + 'flag/' + x.cateName + '.png'};
        }
        return (<TouchableOpacity style={style.flagList} onPress={() => this.props.navigate(this.props.link, {id: x.cateSequence})}>
            <View style={style.flagWarp}>
                <Image resizeMode={"contain"} source={img} style={style.flag} />
            </View>
            <Text style={style.flagTxt}>{x.cateName}</Text>
        </TouchableOpacity>)
    };
}
class CommonCountry extends Component{
    constructor(props) {
        super(props);
        this.state = {
            top: [],
            all: [],
            isShowAll: "",
            open:false,
        };
        this.toggle=this.toggle.bind(this);
    }
    // _keyExtractor = (item, index) => item.cateSequence;
    _keyExtractor = (item, index) => index;
    componentWillMount(){
        const CancelToken = axios.CancelToken;
        this.ajax = CancelToken.source();
        const cancelToken=this.ajax.token;
        let m=new Util().AllParameter((res)=>{
            let top,all,k;
            switch(this.props.path){
                case "house":
                    k="tnmt";
                    break;
                case "edu":
                    k="college";
                    break;
                case "visa":
                    k="immig";
                    break;
                case "tourism":
                    k="travel";
                    break;
                case "fashion":
                    k="tide";
                    break;
                case "business":
                    k="business";
                    break;
            }
            all=res.mapCountryCate[k];
            if (all.length > 4) {
                top = all.slice(0, 4);
            } else {
                top = all;
            }
            this.setState({
                top:top,
                all:all,
            });
        },cancelToken);
    }
    componentWillUnmount() {
        this.ajax.cancel();
    }
    toggle(){
        this.setState((prevState, props) => ({
            open:!prevState.open
        }));
    }
    render() {
        let top=this.state.top.map((x,index)=>
            <CountryFalg key={index} data={x} link={this.props.link} navigate={this.props.navigate} />
        );
        return (
            <View>
            <View style={style.topCountryWarp}>
                <View style={style.topCountry}>
                    {top}
                    <TouchableOpacity style={style.flagList} onPress={()=>this.toggle()}>
                        <View style={style.flagWarp}>
                            <Text style={style.flagTxtAll}>全部</Text>
                        </View>
                        <Text style={style.flagTxt}>全部</Text>
                    </TouchableOpacity>
                </View>

                <Modal transparent={true} visible={this.state.open}>
                    <View style={style.flagAllBack}>
                        <TouchableOpacity style={style.flagAllBackImg} onPress={()=>this.toggle()}></TouchableOpacity>
                        <FlatList
                            keyExtractor={this._keyExtractor}
                            style={style.flagAllList}
                            data={this.state.all}
                            renderItem={({item, separators}) => (
                                <TouchableHighlight onPress={() =>
                                    this.setState({
                                        open:false
                                    },() => {
                                        this.props.navigate(this.props.link, {id: item.cateSequence})
                                    })
                                } style={style.flagAllListItem}>
                                    <Text style={style.flagAllListItemTxt}>{item.cateName}</Text>
                                </TouchableHighlight>
                            )}
                        />
                    </View>
                </Modal>
            </View></View>)
    }
}
class CommonNews extends Component {
    constructor(props) {
        super(props);
        this.state = {news: []}
    }
    _keyExtractor = (item, index) => index;
    componentWillMount() {
        const CancelToken = axios.CancelToken;
        this.ajax = CancelToken.source();
        axios.get(this.props.source,{cancelToken: this.ajax.token}).then(result=>{
            this.setState({
                news: result.data.data.row||[]
            });
        });
    }
    componentWillUnmount() {
        this.ajax.cancel();
    }
    render() {
        return (
            <View style={style.commonNewsWarp}>
                <View style={style.commonTitle}>
                    <View style={style.commonTitleLine}></View>
                    <Text style={style.commonTitleTxt}>{this.props.title}</Text>
                </View>
                <FlatList
                    keyExtractor={this._keyExtractor}
                    style={style.commonNews}
                    data={this.state.news}
                    renderItem={({item, separators}) => (
                        <TouchableOpacity style={style.commonNewsItems} key={item.infoSequence} onPress={() => this.props.navigate('Article', {id: item.infoSequence})}>
                            {item.infoImgUrl?
                                <View style={style.commonNewsItem}>
                                    <View style={style.commonNewsItemIMGBox}>
                                        <Image resizeMode={"contain"} style={style.commonNewsItemIMG} source={{uri:WEB.Upload+'/img/'+new Util().firstImg(item.infoImgUrl)}}/>
                                    </View>
                                    <Text style={style.commonNewsTitle}>{item.infoTitle}</Text>
                                </View>
                                :
                                <View style={style.commonNewsItem}>
                                    <View style={style.commonNewsItemIMGBox}></View>
                                    <Text style={style.commonNewsTitle}>{item.infoTitle}</Text>
                                </View>
                            }

                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }
}
class CommonTag extends Component {
    render() {
        const span = this.props.tags.map((i,index) =>{
                if(i){
                    return <Text style={style.tagTxt} key={index}>{i}</Text>;
                }
            }
        );
        return <View style={style.tag}>{span}</View>;

    }
}
class HouseItem extends Component{
    constructor(e){
        super(e);
        this.state={
            priceUnitFormat:"",
            img:require('./../images/logo/xhdpi.png')
        }
    }
    componentWillMount(){
        new Util().priceUnitFormat(this.props.data.tnmtFgcrcCurrency,(x)=>{
            this.setState({
                priceUnitFormat:x
            });
        });
    }
    render (){
        const x=this.props.data,tnmtType=['','新房','二手房'], tnmtSaleStatus=['售罄','在售'];
        let tags=[tnmtType[x.tnmtType],tnmtSaleStatus[x.tnmtSaleStatus]];
        return (<TouchableOpacity style={style.HouseItem} onPress={() => this.props.navigate('HouseDetail', {id: x.tnmtSequence})}>
            <View style={style.HouseItemIMGBox}>
                <Image resizeMode={"cover"} style={style.HouseItemIMG} source={{uri:WEB.Upload+'/img/'+new Util().firstImg(x.imageThumbUrl)}}/>
            </View>
            <View  style={style.HouseItemDesc}>
                <Text style={style.tnmtName}>{x.tnmtName}</Text>
                <Text style={style.tnmtUsableArea}>{x.tnmtUsableArea}<Text>㎡</Text>{x.tnmtAddr}</Text>
                <CommonTag tags={tags}/>
                <Text style={style.tnmtPrice}>约¥{new Util().priceFormat(x.tnmtPrice)}万人民币</Text>
                <Text style={style.tnmtFgcrc}>
                    {new Util().priceFormat(x.tnmtFgcrc)}
                    万
                    {this.state.priceUnitFormat}
                </Text>
            </View>
        </TouchableOpacity>);
    }
}
class SearchConditionsBtn extends Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            className: false,
            txt: this.props.txt,
        };
    }
    _keyExtractor = (item, index) => index;
    toggleClass() {
        this.setState((prevState) => ({
            className: !prevState.className
        }));
    }
    select(id,txt) {
        if (id=="0") {
            txt=this.props.txt;
        }
        this.toggleClass();
        this.props.changed(id,txt);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            txt: nextProps.txt,
        });
    }
    render() {
        let items=this.props.items.slice(0);
        items.unshift({
            cateSequence:0,
            cateName:"不限",
            pdCode:0,
            pdName:"不限",
        });
        return (
            <View style={[style.condition,style['condition'+this.props.len],style['conditionLast'+this.props.last]]}>
                <Text style={style.conditionTxt} onPress={()=>{this.toggleClass()}}>{this.state.txt}</Text>
                <Modal transparent={true} visible={this.state.className}>
                    <View style={style.conditionAllBack}>
                        <TouchableOpacity style={style.conditionAllBackImg} onPress={()=>this.toggleClass()}></TouchableOpacity>
                        <FlatList
                            keyExtractor={this._keyExtractor}
                            style={[style.conditionAllList,style['conditionAllList_'+this.props.len+'_'+this.props.ind],style['condition'+this.props.len]]}
                            data={items}
                            renderItem={({item, separators}) => {
                                let id,txt;
                                if(this.props.type==1){
                                    id=item.cateSequence;
                                    txt=item.cateName;
                                }else{
                                    id=item.pdCode;
                                    txt=item.pdName;
                                }
                                return <TouchableHighlight onPress={() =>
                                    this.setState({
                                        open:false
                                    },() => {
                                        this.select(id,txt);
                                    })
                                } style={style.flagAllListItem}>
                                    <Text style={style.conditionAllListItemTxt}>{txt}</Text>
                                </TouchableHighlight>;
                            }}
                        />
                    </View>
                </Modal>
            </View>)
    }
}
class ItemsEmpty extends Component{
    render(){
        return <View><Image resizeMode={"contain"} source={require('./../images/center/empty.png')} style={{height:300,width:Dimensions.get('window').width}} /></View>
    }
}
class ItemsEnd extends Component{
    render(){
        return <View><Image resizeMode={"contain"} source={require('./../images/center/toend.png')} style={{height:50,width:Dimensions.get('window').width}}/></View>
    }
}
class CommonContact extends Component {
    linked(url){
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }
    render() {
        let r = [],i=0;
        if(this.props.mobile){
            i++;
        }
        if(this.props.tel){
            i++;
        }
        if(this.props.email){
            i++;
        }
        const _styles=[style.contactItem,style['contactItem_'+i]];
        if(this.props.mobile){
            r.push(<TouchableOpacity key="0" style={_styles} onPress={()=>{this.linked('tel:' + this.props.mobile)}}><Icon style={style.contactIcon} name="local-phone" color="#000"/><Text style={style.conditionTxt}>联系顾问</Text></TouchableOpacity>);
        }
        if(this.props.tel){
            r.push(<TouchableOpacity key="1" style={_styles} onPress={()=>{this.linked('tel:' + this.props.tel)}}><Icon style={style.contactIcon} name="smartphone" color="#000"/><Text style={style.conditionTxt}>电话询问</Text></TouchableOpacity>);
        }
        if (this.props.email){
            r.push(<TouchableOpacity key="2" style={_styles} onPress={()=>{this.linked('mailto:' + this.props.email)}}><Icon style={style.contactIcon} name="mail-outline" color="#000"/><Text style={style.conditionTxt}>发送邮件</Text></TouchableOpacity>);
        }
        return (<View style={style.contact}>{r}</View>);
    }
}
export {Util,CommonSearch,CommonCountry,CommonNews,HouseItem,ItemsEmpty,ItemsEnd,SearchConditionsBtn,CommonContact};
