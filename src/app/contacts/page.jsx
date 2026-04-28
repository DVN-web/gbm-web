import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import './Contacts.scss'

export default function Contacts(){


    return(
        <div>
            <Header/>
        <div style={{"display": "flex"}}>
            <Sidebar/>
            <div className="Contacts">
            <p>GAGAUZİYA M.V. MARUNEVİÇ ADINA BİLİM-AARAŞTIRMA MERKEZİ</p>
            <p>Республика Молдова, АТО Гагаузия,</p>
            <p>мун. Комрат, ул. Победы 58,</p>
            <p>здание Comrat City четвертый этаж</p>
            <p>тел.: +373 298 2-29-30</p>
            <p>тел./факс: +373 298 2-29-89</p>
            <p>e-mail: <a href="mailto:gagauzbilim@hotmail.com" className="blueLink" >gagauzbilim@hotmail.com</a> </p>
            <iframe
  title="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2215.3907180563074!2d28.657505123641297!3d46.29801624463861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b627544f4fffff%3A0x6f77522bf930414!2z0JrQvtC80YDQsNGCINCh0LjRgtC4!5e1!3m2!1sru!2s!4v1725884496739!5m2!1sru!2s"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade" // Исправлено здесь
></iframe>
        </div>
        </div>
        <Footer/>
        </div>
    )
}