'use client';
import React, {FC} from 'react';
import classes from './ChartForDealToday.module.scss';
import {ChartForDealTodayProps} from './ChartForDealToday.types';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const data: ChartData<number[], string[]> = {
  labels,
  datasets: [
    {
      fill: true,
      lineTension: 0.4,
      radius: 4,
      hoverRadius: 6,
      label: 'Сделок',
      data: labels.map(() => Math.random() * 100),
      borderColor: '#A6CEE3',
      backgroundColor: 'rgba(166,206,227,0.5)',
    },
  ],
};

export const ChartForDealToday: FC<ChartForDealTodayProps> = ({className}) => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};
