import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api';

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

// parou em 10 min
interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }
// ou:  (pode usar pick pra selecionar os campos que você quer)
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

// deixa ele ter conteudo dentro dele
interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    function createTransaction(transaction: TransactionInput) {

        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}
