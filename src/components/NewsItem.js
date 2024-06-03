import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
        
      <>
        <div className="card" style={{width: "20rem"}}>
            <img src={!imageUrl?"https://securityaffairs.com/wp-content/uploads/2024/05/BBC-logo.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
            </div>
        </div>
     </>
    )
  }
}

export default NewsItem
