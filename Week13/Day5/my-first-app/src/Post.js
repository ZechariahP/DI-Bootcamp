const Post = (props) => {
console.log(props);  
    return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.sub}</h2>
        <p>{props.body}</p>
    </div>
  );
};

export default Post;