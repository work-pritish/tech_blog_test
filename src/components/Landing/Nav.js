import React, { useState } from 'react'
import Login from '../UI/Login'
import './nav.css'
import Modal from '../UI/Modal'
export default function Nav() {
    const [adminModal, setAdminModal] = useState(false)
    return (
        <nav>
            {
                adminModal
                    ?
                    <Modal close={() => setAdminModal(false)}>
                        <Login />
                    </Modal>
                    : null
            }
            <input type="checkbox" id="nav_toggle"/>
            <label for="nav_toggle" class="nav_toggle_label">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </label>
            <div class="link_container">
                <div class="nav_links">HOME</div>
                <div class="nav_links">BLOG</div>
                <div class="nav_links" onClick={() => setAdminModal(true)}>ADMIN</div>
            </div>
        </nav>
    )
}
