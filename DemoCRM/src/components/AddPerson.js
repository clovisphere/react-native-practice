import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Colors } from 'react-native-paper';
import { connect } from 'react-redux';
import * as actions from '../actions';


const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    fieldStyles: {
        height: 40
    },
});


class AddPerson extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <TextInput
                        mode='outlined'
                        label='First Name'
                        style={styles.fieldStyles}
                    />
                    <TextInput
                        mode='outlined'
                        label='Last Name'
                        style={styles.fieldStyles}
                    />
                    <TextInput
                        mode='outlined'
                        label='Phone'
                        style={styles.fieldStyles}
                    />
                    <TextInput
                        mode='outlined'
                        label='Email'
                        style={styles.fieldStyles}
                    />
                    <TextInput
                        mode='outlined'
                        label='Company'
                        style={styles.fieldStyles}
                    />
                    <TextInput
                        mode='outlined'
                        label='Notes'
                        style={styles.fieldStyles}
                    />
                    <View style={styles.addButton}>
                        <Button 
                            mode='contained' 
                            icon='plus' 
                            color={Colors.blue700}
                            style={{ marginTop: 10 }} 
                            >
                            Add Contributor 
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default connect(null, actions)(AddPerson);