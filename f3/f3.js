const students = require("../students.json");
/* Írj függvényt ami megvizsgálja, hogy van-e eltérés a freeDormitory
 boolean és dormitoryPrice number-ek között 
 (Ha jól van feltöltve a lista a false értékek száma és a null-ok száma megegyezik.
  Ha nem akkor írja ki az eltérést) */
const f3 = () => {
  let diff = 0;

  students.forEach((student) => {
    if (student.freeDormitory == false) diff++;
    if (student.dormitoryPrice == null) diff--;
  });

  return 0;
};
module.exports = f3;
