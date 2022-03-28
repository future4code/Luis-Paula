type CLIENTES = {
    cliente:string,
    saldoTotal:number,
    debitos:number[]
}
const clientes:CLIENTES[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


const fazerEmprestimos = () => {

    return clientes.filter((item) => {
        const add = (a:number, b:number) => {
            return a + b
        }
        if(item.saldoTotal < item.debitos.reduce(add, 0)){
            return item
        }
    })
}

console.log(fazerEmprestimos())