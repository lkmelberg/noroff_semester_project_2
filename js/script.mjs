import { logOut } from "./modules/functions/user/logout.mjs";
import {
  logoutBtn,
  profileSpesificURL,
} from "./modules/variables/variables.mjs";
import { addProfileName } from "./modules/functions/user/profileInfo.mjs";
import { fetchHeaderProfileInfo } from "./modules/functions/user/profileInfo.mjs";

logoutBtn.addEventListener("click", logOut);

addProfileName();
fetchHeaderProfileInfo(profileSpesificURL);
