import Teaser from './Teaser'
import Feature from './Feature'
import FeaturedPosts from './FeaturedPosts'
import Grid from './Grid'
import Placeholder from './Placeholder'
import PostsList from './PostsList'
import Page from './Page'
import BlogPost from './BlogPost'
import Text from './Text'
import Group from './Group'
import Personality from './Personality'
import Studio from './Studio'
import Genre from './Genre'
import NewsItem from './NewsItem'
import FrontpageSlideshow from './FrontpageSlideshow'
import Intro from './Intro'
import GroupList from './Grouplist'
import NewsItemList from './NewsItemList'
import PersonalityList from './PersonalityList'
import ProductList from './ProductList'
import Product from './Product'
import EmailOptin from './EmailOptin'
import TwoCol from './TwoCol'
import Title from './Title'
import TopMovies from './TopMovies'
import MemberList from './MemberList'
import GroupMemberList from './GroupMemberList'
import Member from './Member'
import GroupHistoryList from './GroupHistoryList'
import History from './History'
import AlbumList from './AlbumList'
import GroupAlbumList from './GroupAlbumList'
import Album from './Album'

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'featured-posts': FeaturedPosts,
  'page': Page,
  'post': BlogPost,
  'text': Text,
  'selected-posts': PostsList,
  'group': Group,
  'memberlist': MemberList,
  'member': Member,
  'groupmemberlist': GroupMemberList,
  'grouphistorylist': GroupHistoryList,
  'personality': Personality,
  'studio': Studio,
  'genre' : Genre,
  'newsitem': NewsItem,
  'frontpageslideshow':FrontpageSlideshow,
  'intro':Intro,
  'grouplist':GroupList,
  'newsitemlist':NewsItemList,
  'productlist':ProductList,
  'productcategory':Placeholder,
  'personalitylist':PersonalityList,
  'product':Product,
  'emailoptin':EmailOptin,
  'twocol':TwoCol,
  'title':Title,
  'topmovies':TopMovies,
  'historyitem': History,
  'albumlist': AlbumList,
  'groupalbumlist': GroupAlbumList,
  'album': Album
}


const DynamicComponent = ({ data, locale }) => {
  let componentType='undefined';
  let level = 'undefined';
  if(data&&data.story&&data.story.content){
    componentType = data.story.content.component;
    level='data';
  } else if(data&&data.component){
    componentType = data.component;
    level='content';
  }
  if (componentType !== 'undefined') {
    const Component = Components[componentType]
    return <Component data={data} level={level} locale={locale}  />
  }
  return <Placeholder componentName={componentType}/>
}

export default DynamicComponent
