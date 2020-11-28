package org.sid.school;

import org.sid.school.dao.*;
import org.sid.school.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class SchoolApplication implements CommandLineRunner {

	@Autowired
	TuitionRepository tuitionRepository;
	@Autowired
	ProgrammeRepository programmeRepository;
	@Autowired
	EtudiantRepository etudiantRepository;
	@Autowired
	ClasseRepository classeRepository ;
	@Autowired
	CoursRepository coursRepository ;
	@Autowired
	TuteurRepository tuteurRepository;

	public static void main(String[] args) {
		SpringApplication.run(SchoolApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {

		Tuition tuition = new Tuition();
		tuition.setCode("t1");
		tuition.setDate_created(new Date());
		tuition.setLibelle("the bronze membership");
		tuition.setPrix(250.0);
		tuition.setDropOff(0);
		tuitionRepository.save(tuition);

		Tuition tuition1 = new Tuition();
		tuition1.setCode("t2");
		tuition1.setDate_created(new Date());
		tuition1.setLibelle("the silver membership");
		tuition1.setPrix(1000.0);
		tuition1.setDropOff(25);
		tuitionRepository.save(tuition1);

		Tuition tuition2 = new Tuition();
		tuition2.setCode("t3");
		tuition2.setDate_created(new Date());
		tuition2.setLibelle("the silver membership");
		tuition2.setPrix(12000.0);
		tuition2.setDropOff(30);
		tuitionRepository.save(tuition2);

		Programme programme = new Programme();
		programme.setCode_programme("p1");
		programme.setDate_created(new Date());
		programme.setLibelle("test1");
		programme.setTypeProgramme("type 1");
		programmeRepository.save(programme);

		/*Classe classe = new Classe();
		classe.setCode("c1");
		classe.setDate_created(new Date());
		classe.setLibelle("classe1");
		classe.setNbre_max_etudiant(10);
		classeRepository.save(classe);*/

		for (int i = 1; i < 30; i++) {
			Classe classe = new Classe();
			classe.setCode("c" +i);
			classe.setDate_created(new Date());
			classe.setLibelle("classe"+i);
			classe.setNbre_max_etudiant(10);
			classeRepository.save(classe);

		}

		Tuteur tuteur = new Tuteur() ;
		tuteur.setNom("N1");
		tuteur.setPrenom("P1");
		tuteur.setEmail("email1@gmail.com");
		tuteur.setTel("123456789");
		tuteur.setTypeTuteur("Father");
		tuteurRepository.save(tuteur) ;


		//test
		Etudiant etudiant = new Etudiant();
		etudiant.setAddress("New York");
		etudiant.setFirstName("Amina");
		etudiant.setLastName("SOW");
		etudiant.setEmail("amina@gmail.com");
		etudiant.setDateNaissance(new Date());
		etudiant.setFraisInscription(120.0);
		etudiant.setTel("7789876534");
		etudiant.setNationalite("SN");
		etudiant.setSexe("Femme");
		etudiant.setTuteur(tuteur);
		//etudiant.setProgramme(programmeRepository.getOne(programme.getId()));
		//etudiant.setClasse(classeRepository.getOne(classe.getId()));
		etudiantRepository.save(etudiant);

		Etudiant etudiant1 = new Etudiant();
		etudiant1.setAddress("New York");
		etudiant1.setFirstName("Fatou");
		etudiant1.setLastName("Dia");
		etudiant1.setEmail("fatou@gmail.com");
		etudiant1.setDateNaissance(new Date());
		etudiant1.setFraisInscription(120.0);
		etudiant1.setTel("77765433");
		etudiant1.setNationalite("US");
		etudiant1.setSexe("Femme");
		etudiantRepository.save(etudiant1);

		Etudiant etudiant2 = new Etudiant();
		etudiant2.setAddress("dakar");
		etudiant2.setFirstName("aida");
		etudiant2.setLastName("Diallo");
		etudiant2.setEmail("aida@gmail.com");
		etudiant2.setDateNaissance(new Date());
		etudiant2.setFraisInscription(120.0);
		etudiant2.setTel("77765433");
		etudiant2.setNationalite("US");
		etudiant2.setSexe("Femme");
		etudiantRepository.save(etudiant2);

		Etudiant etudiant3 = new Etudiant();
		etudiant3.setAddress("Guediawaye");
		etudiant3.setFirstName("Fatou");
		etudiant3.setLastName("Dia");
		etudiant3.setEmail("fatou@gmail.com");
		etudiant3.setDateNaissance(new Date());
		etudiant3.setFraisInscription(120.0);
		etudiant3.setTel("77765433");
		etudiant3.setNationalite("US");
		etudiant3.setSexe("Femme");
		etudiantRepository.save(etudiant3);

		Etudiant etudiant4 = new Etudiant();
		etudiant4.setAddress("thiaroye");
		etudiant4.setFirstName("Fatou");
		etudiant4.setLastName("Fall");
		etudiant4.setEmail("fatou@gmail.com");
		etudiant4.setDateNaissance(new Date());
		etudiant4.setFraisInscription(120.0);
		etudiant4.setTel("77765433");
		etudiant4.setNationalite("US");
		etudiant4.setSexe("Femme");
		etudiantRepository.save(etudiant4);


		/*Etudiant etudiant5 = new Etudiant();
		etudiant5.setAddress("New York");
		etudiant5.setFirstName("kadia");
		etudiant5.setLastName("Diouf");
		etudiant5.setEmail("kadia@gmail.com");
		etudiant5.setDateNaissance(new Date());
		etudiant5.setFraisInscription(120.0);
		etudiant5.setTel("77454549545");
		etudiant5.setNationalite("US");
		etudiant5.setSexe("Femme");
		etudiantRepository.save(etudiant5);


		Etudiant etudiant6 = new Etudiant();
		etudiant6.setAddress("Thies");
		etudiant6.setFirstName("Maya");
		etudiant6.setLastName("Kane");
		etudiant6.setEmail("kane@gmail.com");
		etudiant6.setDateNaissance(new Date());
		etudiant6.setFraisInscription(120.0);
		etudiant6.setTel("77765433");
		etudiant6.setNationalite("US");
		etudiant6.setSexe("Femme");
		etudiantRepository.save(etudiant6);

		Etudiant etudiant7 = new Etudiant();
		etudiant7.setAddress("New York");
		etudiant7.setFirstName("Dieyna");
		etudiant7.setLastName("Sow");
		etudiant7.setEmail("sow@gmail.com");
		etudiant7.setDateNaissance(new Date());
		etudiant7.setFraisInscription(120.0);
		etudiant7.setTel("77765433");
		etudiant7.setNationalite("US");
		etudiant7.setSexe("Femme");
		etudiantRepository.save(etudiant7);

		Etudiant etudiant8 = new Etudiant();
		etudiant8.setAddress("DkR");
		etudiant8.setFirstName("Aida");
		etudiant8.setLastName("diagn");
		etudiant8.setEmail("aida@gmail.com");
		etudiant8.setDateNaissance(new Date());
		etudiant8.setFraisInscription(120.0);
		etudiant8.setTel("77765433");
		etudiant8.setNationalite("US");
		etudiant8.setSexe("Femme");
		etudiantRepository.save(etudiant8);

		Etudiant etudiant9 = new Etudiant();
		etudiant9.setAddress("DkR");
		etudiant9.setFirstName("raki");
		etudiant9.setLastName("gam");
		etudiant9.setEmail("gam@gmail.com");
		etudiant9.setDateNaissance(new Date());
		etudiant9.setFraisInscription(120.0);
		etudiant9.setTel("77765433");
		etudiant9.setNationalite("US");
		etudiant9.setSexe("Femme");
		etudiantRepository.save(etudiant9);

		Etudiant etudiantn = new Etudiant();
		etudiantn.setAddress("DkR");
		etudiantn.setFirstName("oumou");
		etudiantn.setLastName("gam");
		etudiantn.setEmail("oumou@gmail.com");
		etudiantn.setDateNaissance(new Date());
		etudiantn.setFraisInscription(120.0);
		etudiantn.setTel("77765433");
		etudiantn.setNationalite("US");
		etudiantn.setSexe("Femme");
		etudiantRepository.save(etudiantn);*/

		Cours c = new Cours();
		c.setCode("cours1");
		c.setLibelle("cours Test");
		c.setDescription(" cours test 1");
		c.setDate_cours(new Date());
		coursRepository.save(c) ;


	}


}
