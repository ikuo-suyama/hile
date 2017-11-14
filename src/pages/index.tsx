import * as React from 'react';
import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import withRoot from '../components/withRoot';

import HileAppBar from '../components/HileAppBar'

const styles = {
  root: {
    textAlign: 'center',
  },
};

type State = {
  open: boolean,
};

class Index extends React.Component<WithStyles<keyof typeof styles>, State> {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <HileAppBar />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)<{}>(Index));
