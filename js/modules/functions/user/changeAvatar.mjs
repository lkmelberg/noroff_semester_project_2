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
      displayMSG.textContent = `<div class="postSuccess">Avatar updated! Please wait</div>`;
      updateAvatarForm.reset();
      setTimeout(function () {
        displayMSG.textContent = "";
        location.reload();
      }, 2500);
      return json;
    } catch (error) {
      console.log(error);
      displayMSG.textContent = `<div class="postError">Avatar not updated, Sorry about that. Try again or come back later :() </div>`;
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
