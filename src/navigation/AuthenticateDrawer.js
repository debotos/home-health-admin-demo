import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { MdWork } from 'react-icons/md'
import { message, Tooltip } from 'antd'
import {
	FaTachometerAlt,
	FaUsers,
	FaRegEnvelope,
	FaCog,
	FaUserTie,
	FaRegFileAlt,
} from 'react-icons/fa'

import { CloseButton, LogoffButton, NavArea, ActionContainer } from './CommonUI'
import { setCurrentUser } from '../redux/actions/authActions'

function AuthenticateDrawer({ closeDrawer, setUser, auth, desktop }) {
	const handleLogoff = () => {
		const hide = message.loading('Logging off...', 0)
		/* TODO: */
		/* Remove from server side via ajax call */
		// When ajax finished then do the followings -
		/* Remove data from local storage */
		localStorage.removeItem('USER')
		/* Remove from Redux, It will kick the user to Login page */
		setUser({}) // Empty User
		setTimeout(() => hide(), 2000)
	}

	return (
		<NavArea>
			<ActionContainer>
				{desktop ? <div /> : <CloseButton onClick={closeDrawer} />}
				<Tooltip placement='right' title='Logout'>
					<div>
						<LogoffButton onClick={handleLogoff} />
					</div>
				</Tooltip>
			</ActionContainer>
			<ul>
				{NavRoutes.map((link, index) => (
					<li key={`nav_link_${index}`}>
						<NavLink to={link.to} exact activeClassName='active'>
							<span className='nav-icon'>{link.icon}</span>
							<span>{link.label}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</NavArea>
	)
}

const mapStateToProps = (state) => ({ auth: state.auth })

const mapDispatchToProps = (dispatch) => ({ setUser: (user) => dispatch(setCurrentUser(user)) })

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateDrawer)

const NavRoutes = [
	{ icon: <FaTachometerAlt />, to: '/', label: 'Dashboard' },
	{ icon: <MdWork />, to: '/jobs', label: 'Jobs' },
	{ icon: <FaUsers />, to: '/candidates', label: 'Candidates' },
	{ icon: <FaRegEnvelope />, to: '/messages', label: 'Messages' },
	{ icon: <FaUserTie />, to: '/interviews', label: 'Interviews' },
	{ icon: <FaRegFileAlt />, to: '/reports', label: 'Reports' },
	{ icon: <FaCog />, to: '/setting', label: 'Setting' },
]
