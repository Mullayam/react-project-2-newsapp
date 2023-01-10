import React from 'react'

const NewsItem = (props)=> {
   
 
    let {title,description,imgUrl,newsUrl,author,date,source}= props
    return (
      <div>
       <div className="card">
  <img src={imgUrl?imgUrl:'https://letusstudy.in/clientside/images/no-image.png'} className="card-img" />
  <div className="card-img-overlay">
    <span className="badge bg-dark">{source}</span>
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>

    <p className="card-text"><small className="text-muted">By: {author?author:"Unknown"} on 
      {new Date(date).toGMTString()}</small></p> 
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More...</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem