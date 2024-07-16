// Trong file Home.tsx

import { useEffect, useState } from 'react';
import "./home.css";
import { useDispatch, useSelector } from 'react-redux';
import { addCarts, getAllProduct, setCart } from '../../store/reducer/productReducer';
import { useNavigate } from 'react-router-dom';

export default function ClassifyProduct() {
  const [account, setAccount] = useState(JSON.parse(localStorage.getItem("account") || "null"));
  const flower: any = useSelector(((state: any) => state.productReducer.list));
  const cart = useSelector((state: any) => state.productReducer.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
    // Lấy giỏ hàng từ localStorage và set vào Redux state
    dispatch(setCart(account.cart));
  }, [dispatch]);

  const handleDetail = (id: number) => {
    console.log(id);
    navigate(`/detail/${id}`);
  };

  const handleLogout = () => {
    const confirmLogOut = window.confirm("Bạn có chắc chắn muốn đăng xuất không?");
    if (confirmLogOut) {
      localStorage.removeItem("account");
      navigate("/login");
      setAccount(null);
    }
  };

  const handleAddToCart = (productId: number) => {
    if (account) {
      dispatch(addCarts(productId));
      alert("Thêm sản phẩm vào giỏ hàng thành công!");
    } else {
      // Xử lý khi người dùng chưa đăng nhập
      alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!");
      navigate("/login");
    }
  };

  // Di chuyển đến phần giới thiệu cửa hàng
  const scrollToWeFlower = () => {
    const weFlowerElement = document.getElementById('we-flower');
    if (weFlowerElement) {
      weFlowerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Di chuyển đến phần liên hệ
  const scrollToTrangFlower = () => {
    const trangFlowerElement = document.querySelector('.TrangFlower');
    if (trangFlowerElement) {
      trangFlowerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='home'>
      <div className='image-home'><img src="https://www.publicdomainpictures.net/pictures/550000/velka/tulip-field-in-the-morning-1698672006CrV.jpg" alt="" /></div>
      <div className='callus'>
        <ul>
          <li className='i-phone'>
            <div><span className="material-symbols-outlined">phone_iphone</span></div>
            <div>
              <b>CALLUS</b>
              <br />
              <b className='numP'>123 456 7890</b>
            </div>
          </li>
          <li>
            <b className=' Flowers-Boutique'>Flowers Boutique</b>
          </li>
          <li className='cart'>
            <span>{cart.length}</span>
            <div><span className="material-symbols-outlined">shopping_cart</span></div>
            <a href=''>
              <b>MY CART</b>
              <br />
              <b className='USD'>USD</b>
            </a>
          </li>
        </ul>
      </div>

      <div className='lg-su'>
        <br />
        {
          account ? <>
            <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <span className="material-symbols-outlined">account_circle</span>{account.userName}
            </p>
            <a href="/" onClick={handleLogout}><button className='login-sigup'>Đăng xuất</button></a>
          </> : <>
            <a href="/login"><button className='login-sigup'>Đăng nhập/ Đăng kí</button></a>
          </>
        }
      </div>

      <br />
      <br />
      <br />

      <div className='info'>
        <b><a href="/" style={{color:"white"}}>Trang chủ</a></b>
        <b><a href="/bo" style={{color:"white"}}>Hoa theo bó</a></b>
        <b><a href="/bong" style={{color:"white"}}>Hoa theo bông</a></b>
        {/* <b>Tất cả sản phẩm</b>
        <b><a href="#" style={{ color: "white" }} onClick={scrollToWeFlower}>Giới thiệu cửa hàng</a></b>
        <b><a href="#" style={{ color: "white" }} onClick={scrollToTrangFlower}>Liên hệ</a></b> */}
      </div>

      <br />
      <br />
      <h2 className='most'>Nổi Bật</h2>
      <b className='icon-flower'>💐🌸</b>
      <br />
      <div className='render'>
        {flower.map((item: any, index: any) => (
          <ul className='item-flower' key={item.id}>
            <li className='img-prd'><img src={item.img} alt="" /></li>
            <li><b>{item.name}</b></li>
            <li><b className='cl-price'>{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</b></li>
            <li>Hình thức: {item.expression}</li>
            <div className='button-buy'>
              <li><button onClick={() => handleDetail(item.id)}>Xem chi tiết</button></li>
              <li>
                <button onClick={() => handleAddToCart(item.id)}>
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Thêm
                </button>
              </li>
            </div>
            <li>{item.describe}</li>
          </ul>
        ))}
      </div>

      <br />
      <br />
      <div className='we-flower' id="we-flower">
        <h2 className='we'>Vườn hoa của chúng tôi</h2>
        <b className='icon-flower'>💐🌸</b>
        <b>
          Em và hoa rạng rỡ cười
          <br />
          Cho anh đẹp mộng, cho đời ngát hương
          <br />
          Tình em lóng lánh màu sương
          <br />
          Dìu anh vào bến yêu thương yên bình
        </b>
        <br />
        <br />
        <br />
        Hoa có thể giúp tăng khả năng sáng tạo, đổi mới và sự tập trung. Hoa giúp ngủ ngon.<br />    Hoa giúp làm sạch không khí. Hoa Có Thể Giúp Chữa Bệnh Về Thể Chất.  Hoa giúp cải thiện tâm trạng.  Hoa Giúp Thư Giãn.<br />   Hoa giúp củng cố các mối quan hệ của bạn. Hoa giúp tăng độ ẩm trong không khí
      </div>

      <br />
      <br />
      <b className='icon-flower'>💐🌸</b>
      <br />
      <div className='TrangFlower'>
        <div>
          <h3>TrangFlower</h3>
          <br />
          <p><i className="fa-solid fa-truck-fast"> </i> Toàn quốc</p>
          <br />
          <p><i className="fa-solid fa-location-dot"></i> Bắc Yên-Sơn La</p>
        </div>
        <div>
          <h4><span className="material-symbols-outlined">support_agent</span>  Hỗ trợ </h4>
          <br />
          <p>123 456 7890</p>
          <br />
          <p><i className="fa-solid fa-envelope"></i>  trangflower@gmail.com</p>
        </div>
        <div>
          <h4><span className="material-symbols-outlined">call</span>   Liên hệ </h4>
          <br />
          <p><i className="fa-brands fa-facebook"></i>  Facebook </p>
          <br />
          <p><i className="fa-brands fa-instagram"></i>   Instagram</p>
        </div>
      </div>
    </div>
  );
}

