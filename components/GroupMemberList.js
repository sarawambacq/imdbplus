import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/GroupList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const GroupMemberList = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [sortby, setSortby] = useState();

  const [items, setItems] = useState([]);
  getAllItems('member', locale, sortby).then(
    function (result) {
      setItems(result.data.stories.filter(item => item.full_slug.includes(data.story.name)).map(item => ({...item, full_slug: item.full_slug})));
    }
  );

  return (
    <div className={styles.list}>
      <div>
        {items && items.length > 0 && <SmallCardList items={items} type="member"></SmallCardList>}
      </div>
    </div>
  );
};

export default GroupMemberList;
