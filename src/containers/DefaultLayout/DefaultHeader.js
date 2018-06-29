import React, { Component } from 'react';
import { Badge, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand } from '@coreui/react';
import brandLogo from '../../assets/img/paypal-logo-white.png';
import messagesLogo from '../../assets/img/mail-icon-white.png';
import logoutLogo from '../../assets/img/logout-icon-white.png';
import AppSidebarMinimizer from './SidebarMinimizer';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    return (
     <React.Fragment>
		<AppSidebarMinimizer/>
		<AppNavbarBrand full={{ src: brandLogo, width: 111, height: 28, alt: 'PayPal Logo' }} />
		<div className="brand-logo-extension">
			<div className="col-sm-12 line2">Workforce Insights Platform</div>
		</div>

		<Nav className="ml-auto" navbar>
			<NavItem>
				<NavLink href="#"><img src={messagesLogo} alt="messages" style={{width: '26px', height: '18px'}}/>
					<Badge pill color="primary">5</Badge>
				</NavLink>
			</NavItem>
			<NavItem style={{marginRight: '15px'}}>
				<NavLink href="#"><img src={logoutLogo} alt="messages" style={{width: '27px', height: '18px'}}/>
				</NavLink>
			</NavItem>
		</Nav>
	</React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
