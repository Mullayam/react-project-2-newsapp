import React,{useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';
 
export default function App(){
  const pageSize=6
  const apiKey= process.env.REACT_APP_NEWS_API_KEY
  const [progress, setProgress] = useState(0)
  
   
 
    return (
      <div>        
        <LoadingBar
        color='#042743'
        progress={progress}
        height={2}
        />
        {/* {progress}
        onLoaderFinished= */}
       
        <Navbar />       
        <News apiKey={apiKey} pageSize={pageSize} setProgress={setProgress} category="entertainment"/>

      </div>
    )
  
}
