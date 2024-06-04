import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "20rem" }}>
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%" }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://securityaffairs.com/wp-content/uploads/2024/05/BBC-logo.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </a>
            <p className="card-text">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(publishedAt).toGMTString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
