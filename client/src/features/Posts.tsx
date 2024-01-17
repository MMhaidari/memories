import { useGetAllMemoriesQuery } from "../api/services/memoriesApi";
import Post from "../components/Post";

const Posts = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
  } = useGetAllMemoriesQuery("");

  let content;

  if (isLoading) {
    content = <div className="text-center mt-8">Loading...</div>;
  } else if (isSuccess) {
    content = posts.data.map((post: any) => (
      <div key={post._id} className="mb-4">
        <Post
          image={post.selectedFile}
          key={post.id}
          title={post.title}
          message={post.message}
          creator={post.creator}
        />
      </div>
    ));
  }

  return <div className="max-w-2xl mx-auto mt-8">{content}</div>;
};

export default Posts;
