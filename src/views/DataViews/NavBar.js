import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from './Tabs';
import Tab from './Tab';
import Typography from '@material-ui/core/Typography';
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  componentDidMount() {
	for(var i=0; i < this.props.childList.length; i++) {
		if(this.props.childList[i].viewName === this.props.currentView) {
			this.handleChange(null, i);
		}
	}
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.childList && this.props.childList && 
      prevProps.childList[0].url !== this.props.childList[0].url) {
      this.setState({ value: 0 });
    } else if(!prevProps.childList && this.props.childList && 
      this.props.childList.length > 0) {
      this.setState({ value: 0 });
    }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    if(!this.props.childList || this.props.childList.length === 0) {
      return (
        <div className={'dataViewNavBar '+classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary">
          </Tabs>
        </AppBar>
      </div>
      );
    }

    return (
      <div className={'dataViewNavBar '+classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary">
            {this.props.childList.map((e, i) => {
              return (
                <Tab label={e.name} link={e.url} children={e.children}></Tab>
              )
            })}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);