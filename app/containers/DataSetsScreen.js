'use strict';

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import _ from 'lodash';
import moment from 'moment';

import {
    View,
    Text
} from 'react-native'

import { MenuButtonContainer, MenuButton } from '../components/MenuButtons';

import { navigateBack } from '../actions/nav';
import { queryDataSets } from '../actions/device-status';

import Loading from '../components/Loading';

import styles from '../styles';

class DataSetsScreen extends React.Component {
    static navigationOptions = {
        title: 'Data Sets',
    };

    componentWillMount() {
        this.props.queryDataSets();
    }

    render() {
        const { deviceCapabilities: caps, dataSets } = this.props;

        if (!_.isArray(dataSets.dataSets)) {
            return (<Loading />);
        }

        return (
            <View>
                {dataSets.dataSets.map((ds, i) => this.renderDataSet(ds, i))}
            </View>
        );
    }

    renderDataSet(dataSet, id) {
        const time = moment(dataSet.time).format("MMM Do hA");
        return (
            <View key={id} style={styles.dataSet.container}>
                <Text style={styles.dataSet.name}>{dataSet.name}</Text>
                <Text style={styles.dataSet.details}>{time} Size: {dataSet.size}</Text>
            </View>
        );
    }
}

DataSetsScreen.propTypes = {
    navigateBack: PropTypes.func.isRequired,
    queryDataSets: PropTypes.func.isRequired,
    deviceCapabilities: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    deviceCapabilities: state.deviceCapabilities,
    dataSets: state.dataSets
});

export default connect(mapStateToProps, {
    navigateBack,
    queryDataSets
})(DataSetsScreen);
