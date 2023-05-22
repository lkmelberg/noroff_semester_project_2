import {
  profileSpesificURL,
  profileListingsURL,
} from "./modules/variables/variables.mjs";
import {
  fetchProfileInfo,
  fetchProfileAvatar,
} from "./modules/functions/user/profileInfo.mjs";
import { addProfileName } from "./modules/functions/user/profileInfo.mjs";
addProfileName();
fetchProfileInfo(profileSpesificURL);
fetchProfileAvatar(profileSpesificURL);

import { fetchListings } from "./modules/functions/listings/getListings.mjs";

fetchListings(profileListingsURL);
import { unregisteredRedirect } from "./modules/functions/user/notLoggedIn.mjs";
unregisteredRedirect();
