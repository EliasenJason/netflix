import React from 'react'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components/index'
import { FooterContainer } from '../containers/footer'
import * as ROUTES from '../constants/routes'

export default function SignIn() {
    const [error, setError] = React.useState(false)
    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('')

    const isInValid = password === '' | emailAddress === '';

    const handleSignin = (event) => {
        event.preventDefault()

    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
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
                        <Form.Submit disabled={isInValid} type="submit">Sign In</Form.Submit>
                        <Form.Text>
                            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
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