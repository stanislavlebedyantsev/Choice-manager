import s from "./Profile.module.css";
import Header from "../common/Header/Header";
import 'react-svg-radar-chart/build/css/index.css';
import {reduxForm} from "redux-form";
import ProfileForm from "./ProfileForm/ProfileForm";
import PhotoUploadComponent from "./PhotoUploadComponent/PhotoUploadComponent";
import RadarChartComponent from "./RadarChartComponent/RadarChartComponent";
import ProfileLogo from "./ProfileLogo/ProfileLogo";
import Footer from "../common/Footer/Footer";


const ProfileFormRedux = reduxForm({form: 'profile'})(ProfileForm);

const Profile = ({state, profilePutState, editProfilePhoto}) => {
  const onSubmit = (formData) => {
    profilePutState(formData);
  };
  return (
    <div className={s.background}>
      <Header/>
      <div className={s.container}>
        <PhotoUploadComponent state={state.userDto}
                              profilePutState={profilePutState}
                              editProfilePhoto={editProfilePhoto}
        />
        <ProfileFormRedux initialValues={state.userDto}
                          onSubmit={onSubmit}
        />

        {
          state.radarChart.caption && state.radarChart.data ?
            <RadarChartComponent
              caption={state.radarChart.caption}
              data={state.radarChart.data}
            />
            : <div/>
        }
        <ProfileLogo/>
      </div>
      <Footer/>
    </div>
  );
};


export default Profile;