import Link from "next/link";

// 해당 경로에 들어 올 경우 Navbar 활성화
const SidebarItem = props => {
    const active = props.active ? 'active' : '';
    return (
        <Link href={`${props.link}`} key={`nav-${props.index}`}>
          <li className={`${active}`} key={props.index}>
            <a>{props.icon}</a>  
              <p>{props.text}</p>
          </li>
        </Link>
    )
  }

  export default SidebarItem