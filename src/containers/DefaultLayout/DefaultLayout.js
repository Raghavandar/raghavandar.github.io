import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppHeader,
  AppSidebar
} from '@coreui/react';
import navigation from '../../_nav';
import routes from '../../routes';
import DefaultHeader from './DefaultHeader';
import AppSidebarNav from './SidebarNav';

class DefaultLayout extends Component {

  render() {
    return (
		<div className='app'>
			<div className='app-body'>
				<AppHeader fixed>
					<DefaultHeader/>
				</AppHeader>
				<AppSidebar fixed display='lg'>
					<AppSidebarNav navConfig={navigation} {...this.props} />
				</AppSidebar>
				<main className='main'>
					<Container fluid>
						<Switch>
							{routes.map((route, idx) => { return route.component ? (
							<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props=> (
								<route.component {...props}/> )} />) : (null); }, )} 
								{/* Redirect from="/" to="/data" /> */}
						</Switch>
					</Container>
				</main>
			</div>
		</div>
    );
  }
}

export default DefaultLayout;
