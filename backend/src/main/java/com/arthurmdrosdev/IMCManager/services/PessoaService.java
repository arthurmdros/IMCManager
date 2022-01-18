package com.arthurmdrosdev.IMCManager.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import com.arthurmdrosdev.IMCManager.dto.PessoaDTO;
import com.arthurmdrosdev.IMCManager.entities.Pessoa;
import com.arthurmdrosdev.IMCManager.repositories.PessoaRepository;

@Service
public class PessoaService {

	@Autowired
	private PessoaRepository repository;
	
	@Transactional(readOnly = true)
	public Page<PessoaDTO> findAll(Pageable pageable){
		Page<Pessoa> result = repository.findAll(pageable);
		Page<PessoaDTO> resultDTO = result.map(x -> new PessoaDTO(x));
		return resultDTO;
	}
	
	@Transactional(readOnly = true)
	public PessoaDTO findOne(Long id){
		Pessoa result = repository.findById(id).get();
		PessoaDTO dto = new PessoaDTO(result);
		return dto;
	}
	
	@Transactional
	public PessoaDTO savePessoa(PessoaDTO dto) {		
		Pessoa pessoa = new Pessoa();
		
		pessoa.setNome(dto.getNome());
		pessoa.setData_nasc(dto.getData_nasc());
		pessoa.setCpf(dto.getCpf());
		pessoa.setSexo(dto.getSexo());
		pessoa.setAltura(dto.getAltura());
		pessoa.setPeso(dto.getPeso());
		pessoa.setClassIMC(dto.getClassIMC());
		pessoa = repository.saveAndFlush(pessoa);
		
		return new PessoaDTO(pessoa);
	}
	
	@Transactional
	public PessoaDTO updatePessoa(PessoaDTO dto, Long id) {	
		Pessoa pessoaFound = repository.getById(id);
		if(pessoaFound != null) {
			pessoaFound.setNome(dto.getNome());
			pessoaFound.setData_nasc(dto.getData_nasc());
			pessoaFound.setCpf(dto.getCpf());
			pessoaFound.setSexo(dto.getSexo());
			pessoaFound.setAltura(dto.getAltura());
			pessoaFound.setPeso(dto.getPeso());		
			pessoaFound.setClassIMC(dto.getClassIMC());
		}		
		pessoaFound = repository.saveAndFlush(pessoaFound);
		
		return new PessoaDTO(pessoaFound);
	}
	
	@Transactional
	public void deletePessoa(@PathVariable Long id) {
		Pessoa pessoaFound = repository.findById(id).get();
		if(pessoaFound != null) {
			repository.delete(pessoaFound);
		}		
	}
}
