"use client"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import Image from 'next/image'

export default function ManagementStructure(){

    const planArr = [
        {
            img:"/plan/plan_2018.jpg",
            url:"https://cloud.mail.ru/public/CepE/f61sDgSqv",
            id: "planImage1"
        },
        {
            img:"/plan/plan_2019.jpg",
            url:"https://cloud.mail.ru/public/SGpB/DGDyuC6Vb",
            id: "planImage2"
        },
        {
            img:"/plan/plan_zakupok_2025.jpg",
            url:"https://cloud.mail.ru/public/cMo5/D69qZ2Vbm"
        },
        {
            img:"/plan/plan_zakupok_2024.jpg",
            url:"https://cloud.mail.ru/public/4q5X/qEzXVrXBD"
        },
        {
            img:"/plan/0001.jpg",
            url:"#"
        },
        {
            img:"/plan/0002.jpg",
            url:"#"
        },
        {
            img:"/plan/plan_zakupok.jpg",
            url:"#"
        },
        {
            img:"/plan/plan.jpg",
            url:"#"
        },
        {
            img:"/plan/zakupki_1_2021.jpg",
            url:"#"
        },
        {
            img:"/plan/zakupki_2_2021.jpg",
            url:"#"
        },
        {
            img:"/plan/plan_zakupok_2020.jpg",
            url:"#"
        },
      
    ]
    return(
        <div>
            <Header/>
            <div style={{"display": "flex"}}>
                <Sidebar/>
                <div className="PlanOfWork">
                    <div className='title'>
                        <h1>План работы центра</h1>
                    </div>
                    <div>
                        <h3> УСТАВ Научно-исследовательского центра Гагаузии им. М.В. Маруневич <a href="https://cloud.mail.ru/public/MpxS/BSsvBdqVw">Скачать</a></h3>
                        
                    </div>
                    <div className='otcetList'>
                        {planArr.map(obj=>(
                            <a id={obj.id} key={obj.img} href={obj.url}>
                                <Image
                                    className='otcetLink'
                                    src={obj.img}
                                    alt=""
                                    width={300}
                                    height={400}
                                />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}