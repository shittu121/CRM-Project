import React from "react";
import Stats from "./stats/index.";
import Chart from "./charts";

export default function Dashboard() {
  return (
    <div>
      <Stats />
      <Chart />
    </div>
  );
}
