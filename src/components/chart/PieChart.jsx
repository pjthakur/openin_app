import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import styles from './chart.module.css'
const PieChart = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            datasets: [
                {
                    data: [14,31 , 55],
                    backgroundColor: [
                      '#EE8484' ,'#F6DC7D','#98D89E'
                    ],
                    hoverBackgroundColor: [
                        '#F6DC7Ddd' ,'#EE8484dd','#98D89Edd'
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className={styles.pieCard}>
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}

export default PieChart