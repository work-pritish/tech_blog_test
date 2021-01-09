import Axios from 'axios'
import React, { useState } from 'react'
import './Login.css'

export default function Login() {
    const [form, setForm] = useState({ email_id: '', password: '' })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        Axios.post('/admin/login', form)
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="login">
            <div className="login_head">
                Login to <br /> <span> TECHREX </span>
            </div>

            <div className="login_content">

                <div className="topics">
                    <div className="topic">Tech</div>
                    <div className="topic">Updates</div>
                    <div className="topic">Fun</div>
                </div>

                <div className="login_field">
                    <label htmlFor="email_id">Email-Id</label>
                    <input onChange={onChangeHandler} id="email_id" name="email_id" type="email" placeholder="Email" />
                </div>

                <div className="login_field">
                    <label htmlFor="password">Password</label>
                    <input onChange={onChangeHandler} id="password" name="password" type="password" placeholder="Password" />
                </div>

                <div style={{ width: "100%", textAlign: "center" }}>
                    <button className="login_submit" onClick={onSubmitHandler}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>

                <div className="forgot_password">Forgot your password?</div>
                <div className="or">
                    <span> OR </span>
                </div>
                <div className="login_google">
                    {/* <img src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" alt="" />
                                    <div> Sign in with Google </div> */}
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--FGeepbF---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/dpiytaii5nezptwibem4.png" alt="" />
                </div>
            </div>
        </div>

    )
}
