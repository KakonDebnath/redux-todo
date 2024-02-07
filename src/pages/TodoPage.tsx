import TodoContainer from '@/components/todo/TodoContainer';
import Container from '@/components/ui/container/Container';

const TodoPage = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold py-10">My Todo App</h1>
      <TodoContainer />
    </Container>
  );
};

export default TodoPage;
