package com.xu.stejskal.manager.controller;

import com.xu.stejskal.manager.controller.model.TransactionRequest;
import com.xu.stejskal.manager.model.Transaction;
import com.xu.stejskal.manager.service.AccountService;
import com.xu.stejskal.manager.service.TransactionService;
import com.xu.stejskal.manager.service.model.AccountDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class ApiController {

    private final AccountService accountService;
    private final TransactionService transactionService;

    @GetMapping("/accounts/{accountId}/balance")
    public ResponseEntity<Float> getBalance(@PathVariable Long accountId) {
        return ResponseEntity.ok(accountService.getBalance(accountId));
    }

    @PostMapping("/accounts/{accountId}/deposits")
    public ResponseEntity<Void> deposit(@PathVariable Long accountId, @RequestBody TransactionRequest requestBody) {
        Float amount = requestBody.getAmount();
        accountService.deposit(accountId, amount);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/accounts/{accountId}/withdrawals")
    public ResponseEntity<Void> withdraw(@RequestBody TransactionRequest requestBody, @PathVariable Long accountId) {
        accountService.withdraw(accountId, requestBody.getAmount());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/transactions")
    public ResponseEntity<Page<Transaction>> getTransactions(@RequestParam(required = false) Long accountId,
                                                             @RequestParam(required = false, defaultValue = "20") int size,
                                                             @RequestParam(required = false, defaultValue = "0") int page) {
        return ResponseEntity.ok(transactionService.getTransactions(accountId, size, page));
    }

    @GetMapping("/accounts")
    public ResponseEntity<Page<AccountDTO>> getAccounts(@RequestParam(required = false, defaultValue = "20") int size,
                                                        @RequestParam(required = false, defaultValue = "0") int page) {
        return ResponseEntity.ok(accountService.getAll(page, size));
    }

}
