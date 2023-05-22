import {
  updateContainer,
  token,
  userName,
  loader,
  titleCreate,
  textCreate,
  currentID,
  addPostId,
  btns,
} from "../../variables/variables.mjs";

/**
 *  gets ons post and lets you modify it if you are the author
 *  different UI depending on oif you are allowed to edit or not
 *  Sends a GET request to the specified URL.
 *  @param {string} url - The URL to send the request to.
 *  @returns {Promise} A Promise that resolves with the JSON response from the server if the request was successful
 * Otherwise, it rejects with an error message.
 */

export async function fetchPostInfo(url) {
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
    if (response.status >= 400 && response.status <= 499) {
      updateContainer.innerHTML = `  <h1 class="addPostId">Post Not Found</h1>
    <p>Redirecting you back to the home page, please wait</p>`;
      setTimeout(function () {
        window.location.href = `home.html`;
      }, 5000);
    } else {
      const json = await response.json();
      console.log(json);

      const { id, title, body, author } = json;
      const date = json.created.substring(0, 10);
      const time = json.created.substring(11, 16);
      titleCreate.value = `${title}`;
      textCreate.value = `${body}`;
      currentID.innerHTML = `${title}`;
      addPostId.innerHTML += `${id}`;
      if (author.name !== userName) {
        btns.innerHTML = ``;
        updateContainer.innerHTML = ``;
        updateContainer.innerHTML = ` 
           <h1 class="addPostId">Post: ${id}</h1> <div class="card mb-3">
      
                <div class="card-body">
               
                    <h4 class="card-title">${title}</h4>
                     <div class="updateEdit"> </div>
                    <p class="card-text">${body}</p>
                    <p class="card-text"><small class="text-muted created">Created: ${date} at ${time} by <b>${author.name}</b></small></p>
                
                </div>
            </div>
        `;
      }
    }
    loader.innerHTML = "";
  } catch (error) {
    console.log(error);
  }
}

// fetchPostInfo(updateAndDeleteURL);
