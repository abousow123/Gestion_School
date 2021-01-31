package org.sid.school.metier;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;

@Service
public class UtilsImlp implements UtilsService{
    @Autowired
    ServletContext context;

    @Override
    public String getPhoto(String fileName) {
        String image = null;
        String filesPath = context.getRealPath("/images");
        File fileFolder = new File(filesPath);
        if (fileFolder != null) {
            for (final File file : fileFolder.listFiles()) {
                if (!file.isDirectory()) {
                    String encodeBase64 = null;
                    try {
                        if (fileName.equals(file.getName())) {
                            String extension = FilenameUtils.getExtension(file.getName());
                            // String nom =
                            // FilenameUtils.getBaseName(file.getName()) ;
                            // System.out.println("nom photo = " + file.getName());
                            FileInputStream fileInputStream = new FileInputStream(file);
                            byte[] bytes = new byte[(int) file.length()];
                            fileInputStream.read(bytes);
                            encodeBase64 = Base64.getEncoder().encodeToString(bytes);
                            image = "data:image/" + extension + ";base64," + encodeBase64;
                            fileInputStream.close();
                        }
                    } catch (Exception e) {
                        // TODO: handle exception
                    }
                }
            }
        }
        // System.out.println(image);
        return image;
    }

    @Override
    public String modifyFileName(MultipartFile file) throws JsonParseException, JsonMappingException, IOException {
        boolean isExist = new File(context.getRealPath("/images/")).exists();
        if (!isExist) {
            new File(context.getRealPath("/images/")).mkdir();
        }
        String fileName = file.getOriginalFilename();
        String modifyFileName = FilenameUtils.getBaseName(fileName) + "_" + System.currentTimeMillis() + "."
                + FilenameUtils.getExtension(fileName);
        File serverFile = new File(context.getRealPath("/images/" + File.separator + modifyFileName));
        try {
            FileUtils.writeByteArrayToFile(serverFile, file.getBytes());
        } catch (Exception e) {
            // TODO: handle exception
        }
        return modifyFileName ;
    }

    @Override
    public String getFile(String fileName) {
        String fichier = null;
        String filesPath = context.getRealPath("/fichier");
        File fileFolder = new File(filesPath);
        if (fileFolder != null) {
            for (final File file : fileFolder.listFiles()) {
                if (!file.isDirectory()) {
                    String encodeBase64 = null;
                    try {
                        if (fileName.equals(file.getName())) {
                            String extension = FilenameUtils.getExtension(file.getName());
                            // String nom =
                            // FilenameUtils.getBaseName(file.getName()) ;
                            // System.out.println("nom photo = " + file.getName());
                            FileInputStream fileInputStream = new FileInputStream(file);
                            byte[] bytes = new byte[(int) file.length()];
                            fileInputStream.read(bytes);
                            encodeBase64 = Base64.getEncoder().encodeToString(bytes);
                            fichier = "data:fichier/" + extension + ";base64," + encodeBase64;
                            fileInputStream.close();
                        }
                    } catch (Exception e) {
                        // TODO: handle exception
                    }
                }
            }
        }
        // System.out.println(image);
        return fichier;
    }

    @Override
    public String modifyFileNameFichier(MultipartFile file) throws JsonParseException, JsonMappingException, IOException {
        boolean isExist = new File(context.getRealPath("/fichier/")).exists();
        if (!isExist) {
            new File(context.getRealPath("/fichier/")).mkdir();
        }
        String fileName = file.getOriginalFilename();
        String modifyFileName = FilenameUtils.getBaseName(fileName) + "_" + System.currentTimeMillis() + "."
                + FilenameUtils.getExtension(fileName);
        File serverFile = new File(context.getRealPath("/fichier/" + File.separator + modifyFileName));
        try {
            FileUtils.writeByteArrayToFile(serverFile, file.getBytes());
        } catch (Exception e) {
            // TODO: handle exception
        }
        return modifyFileName ;
    }
}
