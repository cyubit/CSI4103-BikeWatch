import React from 'react';
import colorLib from '@kurkle/color';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export function transparentize(value, opacity) {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'none',
    },
    title: {
      display: true,
      text: 'Thefts By Year',
      color: '#f2efeb'
    },
  },
  scales: {
    x: {
      grid: {
        color: '#f2efeb'
      },
      ticks: {
        color: '#f2efeb'
      }
    },
    y: {
      grid: {
        color: '#f2efeb'
      },
      ticks: {
        color: '#f2efeb'
      }
    }
  },

};

const labels = ['2017', '2018', '2019', '2020', '2021'];

export function BarChart(props) {
  const yearlyThefts = props.yearlyThefts;
  const colour = props.colour;
  //console.log(colour)
  const vals = { '2017': yearlyThefts[0], '2018': yearlyThefts[1], '2019': yearlyThefts[2], '2020': yearlyThefts[3], '2021': yearlyThefts[4] }
  return <Bar options={options} data={
    {
      labels,
      datasets: [
        {
          label: '# of Thefts',
          data: labels.map((l) => vals[l]),
          backgroundColor: colour.map((c) => transparentize(c, 0.09)),
          color: '#f2efeb',
        },
      ],

    }
  } />;
}
