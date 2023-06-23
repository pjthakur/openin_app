import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import styles from './page.module.css'
import Image from 'next/image'
const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout