// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"ablauf.mdx": () => import("../content/docs/ablauf.mdx?collection=docs"), "fehlerbehebung.mdx": () => import("../content/docs/fehlerbehebung.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "konfiguration.mdx": () => import("../content/docs/konfiguration.mdx?collection=docs"), "maschinen.mdx": () => import("../content/docs/maschinen.mdx?collection=docs"), "passwoerter.mdx": () => import("../content/docs/passwoerter.mdx?collection=docs"), }),
};
export default browserCollections;