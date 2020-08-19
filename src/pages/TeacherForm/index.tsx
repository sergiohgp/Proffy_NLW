import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'

import './styles.css'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherFrom() {
    const history = useHistory()

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

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Success to register!')

            history.push('/')
        }).catch(() => {
            alert('Error to register!')
        })

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

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem
        })

        setScheduleItems(updatedScheduleItems)
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

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Week day"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Sunday' },
                                            { value: '1', label: 'Monday' },
                                            { value: '2', label: 'Tuesday' },
                                            { value: '3', label: 'Wednesday' },
                                            { value: '4', label: 'Thursday' },
                                            { value: '5', label: 'Friday' },
                                            { value: '6', label: 'Saturday' }
                                        ]}
                                    >
                                    </Select>

                                    <Input
                                        name="from"
                                        label="From"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        name="to"
                                        label="to"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
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