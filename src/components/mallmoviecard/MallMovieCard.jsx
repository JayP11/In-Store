import axios from "axios";
import React from "react";
import images from "../../constants/images";
import { ACCEPT_HEADER, delete_movie } from "../../utils/Constant";
import "./MallMovieCard.css";

const MallMovieCard = ({
    setTab,
    gettab,
    item,
    getmovielist,
    SetMovieData,
}) => {
    const deletemovie = async (id) => {
        const token = JSON.parse(localStorage.getItem("is_token"));

        const formdata = new FormData();
        formdata.append("id", id);

        axios
            .post(delete_movie, formdata, {
                headers: {
                    Accept: ACCEPT_HEADER,
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                console.log("ggg", JSON.stringify(res.data, null, 2));
                if (res.data.success == 1) {
                    Notification("success", "Success!", "Movie Deleted Successfully!");

                    getmovielist();
                } else {

                    null;
                }
            })
            .catch((err) => {
                console.log("err11", err);
            });
    };

    return (
        <>
            <div>
                <div className="movies-card-main">
                    <div className="movies-card-img-position">
                        <img
                            className="movies-card-img "
                            src={item.image_path ? item.image_path : images.movies_card}
                        />

                        {/* edit & cancel button start */}
                        <div className="stored_card_edit_wrapp">
                            <button
                                className="stored_card_edit_btn"
                                onClick={() => {
                                    setTab(19);
                                    SetMovieData(item);
                                }}
                            >
                                <img src={images.card_edit} alt="" />
                            </button>
                            <button
                                className="stored_card_edit_btn"
                                onClick={() => {
                                    deletemovie(item.id);
                                }}
                            >
                                <img src={images.card_cancle} alt="" />
                            </button>
                        </div>
                    </div>
                    {/* edit & cancel button end */}

                    <p className="movies-card-name">{item.title ? item.title : ""} </p>
                    <p className="movies-card-digit">
                        {item.agerestricts ? item.agerestricts.name : ""}{" "}
                    </p>
                    <p className="movies-card-desc">
                        {" "}
                        {item.genres ? item.genres.name : ""}{" "}
                    </p>
                    <a href={item.booking_url} className="movies-card-btn btn btn-black" target="_blank">Book now</a>
                </div>
            </div>
        </>
    );
};

export default MallMovieCard;