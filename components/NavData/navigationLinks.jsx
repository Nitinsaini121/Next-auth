export const NavLinks = [
  {
    title: "Home",
    path: "/homepage",
    subChild: [
      {
        id: 1,
        name: "SubHome1",
        path: "/homepage",
      },
      {
        id: 1,
        name: "SubHome2",
        path: "/subhome",
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
        path: "/inbox2",
      },
    ],
  },

  {
    title: "Starred",
    path: "/starred",
    subChild: [
      { id: 3, name: "Starred", path: "/starred" },
      { id: 3, name: "Starred", path: "/starred2" },
    ],
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
