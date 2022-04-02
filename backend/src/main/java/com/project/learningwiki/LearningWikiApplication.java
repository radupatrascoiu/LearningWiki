package com.project.learningwiki;

import com.project.learningwiki.user.User;
import com.project.learningwiki.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class LearningWikiApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(LearningWikiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		List<User> users = userService.getAllUsers();
		users.forEach(System.out::println);
	}
}
