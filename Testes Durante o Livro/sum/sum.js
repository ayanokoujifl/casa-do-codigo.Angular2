function somar(x, y) {
  y = y || 1
  return x + y
}

console.log(`minha soma será ${somar(5, 4)}`)

function sum_default_parameters(x, y = 1) {
  return x + y
}

console.log(`minha soma será ${sum_default_parameters(5, 6)}`)
