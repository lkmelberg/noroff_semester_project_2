import {
  searchForm,
  getListingsURL,
  logoutBtn,
  hamburgerBtn,
} from "./modules/variables/variables.mjs";

import { fetchFiltered } from "./modules/functions/listings/searchListings.mjs";
import { unregisteredLimitPage } from "./modules/functions/user/notLoggedIn.mjs";
import { fetchListings } from "./modules/functions/listings/getListings.mjs";
import { logOut } from "./modules/functions/user/logout.mjs";
import { toggleMenu } from "./modules/functions/hamburger.mjs";

unregisteredLimitPage();

fetchListings(getListingsURL);

logoutBtn.addEventListener("click", logOut);
hamburgerBtn.addEventListener("click", toggleMenu);
searchForm.addEventListener("submit", fetchFiltered);
