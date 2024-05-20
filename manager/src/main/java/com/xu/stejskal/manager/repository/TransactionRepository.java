package com.xu.stejskal.manager.repository;

import com.xu.stejskal.manager.model.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends PagingAndSortingRepository<Transaction, Long>, CrudRepository<Transaction, Long> {

    Page<Transaction> findAllByAccountId(Long accountId, PageRequest pageable);
}
