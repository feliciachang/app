import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AppScreen, DeviceInfo, MenuButtonContainer, MenuButton, ConfirmationModal } from '../components';

import { navigateNetwork, navigateBack, resetDevice } from '../actions';

import styles from '../styles';

class ConfigureScreen extends React.Component {
    static navigationOptions = {
        title: 'Configure',
    };

    constructor() {
        super();
        this.state = {
            confirming: false
        };
    }

    onReset(confirming) {
        this.setState({
            confirming: confirming
        })
        if (!confirming) {
            this.props.resetDevice();
        }
    }

    render() {
        const { progress, deviceInfo } = this.props;

        return (
            <AppScreen progress={progress}>
                <DeviceInfo info={deviceInfo} />
                <MenuButtonContainer>
                    <MenuButton title="Network" onPress={() => this.props.navigateNetwork()} />
                    <MenuButton title="Reset" onPress={() => this.onReset(true)} />
                </MenuButtonContainer>
                <ConfirmationModal visible={this.state.confirming} onYes={() => this.onReset(false)} onNo={() => this.setState({ confirming: false })} />
            </AppScreen>
        );
    }
}

ConfigureScreen.propTypes = {
    navigateNetwork: PropTypes.func.isRequired,
    navigateBack: PropTypes.func.isRequired,
    deviceInfo: PropTypes.object.isRequired,
    progress: PropTypes.object.isRequired,
    resetDevice: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    progress: state.progress,
    deviceInfo: state.deviceInfo,
});

export default connect(mapStateToProps, {
    navigateNetwork,
    navigateBack,
    resetDevice
})(ConfigureScreen);
