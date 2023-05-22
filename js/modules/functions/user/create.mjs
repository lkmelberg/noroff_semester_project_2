import {
  registerURL,
  displayMSG,
  regForm,
  nameReg,
  emailReg,
  passReg,
  avatarReg,
} from "../../variables/variables.mjs";

/**
 * Creates a unique user if inputs are valid and stores it in the noroff API.
 *  @param {Event} e - The event object triggered by the button click.
 *  @returns {Promise} A Promise that resolves with the JSON response from the server if the account was created successfully. Otherwise, it rejects with an error message.
 */

export function register(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  const userReg = {
    name: nameReg.value,
    email: emailReg.value,
    password: passReg.value,
    avatar: avatarReg.value,
  };

  // if there is a name, noroff adress and 8 character password - create account
  // registerUser function

  /**
   * Sends a POST request to the specified URL with the provided data.
   * @param {string} url - The URL to send the request to.
   * @param {object} data - The data to include in the request body.
   * @returns {Promise} A Promise that resolves with the JSON response from the server if the request was successful
   * Otherwise, it rejects with an error message.
   */
  async function registerUser(url, data) {
    try {
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        const registerOK = document.createElement("div");
        registerOK.classList.add("registerSuccess");
        registerOK.textContent = `Your account has been created, redirecting...`;
        displayMSG.appendChild(registerOK);

        regForm.reset();
        setTimeout(function () {
          window.location.href = `login.html`;
        }, 2500);
      } else {
        const registerNotOK = document.createElement("div");
        registerNotOK.classList.add("registerError");
        const registerNotOKtop = document.createElement("div");
        registerNotOKtop.classList.add("registerErrorTop");
        registerNotOKtop.textContent = "Your registration failed, try again.";
        const registerNotOKbottom = document.createElement("p");

        registerNotOKbottom.textContent =
          "Make sure your email address ends with @noroff.no and your password is at least 8 characters";

        displayMSG.appendChild(registerNotOK);
        registerNotOK.appendChild(registerNotOKtop);
        registerNotOK.appendChild(registerNotOKbottom);

        regForm.reset();
      }
      // if (responseAfter.ok === false && responseAfter.status === 404) {
      //   displayMSG.textContent = `<div class="registerSuccess">Your account has been deleted</div>`;
      //   regForm.reset();
      // }

      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  console.log(userReg);
  registerUser(registerURL, userReg);
}

// regForm.addEventListener("submit", register);
