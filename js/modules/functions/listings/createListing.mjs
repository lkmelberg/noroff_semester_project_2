import {
  createListingURL,
  token,
  displayMSG,
  listingForm,
  titleInput,
  descriptionInput,
  mediaInput,
  mediaInput2,
  mediaInput3,
  dateInput,
} from "../../variables/variables.mjs";

export function createListing(e) {
  // dont move from page
  e.preventDefault();

  // add input values

  const imgArr = [
    `${mediaInput.value}`,
    `${mediaInput2.value}`,
    `${mediaInput3.value}`,
  ];

  const filteredImgArr = imgArr.filter((str) => str !== "");

  const listingData = {
    title: titleInput.value,
    description: descriptionInput.value,
    media: filteredImgArr,
    endsAt: dateInput.value,
  };

  /**
   * Sends a POST request to the specified URL with the provided data.
   * @param {string} url - The URL to send the request to.
   * @param {object} data - The data to include in the request body.
   * @returns {Promise} A Promise that resolves with the JSON response from the server if the request was successful
   * Otherwise, it rejects with an error message.
   */
  async function create(url, data) {
    try {
      const listingData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, listingData);
      console.log(response);
      const json = await response.json();
      console.log(json);
      const createdDiv = document.createElement("div");
      createdDiv.classList.add("postSuccess");
      createdDiv.textContent = `Listing created!`;
      displayMSG.appendChild(createdDiv);
      // listingForm.reset();
      setTimeout(function () {
        displayMSG.textContent = "";
        location.reload();
      }, 2500);
      return json;
    } catch (error) {
      console.log(error);
      const notCreatedDiv = document.createElement("div");
      notCreatedDiv.classList.add("postError");
      notCreatedDiv.textContent = `Listing not created, Sorry about that. Try again or come back later :(`;
      displayMSG.appendChild(notCreatedDiv);

      // listingForm.reset();
      setTimeout(function () {
        displayMSG.textContent = "";
      }, 5000);
    }
  }
  console.log(listingData);
  // Send a POST request to create a new post.
  create(createListingURL, listingData);
}
