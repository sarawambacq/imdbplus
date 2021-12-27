import Head from '../components/Head'
import Navigation from '../components/Navigation'
import NavigationMobile from './NavigationMobile'
import Footer from '../components/Footer'
import styles from "../styles/Layout.module.scss"
import { useRouter } from 'next/router'
import { basePath } from '../next.config'

const Layout = ({ children, locale, locales, data }) => {

  const router = useRouter();

  let title = "FansForBands";
  let description = "FansForBands";
  let sitename="FansForBands";
  let url = router.basePath;
  const hostname="https://fansforbands.vercel.app/"
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
  }
  let image=hostname+"assets/logo-colored-full.png";

  if (data && data.story) {
    if (data.story.content) {
      if (data.story.content.title) {
        title = data.story.content.title;
      } else if (data.story.name) {
        title = data.story.name;
      }
      if (data.story.content.short) {
        description = data.story.content.short;
      } else if (data.story.content.introduction){
          description = data.story.content.intro;
      }
      if(data.story.content.mainpicture){
        image=data.story.content.mainpicture.filename;
      }
      if(data.story.full_slug){
        url = hostname+data.story.full_slug;
      }
    }
  }


  return (
    <div className={styles.layout}>
      <Head title={title} description={description} ogtitle={title} ogdescription={description} ogimage={image} ogurl={url} ogsite_name={sitename}/>
      <div className={styles.head}><Navigation locale={locale} locales={locales}/></div>
      <div className={styles.head}><NavigationMobile locale={locale} locales={locales}/></div>
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  )
}
export default Layout
