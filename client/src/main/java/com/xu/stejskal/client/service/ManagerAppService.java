package com.xu.stejskal.client.service;

public interface ManagerAppService {

    void deposit(String accountId, Float amount);

    void withdraw(String accountId, Float amount);
}
