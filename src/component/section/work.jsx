import { Component } from "react";

const title = "어떻게 앱이 작동하나요?";

let WorkSectionContentListOne = [
    {
        imgUrl: 'assets/images/work/05.png',
        imgAlt: 'Dating Thumb',
        title: '파트너 찾기',
        desc: 'MyU를 사용하여 훌륭한 경험을 쌓기 위해 따라야 할 간단한 단계입니다. 당신이 해야 할 일은 당신의 직감을 따르고 당신의 마음을 놀라게 하는 것뿐입니다!',
    },
]
let WorkSectionContentListTwo = [
    {
        imgUrl: 'assets/images/work/06.png',
        imgAlt: 'Dating Thumb',
        title: '100% 커플만을 위한 채팅 가능',
        desc: 'MyU를 사용하여 훌륭한 경험을 쌓기 위해 따라야 할 간단한 단계입니다. 당신이 해야 할 일은 당신의 직감을 따르고 당신의 마음을 놀라게 하는 것뿐입니다!',
    },
]
let WorkSectionContentListThree = [
    {
        imgUrl: 'assets/images/work/07.png',
        imgAlt: 'Dating Thumb',
        title: '파트너의 공개된 정보를 확인하세요',
        desc: 'MyU를 사용하여 훌륭한 경험을 쌓기 위해 따라야 할 간단한 단계입니다. 당신이 해야 할 일은 당신의 직감을 따르고 당신의 마음을 놀라게 하는 것뿐입니다!',
    },
]
let WorkSectionContentListFour = [
    {
        imgUrl: 'assets/images/work/08.png',
        imgAlt: 'Dating Thumb',
        title: '라이브 스토리',
        desc: 'MyU를 사용하여 훌륭한 경험을 쌓기 위해 따라야 할 간단한 단계입니다. 당신이 해야 할 일은 당신의 직감을 따르고 당신의 마음을 놀라게 하는 것뿐입니다!',
    },
]

class WorkSection extends Component {
    render() { 
        return (
            <div className="work padding-top padding-bottom bg_img" style={{backgroundImage: "url(/assets/images/bg-img/01.jpg)"}}>
                <div className="container">
                    <div className="section__header text-center wow fadeInUp" data-wow-duration="1.5s">
                        <h2>{title}​</h2>
                    </div>
                    <div className="section__wrapper wow fadeInUp" data-wow-duration="1.5s">
                        <div className="d-xl-flex align-items-start work__area">
                            <div className="nav flex-xl-column nav-pills me-xl-4 work__tablist" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link" id="work__tab1-tab" data-bs-toggle="pill" data-bs-target="#work__tab1" type="button" role="tab" aria-controls="work__tab1" aria-selected="true"><img src="assets/images/work/01.png" alt="dating thumb" className="me-3" /><span>파트너 찾기</span></button>
                                <button className="nav-link active" id="work__tab2-tab" data-bs-toggle="pill" data-bs-target="#work__tab2" type="button" role="tab" aria-controls="work__tab2" aria-selected="false"><img src="assets/images/work/02.png" alt="dating thumb" className="me-3" /><span>100% 커플만을 위한 채팅</span></button>
                                <button className="nav-link" id="work__tab3-tab" data-bs-toggle="pill" data-bs-target="#work__tab3" type="button" role="tab" aria-controls="work__tab3" aria-selected="false"><img src="assets/images/work/03.png" alt="dating thumb" className="me-3" /><span>파트너의 공개된 정보 확인</span></button>
                                <button className="nav-link" id="work__tab4-tab" data-bs-toggle="pill" data-bs-target="#work__tab4" type="button" role="tab" aria-controls="work__tab4" aria-selected="false"><img src="assets/images/work/04.png" alt="dating thumb" className="me-3" /><span>라이브 스토리</span></button>
                            </div>
                            <div className="tab-content work__tabcontent" id="v-pills-tabContent">
                                <div className="tab-pane fade" id="work__tab1" role="tabpanel" aria-labelledby="work__tab1-tab">
                                    {WorkSectionContentListOne.map((val, i) => (
                                        <div className="work__item" key={i}>
                                            <div className="work__inner">
                                                <div className="work__thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="work__content">
                                                    <h3>{val.title}</h3>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="tab-pane fade show active" id="work__tab2" role="tabpanel" aria-labelledby="work__tab2-tab">
                                    {WorkSectionContentListTwo.map((val, i) => (
                                        <div className="work__item" key={i}>
                                            <div className="work__inner">
                                                <div className="work__thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="work__content">
                                                    <h3>{val.title}</h3>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="tab-pane fade" id="work__tab3" role="tabpanel" aria-labelledby="work__tab3-tab">
                                    {WorkSectionContentListThree.map((val, i) => (
                                        <div className="work__item" key={i}>
                                            <div className="work__inner">
                                                <div className="work__thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="work__content">
                                                    <h3>{val.title}</h3>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="tab-pane fade" id="work__tab4" role="tabpanel" aria-labelledby="work__tab4-tab">
                                    {WorkSectionContentListFour.map((val, i) => (
                                        <div className="work__item" key={i}>
                                            <div className="work__inner">
                                                <div className="work__thumb">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="work__content">
                                                    <h3>{val.title}</h3>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default WorkSection;