import { logOut } from "./modules/functions/user/logout.mjs";
import {
  logoutBtn,
  profileSpesificURL,
  hamburgerBtn,
} from "./modules/variables/variables.mjs";
import { fetchHeaderProfileInfo } from "./modules/functions/user/profileInfo.mjs";

import { toggleMenu } from "./modules/functions/hamburger.mjs";

logoutBtn.addEventListener("click", logOut);

fetchHeaderProfileInfo(profileSpesificURL);

hamburgerBtn.addEventListener("click", toggleMenu);
