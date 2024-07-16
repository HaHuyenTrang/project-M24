import React, { useEffect, useState } from 'react'
import './admin.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getAllProduct, updateProduct } from '../../store/reducer/productReducer';
import { Products } from '../../interface/user';
import { useNavigate } from 'react-router-dom';
// import "./FormEdit.css"
// import './admin'

export default function Shop() {
    const navigate = useNavigate()
    const [showFormEdit, setShowFormEdit] = useState<boolean>(false)
    const flower: any = useSelector(((state: any) => state.productReducer.list))
    console.log(flower)
    const [productEdit, setProductEdit] = useState<Products | null>(null)
    const disPatch = useDispatch();
    useEffect(() => {
        disPatch(getAllProduct())
    }, [])

    // hàm xóa sản phẩm
    const handleDelete = (id: number) => {
        let confirmDelete = window.confirm("bạn có muốn xóa sản phẩm này???")
        if (confirmDelete) {
            disPatch(deleteProduct(id))
            console.log(id);
            disPatch(getAllProduct())
        }
    }
    //  hàm sửa thông tin sản phẩm
    const handleShowEdit = (product: Products) => {
        setProductEdit(product)
        setShowFormEdit(true);

    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (productEdit) {
            await disPatch(updateProduct({
                id: productEdit.id,
                name: productEdit.name,
                price: productEdit.price,
                expression: productEdit.expression,
                describe: parseInt(productEdit.describe),
                img: productEdit.img
            }))
            setShowFormEdit(false)
            await disPatch(getAllProduct())
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (productEdit) {
            setProductEdit({
                ...productEdit,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleClick = () => {
        navigate("/add")
    }
    return (<>
        {/* SIDEBAR */}
        <section id="sidebar">
            <a href="#" className="brand">
                <i className="bx bxs-smile" />
                <span className="text">Trung tâm quản lí</span>
            </a>
            <ul className="side-menu top">
                <li className="active">
                    <a href="#">

                        <a href="/admin"><i className="bx bxs-dashboard" /><p className="text">Người dùng</p></a>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bxs-shopping-bag-alt" />
                        <span className="text">Cửa hàng</span>
                    </a>
                </li>
                <li>
                    <a href="/category">
                        <i className="bx bxs-doughnut-chart" />
                        <span className="text">Danh mục</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bxs-message-dots" />
                        <span className="text">Tin nhắn</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bxs-group" />
                        <span className="text">Đội</span>
                    </a>
                </li>
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#">
                        <i className="bx bxs-cog" />
                        <span className="text">Cài đặt</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="logout">
                        <i className="bx bxs-log-out-circle" />
                        <span className="text">Đăng xuất</span>
                    </a>
                </li>
            </ul>
        </section>
        {/* SIDEBAR */}
        {/* CONTENT */}
        <section id="content">
            {/* NAVBAR */}
            <nav>
                <i className="bx bx-menu" />
                <a href="#" className="nav-link">
                    Loại
                </a>
                <form action="#">
                    <div className="form-input">
                        <input type="search" placeholder="Tìm kiếm..." />
                        <button type="submit" className="search-btn" style={{ margin: 0 }}>
                            <i className="bx bx-search" />
                        </button>
                    </div>
                </form>
                <input type="checkbox" id="switch-mode" hidden />
                <label htmlFor="switch-mode" className="switch-mode" />
                <a href="#" className="notification">
                    <i className="bx bxs-bell" />
                    <span className="num">8</span>
                </a>
                <a href="#" className="profile">
                    <span className="material-symbols-outlined">
                        person
                    </span>
                </a>
            </nav>
            {/* NAVBAR */}
            {/* MAIN */}
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Cửa hàng của bạn</h1>
                        <ul className="breadcrumb">
                            <li>
                                <a href="#">Cửa hàng</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right" />
                            </li>
                            <li>
                                <a className="active" href="#">
                                    Trang chủ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="btn-download">
                        <i className="bx bxs-cloud-download" />
                        <span className="text">Tải về</span>
                    </a>
                </div>
                <ul className="box-info">
                    <li>
                        <i className="bx bxs-calendar-check" />
                        <span className="text">
                            <h3>1020</h3>
                            <p>Đơn hàng mới</p>
                        </span>
                    </li>
                    <li>
                        <i className="bx bxs-group" />
                        <span className="text">
                            <h3>2834</h3>
                            <p>Truy cập</p>
                        </span>
                    </li>
                    <li>
                        <i className="bx bxs-dollar-circle" />
                        <span className="text">
                            <h3>$2543</h3>
                            <p>Tổng doanh thu</p>
                        </span>
                    </li>
                </ul>
                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Sản phẩm</h3>
                            <button style={{ width: "200px", margin: 0 }} onClick={handleClick}>Thêm sản phẩm</button>
                            <i className="bx bx-filter" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá trị sản phẩm</th>
                                    <th>Hình thức</th>
                                    <th>Ảnh</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {flower.map((item: any) => {

                                    return (

                                        <tr className='item-flower' key={item.id}  >
                                            <td style={{ marginTop: "22%" }}>{item.name}</td>
                                            <td
                                                style={{ textAlign: "start" }}><b className='cl-price'>{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</b>
                                            </td>
                                            <td style={{ textAlign: "start" }}>{item.expression}</td>
                                            <td style={{ textAlign: "start" }}><img style={{ width: "50px", height: "50px" }} src={item.img} alt="" /></td>
                                            <td>
                                                <button onClick={() => handleShowEdit(item)}>Sửa</button>
                                                <button onClick={() => handleDelete(item.id)}>Xóa</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="todo">
                        <div className="head">
                            <h3>Tài khoản người dùng</h3>
                            <i className="bx bx-plus" />
                            <i className="bx bx-filter" />
                        </div>
                        <ul className="todo-list">
                            <li className="completed">
                                <p><span className="material-symbols-outlined">
                                    person
                                </span></p>
                                <i className="bx bx-dots-vertical-rounded" />
                            </li>
                            <li className="completed">
                                <p><span className="material-symbols-outlined">
                                    person
                                </span></p>
                                <i className="bx bx-dots-vertical-rounded" />
                            </li>
                            <li className="not-completed">
                                <p><span className="material-symbols-outlined">
                                    person
                                </span></p>
                                <i className="bx bx-dots-vertical-rounded" />
                            </li>
                            <li className="completed">
                                <p><span className="material-symbols-outlined">
                                    person
                                </span></p>
                                <i className="bx bx-dots-vertical-rounded" />
                            </li>
                            <li className="not-completed">
                                <p><span className="material-symbols-outlined">
                                    person
                                </span></p>
                                <i className="bx bx-dots-vertical-rounded" />
                            </li>
                        </ul>
                    </div> */}
                </div>
            </main>
            {/* MAIN */}
        </section>
        {
            showFormEdit && <div className="modal" style={{ paddingLeft: 200 }}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <span className="close-btn" >&times;</span>
                    <form id="editProductForm" onSubmit={handleSubmit}>
                        <h2 >  Sửa </h2>
                        <label htmlFor="productName">Tên:</label>
                        <input type="text" id="productName" name="name" required onChange={handleChange} value={productEdit?.name} />

                        <label htmlFor="productPrice">Giá:</label>
                        <input type="number" id="productPrice" name="price" required onChange={handleChange} value={productEdit?.price} />

                        <label htmlFor="productDescription">Ảnh:</label>
                        <input id="productDescription" name="img" type='text' required onChange={handleChange} value={productEdit?.img}></input>

                        <button type="submit">Lưu</button>
                    </form>
                </div>
            </div>
        }
        {/* CONTENT */}
    </>)
}

