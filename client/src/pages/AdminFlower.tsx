import React from 'react'
import './admin.css'
import './admin'

export default function Admin1() {
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
          <i className="bx bxs-dashboard" />
          <span className="text">Bảng điều khiển</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt" />
          <span className="text">Cửa hàng</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-doughnut-chart" />
          <span className="text">Analytics</span>
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
          <button type="submit" className="search-btn">
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
          <h1>Bảng điều khiển</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Bảng điều khiển</a>
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
            <h3>Bảng Điều Khiển</h3>
            <i className="bx bx-search" />
            <i className="bx bx-filter" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Người dùng</th>
                <th>Ngày đặt</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="material-symbols-outlined">
person
</span>
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Hoàn thành</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-outlined">
person
</span>
                  <p>Huền Trang</p>
                </td>
                <td>01-10-2024</td>
                <td>
                  <span className="status pending">Vận Chuyển</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-outlined">
person
</span>
                  <p>Thu Quỳnh</p>
                </td>
                <td>07-07-2024</td>
                <td>
                  <span className="status process">Chờ</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-outlined">
person
</span>
                  <p>Phương Anh</p>
                </td>
                <td>01-07-2024</td>
                <td>
                  <span className="status pending">Vận Chuyển</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-outlined">
person
</span>
                  <p>Lan Anh</p>
                </td>
                <td>06-10-2024</td>
                <td>
                  <span className="status completed">Hoàn thành</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="todo">
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
        </div>
      </div>
    </main>
    {/* MAIN */}
  </section>
  {/* CONTENT */}
  </>)
}
