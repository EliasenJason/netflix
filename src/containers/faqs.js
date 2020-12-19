import React from 'react';
import faqs from '../fixtures/faqs.json'
import { Accordion } from '../components'
import { OptForm } from '../components';

// Container, Input, Button, Text

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqs.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>
            <OptForm>
                
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Join the Fun</OptForm.Button>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Text>
            </OptForm>
        </Accordion>
    ) 
}