import {
  displayMSG,
  token,
  listingTitle,
  bidItemCont,
  loader,
  listingBR,
  bidsContHeader,
} from "../../variables/variables.mjs";

/**
 *  gets ons post and lets you modify it if you are the author
 *  different UI depending on oif you are allowed to edit or not
 *  Sends a GET request to the specified URL.
 *  @param {string} url - The URL to send the request to.
 *  @returns {Promise} A Promise that resolves with the JSON response from the server if the request was successful
 * Otherwise, it rejects with an error message.
 */
export function getListing(listing, bidItemCont) {
  loader.classList.add("hide");
  const { id, title, description, seller, media, _count } = listing;
  const listingDate = listing.endsAt.substring(0, 10);
  const listingTime = listing.endsAt.substring(11, 16);
  const listingSeller = seller.name;
  const listingAvatar = seller.avatar;

  listingBR.textContent = title;
  listingTitle.textContent = title;
  bidsContHeader.textContent = `Bids: ${_count.bids}`;

  const listingCol = document.createElement("div");
  listingCol.classList.add("col");

  const listingCard = document.createElement("div");
  listingCard.classList.add("card");

  const imgCont = document.createElement("div");
  imgCont.classList.add("card");

  const imgRow = document.createElement("div");
  imgRow.classList.add("row");

  const imgCol = document.createElement("div");
  imgCol.classList.add("cardGallery");

  if (media.length === 0) {
    const noImage = document.createElement("p");
    noImage.textContent = `No Image Available`;
    imgCol.appendChild(noImage);
  } else {
    media.forEach((media) => {
      const img = document.createElement("img");
      img.classList.add("shadow-1-strong", "rounded");
      img.setAttribute("alt", `${title} listing image`);
      img.src = media;
      imgCol.appendChild(img);
    });
  }
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const pDesc = document.createElement("p");
  pDesc.classList.add("card-text");
  pDesc.textContent = `Description: ${description}`;

  const pDeadline = document.createElement("p");
  pDeadline.textContent = `Deadline: ${listingDate} at ${listingTime}`;

  const pSeller = document.createElement("p");
  pSeller.textContent = `Seller: ${listingSeller} `;

  const sellerAvatar = document.createElement("img");
  sellerAvatar.classList.add("listingAvatar");
  sellerAvatar.setAttribute("alt", `${listingSeller}'s avatar`);
  sellerAvatar.src = listingAvatar;

  bidItemCont.appendChild(listingCol);
  listingCol.appendChild(listingCard);
  listingCard.appendChild(imgCont);
  imgCont.appendChild(imgRow);
  imgRow.appendChild(imgCol);
  listingCard.appendChild(cardBody);

  cardBody.appendChild(pDesc);
  cardBody.appendChild(pDeadline);
  cardBody.appendChild(pSeller);
  pSeller.appendChild(sellerAvatar);
}

export async function fetchListing(url) {
  try {
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (Response.status >= 400 && Response.status <= 499) {
      const h1listingNotFound = document.createElement("h1");
      h1listingNotFound.textContent = `Listing Not Found`;
      const plistingNotFound = document.createElement("p");
      plistingNotFound.textContent = `Redirecting you back to all listings, please wait`;
      displayMSG.appendChild(h1listingNotFound);
      displayMSG.appendChild(plistingNotFound);
      setTimeout(function () {
        window.location.href = `index.html`;
      }, 5000);
    } else {
      const response = await fetch(url, getData);
      console.log(response);
      const json = await response.json();
      console.log(json);

      getListing(json, bidItemCont);
    }
  } catch (error) {
    console.log(error);
  }
}

// fetchListing(getListingURL);
