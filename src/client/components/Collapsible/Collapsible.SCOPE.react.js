/*
   What is a SCOPE file. See documentation here:
   https://github.com/OpusCapita/react-showroom-client/blob/master/docs/scope-component.md
*/

import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from '@opuscapita/react-showroom-client';
import { ThemeProvider } from '@opuscapita/react-theming';

const theme = {
  'text-color': '#67707c'
};

@showroomScopeDecorator
export default
class CollapsibleScope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          {this._renderChildren()}
        </ThemeProvider>
      </div>
    );
  }
}

CollapsibleScope.contextTypes = {
  i18n: PropTypes.object
};
CollapsibleScope.childContextTypes = {
  i18n: PropTypes.object
};
