export const sidebarData = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "SetUp",
    children: [
      // {
      //   name: "Datatable",
      //   path: "/dataTable",
      // },
      {
        name: "Financial Year",
        path: "/finacial_year",
      },
      {
        name: "Expense Type",
        path: "/expense_type",
      },
      {
        name: "Accounts Head",
        path: "/accounts_head",
      },
      {
        name: "Fund Source",
        path: "/fund_source",
      },
      {
        name: "Mapping",
        // path: "/projects/c",
        children: [
          {
            name: "Account to Fund Source",
            path: "/projects/c/c1",
          },
          {
            name: "Head to monthly Budget",
            path: "/projects/c/c1",
          },
          {
            name: "Actual Expense",
            path: "/projects/c/c2",
          },
        ],
      },
      {
        name: "Reports",
        children: [
          {
            name: "Head wise Deviasion",
            path: "/projects/c/c1",
          },
          {
            name: "FY Ledger",
            path: "/projects/c/c1",
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