import * as React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import withStyles, { WithStyles } from 'material-ui/styles/withStyles';
import withRoot from './withRoot';

import GoogleMapReact from 'google-map-react';
import { Coords } from 'google-map-react';

const styles = {
  root: {
    textAlign: 'center',
    height: '100%'
  },
  paper: {
    height: '100%'
  }
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
    const center: Coords = { lat: 35.650615, lng: 139.540694 }
    const zoom = 13;

    return (
      <div className={this.props.classes.root}>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography type="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography type="subheading" gutterBottom>
          example project
        </Typography>
        <Paper className={this.props.classes.paper}>
          <GoogleMapReact
            center={center}
            zoom={zoom} >
          </GoogleMapReact>
        </Paper>
        <Button raised color="accent" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)<{}>(Index));