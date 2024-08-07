import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Card } from "react-bootstrap";

const ProvinceTotal = ({ data }) => {
  const canvasRef = useRef();
  const init = useRef(false);

  useEffect(() => {
    if (!init.current && data) {
      init.current = true;
      const labels = [];
      const values = [];
      Object.entries(data).forEach(([key, value]) => {
        labels.push(key);
        values.push(value);
      });
      new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Total # of Immigrant Recorded",
              data: values,
              borderWidth: 1,
              tension: 0.4,
            },
          ],
        },
        options: {
          scales: {
            y: {
              title: "title",
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);
  return (
    <Card body className="shadow">
      <h5 className="text-center">Immigration Trend by Province</h5>
      <canvas ref={canvasRef} />
    </Card>
  );
};

export default ProvinceTotal;
