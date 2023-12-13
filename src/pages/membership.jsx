import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import FooterThree from "../component/layout/footerthree";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";

const title = "멤버 등급 단계";
const subtitle = "앞으로의 추가될 멤버 등급의 단계를 확인하세요!";

let MembershipList = [
    {
        daycount: '기본',
        perMonth: '기본 회원',
        price: '무료',
        faciList: [
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Directory',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Profile',
            },
            {
                iconName: 'fa-solid fa-circle-xmark',
                text: 'Send Private Messages',
            },
            {
                iconName: 'fa-solid fa-circle-xmark',
                text: 'Add Media To Your Profile',
            },
        ]
    },
    {
        daycount: '브론즈',
        perMonth: '미정',
        price: '$0',
        faciList: [
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Directory',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Profile',
            },
            {
                iconName: 'fa-solid fa-circle-xmark',
                text: 'Send Private Messages',
            },
            {
                iconName: 'fa-solid fa-circle-xmark',
                text: 'Add Media To Your Profile',
            },
        ]
    },
    {
        daycount: '실버',
        perMonth: '미정',
        price: '$미정',
        faciList: [
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Directory',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Profile',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'Send Private Messages',
            },
            {
                iconName: 'fa-solid fa-circle-xmark',
                text: 'Add Media To Your Profile',
            },
        ]
    },
    {
        daycount: '골드',
        perMonth: '미정',
        price: '$미정',
        faciList: [
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Directory',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'View Members Profile',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'Send Private Messages',
            },
            {
                iconName: 'fa-solid fa-circle-check',
                text: 'Add Media To Your Profile',
            },
        ]
    },
]

class MembershipPage extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'멤버 등급 단계'} curPage={'등급'} />
                <div className="membership padding-top padding-bottom">
                    <div className="container">
                        <div className="section__header style-2 text-center">
                            <h2>{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                        <div className="section__wrapper">
                            <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                                {MembershipList.map((val, i) => (
                                    <div className="col" key={i}>
                                        <div className="membership__item">
                                            <div className="membership__inner">
                                                <div className="membership__head">
                                                    <h4>{val.daycount}</h4>
                                                    <p>{val.perMonth}</p>
                                                </div>
                                                <div className="membership__body">
                                                    <h4>{val.price}</h4>
                                                    <ul>
                                                        {val.faciList.map((val, i) => (
                                                            <li key={i}><i className={val.iconName}></i> <span>{val.text}</span></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <FooterThree />
            </Fragment>
        );
    }
}
 
export default MembershipPage;