import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// Define item-related routes
import destinationsActions from "./modules/item/destinations/destinationsActions";

router.get("/api/destinations", destinationsActions.browse);
router.get("/api/destinations/:id", destinationsActions.read);

/* ************************************************************************* */

export default router;
