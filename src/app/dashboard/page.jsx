"use client"
import Image from 'next/image'
import styles from "./page.module.css"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Search from '@/components/search/Search'
import {signIn, signOut, useSession,  getProviders} from 'next-auth/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@/components/card/Card'
import Chartscom from '@/components/chart/Chartscom'
import PieChart from '@/components/chart/PieChart'

export default function Dashboard() {
  const {data:session} =  useSession();
  const session1 = useSession()
  const router = useRouter()
  const [crypData, setCrypData] = useState([])
  
  const [show, setShow] = useState(false)

  useEffect(() => {
      getData("https://blockchain.info/ticker")
  }, [])


  
  const getData = async(url) =>{
    await axios.get(url).then((response) => {
       setCrypData(response.data);
    });
  }
const crypValues = Object.values(crypData)
console.log(crypValues)
const crypValues1=[
  {
    // buy: crypValues[0].buy || 555, 
  }
]
  const cardImages = [
    {img1:'/vector1.svg'},
    {img1:'/vector2.svg'},
    {img1:'/total_transactions_icon.svg'},
    {img1:'/vector.svg'},
  ]



   if(session1.status ==="loading"){
    return<p>Loading...</p>
  }
  if(session1.status==="unauthenticated"){
    router.push("/")
  }
  if(session1.status==="authenticated"){

    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.hero}>
          <p>Dashboard</p>
          </div>
          <div className={styles.nav_right}> 
            <Search/>
            <Image src="/bell.svg" height={20} width={18} alt='bell'/>
            <div className={styles.user} onClick={()=>{setShow(!show)}}>
              <img src={session.user.image} alt='user-image' className={styles.user_image}/>
            </div>
            <div className={styles.logout} style={show?{visibility:'visible'}:{visibility:"hidden"}}>
              <button className={styles.logout_button} type='submit' onClick={signOut}>Log Out</button>
            </div>
          </div>
        </div>
        
        <div className={styles.cards}>
          <Card price="5563.54"  image ='/vector3.svg' signal="USD"  color="#F4ECDD"/>
          <Card price="5545.24"  image ='/Vector1.svg' signal="ASD"  color="#DDEFE0"/>
          <Card price="2456.56"  image ='/vector.svg'  signal="DOG" color="#EFDADA"/>
          <Card price="1236.55"  image ='/vector2.svg' signal="GAM"  color="#DEE0EF"/>
        </div>
        
          <Chartscom/>
        
        <div className={styles.foot}>
          <div className={styles.product}>
            <div className={styles.product_head}>
              <h3 className={styles.product_heading}>Top products</h3>
              <p className={styles.product_subHeading}>May - June 2021 <Image src="/down-arrow.svg" width={8} height={5} alt='down-arrow'/></p>
            </div>
            <div className={styles.product_body}>
            <PieChart/>
            <div className={styles.product_body_sub}>
            <ul>
                <li className={styles.schedule_list}>Basic Tees</li>
                <p className={styles.schedule_para}>55%</p>
                <li className={styles.schedule_list2}>Custom Short Pants</li>
                <p className={styles.schedule_para}>31%</p>
                <li className={styles.schedule_list3}>Sugar Hoodies</li>
                <p className={styles.schedule_para}>14%</p>
              </ul>
            </div>
            </div>
          </div>
          <div className={styles.product}>
          <div className={styles.product_head}>
              <h3 className={styles.product_heading}>Today's Schedule</h3>
              <p className={styles.product_subHeading}>See All <Image src="/arrow-right.svg" width={8} height={5} alt='right-arrow'/></p>
          </div>
          <div className={styles.schedules}>
              <div className={styles.schedule}>
                <div className={styles.schedule_bar}/>
                <div className={styles.schedule_details}>
                  <h5 className={styles.schedule_head}>Meeting with suppliers from Kuta Bali</h5>
                  <p className={styles.schedule_time}>14:00 - 15:00</p>
                  <p className={styles.schedule_time}>at Sunset Road, Kuta, Bali</p>
                </div>
              </div>
              <div className={styles.schedule}>
                <div className={styles.schedule_bar} style={{backgroundColor:'#6972C3'}}/>
                <div className={styles.schedule_details}>
                  <h5 className={styles.schedule_head}>Meeting with suppliers from Kuta Bali</h5>
                  <p className={styles.schedule_time}>14:00 - 15:00</p>
                  <p className={styles.schedule_time}>at Sunset Road, Kuta, Bali</p>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
