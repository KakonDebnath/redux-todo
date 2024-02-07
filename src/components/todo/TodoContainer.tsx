import { useAppSelector } from '@/redux/hook';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { useGetTodosQuery } from '@/redux/api/api';

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const { data, isLoading, error } = useGetTodosQuery(undefined);
  
  return (
    <div>
      <div className="flex justify-between items-center py-3">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className=" bg-primary-gradient w-full rounded-xl p-1">
        <div className="flex flex-col gap-1 bg-white rounded-lg p-2">
          {!todos.length && (
            <div>
              <h1 className="bg-white py-10 rounded-xl text-2xl font-bold text-center">
                There are no task pending
              </h1>
            </div>
          )}
          {todos.map((task) => (
            <TodoCard key={task.id} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
