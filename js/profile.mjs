import { profileSpesificURL } from "./modules/variables/variables.mjs";
import {
  fetchProfileInfo,
  fetchProfileAvatar,
} from "./modules/functions/user/profileInfo.mjs";

fetchProfileInfo(profileSpesificURL);
fetchProfileAvatar(profileSpesificURL);
