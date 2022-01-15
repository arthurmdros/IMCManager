package com.arthurmdrosdev.IMCManager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arthurmdrosdev.IMCManager.entities.Pessoa;
import com.arthurmdrosdev.IMCManager.repositories.PessoaRepository;

@RestController
@RequestMapping(value = "/pessoas")
public class PessoaController {
	@Autowired
	private PessoaRepository repository;
	
	@GetMapping
	public List<Pessoa> findAll() {
		return repository.findAll();
	}

	@GetMapping(value = "/{id}")
	public Pessoa findAll(@PathVariable Long id) {
		return repository.findById(id).get();
	}
	
	@PostMapping
	public Pessoa insert(@RequestBody Pessoa pessoa) {
		return repository.save(pessoa);
	}
}
