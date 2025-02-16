'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

  function BirthdayWish() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Show confetti after component mounts
    setShowConfetti(true)
  }, [])

  return (
    <main className={styles.main}>
      {showConfetti && (
        <div className={styles.confetti}>
          {[...Array(50)].map((_, i) => (
            <div key={i} className={styles.confettiPiece}></div>
          ))}
        </div>
      )}
      
      <div className={styles.birthdayCard}>
        <h1 className={styles.title}>🎉 Happy Birthday! 🎂</h1>
        <p className={styles.message}>
          Wishing you a day filled with joy, laughter, and lots of cake! 
          May your year ahead be as amazing as a bug-free deployment! 🚀
        </p>
        <div className={styles.cake}>
          🎂
        </div>
      </div>
    </main>
  )
} 


export default function Page() {
  return <BirthdayWish />
}