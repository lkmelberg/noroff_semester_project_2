// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { getListingsURL } from "./modules/variables/variables.mjs";
import { fetchListings } from "./modules/functions/listings/getListings.mjs";
fetchListings(getListingsURL);
