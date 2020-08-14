import React from 'react'

import PageHeader from '../../components/PageHeader'

import './styles.css'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'

function TeacherFrom() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Awesome, you want to teach."
                description="The first step is to fullfil the subscription form"
            />

            <main>
                <fieldset>
                    <legend>Your Info</legend>
                    <Input name="name" label="Full Name" />
                    <Input name="avatar" label="Avatar" />
                    <Input type="number" name="whatsapp" label="Whatsapp" />

                </fieldset>

                <fieldset>
                    <legend>About the class</legend>
                    <Input name="subject" label="Subject" />
                    <Input name="cost" label="Cost per hour" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important Notice" />
                        Important! <br />
                        Fill all the fields
                    </p>
                    <button type="button">Save</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherFrom