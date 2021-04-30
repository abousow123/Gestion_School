package org.sid.school.web;

import com.fasterxml.jackson.core.JsonProcessingException;
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

    @PutMapping("/userUpdate/{id}")
    public AgentUser updateUser(@PathVariable("id") String id, @RequestBody AgentUser agentUser){
        return accountService.updateCompte(id,agentUser) ;
    }

    @PostMapping("/removeRole")
    public AgentUser removeRole(@RequestParam("role") String role,@RequestParam("agentUser") String agentUser) throws JsonProcessingException {
        System.out.println("test 1========>");
        return accountService.removeRole(role,agentUser);
    }
}
