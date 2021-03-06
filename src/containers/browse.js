import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'

export function BrowseContainer() {
    const [profile, setProfile] = React.useState({})

    const user = {
        displayName: 'Jason',
        photoURL: '1'
    }

    return profile.displayName ? (
        <>
            <p>Browse container</p>
            <FooterContainer />
        </>) 
        : (
            <SelectProfileContainer user={user} setProfile={setProfile} />
        )
}