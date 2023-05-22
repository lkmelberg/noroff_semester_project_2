// API
export const API_BASE_URL = "https://nf-api.onrender.com";

// register endpoint
export const registerURL = `${API_BASE_URL}/api/v1/auction/auth/register`;

// login endpoint
export const signinURL = `${API_BASE_URL}/api/v1/auction/auth/login`;
// authenticate endpoint

export const profileURL = `${API_BASE_URL}/api/v1/auction/profiles/`;

// create and get
export const createAndGetURL = `${API_BASE_URL}/api/v1/social/posts?_author=true`;

// edit and delete

// common
export const token = localStorage.getItem("accessToken");
export const userName = localStorage.getItem("userName");
export const displayMSG = document.querySelector(".displayMSG");

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

// get posts
export const updateContainer = document.querySelector(".updateContainer");
export const updateForm = document.querySelector(".updateForm");
export const postForm = document.querySelector(".postForm");
export const deleteBtn = document.querySelector(".deleteBtn");
export const updateBtn = document.querySelector(".updateBtn");
export const titleCreate = document.querySelector("#title");
export const textCreate = document.querySelector(".textCreate");
export const btns = document.querySelector(".btns");
export const pageh1 = document.querySelector(".pageh1");
export const btnAllPosts = document.querySelector(".btnAllPosts");

// create posts
export const postBtn = document.querySelector(".postBtn");
export const addContent = document.querySelector(".addContent");

// update and edit - post spesific
export const currentID = document.querySelector(".currentID");
export const addPostId = document.querySelector(".addPostId");

// Search
export const postsContainer = document.querySelector(".postsContainer");
export const loader = document.querySelector(".loader");
export const searchInput = document.querySelector(".searchInput");
export const searchForm = document.querySelector(".searchForm");

// filter
export const btnMyPosts = document.querySelector(".btnMyPosts");
export const myPost = document.querySelector(".myPost");

// Profile

export const profileName = document.querySelector(".profileName");
export const profileEmailHead = document.querySelector(".profileEmailHead");
export const profileCredits = document.querySelector(".credits");
export const headerCredits = document.querySelector(".headerCredits");
export const profileAvatar = document.querySelector(".profileAvatar");
export const headerAvatar = document.querySelector(".headerAvatar");
export const profileSpesificURL = `${profileURL}${userName}`;
export const updateAvatarURL = `${API_BASE_URL}/api/v1/auction/profiles/${userName}/media`;
export const updateAvatarForm = document.querySelector(".updateAvatarForm");
export const getListingsURL = `${API_BASE_URL}/api/v1/auction/listings?_seller=true&sort=created&_active=true`;
export const createListingURL = `${API_BASE_URL}/api/v1/auction/listings`;
export const listingsCont = document.querySelector(".listingsCont");

export const titleInput = document.querySelector("#titleInput");
export const descriptionInput = document.querySelector("#descriptionInput");
export const mediaInput = document.querySelector("#mediaInput");
export const mediaInput3 = document.querySelector("#mediaInput3");
export const mediaInput2 = document.querySelector("#mediaInput2");

export const dateInput = document.querySelector("#date");

export const listingForm = document.querySelector(".listingForm");

export const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const id = params.get("id");
export const listingTitle = document.querySelector(".listingTitle");
export const getListingURL = `${API_BASE_URL}/api/v1/auction/listings/${id}?_seller=true`;
export const bidItemCont = document.querySelector(".bidItemCont");
export const listingBR = document.querySelector(".listingBR");
