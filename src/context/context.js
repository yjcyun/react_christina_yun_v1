import React, { Component } from 'react';
import { linkData } from './linkData';

const WebContext = React.createContext();

class WebProvider extends Component {
  state = {
    links: linkData,
    sidebarOpen: false
  };

  // control sidebar (nav)
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  render() {
    return (
      <WebContext.Provider value={{
        ...this.state,
        handleSidebar: this.handleSidebar
      }}>
        {this.props.children}
      </WebContext.Provider>
    );
  }
}

const WebConsumer = WebContext.Consumer;

export { WebProvider, WebConsumer }
