import { FaDiceFour, FaPause } from "react-icons/fa6";
import styles from "./MainApp.module.css";
import {  useState } from "react";
import SpinnerMini from "./SpinnerMini";

import { useQuery } from "@tanstack/react-query";
import { getAdvice } from "../services/adviceApi";

function MainApp() {
  const [isFetching,setisFetching]=useState()
  const {
    isLoading,
    data: { slip } = {},
    refetch,
  } = useQuery({
    queryKey: ["advice"],
    queryFn: getAdvice,
    onSuccess: () => {
      setisFetching(false)
    },
  });


  

  console.log(slip)




const handleClick=function(){
setisFetching(true)
refetch()

}

return (
  <>
    <div className={styles.main}>
  {isLoading?<SpinnerMini/>:
  <>
      <h3 className={styles.title}>advice #{slip.id}</h3>
      <p className={styles.notes}>{`"${slip.advice}"`}</p>
  </>
      }
      <div className={styles.pauseContainer}>
        <div className={styles.line}></div>
        <span className={styles.pause}>
          <FaPause />
        </span>
        <div className={styles.line}></div>
      </div>

      <button className={styles.dice} onClick={handleClick} disabled={isFetching} >
        <FaDiceFour />
      </button>
    </div>
  </>
  
  
  );
}

export default MainApp;
