import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as Files from '../lib/files';

import { AppScreen, Loading, FileMenu } from '../components';

import { browseDirectory, openLocalFile, uploadLocalFile, deleteLocalFile } from '../actions';

class LocalFileScreen extends React.Component {
    static navigationOptions = {
        title: 'File',
    };

    onOpen(entry, parentEntry) {
        this.props.openLocalFile(entry.relativePath);
    }

    onUpload(entry, parentEntry) {
        this.props.uploadLocalFile(entry.relativePath);
    }

    onDelete(entry, parentEntry) {
        this.props.deleteLocalFile(entry.relativePath);
        this.props.browseDirectory(parentEntry.relativePath);
    }

    render() {
        const { onOpen, onUpload, onDelete } = this.props;
        const { localFiles, path } = this.props;

        const file = Files.getFileEntry(localFiles, path);
        if (!_.isObject(file)) {
            return <Loading />;
        }

        return (
            <AppScreen background={false}>
                <FileMenu file={file} onOpen={this.onOpen.bind(this)} onUpload={this.onUpload.bind(this)} onDelete={this.onDelete.bind(this)} />
            </AppScreen>
        );
    }
}

LocalFileScreen.propTypes = {
    path: PropTypes.string.isRequired,
    browseDirectory: PropTypes.func.isRequired,
    uploadLocalFile: PropTypes.func.isRequired,
    openLocalFile: PropTypes.func.isRequired,
    deleteLocalFile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const route = state.nav.routes[state.nav.index];
    return {
        path: route.params ? route.params.path : "/",
        localFiles: state.localFiles,
    };
};

export default connect(mapStateToProps, {
    browseDirectory,
    openLocalFile,
    uploadLocalFile,
    deleteLocalFile
})(LocalFileScreen);