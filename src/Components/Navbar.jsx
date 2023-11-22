function Navbar() {
    return (
        <div className="navbar bg-base-100 w-[80%] mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-yellow-500 font-semibold">Crpto App</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li>
                    <details>
                    <summary>
                        Currency
                    </summary>
                    <ul className="p-2 bg-base-100">
                        <li><a>INR</a></li>
                        <li><a>USD</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;