import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    to: "/",
    text: "Home",
  },
  {
    id: nanoid(),
    to: "/my-favorite-books",
    text: "Favorite Books",
  },
  {
    id: nanoid(),
    to: "/books",
    text: "Books",
  },
];

export default items;
