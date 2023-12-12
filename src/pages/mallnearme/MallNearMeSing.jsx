import React, { useEffect, useState } from "react";
import "./MallNearMeSing.css";
import { MallNearMeSingNavbar, MallsNearMeCard } from "../../components";
import { BsChevronDown } from "react-icons/bs";
import { ACCEPT_HEADER, get_mall_customer } from "../../utils/Constant";
import { HiOutlineSearch } from "react-icons/hi";
import { CustomerNavbar } from "../../common";
import { useCustomerContext } from "../../context/customer_context";
const MallNearMeSing = ({ setTab }) => {
    const [mallList, setMallList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [getsingalmalldata, SetSingalMallData] = useState({});
    // const [gettab, setTab] = useState();
    const { getCustomer } = useCustomerContext();
    const perPage = 3;
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    //   const perPage = 3;
    //   const [totalPages, setTotalPages] = useState(1);
    //   const [page, setPage] = useState(1);

    //   const [mallList, setMallList] = useState([]);
    //   const [loading, setLoading] = useState(false);

    //   useEffect(() => {
    //     getMallList();
    //   }, [page]);

    //   const getMallList = async () => {
    //     const token = await JSON.parse(localStorage.getItem("is_token"));

    //     const formdata = new FormData();
    //     await formdata.append("search", "");

    //     setLoading(true);
    //     fetch(get_mall_customer + `per_page=${perPage}&page=${page}`, {
    //       method: "POST",
    //       body: formdata,
    //       headers: {
    //         Accept: ACCEPT_HEADER,
    //         Authorization: "Bearer " + token,
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then((res) => {
    //         console.log("ffff", res.data.last_page);
    //         setTotalPages(res.data.last_page);
    //         setMallList([...mallList, ...res.data.data]);
    //         setLoading(false);
    //       })
    //       .catch((err) => {
    //         console.log("err", err);
    //       });
    //   };

    const getMallList = async () => {
        const token = await JSON.parse(localStorage.getItem("is_token"));

        const formdata = new FormData();
        await formdata.append("search", "");

        setLoading(true);
        fetch(get_mall_customer + `per_page=${perPage}&page=${page}`, {
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
                setTotalPages(res.data.last_page);
                setMallList([...mallList, ...res.data.data]);
                setLoading(false);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    // search mall list api

    const getSearchMallList = async (value) => {
        console.log("value", value);

        const token = await JSON.parse(localStorage.getItem("is_token"));

        const formdata = new FormData();
        await formdata.append("search", value);

        // setLoading(true);
        fetch(get_mall_customer + `per_page=${perPage}&page=${page}`, {
            method: "POST",
            body: formdata,
            headers: {
                Accept: ACCEPT_HEADER,
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                // console.log("ffff", res.data.last_page);
                console.log("Brand_list", res.data);

                setTotalPages(res.data.last_page);
                setMallList([...mallList, ...res.data.data]);

                setLoading(false);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    useEffect(() => {
        getMallList();
        getCustomer();

    }, [page]);

    useEffect(() => {
        console.log("all mall are", mallList);

    }, [mallList])


    return (
        <>
            <MallNearMeSingNavbar setTab={setTab} />
            {loading === true ? (
                <div
                    style={{
                        width: "100%",
                        height: "80vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="mall-near-me-main-wraapp">
                    <div className="mall-near-me-sub-flex">
                        <h3 className="h4 mallnearmesing-main-heading" style={{ fontSize: "40px", fontWeight: "800" }}>Explore malls near you</h3>
                        <div className="mall_near_brand_searchbar">
                            <input
                                type="text"
                                className="mall-near-me-searchbox"
                                placeholder="Search"
                                onChange={(e) => {
                                    e.target.value.length > 0
                                        ? (getSearchMallList(e.target.value),
                                            setMallList([]),
                                            setPage(1))
                                        : (setMallList([]), setPage(1), getMallList());
                                }}
                            // onChange={(e) => {
                            //     console.log("==>", e.target.value);
                            // }}
                            />
                            <HiOutlineSearch color="var(--color-orange)" size={18} />

                        </div>
                    </div>
                    <>
                        <div className="mallnearme-card-main-wrapp mallnearme-card-main-wrapp-mx-width mallnearme-card-main-wrapp-resp-gap">
                            {/* <p>{mallList.length}</p> */}
                            {mallList.map((x, i) => {
                                return (

                                    <MallsNearMeCard
                                        setTab={setTab}
                                        SetSingalMallData={SetSingalMallData}
                                        item={x}
                                        key={i}
                                        getMallList={getMallList}
                                    />
                                );
                            })}
                            {/* <MallsNearMeCard />
                    <MallsNearMeCard />
                    <MallsNearMeCard />
                    <MallsNearMeCard /> */}
                        </div>
                        {totalPages !== page && (
                            <button className="view_more_btn" onClick={() => setPage(page + 1)}>
                                {loading ? "Loading..." : "Load More"}
                                <BsChevronDown />
                            </button>
                        )}
                    </>
                </div>)}
        </>
    );
};

export default MallNearMeSing;
