import { Component } from "react";
import { Link } from "react-router-dom";

const title = "myu 회원들";
const desc = "커뮤니티 회원의 이야기를 듣고 배우며 사랑을 만날 수 있는 팁과 요령을 알아보세요. 우리와 함께 더 큰 가족의 일원이 되세요";

let StorySectionContentList = [
    {
        imgUrl: 'assets/images/story/01.jpg',
        imgAlt: 'Dating Thumb',
        title: '22년 꿈의 장소 함께한 날',
        activity: 'Entertainment',
        authorImg: 'assets/images/story/author/01.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: '가가가',
        postDate: '2023년 9월 15일',
    },
    {
        imgUrl: 'assets/images/story/02.jpg',
        imgAlt: 'Dating Thumb',
        title: '23년 잘 찍은 날',
        activity: 'Attraction',
        authorImg: 'assets/images/story/author/02.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: '나나나',
        postDate: '2023년 10월 14일',
    },
    {
        imgUrl: 'assets/images/story/03.jpg',
        imgAlt: 'Dating Thumb',
        title: '스튜디오에서 사진 찍은 날',
        activity: 'Love Stories',
        authorImg: 'assets/images/story/author/03.jpg',
        authorImgAlt: 'Dating Thumb',
        authorName: '다다다',
        postDate: '2023년 11월 19일',
    },
]


class StorySection extends Component {
    render() { 
        return (
            <div className="story bg_img padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/bg-img/02.jpg)"}}>
                <div className="container">
                    <div className="section__header style-2 text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                        <div className="row g-4 justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
                            {StorySectionContentList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="story__item">
                                        <div className="story__inner">
                                            <div className="story__thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                <span className="member__activity member__activity--ofline">{val.activity}</span>
                                            </div>
                                            <div className="story__content">
                                                <h4>{val.title}</h4>
                                                <div className="story__content--author">
                                                    <div className="story__content--thumb">
                                                        <img src={`${val.authorImg}`} alt={`${val.authorImgAlt}`} />
                                                    </div>
                                                    <div className="story__content--content">
                                                        <h6>{val.authorName}</h6>
                                                        <p>{val.postDate}</p>
                                                    </div>
                                                </div>
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
 
export default StorySection;