import Link from "next/link";

export default function NotFound() {
    return (
        <div className={`container mx-auto`}>
            <h1 className={`text-4xl text-center mt-8`}>Not Found</h1>
            <p className={`text-center mt-4`}>He page you are looking for does not exist.</p>

            <Link href={`/`} className={`block text-center mt-4`}>Back to Home</Link>
        </div>
    );
}