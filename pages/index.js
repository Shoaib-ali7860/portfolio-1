import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'
import Academic from '../components/Academic.js'

import Languages from '../components/Languages.js'
export default function Home() {
  return (
    <div className=" h-100" id="home" style={{display:"flex",direction:"vertical"}}>
         <div><Navbar/></div>
         <div className=" h-100 w-100">
         <div className="bg-dark h-100 w-100" style={{backgroundImage: "url('bg.jpg')",paddingTop:"200px"}} >

           <div className={`  ${styles.name}`} >
              
           <div className={styles.name_anim}>
              
             Hello,
            </div>
            <div className={styles.name_anim1} >
              
              My Name is 
            </div>
            <div className={styles.name_anim}>
              
              Shoaib Ali
            </div>
           </div>
          
    </div>
    <Academic/>
    <Languages/>
    </div>
    <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>
  </div>
  )
}
