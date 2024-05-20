package com.xu.stejskal.manager.service.impl;

import com.xu.stejskal.manager.model.Account;
import com.xu.stejskal.manager.model.Transaction;
import com.xu.stejskal.manager.repository.TransactionRepository;
import com.xu.stejskal.manager.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;

    @Override
    public void saveTransaction(Account account, Float amount, boolean isDeposit) {
        Transaction transaction = new Transaction();
        transaction.setAccount(account);
        transaction.setAmount(amount);
        transaction.setDeposit(isDeposit);
        transaction.setTimestamp(LocalDateTime.now());
        transactionRepository.save(transaction);
    }

    @Override
    public Page<Transaction> getTransactions(Long accountId, int size, int page) {
        if (accountId == null) {
            return transactionRepository.findAll(PageRequest.of(page, size, Sort.by("timestamp").descending()));
        }
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("timestamp").descending());
        return transactionRepository.findAllByAccountId(accountId, pageRequest);
    }


}
