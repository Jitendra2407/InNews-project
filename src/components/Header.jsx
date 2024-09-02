import SearchBar from "./SearchBar";
import styles from "./Header.module.css";
import LogoName from "./LogoName";
import { RiHomeSmileFill } from "react-icons/ri";
import LeftPartHead from "./leftPartHead";

function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <RiHomeSmileFill className={styles.homeIcon}/>
        <SearchBar></SearchBar>
        <LogoName></LogoName>
        <LeftPartHead></LeftPartHead>
      </div>
    </>
  )
}

export default Header;