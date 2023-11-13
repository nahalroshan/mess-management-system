import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

const Graph = ({ data }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chartContainer = chartContainerRef.current;

    // Destroy existing chart instance if it exists
    if (chartContainer) {
      const chartInstance = chartContainer.chartInstance;
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Create a new Doughnut chart
      const newChartInstance = new Doughnut(chartContainer, {
        data,
      });

      // Attach the new chart instance to the chart container
      chartContainer.chartInstance = newChartInstance;

      // Cleanup when the component is unmounted
      return () => {
        if (newChartInstance) {
          newChartInstance.destroy();
        }
      };
    }
  }, [data]);

  return <div ref={chartContainerRef} />;
};

export default Graph;
