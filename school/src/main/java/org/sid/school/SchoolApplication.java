package org.sid.school;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.io.IOUtils;
import org.apache.commons.math3.random.RandomDataGenerator;
import org.sid.school.Account.AccountService;
import org.sid.school.dao.*;
import org.sid.school.entities.*;
import org.sid.school.metier.CoursService;
import org.sid.school.metier.EtudiantService;
import org.sid.school.metier.GalleryService;
import org.sid.school.metier.UtilsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.servlet.ServletContext;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.List;

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
    AgendaRepository agendaRepository;
    @Autowired
    AccountService accountService;
    @Autowired
    private UtilsService utilsService ;
    @Autowired
    EtudiantService etudiantService;
    @Autowired
    CoursService coursService;
    @Autowired
    GalleryService galleryService;

    @Autowired
    ServletContext context;

    @Autowired
    private RepositoryRestConfiguration restConfiguration;

    private static final int IMG_WIDTH = 1100;
    private static final int IMG_HEIGHT = 800;

    public static void main(String[] args) {
        SpringApplication.run(SchoolApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        restConfiguration.exposeIdsFor(Etudiant.class,Role.class,Programme.class,Classe.class,AgentUser.class,Gallery.class);


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

        String files0 = context.getRealPath("/images/1.jpeg");
        File file0 = new File(files0);
        FileInputStream input = new FileInputStream(file0);
        MultipartFile multipartFile1 = new MockMultipartFile("file",
                file0.getName(), "application/octet-stream", IOUtils.toByteArray(input));

        String files2 = context.getRealPath("/images/2.jpeg");
        File file2 = new File(files2);
        FileInputStream input1 = new FileInputStream(file2);
        MultipartFile multipartFile2 = new MockMultipartFile("file",
                file2.getName(), "application/octet-stream", IOUtils.toByteArray(input1));

        String files3 = context.getRealPath("/images/3.jpeg");
        File file3 = new File(files3);
        FileInputStream input2 = new FileInputStream(file3);
        MultipartFile multipartFile3 = new MockMultipartFile("file",
                file3.getName(), "application/octet-stream", IOUtils.toByteArray(input2));

        String files4 = context.getRealPath("/images/4.jpeg");
        File file4 = new File(files4);
        FileInputStream input3 = new FileInputStream(file4);
        MultipartFile multipartFile4 = new MockMultipartFile("file",
                file4.getName(), "application/octet-stream", IOUtils.toByteArray(input3));

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
        etudiant1.setPhoto(utilsService.modifyFileName(multipartFile1));
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
        etudiant2.setPhoto(utilsService.modifyFileName(multipartFile2));
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
        etudiant3.setPhoto(utilsService.modifyFileName(multipartFile3));
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
        etudiant4.setPhoto(utilsService.modifyFileName(multipartFile4));
        SimpleDateFormat formatter3 = new SimpleDateFormat("yyyy");
        String numEtudiant3 = formatter.format(new Date()) + UUID.randomUUID().toString().substring(0,4).toUpperCase();
        etudiant4.setNumStudent(numEtudiant3);
        etudiantRepository.save(etudiant4);

        Agenda agenda = new Agenda();
        agenda.setAllDay(false);
        agenda.setLocation("Dkr");
        agenda.setSubject("test");
        agenda.setDescription("test ");
        agenda.setStartTime(new Date());
        agenda.setEndTime(new Date());
        agendaRepository.save(agenda);

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
            user.setTel(e.getTel());
            accountService.saveCompte(user, user.getPassword());
            accountService.addRoleToCompte(user.getLogin(),r3.getAuthority());

        });

        String filesPath = context.getRealPath("/images/cv_Abou_Sow_1610398121058.pdf");
        for (int i = 1; i < 7; i++) {
            Cours cours = new Cours();
            cours.setCode("cours " + i);
            cours.setDate_cours(new Date());
            cours.setLibelle("Cours test " + i);
            cours.setProgramme(programme);
            cours.setFile(filesPath);
            cours.setDescription("Description " + i);

            Cours c = coursRepository.save(cours);

        }

 /*       Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DATE, 1);
        Date tenSecondsAgo = calendar.getTime();
        Date d = new Date(System.currentTimeMillis()+24*3600);
        Date g = new Date();
        System.out.println("test ======== >>>>>"+ tenSecondsAgo );*/

       // RandomDataGenerator randomDataGenerator = new RandomDataGenerator();

        String filesPath1 = context.getRealPath("/images/test2.jpeg");
        String filesPath2 = context.getRealPath("/images/");
     /*   File input = new File(filesPath1);
        BufferedImage image = ImageIO.read(input);

        BufferedImage resized = resize1(image, 800, 1920);

        String filesPath2 = context.getRealPath("/images/");
        File output = new File(filesPath2+"12348.jpg");
        ImageIO.write(resized, "jpg", output);

        List<MultipartFile> images = new ArrayList<>();
        for(int i=1;i<19;i++){
            String files = context.getRealPath("/images/"+i+".jpeg");
            File file = new File(files);

            FileInputStream input = new FileInputStream(file);
            MultipartFile multipartFile = new MockMultipartFile("file", file.getName(), "application/octet-stream", IOUtils.toByteArray(input));

            images.add(multipartFile) ;

        }
*/
        String files1 = context.getRealPath("/images/1.jpg");
        File file = new File(files1);

        FileInputStream input5 = new FileInputStream(file);
        MultipartFile multipartFile7 = new MockMultipartFile("file", file.getName(), "application/octet-stream", IOUtils.toByteArray(input));

        Gallery gallery = new Gallery();
        gallery.setDescription("Gallery test");
        gallery.setName("GalleryTest");

        ObjectMapper mapper = new ObjectMapper();
        String JsonGallery = "";
        try {
            // convert user object to json string and return it
            JsonGallery =  mapper.writeValueAsString(gallery);
        }
        catch (JsonGenerationException | JsonMappingException e) {
            // catch various errors
            e.printStackTrace();
        }

        galleryService.postGallery(multipartFile1,JsonGallery);



      /*  Path source = Paths.get(filesPath1);
        Path target = Paths.get(filesPath2+"12353.jpeg");

        try (InputStream is = new FileInputStream(source.toFile())) {
            resize(is, target, IMG_WIDTH, IMG_HEIGHT);
        }
*/
        System.out.println(" test and ");


    }

    private static BufferedImage resize1(BufferedImage img, int height, int width) {

        Image tmp = img.getScaledInstance(width, height, Image.SCALE_AREA_AVERAGING);
        BufferedImage resized = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2d = resized.createGraphics();
        g2d.drawImage(tmp, 0, 0, null);
        g2d.dispose();
        return resized;
    }

    private static void resize(InputStream input, Path target,
                               int width, int height) throws IOException {

        // read an image to BufferedImage for processing
        BufferedImage originalImage = ImageIO.read(input);

        // create a new BufferedImage for drawing
        BufferedImage newResizedImage
                = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g = newResizedImage.createGraphics();

        //g.setBackground(Color.WHITE);
        //g.setPaint(Color.WHITE);

        // background transparent
        g.setComposite(AlphaComposite.Src);
        g.fillRect(0, 0, width, height);

        /* try addRenderingHints()
        // VALUE_RENDER_DEFAULT = good tradeoff of performance vs quality
        // VALUE_RENDER_SPEED   = prefer speed
        // VALUE_RENDER_QUALITY = prefer quality
        g.setRenderingHint(RenderingHints.KEY_RENDERING,
                              RenderingHints.VALUE_RENDER_QUALITY);

        // controls how image pixels are filtered or resampled
        g.setRenderingHint(RenderingHints.KEY_INTERPOLATION,
                              RenderingHints.VALUE_INTERPOLATION_BILINEAR);

        // antialiasing, on
        g.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
                              RenderingHints.VALUE_ANTIALIAS_ON);*/

        Map<RenderingHints.Key,Object> hints = new HashMap<>();
        hints.put(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
        hints.put(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
        hints.put(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
        g.addRenderingHints(hints);

        // puts the original image into the newResizedImage
        g.drawImage(originalImage, 0, 0, IMG_WIDTH, IMG_HEIGHT, null);
        g.dispose();

        // get file extension
        String s = target.getFileName().toString();
        String fileExtension = s.substring(s.lastIndexOf(".") + 1);

        // we want image in png format
        ImageIO.write(newResizedImage, fileExtension, target.toFile());

    }

    @Bean
    BCryptPasswordEncoder getBCPE() {
        return new BCryptPasswordEncoder();
    }


}
