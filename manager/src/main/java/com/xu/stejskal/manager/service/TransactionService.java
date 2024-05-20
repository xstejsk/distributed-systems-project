package com.xu.stejskal.manager.service;

import com.xu.stejskal.manager.model.Account;
import com.xu.stejskal.manager.model.Transaction;
import org.springframework.data.domain.Page;

public interface TransactionService {

    void saveTransaction(Account account, Float amount, boolean isDeposit);

    Page<Transaction> getTransactions(Long accountId, int size, int page);
}
