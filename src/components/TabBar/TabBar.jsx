import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TabNav from './TabNav';

const StyledTabBar = styled.div`
   max-width: 55vw;
  
  
    @media (max-width: 980px) {
        max-width: 90vw;
    }
  }
`;

const StyledTabNavContainer = styled.div`
  position: relative;
  display: flex;
`;

const StyledTabContainer = styled.div`
  border: 1px solid #EDEDED;
  border-radius: 0 0 5px 5px;
  position: relative;
  top: -1px;
  
  & pre {
    margin-bottom: 0;
  }
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
