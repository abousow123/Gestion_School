package org.sid.school.Account;

import org.sid.school.entities.AgentUser;
import org.sid.school.entities.Role;
import org.sid.school.entities.AgentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	private AccountService accountService ;

	@Override
	public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		AgentUser compte = accountService.loadCompteBylogin(login);
		if (compte==null){
			throw new UsernameNotFoundException("Login incorrect") ;
		}
		Collection<GrantedAuthority> authorities= new ArrayList<>() ;
		compte.getRoles().forEach(r ->{
			authorities.add(new SimpleGrantedAuthority(r.getAuthority())) ;
		});

		return new User(compte.getUsername(),compte.getPassword(),authorities) ;
	}

}
