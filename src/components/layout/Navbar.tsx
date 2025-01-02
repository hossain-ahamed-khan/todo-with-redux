import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div>TODO WITH REDUX</div>
            <Link to="/">Tasks</Link>
            <Link to="/users">Users</Link>
            <Link to="/counter">Counter</Link>
        </nav>
    )
}