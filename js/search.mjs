import {
  searchForm,
  getListingsURL,
  logoutBtn,
} from "./modules/variables/variables.mjs";

import { fetchFiltered } from "./modules/functions/listings/searchListings.mjs";
import { unregisteredLimitPage } from "./modules/functions/user/notLoggedIn.mjs";
import { fetchListings } from "./modules/functions/listings/getListings.mjs";
import { logOut } from "./modules/functions/user/logout.mjs";

fetchListings(getListingsURL);
searchForm.addEventListener("submit", fetchFiltered);

unregisteredLimitPage();

logoutBtn.addEventListener("click", logOut);
