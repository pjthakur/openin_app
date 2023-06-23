import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'

const Card = (props) => {
  const color = props.color
  return (
    <div className={styles.container} style={{backgroundColor:`${color}`}}>
        <div className={styles.image}>
        <Image src={`${props.image}`} height={5} width={5} className={styles.images} alt='hello' />
        </div>
        <h5 className={styles.signal}>{props.signal}</h5>
        <p className={styles.price}>{props.price}</p>
    </div>
  )
}

export default Card