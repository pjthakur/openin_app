import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  
  const links= [
    {
      id:1,
      link:"/dashboard",
      text:"Dashboard",
      img:"/dashboard_icon.svg"
    },
    {
      id:2,
      link:"/dashboard",
      text:"Transactions",
      img:"/transaction_icon.svg"
    },
    {
      id:3,
      link:"/dashboard",
      text:"Schedules",
      img:"/schedule_icon.svg"
    },
    {
      id:4,
      link:"/dashboard",
      text:"Users",
      img:"/user_icon.svg"
    },
    {
      id:5,
      link:"/dashboard",
      text:"Settings",
      img:"/setting_icon.svg"
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p >Board.</p>
        <p className={styles.hid_text}>B.</p>
      </div>
      <div className={styles.links}>
        {links.map((link)=>{
          return(
        <Link href={link.link} className={styles.link} key={link.id}>
          <Image src={link.img} width={18} height={18} alt={link.text}/> 
          <p className={styles.link_text}>{link.text}</p>
        </Link>)
        })}
      </div>
      <div className={styles.help}>
        <Link href={"#"} className={styles.help_link}>Help</Link>
        <Link href={"#"} className={styles.help_link}>Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar