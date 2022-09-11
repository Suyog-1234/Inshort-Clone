import React from 'react'
import { Container } from '@mui/system'
import './NewsContainer.css'
import NewsContent from './NewsCard/NewsContent'
const NewsContainer = ({newsArray,newsResults,loadmore,setLoadmore}) => {
  return (
       <Container maxWidth="md">
        <div className='content'>
             <div className='DownBar'>
                  <span>For the best experience use inshorts app on your smartphone</span>
                   <div className='inner'>
                     <a href="https://itunes.apple.com/us/app/news-in-shorts/id892146527"><img src='https://assets.inshorts.com/website_assets/images/appstore.png' alt='appstore'/></a>
                     <a href="https://play.google.com/store/apps/details?id=com.nis.app&amp;referrer=utm_source%3DNews%2520In%2520Shorts%2520Website"><img src='https://assets.inshorts.com/website_assets/images/playstore.png' alt='playstore'/></a> 
                   </div>
             </div>
             { newsArray &&
               newsArray.map((newsItem)=>(
                    <NewsContent newsItem={newsItem} key={newsItem.title}/>
               ))
             }
             {loadmore <= newsResults && (
                    <>
                    <hr/>
                    <button className='loadmoreBtn' onClick={()=>setLoadmore(loadmore+20)}>Load More</button>
                    </>
               )
               }
            
         </div>
       </Container>
  )
}

export default NewsContainer;