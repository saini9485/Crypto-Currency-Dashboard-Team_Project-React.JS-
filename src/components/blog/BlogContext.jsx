import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const [data, setData] = useState();

  const apiKey = `pub_1349101d3b81b19728d683c498eaa2b57948a`;

  useEffect(() => {
    axios
      .get(
        ` https://newsdata.io/api/1/news?apikey=${apiKey}&q=Cryptocurrency&language=en `
      )
      .then((response) => setData(response.data))
      .catch((error) => {return error});
  }, []);

  return (
    <BlogContext.Provider value={{data}}>
      {props.children}
    </BlogContext.Provider>
  );
};
