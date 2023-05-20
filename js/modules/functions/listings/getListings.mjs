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

    listingsCont.innerHTML = "";

    //   all listing
    json.forEach(function (listing) {
      const { id, title, description, seller, bids, media } = listing;
      const listingDate = listing.endsAt.substring(0, 10);
      const listingTime = listing.endsAt.substring(11, 16);
      const listingSeller = seller.name;
      const listingAvatar = seller.avatar;
      const listingImg = media[0];

      listingsCont.innerHTML += `<div class="col">
                    <a href="listing.html?id=${id}">
                        <div class="card ">
                     
                      <img src="${listingImg}" class="img-thumbnail" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Item: ${title}</h5>
                                <p class="card-text">Description: ${description}</p>
                                <p>Deadline: ${listingDate} at ${listingTime}</p>
                                <p>Asking Price:</p>
                                <p>Seller: ${listingSeller} <img class="listingAvatar" src="${listingAvatar}" alt=""></p> 
                                <a href="listing.html" class="btn btn-primary">see bids / add bid</a>
                            </div>
                        </div>
                    </a>
                </div>`;
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
