
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from '../constants';

const SkillsChart: React.FC = () => {
  const chartData = SKILLS.filter(s => s.level > 70).map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <div className="h-[400px] w-full bg-white/50 rounded-3xl p-4 border border-purple-200 backdrop-blur-sm shadow-inner">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
          <PolarGrid stroke="#ddd6fe" strokeOpacity={0.6} />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#9333ea', fontSize: 12, fontFamily: 'Nunito' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skill Level"
            dataKey="A"
            stroke="#9333ea"
            strokeWidth={3}
            fill="#9333ea"
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#ffffff', borderColor: '#ddd6fe', color: '#374151', borderRadius: '12px' }}
            itemStyle={{ color: '#9333ea' }}
            cursor={{ stroke: '#9333ea' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
