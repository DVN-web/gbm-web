"use client"
import Button from '@mui/material/Button'
import './ArticleList.scss'
import { openImageFullscreen } from "@/app/utils/openImageFullscreen";

const ArticleCard = ({ article }) => {
 function revertDateFormat(dateString) {
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    return `${parts[2].padStart(2, '0')}.${parts[1].padStart(2, '0')}.${parts[0]}`;
}
  const imageUrl = `${article.preImage.url}`
  return (
    <div  style={{"display": "flex", "flexDirection": "column", "aligItems": "center"}}>
      <div className="headDate" style={{"display": "flex", "alignItems": "center", "margin": "10px", "color": "#1976d2", "position": "relative"}}>
      <h2 className='date'>{revertDateFormat(article.date)}</h2>
      <h3 className="hLine" style={{"width": "100%", "marginLeft": "10px", "color": "#000", "fontSize": "20px"}}>{article.title}</h3>
      </div>
      <img src={imageUrl} className="preViewImg" alt="preViewImg"  onClick={(e) => openImageFullscreen(e.currentTarget.src)} />
      <div style={{'width': '100%', 'display': 'flex', 'justifyContent': 'center', 'padding': '10px'}}><a href={`/article/${article.documentId}`}><Button variant="outlined">Перейти</Button></a></div>
      <div style={{"width": "100%", "height": "1px", "backgroundColor": "#000", "margin": "10px"}}></div>
    </div>
  );
};

export default ArticleCard;