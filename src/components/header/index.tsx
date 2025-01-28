import Link from 'next/link';

export function Header() {
  return (
    <header className={`bg-gray-800 text-white p-4`}>
        <div className={`container mx-auto flex justify-between items-center`}>
            <h1 className={`text-2xl`}>My App</h1>

            <nav>
                <ul className={`flex space-x-4`}>
                    <li>
                        <Link href={`/`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={`/about`}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={`/projects`}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href={`/contact`}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href={`/links`}>
                            Links
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}