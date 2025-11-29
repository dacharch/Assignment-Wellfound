import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { useUsersStore } from '../../store/useUsersStore';
const COLORS = ['#4f46e5', '#ef4444', '#10b981', '#f59e0b'];

export default function Analytics() {
  const { users } = useUsersStore();


  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const key = d.toISOString().slice(0,10);
    const signups = users.filter(u => u.createdAt.slice(0,10) === key).length;
    return { day: d.toLocaleDateString(undefined, { weekday: 'short' }), signups };
  });

  const activeCount = users.filter(u => u.status === 'active').length;
  const inactiveCount = users.length - activeCount;
  const pieData = [{ name: 'Active', value: activeCount }, { name: 'Inactive', value: inactiveCount }];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-md shadow">
        <h3 className="text-lg font-medium mb-2">Signups — Last 7 days</h3>
        <div style={{ width: '100%', height: 240 }}>
          <ResponsiveContainer>
            <LineChart data={days}>
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="signups" stroke="#4f46e5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md shadow">
        <h3 className="text-lg font-medium mb-2">Active vs Inactive</h3>
        <div style={{ width: '100%', height: 240 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {
                  pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)
                }
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
