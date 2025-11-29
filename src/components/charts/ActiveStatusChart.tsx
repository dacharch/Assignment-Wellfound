import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#34d399", "#f87171"]; // green, red

interface Props {
  data: { name: string; value: number }[];
}

const ActiveStatusChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">User Status</h2>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActiveStatusChart;
