import { Component } from "react";

const title = "사랑을 찾아 떠나는 myu 모바일 프라이빗 앱 ";
const desc = "클릭 한번이면 당신의 짝과 개인적인 1대1 소통을 할 수 있습니다.";

const imgLink = "assets/images/banner/01.png";
const imgAlt = "Dating Thumb";

class BannerOne extends Component {
    render() { 
        return (
            <div className="banner padding-top padding-bottom bg_img" style={{backgroundImage: "url(/assets/images/banner/bg.jpg)"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-12">
                            <div className="banner__content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <div className="banner__title">
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="banner__thumb banner__thumb--thumb1 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                                <img src={imgLink} alt={imgAlt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BannerOne;