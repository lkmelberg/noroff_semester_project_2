import {
  getListingURL,
  getBidsUrl,
  bidForm,
} from "./modules/variables/variables.mjs";
import { fetchListing } from "./modules/functions/listings/getListing.mjs";
import { fetchBids } from "./modules/functions/bids/getBids.mjs";
import { createBid } from "./modules/functions/bids/addBid.mjs";

fetchListing(getListingURL);
fetchBids(getBidsUrl);

bidForm.addEventListener("submit", createBid);
