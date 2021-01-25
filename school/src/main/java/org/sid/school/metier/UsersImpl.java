package org.sid.school.metier;

import org.sid.school.dao.UserRepository;
import org.sid.school.entities.AgentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Override
    public List<AgentUser> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<AgentUser> getUser(String id) {
        return userRepository.findById(id);
    }
}
