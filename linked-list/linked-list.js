import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    this.size++;
    let nextNode = new Node(value);

    if (this.head === null) {
      this.head = nextNode;
      return;
    }

    let latestNode = this.head;
    while (latestNode.next !== null) {
      latestNode = latestNode.next;
    }
    latestNode.next = nextNode;
  }

  pop() {
    let latestNode = this.head;

    if (this.head === null) {
      return null;
    } else if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      this.size--;
      return value;
    }

    while (latestNode.next.next !== null) {
      latestNode = latestNode.next;
    }

    const value = latestNode.next.value;
    latestNode.next = null;
    this.size--;
    return value;
  }

  print() {
    let valuesToPrint = "";
    let latestNode = this.head;
    while (latestNode !== null) {
      const comma = latestNode.next ? ", " : "";
      valuesToPrint += `${latestNode.value}${comma}`;
      latestNode = latestNode.next;
    }
    console.log(valuesToPrint);
  }

  /*
  1) Este método deve retornar o valor de um node pelo índice,
  começando pelo 0. Caso não exista elemento no índice,
  devolva null.
  */
  getAt(index) {
    // Verifica se o índice é válido
    if (index < 0 || index >= this.size) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    // Percorre a lista até encontrar o índice desejado
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.value;
  }

  /* 2) Retorna o tamanho da lista encadeada */
  getSize() {
    return this.size;
  }

  /* 3) Este método deve remover um elemento pelo
  índice e retornar o seu valor */
  removeAt(index) {
    // Verifica se o índice é válido
    if (index < 0 || index >= this.size) {
      return null;
    }

    // Caso especial: remover o primeiro elemento
    if (index === 0) {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    // Percorre até o elemento anterior ao que será removido
    while (currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    const valueToRemove = currentNode.next.value;
    currentNode.next = currentNode.next.next;
    this.size--;

    return valueToRemove;
  }

  /* 4) Este método deve procurar um elemento pelo valor e
  retornar o primeiro índice encontrado. Caso o valor
  não exista, retorne -1 */
  search(value) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }

    return -1; // Valor não encontrado
  }

  /* 5) Este método deve procurar um elemento pelo valor e
  retornar o último índice encontrado. Caso o valor
  não exista, retorne -1 */
  searchLast(value) {
    let currentNode = this.head;
    let currentIndex = 0;
    let lastFoundIndex = -1;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        lastFoundIndex = currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }

    return lastFoundIndex;
  }

  /* 6) Este método deve retornar um vetor com
  os valores da lista encadeada */
  toArray() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}
