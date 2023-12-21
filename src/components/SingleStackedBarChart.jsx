import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

const SingleStackedBarChart = ({ width, height }) => {
  const ref = useRef();
  const [chartData, setChartData] = useState(null);
  const [tooltip, setTooltip] = useState({ display: false, data: null });
    
  useEffect(() => {
    const fetchData = async () => {
        const requestBody = [
            {
                "geoId": "48",
                "id": "6582102b903ab0943c07dbf8"
            }
        ];
        const res = await fetch("https://api.hra-dashtest.com/v3/reports/65820ff1903ab0943c07dbc6/output/charts", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });
        const data = await res.json();
        // console.log(data);
        const value = data?.charts[0].dataView.data[0].households
        const finalValue = 100 - (value/(data?.charts[0].dataView.data[6].households))
        setChartData(finalValue);
      };
    fetchData();
  }, []);
  // console.log(chartData);

  useEffect(() => {
    if (!ref.current || chartData === null) return;

    // Clear the SVG to prevent duplication
    d3.select(ref.current).selectAll("*").remove();

    // Create SVG canvas
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);
      
    // Background bar (100%)
    svg.append('rect')
      .attr('x', 0)
      .attr('y', height*0.1)
      .attr('width', width)
      .attr('height', height*.8)
      .attr('fill', '#ececec');

    const foregroundBar = svg.append('rect')
      .attr('x', 0)
      .attr('y', height*0.1)
      .attr('width', 0)
      .attr('height', height*.8)
      .attr('fill', '#666');
    
    // Animate the width of the bar
    foregroundBar.transition()
      .duration(750) // Duration of the animation in milliseconds
      .attr('width', width * (chartData / 100)) // Animate to the final width
      .on('end', () => {
        svg.append('line')
        .attr('x1', width * (chartData / 100)) // x position of the line start (end of the bar)
        .attr('y1', 0) // y position of the line start at the top of the bar
        .attr('x2', width * (chartData / 100)) // x position of the line end (end of the bar)
        .attr('y2', height) // y position of the line end at the bottom of the bar
        .attr('stroke', 'black') // color of the line
        .attr('stroke-width', 2.5); // thickness of the line
      });

    // Label
    svg.append('text')
      .attr('x', width * (chartData / 100) / 2)
      .attr('y', height / 2)
      .attr('dy', '.35em')
      .attr('fill', 'white')
      .attr('font-weight', 'bold')
      .attr('text-align', 'middle')
      .attr('font', 'sans')
      .text(`${Math.round(chartData)}%`);
    
       // Tooltip event handlers
    const handleMouseOver = () => {
        setTooltip({ display: true, data: `Percent   with Internet Subscriptions: ${Math.round(chartData)}%` });
        console.log('time for tooltip!');
      };
  
    const handleMouseMove = (e) => {
        const svgPosition = ref.current.getBoundingClientRect();
        setTooltip({
          display: visible, // Replace 'visible' with 'true'
          data: `${Math.round(chartData)}%`
        });
        console.log(tooltip.x);

      };
  
      const handleMouseOut = () => {
        setTooltip({ display: false, data: null });
        console.log('end of tooltip!');
      };
  
      // Apply event listeners to the bar
      foregroundBar
        .on('mouseover', handleMouseOver)
        .on('mousemove', handleMouseMove)
        .on('mouseout', handleMouseOut);

  }, [chartData, width, height]);

  return (
    <div className='font-sans'>
      <p className='py-2 text-xs'>Statewide</p>
      <svg ref={ref}></svg>
      {tooltip.display && (
        <div
          style={{
            position: 'absolute',
            // left: `${tooltip.x}px`,
            // top: `${tooltip.y}px`,
            backgroundColor: 'white',
            border: '1px solid #666',
            padding: '5px',
            pointerEvents: 'none'
          }}
        >
          {tooltip.data}
        </div>
      )}
      <p className='float-right py-2 text-xs'>Overall Target</p>
    </div>
  );
};

export default SingleStackedBarChart;