import s from "./Profile.module.css";
import Header from "../Header/Header";
import TopSide from "./topSide/topSide";
import BottomLeftText from "./bottomLeftText/bottomLeftText";
import BottomRightInput from "./bottomRightInput/bottomRightInput";
import Footer from "../Footer/Footer";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

const Profile = (props) => {
  const defaultOptions = {
    axes: true, // show axes?
    scales: 10, // show scale circles?
    captions: true, // show captions?
    captionMargin: 10,
    dots: false, // show dots?
    zoomDistance: 1.2, // where on the axes are the captions?
    setViewBox: (options) => `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${options.size}`, // custom viewBox ?
    axisProps: () => ({className: 'axis'}),
    scaleProps: () => ({className: 'scale', fill: 'none'}),
    shapeProps: () => ({className: 'shape'}),
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontSize: 10,
      fontFamily: 'sans-serif'
    }),
    dotProps: () => ({
      className: 'dot',
      mouseEnter: (dot) => {
        console.log(dot);
      },
      mouseLeave: (dot) => {
        console.log(dot);
      }
    })
  };
  return (
    <div>
      <div className={s.background}>
        <Header/>
        <div className={s.container}>
          <TopSide profilePutState={props.profilePutState}/>
          <div className={s.bottomSide}>
            <BottomLeftText/>
            <BottomRightInput state={props.state} profileUpdateState={props.profileUpdateState}/>
          </div>
          <div>
            {
              props.state.radarChart.caption && props.state.radarChart.data ?
                <RadarChart
                  captions={props.state.radarChart.caption}
                  data={[
                    // data
                    {
                      data: {...props.state.radarChart.data},
                      meta: {color: '#58FCEC'}
                    },
                  ]}
                  size={400}
                  options={defaultOptions}
                />
                : <div/>
            }
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};


export default Profile;