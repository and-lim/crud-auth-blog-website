import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="lg:max-w-[1000px] w-full mx-auto py-20 ">
      <h1 className="text-3xl font-extrabold mb-10">Our Blog List</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 ">
        {data.map((blog) => (
          <div key={blog.id}>
            <div className="shadow-lg">
              <img
                className="h-44 w-full object-cover"
                alt=""
                src={blog.thumbnailUrl}
                srcset=""
              />
              <div className="caption p-3">
                <h1 className="text-3xl font-bold">{blog.title}</h1>
                <p className="text-slate-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium error harum laboriosam earum accusamus nulla in
                  tenetur fuga porro illum, corporis perferendis enim beatae!
                  Harum necessitatibus corporis velit dolore sed.
                </p>
                <div className="text-end">
                  <Link className="text-black fw-bolder hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </section>
  );
};

export default List;
