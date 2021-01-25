package org.sid.school.web;

import org.sid.school.Account.AccountService;
import org.sid.school.entities.AgentUser;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Role;
import org.sid.school.metier.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    AccountService accountService ;
    @Autowired
    UserService userService;

    @PostMapping("/saveUser")
    public AgentUser saveUser(@RequestBody AgentUser user) throws Exception {
        AgentUser user1 = accountService.saveCompte(user, user.getPassword()) ;
        //accountService.addRoleToCompte(user1.getLogin(),user1.getRole().getAuthority());
        return user1 ;
    }

    @GetMapping("/listUsers")
    public List<AgentUser> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/users/{id}")
    public Optional<AgentUser> getUser(@PathVariable("id") String id){
        return userService.getUser(id);
    }
}
