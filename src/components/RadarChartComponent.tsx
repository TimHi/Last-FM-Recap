import { ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import { RadarData } from "../model/ChartData";

export interface RadarChartProps {
    data: RadarData[],
}

function RadarChartComponent({ data }: RadarChartProps) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="label" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="occurence" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default RadarChartComponent