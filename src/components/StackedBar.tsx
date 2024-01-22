import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const StackedBar = ({ data, goal, isOpen }: { data: number; goal: number; isOpen: boolean }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current || !ref.current.parentElement || data === null) return;

    // Get the root font-size to calculate rem in pixels
    const remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const height = remInPixels * 1.5;

    const containerWidth = ref.current.parentElement.offsetWidth;
    d3.select(ref.current).selectAll('*').remove();

    const svg = d3.select(ref.current).attr('width', containerWidth).attr('height', height);
    svg
      .append('rect')
      .attr('x', 0)
      .attr('y', height * 0.1)
      .attr('width', containerWidth)
      .attr('height', height * 0.8)
      .attr('fill', '#BE0B31');

    const animateBar = () => {
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
        .attr('width', containerWidth * (data / 100))
        .on('end', () => {
          // Create the line with initial y2 value set to 0
          const line = svg
            .append('line')
            .attr('x1', containerWidth * (goal / 100))
            .attr('y1', height / 2)
            .attr('x2', containerWidth * (goal / 100))
            .attr('y2', height / 2)
            .attr('stroke', 'black')
            .attr('stroke-width', 2.5);

          // Animate the line to the final y2 value
          line.transition().duration(500).attr('y1', 0).attr('y2', height);
        });

      svg
        .append('text')
        .attr('x', (containerWidth * (data / 100)) / 2)
        .attr('y', height / 2)
        .attr('dy', '.35em')
        .attr('fill', 'white')
        .attr('font-weight', 'bold')
        .attr('text-align', 'middle')
        .attr('font', 'sans')
        .text(`${Math.round(data)}%`);

      foregroundBar;
    };
    // Trigger the animation when the card is opened
    if (isOpen) {
      animateBar();
    }
  }, [data, isOpen]);

  return (
    <div className='stacked-bar-container' style={{ width: '100%' }}>
      <p className='py-2 text-xs'>Statewide</p>
      <svg ref={ref}></svg>
      <p className='float-right py-4 text-xs'>
        Overall Target: <strong>{goal}%</strong>
      </p>
    </div>
  );
};

export default StackedBar;
