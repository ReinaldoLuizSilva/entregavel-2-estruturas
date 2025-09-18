// client.js
import http from "http";
import { LinkedList } from "./linked-list/linked-list.js";

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log("Conectado ao servidor.");
  /* 4) Crie uma lista encadeada vazia aqui */
  const receivedData = new LinkedList();

  res.on("data", (chunk) => {
    /* 5) Utilize o método add para guardar cada chunk na lista encadeada */
    receivedData.add(chunk.toString());
    console.log(`Dado recebido: ${chunk}\n`);
  });

  res.on("end", () => {
    console.log("\nTransmissão finalizada.");

    /* 10) Utilize o método getAt para mostrar o que existe nos índices 3 e 20 */
    console.log(`Elemento no índice 3: ${receivedData.getAt(3)}`);
    console.log(`Elemento no índice 20: ${receivedData.getAt(20)}`);

    /* 11) Utilize o método getSize para mostrar o tamanho da lista encadeada */
    console.log(`Tamanho da lista: ${receivedData.getSize()}`);

    /* 12) Utilize o método search para mostrar o primeiro índice da cor "verde" */
    console.log(
      `Primeiro índice da cor "verde": ${receivedData.search("verde")}`
    );

    /* 13) Utilize o método searchLast para mostrar o último índice da cor "verde" */
    console.log(
      `Último índice da cor "verde": ${receivedData.searchLast("verde")}`
    );

    /* 14) Utilize o método removeAt para remover o elemento de índice 2 */
    const removedElement = receivedData.removeAt(2);
    console.log(`Elemento removido do índice 2: ${removedElement}`);

    /* 15) Utilize o método pop para remover o último elemento e mostre o que foi removido */
    const poppedElement = receivedData.pop();
    console.log(`Último elemento removido com pop: ${poppedElement}`);

    /* 16) Utilize o método toArray para mostrar a lista encadeada como um vetor */
    console.log(`Lista como array: [${receivedData.toArray().join(", ")}]`);
  });
});

req.on("error", (e) => {
  console.error(`Problema com a requisição: ${e.message}`);
});

req.end();
