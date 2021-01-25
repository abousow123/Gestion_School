package org.sid.school.Account;


import org.sid.school.entities.AgentUser;
import org.sid.school.entities.Role;


public interface AccountService {
	
	public AgentUser saveCompte(AgentUser user, String passwordConfirmed) ;
	
    public Role saveRole(Role role) ;
	
	public AgentUser loadCompteBylogin(String login);
	
	public void addRoleToCompte(String login,String nomrole) ;

	public AgentUser updateCompte(String id, AgentUser agentUser);

}
