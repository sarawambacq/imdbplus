import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Member.module.scss"

const about = {
  en: 'About this artist',
  nl: 'Over deze artiest'
}

const bday = {
  en: 'Birthday',
  nl: 'Geboortedatum'
}

const solo = {
  en: 'Solo Career',
  nl: 'Solo Carrière'
}

const Member = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    if (locale === 'default') {
      locale = 'en';
    }
    var content = data.story.content;
    var genres = data.rels.filter(obj => {
      return content.genres.includes(obj.uuid);
    });
  } else {
    var content = data;
  }

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.group}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")`}}>
          </div>

          <div className={styles.short}>
            <div className={styles.shorttitle}>{about[locale]}</div>
            {render(content.bio)}
          </div>

          <div className={styles.short} style={{marginBottom: '10px'}}>
            <div className={styles.shorttitle}>{bday[locale]}</div>
            {content.date_of_birth.split(' ')[0]}
          </div>

          <div className={styles.short}>
            <div className={styles.shorttitle}>{solo[locale]}</div>
            {render(content.solo_career)}
          </div>
        </div>
      </main>
    </SbEditable>
  )
}

export default Member
