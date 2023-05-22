import {
  token,
  bidForm,
  displayMSG,
  placeBid,
  placeBidURL,
} from "../../variables/variables.mjs";

export function createBid(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  let valAsNumber = parseFloat(placeBid.value);
  const bidContent = {
    amount: valAsNumber,
  };

  async function bid(url, data) {
    try {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, postData);
      console.log(response);

      const responseAfter = await response;
      if (
        responseAfter.ok &&
        responseAfter.status >= 200 &&
        responseAfter.status <= 299
      ) {
        const bidOK = document.createElement("div");
        bidOK.classList.add("postSuccess");
        bidOK.textContent = `Bid successful! Please wait`;
        displayMSG.appendChild(bidOK);

        bidForm.reset();
        setTimeout(function () {
          displayMSG.textContent = "";
          location.reload();
        }, 3000);
      } else if (responseAfter.status === 403) {
        const bidNotOK = document.createElement("div");
        bidNotOK.classList.add("postError");
        const bidNotOKtop = document.createElement("div");
        bidNotOKtop.classList.add("postErrorTop");
        bidNotOKtop.textContent =
          "Bid not placed, you cannot bid on your own listing ";

        displayMSG.appendChild(bidNotOK);
        bidNotOK.appendChild(bidNotOKtop);

        bidForm.reset();
      } else if (!token) {
        const bidNotOK = document.createElement("div");
        bidNotOK.classList.add("postError");
        const bidNotOKtop = document.createElement("div");
        bidNotOKtop.classList.add("postErrorTop");
        bidNotOKtop.textContent = "You must be logged in to place a bid ";

        displayMSG.appendChild(bidNotOK);
        bidNotOK.appendChild(bidNotOKtop);

        bidForm.reset();
      } else {
        const bidNotOK = document.createElement("div");
        bidNotOK.classList.add("postError");
        const bidNotOKtop = document.createElement("div");
        bidNotOKtop.classList.add("postErrorTop");
        bidNotOKtop.textContent = `Bid not placed`;
        const bidNotOKbottom = document.createElement("p");

        bidNotOKbottom.textContent =
          "Your bid must be higher than the last bid, and you bust have enough credits";

        displayMSG.appendChild(bidNotOK);
        bidNotOK.appendChild(bidNotOKtop);
        bidNotOK.appendChild(bidNotOKbottom);

        bidForm.reset();
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(bidContent);
  bid(placeBidURL, bidContent);
}

// bidForm.addEventListener("submit", createBid);
