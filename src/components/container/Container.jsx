import React from 'react'
import styles from "./styles.module.css";

const Container = ({children}) => {
  return (
    <div className="min-h-screen   flex items-center justify-center bg-[#131921] ">
      
      <div className={`relative h-auto w-80 sm:w-150 rounded-3xl flex items-center justify-center `}>

        <div className={`absolute inset-0 rounded-3xl ${styles["ring-1"] } `}></div>

        <div className={`absolute inset-0 rounded-3xl ${styles["ring-2"] } `}></div>

      <div className='  flex-1 m-1  bg-[#2d2d39] shadow-[0_0_10px_rgba(0,255,255,0.6)]  rounded-3xl w-full p-7 flex items-center justify-center z-10'>

         <div className="bg-[#00000033] p-6 sm:p-12 w-full rounded-3xl shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)]">
        {children}
             
           
           

          </div>
     </div>
      </div>

    </div>
  )
}

export default Container