import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import { log } from "fcc-express-bground";

export class News extends Component {
  
  constructor() {
    super();
    console.log("Hello i am consrtructor from newsitem");
    this.state = {
      articles : [],
      loading:false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-05-01&sortBy=publishedAt&apiKey=3e3e5fb855ac4dfb9d77ab9dc2f9218e"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }


  render() {
    return (
      <div className="container my-3">
        <h2>New Gorilla Breaking Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col md-4" key={element.url}>
            <NewsItem
              newsUrl = {element.url}
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
            />
          </div> })}
          
        </div>
      </div>
    );
  }
}

export default News;
