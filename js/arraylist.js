class ArrayList {
    constructor() {
      this.data = new Array(); // O array para armazenar os elementos
    }
  
    // Adiciona um valor ao final da lista
    // Insere o valor na posição correspondente ao tamanho atual do array.
    append(value) {
      this.data[this.size()] = value;
    }
  
    // Insere um valor em uma posição específica na lista
    // Verifica se a posição é válida para inserção.
    // Se a posição for o final do array, utiliza push() para adicionar o valor.
    // Caso contrário, utiliza splice() para inserir o valor na posição desejada.
    insert(position, value) {
      if (position < 0 || position > this.size()) {
        throw new Error('Invalid position');
      }
  
      if (position == this.data.length) {
        this.data.push(value);
      } else {
        this.data.splice(position, 0, value);
      }
    }
  
    // Remove um valor específico da lista
    // Encontra o índice do valor fornecido e remove utilizando removeAt()
    remove(value) {
      let index = this._getIndexOf(value);
      this.removeAt(index);
    }
  
    // Remove o valor em uma posição específica da lista
    // Verifica se a posição é válida para remoção e utiliza splice() para remover o elemento nessa posição.
    removeAt(position) {
      if (position < 0 || position > this.size() - 1) {
        throw new Error('Invalid position');
      }
  
      return this.data.splice(position, 1);
    }
  
    // Retorna o tamanho atual da lista
    size() {
      return this.data.length;
    }
  
    // Converte a lista em uma string com valores separados por um separador especificado
    // Utiliza join() para converter o array em uma string separada pelo separador fornecido.
    toString(separator = '-') {
      return this.data.join(separator);
    }
  
    // Obtém o índice de um valor na lista
    // Procura o valor fornecido no array e retorna o índice.
    // Se não encontrar, lança um erro.
    _getIndexOf(value) {
      if (this.data.length == 0) {
        throw new Error('empty list');
      }
  
      let i = 0;
      while (i < this.data.length) {
        if (this.data[i] == value) {
          break;
        }
        i++;
      }
  
      if (i == this.data.length) {
        throw new Error('not found');
      }
  
      return i;
    }
  }
  