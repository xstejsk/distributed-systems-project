package com.xu.stejskal.manager.service.model;

import com.xu.stejskal.manager.model.Account;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountDTO {

    private Long id;
    private float balance;
    private String customer;

    public AccountDTO(Account account) {
        this.id = account.getId();
        this.balance = account.getBalance();
        this.customer = account.getCustomer();
    }

}
