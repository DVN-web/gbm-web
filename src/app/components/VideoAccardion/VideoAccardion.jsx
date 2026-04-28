import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function VideoAccardion({arr}){

    return(
        <div className="VideoAccardion">
            {arr.map((obj,i)=>
      <Accordion key={i}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>{obj.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <iframe className="video" src={obj.url} title={obj.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </AccordionDetails>
    </Accordion>
    )}
        </div>
    )
}