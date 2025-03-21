// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface FaqStoryblok {
  question?: RichtextStoryblok;
  answer?: string;
  component: "faq";
  _uid: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  alt: string | null;
  copyright?: string | null;
  fieldtype: "asset";
  id: number;
  filename: string | null;
  name: string;
  title: string | null;
  focus: string | null;
  meta_data?: {
    [k: string]: any;
  };
  source?: string | null;
  is_external_url?: boolean;
  is_private?: boolean;
  src?: string;
  updated_at?: string;
  width?: number | null;
  height?: number | null;
  aspect_ratio?: number | null;
  public_id?: string | null;
  content_type?: string;
  [k: string]: any;
}

export interface LandingPageStoryblok {
  body?: FooterStoryblok[];
  title?: string;
  hero: AssetStoryblok;
  component: "landing_page";
  _uid: string;
  [k: string]: any;
}

export interface PageStoryblok {
  info?: string;
  image?: AssetStoryblok;
  contact?: string;
  FAQs?: FaqStoryblok[];
  component: "page";
  _uid: string;
  [k: string]: any;
}
