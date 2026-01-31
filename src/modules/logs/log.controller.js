import { Router } from "express";
import * as S from "./log.service.js";


const router = Router();


router.post("/collection/logs/capped", async (req, res) =>
  res.json(await S.createCapped()),
);

router.post("/logs", async (req, res) => res.json(await S.insertLog(req.body)));

export default router;
