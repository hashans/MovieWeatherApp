/**
 * Created by hashan on 7/24/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class Movies extends Component {

    static navigationOptions = {
        title: "Movies"

    };
    constructor(props){
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Movies Screen</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "#1d1d1d"

    },
    text: {
        color : "#ffffff"
    }
});

export default Movies;