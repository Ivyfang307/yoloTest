import React, {Component} from 'react';
import {StyleSheet,Image,View} from "react-native";

import Logo from './assets/images/Simple.jpg'


export default class Header extends Component<Props> {
    render(){
        return (
            <View style={styles.header}>
                <Image source={Logo} style={{width:120,height:30}} alt="Bossjob" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width:'80%',
    },
});
