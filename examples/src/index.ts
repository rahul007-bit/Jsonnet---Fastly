import { Hono } from "hono/quick";
import { parseJsonnet } from "arakoo-jsonnet";
const app = new Hono();

app.get("/", async (c) => {
  try {
    let result = await parseJsonnet("test.jsonnet");
    console.log(result);

    return c.json({ message: "Hello World!" });
  } catch (e) {
    console.log(JSON.stringify(e));
    console.log(e);

    return c.json(e);
  }
});

app.fire();
