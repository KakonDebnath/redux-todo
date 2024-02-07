const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex items-center justify-between p-3">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="flex gap-5 items-center">
        <button className="bg-blue-400 text-white px-2 rounded-md">Edit</button>
        <button className="bg-red-400 text-white px-2 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
