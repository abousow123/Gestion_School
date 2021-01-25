package org.sid.school;

import org.apache.commons.math3.random.RandomDataGenerator;
import org.sid.school.Account.AccountService;
import org.sid.school.dao.*;
import org.sid.school.entities.*;
import org.sid.school.metier.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

@SpringBootApplication
public class SchoolApplication implements CommandLineRunner {

    @Autowired
    ProgrammeRepository programmeRepository;
    @Autowired
    EtudiantRepository etudiantRepository;
    @Autowired
    ClasseRepository classeRepository;
    @Autowired
    CoursRepository coursRepository;
    @Autowired
    TuteurRepository tuteurRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    AccountService accountService;
    @Autowired
    EtudiantService etudiantService;

    @Autowired
    private RepositoryRestConfiguration restConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(SchoolApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        restConfiguration.exposeIdsFor(Etudiant.class,Role.class,Programme.class,Classe.class,AgentUser.class);


        Programme programme = new Programme();
        programme.setCode_programme("BM");
        programme.setDate_created(new Date());
        programme.setLibelle("the bronze membership");
        programme.setPrix(250.0);
        programme.setDropOff(0);
        programmeRepository.save(programme);

        Programme programme1 = new Programme();
        programme1.setCode_programme("SM");
        programme1.setDate_created(new Date());
        programme1.setLibelle("the silver membership");
        programme1.setPrix(1000.0);
        programme1.setDropOff(25);
        // programme.setTypeProgramme("type 1");
        programmeRepository.save(programme1);

        Programme programme2 = new Programme();
        programme2.setCode_programme("GM");
        programme2.setDate_created(new Date());
        programme2.setLibelle("The gold membership");
        programme2.setPrix(12000.0);
        programme2.setDropOff(30);
        // programme.setTypeProgramme("type 1");
        programmeRepository.save(programme2);


        for (int i = 1; i < 15; i++) {
            Classe classe = new Classe();
            classe.setCode("c" + i);
            classe.setDate_created(new Date());
            classe.setLibelle("classe" + i);
            classe.setNbre_max_etudiant(10);
            classeRepository.save(classe);

        }

        Tuteur tuteur = new Tuteur();
        tuteur.setNom("N1");
        tuteur.setPrenom("P1");
        tuteur.setEmail("email1@gmail.com");
        tuteur.setTel("123456789");
        tuteur.setTypeTuteur("Father");
        tuteurRepository.save(tuteur);


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
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy");
        String numEtudiant0 = formatter.format(new Date()) + UUID.randomUUID().toString().substring(0,4).toUpperCase();
        etudiant.setNumStudent(numEtudiant0);
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
        etudiant1.setTuteur(tuteur);
        SimpleDateFormat formatter0 = new SimpleDateFormat("yyyy");
        String numEtudiant = formatter0.format(new Date()) + UUID.randomUUID().toString().substring(0,4).toUpperCase();
        etudiant1.setNumStudent(numEtudiant);
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
        etudiant2.setTuteur(tuteur);
        SimpleDateFormat formatter1 = new SimpleDateFormat("yyyy");
        String numEtudiant1 = formatter.format(new Date()) + UUID.randomUUID().toString().substring(0,4).toUpperCase();
        etudiant2.setNumStudent(numEtudiant1);
        etudiantRepository.save(etudiant2);

        Etudiant etudiant3 = new Etudiant();
        etudiant3.setAddress("Guediawaye");
        etudiant3.setFirstName("Fatou");
        etudiant3.setLastName("Dia");
        etudiant3.setEmail("fatou1@gmail.com");
        etudiant3.setFeesPays(true);
        etudiant3.setDateNaissance(new Date());
        etudiant3.setFraisInscription(120.0);
        etudiant3.setTel("77765433");
        etudiant3.setNationalite("US");
        etudiant3.setSexe("Femme");
        etudiant3.setTuteur(tuteur);
        SimpleDateFormat formatter2 = new SimpleDateFormat("yyyy");
        String numEtudiant2 = formatter.format(new Date()) + UUID.randomUUID().toString().substring(0,4).toUpperCase();
        etudiant3.setNumStudent(numEtudiant2);
        etudiantRepository.save(etudiant3);

        Etudiant etudiant4 = new Etudiant();
        etudiant4.setAddress("thiaroye");
        etudiant4.setFirstName("Fatou");
        etudiant4.setLastName("Fall");
        etudiant4.setEmail("fatou2@gmail.com");
        etudiant4.setDateNaissance(new Date());
        etudiant4.setFraisInscription(120.0);
        etudiant4.setTel("77765433");
        etudiant4.setNationalite("US");
        etudiant4.setSexe("Femme");
        etudiant4.setTuteur(tuteur);
        SimpleDateFormat formatter3 = new SimpleDateFormat("yyyy");
        String numEtudiant3 = formatter.format(new Date()) + UUID.randomUUID().toString().substring(0,4).toUpperCase();
        etudiant4.setNumStudent(numEtudiant3);
        etudiantRepository.save(etudiant4);

/*
        Etudiant etudiant5 = new Etudiant();
        etudiant5.setAddress("New York");
        etudiant5.setFirstName("kadia");
        etudiant5.setLastName("Diouf");
        etudiant5.setEmail("kadia@gmail.com");
        etudiant5.setFeesPays(true);
        etudiant5.setDateNaissance(new Date());
        etudiant5.setFraisInscription(120.0);
        etudiant5.setTel("77454549545");
        etudiant5.setNationalite("US");
        etudiant5.setSexe("Femme");
        etudiant5.setTuteur(tuteur);
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
        etudiant6.setTuteur(tuteur);
        etudiantRepository.save(etudiant6);

        Etudiant etudiant7 = new Etudiant();
        etudiant7.setAddress("New York");
        etudiant7.setFirstName("Dieyna");
        etudiant7.setLastName("Sow");
        etudiant7.setEmail("sow@gmail.com");
        etudiant7.setDateNaissance(new Date());
        etudiant7.setFraisInscription(120.0);
        etudiant7.setTel("77765433");
        etudiant7.setFeesPays(true);
        etudiant7.setNationalite("US");
        etudiant7.setSexe("Femme");
        etudiant7.setTuteur(tuteur);
        etudiantRepository.save(etudiant7);

        Etudiant etudiant8 = new Etudiant();
        etudiant8.setAddress("DkR");
        etudiant8.setFirstName("Aida");
        etudiant8.setLastName("diagn");
        etudiant8.setEmail("aida1@gmail.com");
        etudiant8.setDateNaissance(new Date());
        etudiant8.setFraisInscription(120.0);
        etudiant8.setTel("77765433");
        etudiant8.setNationalite("US");
        etudiant8.setSexe("Femme");
        etudiant8.setTuteur(tuteur);
        etudiantRepository.save(etudiant8);

        Etudiant etudiant9 = new Etudiant();
        etudiant9.setAddress("DkR");
        etudiant9.setFirstName("raki");
        etudiant9.setLastName("gam");
        etudiant9.setEmail("gam@gmail.com");
        etudiant9.setDateNaissance(new Date());
        etudiant9.setFraisInscription(120.0);
        etudiant9.setTel("77765433");
        etudiant9.setFeesPays(true);
        etudiant9.setNationalite("US");
        etudiant9.setSexe("Femme");
        etudiant9.setTuteur(tuteur);
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
        etudiantn.setTuteur(tuteur);
        etudiantRepository.save(etudiantn); */

        Role r1 = new Role();
        r1.setAuthority("Admin");
        Role r2 = new Role();
        r2.setAuthority("User");
        Role r3 = new Role();
        r3.setAuthority("Studient");
        roleRepository.save(r1);
        roleRepository.save(r2);
        roleRepository.save(r3);

        AgentUser user1 = new AgentUser();
        user1.setPassword("12345");
        user1.setLogin("admin1@gmail.com");
        user1.setFirstName("admin");
        user1.setLastName("admin");
        accountService.saveCompte(user1, user1.getPassword());
        accountService.addRoleToCompte(user1.getLogin(),r1.getAuthority());
        accountService.addRoleToCompte(user1.getLogin(),r2.getAuthority());

        AgentUser user2 = new AgentUser();
        user2.setPassword("12345");
        user2.setLogin("user1@gmail.com");
        user2.setFirstName("user");
        user2.setLastName("user");
        accountService.saveCompte(user2, user2.getPassword());
        accountService.addRoleToCompte(user2.getLogin(),r2.getAuthority());

       etudiantRepository.findAll().forEach(e -> {
            AgentUser user = new AgentUser();
            user.setPassword("12345");
            user.setLogin(e.getEmail());
            user.setFirstName(e.getFirstName());
            user.setLastName(e.getLastName());
            accountService.saveCompte(user, user.getPassword());
            accountService.addRoleToCompte(user.getLogin(),r3.getAuthority());

        });


        for (int i = 1; i < 10; i++) {
            Cours cours = new Cours();
            cours.setCode("cours " + i);
            cours.setDate_cours(new Date());
            cours.setLibelle("Cours test " + i);
            cours.setProgramme(programme);
            cours.setDescription("Description " + i);
     //       classe.setClasse(c);
            Cours c = coursRepository.save(cours);

        }

 /*       Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, 1);
        Date tenSecondsAgo = calendar.getTime();
        Date d = new Date(System.currentTimeMillis()+24*3600);
        Date g = new Date();
        System.out.println("test ======== >>>>>"+ tenSecondsAgo );*/

       // RandomDataGenerator randomDataGenerator = new RandomDataGenerator();






    }

    @Bean
    BCryptPasswordEncoder getBCPE() {
        return new BCryptPasswordEncoder();
    }


}
