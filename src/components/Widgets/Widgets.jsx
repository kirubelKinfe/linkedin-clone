import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import './Widgets.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'


const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Coronavirus: ET updates", "Where is corana")}
      {newsArticle("Coronavirus: ET updates", "I do you better Who is corona")}
      {newsArticle("Coronavirus: ET updates", "I do you better Why is corona")}
      {newsArticle("Coronavirus: ET updates", "Where is corana, i do you better Who is corona, i do you better Why is corona")}
    </div>
  )
}

export default Widgets