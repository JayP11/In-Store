import React from 'react'
import "./MallNearMe.css"
import { MallsNearMeCard } from '../../components'
import { BsChevronDown } from 'react-icons/bs'
const MallNearMe = ({ setTab }) => {
    return (
        <>
            <div className="mall-near-me-main-wraapp">
                <div className="mall-near-me-sub-flex">
                    <h3 className="h4">Explore malls near you</h3>
                    <input type='text' className='mall-near-me-searchbox' placeholder="Search" />
                </div>
                <div className="mallnearme-card-main-wrapp">

                    <MallsNearMeCard setTab={setTab} />
                    <MallsNearMeCard />
                    <MallsNearMeCard />
                    <MallsNearMeCard />
                    <MallsNearMeCard />
                </div>

                <button className="view_more_btn"> Load More
                    <BsChevronDown /></button>
            </div>
        </>
    )
}

export default MallNearMe