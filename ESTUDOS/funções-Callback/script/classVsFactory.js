class Pessoa {
  constructor(nome, endereco = "não informado", idade) {
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
const p2 = new Pessoa("Edson", "", 39);

p1.falarNome();
p1.falarEndereco();
p1.falarIdade();

p2.falarNome();
p2.falarEndereco();
p2.falarIdade();
