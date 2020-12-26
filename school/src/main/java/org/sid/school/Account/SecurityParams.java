package org.sid.school.Account;

public interface SecurityParams {
	
	public static final String JWT_HEADER_NAME="Authorization" ;
	
	public static final String SECRET="abousow798@gmail.com";
	
	public static final long EXPIRATION=20*24*3600 ;
	
	public static final String HEADER_PREFIX= "Bearer ";

}
