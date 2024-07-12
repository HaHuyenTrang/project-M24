import { useEffect } from 'react'
import './admin.css'
import { useDispatch, useSelector } from 'react-redux';
// import { getAllProduct } from '../../store/reducer/productReducer';
import { getCategory } from '../../store/reducer/categoryReducer';
// import './admin'

export default function Category() {
    const categoryProduct: any = useSelector(((state: any) => state.categoryReducer.category));
    console.log(categoryProduct)
    const disPatch = useDispatch();
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

                        <a href="/admin"><i className="bx bxs-dashboard" /><p className="text">Bảng điều khiển</p></a>
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
                            <i className="bx bx-search" />
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
                                                <button>Xóa</button>
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
    </>)
}

