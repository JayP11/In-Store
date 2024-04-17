const BaseUrl = "https://getmynfc.com/inapp/api/v1/";

export const ACCEPT_HEADER = "application/x.inapp.v1+json";

// mall part
export const register = BaseUrl + "register";
export const register_mall = BaseUrl + "register-mall";
export const login = BaseUrl + "login";
export const get_mall = BaseUrl + "get-mall";
export const get_brand = BaseUrl + "get-brand";
export const update_mall = BaseUrl + "update-mall";
// export const get_store_mall_wise = BaseUrl + "get-store-mall-wise";
export const get_store_mall_wise = BaseUrl + "mall-get-store";
export const get_mall_auth_wise = BaseUrl + "get-mall-auth-wise";
export const mall_update_store = BaseUrl + "mall-update-store";
export const get_eatery_mall_wise = BaseUrl + "mall-get-eatery";
export const mall_create_eatery = BaseUrl + "mall-create-eatery";
export const mall_create_store = BaseUrl + "mall-create-store";
export const mall_update_eatery = BaseUrl + "mall-update-eatery";
export const mall_delete_eatery = BaseUrl + "mall-delete-eatery";
export const mall_delete_event = BaseUrl + "mall-delete-event";
export const new_analytic_archive = BaseUrl + "new-analytic-archive";

// customer part

export const customer_register = BaseUrl + "customer-register";
export const update_customer = BaseUrl + "update-customer";
export const get_customer = BaseUrl + "get-user-loginwise";
// export const get_wishlist = BaseUrl + "get-wishlist";
export const get_wishlist = BaseUrl + "get-wishlist-mallwise";
// export const get_region = BaseUrl + "get-region";

export const get_mall_customer = BaseUrl + "get-malls-instore-customer?";
export const get_mall_customer_leaderboard =
  BaseUrl + "get-mall-leaderboard-customer";
export const get_mall_customer_promotional =
  BaseUrl + "get-mall-promotion-customer?";
export const get_mall_customer_Brand = BaseUrl + "get-mall-store-customer?";
export const get_mall_customer_eateries =
  BaseUrl + "get-mall-eateries-customer?";
export const get_mall_customer_event = BaseUrl + "get-mall-event-customer?";
// store part

export const register_store = BaseUrl + "register-store";
export const get_store = BaseUrl + "get-store";
export const mall_delete_store = BaseUrl + "mall-delete-store";

// update brand
export const update_store = BaseUrl + "update-store";

// product part

export const get_product = BaseUrl + "get-product";
export const create_product = BaseUrl + "create-product";
export const update_product = BaseUrl + "update-product";

// mall event part

export const get_mall_event = BaseUrl + "get-mall-event?";
export const mall_create_event = BaseUrl + "mall-create-event";
export const mall_update_event = BaseUrl + "mall-update-event";

// leaderboared part

export const get_leaderboard = BaseUrl + "get-leaderboard?";
export const create_leaderboard = BaseUrl + "create-leaderboard";
export const update_leaderboard = BaseUrl + "update-leaderboard";

// promotion part

export const get_promotion = BaseUrl + "get-promotions?";
export const create_promotion = BaseUrl + "create-promotion";
export const update_promotion = BaseUrl + "update-promotion";

// productbanner part

export const get_productbanner = BaseUrl + "get-productbanner?";
export const create_productbanner = BaseUrl + "create-productbanner";
export const update_productbanner = BaseUrl + "update-productbanner";

// Mall Facility

export const get_facility = BaseUrl + "get-facility";
export const update_facility = BaseUrl + "update-facility";
export const delete_facility = BaseUrl + "delete-facility";

// Brand Retailer Registration
export const store_register = BaseUrl + "store-register";

// get retailer brand side

export const get_retailer = BaseUrl + "get-retailer";

// Delete Leaderboard Banner
export const delete_leaderboard = BaseUrl + "delete-leaderboard";
export const delete_productbanner = BaseUrl + "delete-productbanner";
export const delete_promotion = BaseUrl + "delete-promotion";

// ProductTiles get api
export const get_producttilesbanner = BaseUrl + "get-producttilesbanner?";

// ProductTiles create api
export const create_productbannertiles = BaseUrl + "create-productbannertiles";

// ProductTiles update api
export const update_productbannertiles = BaseUrl + "update-productbannertiles";

// ProductTiles create api
export const delete_productbannertiles = BaseUrl + "delete-productbannertiles";

// Get Category
export const get_category = BaseUrl + "get-category";

// Get Week
export const get_week = BaseUrl + "get-week";

// Get Region
export const get_region = BaseUrl + "get-region";
export const get_region_mall = BaseUrl + "get-region-mall";

// Get Mall
export const get_store_mall = BaseUrl + "get-store-mall";

// cart
export const add_store_cart = BaseUrl + "add-store-cart";
export const get_store_cart = BaseUrl + "get-store-cart";
export const remove_store_cart = BaseUrl + "store-cart-remove-item";
export const store_checkout = BaseUrl + "store-checkout";

// Get Mall Master
export const get_mall_master = BaseUrl + "get-mall-master";

// Get retailer Brand

export const get_retailer_brand = BaseUrl + "get-retailer-brand";

// mall master
// export const get_mall_master = BaseUrl + "get-mall-master";

// movie
export const get_age_restriction = BaseUrl + "get-age-restriction";
export const get_genre = BaseUrl + "get-genre";
export const create_movie = BaseUrl + "create-movie";
export const get_movie_list = BaseUrl + "get-movie-authwise";
export const delete_movie = BaseUrl + "delete-movie";
export const update_movie = BaseUrl + "update-movie";
export const get_mall_cinema_customer = BaseUrl + "get-mall-cinema-customer";

// product tils
export const product_cus_tile = BaseUrl + "get-product-customer-tile";
export const add_wishlist = BaseUrl + "add-wishlist";
export const remove_wishlist = BaseUrl + "remove-wishlist";
export const get_product_customer = BaseUrl + "get-product-customer";
export const add_rating = BaseUrl + "add-rating";

// upload temp
export const dowmtemp = BaseUrl + "sample-export-for-mall";
export const uploadfile = BaseUrl + "import-export-for-mall";
export const dowmtempretailer = BaseUrl + "sample-export-for-retailer";
export const uploadfileretailer = BaseUrl + "import-export-for-retailer";

// customer facility
export const get_mall_facelity_customer =
  BaseUrl + "get-mall-facelity-customer?";

// eatery directory
export const mall_eatery_import = BaseUrl + "mall-eatery-import";
export const eatery_sample_export = BaseUrl + "eatery-sample-export";

// eatery directory
export const movie_sample_export = BaseUrl + "movie-sample-export";
export const movie_import = BaseUrl + "movie-import";

// home landing page
export const get_home = BaseUrl + "get-home";

// mall home landing page
export const get_mall_landing = BaseUrl + "get-mall-landing";

// retailer home landing page
export const get_brand_landing = BaseUrl + "get-brand-landing";

// about page
export const get_about = BaseUrl + "get-about";

// customer home page
export const get_customer_landing = BaseUrl + "get-customer-landing";
export const start_payment = BaseUrl + "start-payment";

// Filter Api

export const product_banner_tiles_customer =
  BaseUrl + "product-banner-tiles-customer";


export const get_mall_upcoming_event =
  BaseUrl + "get-mall-upcoming-event";


export const get_mall_past_event =
  BaseUrl + "get-mall-past-event";

export const get_faq =
  BaseUrl + "get-faq";

  export const get_facility_master =BaseUrl + "get-facility-master";
  export const create_facility =BaseUrl + "create-facility";
  export const get_mall_analytic =BaseUrl + "get-mall-analytic";
  export const get_ratecard_child =BaseUrl + "get-ratecard-child";
  export const add_mall_cart =BaseUrl + "add-mall-cart";
  export const get_mall_cart =BaseUrl + "get-mall-cart";
  export const mall_cart_remove_item =BaseUrl + "mall-cart-remove-item";
  export const start_mall_payment =BaseUrl + "start-mall-payment";


  // Cinema mall side api

  export const get_cinema_manual =BaseUrl + "get-cinema-manual";
  export const update_cinema_manual =BaseUrl + "update-cinema-manual";
  export const create_cinema_manual =BaseUrl + "create-cinema-manual";

  export const get_cinema_retailer =BaseUrl + "get-cinema-retailer";
  export const cinema_register =BaseUrl + "cinema-register";

  // get multiple mall
export const get_multiple_mall = BaseUrl + "get-multiple-mall";


  export const get_cinema = BaseUrl + "get-cinema"
  export const update_cinema = BaseUrl + "update-cinema"
  export const get_ratecard = BaseUrl + "get-ratecard"
  export const get_cinema_category = BaseUrl + "get-cinema-category"
  export const get_landingpagetile = BaseUrl + "get-landingpagetile?"
  export const create_landingpagetile = BaseUrl + "create-landingpagetile"
  export const update_landingpagetile = BaseUrl + "update-landingpagetile"
  export const delete_landingpagetile = BaseUrl + "delete-landingpagetile"
  export const get_landingpage_leaderboard = BaseUrl + "get-landingpage-leaderboard?"
  export const create_landingpage_leaderboard = BaseUrl + "create-landingpage-leaderboard?"
  export const update_landingpage_leaderboard = BaseUrl + "update-landingpage-leaderboard?"
  export const delete_landingpage_leaderboard = BaseUrl + "delete-landingpage-leaderboard?"
  export const get_analytic_bundle = BaseUrl + "get-analytic-bundle?"

  export const create_analytic_bundle = BaseUrl + "create-analytic-bundle"
  export const update_analytic_bundle = BaseUrl + "update-analytic-bundle"
  export const delete_analytic_bundle = BaseUrl + "delete-analytic-bundle"


  // Cinema mall side inport / export

  export const sample_export_cinema = BaseUrl + "sample-export-cinema"
  export const import_cinema = BaseUrl + "import-cinema"


  export const get_landingpagetile_without_auth = BaseUrl + "get-landingpagetile-without-auth"
  export const get_landingpage_squaretile_without_auth = BaseUrl + "get-landingpage-squaretile-without-auth"
  export const get_landingpage_leaderboard_without_auth = BaseUrl + "get-landingpage-leaderboard-without-auth"

  // Square Tile
  export const get_landingpage_squaretile = BaseUrl + "get-landingpage-squaretile?"
  export const create_landingpage_squaretile = BaseUrl + "create-landingpage-squaretile?"
  export const update_landingpage_squaretile = BaseUrl + "update-landingpage-squaretile?"
  export const delete_landingpage_squaretile = BaseUrl + "delete-landingpage-squaretile?"


  
  
  // Cinema Home Page
  export const get_cinema_landing = BaseUrl + "get-cinema-landing"

  export const update_notification = BaseUrl + "update-notification";
export const location_customer = BaseUrl + "location-customer";
export const get_notification_url = BaseUrl + "get-notification";
export const rate_card_pdf_url = BaseUrl + "rate-card-pdf/";
export const get_location_popup = BaseUrl + "get-location-popup";
export const get_welcome_page = BaseUrl + "get-welcome-page";
export const get_delete_popup = BaseUrl + "get-delete-popup";
export const get_brand_multiple = BaseUrl + "get-brand-multiple";
export const get_privacy_policy = BaseUrl + "get-privacy-policy";

// create mall analytics

export const mall_create_analitic_bundle = BaseUrl + "mall-create-analitic-bundle";
export const retailer_brand_multiple = BaseUrl + "retailer-brand-multiple";

