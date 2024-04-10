
// import { useState } from 'react';
import styles from './AppLayout.module.css'
import MainApp from './MainApp'

function AppLayout() {
 

 return (
  <>
 <h3 className={styles.developer}>built by koja williams</h3>
  <main className={styles.app}>
 <MainApp />
  </main>
  </>
 )
}


 
   

export default AppLayout
