export const NavLinks = [
  {
    title: "Home",
    path: "/homepage",
    subChild: [
      {
        id: 1,
        name: "Home",
        path: "/homepage",
      },
    ],
  },

  {
    title: "Inbox",
    path: "/inbox",

    subChild: [
      {
        id: 2,
        name: "Inbox",
        path: "/inbox",
      },
      {
        id: 2,
        name: "Inbox",
        path: "/inbox",
      },
    ],
  },

  {
    title: "Starred",
    path: "/Starred",
    subChild: [{ id: 3, name: "Starred", path: "/Starred" }],
  },

  {
    title: "Drafts",
    subChild: [{ id: 4, name: "Drafts", path: "/Drafts" }],
  },

  {
    title: "Trash",
    subChild: [{ id: 6, name: "Trash", path: "/Trash" }],
  },
];
