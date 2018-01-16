//入口文件,AppRegistry 注册应用，整个应用中只注册一次。
import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import hpws from './app/hpws';

AppRegistry.registerComponent('hpws', () => hpws);
