import React from 'react';

const Statute = () => {
	return (
		<div id="statute" className="statute ">
			<h1 className="text-3xl text-center font-bold text-goldText my-10 border-b-4 border-goldText">Regulamin aukcji online</h1>
			<div className="statute-card">
				<p className="pb-10 underline font-semibold text-2xl">Decydując się na zakupy na moich transmisjach akceptujesz regulamin</p>
				<ol className=" list-decimal font-medium space-y-5">
					<li className="border-b border-gray-400 pb-4">Zakupy robimy podczas transmisji TIK TOK. Podajesz w komentarzu numer swojej koperty.</li>
					{/* 2222222222222222222222222222222 */}
					<li className="border-b border-gray-400 pb-4">
						<ul className=" list-disc w-4/5 text-center mx-auto space-y-3">
							{<p className="font-bold pb-4 text-2xl">Osoby robiące zakupy po raz pierwszy:</p>}

							<li>
								Opłatę za pierwszy przedmiot należy uiścić w trakcie trwania transmisji, <span className="font-bold underline">BLIK lub przelew ekspresowy</span> (potwierdzenie przelewu należy
								przesłać na numer teleofnu).
							</li>
							<li>
								<span className="font-bold text-xl"> Dane do przelewu:</span>
								{
									<p className="text-center pt-1">
										<span className="font-bold">Nr konta:</span> 32 1160 2202 0000 0002 1063 5922 <br />
										<span className="font-bold">TYTUŁ PRZELEWU:</span>numer koperty + nick z TIK TOK <br />
										<span className="font-bold">BLIK:</span> tel. 724 - 290 – 375 Bożena Skutnik
									</p>
								}
							</li>
							<li>
								Napisz wiadomość prywatną <span className="font-bold underline">na TIK TOK</span>, wystarczy krótki tekst (chcę założyć kopertę, pierwszy zakup opłacony).
							</li>

							<li className=" font-semibold">Brak wpłaty skutkuje anulowaniem zamówienia!!!</li>
						</ul>
					</li>
					{/* 3333333333333333333333333333333333 */}

					<li className="border-b border-gray-400 pb-4">
						<ul className="list-disc w-4/5 text-center mx-auto space-y-2">
							<p className="font-bold text-2xl">Wysyłki:</p>
							<li>
								W przypadku chęci zamknięcia koperty napisz wiadomość prywatną z prośbą o podsumowanie. Pamiętaj o podaniu danych do wysyłki (w przypadku listu/paczki - pełen adres; paczkomat - nr.
								paczkomatu oraz nr. telefonu, są to infomracje niezbędne do wygenerowania etykiety).
							</li>
							<li>
								<span className="font-bold">Kiedy wysyłamy:</span> <br />
								Wysyłki są realizowane codziennie według kolejności zamówień. <br />
								Czas realizacji wysyłki paczki max 3 dni robocze, po otrzymaniu ode mnie wiadomości odnośnie wysyłki. <br />
							</li>
							<li>
								<span className="font-bold">Koszty wysyłki:</span>
								<br />
								Poczta Polska list polecony priorytetowy - 8zł,
								<br />
								paczka - 15zł,
								<br />
								paczkomat - 18zł.
							</li>
							<li className="font-bold underline">Nie wysyłam za pobraniem.</li>
						</ul>
					</li>

					{/* 444444444444444444444444444444444444 */}

					<li className="border-b border-gray-400 pb-4">Paczkę można mieć otwartą przez 14dni, ale opłacamy zakupy MAX raz na 7dni.</li>
					<li className="border-b border-gray-400 pb-4">
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
