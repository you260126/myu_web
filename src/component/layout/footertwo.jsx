import { Component } from "react";
import { Link } from "react-router-dom";

const aboutTitle = "About myu";
const aboutDesc = "myu는 커뮤니티 기능을 위한 리액트를 기반으로 한 친숙한 데이트 테마입니다.";
const featureTitle = "개발자";
const supportTitle = "연락처 및 지원";
const recentTitle = "최근 활동";

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

let AboutInfo = [
    {
        Name: '정보',
        Details: '원광대학교 학생들이 만든 데이트 앱 홍보 사이트',
    },
    {
        Name: '연결주소',
        Details: 'https://www.wku.ac.kr/',
    },
]

let FeatureList = [
    {
        imgUrl: 'assets/images/footer/feature/01.jpg',
        imgAlt: 'Dating Thumb',
        title: '김용희',
        activety: 'Active',
        className: 'feature__activity'
    },
    {
        imgUrl: 'assets/images/footer/feature/02.jpg',
        imgAlt: 'Dating Thumb',
        title: '전사름',
        activety: '2 Hours Ago',
        className: 'feature__activity feature__activity--ofline'
    },
    {
        imgUrl: 'assets/images/footer/feature/03.jpg',
        imgAlt: 'Dating Thumb',
        title: '유호상',
        activety: 'Active',
        className: 'feature__activity'
    },
    {
        imgUrl: 'assets/images/footer/feature/04.jpg',
        imgAlt: 'Dating Thumb',
        title: '최민경',
        activety: '6 Hours Ago',
        className: 'feature__activity feature__activity--ofline'
    },
]

let InfoList = [
    {
        pageName: '회사 소개',
        pageLink: '/about',
    },
    {
        pageName: '개발팀',
        pageLink: '#',
    },
    {
        pageName: '사용 후기',
        pageLink: '#',
    },
    {
        pageName: '문의하기',
        pageLink: '/contact',
    },
    {
        pageName: 'FAQ',
        pageLink: '#',
    },
]

let RecentPost = [
    {
        imgUrl: 'assets/images/footer/activity/01.jpg',
        imgAlt: 'Dating Thumb',
        title: '한옥에 가는..',
        pubDate: '2023 9월 13일',
    },
    {
        imgUrl: 'assets/images/footer/activity/02.jpg',
        imgAlt: 'Dating Thumb',
        title: '해외여행 기념..',
        pubDate: '2023 10월 14일',
    },
    {
        imgUrl: 'assets/images/footer/activity/03.jpg',
        imgAlt: 'Dating Thumb',
        title: '스튜디오 잘찍..',
        pubDate: '2023 11월 19일',
    },
]

class FooterTwo extends Component {
    render() { 
        return (
            <footer className="footer footer--style3">
                <div className="footer__top bg_img wow fadeInUp" data-wow-duration="1.5s" style={{backgroundImage: "url(/assets/images/footer/bg-2.jpg)"}}>
                    <div className="footer__toparea padding-top padding-bottom">
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item footer--about">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{aboutTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <p>{aboutDesc}</p>
                                                </div>
                                                <div className="footer__content--info">
                                                    {AboutInfo.map((val, i) => (
                                                        <p key={i}><b>{val.Name} :</b> {val.Details}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item footer--feature">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{featureTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {FeatureList.map((val, i) => (
                                                            <li key={i}>
                                                                <div className="thumb position-relative">
                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                    <span className={val.className}></span>
                                                                </div>
                                                                <div className="content">
                                                                    <Link to="/member-single"><h6>{val.title}</h6></Link>
                                                                    <p>{val.activety}</p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12">
                                    <div className="footer__item footer--support">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{supportTitle}</h4>
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
                                    <div className="footer__item footer--activity">
                                        <div className="footer__inner">
                                            <div className="footer__content">
                                                <div className="footer__content--title">
                                                    <h4>{recentTitle}</h4>
                                                </div>
                                                <div className="footer__content--desc">
                                                    <ul>
                                                        {RecentPost.map((val, i) => (
                                                            <li key={i}>
                                                                <div className="thumb">
                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                </div>
                                                                <div className="content">
                                                                    <h6>{val.title}</h6>
                                                                    <p>{val.pubDate}</p>
                                                                </div>
                                                            </li>
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
                        <div className="row g-4 g-lg-0 justify-content-lg-between align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="footer__content text-center">
                                    <p className="mb-0">All Rights Reserved &copy; <Link to="/"> myu </Link> || 개발자들</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="footer__newsletter--social">
                                    <ul className="justify-content-center justify-content-lg-end">
                                        {SocialList.map((val, i) => (
                                            <li key={i}><a href={`${val.visitLink}`}><i className={`${val.iconName}`}></i></a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default FooterTwo;