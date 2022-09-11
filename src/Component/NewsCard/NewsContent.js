import React from 'react'
import './NewsContent.css'
const NewsContent = ({newsItem}) => {
  const fulldate=new Date(newsItem.publishedAt)
  const date=fulldate.toString().split(" ");
  let hour=parseInt(date[4].substring(0,2))
  if(hour<10){
     hour="0"+hour;
  }
  const time=hour>12 ? true:false
  
  

  return (
    <div className='News_box'>
           <div className='News_Image'> 
            <img src={newsItem.urlToImage?newsItem.urlToImage:"http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?mobile=1&source=%2f%5Flayouts%2Fmobile%2Fdispform%2Easpx%3Flist%3d78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"} alt={newsItem.title} className='NewsImage'/>
            </div>
           <div className='News_Text'>
                  <span className='title'>{newsItem.title}</span><br/>
                  <span className='URL'><a href={newsItem.url}><b>Short</b></a>by{newsItem.author?newsItem.author:"unknown"}
                    /{
                       time?`${hour-12}:${date[4].substring(3,4)} pm on ${date[2]} ${date[1]} ${date[3]},${date[0]}`:`${hour}:${date[4].substring(3,4)} am on ${date[2]} ${date[1]} ${date[3]},${date[0]}`
                    }
                    </span><br/>
                  <div className='lower_text'>
                   <span className='description'><span>{newsItem.description}</span></span>
                   <p>read more at <a href={newsItem.url}>{newsItem.source.name}</a></p>
                  </div>
                
           </div>
    </div>
  )
}

export default NewsContent
