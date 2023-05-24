import axios from "axios";
import React, { useEffect, useState } from "react";

function SearchFunctionality() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchdata = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log("data", response.data);
        setPost(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

    let newdata=post
//   console.log(post);
  //   console.log("ddd",newdata)
  const handleClick = () => {
    if (search === "") {
      setPost(post);
      return;
    }
    const filtersearch = newdata.filter((item) => {
        // console.log("item",item)
        if ((item.title).toLowerCase()
                    .includes(search.toLowerCase())) { return item; }
            })

    setPost(filtersearch);
    if (search === "") {
        setPost(newdata)
    }
  };

  //   function handleSearchClick() {
  //     if (searchVal === "") { setProducts(productList); return; }
  //     const filterBySearch = productList.filter((item) => {
  //         if (item.toLowerCase()
  //             .includes(searchVal.toLowerCase())) { return item; }
  //     })
  //     setProducts(filterBySearch);
  // }
  return (
    <div>
      <h1>Search functionality practise</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label>search here</label>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="searvh todo"
          type="text"
        />
        <button onClick={handleClick}>check</button>
      </div>
      {post.map((elem, id) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "120px",
              width: "100%",
              border: "2px solid black",
              margin: "2px 2px",
            }}
          >
            <h3>{elem.id} : </h3>
            <h3> {elem.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default SearchFunctionality;
