import React, { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/AlbumCard.module.scss"



const AlbumCard = ({ lang, title, short, picture, spotify, type, price }) => {

  return (
    <a href={spotify} className={`bg-shadow-${type} ${styles.item}`}>
      <div>
        <div className={styles.mainpicture} style={{ backgroundImage: `url("${picture}")` }}></div>
        <div className={styles.textpart}>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.short}>
            {render(short)}
          </div>
          <div>
            <img src="/spotify.png" className={styles.spotify}></img>
          </div>
        </div>
      </div>
    </a>
  )
}

export default AlbumCard
