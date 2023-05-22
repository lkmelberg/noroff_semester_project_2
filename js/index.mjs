// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { getListingsURL, listingForm } from "./modules/variables/variables.mjs";
import { fetchListings } from "./modules/functions/listings/getListings.mjs";
import { createListing } from "./modules/functions/listings/createListing.mjs";
fetchListings(getListingsURL);
listingForm.addEventListener("submit", createListing);
