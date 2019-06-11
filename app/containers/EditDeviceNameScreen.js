import _ from "lodash";

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, Text, Image, Button, TextInput, ScrollView, AsyncStorage, Modal } from "react-native";

import { StackNavigator, addNavigationHelpers } from "react-navigation";

import RNLanguages from "react-native-languages";
import i18n from "../internationalization/i18n";

import { Toasts } from "../lib/toasts";

import { hexArrayBuffer, arrayBufferToBase64 } from "../lib/base64";

import * as Files from "../lib/files";
import { AppScreen } from "../components";

import { navigateEasyModeWelcome, findAllFiles, executePlan, deviceStartConnect, deleteAllLocalFiles, archiveAllLocalFiles, navigateWelcome, configureName } from "../actions";

import styles from "../styles";

class EditDeviceName extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return { title: "Edit Device Name" };
    };

    constructor() {
        super();
        this.state = {
            deviceName: ""
        };
    }

    _addData = async (deviceId, text, address) => {
        if (text == "") {
            Toasts.show("Must input a name");
        } else {
            const { configureName } = this.props;
            try {
                await AsyncStorage.setItem(deviceId, text);
                configureName(address, text);
                Toasts.show("Your device name has been saved");
            } catch (error) {
                console.log("error adding data", error);
            }
        }
    };

    render() {
        const { deviceId, navigateEasyModeWelcome, address } = this.props;
        console.log("rendering");
        return (
            <View>
                <View style={{ paddingTop: 20, paddingBottom: 10 }}>
                    <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1 }} placeholder={"Device Name"} onChangeText={text => this.setState({ deviceName: text })} />
                </View>
                <View style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                    <Button
                        className="Save-Device-Name"
                        title="Save"
                        onPress={() => {
                            console.log("pressed");
                            this._addData(deviceId, this.state.deviceName, address);
                        }}
                    />
                </View>
                <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Button className="Cancel-Device-Name" title="Cancel" onPress={() => navigateEasyModeWelcome()} />
                </View>
            </View>
        );
    }
}

EditDeviceName.propTypes = {
    deviceId: PropTypes.string.isRequired,
    navigateEasyModeWelcome: PropTypes.func.isRequired,
    configureName: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const route = state.nav.routes[state.nav.index];
    return {
        deviceId: route.params ? route.params.deviceId : "",
        address: route.params ? route.params.address : null
    };
};

export default connect(
    mapStateToProps,
    {
        navigateEasyModeWelcome,
        configureName
    }
)(EditDeviceName);
