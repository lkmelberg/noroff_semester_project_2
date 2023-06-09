// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./bootstrap/dist/css/bootstrap.min.css";
// import "node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { getListingsURL, listingForm } from "./modules/variables/variables.mjs";
import { fetchListings } from "./modules/functions/listings/getListings.mjs";
import { createListing } from "./modules/functions/listings/createListing.mjs";
import { addProfileName } from "./modules/functions/user/profileInfo.mjs";
addProfileName();

fetchListings(getListingsURL);
listingForm.addEventListener("submit", createListing);
