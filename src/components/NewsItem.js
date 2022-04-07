import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, onDate } = this.props;
    return (
      <>
        <div className="card my-3">
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://media.istockphoto.com/photos/the-city-of-london-skyline-at-night-united-kingdom-picture-id1312550959?b=1&k=20&m=1312550959&s=170667a&w=0&h=RR30MGnFgyX2LnmvrffOsiaXkhB-oEuMkvtqu4JyVI0="
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {onDate}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
