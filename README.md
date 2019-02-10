## Oceneo - aplikacja umożliwiająca przeglądanie i dodawanie opinii o produktach.

Projekt zaliczeniowy z przedmiotu Technologie Aplikacji Serwerowych.

Projekt powinien:
1. Realizować jeden z tematów przedstawionych poniżej.
2. Posiadać webową oraz mobilną warstwę interfejsu użytkownika.
3. Posiadać warstwę biznesową.
4. Posiadać warstwę dostępu do bazy danych.
5. Wykorzystywać do komunikacji pomiędzy warstwami interfejsy zdalne, czyli w szczególności:
- Warstwy webowa i mobilna powinny odwoływać się do warstwy biznesowej za pośrednictwem
technologii zdalnego wywoływania procedur lub wzorca architektury REST.
- Warstwa dostępu do bazy danych powinna odwoływać się do systemu baz danych niezależnego
od warstwy webowej i biznesowej (tj. nie korzystamy z baz „osadzonych”).

### Terminy prezentacji
- 26.11 Mateusz Skrok
- 10.12 Jagodziński Wojciech
- 17.12 Marcin Mirecki
- 28.01.2019 Prezentacja zespołowa
### Termin poprawy
- 2019-02-13 11:30 pokój B3-19

## Uruchomienie:
### Linux
#### Frontend
Przechodzimy do lokalizacji katalogu projektu w terminalu (.../Tas-oceneo/frontend) i wpisujemy
```
npm install
```
W przypadku braku npm terminal podpowiada co wpisać.

Npm zainstaluje moduły, które są zawarte w package.json.
Żeby zrestartować całkowicie instalację trzeba usunąć node_modules i package.json.lock i jeszcze raz wpisać npm install

Uruchomienie
```
npm start
```
Npm uruchamia wersje developerską na localhost. Do wyboru jest konsola w przeglądarce
```
http://localhost:8000/webpack-dev-server/
```
Albo konsola w terminalu
```
http://localhost:8000/
```
Konsola w terminalu wyświetla błędy, ale nie pokazuje tego na stronie, kóra ładuje ostatnią działająca wersję. Konsola w przeglądarce nie pokazuje ścieżki.
#### Backend 
nie wiem, robiłem na win ale będzie podobnie jeśli nie tak samo, tylko więcej instalowania i nie ma wszystkiego w fajnym exe
### Windows
Instalujemy node i cmd with ruby and rails
- https://nodejs.org/dist/v10.15.1/node-v10.15.1-x64.msi
- https://s3.amazonaws.com/railsinstaller/Windows/railsinstaller-3.4.0.exe
#### Frontend tak samo jak Linux
#### Backend 
Nie pamiętam jak była kolejność i błędy, ale

Instalacja jednego modułu
```
gem install nazwa
```
Instalacja wszystkich modułów, które używamy (plik Gemfile)
```
bundle install
```
Jak nie ma bundlera to
```
gem install bundler
```
Jak czegoś jeszcze nie ma to podpowiada

Uruchomienia servera
```
rails s
```
Jak wywala błąd, że server chodzi to wystarczy usunąć plik server.pid w ../tmp/pids/

Server dostępny jest pod adresem
```
http://localhost:3000/
```
Można przeczytać błędy jak coś nie działa. Normalnie wyświetla "Yay! You’re on Rails!".

### Jeżeli baza jest pusta
Wypełnienie bazy jak nie ma rekordów, albo chcemy reset etc. Server musi być wyłączony.

W katalogu ../api/db usuwamy pliki
```
schema.rb
development.sqlite3
```
Plik seeds.rb zawiera nasze startowe dane

Tworzymy jeszcze raz tabele:
```
rake db:migrate
```
Wsadzamy dane startowe:
```
rake db:seed
```
### Na wydziale
Front się uruchomi i na win i na linux, backendu nie udało mi się uruchomić ze względu na nokogiri, które usilnie chce swojej ścieżki na dysku C, inne moduły się zainstalowały w katalogu domowym, ale nic to nie da bo wszystko musi działać. Jedyna opcja to zrobić maszynę wirtualną z linuksem ( bo szybciej sie instaluje) i tam pokazać, albo próbować dalej(szkoda czasu wdg mnie). Inaczej to pulpit zdalny albo wirtualna z windowsem. Jak sie zainstaluje na poligonie w dzień prezentacji to nie trzeba się martwić miejscem (kolejnego dnia zniknie btw)

### Przydatne strony
- https://alligator.io/react/axios-react/
- https://magic.reactjs.net/htmltojsx.htm
- https://daveceddia.com/watch-out-for-undefined-state/
- https://scotch.io/tutorials/build-a-react-app-with-user-authentication#toc-index-page
- https://goshakkk.name/array-form-inputs/
- https://serverless-stack.com/chapters/create-a-login-page.html
- https://codesandbox.io/s/6v59yv2zl3 (serach bar example)
- https://medium.com/@iamjane/devise-with-react-webpacker-and-rails-dacbf9ae0233

### Podstawka

##### Backend
- [x] produkty
- [x] opinie
- [x] użytkownicy
- [x] token
- [ ] search

##### Frontend
- [x] router-sciezki 
- [x] strona startowa 
- [x] ranking
- [x] logowanie 
- [x] wylogowanie użytkownika
- [ ] search

### Podprojekty

##### Wojtek
- [x] dodanie produktu
- [ ] edycja produktu
- [x] usunięcie produktu
- [x] lista produktów użytkownika

##### Marcin
- [ ] dodanie opinii
- [ ] edycja opinii
- [ ] usunięcie opinii
- [ ] lista opinii

##### Mateusz
- [ ] dodanie użytkownika
- [ ] edycja użytkownika
- [ ] usunięcie użytkownika


### Punktacja

|Pkt|Funkcjonalność indywidualna|
|---|--------------|
| 7 | Poprawność implementacji/integracji wybranej technologii w projekcie |
| 3 | Prezentacja (slajdy max. 10 minut) |

|Pkt|Funkcjonalność zespołowa|
|---|--------------|
| 7 | Zgodność ze specyfikacją zadania |
| 3 | Bezawaryjne działanie |

|Ocena|Pkt|
|-----|---|
|bdb | 18-20|
|db+| 17-18 |
|db | 14-17 |
|dst+| 13-14 |
|dst | 10-13 |
|ndst| 0-10 |
