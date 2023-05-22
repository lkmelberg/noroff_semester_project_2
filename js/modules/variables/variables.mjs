// API
export const API_BASE_URL = "https://nf-api.onrender.com";

// get id
export const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const id = params.get("id");

// register endpoint
export const registerURL = `${API_BASE_URL}/api/v1/auction/auth/register`;

// login endpoint
export const signinURL = `${API_BASE_URL}/api/v1/auction/auth/login`;

// profile endpoints
export const profileURL = `${API_BASE_URL}/api/v1/auction/profiles/`;
export const profileSpesificURL = `${profileURL}${userName}`;
export const updateAvatarURL = `${API_BASE_URL}/api/v1/auction/profiles/${userName}/media`;
export const profileListingsURL = `${API_BASE_URL}/api/v1/auction/profiles/${userName}/listings?_seller=true&sort=created`;

// listing endpoints
export const createListingURL = `${API_BASE_URL}/api/v1/auction/listings`;
export const getListingURL = `${API_BASE_URL}/api/v1/auction/listings/${id}?_seller=true`;
export const getListingsURL = `${API_BASE_URL}/api/v1/auction/listings?_seller=true&sort=created&_active=true`;

// bid endpoints
export const getBidsUrl = `${API_BASE_URL}/api/v1/auction/listings/${id}?_seller=true&_bids=true`;
export const placeBidURL = `${API_BASE_URL}/api/v1/auction/listings/${id}/bids`;

// common
export const token = localStorage.getItem("accessToken");
export const userName = localStorage.getItem("userName");
export const displayMSG = document.querySelector(".displayMSG");
export const loader = document.querySelector(".loader");
export const listingTitle = document.querySelector(".listingTitle");
export const listingsCont = document.querySelector(".listingsCont");

// Register
export const regForm = document.querySelector(".regForm");
export const nameReg = document.querySelector("#nameReg");
export const emailReg = document.querySelector("#emailReg");
export const passReg = document.querySelector("#passReg");
export const avatarReg = document.querySelector("#avatarReg");

// Sign in
export const emailSign = document.querySelector("#emailSign");
export const passSign = document.querySelector("#passSign");
export const signForm = document.querySelector(".signForm");

// signout
export const logoutBtn = document.querySelector(".logout");

// Search
export const searchInput = document.querySelector(".searchInput");
export const searchForm = document.querySelector(".searchForm");

// Profile header
export const profileEmailHead = document.querySelector(".profileEmailHead");
export const headerCredits = document.querySelector(".headerCredits");
export const headerAvatar = document.querySelector(".headerAvatar");

// profile page
export const profileName = document.querySelector(".profileName");
export const profileCredits = document.querySelector(".credits");
export const profileAvatar = document.querySelector(".profileAvatar");

// avatar
export const updateAvatarForm = document.querySelector(".updateAvatarForm");

// listing
export const listingForm = document.querySelector(".listingForm");
export const dateInput = document.querySelector("#date");
export const titleInput = document.querySelector("#titleInput");
export const descriptionInput = document.querySelector("#descriptionInput");
export const mediaInput = document.querySelector("#mediaInput");
export const mediaInput3 = document.querySelector("#mediaInput3");
export const mediaInput2 = document.querySelector("#mediaInput2");
export const listingBR = document.querySelector(".listingBR");

// bid
export const bidItemCont = document.querySelector(".bidItemCont");
export const bidCont = document.querySelector(".bidCont");
export const bidsContHeader = document.querySelector(".bidsContHeader");
export const bidForm = document.querySelector(".bidForm");
export const placeBid = document.querySelector("#placeBid");

// header / nav
export const listingsNav = document.querySelector(".listingsNav");
export const profileNav = document.querySelector(".profileNav");
export const creditNav = document.querySelector(".creditNav");
export const navbarAvatar = document.querySelector(".navbar-avatar");
export const searchH1 = document.querySelector(".searchH1");
export const navbarNav = document.querySelector(".navbar-nav");
export const hamburgerBtn = document.querySelector("#hamburgerBtn");
