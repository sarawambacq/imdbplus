import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Group.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"

const about = {
  en: 'About this group',
  nl: 'Over deze groep',
}

const members = {
  en: 'Members',
  nl: 'Leden',
}

const history = {
  en: 'History',
  nl: 'Geschiedenis',
}

const Group = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    if (locale === 'default') {
      locale = 'en';
    }
    var content = data.story.content;
  } else {
    var content = data;
  }

  var pictures = content.pictures;
  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.group}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>

          <div className={styles.short}>
            <div className={styles.shorttitle}>{history[locale]}</div>
            {render(content.short)}
          </div>

        </div>
      </main>
    </SbEditable>
  )
}

export default Group
