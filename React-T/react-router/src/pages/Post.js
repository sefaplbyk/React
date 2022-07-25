import { useParams } from "react-router-dom";
const Post = () => {
  const params = useParams();
  // appjs de geçtiğimiz parametreyi use params ile aliyoruz
  return <h1>Post(#{params.postId})</h1>;
};
export default Post;
