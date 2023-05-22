import {
  logoutBtn,
  profileSpesificURL,
  hamburgerBtn,
} from "./modules/variables/variables.mjs";
import { fetchHeaderProfileInfo } from "./modules/functions/user/profileInfo.mjs";
import { unregisteredRedirect } from "./modules/functions/user/notLoggedIn.mjs";
import { toggleMenu } from "./modules/functions/hamburger.mjs";
import { logOut } from "./modules/functions/user/logout.mjs";

unregisteredRedirect();
fetchHeaderProfileInfo(profileSpesificURL);

hamburgerBtn.addEventListener("click", toggleMenu);
logoutBtn.addEventListener("click", logOut);
