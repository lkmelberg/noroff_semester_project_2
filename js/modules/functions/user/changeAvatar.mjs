import {
  token,
  avatarReg,
  updateAvatarURL,
  updateAvatarForm,
  displayMSG,
} from "../../variables/variables.mjs";

export function updateAvatar(e) {
  // dont move from page
  e.preventDefault();

  // add input values
  const updateContent = {
    avatar: avatarReg.value,
  };

  async function update(url, data) {
    try {
      const postData = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, postData);
      console.log(response);
      const json = await response.json();
      console.log(json);
      const updatedAvatar = document.createElement("div");
      updatedAvatar.classList.add("postSuccess");
      updatedAvatar.textContent = `Avatar updated! Please wait`;
      displayMSG.appendChild(updatedAvatar);
      updateAvatarForm.reset();
      setTimeout(function () {
        displayMSG.textContent = "";
        location.reload();
      }, 2500);
      return json;
    } catch (error) {
      console.log(error);
      const notUpdated = document.createElement("div");
      notUpdated.classList.add("postError");
      notUpdated.textContent = `Avatar not updated, Sorry about that. Try again or come back later :(`;
      displayMSG.appendChild(notUpdated);

      updateAvatarForm.reset();
      setTimeout(function () {
        displayMSG.textContent = "";
      }, 5000);
    }
  }

  console.log(updateContent);
  update(updateAvatarURL, updateContent);
}

// updateAvatarForm.addEventListener("submit", updateAvatar);
