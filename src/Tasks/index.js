import "./style.css";

const onDelete = (name) => {
console.log(`Nazwa zadania do usunięcia: ${name}`);
}

const Tasks = ({ tasks, hideDone }) => {
    
    return (
        <ul className="tasks">
            {tasks.map(task => (
                <li
                    key={task.id}
                    className={`tasks__item${task.done && hideDone
                        ? "tasks__item--hidden"
                        : ""}`
                    }
                >
                    <button className="tasks__button tasks__button--toggleDone">
                        {task.done ? "✓" : ""}
                    </button>
                    <span className={
                        `tasks__content${task.done ? " tasks__content--done" : ""}`
                    }
                    >
                        {task.content}
                    </span>
                    <button className="tasks__button tasks__button--remove"
                        onClick={() => onDelete(task.content)}
                    >
                        🗑
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;