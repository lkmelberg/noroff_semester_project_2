import {
  listingsCont,
  getListingsURL,
  loader,
  token,
} from "../../variables/variables.mjs";

export async function fetchListings(url) {
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

    listingsCont.textContent = "";

    //   all listings
    json.forEach(function (listing) {
      const { id, title, description, seller, bids, media } = listing;
      const listingDate = listing.endsAt.substring(0, 10);
      const listingTime = listing.endsAt.substring(11, 16);
      const listingSeller = seller.name;
      const listingAvatar = seller.avatar;
      const listingImg = media[0];

      const listingCol = document.createElement("div");
      listingCol.classList.add("col");

      const listingCard = document.createElement("div");
      listingCard.classList.add("card");

      const imgCont = document.createElement("div");
      imgCont.classList.add("card");

      const listingImgs = document.createElement("img");
      listingImgs.classList.add("img-thumbnail");
      listingImgs.setAttribute("alt", `${title} listing image`);
      listingImgs.src = listingImg;

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
      pSeller.textContent = `Seller: ${listingSeller}`;

      const sellerAvatar = document.createElement("img");
      sellerAvatar.classList.add("listingAvatar");
      sellerAvatar.setAttribute("alt", `${listingSeller}'s avatar`);
      sellerAvatar.src = listingAvatar;

      const bidLink = document.createElement("a");
      bidLink.classList.add("btn", "btn-primary");
      bidLink.href = `listing.html?id=${id}`;
      bidLink.textContent = "See bids / Add bid";

      listingsCont.appendChild(listingCol);
      listingCol.appendChild(listingCard);
      listingCard.appendChild(listingImgs);
      listingCard.appendChild(cardBody);
      cardBody.appendChild(h5Title);
      cardBody.appendChild(pDesc);
      cardBody.appendChild(pDeadline);
      cardBody.appendChild(pSeller);
      cardBody.appendChild(bidLink);
      pSeller.appendChild(sellerAvatar);
    });

    loader.classList.add("hide");
  } catch (error) {
    console.log(error);
  }
}
export function getAll(e) {
  e.preventDefault();
  try {
    fetchListings(getListingsURL);
  } catch (error) {
    console.log(error);
  }
}

//     <script>
//         const images = [
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg',
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg',
// 'https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg'
//         ];

//         const container = document.getElementById('image-container');
//         images.forEach(image => {
//             const img = document.createElement('img');
//             img.src = image;
//             container.appendChild(img);
//         })
//     </script>
