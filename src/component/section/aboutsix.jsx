import { Component } from "react";
import { Link } from "react-router-dom";

const title = "안녕 친구들";
const subtitle = "우리는 솔로들을 위한 커플앱을 제작하려고 노력해왔습니다..";
const desc = "커뮤니티 기능을 위해 BuddyPress기반으로 한 친근한 데이트 앱 홍보 사이트입니다. 데이트를 위한 커뮤니티를 쉽게 만들고 커뮤니티를 만들 수 있습니다";
const btnText = "회원 가입";
const imgUrl = "assets/images/about/01.png";
const imgAlt = "Dating Thumb";

class AboutSectionSix extends Component {
    render() { 
        return (
            <div className="about about--style5 padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center g-4 align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="about__thumb">
                                <img src={`${imgUrl}`} alt={`${imgAlt}`} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about__content">
                                <h2>{title}</h2>
                                <h5>{subtitle}</h5>
                                <p>{desc}</p>
                                <Link to="/membership" className="default-btn reverse"><span>{btnText}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutSectionSix;