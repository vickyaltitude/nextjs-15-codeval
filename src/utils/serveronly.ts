import "server-only";

//so if used server-only you function wont be rendered to client side it stays with server which is very much useful for security .
export default function serveronly() {
  console.log(`function to run server side works
        interacting with database`);
  return "Output of server result";
}
