import { useAppDispatch } from '@/redux/hook';
import { Button } from '../ui/button';
import { deleteTodo, toggleCompleteTodo } from '@/redux/features/todoSlice';
import {
  useDeleteTodoMutation,
  useToggleCompleteTodoMutation,
  useUpdateTodoMutation,
} from '@/redux/api/api';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useState } from 'react';

type TTodoCardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  console.log(title, description, isCompleted, priority);
  // for local state
  // const dispatch = useAppDispatch();
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [updatePriority, setUpdatePriority] = useState('');

  const [deleteTodo, { data, isLoading, isError, isSuccess }] =
    useDeleteTodoMutation();

  const [toggleCompleteTodo] = useToggleCompleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handleCompleteToggle = () => {
    // for local state
    // dispatch(toggleCompleteTodo(_id));

    const updateOption = {
      id: _id,
      updateData: {
        title,
        description,
        priority,
        isCompleted: !isCompleted,
      },
    };
    toggleCompleteTodo(updateOption);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // const randomId = Math.random().toString(36).substring(2);

    const updateOption = {
      id: _id,
      updateData: {
        title: updateTitle || title,
        description: updateDescription || description,
        priority: updatePriority || priority,
        isCompleted: isCompleted,
      },
    };

    updateTodo(updateOption);
  };

  return (
    <>
      <div className="border  rounded-md flex items-center justify-between p-3">
        <input
          onChange={handleCompleteToggle}
          type="checkbox"
          name="complete"
          id="complete"
          className="cursor-pointer p-1 mr-5"
          defaultChecked={isCompleted}
        />
        <p className="font-semibold flex-1">{title}</p>
        <div className="w-20 mr-5 text-center">
          {isCompleted ? (
            <p className="bg-green-500 text-white px-2 py-1 rounded-lg">Done</p>
          ) : (
            <p className="bg-yellow-500 text-white px-2 py-1 rounded-lg">
              Pending
            </p>
          )}
        </div>
        <div className="flex items-center gap-3 flex-1">
          <div
            className={`size-5 rounded-full 
          ${priority === 'high' ? 'bg-red-500' : ''}
          ${priority === 'medium' ? 'bg-yellow-500' : ''}
          ${priority === 'low' ? 'bg-green-500' : ''}
          `}
          ></div>
          <p>{priority}</p>
        </div>
        <p className="flex-1">{description}</p>
        <div className="flex gap-5 items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-500 text-white px-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Edit Task</DialogTitle>
                <DialogDescription>
                  Edit your task that yor want to finish.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleUpdate} className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="task" className="text-right">
                    Task
                  </Label>
                  <Input
                    onBlur={(e) => setUpdateTitle(e.target.value)}
                    id="task"
                    className="col-span-3"
                    defaultValue={title}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    onBlur={(e) => setUpdateDescription(e.target.value)}
                    id="description"
                    className="col-span-3"
                    defaultValue={description}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="priority" className="text-right">
                    Priority
                  </Label>
                  <Select
                    onValueChange={(value) => setUpdatePriority(value)}
                    defaultValue={priority}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button className="bg-primary-gradient" type="submit">
                      Save changes
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
          <Button
            onClick={() => deleteTodo(_id)}
            className="bg-red-500 text-white px-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
