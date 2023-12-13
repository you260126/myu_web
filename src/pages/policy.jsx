import { Component, Fragment } from "react";
import FooterTwo from "../component/layout/footertwo";
import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";

class Policy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noticeOpen: false,
            privacyOpen: false,
            clickedTitle: null, // 클릭한 제목을 기록하는 상태
        };
    }

    // 상태를 변경하여 내용을 토글하는 함수
    toggleContent = (section) => {
        this.setState((prevState) => ({
            [section]: !prevState[section],
            clickedTitle: section === prevState.clickedTitle ? null : section, // 클릭한 제목을 기록, 다시 클릭하면 null로 초기화
        }));
    };

    render() {
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'개인 정보 정책'} curPage={'Policy'} />
                <section className="terms-section padding-bottom padding-top">
                    <div className="container">
                        <div className="terms-content">
                            <div className="terms-header">
                                {/* <h4>Privacy &amp; Policy</h4>
                                <p><span className="theme-color fw-bold">Last Updated:</span> June 1, 2022</p> */}
                                <h5
                                    class="noticeTitle"
                                    onClick={() => this.toggleContent("noticeOpen")}
                                    style={{
                                        color:
                                            this.state.clickedTitle === "noticeOpen"
                                                ? "lightsteelblue"
                                                : "black",
                                    }}
                                >
                                    패치노트 버전 업데이트 5.1
                                    <div class="time">2023/09/10</div>
                                </h5>
                                <div class="noticeBackground">
                                    {this.state.noticeOpen && (
                                        <div class="noticeContent">
                                            <p>공지사항 버전 테스트 용도입니다.</p>
                                        </div>
                                    )}
                                    <br />
                                </div>
                                <div class="noticeBlock">
                                    <h5
                                        class="noticeTitle"
                                        onClick={() => this.toggleContent("privacyOpen")}

                                    >
                                        개인정보 처리방침 개정 공지
                                        <div class="time">2023/09/10</div>
                                    </h5>
                                    {this.state.privacyOpen && (
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th class="lawHead">조항</th>
                                                    <th class="lawHead">내용</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1. 개인정보 처리 목적</td>
                                                    <td>
                                                        문의에 대한 답변 및 영업을 위한 정보 제공 등 관련 업무처리를
                                                        위한 목적으로 개인정보를 처리합니다.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2. 개인정보 처리 기간</td>
                                                    <td>
                                                        문의에 대한 답변 및 안내와 업무 종료 이후 5일 이내 해당
                                                        정보를 삭제합니다.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3. 개인정보 파기</td>
                                                    <td>
                                                        입력한 정보는 목적 달성 후 별도의 DB로 옮겨진 뒤 2장에 따라
                                                        일정 기간 저장된 후 파기됩니다. 이때 옮겨진 정보는 법률에
                                                        의한 경우가 아니면 다른 목적으로 이용되지 않습니다.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    )}
                                    <br />
                                </div>
                                <div class="noticeBlock">
                                    <h5
                                        class="noticeTitle"
                                        onClick={() => this.toggleContent("notice1Open")}
                                    >
                                        {" "}
                                        MyU 이용약관 및 위치기반서비스 이용약관 개정 공지
                                        <div class="time">2023/09/10</div>{" "}
                                    </h5>
                                    <div class="noticeBackground">
                                        {this.state.notice1Open && (
                                            <div class="noticeContent">
                                                <p>
                                                    서비스 이용약관 및 위치기반서비스 이용약관의 개정에 관한 안내
                                                    말씀드립니다. <br />
                                                    <br />
                                                    <strong>제 1조 (목적)</strong>
                                                    <br />
                                                    <br />
                                                    네트워크, 공식 커뮤니티, 기타 서비스의 이용에 대한 회사와
                                                    서비스 이용자의 권리ㆍ의무 및 책임사항, 기타 필요한 사항을
                                                    규정함을 목적으로 합니다.
                                                    <br />
                                                    <br />
                                                    <strong>제 2조 (용어의 정의) </strong>
                                                    <br />
                                                    <br />
                                                    1. “회사”라 함은 각종 ”단말기”를 통하여 서비스를 제공하는
                                                    사업자를 의미합니다.
                                                    <br />
                                                    2. “회원”이란 이 약관에 따라 이용계약을 체결하고, 회사가
                                                    제공하는 서비스를 이용하는 자를 의미합니다.
                                                    <br />
                                                    3. “단말기”란 콘텐츠를 다운로드 받거나 설치하여 사용할 수 있는
                                                    기기로서, PC, 휴대폰, 스마트폰, 휴대정보단말기(PDA), 태블릿
                                                    등을 의미합니다.
                                                    <br />
                                                    4. “계정정보”란 회원의 회원번호와 외부계정정보, 기기정보,
                                                    별명, 프로필 사진 등 회원이 회사에 제공한 정보와 이용정보,
                                                    이용요금 결제 정보 등을 통칭합니다.
                                                    <br />
                                                    5. “콘텐츠”란 단말기로 이용할 수 있도록 회사가 서비스 제공과
                                                    관련하여 디지털 방식으로 제작한 유료 또는 무료의 내용물
                                                    일체(네트워크 서비스, 애플리케이션, 유료 재화, 이모티콘 등)를
                                                    의미합니다.
                                                    <br />
                                                    6. “오픈마켓”이란 단말기에서 콘텐츠를 설치하고 결제할 수
                                                    있도록 구축된 전자상거래 환경을 의미합니다.
                                                    <br />
                                                    7. “애플리케이션”이란 회사가 제공하는 서비스를 이용하기 위하여
                                                    단말기를 통해 다운로드 받거나 설치하여 사용하는 프로그램
                                                    일체를 의미합니다.
                                                    <br />
                                                    <br />
                                                    <strong>제3조 (약관의 효력 및 변경)</strong>
                                                    <br />
                                                    <br />
                                                    ① “회사”는 “이용자”가 약관의 내용을 쉽게 알 수 있도록 작성하고
                                                    약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회,
                                                    과오납금의 환급, 계약 해제 및 해지, 회사의 면책사항 및 회원에
                                                    대한 보상 등과 같은 중요한 내용을 회원이 쉽게 이해할 수 있도록
                                                    굵은 글씨 등으로 처리하여 표시합니다.
                                                    <br />
                                                    <br />
                                                    ③ 회사가 약관을 개정할 경우 개정약관 공지 후 개정약관의 적용에
                                                    대한 회원의 동의 여부를 확인합니다. 회사는 제2항의 공지 또는
                                                    통지를 할 경우 회원이 개정약관에 대해 동의 또는 거부의
                                                    의사표시를 하지 않으면 동의한 것으로 볼 수 있다는 내용도 함께
                                                    공지 또는 통지를 하며, 회원이 이 약관 시행일까지 거부의
                                                    의사표시를 하지 않는다면 개정약관에 동의한 것으로 볼 수
                                                    있습니다. 회원이 개정약관에 대해 동의하지 않는 경우 회사 또는
                                                    회원은 서비스 이용계약을 해지할 수 있습니다.
                                                    <br />
                                                    <br />
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <br />
                                </div>
                                <div class="noticeBlock">
                                    <h5
                                        class="noticeTitle"
                                        onClick={() => this.toggleContent("notice2Open")}
                                    >
                                        위치기반 서비스 이용 약관
                                        <div class="time">2023/09/10</div>
                                    </h5>
                                    <div class="noticeBackground">
                                        {this.state.notice2Open && (
                                            <div class="noticeContent">
                                                <p>
                                                    <strong>제 1조 (목적)</strong>
                                                    <br />
                                                    <br />
                                                    본 약관은 회원(본 서비스 약관에 동의한 자를 말합니다. 이하
                                                    “회원”이라고 합니다.)이 제공하는 위치기반 서비스(이하
                                                    “서비스”라고 합니다)를 이용함에 있어 회사와 회원의 권리·의무
                                                    및 책임사항을 규정함을 목적으로 합니다.
                                                    <br />
                                                    <br />
                                                    <strong>제 2조 (이용약관의 효력 및 변경)</strong>
                                                    <br />
                                                    <br />
                                                    ①본 약관은 서비스를 신청한 고객 또는 개인위치정보주체가 본
                                                    약관에 동의하고 회사가 정한 소정의 절차에 따라 서비스의
                                                    이용자로 등록함으로써 효력이 발생합니다.
                                                    <br />
                                                    ②회원이 가입 초기 화면에서 본 약관의 "동의하기" 버튼을
                                                    클릭하였을 경우 본 약관의 내용을 모두 읽고 이를 충분히
                                                    이해하였으며, 그 적용에 동의한 것으로 봅니다.
                                                    <br />
                                                    ③회사는 위치정보의 보호 및 이용 등에 관한 법률, 콘텐츠산업
                                                    진흥법, 전자상거래 등에서의 소비자보호에 관한 법률,
                                                    소비자기본법, 약관의 규제에 관한 법률 등 관련법령을 위배하지
                                                    않는 범위에서 본 약관을 개정할 수 있습니다.
                                                    <br />
                                                    <br />
                                                    <strong>제 3조 (관계법령의 적용)</strong>
                                                    <br />
                                                    <br />
                                                    본 약관은 신의성실의 원칙에 따라 공정하게 적용하며, 본 약관에
                                                    명시되지 아니한 사항에 대하여는 관계법령 또는 상관례에
                                                    따릅니다.
                                                    <br />
                                                    <br />
                                                    <strong>제 4조 (관계법령의 적용)</strong>
                                                    <br />
                                                    <br />
                                                    회사는 직접 위치정보를 수집하거나 위치정보사업자인
                                                    이동통신사로부터 위치정보를 전달받아 위치기반서비스를
                                                    제공합니다.
                                                    <br />
                                                    <br />
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <br />
                                </div>
                                <div class="noticeBlock">
                                    <h5
                                        class="noticeTitle"
                                        onClick={() => this.toggleContent("notice3Open")}
                                    >
                                        보안 안내 - Security
                                        <div class="time">2023/09/10</div>
                                    </h5>
                                    <div class="noticeBackground">
                                        {this.state.notice3Open && (
                                            <div class="noticeContent">
                                                <p>
                                                    myu 보안팀은 고객들의 개인 정보와 사생활을 최우선으로
                                                    보호하기 위해 노력하고 있습니다. 앞으로도 계속하여 노력할 것을
                                                    약속드립니다. <br />
                                                    보안이나 사생활 보호에 대해 궁금한 점이 있으시면 자사메일로
                                                    메일 보내주십시오.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <br />
                                </div>
                                <div class="noticeBlock">
                                    <h5
                                        class="noticeTitle"
                                        onClick={() => this.toggleContent("notice4Open")}
                                    >
                                        개인정보 처리방침 개정 안내
                                        <div class="time">2023/09/10</div>
                                    </h5>
                                    <div class="noticeBackground">
                                        {this.state.notice4Open && (
                                            <div class="noticeContent">
                                                <p>
                                                    안녕하세요.
                                                    <br />
                                                    MyU 서비스를 제공하고 있는 ㈜MyU(이하 ‘회사’) 입니다.
                                                    <br />
                                                    <br />
                                                    항상 MyU 서비스를 이용해 주시는 유저님께 진심으로 감사드리며,
                                                    회사의 개인정보 처리방침 내 개인정보의 수집 이용 내용, 위탁,
                                                    국외이전 등이 변경 예정되어 아래와 같이 ‘개인정보 처리방침’을
                                                    개정하고자 안내 드립니다. 자세한 사항은 아래의 내용을 확인
                                                    부탁드립니다.
                                                    <br />
                                                    <br />
                                                    1. 개인정보 처리 방침 개정 주요 내용
                                                    <br />
                                                    • MyU 서비스 수집 일부 항목 현행화
                                                    <br />
                                                    • 이벤트 및 개별 기능(혹은 서비스)의 별도 수집/이용 동의 내용
                                                    현행화
                                                    <br />
                                                    • 개인정보 처리 위탁사(국내/국외) 현행화
                                                    <br />
                                                    • 개인정보 보유 기간 및 관련법령에 의한 보존 기간 현행화
                                                    <br />
                                                    • 쿠키 설정, 광고 식별자 수집 거부 방법 구체화 및 광고 사업자
                                                    현행화
                                                    <br />
                                                    • 개인정보침해 신고 및 상담 기관 정보 현행화
                                                    <br />
                                                    • MyU 서비스 수집 일부 항목 현행화
                                                    <br />
                                                    <br />
                                                    2. 개정 시기
                                                    <br />
                                                    변경된 개인정보처리방침은 2022년 04월 01일부터 적용됩니다.
                                                    <br />
                                                    <br />
                                                    3. 이의 제기 및 관련 문의
                                                    <br />
                                                    개정된 개인정보처리방침에 동의하지 않는 경우,
                                                    고객센터(feedback@myu.us)를 통해 개인정보 수집 및 이용에 대한
                                                    동의 철회 방법을 안내받으실 수 있습니다. 거부 의사를 표시하지
                                                    않으신 경우 개정에 동의하신 것으로 간주됩니다. 회원 탈퇴 및
                                                    동의 철회 시, MyU에 대한 개인정보가 이전되지 않으며 처리가
                                                    완료된 후에는 데이터가 복원되지 않습니다.
                                                    <br />
                                                    관련하여 궁금하신 점이나 소중한 의견은 언제든지
                                                    고객센터(feedback@myu.us)로 연락 주시기 바랍니다.
                                                    <br />
                                                    <br />
                                                    마음을 담아,
                                                    <br />
                                                    MyU 팀 드림.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <br />
                                </div>
                                <div class="noticeBlock">
                                    <h5
                                        class="noticeTitle"
                                        onClick={() => this.toggleContent("notice5Open")}
                                    >
                                        2022년도 결산공고
                                        <div class="time">2023/03/31</div>
                                    </h5>
                                    <div class="noticeBackground">
                                        {this.state.notice5Open && (
                                            <div class="noticeContent">
                                                <p>
                                                    안녕하세요.
                                                    <br />
                                                    myu 서비스를 제공하고 있는 ㈜myu as(이하 ‘회사’)
                                                    입니다.
                                                    <br />
                                                    <br />
                                                    회사의 2021년도 결산 공고를 안내하오니 참고바랍니다.
                                                    <br />
                                                    자세한 사항은 아래의 파일을 확인 부탁드립니다.
                                                    <br />
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterTwo />
            </Fragment>
        );
    }
}

export default Policy;