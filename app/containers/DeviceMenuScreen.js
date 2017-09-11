'use strict';

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import _ from 'lodash';

import {
    View,
    Text
} from 'react-native'

import { MenuButtonContainer, MenuButton } from '../components/MenuButtons';

import { navigateWelcome } from '../actions/nav';

import Loading from '../components/Loading';

import {
    deviceStartConnect,
    deviceStopConnect
} from '../actions/device-status';

import styles from '../styles';

class DeviceMenuScreen extends React.Component {
    static navigationOptions = {
        title: 'Device',
    };

    render() {
        const { deviceCapabilities: caps } = this.props;

        if (!_.isArray(caps.sensors)) {
            return (<Loading />);
        }

        return  (
            <View>
                <View>
                    <Text style={styles.deviceName}>{caps.name}</Text>
                    {caps.sensors.map((s, i) => this.renderSensor(s, i))}
                </View>
                <MenuButtonContainer>
                    <MenuButton title="Home" onPress={() => this.props.navigateWelcome()} />
                </MenuButtonContainer>
            </View>
        );
    }

    renderSensor(sensor, id) {
        return (
            <View key={id} style={styles.sensor}>
                <Text style={styles.sensorName}>{sensor.name}</Text>
                <Text style={styles.sensorFrequency}>Frequency: {sensor.frequency}</Text>
            </View>
        );
    }
}

DeviceMenuScreen.propTypes = {
    navigateWelcome: PropTypes.func.isRequired,
    deviceStatus: PropTypes.object.isRequired,
    deviceCapabilities: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    deviceStatus: state.deviceStatus,
    deviceCapabilities: state.deviceCapabilities
});

export default connect(mapStateToProps, {
    deviceStartConnect,
    deviceStopConnect,
    navigateWelcome
})(DeviceMenuScreen);
