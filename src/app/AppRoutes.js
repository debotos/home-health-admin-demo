import React from 'react'
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'

import PrivateRoute from '../utils/PrivateRoute'
import PublicRoute from '../utils/PublicRoute'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Jobs from '../pages/Jobs'
import Candidates from '../pages/Candidates'
import Messages from '../pages/Messages'
import Interviews from '../pages/Interviews'
import Reports from '../pages/Reports'
import Setting from '../pages/Setting'
import Profile from '../pages/Profile'

export const history = createHistory()

function AppRoutes() {
	return (
		<Router history={history}>
			<Switch>
				<PublicRoute exact path='/login' component={Login} />

				<PrivateRoute exact path='/profile' component={Profile} />
				<PrivateRoute exact path='/setting' component={Setting} />
				<PrivateRoute exact path='/reports' component={Reports} />
				<PrivateRoute exact path='/interviews' component={Interviews} />
				<PrivateRoute exact path='/messages' component={Messages} />
				<PrivateRoute exact path='/candidates' component={Candidates} />
				<PrivateRoute exact path='/jobs' component={Jobs} />
				<PrivateRoute exact path='/' component={Dashboard} />
			</Switch>
		</Router>
	)
}

export default AppRoutes
