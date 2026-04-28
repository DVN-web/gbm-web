"use client"
import './GagauzDili.scss'
import VideoAccardion from '@/app/components/VideoAccardion/VideoAccardion'
import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'

const BookCard = ({ title, imageSrc, downloadUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', textAlign: 'center' }}>
      <img className='manualImg' src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <button
        onClick={() => window.location.href = downloadUrl}
        className="manualBut">
        Скачать
      </button>
    </div>
  );
};
export default function GagauzDili (){
    // const arrVideo =[
    //     {
    //         title: "Лекции по изучению гагаузского языка (уровень А1, вводная лекция).",
    //         url: "https://www.youtube.com/embed/eotS3n1HghQ?si=JjFdqwhXN3efyXyV"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка лекция №1 "GAGAUZ ALFABETİ" (уровень А1).',
    //         url: "https://www.youtube.com/embed/07K_n5tNiD4?si=kLumWKulOsT1M9Ra"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №2 "TANIŞMAK" (уровень А1).',
    //         url: "https://www.youtube.com/embed/PiFw0z-ySAw?si=yMV38QsIRpjOLfU9"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №3 "ADLIK" (уровень А1).',
    //         url: "https://www.youtube.com/embed/WSPt7-lGjv8?si=CWiowsu0GAMK9IQ8"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №4 "DEVLET. MİLLET.DİL" (уровень А1).',
    //         url: "https://www.youtube.com/embed/TIQqS9sNke4?si=BeJDm2PceTgJJfAc"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №5 "SAYILIK SAYI SAYILIKLARI" (уровень А1).',
    //         url: "https://www.youtube.com/embed/kAHK9B8GuY4?si=i-hHUzdF7NuRki7_"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №6 "SAYILIK SAYI SAYILIKLARI" (уровень А1).',
    //         url: "https://www.youtube.com/embed/gZafgsAm900?si=PSeeg6IMjlDo3sOA"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №7 "VAR, YOK" (уровень А1).',
    //         url: "https://www.youtube.com/embed/GsVa6Ue_yEg?si=0zSQa0d3e6Hf_Al9"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №8 "ADLIKLARIN BİRLİK HEM ÇOKLUK SAYISI" (уровень А1).',
    //         url: "https://www.youtube.com/embed/vkq9K_ZV4Ck?si=cAaabP6emmExllZX"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №9 "KENDİLİ BİLGİLÄR" (уровень А1).',
    //         url: "https://www.youtube.com/embed/Viaf-80UMbo?si=IKl6l9cSUpu18284"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №10 "AYLÄ" (уровень А1).',
    //         url: "https://www.youtube.com/embed/8UhRHRUygTw?si=Vl-L67KZRsZwaw1I"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №11 "EV hem ADRES" (уровень А1).',
    //         url: "https://www.youtube.com/embed/EHgTnoxjZ-8?si=ycUD2Y-JGMBYtpBp"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №12 "RENKLÄR" (уровень А1).',
    //         url: "https://www.youtube.com/embed/Ybgmxagtuu0?si=oAJzklXNKj6yH7Tc"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №13 "ADERLİK" (уровень А1).',
    //         url: "https://www.youtube.com/embed/fUlojp5L4YA?si=vAz1maX0fNSGA0m-"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №14 "SORUŞ ADERLİKLERİ" (уровень А1).',
    //         url: "https://www.youtube.com/embed/8dV9YiBDVmk?si=SwAfJcvgPVMWy3uf"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №15 "SAAT GÜNÜN SIRASI" (уровень А1).',
    //         url: "https://www.youtube.com/embed/bOvwOkESz3w?si=IzwqkcesJr3_5kfw"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №17 "PARA" (уровень А1).',
    //         url: "https://www.youtube.com/embed/4zb3k_JLkj0?si=0iwgvjV_j3RAlCmT"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №18 "HAFTANIN GÜNNERİ" (уровень А1).',
    //         url: "https://www.youtube.com/embed/astxxGmVUGk?si=TqJ61AZ2_IUhcs97"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №19 "HAVA DURUMU" (уровень А1).',
    //         url: "https://www.youtube.com/embed/mnmpiC-vP60?si=KMgPKyjW5M1WZ2_r"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №20 " YIL ZAMANNARI" (уровень А1).',
    //         url: "https://www.youtube.com/embed/HsaI4KSJGRM?si=e2mmX8ZDjsNssPFw"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №20 "TRANSPORT" (уровень А1)',
    //         url: "https://www.youtube.com/embed/Pguc3IFEVd0?si=jtfaaZPvMB52x6nu"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №21 "UÇAKTA" (уровень А1).',
    //         url: "https://www.youtube.com/embed/Lq3eDnvqqqo?si=JpTba0FSVzmrChEZ"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №22 "İNSANIN GÜÜDESİ" (уровень А1).',
    //         url: "https://www.youtube.com/embed/7OGE0Da6WJU?si=0JQYXX2Iu45reohl"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №23 "İNSANIN ÜZÜ" (уровень А1).',
    //         url: "https://www.youtube.com/embed/7Wafe_2at4o?si=KViFlCIEI6o0YrGU"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №24 "ZANAATLAR" (уровень А1).',
    //         url: "https://www.youtube.com/embed/2YjWwuVix78?si=QdScnJwFpMWVBkif"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция №25 "HOBİLÄR" (уровень А1).',
    //         url: "https://www.youtube.com/embed/8xvOxXhNxUo?si=-LATRvmVZsP0pxRD"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция 26 "HAYVANNAR" (уровень А1).',
    //         url: "https://www.youtube.com/embed/ceusMSbcV6Y?si=lrYM1RT6z5xNAE6A"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция 27 "KUŞLAR" (уровень А1).',
    //         url: "https://www.youtube.com/embed/nHlSWUx1HDY?si=B8b-WkOJGl3Bi6P8"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция 28 "DUUMA GÜNÜ" (уровень А1).',
    //         url: "https://www.youtube.com/embed/H1E64o7eoVQ?si=SuT2rpfU_tGzE0Fu"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция 29 "AYLÄ YORTULARI TEKLİF (уровень А1).',
    //         url: "https://www.youtube.com/embed/UK1e5AWhRRY?si=GgJ3FiYSg59MX2sa"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция 30 "İMEKLÄR. RESTORANDA" (уровень А1).',
    //         url: "https://www.youtube.com/embed/v3Rw8YVlYaE?si=dBsoA9Z8LR4PJ1a-"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция 1 (UUR A2, уровень А2) "İŞLİK İŞLİKLERİN FORMALARI".',
    //         url: "https://www.youtube.com/embed/c6YzQQA-mLo?si=cHeuZ-FOksxhKy6O"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция 2 (UUR A2, уровень А2) "İŞLİK İŞLİİN ZAMANNARI".',
    //         url: "https://www.youtube.com/embed/23L0UJWSwNk?si=AoeUjp6n6TRpTDLY"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка. Лекция 3 (UUR A2, уровень А2) FOLKLOR LEGENDALAR.',
    //         url: "https://www.youtube.com/embed/ofbhmaw1Ygw?si=f_QpY8IHm5zE78Vf"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 4 (уровень А2) GAGAUZ LİTERATURASI GAGAUZ YAZICILARI.',
    //         url: "https://www.youtube.com/embed/jdIQ7X4rNaY?si=5-4gTy5pEoF4zhZ4"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 5 (UUR A2, уровень А2) İŞÄ GİRMÄÄ DEYNİ NE LÄÄZIM.',
    //         url: "https://www.youtube.com/embed/GhC5r81HvdA?si=LFKUdMCgFG3Hfut7"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 6 (UUR A2, уровень А2) Kişinöv – Moldovanın baş kasabası.',
    //         url: "https://www.youtube.com/embed/QjmqFG5WW-U?si=ygiI2zYtANdEbd3j"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 7 (UUR A2, уровень А2) EKOLOGİYA PROBLEMALARI.',
    //         url: "https://www.youtube.com/embed/Eo3Uhhk3pdc?si=tbVYqt9FXLD_qBWF"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 8 (UUR A2, уровень А2) ARTISTIK STILI ARTİSTİK KOLAYLIKLARI UYDURMA.',
    //         url: "https://www.youtube.com/embed/VNiMZQzrbAQ?si=KJibDjZeS3n9Q2Lc"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 9 (UUR A2, уровень А2) KİYAT DÜNNESİ BİBLİOTEKADA.',
    //         url: "https://www.youtube.com/embed/hhze4e7OP6A?si=gaY2QZwCXM4ybDLA"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 10 (UUR A2, уровень А2) MASAL – FOLKLORUN JANRASI İŞLİKLERİN BELLİSİZ GEÇMİŞ ZAMANI.',
    //         url: "https://www.youtube.com/embed/6ngxgg-XY0E?si=mAy8juyQvbTr7VSE"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 11 (UUR A2, уровень А2) MUZIKA İNCÄ ZANAATI MUZIKA İNSTRUMENTLERİ.',
    //         url: "https://www.youtube.com/embed/izqh1ITjyCk?si=7sygnYlKMa5KegU9"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 12 (UUR A2, уровень А2) SPORT OYUNNARI FUTBOL.',
    //         url: "https://www.youtube.com/embed/HJHiu2RAr4g?si=nE6q5f4qVI5v73Br"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 13 (UUR A2, уровень А2) GAGAUZİYA – ANA TARAFIM GENEL BİLGİLÄR.',
    //         url: "https://www.youtube.com/embed/mmnSjrWdpTY?si=7xX7sBGuKx0bKkIw"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 14 (уровень А2) SAALIK HEM GİGİENA İŞHALLIK.',
    //         url: "https://www.youtube.com/embed/YPe9wV0X7mw?si=3aJvLW27_Go53N0j"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 15 (UUR A2, уровень А2) İNSANI KURTARAN İZMETLÄR.',
    //         url: "https://www.youtube.com/embed/rF21qSC2Nz0?si=CtylWwrcheSOrTb6"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 16 (UUR A2, уровень А2) GİNNES REKORDLARI NIŞANNIK.',
    //         url: "https://www.youtube.com/embed/vWZraGqyV90?si=H5RL4a0jIrLXAjkr"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 17 (уровень А2) HEDERLEZ YORTUSU İŞLİKLERİN DÜZÜLMESİ.',
    //         url: "https://www.youtube.com/embed/QiZ4TjPj2A8?si=KWsrZYc9MV1keixf"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 18 (уровень А2) İSTORİYA KATLI İŞLİKLERİN YAZILMASI.',
    //         url: "https://www.youtube.com/embed/wrv_QZ018t0?si=1EnmEG_3nOHNpqA9"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 19 (уровень А2) TEHNİKA.',
    //         url: "https://www.youtube.com/embed/PT3FIS2m_nk?si=xSY6mIpOYnfwXewB"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 20 (уровень А2) İMEK FESTİVALLERİ.',
    //         url: "https://www.youtube.com/embed/zNXjliflnnA?si=GH2IXdMPD-3s7lQ2"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 21 (уровень А2) Faydalı büüyümnär Otlar hem çiçeklär.',
    //         url: "https://www.youtube.com/embed/g2ZHIc1I5Hw?si=W4BwXsJjNxtuUULX"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 22 (UUR A2, уровень А2) ZOOPARKTA.',
    //         url: "https://www.youtube.com/embed/SljT-RWr7PM?si=0HDrcj18UEPrAV0v"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 23 (UUR A2, уровень А2) BAŞARILI OLMAA.',
    //         url: "https://www.youtube.com/embed/J_UsfUDlI4M?si=IV8o8rPolurO2fvx"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 24 (UUR A2, уровень А2) PARA. BANKA İŞİ.',
    //         url: "https://www.youtube.com/embed/E4HGRtTDME4?si=qCKBKawjPP_6m1oj"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 25 (UUR A2) USTACILIK EVELDÄN KALMA ZANAATLAR.',
    //         url: "https://www.youtube.com/embed/XJnjOEIg6ow?si=GwN6zyvTlQbLp5xF"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 26 (UUR A2) GİİYİMNÄR, AYAK KAPLAR, AKSESUARLAR.',
    //         url: "https://www.youtube.com/embed/QR0XSfBamPo?si=e9rQR_gfvM1oqPJN"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 27 (UUR A2) AAZDAN HEM YAZILI SÖZ TEKSTİN TİPLERİ.',
    //         url: "https://www.youtube.com/embed/Mia32gfnUCA?si=mS3f29S6Bab4EGcl"
    //     },
    //     {
    //         title: 'Лекции по изучению гагаузского языка Лекция 28 (UUR A2) TV HEM RADİO.',
    //         url: "https://www.youtube.com/embed/xxXNuWi1sZI?si=WPLV0jEJEFN21iPo"
    //     },
        

        
    // ]

    const books = [
  {
    title: 'Üürenelim Gagauzca! (İs Tefteri A1)',
    imageSrc: '/books/book_A1.jpg',
    downloadUrl: 'https://cloud.mail.ru/public/ZVPh/VBP4KwFmy',
  },
  {
    title: 'Üürenelim Gagauzca! (Üürenmäk Kıyadı A1)',
    imageSrc: '/books/book_A1(1).jpg',
    downloadUrl: 'https://cloud.mail.ru/public/TPwY/EYPPFDGFM',
  },
  {
    title: 'Üürenelim Gagauzca! (İs Tefteri A2)',
    imageSrc: '/books/book_A2.jpg',
    downloadUrl: 'https://cloud.mail.ru/public/SEa2/jJv2vTi67',
  },
  {
    title: 'Üürenelim Gagauzca! (Üürenmäk Kıyadı A2)',
    imageSrc: '/books/book_A2(1).jpg',
    downloadUrl: 'https://cloud.mail.ru/public/rxeV/CM298KJj2',
  },
  {
    title: 'Üürenelim Gagauzca! (İs Tefteri B1)',
    imageSrc: '/books/book_B1.jpg',
    downloadUrl: 'https://cloud.mail.ru/public/DeRs/239Vvd9qg',
  },
  {
    title: 'Üürenelim Gagauzca! (Üürenmäk Kıyadı B1)',
    imageSrc: '/books/book_B1(1).jpg',
    downloadUrl: 'https://cloud.mail.ru/public/JSEu/hDxhtjhci',
  },
  {
    title: 'Üürenelim Gagauzca! (İs Tefteri B2)',
    imageSrc: '/books/book_B2.jpg',
    downloadUrl: 'https://cloud.mail.ru/public/ZgWv/BPyGgmNS2',
  },
  {
    title: 'Üürenelim Gagauzca! (Üürenmäk Kıyadı B2)',
    imageSrc: '/books/book_B2(1).jpg',
    downloadUrl: 'https://cloud.mail.ru/public/EbGX/gUGjsNbSp',
  },
];


    return(
    
        <div >
             <Header/>
                        <div style={{"display":"flex"}}>
                        <Sidebar/>
                        <div className='GagauzDili'>
                        <div>
                            <h1>Лекции по изучению гагаузского языка</h1>
                        </div>
                        <p className='par'>   Gagauziya M.V. Maruneviç adına Bilim-aaraştırma merkezi başlattı hem göstermeyä hazırladı gagauz dilini üürenmää deyni videolekţiyalar kursunu – alarak hesaba halklar arası praktikada kullanılan millet dillerin üürenilmesindä çok uurlu prinţiplarını.
Zamandaş formada siiredicilerä tanıtılan videolekţiyalar vereceklär kolaylık hepsi isteyennerä kendibaşına tanışmaa hem üürenmää zamandaş gagauz dilinin temellerini.
Videolekţiyalar çıkaceklar her pazertesi hem perşembä. Bilim merkezinin saytında da tiparlanaceklar videolekţiyalar kursuna görä didaktika materialları.
Butakım girişim seftä gerçekleştiriler Gagauziyada.
Bizimnän taa kolay üürenmää gagauz dilini. Faydalı hem üüretici siiretmelär!
Научно-исследовательский центр им. М.В. Маруневич инициировал и подготовил к демонстрации курс обучающих видео лекций по гагаузскому языку - с учетом требований существующего в международной практике принципа разно уровневого подхода к изучению национальных языков.
Доступно представленные широкой аудитории, в современной форме, видео лекции дадут возможность всем желающим ознакомиться и изучить основы современного гагаузского языка самостоятельно.
Видео лекции будут выходить в эфир каждый понедельник и четверг. На сайте Научного центра будут дополнительно опубликованы дидактические материалы к вышеуказанному курсу виде лекций.
Данная инициатива реализуется в Гагаузии впервые.
С нами изучать гагаузский язык легче. Полезного и познавательного Вам просмотра!</p>
            
            <div className='manualBooks'>
                <h2 style={{"margin": "0 auto", "width": "fit-content"}}>ДИДАКТИЧЕСКИЕ МАТЕРИАЛЫ К КУРСУ ВИДЕОЛЕКЦИЙ ПО ИЗУЧЕНИЮ ГАГАУЗСКОГО ЯЗЫКА</h2>
                <div style={{"display": "flex", "flexWrap":"wrap", "justifyContent": "center"}}>
                {books.map((book, index) => (
        <BookCard key={index} title={book.title} imageSrc={book.imageSrc} downloadUrl={book.downloadUrl} />
      ))}
      </div>
            </div>
            <div>
              <h2 style={{"margin": "40px auto", "width": "fit-content"}}>Лекции</h2>
                </div>
                </div>
                </div>
                <Footer/>
        </div>
    )
}