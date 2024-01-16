import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const DumbbellChart = ({
  data,
  width = window.innerWidth / 2.5,
  height = window.innerHeight / 2,
}: {
  data: {
    name: string;
    startValue: number;
    endValue: number;
  }[];
  width?: number;
  height?: number;
}) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Clear the SVG to prevent duplication
    d3.select(ref.current as any)
      .selectAll('*')
      .remove();

    // Create SVG canvas
    const svg = d3
      .select(ref.current as any)
      .attr('width', width)
      .attr('height', height);

    // Create the scales for x and y axes
    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.name));
    const yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, (d) => Math.max(d.startValue, d.endValue))] as any);

    // Draw the dumbbells
    data.forEach((d) => {
      const x = (xScale as any)(d.name) + xScale.bandwidth() / 2;
      const startY = yScale(d.startValue * 0.8);
      const endY = yScale(d.endValue * 0.8);

      // Line
      svg
        .append('line')
        .attr('x1', x)
        .attr('y1', startY)
        .attr('x2', x)
        .attr('y2', endY)
        .attr('stroke', '#111')
        .attr('stroke-width', 2);

      // Start circle
      svg.append('circle').attr('cx', x).attr('cy', startY).attr('r', 20).attr('fill', '#B9B9B9');

      // End circle
      const endCircle = svg
        .append('circle')
        .attr('cx', x)
        .attr('cy', startY)
        .attr('r', 20)
        .attr('fill', '#002768');

      endCircle
        .transition()
        .duration(750) // Duration of the animation in milliseconds
        .attr('cy', endY); // Animate to the final width

      // End value text
      svg
        .append('text')
        .attr('x', x)
        .attr('y', endY)
        .attr('dy', 5)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', '#FFF')
        .text(`${d.endValue} %`);

      // Label text
      svg
        .append('text')
        .attr('x', x)
        .attr('y', startY * 0.25)
        .attr('text-anchor', 'middle')
        .attr('font-size', '1rem')
        .attr('fill', '#000')
        .text(d.name);

      svg
        .append('text')
        .attr('x', x)
        .attr('y', height) // Adjust this value to position the label appropriately
        .attr('dy', '-0.5em') // Adjust the position a bit above the bottom of the svg
        .attr('text-anchor', 'middle')
        .attr('width', '10')
        .attr('font-size', '0.8rem')
        .attr('fill', '#000')
        .text(`${d.endValue}% subscribe to broadband internet.`);
    });
  }, [data, width, height]);

  return <svg ref={ref}></svg>;
};

export default DumbbellChart;
