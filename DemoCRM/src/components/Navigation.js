import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';


const Tab = createBottomTabNavigator();

export default () => {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color}) => {
                        let iconName;

                        if (route.name === 'People') {
                            iconName = 'user'
                        } else if (route.name === 'Add') {
                            iconName = 'plus'
                        } else {
                            iconName = 'archive'
                        }

                        return <Icon name={iconName} size={50} color={color} />;
                    },
                })}
                initialRouteName='People'
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: '#80cbc4',
                    showLabel: false,
                    showIcon: true,
                    style: {
                        backgroundColor: '#26a69a'
                    }
                }}
            >
                <Tab.Screen name="People" component={PeopleList} />
                <Tab.Screen name="Add" component={AddPerson} />
                <Tab.Screen name="Company" component={CompanyList} />
            </Tab.Navigator>
    )
}