import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100,
        flexWrap: 'wrap',
        padding: 2
    }
});

class PeopleList extends Component {
    renderInitialView() {
        if (this.props.detailView === true) {
            return (
                <PeopleDetail />
            )
        } else {
            return (
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.props.people}
                    renderItem={({ item, index }) => <PeopleItem people={item} />}
                />
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderInitialView()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { 
        people: state.people,
        detailView: state.detailView, 
    }
}

export default connect(mapStateToProps)(PeopleList);