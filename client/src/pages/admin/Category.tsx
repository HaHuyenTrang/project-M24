import { useEffect, useRef, useState } from 'react'
import './admin.css'
import './addCategory.css'
import { useDispatch, useSelector } from 'react-redux';
// import { getAllProduct } from '../../store/reducer/productReducer';
import { addCategory, deleteCategory, getCategory } from '../../store/reducer/categoryReducer';
// import './admin'

export default function Category() {
    const [getValueInputName, setGetvalueInputName] = useState<string>("")
    const [getValueInputPrice, setGetvalueInputPrice] = useState<string>("")
    const [getValueInputExpression, setGetvalueInputExpression] = useState<string>("")
    const [getValueInputDescribe, setGetvalueInputDescribe] = useState<string>("")
    const [getValueInputImg, setGetvalueInputImg] = useState<string>("")


    const handleGetvalueName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGetvalueInputName(e.target.value)
    }

    const handleGetvaluePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGetvalueInputPrice(e.target.value)
    }

    const handleGetvalueDescribe = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGetvalueInputDescribe(e.target.value)
    }

    const handleGetvalueImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGetvalueInputImg(e.target.value)
    }

    const handleGetvalueExpression = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGetvalueInputExpression(e.target.value)
    }

    const [isOpen, setIsOpen] = useState(false);

    const categoryProduct: any = useSelector(((state: any) => state.categoryReducer.category));

    console.log(categoryProduct)

    const disPatch = useDispatch();



    const handleAddCategory = () => {
        const newCategory = {
            name: getValueInputName,
            price: getValueInputPrice,
            expression: getValueInputExpression,
            describe: getValueInputDescribe,
            image: getValueInputImg
        }
        disPatch(addCategory(newCategory))
    }
    const handleDeleteCategory = (id: number) => {
        let confirmDelete = window.confirm("bạn có chắc chắn muốn xóa???")
        if (confirmDelete) {
            disPatch(deleteCategory(id))
            disPatch(getCategory())

        }

    }

    useEffect(() => {
        disPatch(getCategory())

    }, [])




    return (<>
        {/* SIDEBAR */}
        <section id="sidebar">
            <a href="#" className="brand">
                <i className="bx bxs-smile" />
                <span className="text">Trung tâm quản lí</span>
            </a>
            <ul className="side-menu top">
                <li className="active">
                    <a href="/admin">

                        <a href="/admin"><i className="bx bxs-dashboard" /><p className="text">Người dùng</p></a>
                    </a>
                </li>
                <li>
                    <a href="/shop">
                        <i className="bx bxs-shopping-bag-alt" />
                        <span className="text">Cửa hàng</span>
                    </a>
                </li>
                <li>
                    <a href="#">
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
                        <h1>Danh mục</h1>
                        <ul className="breadcrumb">
                            <li>
                                <a href="#">Danh mục</a>
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
                            <h3>Danh mục</h3>
                            <button onClick={() => setIsOpen(true)} style={{ width: "200px", margin: 0 }}>Thêm</button>
                            <i className="bx bx-filter" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tên sản phẩm</th>
                                    <th>ID sản phẩm</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryProduct.map((item: any) => {

                                    return (

                                        <tr className='item-flower' key={item.id}  >
                                            <td style={{ marginTop: "17%" }}>{item.name}</td>
                                            <td style={{ textAlign: "start" }}>{item.id}</td>
                                            <td>
                                                <button>Sửa</button>
                                                <button onClick={() => handleDeleteCategory(item.id)}>Xóa</button>
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
        {/* CONTENT */}
        {/* showForm */}
        {isOpen && <div className='overley'>
            <div className='Adminnn' style={{ display: "flex", alignItems: "center", height: "50px", marginTop: "240px", padding: "90px" }}>
                <div className='border'>
                    <h2>Thêm danh mục</h2>
                    {/* <br /> */}
                    <b>Tên: </b>
                    <input onChange={handleGetvalueName} type="text" name="name" id="" placeholder='Nhập tên sản phẩm' />

                    {/* <br /> */}
                    <b>Giá:</b>
                    <input onChange={handleGetvaluePrice} type="text" name="price" id="" placeholder="Nhập giá trị sản phẩm" />
                    <b>Hình thức:</b>
                    <input onChange={handleGetvalueExpression} type="text" name="expression" id="" placeholder="Bó/Bông" />

                    {/* <br /> */}
                    <b>Mô tả:</b>
                    <input onChange={handleGetvalueDescribe} type="text" name="describe" id="" placeholder="Nhập mô tả" />

                    {/* <br /> */}
                    <b>Ảnh:</b>
                    <input onChange={handleGetvalueImg} type="text" name="img" id="" placeholder="image" />

                    <div style={{ display: "flex", gap: "10px" }}>
                        <button onClick={handleAddCategory} >Thêm</button>
                        <button onClick={() => setIsOpen(false)}>Đóng</button>
                    </div>

                </div>

            </div>
        </div>}

    </>)
}

