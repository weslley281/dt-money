import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionContext } from '../../contexts/TransactionsContext';
import { SearchForm } from './components/SearshForm';
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

interface Transactions {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const { transactions } = useContext(TransactionContext);
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' ? '-' : '+'}
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
