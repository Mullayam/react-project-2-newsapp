import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Preloader from "./loader";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
 const [news, setNews] = useState([])
 const [loading, setLoading] = useState(false)
 const [page, setPage] = useState(1)
 const [totalResults,  settotalResults] = useState(0)
   
  const updateNews= async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    setLoading({ loading: true });
    props.setProgress(45);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();
    props.setProgress(70);
    setNews(parsedData.articles)
    settotalResults(parsedData.totalResults)
     setLoading(false)    
       
       
    
    props.setProgress(100);
  } 
  useEffect(() => {
    let string =props.category     
    document.title= string.charAt(0).toUpperCase()+string.slice(1)
 updateNews();
  
    
  },[])
  
  // async componentDidMount() {
  //   updateNews();
  // }

 const fetchMoreData  = async() => { 
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
 // setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();   
    setNews(news.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
     
    
    
  };
  // const prevPage = async () => {
  //   // console.log("prev");

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page-1}&pageSize=${props.pageSize}`;
  //   // setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // setState({
  //   //     page:page - 1,
  //   //     news:parsedData.articles,
  //   //     loading:false
  //   // })
  //   setState({
  //     page: page - 1,
  //   });
  //   updateNews();
  // };

  // const nextPage = async () => {
  //   // console.log("next");
  //   // if(!(page + 1 > Math.ceil(totalResults/props.pageSize))){
  //   //  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
  //   // setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // setState({
  //   //     page:page + 1,
  //   //     news:parsedData.articles,
  //   //     loading:false
  //   // })

  //   //   }
  //   setState({
  //     page: page + 1,
  //   });
  //   updateNews();
  // };

 
    return (
      <div className="container my-4 col-8 mt-2">
        <h1 className="text-center" style={{marginTop:"70px"}}>Top Headlines</h1>
        <hr></hr>
        {/* {loading && <Preloader />} */}
        <InfiniteScroll
        dataLength={news.length}
        next={fetchMoreData}
        hasMore={news.length !== totalResults}
        loader={<Preloader />}        
        >

       
       <div className="contianer">
       <div className="row">
          { 
            news.map((e) => {
              return (
                <div className="col-lg-4 col-md-6  my-1" key={e.url}>
                  <NewsItem 
                  key={e.source.id}
                    title={e.title.slice(0, 40)}
                    description={e.description.slice(0, 70)}
                    imgUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
        </div>
       </div>
        </InfiniteScroll> 
        {/* <div className="container-fluid mt-4">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item">
                <button
                  disabled={page <= 1}
                  onClick={prevPage}
                  className="btn btn-dark text-light"
                >
                  &larr; Previous
                </button>
              </li>
              <li className="page-item">
                <button
                  disabled={
                    page + 1 >
                    Math.ceil(totalResults / props.pageSize)
                  }
                  onClick={nextPage}
                  className="btn btn-dark text-light"
                  href="#"
                >
                  Next &rarr;
                </button>
              </li>
            </ul>
          </nav>
        </div> */}
      </div>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "in",
};
export default News;
