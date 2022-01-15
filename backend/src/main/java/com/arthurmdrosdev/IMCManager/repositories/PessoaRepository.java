package com.arthurmdrosdev.IMCManager.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arthurmdrosdev.IMCManager.entities.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

}
