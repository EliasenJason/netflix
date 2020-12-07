import React from 'react';
import Jumbotron from '../components/jumbotron';

export default function Home() {
    return (
        <Jumbotron.Container>
            <Jumbotron.Title>This is the Title</Jumbotron.Title>
            <Jumbotron.SubTitle>this is the subtitle</Jumbotron.SubTitle>
        </Jumbotron.Container>
    )
}