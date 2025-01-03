import { selectFilter, selectTodos } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hooks"

export default function Tasks() {

    const todos = useAppSelector(selectTodos);
    const filter = useAppSelector(selectFilter);

    console.log(todos, filter);

    return (
        <div>Tasks</div>
    )
}
