import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { ProductTilesCard, RetailerNavigationBar } from "../../components";
import "./ProductTiles.css";
import {
  ACCEPT_HEADER,
  filter_producttilesbanner,
  get_producttilesbanner,
  get_region_mall,
  get_store_region_authwise,
  store_mall_from_region,
} from "../../utils/Constant";
import { BsChevronDown } from "react-icons/bs";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { IoIosArrowDown, IoIosArrowUp, IoIosClose } from "react-icons/io";
import ReactModal from "react-modal";
import { BiSearch } from "react-icons/bi";
import { useStoreContext } from "../../context/store_context";
import { useAuthContext } from "../../context/auth_context";
import axios from "axios";

const animatedComponents = makeAnimated();

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// model style

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    backgroundColor: "none",
    border: "none",
    borderRadius: "0px",
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

const AccordionData = [
  {
    id: 1,
    city: "Western Cape",
    mall: [
      {
        id: 1,
        name: "Bayside Mall",
      },
      {
        id: 2,
        name: "Blue Route Mall",
      },
      {
        id: 3,
        name: "Boulevard Square",
      },
    ],
  },
  {
    id: 2,
    city: "KZN",
    mall: [
      {
        id: 1,
        name: "Brackenfell Centre",
      },
      {
        id: 2,
        name: "Brackenfell Corner",
      },
      {
        id: 3,
        name: "Brackenfell Shopping Centre",
      },
    ],
  },
  {
    id: 3,
    city: "Eastern Cape",
    mall: [
      {
        id: 1,
        name: "Canal Walk",
      },
      {
        id: 2,
        name: "Cape Quarter",
      },
      {
        id: 3,
        name: "Cape Gate",
      },
    ],
  },
  {
    id: 4,
    city: "Free State",
    mall: [
      {
        id: 1,
        name: "Delft Mall",
      },
      {
        id: 2,
        name: "De Ville Centre",
      },
      {
        id: 3,
        name: "Durbanville Town Centre",
      },
    ],
  },
];

const ProductTiles = ({ get_mall_auth_data, setTab, getTab }) => {
  const { getCategoryApi, getWeekApi } = useStoreContext();

  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const perPage2 = 3;
  const [totalPages2, setTotalPages2] = useState(1);
  const [page2, setPage2] = useState(1);

  const [getliast, SetLiast] = useState([]);
  const [loading, setLoading] = useState(false);

  const [mainName, setMainName] = useState(
    get_mall_auth_data &&
      get_mall_auth_data.retailers &&
      get_mall_auth_data.retailers.name !== null
      ? get_mall_auth_data.retailers.name
      : ""
  );
  useEffect(() => {
    getProductTiles();
    // console.log("abc");
  }, [page]);

  const getProductTiles = async () => {
    const token = await JSON.parse(localStorage.getItem("is_token"));

    setLoading(true);
    fetch(get_producttilesbanner + `per_page=${perPage}&page=${page}`, {
      method: "GET",

      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("ffff", res.data);
        setTotalPages(res.data.last_page);
        SetLiast([...getliast, ...res.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const UpdateRegionFilter = async (selectedOption) => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    const formdata = new FormData();
    selectedOption.forEach((option, index) => {
      formdata.append(`region_id[${index}]`, option.value);
    });

    try {
      const res = await axios.post(store_mall_from_region, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      });
      console.log(JSON.stringify(res, null, 2));
      setMallsOptions(res.data.data);
    } catch (err) {
      console.log("err11", err);
    }
  };

  // const LeaderboadFilter = async (selectedOption) => {
  //   const token = JSON.parse(localStorage.getItem("is_token"));

  //   const formdata = new FormData();
  //   getMallsRegion2.forEach((option, index) => {
  //     formdata.append(`region_id[${index}]`, option.value);
  //   });
  //   selectedOption.forEach((option, index) => {
  //     formdata.append(`mall_id[${index}]`, option.value);
  //   });

  //   try {
  //     const res = await axios.post(filter_leaderboard, formdata, {
  //       headers: {
  //         Accept: ACCEPT_HEADER,
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     console.log(JSON.stringify(res, null, 2));
  //     setfilterData(res.data.data);
  //   } catch (err) {
  //     console.log("err11", err);
  //   }
  // };

  const LeaderboadFilter = async (selectedOption) => {
    const token = await JSON.parse(localStorage.getItem("is_token"));
    const formdata = new FormData();
    getMallsRegion2.forEach((option, index) => {
      formdata.append(`region_id[${index}]`, option.value);
    });
    selectedOption.forEach((option, index) => {
      formdata.append(`mall_id[${index}]`, option.value);
    });

    setLoading(true);
    fetch(filter_producttilesbanner + `per_page=${perPage2}&page=${page2}`, {
      method: "POST",
      body: formdata,
      headers: {
        Accept: ACCEPT_HEADER,
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("ffff", res.data.last_page);
        setTotalPages2(res.data.last_page);
        // setProList2([...getfilterData, ...res.data.data]);
        SetLiast([...getfilterData, ...res.data.data]);
        setLoading(false);
        console.log("123", getfilterData);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // Modal

  const [mallMolalOpen, setMallModalIsOpen] = useState(false);
  const [getweek, setWeek] = useState("");

  function closeMallModal() {
    setMallModalIsOpen(false);
  }

  function openMallModal() {
    setMallModalIsOpen(true);
  }

  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };

  // select chackbox functionality
  const [peopleInfo, setPeopleInfo] = useState([]);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // const handleCheckboxChange = (event) => {
  //     setCheckboxChecked(event.target.checked);
  // };

  const handleCheckboxChange = (event, itm, ind) => {
    if (
      event.target.checked === true &&
      itm.region_id === toggle &&
      !peopleInfo.includes(itm.region_id)
    ) {
      console.log("checked_true");

      setPeopleInfo([
        ...peopleInfo,
        {
          id: itm.id,
          name: itm.name,
          checked: event.target.checked,
          region_id: itm.region_id,
        },
      ]);
    } else {
      console.log("checked_false");
      let result = peopleInfo.filter((item, key) => item.id != itm.id);
      setPeopleInfo(result);
    }
  };

  useEffect(() => {
    GetRegion();
    getCategoryApi();
    GetRegionFilter();
  }, []);

  const [getregion_array, SetRigion_Array] = useState([]);
  const [getregion_arrayfilter, SetRigion_Arrayfilter] = useState([]);

  const GetRegion = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_region_mall, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("ggg", JSON.stringify(res.data, null, 2));
        if (res.data.success == 1) {
          SetRigion_Array(res.data.data);
        } else {
          null;
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  const GetRegionFilter = async () => {
    const token = JSON.parse(localStorage.getItem("is_token"));

    axios
      .get(get_store_region_authwise, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.success == 1) {
          SetRigion_Arrayfilter(res.data.data);
        } else {
        }
      })
      .catch((err) => {
        console.log("err11", err);
      });
  };

  const stateMultipleChange = async (selectedOption) => {
    setregionsOption(selectedOption);

    await UpdateRegionFilter(selectedOption);
    await setMallsRegion2(selectedOption);
    console.log("Selected Option:", selectedOption);
  };

  const stateMultipleChange2 = async (selectedOption) => {
    setMallOptions(selectedOption);

    await LeaderboadFilter(selectedOption);

    console.log("Selected Option:", selectedOption);
  };

  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedMalls, setSelectedMalls] = useState([]);
  const [regionsOption, setregionsOption] = useState([]);
  const [mallsOption, setMallOptions] = useState([]);

  const [mallidarray, SetMallidarray] = useState([]);
  const [regionidarray, SetRegionidarray] = useState([]);
  const [getMallsOptions, setMallsOptions] = useState([]);
  const [getfilterData, setfilterData] = useState([]);
  const [getMallsRegion2, setMallsRegion2] = useState([]);

  const handleRegionChange = (regionName, id) => {
    const updatedSelectedRegions = [...selectedRegions];
    const index = updatedSelectedRegions.indexOf(regionName);

    if (index > -1) {
      updatedSelectedRegions.splice(index, 1);
    } else {
      updatedSelectedRegions.push(regionName);
      regionidarray.push({ id: id });
    }

    setSelectedRegions(updatedSelectedRegions);
  };

  const handleMallChange = (mallName, id) => {
    const updatedSelectedMalls = [...selectedMalls];
    const index = updatedSelectedMalls.indexOf(mallName);

    if (index > -1) {
      updatedSelectedMalls.splice(index, 1);
    } else {
      updatedSelectedMalls.push(mallName);
      mallidarray.push({ id: id });
    }

    setSelectedMalls(updatedSelectedMalls);
  };

  useEffect(() => {
    getWeekApi();
  }, []);

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
        <div className="mm_main_wrapp">
          <div className="leaderboard-sub-wrapp" style={{ gap: "1rem" }}>
            <RetailerNavigationBar
              title="Account Management"
              setTabType={getTab == 6 ? "Product Tiles" : ""}
            />
            {/* LeaderBoard name start */}
            <div
              className="mall_name_wrapp mall_name_wrapp-spacebetween"
              style={{ marginTop: "0px", paddingLeft: "0px" }}>
              <div className="leaderboard-inner-namebox">
                <p className="mall_name_heading">{mainName}:</p>
                <span
                  className="leaderboard-span"
                  style={{ fontWeight: "600" }}>
                  In Mall Product Tiles
                </span>
              </div>
            </div>
            {/* <p>
              Purchase marketing space through our Leaderboard Banners below
              (max 1 Leaderboard Banner per Reteiler per mall). There is a
              limited amount of 5 banners per mall. Fist come, first serve.
            </p> */}
            <p style={{ color: "gray" }}>
              Maximum of 50 Product Tiles have been allocated for you to
              populate.
            </p>
            <div className="mm_horizontal_line"></div>
            {/* LeaderBoard  name end */}

            {/* Leaderboard Filter Start */}
            <div className="leaderboard-filter-main-wrapp">
              <div className="leaderboard-filter-part-first">
                <label
                  className="leaderboard-card-lbl"
                  style={{ minWidth: "125px" }}>
                  Filter by region:
                </label>
                <div
                  //  className="select-wrapper"
                  style={{ width: "100%" }}>
                  <Select
                    value={regionsOption}
                    styles={{
                      width: "100%",
                      padding: "0px",
                      borderRadius: "4px",
                    }}
                    className="leaderboard-card-inp"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    // defaultValue={[colourOptions[4], colourOptions[5]]}

                    isMulti
                    options={getregion_arrayfilter}
                    // onChange={setregionsOption}
                    onChange={stateMultipleChange}
                  />
                </div>
              </div>

              <div className="leaderboard-filter-part-sec">
                <label
                  className="leaderboard-card-lbl"
                  style={{ minWidth: "125px" }}>
                  Filter by mall:
                </label>
                <div
                  // className="select-wrapper"
                  style={{ width: "100%" }}>
                  <Select
                    value={mallsOption}
                    styles={{
                      width: "100%",
                      padding: "0px",
                      borderRadius: "4px",
                    }}
                    className="leaderboard-card-inp"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    // defaultValue={[colourOptions[4], colourOptions[5]]}

                    isMulti
                    options={getMallsOptions}
                    // onChange={setregionsOption}
                    onChange={stateMultipleChange2}
                  />
                  {/* <Select
                value={mallsOption}
                styles={{ width: "100%", padding: "0px" }}
                className="leaderboard-card-inp"
                closeMenuOnSelect={false}
                components={animatedComponents}
                // defaultValue={[colourOptions[4], colourOptions[5]]}

                isMulti
                options={multiple_week_data}
                onChange={setMallsOption}
              /> */}
                </div>
              </div>
            </div>

            {/* <button className="leaderboard-btn" onClick={() => setTab(23)}>
              Add new{" "}
              <img
                src={images.add_new}
                alt=""
                className="leaderboard-btn-icon"
              />
            </button> */}
            {getliast && getliast.length > 0
              ? getliast.map((mall, mindx) => {
                  return (
                    <ProductTilesCard
                      openMallModal={openMallModal}
                      item={mall}
                      mindx={mindx}
                      setTab={setTab}
                      getweek={getweek}
                      setWeek={setWeek}
                      peopleInfo={peopleInfo}
                      regionidarray={regionidarray}
                      mallidarray={mallidarray}
                      selectedMalls={selectedMalls}
                    />
                  );
                })
              : null}
            <span
              style={{
                fontSize: "14px",
                color: "#bbb",
                alignSelf: "flex-start",
                marginBottom: "0.7rem",
              }}>
              *Required Fields including all image uploads.
            </span>
            {totalPages !== page && (
              <button
                className="view_more_btn"
                onClick={() => setPage(page + 1)}>
                {loading ? "Loading..." : " Load More LeaderBoard"}
                <BsChevronDown />
              </button>
            )}

            {totalPages2 !== page2 && (
              <button
                className="view_more_btn"
                onClick={() => setPage(page2 + 1)}>
                {loading ? "Loading..." : " Load More LeaderBoard"}
                <BsChevronDown />
              </button>
            )}
            {/* LeaderBoard Card Component end */}

            {/* LeaderBoard Add New Button start */}
            {/* {getliast.length > 0 ? ( */}
            <button onClick={() => setTab(23)} className="leaderboard-btn">
              Add new{" "}
              <img
                src={images.add_new}
                alt=""
                className="leaderboard-btn-icon"
              />
            </button>
            {/* ) : null} */}

            {/* LeaderBoard Add New Button end */}
          </div>

          {/* select mall modal start */}
          <ReactModal
            isOpen={mallMolalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeMallModal}
            style={customStyles}>
            <div className="select_mall_main_wrapp">
              <div className="select_mall_base_wrapp">
                {/* mall heading */}
                <p className="select_mall_heading">
                  Select the malls that your brand features in:
                </p>

                {/* mall search */}
                <div className="select_mall_serch_wrapp">
                  <input
                    type="search"
                    placeholder="Search"
                    className="input_box"
                  />
                  <BiSearch
                    className="select_mall_search_icon"
                    size={25}
                    color="var(--color-orange)"
                  />
                </div>

                <div className="select_mall_tag_btns_wrapp">
                  {selectedMalls && selectedMalls.length > 0
                    ? selectedMalls.map((mall, mindx) => {
                        // console.log("gggg", mall);
                        return (
                          <button
                            className="select_mall_tag_single_btn"
                            style={{ backgroundColor: "#4FBB10" }}
                            key={mindx}>
                            {mall}
                          </button>
                        );
                      })
                    : null}
                </div>

                <div className="mall_Select_wrapp">
                  <p
                    style={{
                      fontSize: "18px",
                      alignSelf: "start",
                      marginBottom: "1rem",
                    }}>
                    Region
                  </p>

                  {getregion_array && getregion_array.length > 0
                    ? getregion_array.map((item, index) => {
                        return (
                          <div
                            className="bim_accordian_wrapp"
                            style={{ marginBottom: "6px" }}
                            key={item.region_id}>
                            <button
                              className="bim_accordian_btn"
                              onClick={() => {
                                setToggle(item.region_id);
                                handleRegionChange(
                                  item.region_name,
                                  item.region_id
                                );
                              }}>
                              <p
                                style={{
                                  color:
                                    item.region_id === toggle
                                      ? "#ff8b00"
                                      : "#000",
                                  fontWeight:
                                    item.region_id === toggle ? "500" : "300",
                                }}>
                                {item.region_name}
                              </p>

                              {item.region_id == toggle ? (
                                <IoIosArrowUp size={20} color="#ff8b00" />
                              ) : (
                                <IoIosArrowDown size={20} />
                              )}
                            </button>
                            {item.region_id == toggle ? (
                              <div className="bim_accordian_mall_wrapp">
                                {item.malls.map((itm, ind) => {
                                  return (
                                    <>
                                      <div
                                        key={itm.id}
                                        style={{
                                          display: "flex",
                                          gap: "10px",
                                          marginLeft: "10px",
                                        }}>
                                        <input
                                          type="checkbox"
                                          checked={selectedMalls.includes(
                                            itm.name
                                          )}
                                          // value={peopleInfo}
                                          onChange={(e) => {
                                            // handleCheckboxChange(e, itm, ind);
                                            handleMallChange(itm.name, itm.id);
                                          }}
                                        />
                                        <label htmlFor={itm.id}>
                                          {itm.name}
                                        </label>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      })
                    : null}
                </div>

                <div className="leaderboard-btn-box">
                  <button
                    className="btn btn-orange"
                    onClick={() => {
                      closeMallModal();
                      console.log("mallidarray", mallidarray);
                      console.log("regionidarray", regionidarray);
                    }}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </ReactModal>
          {/* select mall modal end */}
        </div>
      )}
    </div>
  );
};

export default ProductTiles;
