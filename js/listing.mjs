import { getListingURL, getBidsUrl } from "./modules/variables/variables.mjs";
import { fetchListing } from "./modules/functions/listings/getListing.mjs";
import { fetchBids } from "./modules/functions/bids/getBids.mjs";
fetchListing(getListingURL);
fetchBids(getBidsUrl);
