import "module-alias/register"

import "@core/load-env"
import { envConstants } from "@core/constants";
import { createRestApiServer } from "@core/servers";
import { housesApi } from "@pods/house";

const app = createRestApiServer();
const port = envConstants.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Express + Typescript server started...");
});

app.listen(port, () => {
  console.log(`Server listened at port ${port}`);
});
