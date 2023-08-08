class Pessoa {
  constructor(nome, endereco, idade) {
    this.nome = nome;
    this.endereco = endereco;
    this.idade = idade;
  }

  falarNome() {
    console.log(`Meu nome é ${this.nome}.`);
  }
  falarEndereco() {
    console.log(`Eu moro em ${this.endereco}.`);
  }
  falarIdade() {
    console.log(`Eu tenho ${this.idade} anos de idade.`);
  }
}

const p1 = new Pessoa("Daniel Alves", "Guaraciaba do Norte", 37);

p1.falarNome();
p1.falarEndereco();
p1.falarIdade();
