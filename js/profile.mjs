import { profileSpesificURL } from "./modules/variables/variables.mjs";
import {
  fetchProfileInfo,
  fetchProfileAvatar,
} from "./modules/functions/user/profileInfo.mjs";
import { addProfileName } from "./modules/functions/user/profileInfo.mjs";
addProfileName();
fetchProfileInfo(profileSpesificURL);
fetchProfileAvatar(profileSpesificURL);
