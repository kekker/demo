import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TabNav from './TabNav';

const StyledTabBar = styled.div`
  
`;

const StyledTabNavContainer = styled.div`
  position: relative;
  display: flex;
  z-index: 2;
`;

const StyledTabContainer = styled.div`
  padding: 20px;
  min-height: 100px;
  border: 1px solid black;
  border-radius: 0 0 5px 5px;
  position: relative;
  top: -1px;
`;

class TabBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: null,
    };

    this.getChildrenLabels = this.getChildrenLabels.bind(this);
    this.setActiveTab = this.setActiveTab.bind(this);
    this.renderTabs = this.renderTabs.bind(this);
  }

  componentDidMount() {
    const { children = [] } = this.props;

    const activeTab = this.getChildrenLabels(children)[0];

    this.setActiveTab(activeTab);
  }

  getChildrenLabels = children => children.map(({ props }) => props.label);

  setActiveTab = activeTab => {
    const { activeTab: currentTab } = this.state;
    if (currentTab !== activeTab) {
      this.setState({
        activeTab,
      });
    }
  }

  renderTabs = () => {
    const { children = [] } = this.props;
    const { activeTab } = this.state;

    return this.getChildrenLabels(children).map(navLabel => (
      <TabNav
        key={navLabel}
        navLabel={navLabel}
        isActive={activeTab === navLabel}
        onChangeActiveTab={this.setActiveTab}
      />
    ));
  }

  render() {
    const { activeTab } = this.state;
    const { children } = this.props;

    return (
      <StyledTabBar>
        <StyledTabNavContainer>
          {this.renderTabs()}
        </StyledTabNavContainer>
        <StyledTabContainer>
          {React.Children.map(children, child => React.cloneElement(child, { activeTab }))}
        </StyledTabContainer>
      </StyledTabBar>
    );
  }
}

TabBar.propTypes = {
  children: PropTypes.node
};

TabBar.defaultProps = {
  children: null
};

export default TabBar;
