const Post = ({ title, message, creator, image }: any) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{message}</p>
      {image && (
        <div className="mb-4">
          <img src={`data:image/png;base64,${image}`} alt="Posted" className="max-w-full h-auto rounded-md" />
        </div>
      )}
      <p className="text-gray-500">{creator}</p>
    </div>
  );
};

export default Post;
