package org.sid.school.Account;


import com.fasterxml.jackson.core.JsonProcessingException;
import org.sid.school.entities.AgentUser;
import org.sid.school.entities.Role;


public interface AccountService {
	
	public AgentUser saveCompte(AgentUser user, String passwordConfirmed) ;
	
    public Role saveRole(Role role) ;
	
	public AgentUser loadCompteBylogin(String login);
	
	public void addRoleToCompte(String login,String nomrole) ;

	public AgentUser updateCompte(String id, AgentUser agentUser);

	public AgentUser removeRole(String role, String agentUser) throws JsonProcessingException;

}
