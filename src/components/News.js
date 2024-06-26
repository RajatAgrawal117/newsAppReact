import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ apiKey, pageSize = 8, country = 'in', category = 'general' }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  //https://gnews.io/api/v4/top-headlines?category=general&apikey=cd47c929c2553197e0ddd399f04dbea2&country
  //https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}
  const updateNews = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${apiKey}&country=${country}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      if (parsedData && parsedData.articles) {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreData = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${apiKey}&country=${country}&page=${page}&pageSize=${pageSize}`;
    setPage(page + 1);
    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      if (parsedData && parsedData.articles) {
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
      }
    } catch (error) {
      console.error('Error fetching more news:', error);
    }
  };

  useEffect(() => {
    updateNews();
  }, [category]);

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
        News Gorilla - Top {capitalizeFirstLetter(category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchMoreData}
        hasMore={articles ? articles.length !== totalResults : false}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles &&
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ''}
                      description={element.description ? element.description : ''}
                      imageUrl={element.image}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  apiKey: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
