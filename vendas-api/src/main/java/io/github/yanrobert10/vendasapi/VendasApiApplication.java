package io.github.yanrobert10.vendasapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RestController
public class VendasApiApplication {
	
	@GetMapping("/hello/{nome}")
	public String hello( @PathVariable String nome) {
		return "Hello" + nome;
	}

	public static void main(String[] args) {
		SpringApplication.run(VendasApiApplication.class, args);
	}

}
