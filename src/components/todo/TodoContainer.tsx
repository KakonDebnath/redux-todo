import { Button } from '../ui/button';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-3">
        <AddTodoModal />
        <Button className="bg-primary-gradient"> Filter</Button>
      </div>
      <div className=" bg-primary-gradient w-full rounded-xl p-1">
        <div className="flex flex-col gap-1 bg-white rounded-lg p-2">
          {/* <div>
          <h1 className="bg-white py-10 rounded-xl text-2xl font-bold text-center">
            Their are no task pending
          </h1>
        </div> */}
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
