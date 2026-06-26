// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"ablauf.mdx": () => import("../content/docs/ablauf.mdx?collection=docs"), "fehlerbehebung.mdx": () => import("../content/docs/fehlerbehebung.mdx?collection=docs"), "finn-nodered-flows.mdx": () => import("../content/docs/finn-nodered-flows.mdx?collection=docs"), "finn-python-auswertung.mdx": () => import("../content/docs/finn-python-auswertung.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "ki-nutzung.mdx": () => import("../content/docs/ki-nutzung.mdx?collection=docs"), "konfiguration.mdx": () => import("../content/docs/konfiguration.mdx?collection=docs"), "marcell-netzwerk.mdx": () => import("../content/docs/marcell-netzwerk.mdx?collection=docs"), "marcell-opnsense.mdx": () => import("../content/docs/marcell-opnsense.mdx?collection=docs"), "maschinen.mdx": () => import("../content/docs/maschinen.mdx?collection=docs"), "passwoerter.mdx": () => import("../content/docs/passwoerter.mdx?collection=docs"), "tim-datenbank.mdx": () => import("../content/docs/tim-datenbank.mdx?collection=docs"), "tim-mqtt-server.mdx": () => import("../content/docs/tim-mqtt-server.mdx?collection=docs"), "tim-nodered-server.mdx": () => import("../content/docs/tim-nodered-server.mdx?collection=docs"), }),
};
export default browserCollections;