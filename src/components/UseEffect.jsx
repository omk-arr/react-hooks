import { useEffect, useState } from "react";

function UseEffect() {
  // 1. useEffect to run on every render
  //   useEffect(() => {
  //     alert("Runs on every render");
  //   });

//   2. useEffect runs according to the dependecies
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     alert("Runs when count is changed");
  //   }, [count]);

//   3. useEffect runs on the first render 
  //   useEffect(() => {
  //     alert("Runs only on the first render");
  //   });

  // Counter that increases every second
  const [secondCounter, setSecondCounter] = useState(0);
  useEffect(() => {
    let tick = () => {
      setSecondCounter(secondCounter + 1);
    };
    let timer = setInterval(tick, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [secondCounter]);

//   4. Data fetching using useEffect
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/photos");
      const dataJson = await data.json();
      setImgs(dataJson);
    }
    fetchData();
  }, []);

  //Fetch data from API 2
  const [post, setPost] = useState({});
  const [id, setId] = useState("1");
  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(await res.json());
    }
    fetchPost();
  }, []);
  return (
    <div>
      <h3>useEffect Hook</h3>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h4>Counter that is increased every second</h4>
      <h4>{secondCounter}</h4>

      <label htmlFor="postId">Post ID</label>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
        id="postId"
      />
      <h4>
        Fetched post {id}: {post.title}
      </h4>
      <h4>Images from an api call</h4>
      <ul>
        {imgs.map((img) => (
          <li key={img.id}>{img.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default UseEffect;
