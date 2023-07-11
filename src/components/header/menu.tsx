import { toggleBar } from "@/store/isShow";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCaretDown } from "react-icons/ai";
function Menu() {
  const dispatch = useDispatch();
  let caterogy = useSelector((state: any) => state.GENERIC.listGereric);

  function handleShowMenu() {
    let payloadValue = "...";
    dispatch(toggleBar(payloadValue));
  }
  return (
    <ul>
      <li onClick={handleShowMenu}>
        <Link href="/">Home</Link>
      </li>
      <li onClick={handleShowMenu}>
        <Link href="/allfilm">all fiml</Link>
      </li>
      <li className="caterogy" onClick={handleShowMenu}>
        <Link href="">Thể loại</Link>
        <AiFillCaretDown className="icon" />
        <div className="sub-menu">
          <ul>
            {Object.values(caterogy).map((item: any) => {
              return (
                <li key={item.id}>
                  <Link href={`/caterogy/${item.id}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    </ul>
  );
}

export default Menu;
