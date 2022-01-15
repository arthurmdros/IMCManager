package com.arthurmdrosdev.IMCManager.dto;

import java.sql.Date;

import com.arthurmdrosdev.IMCManager.entities.ClassificationIMC;
import com.arthurmdrosdev.IMCManager.entities.Pessoa;

public class PessoaDTO {
	
	private Long id;
	private String nome;
	private Date data_nasc;
	private String cpf;
	private String sexo;
	private Double altura;
	private Double peso;
	private ClassificationIMC classIMC;
	
	public PessoaDTO() {}

	public PessoaDTO(Long id, String pNome, Date pData, String pCpf, String pSexo, Double pAltura, Double pPeso, ClassificationIMC pClassIMC) {
		super();
		this.id = id;
		this.nome = pNome;
		this.data_nasc = pData;
		this.cpf = pCpf;
		this.sexo = pSexo;
		this.altura = pAltura;
		this.peso = pPeso;
		this.classIMC = pClassIMC;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public PessoaDTO(Pessoa pessoa) {
		id = pessoa.getId();
		nome = pessoa.getNome();
		data_nasc = pessoa.getData_nasc();
		cpf = pessoa.getCpf();
		sexo = pessoa.getSexo();
		altura = pessoa.getAltura();
		peso = pessoa.getPeso();
		classIMC = pessoa.getClassIMC();
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getData_nasc() {
		return data_nasc;
	}

	public void setData_nasc(Date data_nasc) {
		this.data_nasc = data_nasc;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Double getAltura() {
		return altura;
	}

	public void setAltura(Double altura) {
		this.altura = altura;
	}

	public Double getPeso() {
		return peso;
	}

	public void setPeso(Double peso) {
		this.peso = peso;
	}
	
	public ClassificationIMC getClassIMC() {
		return classIMC;
	}

	public void setClassIMC(ClassificationIMC classIMC_id) {
		this.classIMC = classIMC_id;
	}
	
}
