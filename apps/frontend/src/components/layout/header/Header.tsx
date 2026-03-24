/**
 * A simple header component displaying the application title and tagline.
 * 
 * @returns the Header component.
 */
function Header() {
    return (
        <header className="flex flex-col items-center gap-2 py-4 border-b border-neutral-800">
            <h1>Video Game Tracker</h1>
            <p className="text-neutral-400">Keep track of your video game collection!</p>
        </header>
    );
}

export default Header;