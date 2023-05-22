import { searchForm } from "./modules/variables/variables.mjs";

import { fetchFiltered } from "./modules/functions/listings/searchListings.mjs";

searchForm.addEventListener("submit", fetchFiltered);
