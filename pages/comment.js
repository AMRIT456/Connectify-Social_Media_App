import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  return (
    <div className="bg-white p-2.5 mb-3.5 rounded-lg border-2 border-blue-900">
        <div className="flex ">
            <span className="font-bold  text-gray-400 ">{comment.user.name}</span>
            <span className="ml-2 text-blue-700  font-semibold text-xs">a minute ago</span>
            <span className="ml-2  text-gray-400  text-xs">22</span>
        </div>
        <div className="mt-2  text-gray-400 ">{comment.content}</div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
