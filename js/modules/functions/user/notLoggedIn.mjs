import { fetchHeaderProfileInfo } from "./profileInfo.mjs";

import {
  listingsNav,
  token,
  profileNav,
  creditNav,
  navbarAvatar,
  navbarNav,
  profileSpesificURL,
  logoutBtn,
} from "../../variables/variables.mjs";

export function unregisteredRedirect() {
  if (!token) {
    window.location.href = "login.html";
  }
}

export function unregisteredLimitPage() {
  if (!token) {
    listingsNav.classList.add("hide");
    profileNav.classList.add("hide");
    creditNav.classList.add("hide");
    navbarAvatar.classList.add("hide");
    logoutBtn.classList.add("hide");

    const loginLi = document.createElement("li");
    loginLi.classList.add("nav-item");

    const login = document.createElement("a");
    login.classList.add("nav-link");
    login.textContent = `Login`;
    login.href = "login.html";

    navbarNav.appendChild(loginLi);
    loginLi.appendChild(login);
  } else {
    fetchHeaderProfileInfo(profileSpesificURL);
  }
}
