import { signForm } from "./modules/variables/variables.mjs";
import { signin } from "./modules/functions/user/loginAuth.mjs";

signForm.addEventListener("submit", signin);
