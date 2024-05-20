package com.xu.stejskal.client.client;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class ManagerAppClient {
    @Bean
    public WebClient webClient() {
        return WebClient.create();
    }
}
