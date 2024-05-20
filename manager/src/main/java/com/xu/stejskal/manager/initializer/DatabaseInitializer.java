package com.xu.stejskal.manager.initializer;


import com.xu.stejskal.manager.model.Account;
import com.xu.stejskal.manager.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer implements CommandLineRunner {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public void run(String... args) {
        accountRepository.findById(1L)
                .ifPresentOrElse(account -> {
                    account.setBalance(5000);
                    accountRepository.save(account);
                }, () ->
                accountRepository.save(new Account(1L, 5000, "John Doe")));
    }
}
