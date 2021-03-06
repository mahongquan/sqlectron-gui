//import { ipcRenderer, shell } from 'electron'; // eslint-disable-line import/no-unresolved
import React, { Component } from 'react';
var { ipcRenderer, shell } = window.myremote.electron; //from '../../browser/remote';

const EVENT_KEY = 'sqlectron:update-available';
//console.log(global);

const repo = ''; //global.SQLECTRON_CONFIG.repository.url.replace('https://github.com/', '');
const LATEST_RELEASE_URL = `https://github.com/${repo}/releases/latest`;

export default class UpdateChecker extends Component {
  componentDidMount() {
    ipcRenderer.on(EVENT_KEY, this.onUpdateAvailable.bind(this));
  }

  componentWillUnmount() {
    ipcRenderer.removeListener(EVENT_KEY, this.onUpdateAvailable.bind(this));
  }

  onUpdateAvailable() {
    this.setState({ isVisible: true });
  }

  onUpdateClick(event) {
    event.preventDefault();
    shell.openExternal(LATEST_RELEASE_URL);
  }

  render() {
    const isVisible = this.state && this.state.isVisible;
    if (!isVisible) {
      return null;
    }

    // TODO: show the latest avaible version
    // const currentVersion = `v${PACKAGE_JSON.version}`;
    // const availableVersion = '...';

    return (
      <a className="ui green label" onClick={this.onUpdateClick}>
        <i className="cloud download icon" />
        Update available
        {/* <div className="detail">{APP_VERSION}</div> */}
      </a>
    );
  }
}
