import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

// const options = {
 
// };

function LineGraph({ casesType }) {
  const [data, setData] = useState({});

//   const data = [{ 'x': 1,'y':20},
// { 'x':20,'y':30},{'x':200,'y':22}]


  useEffect(() => {
    
    let data = [];
    let value = 50;
    for(var i = 0; i < 366; i++){
      let date = new Date();
      date.setHours(0,0,0,0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
      data.push({x: date, y: value});
    }   
    setData(data)
  }, []);

  return (
    <div>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                type: 'line',
                backgroundColor: "black",
                borderColor: "#5AC53B",
                borderWidth: 2,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: '#5AC53B',
                pointHoverBorderColor: '#000000',
                pointHoverBorderWidth: 4,
                pointHoverRadius: 6,
                data: data,
              },
            ],
          }}
          options={{ 
            animations: {
              tension: {
                duration: 100,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
              }
            },
            legend: {
              display: false,
            },
            hover: {
              intersect: false
            },
            elements: {
              line: {
                tension: 0
              },
              point: {
                radius: 0,
              },
            },
            maintainAspectRatio: false,
            tooltips: {
              mode: "index",
              intersect: false,
              callbacks: {
              },
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                  },
                  ticks: {
                    display: false,
                  }
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;