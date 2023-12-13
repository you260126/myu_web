import { Component } from "react";

const title = "My Love You";
const subtitle = "우리의 데이트 플랫폼은 바로 사용할 수 있는 간단한 기능을 갖춘 깨끗하고 깔끔한 디자인으로 제작하여 여러분들이 좋아할 것입니다";

let AboutContentList = [
    {
        imgUrl: 'assets/images/about/01.jpg',
        imgAlt: 'Dating Thumb',
        title: '사용이 간편함',
        desc: '일치하는 연결을 위해 따라야 할 간단한 단계입니다.',
    },
    {
        imgUrl: 'assets/images/about/02.jpg',
        imgAlt: 'Dating Thumb',
        title: '스마트 연결 시스템 ',
        desc: '당신과 같은 사용자들과 연결을 만들어보세요.',
    },
    {
        imgUrl: 'assets/images/about/03.jpg',
        imgAlt: 'Dating Thumb',
        title: '매우 빠르게 필터링',
        desc: '시간을 낭비하지 마세요! 관심 있는 것만 찾아보세요.',
    },
    {
        imgUrl: 'assets/images/about/04.jpg',
        imgAlt: 'Dating Thumb',
        title: '빠른 커뮤니티',
        desc: '빠른 네트워크로 끊어짐 없이 커뮤니티로 즐겨보세요!',
    },
]

class AboutSection extends Component {
    render() { 
        return (
            <div className="about padding-top padding-bottom">
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                    <div className="section__wrapper">
                        <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                            {AboutContentList.map((val, i) => (
                                <div className="col wow fadeInUp" data-wow-duration="1.5s" key={i}>
                                    <div className="about__item text-center">
                                        <div className="about__inner">
                                            <div className="about__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="about__content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AboutSection;