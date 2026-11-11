# Nori — Zlatara

Sajt zlatare Nori napravljen u **React + Vite** sa više zasebnih stranica (React Router).

## Pokretanje

```bash
npm install
npm run dev
```

Sajt se otvara na `http://localhost:5173`.

```bash
npm run build     # produkciona verzija u folderu dist/
npm run preview   # lokalni pregled build-a
```

## Podešavanje e-pošte za poruke

Poruke iz kontakt forme stižu na adresu iz fajla `.env.local` (ne šalje se na GitHub):

```bash
# kopiraj .env.example u .env.local i upiši svoju adresu
VITE_FORM_TO=ime.prezime@gmail.com
```

Poruke se šalju preko besplatnog servisa [FormSubmit](https://formsubmit.co). **Pri prvom slanju** FormSubmit
pošalje na tu adresu mejl sa dugmetom „Activate Form" — treba ga potvrditi jednom, posle toga poruke stižu
normalno (proveri i Spam folder). Bez `.env.local` forma prikazuje grešku pri slanju.

## Stranice

| Putanja      | Stranica                 |
| ------------ | ------------------------ |
| `/`          | Početna                  |
| `/o-nama`    | O nama                   |
| `/kolekcije` | Kolekcije i materijali   |
| `/izrada`    | Izrada po meri + pitanja |
| `/usluge`    | Usluge                   |
| `/kontakt`   | Kontakt                  |

## Struktura

```
src/
  components/   Header, Footer, Button, Reveal, ilustracije...
  context/      SiteContext (podaci o firmi + stanje menija)
  data/         Tekstovi: kolekcije, usluge, koraci, FAQ, kontakt podaci
  pages/        Home, About, Collections, Crafting, Services, Contact
  App.jsx       Rute
  index.css     Svi stilovi
  main.jsx      Ulazna tačka
```

## Šta menjati

- **Adresa, telefon, e-pošta, radno vreme** → `src/data/site.js` (trenutno su privremeni podaci).
- **Kolekcije, usluge, koraci izrade, pitanja** → ostali fajlovi u `src/data/`.
- **Boje i fontovi** → promenljive na vrhu `src/index.css`.

## Objavljivanje na GitHub Pages

Sajt je na adresi `https://dimitrijerancicmita-gif.github.io/norizlatara/`.

```bash
npm run deploy
```

Komanda pravi build (sa osnovnom putanjom `/norizlatara/`, uz `404.html` za osvežavanje na podstranicama) i
šalje ga na granu `gh-pages`. Prvi put treba uključiti Pages u GitHub-u: **Settings → Pages → Source: Deploy
from a branch → `gh-pages` / `(root)`**. Repo mora da bude javan (na besplatnom nalogu).

`npm run deploy` mora da se pokreće na računaru gde postoji `.env.local`, jer se adresa za poruke upisuje u
build.

## 3D prsten

Prsten u hero sekciji je pravi 3D model (three.js) u `src/components/Ring3D.jsx`. Na vrhu fajla su
podešavanja: `SPIN_AXIS` (osa rotacije — `'y'` ili `'x'`) i `SPIN_SPEED` (brzina). Ako uređaj nema WebGL,
prikazuje se obična SVG ilustracija. Biblioteka se učitava odvojeno, pa ne usporava prvi prikaz.
