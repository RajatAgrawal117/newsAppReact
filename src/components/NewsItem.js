import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } = this.props;
    return (
      <div className="my-3">
        <div className="card news-card" style={styles.card}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={styles.badge}>
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
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Read More
            </a>
            <p className="card-text">
              By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  card: {
    width: "20rem",
    backgroundColor: "#f8f9fa",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  badge: {
    left: "90%",
  },
  hoverEffect: {
    transform: "translateY(-10px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

const addHoverEffect = () => {
  const cards = document.querySelectorAll('.news-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      Object.assign(card.style, styles.hoverEffect);
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
};

document.addEventListener('DOMContentLoaded', addHoverEffect);

export default NewsItem;
