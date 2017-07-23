/**
 * Created by hashan on 7/24/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Weather extends Component {

    static navigationOptions = {
        title: "Weather"
    };

    render() {
        return (
            <View>
                <Text>Weather Screen</Text>
            </View>
        );
    }

}