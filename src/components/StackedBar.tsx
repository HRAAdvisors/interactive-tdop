import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const SingleStackedBarChart = ({
  width,
  height,
  data, // Added data prop
}: {
  width: number;
  height: number;
  data: number; // Assume data is a number for simplicity
}) => {
  const ref = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<{
    x?: number;
    y?: number;
    display: boolean;
    data: string | null;
  }>({ display: false, data: null });

  useEffect(() => {
    if (!ref.current || data === null) return;

    d3.select(ref.current).selectAll('*').remove();

    const svg = d3.select(ref.current).attr('width', width).attr('height', height);

    svg
      .append('rect')
      .attr('x', 0)
      .attr('y', height * 0.1)
      .attr('width', width)
      .attr('height', height * 0.8)
      .attr('fill', '#BE0B31');

    const foregroundBar = svg
      .append('rect')
      .attr('x', 0)
      .attr('y', height * 0.1)
      .attr('width', 0)
      .attr('height', height * 0.8)
      .attr('fill', '#FF6989');

    foregroundBar
      .transition()
      .duration(750)
      .attr('width', width * (data / 100))
      .on('end', () => {
        svg
          .append('line')
          .attr('x1', width * (data / 95))
          .attr('y1', 0)
          .attr('x2', width * (data / 95))
          .attr('y2', height)
          .attr('stroke', 'black')
          .attr('stroke-width', 2.5);
      });

    svg
      .append('text')
      .attr('x', (width * (data / 100)) / 2)
      .attr('y', height / 2)
      .attr('dy', '.35em')
      .attr('fill', 'white')
      .attr('font-weight', 'bold')
      .attr('text-align', 'middle')
      .attr('font', 'sans')
      .text(`${Math.round(data)}%`);

    const handleMouseOver = () => {
      setTooltip({
        display: true,
        data: `Percent with Internet Subscriptions: ${Math.round(data)}%`,
      });
    };

    const handleMouseMove: React.MouseEventHandler = () => {
      setTooltip({
        display: false,
        data: `${Math.round(data)}%`,
      });
    };

    const handleMouseOut = () => {
      setTooltip({ display: false, data: null });
    };

    foregroundBar
      .on('mouseover', handleMouseOver)
      .on('mousemove', handleMouseMove)
      .on('mouseout', handleMouseOut);
  }, [data, width, height]);

  return (
    <div className='font-sans'>
      <p className='py-2 text-xs'>Statewide</p>
      <svg ref={ref}></svg>
      {tooltip.display && (
        <div
          style={{
            position: 'absolute',
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            backgroundColor: '#111',
            color: '#fff',
            border: '2px solid #111',
            padding: '8px',
            pointerEvents: 'none',
          }}
        >
          {tooltip.data}
        </div>
      )}
      <p className='float-right py-2 text-xs'>Overall Target: 95%</p>
    </div>
  );
};

export default SingleStackedBarChart;
