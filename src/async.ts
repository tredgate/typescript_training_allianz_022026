// typescript/learning/async/

// ? Nastavení funkce square, která bude vracet Promise, který se vyřeší po 1 sekundě a vrátí druhou mocninu zadaného čísla.
function square(number: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = number * number;
      console.log("Jsem uvnitř promise");
      resolve(result);
    }, 1000);
  });
}

async function main() {
  const squaredThreeResult = await square(3);
  console.log("Výsledek main(): " + squaredThreeResult);
  console.log("Ahoj!");
}

main();
