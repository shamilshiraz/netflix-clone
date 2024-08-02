
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Row from './Components/Row/Row'
import {originals,topRated,action,comedy,romance,horror,documentaries} from '../src/constants/urls'



function App() {

  return (
    <>
   <Navbar/>
   <Banner/>
   <Row title='Netflix Originals' url={originals} />
   <Row title='top rated' isSmall url={topRated} />
   <Row title='Action' isSmall url={action}/>
   <Row title='Comedy' isSmall url={comedy}/>
   <Row title='horror' isSmall url={horror}/>
   <Row title='romance' isSmall url={romance}/>
   <Row title='documentaries' isSmall url={documentaries}/>

    </>
  )
}

export default App
