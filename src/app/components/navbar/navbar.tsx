import Link from "next/link";
import ActionButton from "./actionButton";
import CollapsedDrawer from "./collapsedDrawer";
import MenuItems from "./menuItems";


export default function Navbar() {
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <CollapsedDrawer />
          <Link href="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <MenuItems />
        <div className="navbar-end">
          <ActionButton />
        </div>
      </div>
    );
  }