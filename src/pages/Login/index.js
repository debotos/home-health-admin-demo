import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { LockOutlined, MailOutlined, LoginOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Logo from '../../assets/logo.png'
import { setCurrentUser } from '../../redux/actions/authActions'

export class Login extends Component {
	onFinish = (values) => {
		console.log('Success:', values)
		// TODO: Ajax req to send the data | pass res to redux
		this.formRef.current.resetFields()
		localStorage.setItem('USER', JSON.stringify(values))
		/* Save to Redux for app use*/
		/* Also it will instantly redirect the user to Dashboard page */
		this.props.setUser(values)
	}

	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	constructor(props) {
		super(props)
		this.formRef = React.createRef()
	}

	render() {
		return (
			<Container fluid>
				<Box>
					<Image src={Logo} alt='Care Pine Home Health' />
					<h3 style={{ margin: '10px 0' }}>Caring Nurses and Therapists to Your Home, Today!</h3>
					<h5 style={{ margin: '10px 0' }}>Welcome Back, Please login to your admin account</h5>
					<Form
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
						layout='vertical'
						ref={this.formRef}
						labelAlign='left'
						initialValues={{ remember: true }}
					>
						<Form.Item
							label='Email Address'
							name='email'
							hasFeedback
							validateFirst
							rules={[
								{ whitespace: true, required: true, message: 'Provide email address!' },
								{ type: 'email', message: 'Invalid email address!' },
							]}
						>
							<Input prefix={<MailOutlined />} allowClear placeholder='Email address' />
						</Form.Item>

						<Form.Item
							label='Password'
							name='password'
							hasFeedback
							validateFirst
							rules={[{ whitespace: true, required: true, message: 'Please input your Password!' }]}
						>
							<Input.Password prefix={<LockOutlined />} placeholder='Password' allowClear />
						</Form.Item>

						<div style={{ margin: '20px 0 5px 0', display: 'flex', justifyContent: 'center' }}>
							<Button icon={<LoginOutlined />} type='primary' htmlType='submit'>
								Sign In
							</Button>
						</div>
					</Form>
				</Box>
			</Container>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	setUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(Login)

export const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: ${(props) => `url(${props.bg}) no-repeat`};
	background-size: cover;
	background-attachment: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const Box = styled.div`
	width: 100%;
	height: 100%;
	max-width: 430px;
	background-color: rgba(255, 255, 255, 0.9);
	padding: 1rem;
	margin: 15px;
	border-radius: 3px;
	text-align: center;
`
export const Image = styled.img`
	max-width: 150px;
	height: auto;
`
