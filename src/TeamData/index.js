// // src/TeamData/index.js

// import { batch2026 } from "./2026";
// import { batch2027 } from "./2027";
// import { batch2028 } from "./2028";
// import { batch2029 } from "./2029";
// import { Alumini } from "./Alumini";

// export const teamMembers = {
//   "4th": batch2027,
//   "3rd": batch2028,
//   "2nd": batch2029,

//   "alumni2026": batch2026,
//   "alumni2025": Alumini
// };

// export {
//   batch2026,
//   batch2027,
//   batch2028,
//   batch2029,
//   Alumini
// };

export const loadTeamData = (year) => {
  switch (year) {
    case "4th":
      return import("./2027").then((m) => m.batch2027);
    case "3rd":
      return import("./2028").then((m) => m.batch2028);
    case "2nd":
      return import("./2029").then((m) => m.batch2029);
    case "alumni2026":
      return import("./2026").then((m) => m.batch2026);
    case "alumni2025":
      return import("./Alumini").then((m) => m.Alumini);
    default:
      return Promise.resolve([]);
  }
};