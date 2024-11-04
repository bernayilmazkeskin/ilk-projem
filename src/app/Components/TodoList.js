import Check from '@/app/Components/Icons/faCheck';
import Circle from '@/app/Components/Icons/TimeCircle';

export default function TodoList({ todos, setTodos, filter }) {
  
  const handleStatusChange = (index, newStatus) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = newStatus;
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((item, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <ul className="w-40 flex flex-col items-center pt-4 justify-center text-center">
        {todos.map((item, i) => (
          <li
            key={`Appitem_${i}`}
            className="list-none flex items-center justify-center gap-3 h-8 "
          >
            <span className="text-slate-400">{item.text}</span>
            <button
              onClick={() =>
                handleStatusChange(
                  i,
                  item.status === "Done" ? "Undone" : "Done"
                )
              }
              className="h-4  "
            >
              {item.status === "Done" ? <Check /> : <Circle />}
            </button>
            <button onClick={() => handleDelete(i)} className="h-4 ">
              <Circle />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
