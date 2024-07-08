import { useEffect } from 'react'
import "./home.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../store/reducer/productReducer'
import { useNavigate } from 'react-router-dom'


export default function Home() {
  const flower: any = useSelector(((state: any) => state.productReducer.list))
  const navigate = useNavigate()
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(getAllProduct())
  }, [])

  const handleDetail = (id: number) => {
    console.log(id);
    navigate(`/detail/${id}`)
  }

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
            <div><span className="material-symbols-outlined">shopping_cart</span></div>
            <div>
              <b>MY CART</b>
              <br />
              <b className='USD'>USD</b>
            </div>
          </li>
        </ul>

      </div>

      <div className='lg-su'>
        <a href="/login"><button className='login-sigup'>Đăng nhập/ Đăng kí</button></a>

      </div>

      <br />
      <br />
      <br />

      <div className='info'>
        <b>Trang chủ</b>
        <b>Tất cả sản phẩm</b>
        <b>Giới thiệu cửa hàng</b>
        <b>Liên hệ</b>
      </div>
      <br />
      <br />
      <h2 className='most'>Nổi Bật</h2>
      <b className='icon-flower'>💐🌸</b>
      <br />
      <div className='render' >

        {flower.map((item: any, index: any) => {
          return <ul className='item-flower' key={item.id}>
            <li className='img-prd'><img src={item.img} alt="" /></li>
            {/* <li>{index+1}</li> */}
            <li><b>{item.name}</b></li>
            <li >
              <b className='cl-price'>{item.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</b>
            </li>
            <li>Hình thức: {item.expression}</li>
            <div className='button-buy'>
              <li><button onClick={() => handleDetail(item.id)}>Xem chi tiết</button></li>
              <li><button>Mua hoa</button></li>
            </div>
            <li>{item.describe}</li>
          </ul>
        })}
      </div>
      <br />
      <br />
      <div >
        {/* <img className='img-end' src="https://i.pinimg.com/originals/7f/50/5a/7f505a132f7886bdb59c06ffbbeb50aa.jpg" alt="" /> */}
        <div className='we-flower'>
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
  )
}
