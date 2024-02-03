// tableData.js
export function createData(
  id,
  shippingId,
  date,
  status,
  customer,
  email,
  country,
  shipping,
  source,
  orderType
) {
  return {
    id,
    shippingId,
    date,
    status,
    customer,
    email,
    country,
    shipping,
    source,
    orderType,
  };
}

export const rows = [
  createData(
    1077,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
  createData(
    10620,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
  createData(
    77620,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
  createData(
    762,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
  createData(
    620,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
  createData(
    20,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
  createData(
    1077,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
  createData(
    1020,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
  createData(
    100,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
  createData(
    102034,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
  createData(
    1077889,
    17713,
    "22 Jan 2020",
    "Pending",
    "Ahmed",
    "ahmed.123@gmail.com",
    "Australia",
    "Austrelian Post",
    "ShopifyAU",
    "Customer"
  ),
];

export const headCells = [
  { id: "id", numeric: true, disablePadding: false, label: "ID" },
  {
    id: "shippingId",
    numeric: true,
    disablePadding: false,
    label: "SHIPPING ID",
  },
  { id: "date", numeric: true, disablePadding: false, label: "Date" },
  { id: "status", numeric: true, disablePadding: false, label: "STATUS" },
  { id: "customer", numeric: true, disablePadding: false, label: "CUSTOMER" },
  { id: "email", numeric: true, disablePadding: false, label: "EMAIL" },
  { id: "country", numeric: true, disablePadding: false, label: "COUNTRY" },
  { id: "shipping", numeric: true, disablePadding: false, label: "SHIPPING" },
  { id: "source", numeric: true, disablePadding: false, label: "SOURCE" },
  {
    id: "orderType",
    numeric: true,
    disablePadding: false,
    label: "ORDER TYPE",
  },
];
