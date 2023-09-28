import Contact from '@/components/Contact';
import Statute from '@/components/Statute';
import Welcome from '@/components/Welcome';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Welcome />
			<Statute />
		</div>
	);
}
