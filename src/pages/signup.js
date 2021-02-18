import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import {Form } from '../components/index'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { matchPath } from 'react-router-dom'


export default function SignUp({ children, ...restProps}) {
    const history = useHistory()
    const { firebase } = React.useContext(FirebaseContext)
    const [firstName, setFirstName] = React.useState('')
    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const isInvalid = firstName === '' || password === ''  || emailAddress === ''

    const handleSignup = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) +1,
                })
                .then(() => {
                    setEmailAddress('')
                    setPassword('')
                    setError('')
                    history.push(ROUTES.BROWSE)
                })
            })
            .catch((error) => setError(error.message))
    }


    return (
        <>
            <HeaderContainer>
                <Form>
                <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input 
                            placeholder="First Name"
                            value={firstName}
                            onChange={ event => setFirstName(event.target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={ event => setEmailAddress(event.target.value)}
                        />
                        <Form.Input 
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={ event => setPassword(event.target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">Sign Up</Form.Submit>
                        <Form.Text>
                            Already a member? <Form.Link to={ROUTES.SIGN_IN}>Sign In now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            
            <FooterContainer />
        </>
    )
}