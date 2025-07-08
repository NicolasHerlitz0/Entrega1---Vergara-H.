// constantes
const dolar = 1;
const divisas = [
{name: "BTC", valor: 2},
{name: "ETH", valor: 4},
{name: "LIT", valor: 0.5},
]
const mensaje = document.getElementById("mensaje");
//funciones

const dolar_divisas = (a, b) => a * b;
const comisionDolar = (a) => {
  const multiplicacion = a * 0.015;
  const resultado = a - multiplicacion;
  return Number(resultado.toFixed(4));
};

const divisas_dolar = (a, b) => a / b; 
const comisionDivisas = (a) => {
  const multiplicacion = a * 0.03;
  const resultado = a - multiplicacion;
  return Number(resultado.toFixed(4));
};

const recargarPagina = (a = "NOS VEMOS EN OTRA OCASIÓN") => {
  alert(a);
  location.reload();
};

function operacionDeCambio(nombreMoneda1, funcionDeConversion ,comision, nombreMoneda2) {
  let monto;
  do {
    let entrada = prompt("Ingrese un monto:");
    if (entrada === null) {
      recargarPagina(`Hasta pronto!`);
      return;
    }
    monto = Number(entrada);
  } while (!monto || monto <= 0);

  const montocompra = comision(funcionDeConversion(monto));
  const confirmacion = confirm(
    `¿Esta seguro que quiere comprar ${montocompra} ${nombreMoneda2} por ${monto} ${nombreMoneda1}?`
  );

  if (!confirmacion) {
    recargarPagina("Operacion cancelada");
    return;
  }

  alert(`Usted ha comprado ${montocompra} ${nombreMoneda2}`);
  console.log(`Usted ha comprado ${montocompra} ${nombreMoneda2}`);
  mensaje.textContent = `FELICIDADES! Usted ha comprado ${montocompra} ${nombreMoneda2}`;
}

// inicio de programa
const primerPaso = alert(
  `Bienvenido a la casa de cambio. 
Nuestra comisión para convertir dólar a crypto es del 1.5%. 
Para convertir crypto a dólar es del 3%.`
);

let decision1;
do {
decision1 = prompt(
    `Que quiere hacer:
    1) Comprar desde dolar a crypto
    2) Comprar desde crypto a dolar`,
    " Ej: 1 "
  )
;
if (decision1 === null) {
  recargarPagina();
}

decision1 = Number(decision1)
 
} while (decision1 !== 1 && decision1 !== 2)

if (decision1 === 1) {
  let decisionDolar_crypto;
  do {decisionDolar_crypto = prompt(
    `Que quiere hacer:
    1) Comprar BTC
    2) Comprar ETH
    3) Comprar LIT
    `
  );
  if (decisionDolar_crypto === null) {
    recargarPagina();
    break;
  };
  decisionDolar_crypto = Number(decisionDolar_crypto)
  } while (decisionDolar_crypto !== 1 && decisionDolar_crypto !== 2 && decisionDolar_crypto !== 3)
  
  switch (decisionDolar_crypto) {
    case 1: 
    operacionDeCambio("Dolar", (monto) => dolar_divisas(monto, divisas[0].valor), comisionDolar, divisas[0].name);
    break;

    case 2: 
    operacionDeCambio("Dolar", (monto) => dolar_divisas(monto, divisas[1].valor), comisionDolar, divisas[1].name);
    break;

    case 3: 
    operacionDeCambio("Dolar", (monto) => dolar_divisas(monto, divisas[2].valor), comisionDolar, divisas[2].name);
    break;
  }
  } else {
  let decisionCrypto_Dolar;
  do {decisionCrypto_Dolar = prompt(
    `Que quiere hacer:
    1) Vender BTC
    2) Vender ETH
    3) Vender LIT
    `
  );
  if (decisionCrypto_Dolar === null) {
    recargarPagina();
    break;
  };
  decisionCrypto_Dolar = Number(decisionCrypto_Dolar)
  } while (decisionCrypto_Dolar !== 1 && decisionCrypto_Dolar !== 2 && decisionCrypto_Dolar !== 3)
  
  switch (decisionCrypto_Dolar) {
    case 1: 
    operacionDeCambio(divisas[0].name, (monto) => divisas_dolar(monto, divisas[0].valor), comisionDivisas, "Dolar");
    break;

    case 2: 
    operacionDeCambio(divisas[1].name, (monto) => divisas_dolar(monto, divisas[1].valor), comisionDivisas, "Dolar");
    break;

    case 3: 
    operacionDeCambio(divisas[2].name, (monto) => divisas_dolar(monto, divisas[2].valor), comisionDivisas, "Dolar");
    break;
  }
  }


