import { Component } from "react";
import { Link } from "react-router-dom";

const newstitle = "뉴스레터 가입";
const jointitle = "MyU sns 확인하기";
const infotitle = "회사 정보";
const accountTitle = "내 계정";
const helpTitle = "지원 센터";
const communityTitle = "커뮤니티";

let SocialList = [
    {
        iconName: 'fa-brands fa-twitter',
        visitLink: '#',
    },
    {
        iconName: 'fa-brands fa-twitch',
        visitLink: '#',
    },
    {
        iconName: 'fa-brands fa-instagram',
        visitLink: '#',
    },
    {
        iconName: 'fa-brands fa-dribbble',
        visitLink: '#',
    },
    {
        iconName: 'fa-brands fa-facebook-messenger',
        visitLink: '#',
    },
]

let InfoList = [
    {
        pageName: '회사 소개',
        pageLink: '/about',
    },
    {
        pageName: '문의하기',
        pageLink: '/contact',
    },
    {
        pageName: '고객 리뷰',
        pageLink: '#',
    },
    {
        pageName: '성공 사례',
        pageLink: '#',
    },
    {
        pageName: '사업 허가증',
        pageLink: '#',
    },
]

let InfoListTwo = [
    {
        pageName: '계정 관리',
        pageLink: '#',
    },
    {
        pageName: '안전 수칙',
        pageLink: '#',
    },
    {
        pageName: '계정 변경',
        pageLink: '#',
    },
    {
        pageName: '안전과 보안',
        pageLink: '#',
    },
    {
        pageName: '회원 등급',
        pageLink: '#',
    },
]

let InfoListThree = [
    {
        pageName: '지원 센터',
        pageLink: '#',
    },
    {
        pageName: 'FAQ',
        pageLink: '#',
    },
    {
        pageName: '빠른 시작 가이드',
        pageLink: '#',
    },
    {
        pageName: '튜토리얼',
        pageLink: '#',
    },
    {
        pageName: '제휴 블로그',
        pageLink: '#',
    },
]

let InfoListFour = [
    {
        pageName: '개인정보정책',
        pageLink: '/policy',
    },
    {
        pageName: '최종 사용자 계약',
        pageLink: '#',
    },
    {
        pageName: '환불 정책',
        pageLink: '#',
    },
    {
        pageName: '쿠키 정책',
        pageLink: '#',
    },
    {
        pageName: '남용 신고',
        pageLink: '#',
    },
]


class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsEmail: '',
        };
    }
    render() { 
        return (
            <footer className="footer overflow-hidden">
                <div className="footer__top bg_img" style={{backgroundImage: "url(/assets/images/footer/bg-3.jpg)"}}>
                    <div className="footer__newsletter wow fadeInUp" data-wow-duration="1.5s">
                        <div className="container">
                            <div className="row g-4 justify-content-center">
                                <div className="col-lg-6 col-12">{/*뉴스레터 가입 */}
                                    <div className="footer__newsletter--area">
                                        <div className="footer__newsletter--title">
                                            <h4>{newstitle}</h4>
                                        </div>
                                        <div className="footer__newsletter--form">
                                            <form action="#">
                                                <input 
                                                    type="email"
                                                    name="email"
                                                    id="item01"
                                                    value={this.state.newsEmail}
                                                    onChange={(e)=>{this.setState({newsEmail: e.target.value});}}
                                                    placeholder="이메일 주소를 입력하세요*" 
                                                />
                                                <button type="submit" className="default-btn"><span>구독하기</span></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">{/*myu 확인하기 sns */}
                                    <div className="footer__newsletter--area justify-content-xxl-end">
                                        <div className="footer__newsletter--title me-xl-4">
                                            <h4>{jointitle}</h4>
                                        </div>
                                        <div className="footer__newsletter--social">
                                            <ul>
                                                {SocialList.map((val, i) => (
                                                    <li key={i}><Link to={`${val.visitLink}`}><i className={`${val.iconName}`}></i></Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__toparea padding-top padding-bottom wow fadeInUp" data-wow-duration="1.5s">
                        <div className="container">
                            <div className="row g-5 g-lg-0">
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{infotitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {InfoList.map((val, i) => (
                                                            <li key={i}><Link to={val.pageLink}><i className="fa-solid fa-angle-right"></i> {val.pageName}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{accountTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {InfoListTwo.map((val, i) => (
                                                            <li key={i}><Link to={val.pageLink}><i className="fa-solid fa-angle-right"></i> {val.pageName}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{helpTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {InfoListThree.map((val, i) => (
                                                            <li key={i}><Link to={val.pageLink}><i className="fa-solid fa-angle-right"></i> {val.pageName}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{communityTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {InfoListFour.map((val, i) => (
                                                            <li key={i}><Link to={val.pageLink}><i className="fa-solid fa-angle-right"></i> {val.pageName}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer__bottom wow fadeInUp" data-wow-duration="1.5s">
                    <div className="container">
                        <div className="footer__content text-center">
                            <p className="mb-0">All Rights Reserved &copy; <Link to="/"> myu </Link> || Design By: 개발자들</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;