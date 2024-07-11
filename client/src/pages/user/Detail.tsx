import { useEffect } from 'react'
import "./home.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../store/reducer/productReducer'
import { useParams } from 'react-router-dom'


export default function Detail() {
    const { id } = useParams()
    const flower: any = useSelector(((state: any) => state.productReducer.list))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch]);

    const product = flower.find((item: any) => item.id.toString() === id);
    console.log(product)

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


            <div className='info'>
               <a href="/"> <b className='home-detail'>Trang chủ</b></a>
                <b>Tất cả sản phẩm</b>
                <b>Giới thiệu cửa hàng</b>
                <b>Liên hệ</b>
            </div>
            <br />
            <br />

            <div className='render' style={{ display: "flex" }} >
                <ul className='item-flower' key={product.id} style={{ width: "800px", height: "550px",padding:"40px" }} >
                    <li className='img-prd' >< img src={product.img} style={{ width: "600px", height: "400px" }} alt="" /></li>
                    {/* <li>{index+1}</li> */}
                    <br />
                    <br />
                    <li><b style={{ fontSize: "30px" }}>{product.name}</b></li>
                    
                </ul>
                <ul className='item-flower' style={{ fontSize: "15px",width: "800px", height: "550px", padding:"30px", paddingTop:"80px"}}>
                    <h3 >Mô tả</h3>
                    Hoa là món quà quý giá mà thiên nhiên ban tặng cho con người. Ngoài việc làm đẹp cho cuộc sống, mỗi loài hoa còn mang trong mình ý nghĩa sâu sắc, giúp con người truyền đạt những thông điệp trong tình yêu và cuộc sống
                    <br />
                    <br />
                    <br />
                    Các loài hoa mang theo mình ý nghĩa sâu sắc, chính là một ngôn ngữ tuyệt vời mà chúng muốn gửi đến cuộc sống. Mỗi bông hoa đều như những nét vẽ tuyệt đẹp, tô thêm màu sắc cho hành trình sống của chúng ta.
                    <br />
                    <br />
                    <li style={{ display: "flex", gap: "29px", color:"#FF69B4"  }}>
                        <li style={{ display: "flex", alignItems: "center" }}> <span className="material-symbols-outlined">
                            local_shipping
                        </span>Free Ship</li>
                        <li style={{ display: "flex", alignItems: "center" }}><span className="material-symbols-outlined">
                            paid
                        </span>Hoàn trả</li>
                        <li style={{ display: "flex", alignItems: "center" }} ><span className="material-symbols-outlined">
                            sell
                        </span>Deal hời, giá rẻ</li>
                        <li><span className="material-symbols-outlined">
                            support_agent
                        </span>Hỗ trợ </li>

                    </li>
                    <li>
                        <br />
                    <ul  key={product.id}  >
                        <br />
                    
                    <li >
                        <b style={{ fontSize: "25px" }} className='cl-price'>{product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</b>
                    </li>
                    <br />
                    <li >Hình thức: {product.expression}</li>
                    <div className='button-buy' style={{ display: "flex", justifyContent: "center" }}>
                        {/* <li><button onClick={handleDetail}>Xem chi tiết</button></li> */}
                        <li><button >Mua hoa</button></li>
                    </div>
                    {/* <li>{product.describe}</li> */}
                </ul>

                    </li>

                </ul>


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
        </div >
    )
}
