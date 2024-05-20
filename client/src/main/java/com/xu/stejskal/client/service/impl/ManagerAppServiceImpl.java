package com.xu.stejskal.client.service.impl;

import com.xu.stejskal.client.service.ManagerAppService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class ManagerAppServiceImpl implements ManagerAppService {

    private final WebClient webClient;

    @Value("${deposit-uri}")
    private String depositUri;

    @Value("${withdraw-uri}")
    private String withdrawUri;
    @Override
    public void deposit(String accountId, Float amount) {
        depositUri = depositUri.replace("{accountId}", accountId);
        log.info("depositUri: {}", depositUri);
        webClient.post()
                .uri(depositUri, accountId)
                .bodyValue(Map.of(
                        "amount", amount
                ))
                .retrieve()
                .bodyToMono(Void.class)
                .block();
    }

    @Override
    public void withdraw(String accountId, Float amount) {
        withdrawUri = withdrawUri.replace("{accountId}", accountId);
        log.info("withdrawUri: {}", withdrawUri);
        webClient.post()
                .uri(withdrawUri, accountId)
                .bodyValue(Map.of(
                        "amount", amount
                ))
                .retrieve()
                .bodyToMono(Void.class)
                .block();
    }
}
