function panggilSort() {
  let bilangan = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
  console.log("Sebelumnya : " + bilangan);
  bilangan.sort(function (a, b) {
    return a - b;
  });
  console.log("Ascending : " + bilangan);
  bilangan.sort(function (a, b) {
    return b - a;
  });
  console.log("Descending : " + bilangan);
}
panggilSort();
