import React, { useState } from "react"
import { Admin } from "../../interface/user"
import { useNavigate } from "react-router-dom"


export default function LoginAdmin() {
    const navigate = useNavigate();
    const admin = {
        email: "admin123@gmail.com",
        password: "admin123"
    }

    const [inputValue, setInputValue] = useState<Admin>({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = true
        if (!inputValue.email) {
            error.email = "Email không được để trống";
            valid = false;
        } else {
            error.email = "";
        }

        if (!inputValue.password) {
            error.password = "Mật khẩu không được để trống";
            valid = false;
        } else {
            error.password = "";
        }

        if (valid) {
            if (inputValue.email === admin.email && inputValue.password === admin.password) {
                navigate("/admin")
            } else {
                error.password = "Tài khoản hoặc mật khẩu không đúng"
                valid = false
            }
        }

        setError({ ...error })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }
    return (
        <div className="Adminnn">
            <div className='border'>
                <h2>Login Admin</h2>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" id="" onChange={handleChange}  placeholder="email của bạn"/>
                    {
                        error.email && <span style={{ color: "red", fontSize: 14 }}>{error.email}</span>
                    }
                    <label htmlFor="">Pasword</label>
                    <input type="password" name="password" id="" onChange={handleChange} placeholder="mật khẩu của bạn" />
                    {
                        error.password && <span style={{ color: "red", fontSize: 14 }}>{error.password}</span>
                    }
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
    )
}
