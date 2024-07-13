import React, { useEffect, useState } from 'react';
import './admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser, searchUser, statusUser } from '../../store/reducer/userReducer';
import { Users } from '../../interface/user';
import { useNavigate } from 'react-router-dom';

export default function Admin1() {
  const users = useSelector((state: any) => state.userReducer.user);
  const [selectedId, setselectedId] = useState<number | null>(null)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<Users[]>([]);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    if (!searchValue) {
      setFilteredUsers(users);
    } else {
      const result = await dispatch(searchUser(searchValue));
      setFilteredUsers(result.payload); // Assuming searchUser action returns the filtered users in payload
    }
  };

  const handleBlock = (id: number) => {
    setselectedId(id)
    dispatch(statusUser({ id, status: 1 }))
    dispatch(getAllUser())
    setselectedId(null)
  }

  const handleUnBlock = (id: number) => {
    setselectedId(id)
    dispatch(statusUser({ id, status: 0 }))
    dispatch(getAllUser())
    setselectedId(null)

  }

  const handleLogout = () => {
    const confirmLogout = confirm("Bạn có chắc chắn đăng xuất không?");
    if (confirmLogout) {
      navigate("/loginAdmin")
    }
  }

  return (
    <>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile" />
          <span className="text">Trung tâm quản lí</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="/admin">
              <i className="bx bxs-dashboard" />
              <p className="text">Bảng điều khiển</p>
            </a>
          </li>
          <li>
            <a href="/shop">
              <i className="bx bxs-shopping-bag-alt" />
              <p className="text">Cửa hàng</p>
            </a>
          </li>
          <li>
            <a href="/category">
              <i className="bx bxs-doughnut-chart" />
              <span className="text">Danh mục </span>
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
            <a href="#" className="logout" onClick={handleLogout}>
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
          <a href="#" className="nav-link">Loại</a>
          <form action="#">
            <div className="form-input">
              <input type="text" placeholder="Tìm kiếm..." onChange={handleSearch} value={search} />
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
            <span className="material-symbols-outlined">person</span>
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
                  <a className="active" href="#">Trang chủ</a>
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
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((item: Users) => (
                    <tr key={item.id} style={{ opacity: item.status === 1 ? 0.5 : 1 }}>
                      <td style={{ marginTop: "80%" }}>{item.id}</td>
                      <td>{item.userName}</td>
                      <td>{item.email}</td>
                      <td>
                        {
                          item.status === 1 ? <button onClick={() => handleUnBlock(item.id)}>Mở khóa</button> : <button onClick={() => handleBlock(item.id)}>Khóa</button>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
}
