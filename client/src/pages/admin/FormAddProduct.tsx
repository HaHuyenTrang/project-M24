import { useState } from 'react'
import './formAddProduct.css'
import { AddProduct } from '../../interface/user'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/reducer/productReducer'
import { useNavigate } from 'react-router-dom'

export default function FormAddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState<AddProduct>({
        name: "",
        img: "",
        describe: "",
        expression: "",
        price: 0,
    })

    const [error, setError] = useState({
        name: "",
        img: "",
        describe: "",
        expression: "",
    })

    const handleAdd = () => {
        let valid = true;
        if (!inputValue.name) {
            error.name = "Tên không được để trống";
            valid = false;
        } else {
            error.name = "";
        }

        if (!inputValue.img) {
            error.img = "Vui lòng nhập đường dẫn";
            valid = false;
        } else {
            error.img = ""
        }

        if (!inputValue.describe) {
            error.describe = "Vui lòng nhập mô tả";
            valid = false
        } else {
            error.describe = ""
        }

        if (!inputValue.expression) {
            error.expression = "Vui long chọn hình thức";
            valid = false;
        } else {
            error.expression = ""
        }

        setError({ ...error })

        if (valid) {
            const newProduct = {
                name: inputValue.name,
                expression: inputValue.expression,
                describe: inputValue.describe,
                price: Number(inputValue.price),
                img: inputValue.img
            }
            dispatch(addProduct(newProduct));
            navigate("/shop")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }
    return (
        <div className='Adminnn' style={{ display: "flex", alignItems: "center" }}>
            <div className='border'>
                <h2>Thêm sản phẩm</h2>
                <br />
                <b>Tên: </b>
                <input type="text" name="name" id="" placeholder='Nhập tên sản phẩm' value={inputValue.name} onChange={handleChange} />
                {
                    error.name && <span style={{ color: "red", fontSize: 14 }}>Tên không được để trống</span>
                }
                <br />
                <b>Giá:</b>
                <input type="text" name="price" id="" placeholder="Nhập giá trị sản phẩm" value={inputValue.price} onChange={handleChange} />
                <b>Hình thức:</b>
                <input type="text" name="expression" id="" placeholder="Bó/Bông" value={inputValue.expression} onChange={handleChange} />
                {
                    error.expression && <span style={{ color: "red", fontSize: 14 }}>{error.expression}</span>
                }
                <br />
                <b>Mô tả:</b>
                <input type="text" name="describe" id="" placeholder="Nhập mô tả" value={inputValue.describe} onChange={handleChange} />
                {
                    error.describe && <span style={{ color: "red", fontSize: 14 }}>{error.describe}</span>
                }
                <br />
                <b>Ảnh:</b>
                <input type="text" name="img" id="" placeholder="image" value={inputValue.img} onChange={handleChange} />
                {
                    error.img && <span style={{ color: "red", fontSize: 14 }}>{error.img}</span>
                }
                <button onClick={handleAdd}>Thêm</button>
            </div>

        </div>
    )
}
