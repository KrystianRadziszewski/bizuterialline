'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div>
				<Link href={`/`}>
					<Image src={`/bizuterialine-logo.jpg`} width={200} height={150} alt="logo" className=" rounded-lg" />
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
