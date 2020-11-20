import s from "./Profile.module.css";
import Header from "../Header/Header";
import TopSide from "./topSide/topSide";
import BottomLeftText from "./bottomLeftText/bottomLeftText";
import BottomRightInput from "./bottomRightInput/bottomRightInput";
import Footer from "../Footer/Footer";
import SlideMenuBtn from "./SlideMenuBtn/SlideMenuBtn";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

const Profile = (props) => {
  return (
    <div>
      <div className={s.background}>
        <Header/>
        <div className={s.container}>
          <TopSide/>
          <div className={s.bottomSide}>
            <BottomLeftText/>
            <BottomRightInput/>

          </div>
          <div>
            <RadarChart
              captions={{
                // columns
                battery: 'Battery Capacity',
                design: 'Design',
                useful: 'Usefulness'
              }}
              data={[
                // data
                {
                  data: {
                    battery: 0.7,
                    design: .8,
                    useful: 0.9
                  },
                  meta: {color: '#58FCEC'}
                },
              ]}
              size={400}
            />
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
};


export default Profile;