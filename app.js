let pizzanoni = document.querySelector(".non-chekkasi");
let pizzaortasi = document.querySelector(".non");
let pomidor = document.querySelector(".pomidor");
let bodring = document.querySelector(".bodring");
let kalbasa = document.querySelector(".kalbasa");
let qoziqorin = document.querySelector(".qoziqorin");
let ketchup = document.querySelector(".ketchup");
let mayanez = document.querySelector(".mayanez");
let zaytun = document.querySelector(".zaytun");
let pomidoradd = document.querySelector(".pomidoradd");
let bodringadd = document.querySelector(".bodringadd");
let kalbasaadd = document.querySelector(".kalbasaadd");
let qoziqorinadd = document.querySelector(".qoziqorinadd");
let ketchupadd = document.querySelector(".ketchupadd");
let mayanezadd = document.querySelector(".mayanezadd");
let zaytunadd = document.querySelector(".zaytunadd");
let yupqa = document.querySelector(".yupqa");
let qalin = document.querySelector(".qalin");
let pizzasir = document.querySelector(".pizzasir");
let pizzasirqoshimcha = document.querySelector(".pizzasirqoshimcha");
let sir = document.querySelector(".sir");
let sirqoshimcha = document.querySelector(".qoshimcha-sir");
let summa = document.querySelector(".summa");

var s = 0;
yupqa.addEventListener("click", () => {
  pizzanoni.style.opacity = "1";
  pizzaortasi.style.opacity = "1";
  pizzanoni.style.transform = "scale(1)";
});
qalin.addEventListener("click", () => {
  pizzanoni.style.opacity = "1";
  pizzaortasi.style.opacity = "1";
  pizzanoni.style.transform = "scale(1.2)";
});
sir.addEventListener("click", () => {
  summa.textContent = `${s}$`;
  pizzasir.style.display = "block";
  pizzasirqoshimcha.style.display = "none";
});
sirqoshimcha.addEventListener("click", () => {
  pizzasir.style.display = "none";
  pizzasirqoshimcha.style.display = "block";
});
pomidoradd.addEventListener("click", () => {
  let pomidor1 = document.querySelector(".pomidor1");
  let pomidor2 = document.querySelector(".pomidor2");
  let pomidor3 = document.querySelector(".pomidor3");
  let pomidor4 = document.querySelector(".pomidor4");
  let pomidor5 = document.querySelector(".pomidor5");
  if (pomidoradd.checked) {
    s += 2;
    pomidor1.style.opacity = "1";
    pomidor2.style.opacity = "1";
    pomidor3.style.opacity = "1";
    pomidor4.style.opacity = "1";
    pomidor5.style.opacity = "1";
  } else {
    s -= 2;
    pomidor1.style.opacity = "0";
    pomidor2.style.opacity = "0";
    pomidor3.style.opacity = "0";
    pomidor4.style.opacity = "0";
    pomidor5.style.opacity = "0";
  }
  summa.textContent = `${s}$`;
});
bodringadd.addEventListener("click", () => {
  let bodring1 = document.querySelector(".bodring1");
  let bodring2 = document.querySelector(".bodring2");
  let bodring3 = document.querySelector(".bodring3");
  let bodring4 = document.querySelector(".bodring4");
  let bodring5 = document.querySelector(".bodring5");
  if (bodringadd.checked) {
    s += 2;
    bodring1.style.opacity = "1";
    bodring2.style.opacity = "1";
    bodring3.style.opacity = "1";
    bodring4.style.opacity = "1";
    bodring5.style.opacity = "1";
  } else {
    s -= 2;
    bodring1.style.opacity = "0";
    bodring2.style.opacity = "0";
    bodring3.style.opacity = "0";
    bodring4.style.opacity = "0";
    bodring5.style.opacity = "0";
  }
  summa.textContent = `${s}$`;
});
zaytunadd.addEventListener("click", () => {
  let zaytun1 = document.querySelector(".zaytun1");
  let zaytun2 = document.querySelector(".zaytun2");
  let zaytun3 = document.querySelector(".zaytun3");
  let zaytun4 = document.querySelector(".zaytun4");
  let zaytun5 = document.querySelector(".zaytun5");
  let zaytun6 = document.querySelector(".zaytun6");
  let zaytun7 = document.querySelector(".zaytun7");
  let zaytun8 = document.querySelector(".zaytun8");
  let zaytun9 = document.querySelector(".zaytun9");
  let zaytun10 = document.querySelector(".zaytun10");
  if (zaytunadd.checked) {
    s += 1;
    zaytun1.style.opacity = "1";
    zaytun2.style.opacity = "1";
    zaytun3.style.opacity = "1";
    zaytun4.style.opacity = "1";
    zaytun5.style.opacity = "1";
    zaytun6.style.opacity = "1";
    zaytun7.style.opacity = "1";
    zaytun8.style.opacity = "1";
    zaytun9.style.opacity = "1";
    zaytun10.style.opacity = "1";
  } else {
    s -= 1;
    zaytun1.style.opacity = "0";
    zaytun2.style.opacity = "0";
    zaytun3.style.opacity = "0";
    zaytun4.style.opacity = "0";
    zaytun5.style.opacity = "0";
    zaytun6.style.opacity = "0";
    zaytun7.style.opacity = "0";
    zaytun8.style.opacity = "0";
    zaytun9.style.opacity = "0";
    zaytun10.style.opacity = "0";
  }
  summa.textContent = `${s}$`;
});
ketchupadd.addEventListener("click", () => {
  let ketchup1 = document.querySelector(".ketchup1");
  let ketchup2 = document.querySelector(".ketchup2");
  let ketchup3 = document.querySelector(".ketchup3");
  let ketchup4 = document.querySelector(".ketchup4");
  if (ketchupadd.checked) {
    s += 1;
    ketchup1.style.opacity = "1";
    ketchup2.style.opacity = "1";
    ketchup3.style.opacity = "1";
    ketchup4.style.opacity = "1";
  } else {
    ketchup1.style.opacity = "0";
    ketchup2.style.opacity = "0";
    ketchup3.style.opacity = "0";
    ketchup4.style.opacity = "0";
    s -= 1;
  }
  summa.textContent = `${s}$`;
});
mayanezadd.addEventListener("click", () => {
  let mayanez1 = document.querySelector(".mayanez1");
  let mayanez2 = document.querySelector(".mayanez2");
  let mayanez3 = document.querySelector(".mayanez3");
  let mayanez4 = document.querySelector(".mayanez4");
  if (mayanezadd.checked) {
    s += 1;
    mayanez1.style.opacity = "1";
    mayanez2.style.opacity = "1";
    mayanez3.style.opacity = "1";
    mayanez4.style.opacity = "1";
  } else {
    s -= 1;
    mayanez1.style.opacity = "0";
    mayanez2.style.opacity = "0";
    mayanez3.style.opacity = "0";
    mayanez4.style.opacity = "0";
  }
  summa.textContent = `${s}$`;
});
qoziqorinadd.addEventListener("click", () => {
  let qoziqorin1 = document.querySelector(".qoziqorin1");
  let qoziqorin2 = document.querySelector(".qoziqorin2");
  let qoziqorin3 = document.querySelector(".qoziqorin3");
  let qoziqorin4 = document.querySelector(".qoziqorin4");
  let qoziqorin5 = document.querySelector(".qoziqorin5");
  if (qoziqorinadd.checked) {
    s += 1;
    qoziqorin1.style.opacity = "1";
    qoziqorin2.style.opacity = "1";
    qoziqorin3.style.opacity = "1";
    qoziqorin4.style.opacity = "1";
    qoziqorin5.style.opacity = "1";
  } else {
    s -= 1;
    qoziqorin1.style.opacity = "0";
    qoziqorin2.style.opacity = "0";
    qoziqorin3.style.opacity = "0";
    qoziqorin4.style.opacity = "0";
    qoziqorin5.style.opacity = "0";
  }
  summa.textContent = `${s}$`;
});

kalbasaadd.addEventListener("click", () => {
  let kalbasa1 = document.querySelector(".kalbasa1");
  let kalbasa2 = document.querySelector(".kalbasa2");
  let kalbasa3 = document.querySelector(".kalbasa3");
  let kalbasa4 = document.querySelector(".kalbasa4");
  let kalbasa5 = document.querySelector(".kalbasa5");
  if (kalbasaadd.checked) {
    s += 3;
    kalbasa1.style.opacity = "1";
    kalbasa2.style.opacity = "1";
    kalbasa3.style.opacity = "1";
    kalbasa4.style.opacity = "1";
    kalbasa5.style.opacity = "1";
  } else {
    s -= 3;
    kalbasa1.style.opacity = "0";
    kalbasa2.style.opacity = "0";
    kalbasa3.style.opacity = "0";
    kalbasa4.style.opacity = "0";
    kalbasa5.style.opacity = "0";
  }

  summa.textContent = `${s}$`;
});
