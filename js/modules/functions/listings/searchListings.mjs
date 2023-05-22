import {
  listingsCont,
  loader,
  token,
  searchInput,
  getListingsURL,
} from "../../variables/variables.mjs";

export function getFiltered(listing, listingsCont) {
  for (let i = 0; i < listing.length; i++) {
    const { id, title, description, seller, media, _count } = listing[i];
    const listingDate = listing[i].endsAt.substring(0, 10);
    const listingTime = listing[i].endsAt.substring(11, 16);
    const listingSeller = seller.name;
    const listingAvatar = seller.avatar;
    // const listingImg = media[0];

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

    const h5Title = document.createElement("h5");
    h5Title.classList.add("card-title");
    h5Title.textContent = `Item: ${title}`;

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

    const listingBids = document.createElement("p");
    listingBids.textContent = `Bids: ${_count.bids}`;

    listingsCont.appendChild(listingCol);
    listingCol.appendChild(listingCard);
    listingCard.appendChild(imgCont);
    imgCont.appendChild(imgRow);
    imgRow.appendChild(imgCol);
    listingCard.appendChild(cardBody);
    cardBody.appendChild(h5Title);
    cardBody.appendChild(pDesc);
    cardBody.appendChild(pDeadline);
    cardBody.appendChild(pSeller);
    cardBody.appendChild(listingBids);

    pSeller.appendChild(sellerAvatar);

    if (token) {
      const bidLink = document.createElement("a");
      bidLink.classList.add("btn", "btn-primary");
      bidLink.href = `listing.html?id=${id}`;
      bidLink.textContent = "See bids / Add bid";
      cardBody.appendChild(bidLink);
    } else {
      const NotLoggedIn = document.createElement("h6");
      NotLoggedIn.classList.add("fw-bold");

      NotLoggedIn.textContent = "Please Log in to be able to bid on items";
      cardBody.appendChild(NotLoggedIn);
    }
  }

  loader.classList.add("hide");
}

export function fetchFiltered(e) {
  // dont move from page
  e.preventDefault();
  listingsCont.textContent = "";
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

      getFiltered(searchedListings, listingsCont);
    } catch (error) {
      console.log(error);
    }
  }

  filtered(getListingsURL);
}
