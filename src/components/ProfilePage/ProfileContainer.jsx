import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from 'axios';
import {
  getProfileData,
  profilePutUpdates,
  profileUpdateText,
} from "../../redux/profileReducer";
import ApexCharts from 'apexcharts';
import ReactApexChart from 'apexcharts';
import {toggleIsFetching} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {profileAPI} from "../../api/profileApi";


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
    profileAPI.getProfile()
      .then(data => {
        this.props.getProfileData(data);
        this.props.toggleIsFetching(false);
      });
  }

  profilePutUpdates(data) {
    profileAPI.putProfile(data)
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
          (<Preloader/>) :
          <div ref={this.contentRef}>
            <Profile state={this.props.profileStateData}
                     profileUpdateState={this.props.profileUpdateText}
                     profilePutState={this.profilePutUpdates.bind(this)}/>
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

const mapStateToProps = (state) => ({
  profileStateData: state.profilePage,
  isFetching: state.profilePage.isFetching
});

export default connect(mapStateToProps,
  {
    getProfileData,
    profileUpdateText,
    toggleIsFetching
  })(ProfileApiContainer);
