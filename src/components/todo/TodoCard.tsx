import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className="border  rounded-md flex items-center justify-between p-3">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="flex gap-5 items-center">
        <Button className="bg-blue-500 text-white px-2 rounded-md">Edit</Button>
        <Button className="bg-red-500 text-white px-2 rounded-md">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
