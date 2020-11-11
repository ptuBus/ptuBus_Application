import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screen from '../../../Main';
import * as Navigation from '../../../Menu/SchoolBus';

const Stack = createStackNavigator();

export default function HomeTabScreen() {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
            <Stack.Screen
                name="홈"
                component={Screen.HomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="스쿨버스"
                component={Navigation.SchoolBusNavigation}
                options={{
                    headerStyle: {
                        backgroundColor: '#F9F9F9',
                        height:'100%',
                    },
                }}
            />
            {/*<Stack.Screen*/}
            {/*    name="고속/시외버스"*/}
            {/*    component={Navigations.ExpressBusStackNavigation}*/}
            {/*    options={{*/}
            {/*        headerStyle: {*/}
            {/*            backgroundColor: '#F9F9F9',*/}
            {/*            height:'100%',*/}
            {/*        },*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Stack.Screen*/}
            {/*    name="시내버스"*/}
            {/*    component={Navigations.CityBusStackNavigation}*/}
            {/*    options={{*/}
            {/*        headerStyle: {*/}
            {/*            backgroundColor: '#F9F9F9',*/}
            {/*            height:'100%',*/}
            {/*        },*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Stack.Screen*/}
            {/*    name="지하철"*/}
            {/*    component={Navigations.SubwayTopTabNavigation}*/}
            {/*    options={{*/}
            {/*        headerStyle: {*/}
            {/*            backgroundColor: '#F9F9F9',*/}
            {/*            height:'100%',*/}
            {/*        },*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Stack.Screen*/}
            {/*    name="기차"*/}
            {/*    component={Navigations.TrainStackNavigation}*/}
            {/*    options={{*/}
            {/*        headerStyle: {*/}
            {/*            backgroundColor: '#F9F9F9',*/}
            {/*            height:'100%',*/}
            {/*        },*/}
            {/*    }}*/}
            {/*/>*/}
        </Stack.Navigator>
    );
}
