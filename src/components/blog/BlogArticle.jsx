import React, { useContext } from "react";
import DotLoader from "react-spinners/ClipLoader";

import { BlogContext } from "./BlogContext";

import "../../styles/Blog.css";

const BlogArticle = (props) => {
  const { data } = useContext(BlogContext);

  const default__img = `https://media.istockphoto.com/id/904658652/es/foto/litecoin-y-bitcoin-etereum.jpg?s=612x612&w=0&k=20&c=BTQ1dso4v_nC5rFe93UH_xvXwZAdX5iiOxrOuFGN1BI=`;

  return (
    <>
      <div className="header__text">
        <h1>Crypto Blog</h1>
        <p>Get crypto market updates every day</p>
      </div>

      <div className="separator"></div>

      <div className="all__blogs">
        {data ? (
          data.results.map(({image_url, title, description, creator, link, country, pubDate}) => {
            // const {image_url, title, description, creator, link, country, pubDate} = blog;
            return (
              <>
                <div className="blogs">
                  <div className="blog__img">
                    <img
                      src={image_url ? image_url : default__img}
                      alt="image"
                    />
                  </div>
                  <div className="blog__content">
                    <h1 className="blog__title">{title}</h1>
                    <p className="blog__desc">{description}</p>
                    <div className="more__info">
                      <span className="blog__author">
                        <b>Author :</b> {creator}
                      </span>{" "}
                      <a href={link} className="readMore" target="_blank">
                        Read More...
                      </a>
                    </div>
                    <br />
                    <span className="blog__country">{country}</span>
                    <span className="blog__published">{pubDate}</span>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <DotLoader color="#36d7b7" size={70} />
        )}
      </div>
    </>
  );
};

export default BlogArticle;
