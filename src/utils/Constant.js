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
export const get_mall_movie_customer = BaseUrl + "get-mall-movie-customer";

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
