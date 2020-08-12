import React from 'react'

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/54996062?s=460&u=aaf5a4a3287c87691cab70e3c51ff5ffe7421154&v=4" alt="" />
                <div>
                    <strong>Sergio Pereira</strong>
                    <span>Physics and Math</span>
                </div>
            </header>
            <p>Love physics and Math</p>
            <footer>
                <p>Price/hr
                       <strong>CAD$200</strong>
                </p>
                <button type="button">
                    <img src={WhatsappIcon} alt="Whatsapp" />
                            Contact
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem