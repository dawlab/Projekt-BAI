# Aplikacja hybrydowa - MOJA KREW



![zdjecie](https://preview.ibb.co/dbkJYa/21439376_1616331685097883_1466904748_o.png)

### Funkcjonalność aplikacji:

Aplikacja służy do zapisywania wyników badań morfologii krwi w celu śledzenia ich zmian na podstawie kolejnych badań. 
* Użytkownik zakłada unikalne konto, do którego dostęp odbywa się za pomocą adresu e-mail oraz hasła
* Przy uruchomieniu aplikacji użytkownik proszony jest o zalogowanie do swojego konta 
* W aplikacji użytkownik może dodać listy badań składające się z konkretnych parametrów (szczegóły niżej), edytować je i usuwać 
* Zapisaną na urządzeniu listę badań można wyeksportować na serwer lub pobrać z serwera wcześniej zapisaną tam listę. 
* Użytkownik może skorzystać z funkcji "W pobliżu", która na mapie wyświetla jego aktualną lokalizację, na podstawie której można odszukać najbliższe placówki pobierania krwi. 

### Cel powstania projektu

 - Obecnie w Polsce w większości przypadków wyniki badań krwi pacjent otrzymuje w formie papierowej. Powstaje więc ryzyko ich zgubienia, ponadto w przypadku osób często zmieniających przychodnie (np. studenci – miasto rodzinne vs. miasto zamieszkania) wyniki na papierze nie są praktyczne. Przychodnie posiadają wewnętrzne systemy informatyczne, w których takie wyniki są gromadzone, ale najczęściej nie są eksportowane w przypadku zmiany placówki.
 
 - Badania morfologii krwi to ważne narzędzie diagnostyczne pozwalające wykryć choroby we wczesnym stadium rozwoju. Powinno się je wykonywać co pół roku, o czym najczęściej zapominamy – aplikacja ma posiadać funkcję przypomnienia na podstawie daty dodania ostatniego badania. 

## Dokumentacja użytkownika:

> Rejestracja

Aby założyć swoje konto w aplikacji MojaKrew należy podać swój adres e-mail oraz hasło, które będzie sie składało z minimum 6 znaków. Następnie należy klinkąć ,,zarejestruj".

![zdjecie](https://image.ibb.co/ivEsRv/2.png)

> Logowanie

W celu zalogowania się do aplikacji należy wprowadzić dane stworzeone przy rejestracji oraz klinkąć ,,zaloguj".

![zdjecie](https://image.ibb.co/bWgiYa/3.png)

> Ekran startowy

Po zalogowaniu pojawia się ekran głowny, na którym możemy zobaczyć swoje badania.

![zdjecie](https://image.ibb.co/e81TzF/4.png)
> Dodawanie badania

Aby dodać badanie należy klinkąć w ,,+" na ekranie głównym. Następnie pojawia się panel, gdzie można wprowadzić swoje wyniki. Dodatkowo można porównać swoje badanie z normą wprowadzoną poniżej. 

Parametry jakie można wprowadzić to:

- Erytrocyty (RBC – Red Blood Cell)
- Hemoglobina (HGB)
- Hematokryt (HCT)
- MCV (Mean Corpuscular Volume)
- MCH (Mean Corpuscular Hemoglobin)
- MCHC (Mean Corpuscular Hemoglobin Concentration)
- Leukocyty (WBC – White Blood Cell)
- Limfocyty (LYM)
- Monocyty (MONO)
- Trombocyty (PLT; płytki krwi)

Przy każdym badaniu widoczne są prawidłowe normy przewidziane dla kobiet i mężczyzn.

![zdjecie](https://image.ibb.co/m56aDa/5.png)

Aby zapisać badanie należy kliknąć ,,nowe badanie".

![zdjecie](https://image.ibb.co/hdRWmv/6.png)

Następnie na panelu startowym pojawia się dodanie przez użytkownika badanie.

![zdjecie](https://image.ibb.co/kDVkDa/7.png)

Każde z badań można usunąć bądź edytować. Należy wtedy klinkąć na wybrane badanie w panelu startowym. Pojawiają się wtedy szczegóły.

![zdjecie](https://image.ibb.co/iB8cRv/8.png)

> Zapisywanie badań

Przechodząc w element wywołujący menu eksportu/importu można eksportować swoją listę badań na serwer lub wgrać ją z serwera. Dzięki temu, wyniki są niezależne od urządzenia, na któym zainstalowana jest aplikacja.

![zdjecie](https://image.ibb.co/i33u6v/9.png)

> Wylogowanie

Aby, wylogować się należy przejść do elementu wywołującego menu. Znajduje się tam mozliwość wylogowania bądź przejścia do wyników badań.

![zdjecie](https://image.ibb.co/btNw3a/10.png)

> Lokalizacja użytkownika 
Użytkownik może skorzystać z funkcji "W pobliżu", która na mapie wyświetla jego aktualną lokalizację, na podstawie której można odszukać najbliższe placówki pobierania krwi.

![zdjecie](https://image.ibb.co/f6JEPF/21397219_1616766255054426_1009863261_n.png)

![zdjecie](https://image.ibb.co/e4Hxda/21397666_1616766258387759_505148691_n.png)

![zdjecie](https://image.ibb.co/i9M7da/21442321_1616766285054423_1623916111_n.png)

 > Wykorzystane technologie
 
 - Ionic Framework 3: open-source SDK for hybrid mobile app development,
 -  Firebase: Google's mobile platform,
 -  Cordova: command-line runs on Node.js,
 -  Github: development platform.
 
> Link do repozytorium 

[Kliknij tutaj, aby przejść do repozytorium projektu](https://github.com/dawlab/Projekt-BAI)

> Autorzy 

* Aleksandra Mikrut, KrDUIs1011, nr indeksu: 181083
* Dawid Łabno, KrDUIs1011, nr indeksu: 180918

