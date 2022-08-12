import Link from "next/link";

// 해당 경로에 들어 올 경우 Navbar 활성화
const SidebarItem = props => {
    const active = props.active ? 'active' : '';
    return (
      <li className={`${active}`} key={props.index}>
        <Link href={`${props.link}`} key={`nav-${props.index}`}>
          <a>{props.icon}</a>  
        </Link>
        <p>{props.text}</p>
      </li>
    )
  }

  export default SidebarItem