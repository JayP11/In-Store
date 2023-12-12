import React, { useEffect, useState } from 'react'
import "./Facilities.css"
import { FacilityCard, MallHero } from '../../components';
import images from '../../constants/images';
import { useMallContext } from '../../context/mall_context';

const FacilitiesData = [
  {
    id: 1,
    img: images.wcard_1,
    logo: images.facilities_logo6,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
    bgcolor: "#4397ff",
    heading: "Free WIFI",
  },
  {
    id: 2,
    img: images.wcard_2,
    logo: images.facilities_logo4,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
    bgcolor: "#ff8b00",
    heading: "Tag & Go Parking",
  },
  {
    id: 3,
    img: images.wcard_3,
    logo: images.facilities_logo1,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
    bgcolor: "#d813a5",
    heading: "Baby Change Rooms",
  },
  {
    id: 4,
    img: images.wcard_1,
    logo: images.facilities_logo3,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
    bgcolor: "#4397ff",
    heading: "Family Rooms",
  },
  {
    id: 5,
    img: images.wcard_2,
    logo: images.facilities_logo2,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
    bgcolor: "#ff8b00",
    heading: "Wheel Chairs Available",
  },
  {
    id: 6,
    img: images.wcard_3,
    logo: images.facilities_logo5,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortist lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetuer. ",
    bgcolor: "#d813a5",
    heading: "Prayer Room",
  },
];

const Facilities = ({ get_mall_auth_data, setTab, setfacility_id, getsinglefacilitydata, setsinglefacilitydata }) => {
  const { get_facility_data, getFacilityApi } = useMallContext();



  const [get_main_name, Set_Main_Name] = useState('')

  useEffect(() => {
    getFacilityApi();
    const name = localStorage.getItem("mallmainname")

    Set_Main_Name(name)
  }, [])
  return (
    <>
      <div className="">
        <MallHero get_mall_auth_data={get_mall_auth_data} />
      </div>

      <div className="mm_main_wrapp">
        <div className="mall_name_wrapp">
          <p className="mall_name_heading">{get_main_name}:</p>
          <span>Facilities</span>
        </div>
        <div className="mm_horizontal_line"></div>
        <div className="facilities_cards_wrapp">
          {get_facility_data && get_facility_data.map((item, index) => {
            return (
              <FacilityCard
                key={item.id}
                item={item}
                setTab={setTab}
                setfacility_id={setfacility_id}
                getsinglefacilitydata={getsinglefacilitydata}
                setsinglefacilitydata={setsinglefacilitydata}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Facilities