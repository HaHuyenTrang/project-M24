import "../assets/login.css"
import { useEffect, useState } from "react";
import { Users } from "../interface/user";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../store/reducer/userReducer";

function validateEmail(email: any) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

export default function Login_register() {
    const userState = useSelector((state: any) => state.userReducer.user);
    console.log(userState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUser())
    }, [])
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState<Users>({
        id: Math.ceil(Math.random() * 10000),
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    // Hiển thị lỗi khi chưa có dữ liệu
    const [error, setError] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    // Hàm đăng kí
    const handleSubmit = (e: React.FormEvent) => {
        // Ngăn chặn load trang
        e.preventDefault();

        // Validate dữ liệu
        let valid = true;
        if (!inputValue.userName) {
            error.userName = "Tên không được để trống";
            valid = false;
        } else {
            error.userName = ""
        }

        if (!inputValue.email) {
            error.email = "Email không được để trống";
            valid = false;
        } else if (!validateEmail(inputValue.email)) {
            error.email = "Email không đúng định dạng";
            valid = false;
        } else if (userState.some((item: any) => item.email !== inputValue.email)) {
            error.email = "Emai đã tồn tại";
            valid = false;
        } else {
            error.email = ""
        }

        if (!inputValue.password) {
            error.password = "Mật khẩu không được để trống"
            valid = false;
        } else {
            error.password = "";
        }

        if (!inputValue.confirmPassword) {
            error.confirmPassword = "Xác nhận mật khẩu không được để trống";
            valid = false
        } else if (inputValue.password !== inputValue.confirmPassword) {
            error.confirmPassword = "Mật khẩu không khớp";
            valid = false
        } else {
            error.confirmPassword = ""
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
        <div  className="main" style={{ backgroundColor: "pink", margin: "0 auto", marginTop: 40 }}>
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="chk" aria-hidden="true">
                        Đăng kí
                    </label>
                    <input style={{ backgroundColor: "white" }} type="text" name="userName" placeholder="Tên" onChange={handleChange} value={inputValue.userName} />
                    {
                        error.userName && <span style={{ color: "red", fontSize: 12, margin:75 }}>{error.userName}</span>
                    }
                    <input style={{ backgroundColor: "white" }} type="email" name="email" placeholder="Gmail" onChange={handleChange} value={inputValue.email} />
                    {
                        error.email && <span style={{ color: "red", fontSize: 12, margin:75  }}>{error.email}</span>
                    }
                    <input style={{ backgroundColor: "white" }} type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} value={inputValue.password} />
                    {
                        error.password && <span style={{ color: "red", fontSize: 12, margin:75  }}>{error.password}</span>
                    }
                    <input style={{ backgroundColor: "white" }} type="password" name="confirmPassword" placeholder="Mật khẩu" onChange={handleChange} value={inputValue.confirmPassword} />
                    {
                        error.confirmPassword && <span style={{ color: "red", fontSize: 12, margin:75  }}>{error.confirmPassword}</span>
                    }

                    <button>Đăng kí</button>
                </form>
            </div>
            <div style={{ backgroundColor: "white" }} className="login">
                <form>
                    <label style={{ color: "pink", }} htmlFor="chk" aria-hidden="true">
                        Đăng nhập
                    </label>
                    <input style={{ backgroundColor: "pink" }} type="email" name="email" placeholder="Gmail" />
                    <input style={{ backgroundColor: "pink" }} type="password" name="pswd" placeholder="Mật khẩu" />
                    <button>Đăng nhập</button>
                </form>
            </div>
        </div>

    )
}
