import React, { Component } from 'react';
class NetUitl extends React.Component{
    static get(url,params,callback){
        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        fetch(url,{
            method: 'GET',
        })
        .then((response) => {
            callback(response)
        }).done();
    }
    static post(url,params,headers,callback){
        fetch(url,{
            method: 'POST',
            headers:{
                'token': headers
            },
            body:JSON.stringify(params)
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            callback(responseJSON)
        }) .done();
    }
}
export {NetUitl};
