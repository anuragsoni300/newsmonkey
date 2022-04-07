import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import apiKey from "../constants/ApiConstants";
import { Navigate } from "react-router-dom";

export class News extends Component {
  static defaultProps = {
    category: 'general',
    authorized: false
  };

  static propTypes = {
    category: PropTypes.string,
    authorized: PropTypes.bool
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 1,
    };
  }

  async componentDidMount() {
    if (this.props.authorized) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${apiKey}&page=1&pagesize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    }
  }

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${apiKey}&page=${this.state.page - 1}&pagesize=20`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    if (parsedData.status === "ok") {
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false
      });
    }
  };

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${apiKey}&page=${this.state.page + 1}&pagesize=20`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    if (parsedData.status === "ok") {
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false
      });
    }
  };

  render() {
    if (!this.props.authorized)
      return <><Navigate to="/login" /></>
    else
      return (
        <div className="container my-3">
          {this.state.loading && <Spinner />}
          <div className="row">
            {this.state.articles.map((element) => (
              <div key={element.urlToImage ? element.urlToImage : element.title} className="col-md-4">
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage ? element.urlToImage : ""}
                  newsUrl={element.url ? element.url : ""}
                  author={element.author ?? "Unknown"}
                  onDate={new Date(element.publishedAt).toGMTString()} />
              </div>
            ))}
          </div>
          <div>
            <div className="container d-flex justify-content-between">
              <button type="button" className="btn btn-sm btn-dark" disabled={this.state.page <= 1} onClick={this.handlePrevious} >&larr;  </button>
              <button type="button" className="btn btn-sm btn-dark" disabled={this.state.totalResults <= this.state.page * 20} onClick={this.handleNext}>Next &rarr;</button>
            </div>
          </div>
        </div>
      );
  }
}

export default News;
