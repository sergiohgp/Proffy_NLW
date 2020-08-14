import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'



import './styles.css'
import Input from '../../components/Input'


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Available Proffys.">
                <form id="search-teachers">
                    <Input name="subject" label="Subject" />
                    <Input name="week-day" label="Week day" />
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