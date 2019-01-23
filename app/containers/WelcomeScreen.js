import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import RNLanguages from 'react-native-languages';

import i18n from '../internationalization/i18n';


import { AppScreen, MenuButtonContainer, MenuButton } from '../components';

import { initialize, navigateConnecting, browseDirectory, navigateBrowser, navigateEasyModeWelcome, navigateAbout, deviceStartConnect, deviceStopConnect } from '../actions';

import styles from '../styles';

class WelcomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.setParam({i18n.t('welcome.title')}),
        };
    };
    // static navigationOptions = {
    //     title: 'Welcome',
    // };

    componentDidMount() {
        this.props.initialize();
        this.props.deviceStartConnect();
    }

    render() {
        const { navigateConnecting, browseDirectory, navigateEasyModeWelcome, navigateAbout } = this.props;

        return (
            <AppScreen>
                <Image source={require('../../assets/fk-header.png')}
                    style={{
                        resizeMode: 'contain',
                        width: '100%',
                        height: 200,
                    }} />
                <MenuButtonContainer>
                    <MenuButton title={i18n.t('welcome.connect')} onPress={() => navigateConnecting()} />
                    <MenuButton title={i18n.t('welcome.browser')} onPress={() => browseDirectory('/')} />
                    <MenuButton title={i18n.t('welcome.mode')} onPress={() => navigateEasyModeWelcome()} />
                    <MenuButton title={i18n.t('welcome.about')} onPress={() => navigateAbout()} />
                </MenuButtonContainer>
            </AppScreen>
        );
    }
}

WelcomeScreen.propTypes = {
    initialize: PropTypes.func.isRequired,
    navigateConnecting: PropTypes.func.isRequired,
    browseDirectory: PropTypes.func.isRequired,
    navigateEasyModeWelcome: PropTypes.func.isRequired,
    navigateAbout: PropTypes.func.isRequired,
    deviceStartConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {
    initialize,
    navigateConnecting,
    navigateEasyModeWelcome,
    navigateAbout,
    browseDirectory,
    deviceStartConnect
})(WelcomeScreen);
