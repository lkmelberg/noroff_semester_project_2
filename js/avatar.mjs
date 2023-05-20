import {
  profileSpesificURL,
  updateAvatarForm,
} from "./modules/variables/variables.mjs";
import { fetchProfileAvatar } from "./modules/functions/user/profileInfo.mjs";
import { updateAvatar } from "./modules/functions/user/changeAvatar.mjs";
fetchProfileAvatar(profileSpesificURL);
updateAvatarForm.addEventListener("submit", updateAvatar);
