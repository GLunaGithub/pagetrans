import Link from "next/link"

export default function Navbar() {
    return(
        <nav className="textx-2xl font-medium z-20 relative">
            <ul className="flex gap-12">
                <Link href={'/'}>
                    <li>Norman</li>
                </Link>

                <Link href={'/contact'}>
                    <li>Click Me</li>
                </Link>
            </ul>
        </nav>
    )
}