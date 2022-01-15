package com.arthurmdrosdev.IMCManager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	public Pessoa findOne(@PathVariable Long id) {
		return repository.findById(id).get();
	}
	
	@PostMapping
	public Pessoa insert(@RequestBody Pessoa pessoa) {
		return repository.save(pessoa);
	}
	
	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable Long id) {
		Pessoa pessoa = findOne(id);
		if(pessoa != null) {
			repository.delete(pessoa);
		}		
	}
	
	@PutMapping(value = "/{id}")
	public Pessoa update(@PathVariable Long id, @RequestBody Pessoa pessoa ) {
		Pessoa pessoaFound = findOne(id);
		if(pessoaFound != null) {
			pessoaFound.setNome(pessoa.getNome());
			pessoaFound.setData_nasc(pessoa.getData_nasc());
			pessoaFound.setCpf(pessoa.getCpf());
			pessoaFound.setSexo(pessoa.getSexo());
			pessoaFound.setAltura(pessoa.getAltura());
			pessoaFound.setPeso(pessoa.getPeso());
			repository.save(pessoaFound);
		}		
		return pessoaFound;
	}
}
