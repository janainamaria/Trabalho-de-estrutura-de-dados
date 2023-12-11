class DynamicList {
    constructor() {
      this.head = null; // O início da lista
      this.length = 0; // O tamanho atual da lista
    }
  
    // Retorna o último nó da lista
    // Este método percorre a lista encadeada até encontrar o último nó.
    // Começa a busca a partir do início (this.head) e itera pela lista até encontrar um nó cujo próximo seja null.
    // Retorna o último nó da lista encadeada.
    getLast() {
      let i = this.head;
      while (i.next != null) {
        i = i.next;
      }
      return i;
    }
  
    // Adiciona um valor ao final da lista
    // Verifica se o valor fornecido é válido.
    // Cria um novo nó com o valor e adiciona no final da lista encadeada.
    // Se a lista estiver vazia, o novo nó se torna o primeiro nó (head).
    // Caso contrário, encontra o último nó usando getLast() e adiciona o novo nó após ele.
    // Atualiza o tamanho da lista.
    append(value) {
      if (!value) {
        throw new Error('Informe um valor válido');
      }
  
      const node = new Node(value);
  
      if (this.head == null) {
        this.head = node;
      } else {
        this.getLast().next = node;
      }
      this.length++;
    }
  
    // Insere um valor em uma posição específica na lista
    // Verifica se a posição é válida para inserção.
    // Se a posição for o final da lista, utiliza append() para adicionar o valor.
    // Caso contrário, cria um novo nó com o valor e o insere na posição desejada.
    // Atualiza as referências dos nós adjacentes para acomodar o novo nó.
    // Incrementa o tamanho da lista.
    insert(position, value) {
      if (position < 0 || position > this.size()) {
        throw new Error('Invalid position');
      }
  
      if (position == this.length) {
        this.append(value);
        return;
      }
  
      const newNode = new Node(value);
  
      if (position == 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let previous = this.head;
        let current = previous.next;
        let index = 1;
        while (index != position) {
          index++;
          previous = current;
          current = current.next;
        }
        previous.next = newNode;
        newNode.next = current;
      }
  
      this.length++;
    }
  
    // Remove um valor específico da lista
    // Procura o valor fornecido na lista encadeada.
    // Se encontrado, reorganiza as referências dos nós para remover o valor da lista.
    // Atualiza o tamanho da lista após a remoção.
    remove(value) {
      if (!value) {
        throw new Error('Digite um valor válido');
      }
      let current = this.head;
      let previous = null;
  
      while (current != null) {
        if (current.content === value) {
          break;
        }
        previous = current;
        current = current.next;
      }
      if (current == null) {
        return null;
      }
  
      if (current == this.head) {
        this.head = current.next;
      } else {
        previous.next = current.next;
      }
      current.next = null;
      this.length--;
  
      return current.content;
    }
  
    // Remove o valor em uma posição específica da lista
    // Verifica se a posição é válida para remoção.
    // Encontra o nó na posição desejada e remove-o, reorganizando as referências dos nós adjacentes.
    // Atualiza o tamanho da lista após a remoção.
    removeAt(position) {
      if (position < 0 || position > this.size() - 1) {
        throw new Error('Invalid position');
      }
  
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index != position) {
        index++;
        previous = current;
        current = current.next;
      }
  
      if (index == 0) {
        this.head = this.head.next;
      } else {
        previous.next = current.next;
      }
      current.next = null;
      this.length--;
      return current.content;
    }
  
    // Retorna o tamanho atual da lista
    size() {
      return this.length;
    }
  
    // Converte a lista em uma string com valores separados por um separador especificado
    // Converte os valores da lista em uma string, separados pelo separador especificado.
    // Utiliza um loop para percorrer a lista e adicionar os valores à string de saída.
    // Remove o último separador adicionado para evitar um separador extra no final.
    toString(separator = '-') {
      let output = '';
  
      if (this.head == null) {
        return output;
      }
  
      for (let i = this.head; i != null; i = i.next) {
        output = output + i.content + separator;
      }
  
      const outputCut = output.length - separator.length;
  
      output = output.substring(0, outputCut);
  
      return output;
    }
  }
  