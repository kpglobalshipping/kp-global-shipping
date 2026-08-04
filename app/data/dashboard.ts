export type DashboardStat = {
  icon: "anchor" | "ship" | "clock" | "globe";
  value: string;
  title: string;
};

export const dashboardStats: DashboardStat[] = [
  {
    icon: "anchor",
    value: "12+",
    title: "Major Ports",
  },
  {
    icon: "ship",
    value: "8",
    title: "Marine Services",
  },
  {
    icon: "clock",
    value: "24/7",
    title: "Operations Support",
  },
  {
    icon: "globe",
    value: "Nationwide",
    title: "Coverage",
  },
];