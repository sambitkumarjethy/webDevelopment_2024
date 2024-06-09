export const sidebarData = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Functionality",
    children: [
      {
        name: "Datatable",
        path: "/dataTable",
      },
      {
        name: "Project B",
        path: "/projects/b",
      },
      {
        name: "Project C",
        path: "/projects/c",
        children: [
          {
            name: "Sub Project C1",
            path: "/projects/c/c1",
          },
          {
            name: "Sub Project C2",
            path: "/projects/c/c2",
          },
        ],
      },
    ],
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
