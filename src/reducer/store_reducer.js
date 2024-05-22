import {
  REGISTER_STORE_BEGIN,
  REGISTER_STORE_SUCCESS,
  REGISTER_STORE_FAIL,
  GET_STORE_BEGIN,
  GET_STORE_SUCCESS,
  GET_STORE_FAIL,
  GET_RETAILER_BEGIN,
  GET_RETAILER_SUCCESS,
  GET_RETAILER_FAIL,
  UPDATE_BRAND_BEGIN,
  UPDATE_BRAND_SUCCESS,
  UPDATE_BRAND_FAIL,
  DELETE_LEADERBOARD_BEGIN,
  DELETE_LEADERBOARD_SUCCESS,
  DELETE_LEADERBOARD_FAIL,
  DELETE_PROMOTION_BANNER_BEGIN,
  DELETE_PROMOTION_BANNER_SUCCESS,
  DELETE_PROMOTION_BANNER_FAIL,
  DELETE_PRODUCT_BANNER_FAIL,
  DELETE_PRODUCT_BANNER_SUCCESS,
  DELETE_PRODUCT_BANNER_BEGIN,
  UPDATE_LEADERBOARD_BANNER_FAIL,
  UPDATE_LEADERBOARD_BANNER_SUCCESS,
  UPDATE_LEADERBOARD_BANNER_BEGIN,
  GET_CATEGORY_BEGIN,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  UPDATE_PROMOTION_BANNER_BEGIN,
  UPDATE_PRAMOTION_BANNER_SUCCESS,
  UPDATE_PRAMOTION_BANNER_FAIL,
  UPDATE_PRODUCT_BANNER_SUCCESS,
  UPDATE_PRODUCT_BANNER_BEGIN,
  UPDATE_PRODUCT_BANNER_FAIL,
  CREATE_LEADERBOARD_BANNER_BEGIN,
  CREATE_LEADERBANNER_BANNER_SUCCESS,
  CREATE_LEADERBOARD_BANNER_FAIL,
  CREATE_PROMOTION_BANNER_BEGIN,
  CREATE_PROMOTION_BANNER_FAIL,
  CREATE_PROMOTION_BANNER_SUCCESS,
  CREATE_PRODUCT_BANNER_BEGIN,
  CREATE_PRODUCT_BANNER_SUCCESS,
  CREATE_PRODUCT_BANNER_FAIL,
  CREATE_PRODUCTTILES_BANNER_BEGIN,
  CREATE_PRODUCTTILES_BANNER_FAIL,
  CREATE_PRODUCTTILES_BANNER_SUCCESS,
  DELETE_PRODUCTTILES_BANNER_FAIL,
  DELETE_PRODUCTTILES_BANNER_SUCCESS,
  DELETE_PRODUCTTILES_BANNER_BEGIN,
  UPDATE_PRODUCTTILES_BANNER_FAIL,
  UPDATE_PRODUCTRILES_BANNER_SUCCESS,
  UPDATE_PRODUCTTILES_BANNER_BEGIN,
  GET_WEEK_BEGIN,
  GET_WEEK_SUCCESS,
  GET_WEEK_ERROR,
  GET_MULTIPLE_Mall_BEGIN,
  GET_MULTIPLE_MALL_SUCCESS,
  GET_MULTIPLE_Mall_ERROR,
  GET_MALL_CINEMA_BEGIN,
  GET_MALL_CINEMA_SUCCESS,
  GET_MALL_CINEMA_FAIL,
  GET_CINEMA_FAIL,
  GET_CINEMA_SUCCESS,
  GET_CINEMA_BEGIN,
  UPDATE_CINEMA_BEGIN,
  UPDATE_CINEMA_SUCCESS,
  UPDATE_CINEMA_FAIL,
  GET_CINEMA_CATEGORY_FAIL,
  GET_CINEMA_CATEGORY_SUCCESS,
  GET_CINEMA_CATEGORY_BEGIN,
  CREATE_LANDING_PAGE_LEADERBOARD_BEGIN,
  CREATE_LANDING_PAGE_LEADERBOARD_SUCCESS,
  UPDATE_LANDING_PAGE_TILE_FAIL,
  UPDATE_LANDING_PAGE_TILE_SUCCESS,
  UPDATE_LANDING_PAGE_TILE_BEGIN,
  DELETE_LANDING_PAGE_TILE_BEGIN,
  DELETE_LANDING_PAGE_TILE_SUCCESS,
  DELETE_LANDING_PAGE_TILE_FAIL,
  UPDATE_LANDING_PAGE_LEADERBOARD_FAIL,
  UPDATE_LANDING_PAGE_LEADERBOARD_SUCCESS,
  UPDATE_LANDING_PAGE_LEADERBOARD_BEGIN,
  DELETE_LANDING_PAGE_LEADERBOARD_FAIL,
  DELETE_LANDING_PAGE_LEADERBOARD_BEGIN,
  DELETE_LANDING_PAGE_LEADERBOARD_SUCCESS,
  DELETE_ANALYTICS_BUNDLE_FAIL,
  DELETE_ANALYTICS_BUNDLE_SUCCESS,
  DELETE_ANALYTICS_BUNDLE_BEGIN,
  UPDATE_ANALYTICS_BUNDLE_FAIL,
  UPDATE_ANALYTICS_BUNDLE_SUCCESS,
  UPDATE_ANALYTICS_BUNDLE_BEGIN,
  CREATE_ANALYTICS_BUNDLE_FAIL,
  CREATE__ANALYTICS_BUNDLE_SUCCESS,
  CREATE_ANALYTICS_BUNDLE_BEGIN,
  CREATE_LANDING_PAGE_LEADERBOARD_FAIL,
  CREATE_LANDING_PAGE_SQUARE_TILE_FAIL,
  CREATE_LANDING_PAGE_SQUARE_TILE_SUCCESS,
  CREATE_LANDING_PAGE_SQUARE_TILE_BEGIN,
  UPDATE_LANDING_PAGE_SQUARE_TILE_FAIL,
  UPDATE_LANDING_PAGE_SQUARE_TILE_SUCCESS,
  UPDATE_LANDING_PAGE_SQUARE_TILE_BEGIN,
  DELETE_LANDING_PAGE_SQUARE_TILE_FAIL,
  DELETE_LANDING_PAGE_SQUARE_TILE_SUCCESS,
  DELETE_LANDING_PAGE_SQUARE_TILE_BEGIN,
  GET_STORE_CART_BEGIN,
  GET_STORE_CART_SUCCESS,
  GET_STORE_CART_ERROR,
  GET_CATEGORY_EATERY_FAIL,
  GET_CATEGORY_EATERY_SUCCESS,
  GET_CATEGORY_EATERY_BEGIN,
} from "../Action";
const store_reducer = (state, action) => {
  // REGISTER STORE

  if (action.type === REGISTER_STORE_BEGIN) {
    return { ...state, register_store_loading: true };
  }

  if (action.type === REGISTER_STORE_SUCCESS) {
    return {
      ...state,
      register_store_loading: false,
      register_store_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === REGISTER_STORE_FAIL) {
    return { ...state, register_store_loading: false, mall_signup_error: true };
  }

  // GET STORE

  if (action.type === GET_STORE_BEGIN) {
    return { ...state, get_store_loading: true };
  }

  if (action.type === GET_STORE_SUCCESS) {
    // console.log('"br̥and-data-ruder', action.payload);
    return {
      ...state,
      get_store_loading: false,
      get_store_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_STORE_FAIL) {
    return { ...state, get_store_loading: false };
  }
  // GET CINEMA

  if (action.type === GET_CINEMA_BEGIN) {
    return { ...state, get_cinema_loading: true };
  }

  if (action.type === GET_CINEMA_SUCCESS) {
    // console.log('"br̥and-data-ruder', action.payload);
    return {
      ...state,
      get_cinema_loading: false,
      get_cinema_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_CINEMA_FAIL) {
    return { ...state, get_cinema_loading: false };
  }

   // GET STORE Cart

   if (action.type === GET_STORE_CART_BEGIN) {
    return { ...state, store_cart_data_loading: true };
  }

  if (action.type === GET_STORE_CART_SUCCESS) {
    return {
      ...state,
      store_cart_data_loading: false,
      store_cart_data: action.payload.data,
      store_cart_count: action.payload.total_count,
    };
  }

  if (action.type === GET_STORE_CART_ERROR) {
    return { ...state, store_cart_data_loading: false };
  }

  // GET RETAILER

  if (action.type === GET_RETAILER_BEGIN) {
    return { ...state, ratailer_data_loading: true };
  }

  if (action.type === GET_RETAILER_SUCCESS) {
    return {
      ...state,
      ratailer_data_loading: false,
      retailer_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_RETAILER_FAIL) {
    return { ...state, ratailer_data_loading: false };
  }

   // GET CINEMA MALL

   if (action.type === GET_MALL_CINEMA_BEGIN) {
    return { ...state, cinema_mall_data_loading: true };
  }

  if (action.type === GET_MALL_CINEMA_SUCCESS) {
    return {
      ...state,
      cinema_mall_data_loading: false,
      cinema_mall_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_MALL_CINEMA_FAIL) {
    return { ...state, cinema_mall_data_loading: false };
  }

  // GET Category

  if (action.type === GET_CATEGORY_BEGIN) {
    return { ...state, category_data_loading: true };
  }

  if (action.type === GET_CATEGORY_SUCCESS) {
    return {
      ...state,
      category_data_loading: false,
      category_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_CATEGORY_FAIL) {
    return { ...state, category_data_loading: false };
  }

   // GET Category Eatery

   if (action.type === GET_CATEGORY_EATERY_BEGIN) {
    return { ...state, category_eatery_data_loading: true };
  }

  if (action.type === GET_CATEGORY_EATERY_SUCCESS) {
    return {
      ...state,
      category_eatery_data_loading: false,
      category_eatery_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_CATEGORY_EATERY_FAIL) {
    return { ...state, category_eatery_data_loading: false };
  }

  // GET Cinema Category

  if (action.type === GET_CINEMA_CATEGORY_BEGIN) {
    return { ...state, cinema_category_data_loading: true };
  }

  if (action.type === GET_CINEMA_CATEGORY_SUCCESS) {
    return {
      ...state,
      cinema_category_data_loading: false,
      cinema_category_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_CINEMA_CATEGORY_FAIL) {
    return { ...state, cinema_category_data_loading: false };
  }

  // GET Week

  if (action.type === GET_WEEK_BEGIN) {
    return { ...state, week_data_loading: true };
  }

  if (action.type === GET_WEEK_SUCCESS) {
    return {
      ...state,
      week_data_loading: false,
      week_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_WEEK_ERROR) {
    return { ...state, week_data_loading: false };
  }

  // GET Multiple Mall

  if (action.type === GET_MULTIPLE_Mall_BEGIN) {
    return { ...state, multiple_week_data_loading: true };
  }

  if (action.type === GET_MULTIPLE_MALL_SUCCESS) {
    return {
      ...state,
      multiple_week_data_loading: false,
      multiple_week_data: action.payload.data,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === GET_MULTIPLE_Mall_ERROR) {
    return { ...state, multiple_week_data_loading: false };
  }

  // update Brand data

  if (action.type === UPDATE_BRAND_BEGIN) {
    return { ...state, category_data_loading: true };
  }

  if (action.type === UPDATE_BRAND_SUCCESS) {
    return {
      ...state,
      brand_update_loading: false,
      brand_update_data: action.payload,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === UPDATE_BRAND_FAIL) {
    return { ...state, brand_update_loading: false };
  }

  // Update Cinema

  if (action.type === UPDATE_CINEMA_BEGIN) {
    return { ...state, cinema_update_loading: true };
  }

  if (action.type === UPDATE_CINEMA_SUCCESS) {
    return {
      ...state,
      cinema_update_loading: false,
      cinema_update_data: action.payload,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === UPDATE_CINEMA_FAIL) {
    return { ...state, cinema_update_loading: false };
  }

  // delete Leaderboard data

  if (action.type === DELETE_LEADERBOARD_BEGIN) {
    return { ...state, delete_leaderboard_loading: true };
  }

  if (action.type === DELETE_LEADERBOARD_SUCCESS) {
    return {
      ...state,
      delete_leaderboard_loading: false,
      // delete_leaderboard_data: action.payload,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === DELETE_LEADERBOARD_FAIL) {
    return { ...state, delete_leaderboard_loading: false };
  }


    // Delete Lnadingpage Tile 

  if (action.type === DELETE_LANDING_PAGE_TILE_BEGIN) {
    return { ...state, delete_leaderboard_loading: true };
  }

  if (action.type === DELETE_LANDING_PAGE_TILE_SUCCESS) {
    return {
      ...state,
      delete_leaderboard_loading: false,
      // delete_leaderboard_data: action.payload,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === DELETE_LANDING_PAGE_TILE_FAIL) {
    return { ...state, delete_leaderboard_loading: false };
  }


  // Delete Lnadingpage Leaderboard
  if (action.type === DELETE_LANDING_PAGE_LEADERBOARD_BEGIN) {
    return { ...state, delete_leaderboard_loading: true };
  }

  if (action.type === DELETE_LANDING_PAGE_LEADERBOARD_SUCCESS) {
    return {
      ...state,
      delete_leaderboard_loading: false,
      // delete_leaderboard_data: action.payload,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === DELETE_LANDING_PAGE_LEADERBOARD_FAIL) {
    return { ...state, delete_leaderboard_loading: false };
  }

   // Delete Lnadingpage Square
   if (action.type === DELETE_LANDING_PAGE_SQUARE_TILE_BEGIN) {
    return { ...state, delete_leaderboard_loading: true };
  }

  if (action.type === DELETE_LANDING_PAGE_SQUARE_TILE_SUCCESS) {
    return {
      ...state,
      delete_leaderboard_loading: false,
      // delete_leaderboard_data: action.payload,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === DELETE_LANDING_PAGE_SQUARE_TILE_FAIL) {
    return { ...state, delete_leaderboard_loading: false };
  }

  // Delete Analytic Bundle

  // Delete Lnadingpage Leaderboard
  if (action.type === DELETE_ANALYTICS_BUNDLE_BEGIN) {
    return { ...state, delete_leaderboard_loading: true };
  }

  if (action.type === DELETE_ANALYTICS_BUNDLE_SUCCESS) {
    return {
      ...state,
      delete_leaderboard_loading: false,
      // delete_leaderboard_data: action.payload,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === DELETE_ANALYTICS_BUNDLE_FAIL) {
    return { ...state, delete_leaderboard_loading: false };
  }


  // delete Promotion Banner data

  if (action.type === DELETE_PROMOTION_BANNER_BEGIN) {
    return { ...state, delete_promotion_loading: true };
  }

  if (action.type === DELETE_PROMOTION_BANNER_SUCCESS) {
    return {
      ...state,
      delete_promotion_loading: false,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === DELETE_PROMOTION_BANNER_FAIL) {
    return { ...state, delete_promotion_loading: false };
  }

  // delete Product Banner data

  if (action.type === DELETE_PRODUCT_BANNER_BEGIN) {
    return { ...state, delete_product_loading: true };
  }

  if (action.type === DELETE_PRODUCT_BANNER_SUCCESS) {
    return {
      ...state,
      delete_product_loading: false,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === DELETE_PRODUCT_BANNER_FAIL) {
    return { ...state, delete_product_loading: false };
  }

  // Update Leaderboard Banner data

  if (action.type === UPDATE_LEADERBOARD_BANNER_BEGIN) {
    return { ...state, update_leaderboard_loading: true };
  }

  if (action.type === UPDATE_LEADERBOARD_BANNER_SUCCESS) {
    return {
      ...state,
      update_leaderboard_loading: false,
      leaderboard_update_data: action.payload,
    };
  }

  if (action.type === UPDATE_LEADERBOARD_BANNER_FAIL) {
    return { ...state, update_leaderboard_loading: false };
  }

  // Update Landingpage Tile data

  if (action.type === UPDATE_LANDING_PAGE_TILE_BEGIN) {
    return { ...state, cinemalandingpagetile_update_loading: true };
  }

  if (action.type === UPDATE_LANDING_PAGE_TILE_SUCCESS) {
    return {
      ...state,
      cinemalandingpagetile_update_loading: false,
      cinemalandingpagetile_update_data: action.payload,
    };
  }

  if (action.type === UPDATE_LANDING_PAGE_TILE_FAIL) {
    return { ...state, cinemalandingpagetile_update_loading: false };
  }

  // Update Landingpage Leaderboard data

  if (action.type === UPDATE_LANDING_PAGE_LEADERBOARD_BEGIN) {
    return { ...state, landingpage_leaderboard_data_loading: true };
  }

  if (action.type === UPDATE_LANDING_PAGE_LEADERBOARD_SUCCESS) {
    return {
      ...state,
      landingpage_leaderboard_data_loading: false,
      landingpage_leaderboard_data: action.payload,
    };
  }

  if (action.type === UPDATE_LANDING_PAGE_LEADERBOARD_FAIL) {
    return { ...state, landingpage_leaderboard_data_loading: false };
  }


    // Update Landingpage Square data

    if (action.type === UPDATE_LANDING_PAGE_SQUARE_TILE_BEGIN) {
      return { ...state, landingpage_square_data_loading: true };
    }
  
    if (action.type === UPDATE_LANDING_PAGE_SQUARE_TILE_SUCCESS) {
      return {
        ...state,
        landingpage_square_data_loading: false,
        landingpage_square_data: action.payload,
      };
    }
  
    if (action.type === UPDATE_LANDING_PAGE_SQUARE_TILE_FAIL) {
      return { ...state, landingpage_square_data_loading: false };
    }

   // Update Analytic Bundle data

   if (action.type === UPDATE_ANALYTICS_BUNDLE_BEGIN) {
    return { ...state, analytic_bundle_loading: true };
  }

  if (action.type === UPDATE_ANALYTICS_BUNDLE_SUCCESS) {
    return {
      ...state,
      analytic_bundle_loading: false,
      analytic_bundle_data: action.payload,
    };
  }

  if (action.type === UPDATE_ANALYTICS_BUNDLE_FAIL) {
    return { ...state, analytic_bundle_loading: false };
  }


  // Update Promotion Banner data

  if (action.type === UPDATE_PROMOTION_BANNER_BEGIN) {
    return { ...state, update_promotion_loading: true };
  }

  if (action.type === UPDATE_PRAMOTION_BANNER_SUCCESS) {
    return {
      ...state,
      update_promotion_loading: false,
      promotion_update_data: action.payload,
    };
  }

  if (action.type === UPDATE_PRAMOTION_BANNER_FAIL) {
    return { ...state, update_promotion_loading: false };
  }

  // Update Product Banner data

  if (action.type === UPDATE_PRODUCT_BANNER_BEGIN) {
    return { ...state, update_product_loading: true };
  }

  if (action.type === UPDATE_PRODUCT_BANNER_SUCCESS) {
    return {
      ...state,
      update_product_loading: false,
      product_update_data: action.payload,
    };
  }

  if (action.type === UPDATE_PRODUCT_BANNER_FAIL) {
    return { ...state, update_product_loading: false };
  }

  // Create Leaderboard Data

  if (action.type === CREATE_LEADERBOARD_BANNER_BEGIN) {
    return { ...state, create_leaderboard_loading: true };
  }

  if (action.type === CREATE_LEADERBANNER_BANNER_SUCCESS) {
    return {
      ...state,
      create_leaderboard_loading: false,
      create_leaderboard_data: action.payload,
    };
  }

  if (action.type === CREATE_LEADERBOARD_BANNER_FAIL) {
    return { ...state, create_leaderboard_loading: false };
  }

    // Create Landingpagetile Data

    if (action.type === CREATE_LANDING_PAGE_LEADERBOARD_BEGIN) {
      return { ...state, create_landing_page_tile_loading: true };
    }
  
    if (action.type === CREATE_LANDING_PAGE_LEADERBOARD_SUCCESS) {
      return {
        ...state,
        create_landing_page_tile_loading: false,
        create_landing_page_tile_data: action.payload,
      };
    }
  
    if (action.type === CREATE_LANDING_PAGE_LEADERBOARD_FAIL) {
      return { ...state, create_landing_page_tile_loading: false };
    }

     // Create Landingpage Leaderboard Data

     if (action.type === CREATE_LANDING_PAGE_LEADERBOARD_BEGIN) {
      return { ...state, create_landing_page_leaderboard_loading: true };
    }
  
    if (action.type === CREATE_LANDING_PAGE_LEADERBOARD_SUCCESS) {
      return {
        ...state,
        create_landing_page_leaderboard_loading: false,
        create_landing_page_leaderboard_data: action.payload,
      };
    }
  
    if (action.type === CREATE_LANDING_PAGE_LEADERBOARD_FAIL) {
      return { ...state, create_landing_page_leaderboard_loading: false };
    }

    // Landing page Square

    if (action.type === CREATE_LANDING_PAGE_SQUARE_TILE_BEGIN) {
      return { ...state, create_landing_page_square_tile_loading: true };
    }
  
    if (action.type === CREATE_LANDING_PAGE_SQUARE_TILE_SUCCESS) {
      return {
        ...state,
        create_landing_page_square_tile_loading: false,
        create_landing_page_square_tile_data: action.payload,
      };
    }
  
    if (action.type === CREATE_LANDING_PAGE_SQUARE_TILE_FAIL) {
      return { ...state, create_landing_page_square_tile_loading: false };
    }

      // Create Analytic Bundle Data

      if (action.type === CREATE_ANALYTICS_BUNDLE_BEGIN) {
        return { ...state, create_analytic_bundle_loading: true };
      }
    
      if (action.type === CREATE__ANALYTICS_BUNDLE_SUCCESS) {
        return {
          ...state,
          create_analytic_bundle_loading: false,
          create_analytic_bundle_data: action.payload,
        };
      }
    
      if (action.type === CREATE_ANALYTICS_BUNDLE_FAIL) {
        return { ...state, create_analytic_bundle_loading: false };
      }

  // Create Promotion Data

  if (action.type === CREATE_PROMOTION_BANNER_BEGIN) {
    return { ...state, create_promotion_loading: true };
  }

  if (action.type === CREATE_PROMOTION_BANNER_SUCCESS) {
    return {
      ...state,
      create_promotion_loading: false,
      create_promotion_data: action.payload,
    };
  }

  if (action.type === CREATE_PROMOTION_BANNER_FAIL) {
    return { ...state, create_promotion_loading: false };
  }

  // Create Promotion Data

  if (action.type === CREATE_PRODUCT_BANNER_BEGIN) {
    return { ...state, create_product_loading: true };
  }

  if (action.type === CREATE_PRODUCT_BANNER_SUCCESS) {
    return {
      ...state,
      create_product_loading: false,
      create_product_data: action.payload,
    };
  }

  if (action.type === CREATE_PRODUCTTILES_BANNER_BEGIN) {
    return { ...state, create_product_loading: false };
  }

  // Create ProductTiles Data

  if (action.type === CREATE_PRODUCT_BANNER_BEGIN) {
    return { ...state, create_producttiles_loading: true };
  }

  if (action.type === CREATE_PRODUCTTILES_BANNER_SUCCESS) {
    return {
      ...state,
      create_producttiles_loading: false,
      create_producttiles_data: action.payload,
    };
  }

  if (action.type === CREATE_PRODUCTTILES_BANNER_FAIL) {
    return { ...state, create_producttiles_loading: false };
  }

  // delete Product Banner data

  if (action.type === DELETE_PRODUCTTILES_BANNER_BEGIN) {
    return { ...state, delete_producttiles_loading: true };
  }

  if (action.type === DELETE_PRODUCTTILES_BANNER_SUCCESS) {
    return {
      ...state,
      delete_producttiles_loading: false,
      // contact_number: action.payload.data.contact_number,
    };
  }

  if (action.type === DELETE_PRODUCTTILES_BANNER_FAIL) {
    return { ...state, delete_producttiles_loading: false };
  }

  // Update ProductTiles Banner data

  if (action.type === UPDATE_PRODUCTTILES_BANNER_BEGIN) {
    return { ...state, update_producttiles_loading: true };
  }

  if (action.type === UPDATE_PRODUCTRILES_BANNER_SUCCESS) {
    return {
      ...state,
      update_producttiles_loading: false,
      update_producttiles_data: action.payload,
    };
  }

  if (action.type === UPDATE_PRODUCTTILES_BANNER_FAIL) {
    return { ...state, update_producttiles_loading: false };
  }
};

export default store_reducer;
