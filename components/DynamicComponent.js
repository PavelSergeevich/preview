import Hero from './Hero'
import Placeholder from './Placeholder'
import Page from './Page'
import Prices from './Prices'
import Schedule from './Schedule'
import DanceList from './DanceList'
import Dance from './Dance'
import About from './About'
import Docs from './Docs'


const Components = {
  'hero': Hero, 
  'page': Page, 
  'prices': Prices,
  'schedule': Schedule,
  'dance-list': DanceList,
  'dance': Dance,
  'about': About,
  'docs': Docs,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent
