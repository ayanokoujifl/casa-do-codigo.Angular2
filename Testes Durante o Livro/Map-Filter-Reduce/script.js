/*
O método map interage com cada elemento dentro de um array,
chamando uma função de callback e executando determinada lógica descrita no callback.
No final o método retorna um novo Array com as modificações.
*/
//ATENÇÃO: Sempre que precisar manipular cada elemento de um array, use map
array = [2, 4, 6, 8, 12, 13]
novoValor = array.map(num => num * 2)
console.log(novoValor)

/*
O filter pode ser usado para retornar valores que satisfazem um
determinado contexto
*/
nomes = ['Luís', 'Carlos', 'Roberto', 'Lucas']
nomeA = nomes.filter(nome => nome.includes('a'))
console.log(nomeA)

/*
 *O método reduce junta todos os elementos em um só elemento
 */
nomesReduzidos = nomes.reduce((acumulado, nome) => acumulado + '-' + nome)
console.log(nomesReduzidos)
/*
acumulado=valor atual, nome=valor corrente
o valor corrente é a interação com cada elemento, o resultado da interação vai para o valor atual
*/