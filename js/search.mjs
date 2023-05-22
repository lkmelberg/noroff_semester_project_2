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

fetchListings(getListingsURL);
searchForm.addEventListener("submit", fetchFiltered);

unregisteredLimitPage();

logoutBtn.addEventListener("click", logOut);
hamburgerBtn.addEventListener("click", toggleMenu);
