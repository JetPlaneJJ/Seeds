import { appTitle } from "../constants";
import Link from "next/link"

export default function Header() {
    return <header>
        <div className='headerTitle'>{appTitle}</div>
        <div className='headerMenu'>
            <Link href="/posts/10-18-2021">
                <a className="headerItems">I'm a company</a>
            </Link>
            <Link href="/posts/10-18-2021">
                <a className="headerItems">Blog</a>
            </Link>
            <Link href="/posts/10-18-2021">
                <a className="headerItems">More</a>
            </Link>
            <Link href="/posts/10-18-2021">
                <a className="headerItems">Advertise Here</a>
            </Link>
            <Link href="/posts/10-18-2021">
                <a className="headerItems">Login</a>
            </Link>
        </div>
    </header>;
}