import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const theme = getTheme();


const styles = StyleSheet.create({
    card: {
        marginTop: 15
    },
    title: {
        top: 10,
        left: 80,
        fontSize: 15
    },
    image: {
        height: 80
    },
    action: {
        backgroundColor: 'black',
        color: 'white'
    },
    icon: {
        position: 'absolute',
        top: 2,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)'
    }
});

const PeopleItem = (props) => {
    return (
        <TouchableWithoutFeedback onPress={ () => props.selectPerson(props.people)}>
            <View style={theme.cardStyle, styles.card}>
                <Image
                    source={require('../images/background.jpg')}
                    style={[theme.cardImageStyle, styles.image]}
                />
                <Icon
                    name={'user'}
                    size={90}
                    style={styles.icon}
                />
                <Text style={[theme.cardTitleStyle, styles.title]}>{props.people.firstName} {props.people.lastName}</Text>
                <Text style={[theme.cardActionStyle, styles.action]}>{props.people.company}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default connect(null, actions)(PeopleItem);