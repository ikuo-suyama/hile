import * as React from 'react';
import { withStyles } from 'material-ui/styles';

// Apply some reset
const decorate = withStyles(theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
}));

const AppWrapper = decorate<{ children: JSX.Element }>(props => props.children);

function withRoot(BaseComponent: React.ComponentType) {
  class WithRoot extends React.Component {
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <AppWrapper>
              <BaseComponent />
        </AppWrapper>
      );
    }
  }

  return WithRoot;
}

export default withRoot;