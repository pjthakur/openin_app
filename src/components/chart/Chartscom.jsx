import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import "primereact/resources/primereact.min.css";

import styles from './chart.module.css'              
import Image from 'next/image';
import { StyleRegistry } from 'styled-jsx';
const Chartscom = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Guest',
                    data: [100,200,300,200,400],
                    fill: false,
                    borderColor: '#E9A0A0',
                    tension: 0.4
                },
                {
                    label: 'User',
                    data: [200,300,400,500,100],
                    fill: false,
                    borderColor: '#9BDD7C',
                    tension: 0.4,
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 1.3,
            stacked:false,
        
            plugins: {
                legend: {
                    labels: {
                        color: 'black',
                        
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#858585'
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    // type:'linear',
                    ticks: {
                        maxTicksLimit: 5,
                        color: ' #858585'
                    },

                    
                },
               
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (

        <div className={styles.card}>
            <h1 className={styles.chart_heading}>Activities </h1>
            <p className={styles.chart_sub}>May - June 2021  <Image src="/down-arrow.svg" height={8} width={8}/></p>
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}

export default Chartscom