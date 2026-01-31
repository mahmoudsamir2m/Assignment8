import { Router } from "express";
import * as S from "./author.service.js";

const router = Router();

router.post("/collection/authors", async (req, res) =>
  res.json(await S.insertAuthor(req.body)),
);

export default router;
