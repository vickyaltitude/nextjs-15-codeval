import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import SubmitBtn from "@/components/SubmitBtn";

export default function NewProductServer() {
  async function createProduct(formData: FormData) {
    "use server";
    const price = formData.get("price") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    console.log(price, title, description);
    await addProduct(title, Number(price), description);
    redirect("/products-db");
  }

  return (
    <div>
      <form action={createProduct}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input id="price" type="text" name="price" />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <input id="description" type="text" name="description" />
        </div>
        <SubmitBtn />
      </form>
    </div>
  );
}
