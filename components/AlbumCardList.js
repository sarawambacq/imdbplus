import React, { useState } from "react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/AlbumCardList.module.scss"
import AlbumCard from "./AlbumCard"



const AlbumCardList = ({ items, title, type }) => {

  return (
    // <div className={styles.itemgallery}>
    //   <div className={styles.title}>{title}</div>
    //   <div className={styles.relateditems}>
    //     {items.map((item, index) => (
    //       const lang = item.lang === "default" ? "/en" : `/${item.lang}`;
    //       return(
    //       <div>
    //         {type=="product" && <SmallCard title={item.content.title} picture={item.content.mainpicture.filename} url={item.full_slug} type={type} price={item.content.price} />}
    //         {type!="product" && <SmallCard title={item.content.title} picture={item.content.mainpicture.filename} url={item.full_slug} type={type} />}
    //       </div>
    //       );
    //     ))}
    //   </div>
    // </div>


    <div className={styles.itemgallery}>
      <div className={styles.gallerycontent}>
      {items.map((item) => {
        const lang = item.lang === "default" ? "/en" : `/${item.lang}`;
        return (
          <div key={item.content.title} className={styles.smallcardwrapper}>
            {type == "product" && <AlbumCard lang={lang} title={item.content.title} picture={item.content.mainpicture.filename} spotify={item.content.spotify.url} short={item.content.short} type={type}/>}
            {type != "product" && <AlbumCard lang={lang} title={item.content.title} picture={item.content.mainpicture.filename} spotify={item.content.spotify.url} short={item.content.short} type={type} />}
          </div>
        );
      })}
      </div>
      
    </div>

  )
}

export default AlbumCardList
