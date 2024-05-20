package com.xu.stejskal.manager.service.impl;

import com.xu.stejskal.manager.exceptions.ResourceNotFoundException;
import com.xu.stejskal.manager.model.Account;
import com.xu.stejskal.manager.repository.AccountRepository;
import com.xu.stejskal.manager.service.AccountService;
import com.xu.stejskal.manager.service.TransactionService;
import com.xu.stejskal.manager.service.model.AccountDTO;
import com.xu.stejskal.manager.service.model.exceptions.InsufficientFundsException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;
    private final TransactionService transactionService;

    @Override
    public Float getBalance(Long accountId) {
        return getAccount(accountId).getBalance();
    }

    @Override
    public Account getAccount(Long accountId) {
        return accountRepository.findById(accountId).orElseThrow(() ->
                new ResourceNotFoundException("Account with id " + accountId + " not found"));
    }

    @Override
    @Transactional
    public void withdraw(Long accountId, float amount) {
        Account account = getAccount(accountId);
        if (account.getBalance() < amount) {
            throw new InsufficientFundsException("Insufficient funds");
        }
        account.withdraw(amount);
        accountRepository.save(account);
        transactionService.saveTransaction(account, amount, false);
        log.info("Withdrew " + amount + " from account " + accountId);
    }

    @Override
    public void deposit(Long accountId, float amount) {
        Account account = getAccount(accountId);
        account.deposit(amount);
        accountRepository.save(account);
        transactionService.saveTransaction(account, amount, true);
        log.info("Deposited " + amount + " to account " + accountId);
    }

    @Override
    public Page<AccountDTO> getAll(int page, int size) {
        return accountRepository.findAll(PageRequest.of(page, size))
                .map(AccountDTO::new);
    }


}
