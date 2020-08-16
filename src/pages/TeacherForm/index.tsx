import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'

import './styles.css'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

function TeacherFrom() {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setwhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    function handdleCreateClass(e: FormEvent) {
        e.preventDefault()

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost
        });

    }

    function addNewScheduleItem() {
        const newScheduleItem = { week_day: 0, from: '', to: '' }

        setScheduleItems([
            ...scheduleItems,
            newScheduleItem
        ])

    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Awesome, you want to teach."
                description="The first step is to fullfil the subscription form"
            />

            <main>
                <form onSubmit={handdleCreateClass}>
                    <fieldset>
                        <legend>Your Info</legend>
                        <Input
                            name="name"
                            label="Full Name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => {
                                setAvatar(e.target.value)
                            }}
                        />
                        <Input
                            type="number"
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => {
                                setwhatsapp(e.target.value)
                            }}
                        />
                        <Textarea
                            name="bio"
                            label="Bio"
                            value={bio}
                            onChange={(e) => {
                                setBio(e.target.value)
                            }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>About the class</legend>
                        <Select
                            name="subject"
                            label="Subject"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Art', label: 'Art' },
                                { value: 'Biology', label: 'Biology' },
                                { value: 'Physics', label: 'Physics' },
                                { value: 'Geography', label: 'Geography' },
                                { value: 'Math', label: 'Math' },
                                { value: 'Chemistry', label: 'Chemistry' },
                                { value: 'History', label: 'History' },
                                { value: 'English', label: 'English' }
                            ]}
                        >
                        </Select>
                        <Input
                            name="cost"
                            label="Cost per hour"
                            value={cost}
                            onChange={(e) => {
                                setCost(e.target.value)
                            }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Available Hours
                        <button type="button" onClick={addNewScheduleItem}>+ Add new</button>
                        </legend>

                        {scheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="subject"
                                        label="Subject"
                                        value={subject}
                                        options={[
                                            { value: 'Art', label: 'Art' },
                                            { value: 'Biology', label: 'Biology' },
                                            { value: 'Physics', label: 'Physics' },
                                            { value: 'Geography', label: 'Geography' },
                                            { value: 'Math', label: 'Math' },
                                            { value: 'Chemistry', label: 'Chemistry' },
                                            { value: 'History', label: 'History' },
                                            { value: 'English', label: 'English' }
                                        ]}
                                    >
                                    </Select>

                                    <Input name="from" label="From" type="time" />
                                    <Input name="to" label="to" type="time" />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Important Notice" />
                            Important! <br />
                            Fill all the fields
                        </p>
                        <button type="submit">Save</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherFrom