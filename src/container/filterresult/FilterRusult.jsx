import React, { useEffect, useState } from "react";
import "../../container/customerbranditems/CustomerBrandItems.css";
import "./FilterResult.css"
import {
    CustomerBrandCard,
    CustomerHeroSecond,
    CustomerProductTilesHero,
    FilterProducts,
    MallHero,
} from "../../components";
import { useMallContext } from "../../context/mall_context";
import { HiOutlineSearch } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { ACCEPT_HEADER, get_product_customer, product_banner_tiles_customer, product_cus_tile } from "../../utils/Constant";
import axios from "axios";
import { IoChevronBack } from "react-icons/io5";

const FilterRusult = ({ setTab, getsingalmalldata, navbardata, navbardataName, navbardata1, brandid }) => {
    const { get_mall_auth_data, get_mall_store_data } = useMallContext();

    const [getid, setid] = useState("");


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('malldata'))
        console.log("======>123", data);

        getmovielist(data.id);
        // getproductbanner(data.id);
        console.log("navbardataName", navbardataName);
    }, [])

    useEffect(() => {
        console.log("filter data is", navbardata);
        FilterApi()
    }, [navbardata])
    useEffect(() => {
        console.log("filter data is----->>", navbardata1);
        SearchApi()
    }, [navbardata1])



    const FilterApi = async (id) => {
        const token = await JSON.parse(localStorage.getItem("is_token"));
        const formdata = new FormData();
        // await formdata.append("search", "");
        await formdata.append("mall_id", getsingalmalldata.id);
        await formdata.append("category_id", navbardata);

        fetch(product_banner_tiles_customer, {
            method: "POST",
            body: formdata,
            headers: {
                Accept: ACCEPT_HEADER,
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("123445", res.data);
                Set_List(res.data)

                // setTab(35);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };


    const [get_list, Set_List] = useState([])

    const SearchApi = async () => {
        const token = await JSON.parse(localStorage.getItem("is_token"));
        const formdata = new FormData();
        // await formdata.append("search", "");
        await formdata.append("mall_id", getsingalmalldata.id);
        await formdata.append("search", navbardata1);

        fetch(product_banner_tiles_customer, {
            method: "POST",
            body: formdata,
            headers: {
                Accept: ACCEPT_HEADER,
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("123445", res.data);
                Set_List(res.data)

            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    const [getlist, SetList] = useState([]);
    const [loading, SetLoading] = useState(false);


    const [getlist1, SetList1] = useState([]);
    const [loading1, SetLoading1] = useState(false);
    const [navbardata2, SetNavBarData2] = useState('')

    // const getproductbanner = async (id) => {
    //     SetLoading1(true);
    //     const token = JSON.parse(localStorage.getItem("is_token"));

    //     const formdata = new FormData();
    //     formdata.append("mall_id", id);
    //     formdata.append("brand_id", brandid);

    //     console.log("formdata", id, brandid);

    //     axios
    //         .post(get_product_customer, formdata, {
    //             headers: {
    //                 Accept: ACCEPT_HEADER,
    //                 Authorization: "Bearer " + token,
    //             },
    //         })
    //         .then((res) => {
    //             console.log("getproductbanner---->>L>", JSON.stringify(res.data, null, 2));
    //             if (res.data.success == 1) {
    //                 SetList1(res.data.data);
    //                 SetLoading1(false);
    //             } else {
    //                 null;
    //                 SetLoading1(false);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log("err11", err);
    //             SetLoading(false);
    //         });
    // };

    const getmovielist = async (id) => {
        setid(id)
        SetLoading(true);
        const token = JSON.parse(localStorage.getItem("is_token"));

        const formdata = new FormData();
        formdata.append("mall_id", id);
        formdata.append("brand_id", brandid);

        console.log("formdata", id, brandid);

        axios
            .post(product_cus_tile, formdata, {
                headers: {
                    Accept: ACCEPT_HEADER,
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                console.log("ggg", JSON.stringify(res.data, null, 2));
                if (res.data.success == 1) {
                    SetList(res.data.data);
                    SetLoading(false);
                } else {
                    null;
                    SetLoading(false);
                }
            })
            .catch((err) => {
                console.log("err11", err);
                SetLoading(false);
            });
    };

    // // Search & Filter Api

    // const FilterApi = async (id) => {
    //     const token = await JSON.parse(localStorage.getItem("is_token"));
    //     const formdata = new FormData();
    //     // await formdata.append("search", "");
    //     await formdata.append("mall_id", getsingalmalldata.id);
    //     // await formdata.append("category_id", navbardata);

    //     fetch(product_banner_tiles_customer, {
    //         method: "POST",
    //         body: formdata,
    //         headers: {
    //             Accept: ACCEPT_HEADER,
    //             Authorization: "Bearer " + token,
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log("123445", res.data);
    //             // SetProdata(res.data);
    //             SetNavBarData2(res.data.data)
    //             setTab(35);
    //         })
    //         .catch((err) => {
    //             console.log("err", err);
    //         });
    // };

    return (
        <div>
            {/* <MallHero get_mall_auth_data={get_mall_auth_data} /> */}
            {/* <CustomerHeroSecond /> */}

            {/* old design setup product banner show this design */}



            {/* New design setup brand banner show this design */}
            {/* <CustomerProductTilesHero /> */}

            <div className="mm_main_wrapp">
                <div className='edit-brand-back-iconbox' onClick={() => setTab(2)}><IoChevronBack className='edit-brand-back-icon' /> <p className='edit-brand-back-txt'>Back</p></div>
                <div className="single-brand-product-head">

                    <div className="single-brand-product-head-search-flex">
                        {/* <p className="single-brand-product-head-search-txt">
                            Search GUESS:
                        </p> */}
                        {/* <div className="mall_near_brand_searchbar single-brand-product-searchbar">
                            <input
                                type="text"
                                className="mall-near-me-searchbox"
                                placeholder="Search"
                                onChange={(e) => {
                                    // e.target.value.length > 0
                                    //   ? (getSearchMallList(e.target.value),
                                    //     setMallList([]),
                                    //     setPage(1))
                                    //   : (setMallList([]), setPage(1), getMallList());
                                }}
                            />
                            <HiOutlineSearch color="var(--color-orange)" size={18} />
                        </div> */}

                        {get_list ? <p className="search-prodct-head">Search Resuls for : <span className="search-result-name">{navbardata1 === '' ? navbardataName : navbardata1}</span></p> : null}

                    </div>
                    {/* <div className="find-my-way-btn-flex">
                        <button className="find-my-way-btn">Find my way</button>
                        <BsArrowRight className="find-my-way-btn-arrow" />
                    </div> */}
                </div>

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
                    <>
                        <div className="customer_brands_wrapp">
                            {get_list && get_list.length > 0
                                ? get_list.map((item, index) => {
                                    return (
                                        <FilterProducts
                                            data={item}
                                            getmovieapi={getmovielist}
                                            replce={1}
                                            mainitem={''}
                                            getid={getid}
                                        />
                                    );
                                })
                                : null}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default FilterRusult;