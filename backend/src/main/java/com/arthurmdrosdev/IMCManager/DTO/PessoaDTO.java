package com.arthurmdrosdev.IMCManager.dto;

import java.sql.Date;

import com.arthurmdrosdev.IMCManager.entities.Pessoa;

public class PessoaDTO {
	
	private String nome;
	private Date data_nasc;
	private String cpf;
	private String sexo;
	private Double altura;
	private Double peso;
	
	public PessoaDTO() {}

	public PessoaDTO(String pNome, Date pData, String pCpf, String pSexo, Double pAltura, Double pPeso) {
		super();
		this.nome = pNome;
		this.data_nasc = pData;
		this.cpf = pCpf;
		this.sexo = pSexo;
		this.altura = pAltura;
		this.peso = pPeso;
	}

	public PessoaDTO(Pessoa pessoa) {
		nome = pessoa.getNome();
		data_nasc = pessoa.getData_nasc();
		cpf = pessoa.getCpf();
		sexo = pessoa.getSexo();
		altura = pessoa.getAltura();
		peso = pessoa.getPeso();
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
	
	
}
