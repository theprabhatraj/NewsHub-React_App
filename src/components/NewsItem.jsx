import React from "react";

const NewsItem = (props) => {
  let { title, description, url, imgUrl, author, publishedAt, name } = props;
  return (
    <div className="my-4">
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="badge bg-danger">{name}</span>
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-primary">
            Read More
          </a>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} updated at {new Date(publishedAt).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
