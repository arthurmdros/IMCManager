package com.arthurmdrosdev.IMCManager.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.arthurmdrosdev.IMCManager.dto.PessoaDTO;
import com.arthurmdrosdev.IMCManager.entities.Pessoa;
import com.arthurmdrosdev.IMCManager.repositories.PessoaRepository;

@Service
public class PessoaService {

	@Autowired
	private PessoaRepository repository;
	
	@Transactional(readOnly = true)
	public List<PessoaDTO> findAll(){
		List<Pessoa> result = repository.findAll();
		List<PessoaDTO> resultDTO = new ArrayList<>();
		PessoaDTO aux = new PessoaDTO();
		for (Pessoa p : result) {
			aux = new PessoaDTO(p);	
			resultDTO.add(aux);
		}		
		return resultDTO;
	}
	
	@Transactional(readOnly = true)
	public PessoaDTO findOne(Long id){
		Pessoa result = repository.findById(id).get();
		PessoaDTO dto = new PessoaDTO(result);
		return dto;
	}
}
