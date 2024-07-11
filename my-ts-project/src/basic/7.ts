// Create a new data type that fits these two objects.
// const page1 = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };

// const page2 = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
};

type Details = {
  createAt: Date;
  updateAt: Date;
};

type PageAndDetails = Page & Details;

const page1: PageAndDetails = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  createAt: new Date("2021-01-01"),
  updateAt: new Date("2021-05-01"),
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
