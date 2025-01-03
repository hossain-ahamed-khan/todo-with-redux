import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
    return (
        <nav className="max-w-screen-xl mx-auto h-16 flex items-center gap-3 px-5">
            <div>TODO WITH REDUX</div>
            <Link to="/">Tasks</Link>
            <Link to="/users">Users</Link>
            <Link to="/counter">Counter</Link>
            <div className="ml-auto">
                <ModeToggle />
            </div>
        </nav>
    )
}