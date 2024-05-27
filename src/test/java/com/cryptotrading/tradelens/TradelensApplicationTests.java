package com.cryptotrading.tradelens;

import com.cryptotrading.tradelens.entity.Role;
import com.cryptotrading.tradelens.entity.UserEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Random;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class TradelensApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testFindAllUsers() throws Exception {
        mockMvc.perform(get("/api/v1/user"))
               .andExpect(status().isForbidden());
    }

    @Test
    void testFindUserById() throws Exception {
        Long userId = 19L; // replace with a valid user ID
        mockMvc.perform(get("/api/v1/user/" + userId))
               .andExpect(status().isForbidden());
    }

	@Test
	void testSaveUser() throws Exception {
		Random rand = new Random();
		UserEntity userEntity = new UserEntity();
		userEntity.setUsername("Test User");
		int random_digit = rand.nextInt();
		userEntity.setEmail("test" + random_digit + "@yahoo.com");
		userEntity.setId(0L);
		userEntity.setPassword("dummy123");
		userEntity.setRole(Role.USER);


		mockMvc.perform(post("/api/v1/user")
				.contentType(MediaType.APPLICATION_JSON)
				.content(new ObjectMapper().writeValueAsString(userEntity)))
				.andExpect(status().isForbidden());
	}

	@Test
	void testUpdateUser() throws Exception {
		UserEntity userEntity = new UserEntity();
		userEntity.setId(19L); // replace with a valid user ID
		userEntity.setUsername("Updated User");
		// set other properties of userEntity...

		mockMvc.perform(put("/api/v1/user")
				.contentType(MediaType.APPLICATION_JSON)
				.content(new ObjectMapper().writeValueAsString(userEntity)))
				.andExpect(status().isForbidden());
	}

	@Test
	void testDeleteUser() throws Exception {
		Long userId = 19L; // replace with a valid user ID

		mockMvc.perform(delete("/api/v1/user/" + userId))
				.andExpect(status().isForbidden());
	}
}