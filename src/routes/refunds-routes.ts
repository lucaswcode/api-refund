import { Router } from "express";

import { RefundsControllers } from "@/controllers/refunds-controller";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const refundsRoutes = Router();
const refundsControllers = new RefundsControllers();

refundsRoutes.post(
  "/",
  verifyUserAuthorization(["employee"]),
  refundsControllers.create
);

refundsRoutes.get(
  "/",
  verifyUserAuthorization(["manager"]),
  refundsControllers.index
);

refundsRoutes.get(
  "/:id",
  verifyUserAuthorization(["employee", "manager"]),
  refundsControllers.show
);
export { refundsRoutes };
