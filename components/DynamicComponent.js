import Hero from './Hero'
import FeaturedPosts from './FeaturedPosts'
import Placeholder from './Placeholder'
import Page from './Page'
import Table from './Table'
import Prices from './Prices'


const Components = {
  'hero': Hero, 
  'featured-posts': FeaturedPosts,
  'page': Page, 
  'table': Table,
  'prices': Prices
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent
