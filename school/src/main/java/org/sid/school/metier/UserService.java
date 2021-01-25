package org.sid.school.metier;

import org.sid.school.entities.AgentUser;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<AgentUser> getUsers();
    Optional<AgentUser> getUser(String id);

}
