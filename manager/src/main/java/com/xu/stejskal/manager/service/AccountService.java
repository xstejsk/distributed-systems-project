package com.xu.stejskal.manager.service;

import com.xu.stejskal.manager.model.Account;
import com.xu.stejskal.manager.service.model.AccountDTO;
import org.springframework.data.domain.Page;

public interface AccountService {

    Float getBalance(Long accountId);

    Account getAccount(Long accountId);

    void withdraw(Long accountId, float amount);

    void deposit(Long accountId, float amount);

    Page<AccountDTO> getAll(int page, int size);
}
