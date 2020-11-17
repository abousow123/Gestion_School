package org.sid.school;

import org.sid.school.dao.ClasseRepository;
import org.sid.school.dao.EtudiantRepository;
import org.sid.school.dao.ProgrammeRepository;
import org.sid.school.dao.TuitionRepository;
import org.sid.school.entities.Classe;
import org.sid.school.entities.Etudiant;
import org.sid.school.entities.Programme;
import org.sid.school.entities.Tuition;
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
		programme.setTuition(tuitionRepository.getOne(tuition.getId()));
		programmeRepository.save(programme);

		Classe classe = new Classe();
		classe.setCode("c1");
		classe.setDate_created(new Date());
		classe.setLibelle("classe1");
		classe.setNbre_max_etudiant(10);
		classeRepository.save(classe);



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


	}


}
