import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Header'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import ArticleList from './components/ArticleList/ArticleList'
import SimpleSlider from './components/SimpleSlider/SimpleSlider'

export default function Home(){
  
  return(
    <div className="Home">
      <Header/>
      <SimpleSlider/>
      <div style={{"display": "flex"}}>
      <Sidebar/>
      <ArticleList/>
      </div>
      <Footer/>
    </div>
  )
}