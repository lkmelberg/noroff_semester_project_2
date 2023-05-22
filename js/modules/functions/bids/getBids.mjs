import { bidCont, loader, token } from "../../variables/variables.mjs";

export function getBids(bid, bidCont) {
  for (let i = 0; i < bid.length; i++) {
    const { amount, bidderName } = bid[i];

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mb-4");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const bidsText = document.createElement("p");
    bidsText.textContent = `Bid: ${amount}`;
    const dFlexDiv = document.createElement("div");
    dFlexDiv.classList.add("d-flex", "justify-content-between");
    const authorDiv = document.createElement("div");
    authorDiv.classList.add("d-flex", "flex-row", "align-items-center");
    const authorName = document.createElement("p");
    authorName.classList.add("small", "mb-0", "ms-2");
    authorName.textContent = `Bidder: ${bidderName}`;

    bidCont.appendChild(cardDiv);
    cardDiv.appendChild(cardBody);
    cardBody.appendChild(bidsText);
    cardBody.appendChild(dFlexDiv);
    dFlexDiv.appendChild(authorDiv);
    authorDiv.appendChild(authorName);
  }

  loader.classList.add("hide");
}

export async function fetchBids(url) {
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
    const bidsJson = json.bids;
    console.log(bidsJson);
    getBids(bidsJson, bidCont);
  } catch (error) {
    console.log(error);
  }
}
