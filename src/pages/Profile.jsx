import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Loading from '../components/Loading';

import { getFromFirestore } from '../services/firebaseSvc';

import AsideImg from "../assets/images/abs_background_green.jpg"
import "../scss/pages/profile.scss"

const Profile = () => {
  const { userId } = useParams();
  const [ loading, setLoading ] = useState(true);
  const [ userProfile, setUserProfile ] = useState(undefined);


  useEffect( () => {
    const fetchProfile = async () => {
      try {
        const resp = await getFromFirestore("profiles", ["auth_id", "==", userId]);
        setUserProfile(resp[0]);
        setLoading(false);
      } catch (error) {
        console.error(error)
      }
    }

    fetchProfile();
  }, [userId]);


  return (
    <div className='main-page-margin'>
      <div className="container" id="wrap-card">
        { (loading) ? 
            <Loading isFullPage />
            : 
            <div className="card shadow-lg" id="profile">
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={AsideImg} alt="aside_image_background" loading='lazy'/>
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h3 className="card-title mt-3 ms-3">My Profile</h3>
                  </div>
                  <hr className='bg-amazon'/>
                  <div className="card-body my-2 ms-5">
                    <p className="card-text">User : { userProfile.name } </p>
                    <p className="card-text">Email : { userProfile.email }</p>
                    <p className="card-text">Phone : { userProfile.phone }</p>
                    <p className="card-text">Register date : { new Date(userProfile.date.seconds * 1000).toDateString() }</p>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Profile