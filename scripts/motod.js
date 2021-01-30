const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Salário',
        amount: 500000,
        date: '23/01/2021',
    },
]

const Transaction = {
    incomes(){
        // soma de entradas
    },
    expenses(){
        // soma de saidas
    },
    total(){
        // entradas - saidas
    }
}

const DOM = {
    

    innerHTMLTransaction(){
        const html = `
        <tr>
            <td class="description">Salário</td>
            <td class="income">R$ 5.000,00</td>
            <td class="date">21/01/2021</td>
            <td>
                <img src="/assets/minus.svg" alt="Remover Transação">
            </td>
        </tr>
        `
    }
}