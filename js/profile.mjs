import {
  profileSpesificURL,
  profileListingsURL,
} from "./modules/variables/variables.mjs";
import {
  fetchProfileInfo,
  fetchProfileAvatar,
  addProfileName,
} from "./modules/functions/user/profileInfo.mjs";
import { fetchListings } from "./modules/functions/listings/getListings.mjs";

addProfileName();

fetchProfileInfo(profileSpesificURL);
fetchProfileAvatar(profileSpesificURL);
fetchListings(profileListingsURL);
