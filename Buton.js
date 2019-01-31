import React, { Component } from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default class Button extends React.Component {
    render(){
        return(
            <View style={{flex: 1}}> 
                <TouchableOpacity onPress={this.props.onPress} style={{flex: 1, marginTop: 35, marginLeft: 15}}>
                    <Text>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}