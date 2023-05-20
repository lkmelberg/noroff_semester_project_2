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
      const { id, title, description, seller, bids } = listing;
      const listingDate = listing.endsAt.substring(0, 10);
      const listingTime = listing.endsAt.substring(11, 16);
      const listingSeller = seller.name;
      const listingAvatar = seller.avatar;
      //   const listingTags = listing.tags;
      //   <p class="card-text">Tags:${listingTags}</p>;

      //       if (author.name === userName) {
      //         listingsCont.innerHTML += `    <a href="update.html?id=${id}"><div class="card mb-3">
      //                 <div class="card-body">
      //                 <div class="topCard">
      //                     <h4 class="card-title">${title}</h4>
      //                     <div class="updateEdit">
      // <i class="fa-solid fa-pen-to-square"></i>
      //                      </div>

      //                     </div>
      //                     <p class="card-text">${body}</p>
      //                     <p class="card-text"><small class="text-muted created">Created: ${listingDate} at ${listingTime} by <b>${listingSeller}</b> - listing: ${id}</small></p>

      //                 </div>
      //             </div>
      //             </a>`;
      //       }
      //       if (author.name !== userName) {
      listingsCont.innerHTML += `<div class="col">
                    <a href="listing.html?id=${id}">
                        <div class="card">
                            <div id="carouselExampleIndicators" class="carousel slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/ben-white-gEKMstKfZ6w-unsplash.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/bruno-martins-7A6OKPMkVEA-unsplash.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/leafTradeLogo.png" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
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
