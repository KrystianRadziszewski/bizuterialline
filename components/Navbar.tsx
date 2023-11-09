'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className=" ml-6">
				<Link href={`/`} className="">
					<div>
						<Image src={`/bizuterialine-logo.jpg`} width={200} height={150} alt="logo" className=" rounded-lg" />
					</div>
				</Link>
			</div>
			<div className="flex flex-col md:flex-row gap-8 pr-8 ">
				<Link className="button" href={'/#statute'} scroll={true}>
					Regulamin
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
