import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'



import './styles.css'
import Input from '../../components/Input'
import Select from '../../components/Select'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Available Proffys.">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Subject"
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
                    <Select
                        name="week-day"
                        label="Week day"
                        options={[
                            { value: '0', label: 'Sunday' },
                            { value: '1', label: 'Monday' },
                            { value: '2', label: 'Tuesday' },
                            { value: '3', label: 'Wednesday' },
                            { value: '4', label: 'Thursday' },
                            { value: '5', label: 'Friday' },
                            { value: '6', label: 'Saturday' },
                        ]}
                    >
                    </Select>
                    <Input type="time" name="time" label="Time" />
                </form>

            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />

            </main>
        </div>
    )
}

export default TeacherList