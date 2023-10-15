import Image from 'next/image'
import './firebase/config';
import Link from 'next/link';
import type { Route } from 'next';

export default function Home() {
    return (
        <section className="w-full flex-center flex-col">
            
            <h1 className="head_text text-center blue_gradient">
               QTMA Parking 
            </h1>
            <Link href="/hello">
                Dashboard
            </Link>


        </section>

    )
}
