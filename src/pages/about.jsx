import { Component, Fragment } from "react";
import FooterThree from "../component/layout/footerthree";
import PageHeader from "../component/layout/pageheader";
import AboutSection from "../component/section/about";
import AboutSectionSix from "../component/section/aboutsix";
import StorySection from "../component/section/story";
import WorkSectionTwo from "../component/section/worktwo";
import AppSectionTwo from "../component/section/appsectiontwo";
import HeaderTwo from "../component/layout/headertwo";

class AboutPage extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderTwo />
                <PageHeader title={'myu를 소개합니다'} curPage={'회사 소개'} />
                <AboutSectionSix />
                <StorySection />
                <AboutSection />
				<WorkSectionTwo />
				<AppSectionTwo />
				<FooterThree />
            </Fragment>
        );
    }
}
 
export default AboutPage;