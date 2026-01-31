import { Router } from "express";
import * as S from "./book.service.js";

const router = Router();

router.post("/collection/books", async (req, res) =>
  res.json(await S.createExplicitBooks()),
);

router.post("/books", async (req, res) =>
  res.json(await S.insertOneBook(req.body)),
);

router.post("/books/batch", async (req, res) =>
  res.json(await S.insertManyBooks(req.body)),
);

router.patch("/books/:title", async (req, res) =>
  res.json(await S.updateBookYear(req.params.title)),
);

router.get("/books/title", async (req, res) =>
  res.json(await S.findTitle(req.query.title)),
);

router.get("/books/year", async (req, res) =>
  res.json(await S.findYears(req.query.from, req.query.to)),
);

router.delete("/books/old", async (req, res) =>
  res.json(await S.deleteBefore(req.query.year)),
);

router.get("/books/agg1", async (req, res) => res.json(await S.agg1()));

router.get("/books/agg4", async (req, res) => res.json(await S.aggLookup()));

export default router;
