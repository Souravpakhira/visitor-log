import React, { useEffect, useState } from "react";
import axios from "axios";
const News = () => {
  const [news, setNews] = useState([]);
  const [totalpg, setTotalpg] = useState();
  const [page,setPage] = useState(1)
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&page=${page}&apiKey=560a84d33c8e47f598965c5326bc473e`
        )
        .then((res) => {
          setNews(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();

  }, [page]);

  useEffect(() => {
     axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=560a84d33c8e47f598965c5326bc473e`
    )
    .then((res) => {
        setTotalpg(parseInt(res.data.totalResults));
    })
    
  }, [])

  const onLoadmore=()=>{
      let count = totalpg
      count = count - 20
      setPage(page + 1)
      setTotalpg(count)
     
  }

  return (
    
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {news.map((article) => {
        const card = (
          <div class="col">
            <div class="card h-100">
              <img src={article.urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{article.title}</h5>
                <p class="card-text">{article.description}</p>
              </div>
              <a href={article.url} target="_blank" class="btn btn-primary">
                Read more
              </a>
              <div class="card-footer">
                <small class="text-muted">
                  Published at {article.publishedAt}
                </small>
              </div>
            </div>
          </div>
        );

        return card;
      })}

       {
           totalpg > 20 ? <div class="d-grid gap-2 col-6 mx-auto">
           <button type="button" class="btn btn-info center" onClick={onLoadmore}>
             More
           </button>
         </div> : ""
       }
      
    </div>
  );
};

export default News;
