import { toggleBar } from "@/store/isShow";
import Link from "next/link";
import { useDispatch } from "react-redux";

function Menu() {
  const dispatch = useDispatch();

  function handleShowMenu() {
    dispatch(toggleBar());
  }
  return (
    <ul>
      <li onClick={handleShowMenu}>
        <Link href="/">Home</Link>
      </li>
      <li onClick={handleShowMenu}>
        <Link href="/allfilm">all fiml</Link>
      </li>
    </ul>
  );
}

export default Menu;
