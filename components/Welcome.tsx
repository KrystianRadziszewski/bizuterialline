import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Welcome = () => {
	return (
		<>
			<div className="welcome ">
				<h1 className="text-2xl font-bold text-goldText ">Zapraszamy na otwartą grupę na Facebooku! </h1>
				<div className=" py-3 px-5 italic font-semibold text-gray-600">
					<p className=" text-gray-500">&quot;#Biżuterialine, #biżuteria, #wyroby z żywicy, #super ceny i promocje&quot;</p>
				</div>
				<div className="flex flex-col gap-6 bg-[#f3f3f3] w-auto p-6 rounded-md shadow-2xl text-center">
					<div className="flex flex-wrap gap-5 items-center">
						<AiOutlineArrowDown />
						<p className="underline font-semibold">Grupa na Facebook`u (kliknij)</p>
						<AiOutlineArrowDown />
					</div>
					<div className="mx-auto mt-10">
						<div className="button-fb">
							<Link href={`https://www.facebook.com/people/Bi%C5%BCuterialine/100091246264486/`}>
								<FaSquareFacebook />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="pt-6 font-bold text-xl text-center text-gray-900">
				Transmisje TIK-TOK (godz: 18:15): <br />
				<span className="text-gray-700 font-normal"> ŚRODA, PIĄTEK, NIEDZIELA</span>
			</div>
		</>
	);
};

export default Welcome;
