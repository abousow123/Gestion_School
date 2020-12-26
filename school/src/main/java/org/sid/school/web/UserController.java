package org.sid.school.web;

import org.sid.school.Account.AccountService;
import org.sid.school.entities.AgentUser;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    AccountService accountService ;

    @PostMapping("/saveUser")
    public AgentUser saveUser(@RequestBody AgentUser user) throws Exception {
        AgentUser user1 = accountService.saveCompte(user, user.getPassword()) ;
        //accountService.addRoleToCompte(user1.getLogin(),user1.getRole().getAuthority());
        return user1 ;
    }
}
