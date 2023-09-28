import React from 'react';

const Statute = () => {
	return (
		<div id="statute" className="statute ">
			<h1 className="text-3xl text-center font-bold text-goldText my-10 border-b-4 border-goldText">Regulamin aukcji online</h1>
			<div className="statute-card">
				<p className="pb-10 underline font-semibold">Decydując się na zakupy na moich transmisjach akceptujesz regulamin</p>
				<ol className=" list-decimal font-medium space-y-10">
					<li>Zakupy robimy podczas transmisji TIK TOK. Podajesz w komentarzu hasło o które proszę (zazwyczaj cena, lub cecha produktu np. złota, czarna, itp...).</li>
					{/* 2222222222222222222222222222222 */}
					<li>
						<ul className=" list-disc w-4/5 text-center mx-auto space-y-2">
							{<p className="font-bold pb-6">Osoby robiące zakupy po raz pierwszy:</p>}

							<li>
								Napisz wiadomość prywatną <span className="font-bold underline">na TIK TOK</span>, wystarczy krótki tekst (chcę założyć kopertę).
							</li>
							<li>
								Po transmisji cierpliwie czekasz na podsumowanie, <span className="font-bold underline">które otrzymasz w ciągu 24h</span>
							</li>
							<li>
								Na wpłatę czekam <span className="font-bold underline">24h po otrzymaniu ode mnie podsumowania.</span>
							</li>
							<li className=" font-semibold">Brak wpłaty skutkuje anulowaniem zamówienia!!!</li>
						</ul>
					</li>
					{/* 3333333333333333333333333333333333 */}
					<li>
						<span className="font-bold"> Dane do przelewu:</span>
						{
							<p className="text-center pt-3">
								TYTUŁ PRZELEWU: data zakupów + NICK Z TIK TOK <br />
								Bożena Skutnik Nr konta: 32 1160 2202 0000 0002 1063 5922 <br />
								<br />
								<span className="font-semibold">BLIK:</span> tel. 724 - 290 – 375 Bożena Skutnik
							</p>
						}
					</li>
					<li>
						<ul className="list-disc w-4/5 text-center mx-auto space-y-2">
							<p className="font-bold ">Wysyłki:</p>
							<li>
								<span className="font-bold">Kiedy wysyłamy:</span> poniedziałek, środa, piątek. Jeśli chcesz wysyłkę szybciej poinformuj mnie o tym wysyłając wiadomość na priv. <br />
								Czas realizacji wysyłki paczki max 3 dni robocze, po otrzymaniu ode mnie wiadomości odnośnie wysyłki. Pamiętaj o podaniu danych do wysyłki (w przypadku listu/paczki - pełen adres;
								paczkomat - nr. paczkomatu oraz nr. telefonu są to infomracje niezbędne do wygenerowania etykiety)
							</li>
							<li>
								<span className="font-bold">Koszty wysyłki:</span> Poczta Polska list polecony - 6,40zł, paczka - 15zł, paczkomat - 18zł.
							</li>
							<li className="font-bold">Nie wysyłam za pobraniem.</li>
						</ul>
					</li>
					<li>Paczkę można mieć otwartą do miesiąca czasu, ale opłacamy zakupy MAX raz na 10dni.</li>
					<li>
						Ze względu na dużą ilość wiadomości proszę o niepodbijanie wiadomości . Odpowiadam zawsze od najstarszych wiadomości. Nie pytamy 3 razy w ciągu dnia czy pieniążki wpłynęły ( jeśli został
						zrobiony przelew to na pewno wpłynęły).
					</li>
					<li>Po opłaceniu proszę o wiadomość czy paczka otwarta czy wysyłka. Jeśli wysyłka proszę o podanie danych do wysyłki. Pozdrawiam i zapraszamy do zakupów.</li>
				</ol>
			</div>
		</div>
	);
};

export default Statute;
