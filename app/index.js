/**
 * Created by hashan on 7/24/17.
 */
import {Component} from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import MoviesScreen from './routes/Movies/index';
import WeatherScreen from './routes/Weather/index';

const MovieSTack = StackNavigator({
    Movies: {
        screen: MoviesScreen
    }
});


const WeatherStack = StackNavigator({
    Weather: {
        screen: WeatherScreen
    }
});

export default Drawer = DrawerNavigator(
    {
        Movies: {
            screen: MovieSTack,
            navigationOptions: {
                drawer: {
                    label: "Movies"
                }
            }

        },
        Weather: {
            screen: WeatherStack,
            navigationOptions: {
                drawer: {
                    label: "Weather"
                }
            }
        }
    },
    {
        initialRouteName: 'Movies',
    }
);