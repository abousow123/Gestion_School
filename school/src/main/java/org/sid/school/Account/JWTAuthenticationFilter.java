package org.sid.school.Account;


import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.sid.school.entities.AgentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter  {
	
	private AuthenticationManager authenticationManager ;

	@Autowired
	private AccountService accountService ;

	public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		
		this.authenticationManager = authenticationManager;
	}
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		
		try {
			AgentUser compte=new ObjectMapper().readValue(request.getInputStream(), AgentUser.class);
			return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(compte.getLogin(),compte.getPassword()));
		} catch (IOException e) {

			throw new RuntimeException(e) ;
		}

	}
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		
		
		User user=(User) authResult.getPrincipal() ;

		List<String> roles =new ArrayList<>() ;
		authResult.getAuthorities().forEach(a->{
			roles.add(a.getAuthority()) ;
			
		});

		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.DATE, 1);
		Date tenSecondsAgo = calendar.getTime();

		String jwt= JWT.create()
				.withIssuer(request.getRequestURI())
				.withSubject(user.getUsername())
				.withArrayClaim("roles", roles.toArray(new String[roles.size()]))
				.withExpiresAt(tenSecondsAgo)
				.sign(Algorithm.HMAC256(SecurityParams.SECRET));
		response.addHeader(SecurityParams.JWT_HEADER_NAME, SecurityParams.HEADER_PREFIX + jwt);
	
	}
	
	

	
}
