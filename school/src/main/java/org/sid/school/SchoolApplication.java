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
		tuition.setCode("1");
		tuition.setDate_created(new Date());
		tuition.setLibelle("the bronze membership");
		tuition.setPrix(250.0);
		tuitionRepository.save(tuition);

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
		classe.setProgramme(programmeRepository.getOne(programme.getId()));
		classe.setLibelle_specialite("Test");
		classe.setTuition(tuitionRepository.getOne(tuition.getId()));
		classe.setNbre_max_etudiant(10);
		classeRepository.save(classe);


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
		etudiant.setProgramme(programmeRepository.getOne(programme.getId()));
		etudiant.setClasse(classeRepository.getOne(classe.getId()));
		etudiantRepository.save(etudiant);


	}


}
