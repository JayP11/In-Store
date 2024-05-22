import React, { useEffect, useState } from 'react'
import "./PrivacyPolicy.css"
import { HomeNavbar } from '../../common'
import { ACCEPT_HEADER, get_privacy_policy } from '../../utils/Constant';
import axios from 'axios';

const PrivacyPolicy = () => {

    const [getPrivacyPolicyData, setPrivacyPolicyData] = useState();
    const [loading, setLoading] = useState(false);



    const getPrivacyPolicyApi = async () => {
        setLoading(true);
        axios
          .get(get_privacy_policy, {
            headers: {
              Accept: ACCEPT_HEADER,
            },
          })
          .then((res) => {
            console.log("Privacy Policy Data", JSON.stringify(res.data, null, 2));
            if (res.data.success == 1) {
                setPrivacyPolicyData(res.data.data);
              setLoading(false);
            } else {
              null();
            }
          })
          .catch((err) => {
            console.log("err11", err);
          });
      };

      useEffect(()=>{
        getPrivacyPolicyApi();
      },[])
  return (
    <div>
     {loading === true ? (

<div
  style={{
    width: "100%",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>
  <div className="loader"></div>
</div>
) : (
    <>
    <HomeNavbar/>
    <div className='privacy_policy_con'>
    <p 
                    
                    dangerouslySetInnerHTML={{
                      __html: getPrivacyPolicyData?.description,
                    }}></p>
    </div>
    </>)}
    </div>
  )
}

export default PrivacyPolicy