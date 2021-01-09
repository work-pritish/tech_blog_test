import React from 'react'
import './Modal.css'

export default function Modal({ children, close }) {
    return (
        <div className="modal">
            <div className="modal_shade" onClick={() => close()}></div>
            <div className="modal_container">
                {children}
            </div>
        </div>
    )
}
