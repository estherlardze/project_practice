import { Database } from "@/database.types";

export type User = Database["auth"]["Tables"]["users"]["Row"];
