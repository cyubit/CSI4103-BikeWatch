import React from 'react';
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
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'none',
    },
    title: {
      display: true,
      text: 'Thefts By Year',
    },
  },
};

const labels = ['2017', '2018', '2019', '2020', '2021'];

export function BarChart(props) {
    props = props.props;
    const vals = {'2017': props[0], '2018': props[1], '2019': props[2], '2020': props[3], '2021': props[4] };
    console.log(props[0]);
    return <Bar options={options} data={
        {
            labels,
            datasets: [
            {
                label: '# of Thefts',
                data: labels.map((l) => vals[l]),
                backgroundColor: 'rgba(19,93,216)',
            },
            ],
        }
        } />;
}
