import TodoCard from './TodoCard';

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button> Add Todo</button>
        <button> Filter</button>
      </div>
      <div className="bg-red-500 w-full h-[500px] rounded-xl p-5 flex flex-col gap-1">
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
  );
};

export default TodoContainer;
