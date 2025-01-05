<img src="doc/typescript-original.svg" width="128"/>

<img src="doc/rust-original.svg" width="64"/> <img src="doc/haskell-original.svg" width="64"/>

# Hibakezelés TypeScript nyelven

Egy-egy példát mutatok a **Rust** féle `Result` típusra, és a **Haskell** féle `Either` típusra.

## Inspiráció

A JS Conf egyik előadása (Artem Kobzar és Dmitry Makhnev) adta az ötletet a vizsgálódáshoz:
[Unexpected Monad. Is Safe Error Handling Possible in JavaScript/TypeScript?](https://jsconfbp.com/speakers/artem-and-dmitry)

> A hibakezelés minden JavaScript projekt rendkívül nehéz része, amely rengeteg hibát okozhat. Általában a fejlesztők csak a try/catch-et használják standard megközelítésként a hibakezelésre, ami nem annyira ideális megoldás, mert ez az utasítás mindent elkap, amit a „throw” utasítás dobott, ennek eredményeként a fejlesztőnek:
> 
> - extra feltételekre van szüksége a kivételek korlátozott osztályainak kezeléséhez,
> - újra el kell dobnia a hibákat, vagy felhasználnia,
> - nem tudja szétválasztani a hibákat és a kivételeket.

[Youtube előadás: Unexpected Monad. Is Safe Error Handling Possible in JS/TS? by Artem Kobzar and Dmitry Makhnev](https://www.youtube.com/watch?v=SLOhXSeNKCM)

## Cikkek

- [Huy: TypeScript / Implement Rust-style Result](https://www.huy.rocks/everyday/02-14-2022-typescript-implement-rust-style-result)
- [Anthony Manning-Franklin: Stop catching errors in TypeScript; Use the Either type to make your code predictable](https://antman-does-software.com/stop-catching-errors-in-typescript-use-the-either-type-to-make-your-code-predictable)

## Álom

Az ideális állapotok a következők lennének:

- [Kivételek és hibák megkülönböztetése](src/dream/dream-01.ts)
- [Azonos kivételkezelés sync és async kódhoz](src/dream/dream-02.ts)
- [Visszakeresés explicit újradobás nélkül (re-throw)](src/dream/dream-03.ts)
- [Statikusan típusos kivételek](src/dream/dream-04.ts)
- [Elegáns kinézet](src/dream/dream-05.ts)

## Követelmények

Minimum [Node.js](https://nodejs.org/en) 20.11.1 ajánlott.

## Telepítés

```
npm install
```

## Futtatás

```
npm run start1
npm run start2
npm run start3
npm run start4
npm run dream1
npm run dream2
npm run dream3
npm run dream4
npm run dream5
```

## Licenc

A megjelölt részeknél a cikkek szerzői a jogtulajdonosok.
A többire pedig a [LICENSE file](LICENSE) az irányadó.

## Történet

A repót 2024. november 16-án indítottam.