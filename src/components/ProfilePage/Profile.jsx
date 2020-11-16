import s from "./Profile.module.css";
import Header from "../Header/Header";
import TopSide from "./topSide/topSide";
import BottomLeftText from "./bottomLeftText/bottomLeftText";
import BottomRightInput from "./bottomRightInput/bottomRightInput";
import Footer from "../Footer/Footer";
import SlideMenuBtn from "./SlideMenuBtn/SlideMenuBtn";

const Profile = (props) => {
    return (
        <div>
        <div className={s.background}>
            <Header></Header>
            <div className={s.container}>
                <TopSide/>
                <div className={s.bottomSide}>
                    <BottomLeftText/>
                    <BottomRightInput/>
                </div>
            </div>

        </div>
            <Footer></Footer>
        </div>
    );
}

export default Profile;