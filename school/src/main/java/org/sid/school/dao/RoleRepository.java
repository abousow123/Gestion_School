package org.sid.school.dao;

import org.sid.school.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RoleRepository extends JpaRepository<Role, Long> {
    @Query("select a from Role a where a.authority like :x")
    public Role findByAuthority(@Param("x")String authority) ;
}
