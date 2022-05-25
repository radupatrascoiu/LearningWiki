package com.project.learningwiki.user;

import com.project.learningwiki.solved_test.SolvedTest;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserDto {
    private Integer id;
    private String name;
    private String email;
    private String role;
    private List<SolvedTest> solvedTestList;

    public UserDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.role = user.getRole();
    }
}
