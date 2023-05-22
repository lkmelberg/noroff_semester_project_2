import {
  userName,
  profileName,
  token,
  profileEmailHead,
  headerCredits,
  profileCredits,
  headerAvatar,
  profileAvatar,
} from "../../variables/variables.mjs";
/**
 * adds profilename dynamically on the home and profile page
 */

export function addProfileName() {
  profileName.innerHTML = `${userName}`;
}

// addProfileName();

export async function fetchProfileInfo(url) {
  try {
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    const json = await response.json();
    console.log(json);

    const { email, credits } = json;
    profileEmailHead.innerHTML = `${email}`;
    profileCredits.textContent = `${credits}`;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProfileAvatar(url) {
  try {
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    const json = await response.json();
    console.log(json);

    const { avatar } = json;
    profileAvatar.src = `${avatar}`;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchHeaderProfileInfo(url) {
  try {
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    const json = await response.json();
    console.log(json);
    const { avatar, credits } = json;
    headerCredits.textContent = `${credits}`;
    headerAvatar.src = `${avatar}`;
  } catch (error) {
    console.log(error);
  }
}
