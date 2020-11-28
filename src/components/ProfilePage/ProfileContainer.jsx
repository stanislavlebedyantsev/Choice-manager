import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from 'axios';
import {profilePutOnApi, requestProfileData, updateProfileData} from "../../redux/profileReducer";
import ApexCharts from 'apexcharts';
import ReactApexChart from 'apexcharts';
import {toggleIsFetching} from "../../redux/profileReducer";
import s from "../TestingPage/TestingForm.module.css";
import preloader from "../../images/Preloader.svg";


/*class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';

  }

  render() {
    return (
      <div id="chart">
      </div>
    );
  }
}*/

class ProfileApiContainer extends React.Component {
  /*constructor(props) {
    super(props);
    this.chart = {}
    this.options = {
      series: [{
        name: 'Testing value',
        data: [],
      }],
      chart: {
        type: 'radar'
      },
      xaxis: {
        categories: []
      }

    };
    this.contentRef = React.createRef();
  }*/

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`http://127.0.0.1:8080/profile/me`,
        {
          headers: {
            Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
          }
        })
      .then(response => {
        this.props.getProfileData(response.data);
        this.props.toggleIsFetching(false);
      });
  }

  componentWillUnmount() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  }

  /*radarChartRender = async () =>{
    debugger
    this.chart = new ApexCharts(this.contentRef, this.options)
    await this.chart.render()
  }*/
  render() {
    return (
      <>
        {this.props.isFetching ?
          (<div className={s.preloader}>
            <img src={preloader}/>
          </div>) :
          <div ref={this.contentRef}>
            <Profile state={this.props.profileStateData}
                     profileUpdateState={this.props.profileUpdateText}
                     profilePutState={this.props.profilePutUpdates}/>
            {
              /*this.props.profileStateData.radarChart.data && this.props.profileStateData.radarChart.caption ?
                this.chart
                : <div/>*/
            }
          </div>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileStateData: state.profilePage,
    isFetching: state.profilePage.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileData: (obj) => {
      dispatch(requestProfileData(obj));
    },
    profileUpdateText: (obj) => {
      dispatch(updateProfileData(obj));
    },
    profilePutUpdates: () => {
      dispatch(profilePutOnApi());
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileApiContainer);
