import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/GroupList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const GroupList = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [sortby, setSortby] = useState();
  
  const defaultLocale = locale === 'default' ? '' : `${locale}/`

  const [items, setItems] = useState([]);
  getAllItems('group', locale, sortby).then(
    function (result) {
      setItems(result.data.stories.map(item => ({...item, full_slug: `${defaultLocale}members/${item.content.title.replace(' ', '-').toLowerCase()}`})));
    }
  );

  return (
    <div className={styles.list}>
      <div>
        {items && items.length > 0 && <SmallCardList items={items} type="group"></SmallCardList>}
      </div>
    </div>

  );
};

export default GroupList;
