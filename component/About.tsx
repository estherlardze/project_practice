import type { PageStoryblok } from "@/story.d.ts";
import React from "react";

export const About = async ({ blok: { info } }: PageStoryblok) => {
  return <div>{info}</div>;
};
