// Sign out

/**
 * Signs out user, removes token and username from localstorage
 */

export function logOut() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userName");
}

// signoutBtn.addEventListener("click", signOut);
