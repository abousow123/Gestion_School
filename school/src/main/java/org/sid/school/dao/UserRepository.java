package org.sid.school.dao;

import org.sid.school.entities.AgentUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UserRepository extends JpaRepository<AgentUser, String> {

    @Query("select a from AgentUser a where a.login like :x")
    public AgentUser findByLogin(@Param("x") String login) ;
}
