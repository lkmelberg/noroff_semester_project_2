import {
  listingsCont,
  token,
  searchInput,
  getListingsURL,
  searchH1,
} from "../../variables/variables.mjs";
import { getListings } from "./getListings.mjs";

export function fetchFiltered(e) {
  // dont move from page
  e.preventDefault();
  listingsCont.textContent = "";
  searchH1.textContent = "Search results:";
  async function filtered(url) {
    try {
      const getData = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, getData);
      console.log(response);
      const json = await response.json();
      console.log(json);

      const searchedListings = json.filter((listingIn) => {
        if (
          listingIn.title?.toLowerCase().includes(searchInput.value) ||
          listingIn.description?.toLowerCase().includes(searchInput.value) ||
          listingIn.seller.name?.toLowerCase().includes(searchInput.value) ||
          listingIn.id === parseInt(searchInput.value)
        ) {
          return true;
        }
      });

      console.log(searchedListings);

      getListings(searchedListings, listingsCont);
    } catch (error) {
      console.log(error);
    }
  }

  filtered(getListingsURL);
}
