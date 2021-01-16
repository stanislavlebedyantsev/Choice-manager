import s from "../Profile.module.css";
import {NavLink} from "react-router-dom";
import RadarChart from "react-svg-radar-chart";

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

const RadarChartComponent = ({caption, data}) => {
  const handleClick = () => {
    sessionStorage.setItem('isTested', 'false');
  };
  return (
    <div className={s.radarChart}>
      <div className={s.radarChartDescription}>
        <h1>Here you can see Radar chart on your skills.</h1>
        <p>This radar chart built after your testing.
          If you would like to see your skill score improve on the radar chart,
          you can take the test again at any time.</p>
        <NavLink to={'/testing'} onClick={handleClick}
                 className={`${s.uploadBtn} ${s.retestBtn}`}>Pass the test</NavLink>
      </div>
      <RadarChart
        captions={caption}
        data={[
          // data
          {
            data: {...data},
            meta: {color: '#00FFFF'}
          },
        ]}
        size={500}
        options={defaultOptions}
      />
    </div>
  );
};

export default RadarChartComponent;