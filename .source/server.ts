// @ts-nocheck
import * as __fd_glob_15 from "../content/docs/tim-nodered-server.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/tim-mqtt-server.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/tim-datenbank.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/passwoerter.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/maschinen.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/marcell-opnsense.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/marcell-netzwerk.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/konfiguration.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/ki-nutzung.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/installation.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/finn-python-auswertung.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/finn-nodered-flows.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/fehlerbehebung.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/ablauf.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"ablauf.mdx": __fd_glob_1, "fehlerbehebung.mdx": __fd_glob_2, "finn-nodered-flows.mdx": __fd_glob_3, "finn-python-auswertung.mdx": __fd_glob_4, "index.mdx": __fd_glob_5, "installation.mdx": __fd_glob_6, "ki-nutzung.mdx": __fd_glob_7, "konfiguration.mdx": __fd_glob_8, "marcell-netzwerk.mdx": __fd_glob_9, "marcell-opnsense.mdx": __fd_glob_10, "maschinen.mdx": __fd_glob_11, "passwoerter.mdx": __fd_glob_12, "tim-datenbank.mdx": __fd_glob_13, "tim-mqtt-server.mdx": __fd_glob_14, "tim-nodered-server.mdx": __fd_glob_15, });