package com.xu.stejskal.client.scheduler;

import com.xu.stejskal.client.service.ManagerAppService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class HttpRequestsScheduler {

    private final ManagerAppService managerAppService;

    @Value("${account-id}")
    private String accountId;

    @Scheduled(fixedRate = 10000) // 2 seconds
    public void randomDeposit(){
        if (Math.random() < 0.5) return;
        managerAppService.deposit(
                accountId,
                (float) (Math.random() * 1000 + 1)
        );
    }

    @Scheduled(fixedRate = 10000) // 2 seconds
    public void randomWithdraw(){
        if (Math.random() < 0.5) return;
        managerAppService.withdraw(
                accountId,
                (float) (Math.random() * 1000 + 1)
        );
    }
}