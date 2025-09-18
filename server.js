import http from "http";
import { LinkedList } from "./linked-list/linked-list.js";

/*
7) Faça com que data seja uma instância de lista encadeada
8) Utilize o método add para adicionar:
"verde", "azul", "amarelo", "branco", "preto", "roxo", "verde", "vermelho"
Precisa ser nesta ordem, exatamente igual!
*/
const data = new LinkedList();
data.add("verde");
data.add("azul");
data.add("amarelo");
data.add("branco");
data.add("preto");
data.add("roxo");
data.add("verde");
data.add("vermelho");

const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Transfer-Encoding": "chunked",
  });

  // Remova aqui \/
  // for (const item of data) {
  //   res.write(item); // Esse função envia dados para o cliente!
  //   await delay(1); // Essa função espera um segundo
  // }
  // Remova aqui /\

  /*
  9) Faça enviar todas as cores para o cliente,
  com uma pausa de 2 segundos por envio
  */
  for (let i = 0; i < data.getSize(); i++) {
    const color = data.getAt(i);
    res.write(color); // Essa função envia dados para o cliente!
    await delay(2); // Essa função espera 2 segundos
  }

  res.end(); // Essa função finaliza a comunicação com o cliente
  console.log("Transmissão concluída pelo servidor.");
  server.close();
});

async function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000.");
  console.log("Acesse http://localhost:3000 com o cliente.");
});
