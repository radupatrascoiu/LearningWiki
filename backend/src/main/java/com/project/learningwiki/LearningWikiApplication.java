package com.project.learningwiki;

import com.project.learningwiki.user.UserService;
import com.project.learningwiki.utils.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LearningWikiApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private Util util;

	public static void main(String[] args) {
		SpringApplication.run(LearningWikiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		util.insertFakeDataInDB();
	}
}
