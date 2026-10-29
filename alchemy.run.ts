import * as Alchemy from "alchemy";
import { adopt } from "alchemy/AdoptPolicy";
import * as Cloudflare from "@alchemy.run/cloudflare";
import { Stack } from "alchemy/Stack";
import * as Effect from "effect/Effect";

const DOMAIN = "imjulian.com";
const PROD_STAGE = "prod";

// TanStack Start is pure Vite, so Website.Vite builds the client assets and
// the SSR Worker in one `vite build`. Only the prod stage claims the custom
// domain; every other stage (live_$USER, dev_$USER, pr-N) gets a workers.dev URL.
export const Website = Cloudflare.Website.Vite(
  "Website",
  Stack.useSync((stack) =>
    stack.stage === PROD_STAGE
      ? {
          domain: {
            name: DOMAIN,
            redirects: [`www.${DOMAIN}`],
          },
          workersDev: false,
        }
      : {},
  ),
);

export default Alchemy.Stack(
  "Portfolio",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const stack = yield* Stack;

    if (stack.stage === PROD_STAGE) {
      // The zone is added in the Cloudflare dashboard first (see DEPLOY.md);
      // adopt(true) brings that existing zone under Alchemy's management.
      // Zones are retained on `alchemy destroy`.
      const zone = yield* Cloudflare.Zone.Zone("Zone", {
        name: DOMAIN,
      }).pipe(adopt(true));

      yield* Cloudflare.Zone.Setting("AlwaysUseHttps", {
        zoneId: zone.zoneId,
        settingId: "always_use_https",
        value: "on",
      });
    }

    const website = yield* Website;

    return {
      url: website.url.as<string>(),
    };
  }),
);
