import {
  profileSpesificURL,
  updateAvatarForm,
} from "./modules/variables/variables.mjs";
import { fetchProfileAvatar } from "./modules/functions/user/profileInfo.mjs";
import { updateAvatar } from "./modules/functions/user/changeAvatar.mjs";
import { addProfileName } from "./modules/functions/user/profileInfo.mjs";
addProfileName();
fetchProfileAvatar(profileSpesificURL);
updateAvatarForm.addEventListener("submit", updateAvatar);

import { unregisteredRedirect } from "./modules/functions/user/notLoggedIn.mjs";
unregisteredRedirect();
