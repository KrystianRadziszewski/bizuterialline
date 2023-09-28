import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Welcome = () => {
	return (
		<div className="welcome ">
			<h1 className="text-2xl font-bold text-goldText ">Zapraszamy na otwartą grupę na Facebooku! </h1>
			<div className=" py-3 px-5 italic font-semibold">
				<p>&quot;Biżuterialine biżuteria, wyroby z żywicy, super ceny i promocje&quot;</p>
			</div>
			<div className="flex flex-wrap gap-5 items-center">
				<AiOutlineArrowDown />
				<p className="underline">Kliknij w ikonkę poniżej</p>
				<AiOutlineArrowDown />
			</div>
			<div className="button-fb ">
				<Link href={`https://www.facebook.com/people/Bi%C5%BCuterialine/100091246264486/`}>
					<FaSquareFacebook />
				</Link>
			</div>
		</div>
	);
};

export default Welcome;
