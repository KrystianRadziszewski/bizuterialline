import React from 'react';

const Statute = () => {
	return (
		<div id="statute" className="statute ">
			<h1 className="text-3xl text-center font-bold text-goldText my-10 border-b-4 border-goldText">Regulamin aukcji online</h1>
			<div className="statute-card">
				<p className="pb-10 underline font-semibold text-2xl">Decydując się na zakupy na moich transmisjach akceptujesz regulamin</p>
				<ol className=" list-decimal font-medium space-y-5">
					{/* 11111111111111111111111111111111111111 */}
					<li className="list-element">Zakupy robimy podczas transmisji TIK TOK. Podajesz w komentarzu numer swojej koperty.</li>
					{/* 2222222222222222222222222222222 */}
					<li className="list-element">
						W trakcie trwania transmisji proszę o <b>przemyślane zakupy</b>. Zadeklarowanie kupna przedmiotu jest{' '}
						<b>
							<span className="underline text-red-500">OSTATECZNE</span> , nie wyjmuję przedmiotów z kopert
						</b>{' '}
						w trakcie trwania transmisji oraz po niej.
					</li>

					{/* 3333333333333333333333333333333333 */}

					<li className="list-element">
						<ul className=" list-disc w-4/5 text-center mx-auto space-y-5">
							{<p className="font-bold pb-4 text-2xl">Osoby robiące zakupy po raz pierwszy:</p>}

							<li>
								<span className="font-bold text-2xl">Zakładanie nowej koperty:</span> <br />
								<p className="mt-4">
									1. W trakcie transmisji. Jeżeli jesteś zainteresowany/a zakupem prezentowanego przedmiotu umieść komentarz: &quot;
									<i className="font-semibold">Chcę to, jestem nowy/a.</i> &quot; Pierwszy przedmiot należy opłacić natychmiast BLIK lub przelew ekspreseowy (potwierdzenie przelewu w wiadomości SMS).
								</p>{' '}
								<br />
								<p>
									2. W trakcie transmisji. Opłata 50zł - w celu założenia koperty (BLIK lub przelew). Należy napisać komentarz w trakcie transmisji:{' '}
									<i className="font-semibold">Opłaciłem/am otwarcie koperty, proszę o numer.</i> &quot; (koszt otwarcia koperty zostanie odjęty od kwoty zakupów).{' '}
								</p>{' '}
								<br />
								<p>3. Wiadomość prywatna - można również napisać wiadomość prywatną w celu założenia koperty pomiędzy transmisjami.</p>
							</li>

							<li>
								<span className="font-bold text-xl"> Dane do przelewu:</span> (Bożena Skutnik)
								{
									<p className="text-center pt-1">
										<span className="font-bold">BLIK:</span> <span className="font-semibold">tel. 724 - 290 – 375</span> <br />
										<span className="font-bold pt-2">Nr konta:</span> 32 1160 2202 0000 0002 1063 5922 <br />
										<span className="font-bold">TYTUŁ PRZELEWU:</span> numer koperty + nick z TIK TOK <br />
									</p>
								}
							</li>
							<li>
								NOWE osoby po zakończonej transmisji proszone są o wysłanie wiadomości prywatnej <span className="font-bold underline">na TIK TOK</span>, wystarczy krótki tekst (jestem nowa/y,
								pierwszy zakup opłacony, proszę o wysyłkę/zostawiam kopertę otwartą).
							</li>

							<li className=" font-semibold">Brak wpłaty skutkuje anulowaniem zamówienia!!!</li>
						</ul>
					</li>

					{/* 444444444444444444444444444444444444 */}

					<li className="list-element">
						<ul className="list-disc w-4/5 text-center mx-auto space-y-2">
							<p className="font-bold text-2xl">Wysyłki:</p>
							<li>
								W przypadku chęci zamknięcia koperty napisz wiadomość prywatną z prośbą o podsumowanie. Pamiętaj o podaniu danych do wysyłki (w przypadku listu/paczki - pełen adres; paczkomat - nr.
								paczkomatu oraz nr. telefonu, są to infomracje niezbędne do wygenerowania etykiety).
							</li>
							<li>
								<span className="font-bold">Kiedy wysyłamy:</span> <br />
								Wysyłki są realizowane 2x w tygodniu (wtorki i czwartki). <br />
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

					{/* 55555555555555555555555555555555 */}
					<li className="list-element">Paczkę można mieć otwartą przez 14dni, ale opłacamy zakupy MAX raz na 7dni. </li>

					{/* 66666666666666666666666666666666666666 */}
					<li className="list-element">Jeżeli wartość zakupów przekroczy 500zł użytkownik traci możliwość kontynuowania zakupów do czasu uregulowania płatności.</li>

					{/* 777777777777777777777777777777777777777 */}
					<li className="list-element">
						Ze względu na dużą ilość wiadomości proszę o niepodbijanie wiadomości . Odpowiadam zawsze od najstarszych wiadomości. Nie pytamy 3 razy w ciągu dnia czy pieniążki wpłynęły (jeśli został
						zrobiony przelew to na pewno wpłynęły).
					</li>
					<li>Po opłaceniu proszę o wiadomość czy paczka otwarta czy wysyłka. Jeśli wysyłka proszę o podanie danych do wysyłki. Pozdrawiam i zapraszamy do zakupów.</li>
				</ol>
			</div>
		</div>
	);
};

export default Statute;
