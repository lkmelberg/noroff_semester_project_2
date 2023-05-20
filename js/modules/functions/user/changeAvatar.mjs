// import { token, profileAvatar } from "../../variables/variables.mjs";

// export async function fetchAvatar(url) {
//   try {
//     const getData = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const response = await fetch(url, getData);
//     const json = await response.json();
//     console.log(json);

//     const { avatar } = json;
//     profileAvatar.src = `${avatar}`;
//   } catch (error) {
//     console.log(error);
//   }
// }
