window.navigator.userAgent = "react-native";
import {socketUrl} from './config.js';

export let io = require('socket.io-client/socket.io'),
    socket = io(socketUrl, {
      transports: ['websocket']
});