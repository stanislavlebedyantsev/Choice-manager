import s from "./Profile.module.css";
import Header from "../common/Header/Header";
import TopSide from "./topSide/topSide";
import BottomLeftText from "./bottomLeftText/bottomLeftText";
import BottomRightInput from "./bottomRightInput/bottomRightInput";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import FooterContainer from "../common/Footer/FooterContainer";
import {NavLink} from "react-router-dom";

const Profile = (props) => {
  const defaultOptions = {
    axes: true, // show axes?
    scales: 10, // show scale circles?
    captions: true, // show captions?
    captionMargin: 20,
    dots: false, // show dots?
    zoomDistance: 1.2, // where on the axes are the captions?
    setViewBox: (options) => `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${options.size}`, // custom viewBox ?
    axisProps: () => ({className: 'axis'}),
    scaleProps: () => ({className: 'scale', fill: 'none'}),
    shapeProps: () => ({className: 'shape'}),
    captionProps: () => ({
      className: 'caption',
      textAnchor: 'middle',
      fontSize: 24,
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
        <div className={s.precontainer}>
          <div className={s.container}>
            <TopSide state={props.state.userDto} profilePutState={props.profilePutState}/>
            <div className={s.bottomSide}>
              <BottomRightInput state={props.state.userDto} profileUpdateState={props.profileUpdateState}/>
            </div>
            <div>
              {
                props.state.radarChart.caption && props.state.radarChart.data ?
                  (<div className={s.radarChart}>
                      <div className={s.radarChartDescription}>
                        <h1>Here you can see Radar chart on your skills.</h1>
                        <p>This radar chart built after your testing.
                          If you would like to see your skill score improve on the radar chart,
                          you can take the test again at any time.</p>
                        {/*<NavLink to={'/testing'}>Pass the test</NavLink>*/}
                      </div>
                      <RadarChart
                        captions={props.state.radarChart.caption}
                        data={[
                          // data
                          {
                            data: {...props.state.radarChart.data},
                            meta: {color: '#58FCEC'}
                          },
                        ]}
                        size={700}
                        options={defaultOptions}
                      />
                    </div>
                  )
                  : <div/>
              }
            </div>
            <BottomLeftText/>
          </div>
        </div>
        <FooterContainer/>
      </div>
    </div>
  );
};


export default Profile;