import s from "./StartPage.module.css";
import {Route, NavLink} from "react-router-dom";
import SlideMenuBtn from "./SlideMenuBtn/SlideMenuBtn";
import About from "../About/About";

const StartPage = (props) => {
    return (
        <div className={s.logo}>
            <div>
            <ul className={s.body_slides}>
                <div >
                <li>
                    <div className={s.slider1}>
                        <div className={s.slider1H1}>
                            Choice manager<br/> The way to create your own
                        </div>
                        <div className={s.slider1Right}>
                            <p>One of the most important things in life is to find your life vision and decide what you
                                strive at and what you want to accomplish.
                                <br/><br/> Otherwise you drift from place to place without a plan, without a purpose. A
                                life based on random decisions is a confusing and often difficult one. </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.slider2}>
                        <div className={s.overText}>
                            <div className={s.overText2}></div>
                        </div>
                        <div className={s.slider2Text}>JUST<br/> DO<br/> IT</div>
                        <div className={s.underText}>
                            <div className={s.underText2}></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.container}>
                        <div className={s.ourStory}>Our story</div>
                        <div className={s.containerText}>
                            <div className={s.leftText}>
                                I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself
                            </div>
                            <div className={s.rightText}>
                                <blockquote>
                                    <p>Since everything is in our heads, we had better not lose them.</p>
                                    <footer>— <cite>Coco Chanel</cite></footer>
                                    <p>Since everything is in our heads, we had better not lose them.</p>
                                    <footer>— <cite>Coco Chanel</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </li>
                </div>
            </ul>
            </div>
            <div>
                <About/>
            </div>
        </div>
    );
}
export default StartPage;