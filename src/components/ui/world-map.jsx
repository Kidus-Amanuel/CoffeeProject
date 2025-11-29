import React from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

export default function WorldMap({
    dots = [],
    lineColor = "#0ea5e9",
    dotColor = "#FFFFFF40",
}) {
    const map = new DottedMap({ height: 60, grid: "diagonal" });

    const points = map.getPoints();

    const maxX = points.reduce((max, p) => Math.max(max, p.x), 0);
    const maxY = points.reduce((max, p) => Math.max(max, p.y), 0);

    const projectPoint = (lat, lng) => {
        return map.getPin({ lat, lng });
    };

    const createCurvedPath = (start, end) => {
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - (Math.abs(start.x - end.x) * 0.2);
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    return (
        <div className="w-full aspect-[2/1] relative font-sans rounded-lg overflow-hidden">
            <svg
                viewBox={`0 0 ${maxX + 4} ${maxY + 4}`}
                className="w-full h-full"
            >
                <g transform="translate(2, 2)">
                    {points.map((point, i) => (
                        <circle
                            key={i}
                            cx={point.x}
                            cy={point.y}
                            r={0.15}
                            fill={dotColor}
                        />
                    ))}
                </g>
                <g transform="translate(2, 2)">
                    {dots.map((dot, i) => {
                        const start = projectPoint(dot.start.lat, dot.start.lng);
                        const end = projectPoint(dot.end.lat, dot.end.lng);
                        return (
                            <g key={`connection-${i}`}>
                                <motion.path
                                    d={createCurvedPath(start, end)}
                                    fill="none"
                                    stroke={lineColor}
                                    strokeWidth="0.2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{
                                        duration: 1.5,
                                        delay: 0.5 * i,
                                        ease: "easeOut",
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        repeatDelay: 3
                                    }}
                                />
                                <circle cx={start.x} cy={start.y} r={0.3} fill={lineColor} />
                                <circle cx={end.x} cy={end.y} r={0.3} fill={lineColor} />
                            </g>
                        );
                    })}
                </g>
            </svg>
        </div>
    );
}
