import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import styles from './skeleton1.module.css'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        

export default function Skeleton1() {
    return (
        <div className={styles.card}>
            <div className={styles.card_sub}>
            <div className="w-full md:w-6 p-3" style={{
                display:'flex', flexDirection:'column', gap:'30px'
            }}>
                    <div className={styles.rectangle}>

                    <Skeleton className="mb-2"></Skeleton>
                    <Skeleton width="10rem" className="mb-2"></Skeleton>
                    <Skeleton width="5rem" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2"></Skeleton>
                    <Skeleton width="10rem" height="4rem"></Skeleton>
                    </div>
                    <div className={styles.rectangle}>

                    <Skeleton className="mb-2"></Skeleton>
                    <Skeleton width="10rem" className="mb-2"></Skeleton>
                    <Skeleton width="5rem" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2"></Skeleton>
                    <Skeleton width="10rem" height="4rem"></Skeleton>
                    </div>
                </div>
                
            </div>
        </div>
    );
}