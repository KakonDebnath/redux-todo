import { useAppSelector } from '@/redux/hook';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { useGetTodosQuery } from '@/redux/api/api';
import { useState } from 'react';
import { TTodo } from '@/redux/features/todoSlice';

const TodoContainer = () => {
  const [priority, setPriority] = useState('');
  // for local state
  // const { todos } = useAppSelector((state) => state.todos);

  // for remote state
  const { data, isLoading, error } = useGetTodosQuery(priority);
  return (
    <div>
      <div className="flex justify-between items-center py-3">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className=" bg-primary-gradient w-full rounded-xl p-1">
        <div className="flex flex-col gap-1 bg-white rounded-lg p-2">
          {!data?.data.length && (
            <div>
              <h1 className="bg-white py-10 rounded-xl text-2xl font-bold text-center">
                There are no task pending
              </h1>
            </div>
          )}
          {data?.data?.map(
            (task: {
              _id: string;
              title: string;
              description: string;
              isCompleted: boolean;
              priority: string;
            }) => (
              <TodoCard key={task._id} {...task} />
            )
          )}

          {/* for remote data */}
          {/* {!data.length && (
            <div>
              <h1 className="bg-white py-10 rounded-xl text-2xl font-bold text-center">
                There are no task pending
              </h1>
            </div>
          )}
          {data?.map((task) => (
            <TodoCard
              key={task.id}
              id="task.id"
              title={task.title}
              isCompleted={task.completed}
              description=""
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
