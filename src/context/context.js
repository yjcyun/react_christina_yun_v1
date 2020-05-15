import React, { Component } from 'react';
import { linkData } from './linkData';
import { projectData } from './projectData';

const WebContext = React.createContext();

class WebProvider extends Component {
  state = {
    links: linkData,
    sidebarOpen: false,
    projects: [],
    recentProjects: [],
    loading: true
  };

  componentDidMount() {
    this.setProjects(projectData);
  };

  // control sidebar (nav)
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  // set projects: recent
  setProjects = (projects) => {
    let recentProjects = projects.filter(item => item.recent === true);

    this.setState({
      projects,
      recentProjects,
      loading: false
    });
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
