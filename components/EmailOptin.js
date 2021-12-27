import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
      {/* {formstate&&<iframe width="540" height="900" src="https://2d1474ad.sibforms.com/serve/MUIEABkaJorUmvR6Nitb_DEWT_ZZKfRBvcjyxn0VrFPbwJSpzjmvq5zgAn7tehNRZbkCRWNdOStpFZeak5H0VGQbv9R8dhIxwSS56jonpgQC7Es96P-2JhuiSiwmrRUsyqmps4FvfKqts4DV3o3Guug52pVJ5MemclMHbko6lylqqR_erbLg28piVdgLz8IsyaLLDzejmoKUw5fl" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>} */}
    </div>
  );
};

export default EmailOptin;
