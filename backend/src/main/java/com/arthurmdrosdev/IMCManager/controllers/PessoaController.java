package com.arthurmdrosdev.IMCManager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arthurmdrosdev.IMCManager.dto.PessoaDTO;
import com.arthurmdrosdev.IMCManager.services.PessoaService;

@RestController
@RequestMapping(value = "/pessoas")
public class PessoaController {
	@Autowired
	private PessoaService service;
	
	@GetMapping
	public Page<PessoaDTO> findAll(Pageable pageable) {
		return service.findAll(pageable);
	}

	@GetMapping(value = "/{id}")
	public PessoaDTO findOne(@PathVariable Long id) {
		return service.findOne(id);
	}
	
	@PostMapping
	public PessoaDTO insert(@RequestBody PessoaDTO dto) {		
		return service.savePessoa(dto);		
	}
	
	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable Long id) {
		service.deletePessoa(id);
	}
	
	@PutMapping(value = "/{id}")
	public PessoaDTO update(@PathVariable Long id, @RequestBody PessoaDTO dto ) {
		return service.updatePessoa(dto, id);					
	}
}
