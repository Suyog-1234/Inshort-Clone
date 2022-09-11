
import { useEffect, useState} from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import axios from 'axios';
import NewsContainer from './Component/NewsContainer';
import apiKey from './Data/ApiKey';
import Footer from './Component/Footer';
function App() {
  const [category,setcategory]=useState("general")
  const [newsArray,setNewsArray]=useState('');
  const [newsResults,setNewsResults]=useState('')
  const [loadmore,setLoadmore]=useState(20)
  const data = async()=>{
       try {
          const apiData= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apikey=${apiKey}&category=${category}&pageSize=${loadmore}`)
          setNewsArray(apiData.data.articles);
          setNewsResults(apiData.data.totalResults)
       } catch (error) {
         console.log(error)
       }
  }
  useEffect(()=>{
    data()
  },[newsResults,category,loadmore])
  return (
    <div className="App">
          <NavBar SetCategory={setcategory} setLoadmore={setLoadmore}/>
          <NewsContainer newsArray={newsArray} newsResults={newsResults} loadmore={loadmore} setLoadmore={setLoadmore}/>
          <Footer />
    </div>
  );
}

export default App;
