import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import HeaderOne from "../component/layout/header";
import AboutSection from "../component/section/about";
import AppSection from "../component/section/appsection";
import BannerOne from "../component/section/banner";
import StorySection from "../component/section/story";
import WorkSection from "../component/section/work";
import WorkSectionTwo from "../component/section/worktwo";

class HomePage extends Component {
    render() { 
        return (
            <Fragment>
                <HeaderOne />
                <BannerOne />
                <AboutSection />
                <WorkSection />
                <StorySection />
                <WorkSectionTwo />
                <AppSection />
                <Footer />
            </Fragment>
        );
    }
}
 
export default HomePage;