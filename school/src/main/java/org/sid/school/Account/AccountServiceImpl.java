package org.sid.school.Account;


import org.sid.school.dao.RoleRepository;
import org.sid.school.dao.UserRepository;
import org.sid.school.entities.AgentUser;
import org.sid.school.entities.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class AccountServiceImpl implements AccountService {

    @Autowired
    private UserRepository compteRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public AccountServiceImpl(UserRepository compteRepository, RoleRepository roleRepository,
                              BCryptPasswordEncoder bCryptPasswordEncoder) {

        this.compteRepository = compteRepository;
        this.roleRepository = roleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public AgentUser saveCompte(AgentUser user, String passwordConfirmed) {
        // TODO Auto-generated method stub
        AgentUser c = compteRepository.findByLogin(user.getLogin());
        if (c != null)
            throw new RuntimeException("Il existe un compte avec ce login");
        if (!user.getPassword().equals(passwordConfirmed))
            throw new RuntimeException("Svp confirmĂ© votre mot de passe");
        AgentUser compte = user;
        compte.setId(user.getId());

        compte.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        //compte.setUserActive(true);
        compteRepository.save(compte);
        //addRoleToCompte(user.getLogin(), user.getRole().getAuthority());

        return compte;
    }

    @Override
    public Role saveRole(Role role) {
        // TODO Auto-generated method stub
        roleRepository.save(role);

        return role;
    }

    @Override
    public AgentUser loadCompteBylogin(String login) {
        // TODO Auto-generated method stub
        return compteRepository.findByLogin(login);
    }

    @Override
    public void addRoleToCompte(String login, String nomrole) {
        // TODO Auto-generated method stub
        AgentUser compte = compteRepository.findByLogin(login);
        Role role = roleRepository.findByAuthority(nomrole);
        compte.setRole(role);
        compteRepository.saveAndFlush(compte);

    }

}
