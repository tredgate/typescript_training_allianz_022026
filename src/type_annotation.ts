// src/type_annotation.ts
let firstName = "Petr";
console.log("Křestní jméno: " + firstName);

firstName = "Radek"; // * Toto je OK, firstName je string a můžeme jej změnit na jiný string
console.log("Křestní jméno: " + firstName);

// firstName = true;

/*
Cvičení - typové anotace (⌛4:00)
Vytvoř složku: src/exercises a v ní jednoduchý program:  type_annotations_exercise.ts, který:
Vytvoří number proměnnou let age a tu inicializujte
Změňte age na jiné číslo na dalším řádku
Vypíše hodnotu proměnné age do terminálu
Následně program spusť pomocí tsx
Výzva
Vytvoř složku: src/challenges, soubor: type_annotations_challenge.ts
Vytvoř program, který:
Vytvoří proměnnou s polem cities a 5 hodnotami včetně typové anotace. Alespoň jedno město bude mít hodnotu: Tábor
Pomocí forEach města procyklí.
V každém cyklu vypíše hodnotu cykleného města do konzole.
Pokud bude město v cyklu Tábor, program vypíše text:
Tábor byl založen na jaře roku 1420 husity a pojmenován podle hory Thabor u Nazaretu, v dnešním Izraeli.
Spusť program, zkontroluj, jestli vypisuje správné výsledky
Výzva 2
V programu na výpis informací o městě táboře .. zařiď, aby informace byly vypsány i když bude město napsáno různými velikostmi písmen (tábor, TÁBOR, tÁBor atd.).

*/
