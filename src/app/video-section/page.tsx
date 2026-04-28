
import VideoAccardion from '@/app/components/VideoAccardion/VideoAccardion'
import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
export default function VideoSection(){

     const arrVideo = [
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №1",
            url: "https://www.youtube.com/embed/5mVKYyo1DIM?si=XpW3T029zaYhKcx_"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №2",
            url: "https://www.youtube.com/embed/AC7DjDrkur8?si=nGr2jIJseR2UvoXr"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №3",
            url: "https://www.youtube.com/embed/KHtoAVsb8m4?si=e2CEVVCuCcjM0X6s"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №4",
            url: "https://www.youtube.com/embed/Jgs4i5edNaI?si=PbV6SS4naYuNoCit"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №5",
            url: "https://www.youtube.com/embed/y4xhwAi2FJ4?si=2UjVmWXiZNq36wZ_"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №6",
            url: "https://www.youtube.com/embed/x5fZysuEnjE?si=GrwPak6nRSYwlVEX"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №7",
            url: "https://www.youtube.com/embed/cZjITysBhQQ?si=s7PRj2B13XaWMjuB"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №8",
            url: "https://www.youtube.com/embed/FrDkolGynhg?si=kXY9P0rWL5fg2M6B"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №9",
            url: "https://www.youtube.com/embed/g6yxoNczSWc?si=2WCcG80eLq1MGRcR"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №10",
            url: "https://www.youtube.com/embed/rTYrsg2zkWs?si=rKkz2cnNEfZN3o9s"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №11",
            url: "https://www.youtube.com/embed/OEn0WrVBDQY?si=fj_qhb7sVRfpe57C"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №12",
            url: "https://www.youtube.com/embed/w7PMSiH4vPw?si=CJ_3_C9WvEjz6TSc"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №13",
            url: "https://www.youtube.com/embed/qxw20NPtMjc?si=V-CxwFoYK13927ov"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №14",
            url: "https://www.youtube.com/embed/-JBFBE1ZIlA?si=bOSX0cVVhAnkG6GW"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №15",
            url: "https://www.youtube.com/embed/n3U2zoKQMsQ?si=2k_fGR8Z94q38TJL"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №16",
            url: "https://www.youtube.com/embed/enjv1hZnMfs?si=vTTxlWUEruQiqcez"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №17",
            url: "https://www.youtube.com/embed/G-fmFIHeqCk?si=h_s42VvSoqaOJlhM"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №18",
            url: "https://www.youtube.com/embed/JspQg0GOM0w?si=rOB6bT2qDFV_MzQB"
        },
        
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №19",
            url: "https://www.youtube.com/embed/g2jmCD0XrJQ?si=qEc9lvLT1-jJ6nbY"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №20",
            url: "https://www.youtube.com/embed/b5oHoyeHrL4?si=KfyukljITn3UWOUf"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №21",
            url: "https://www.youtube.com/embed/17aI02z1fvA?si=vttXonfm2cCw2f-R"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №22",
            url: "https://www.youtube.com/embed/-TASgUuum9A?si=0pEtTPwZWtaJ7sOc"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №23",
            url: "https://www.youtube.com/embed/rFtbCWo6xP8?si=czUQahpFtJ9HjBGR"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №24",
            url: "https://www.youtube.com/embed/ySJPbkLqCns?si=AtWBrdHKCUs8fTMu"
        },
        {
            title: "ВИДЕОПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ ВЫПУСК №25",
            url: "https://www.youtube.com/embed/jr8EOj3ip00?si=qqYZxsu9YjLnAW34"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 26 ",
            url: "https://www.youtube.com/embed/U_3OiCqbvzY?si=8LO2WJVDQiFsy-Tp"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 27",
            url: "https://www.youtube.com/embed/XgMWoqnzLsM?si=TU4BZEWDizUbob9F"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 28 ",
            url: "https://www.youtube.com/embed/yjbvknFnGM4?si=0KrWSWWzSNcq84H2"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 29 ",
            url: "https://www.youtube.com/embed/e3eN17LwI2w?si=6LPWyiqdONMcVBe4"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 30 ",
            url: "https://www.youtube.com/embed/M3iFSHxQbN4?si=6vCmwNA93-rcT9MG"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 31 ",
            url: "https://www.youtube.com/embed/vb9IRrES0No?si=LPuz7B47bSSnezAt"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 32 ",
            url: "https://www.youtube.com/embed/FxPgPCB1OFA?si=t6PIqHDpFlm_4hBX"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 33 ",
            url: "https://www.youtube.com/embed/l34FaCwhmQA?si=vhj2kfFawgbxcGP0"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 34 ",
            url: "https://www.youtube.com/embed/60plDdxr6R8?si=NkaRogXDCOAYYGic"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 35 ",
            url: "https://www.youtube.com/embed/5OY0hrkVyWE?si=y-W1wq4PFp7j5hzO"
        },
        {
            title: "Gagauziya BAM basımnarın video tanıtımı № 36 ",
            url: "https://www.youtube.com/embed/GCjcaatBCJ4?si=av6UrL6AgNFdvY0g"
        }

    ]
    return(
        <div>
            <Header/>
            <div style={{"display":"flex"}}>
            <Sidebar/>
            <div className="VideoSection">
            <div>
                <h1>ВИДЕО ПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ ГАГАУЗИИ</h1>
            </div>
            <p className='par'>Мы рады Вам сообщить, что Научно-исследовательский центр Гагаузии им. М. В. Маруневич запускает новый проект по популяризации изданий центра &quot;ВИДЕО ПРЕЗЕНТАЦИИ ИЗДАНИЙ НИЦ&quot;.
  Скоро на нашем сайте, в Youtube и Facebook, будет опубликована серия видео роликов с краткой аннотацией публикаций и представлен наглядно материал, который вошел в основу книг, изданных под эгидой НИЦ Гагаузии. <br />
  Мы будем рады представить вашему вниманию самые яркие, интересные и полезные издания.</p>

<iframe className="video" src="https://www.youtube.com/embed/vqUry-IsOlw?si=aBTOfxHZ3wtbFC5C" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
<div>
     <VideoAccardion arr={arrVideo}/>
     
    </div>
    </div>
    </div>
    <Footer/>
        </div>
    )
}