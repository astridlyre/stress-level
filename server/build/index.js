var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/.pnpm/@remix-run+dev@1.1.3/node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/.pnpm/@remix-run+dev@1.1.3/node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/.pnpm/remix@1.1.3/node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/.pnpm/remix@1.1.3/node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/.pnpm/remix@1.1.3/node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/.pnpm/remix@1.1.3/node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/.pnpm/remix@1.1.3/node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/.pnpm/remix@1.1.3/node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/.pnpm/remix@1.1.3/node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/.pnpm/remix@1.1.3/node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/ml/projects/stress-o-meter/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_socket = __toModule(require("socket.io-client"));

// app/styles/index.css
var styles_default = "/build/_assets/index-TYWYK2GA.css";

// route-module:/home/ml/projects/stress-o-meter/app/root.tsx
var import_react2 = __toModule(require("react"));

// app/context.tsx
init_react();
var import_react = __toModule(require("react"));
var context = (0, import_react.createContext)(void 0);
function useSocket() {
  return (0, import_react.useContext)(context);
}
function SocketProvider({ socket, children }) {
  return /* @__PURE__ */ React.createElement(context.Provider, {
    value: socket
  }, children);
}

// route-module:/home/ml/projects/stress-o-meter/app/root.tsx
var meta = () => {
  return { title: "Kippum Stress-o-Meter" };
};
var links = () => [
  {
    rel: "stylesheet",
    href: styles_default
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  },
  { rel: "manifest", href: "/site.webmanifest" }
];
function App() {
  const [socket, setSocket] = (0, import_react2.useState)();
  (0, import_react2.useEffect)(() => {
    const newSocket = (0, import_socket.io)();
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    if (!socket)
      return;
    socket.on("confirmation", (data) => {
      console.log(data);
    });
  }, [socket]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(SocketProvider, {
    socket
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:/home/ml/projects/stress-o-meter/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => Index
});
init_react();
var import_react4 = __toModule(require("react"));

// app/stressLevel.ts
init_react();
var MIN_STRESS_LEVEL = 0;
var MAX_STRESS_LEVEL = 100;
var DEFAULT_STRESS_LEVEL = 10;
var DEFAULT_STRESS_STEP = 5;
var stressLevelDescriptions = [
  "Literally squirting",
  "Crookus kisses",
  "Picnic with Master",
  "Cuddled up, with a pillow on head",
  "Doordash came earlier than expected",
  "Nice warm shower",
  "Pretty, relaxed, and cute",
  "Not that stressed",
  "Slightly tense",
  "Season finale of Project Runway",
  "A bit sad and preoccupied",
  "Tail is thwomping a bit",
  "Whiskers are a little twitchy",
  "Whiskers are pulled a bit too hard",
  "Bitcoin all-time low",
  "Period time times",
  "Home2 sold out, IU basketball night, New Jersey Hilton-Honors Diamond Member sorority mom yelling about the hole in her wall that her husband punched",
  "Master's wifi went out",
  "The power is out, it is storming, and the heat is not working",
  "The NTF wallet transfer is not working",
  "Having Covid and a flat-tire"
];
function getDescriptionForStressLevel(level) {
  return stressLevelDescriptions[Math.floor(level / 5)] || "Not stressed";
}
function StressLevel(level) {
  return {
    level,
    description: getDescriptionForStressLevel(level),
    quality: level < 33 ? "good" : level < 66 ? "warning" : "danger"
  };
}

// route-module:/home/ml/projects/stress-o-meter/app/routes/index.tsx
var import_remix3 = __toModule(require_remix());

// app/hooks.ts
init_react();
var import_react3 = __toModule(require("react"));
function useClasses(...classes) {
  return (0, import_react3.useMemo)(() => classes.filter(Boolean).join(" "), classes);
}

// route-module:/home/ml/projects/stress-o-meter/app/routes/index.tsx
var Slider = __toModule(require("@radix-ui/react-slider"));
var import_react5 = __toModule(require("react"));
var classFromQuality = (quality, prefix) => prefix + "-" + quality;
function Index() {
  const socket = useSocket();
  const [sl, setSL] = (0, import_react5.useState)(StressLevel(DEFAULT_STRESS_LEVEL));
  const [actionData, setActionData] = (0, import_react5.useState)();
  const containerClasses = useClasses("container", classFromQuality(sl.quality, "bg"));
  const descriptionClasses = useClasses("stress-header-description", classFromQuality(sl.quality, "fg"));
  const handleUpdate = (0, import_react4.useCallback)((data) => {
    setSL(data);
  }, [setSL]);
  const handleNotification = (0, import_react4.useCallback)((data) => {
    setActionData(data);
    setTimeout(() => setActionData(void 0), 3e3);
  }, [setActionData]);
  (0, import_react5.useEffect)(() => {
    if (!socket)
      return;
    socket.on("stress-update", handleUpdate);
    socket.on("notification", handleNotification);
    return () => {
      socket.off("stress-update", handleUpdate);
      socket.off("notification", handleNotification);
    };
  }, [socket]);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket && socket.emit("stress-update", sl);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: containerClasses
  }, /* @__PURE__ */ React.createElement("main", {
    className: "stress-o-meter"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "stress-o-meter-header"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "site-heading"
  }, "Kippum's Stress-o-Meter"), /* @__PURE__ */ React.createElement("p", {
    className: "site-subheading"
  }, "How stressed is my Kippums?")), /* @__PURE__ */ React.createElement("section", {
    className: "stress-meter-container"
  }, /* @__PURE__ */ React.createElement(Slider.Root, {
    className: "stress-meter",
    min: MIN_STRESS_LEVEL,
    max: MAX_STRESS_LEVEL,
    value: [sl == null ? void 0 : sl.level],
    step: DEFAULT_STRESS_STEP,
    onValueChange: ([value]) => setSL(StressLevel(value))
  }, /* @__PURE__ */ React.createElement(Slider.Track, {
    className: "stress-meter-track"
  }, /* @__PURE__ */ React.createElement(Slider.Range, {
    className: `stress-meter-range ${classFromQuality(sl.quality, "bg")}`
  })), /* @__PURE__ */ React.createElement(Slider.Thumb, {
    className: "stress-meter-thumb"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "stress-meter-thumb-percent"
  }, sl == null ? void 0 : sl.level, "%"))), /* @__PURE__ */ React.createElement("header", {
    className: "stress-header"
  }, /* @__PURE__ */ React.createElement("small", {
    className: "stress-header-small"
  }, "Current stress level:"), /* @__PURE__ */ React.createElement("h2", {
    className: descriptionClasses
  }, sl == null ? void 0 : sl.description)), /* @__PURE__ */ React.createElement("form", {
    className: "stress-form",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("div", {
    className: "stress-form-button"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "stress-meter-button bg-primary",
    type: "submit"
  }, "Lock in stress level"), actionData ? /* @__PURE__ */ React.createElement("p", {
    className: `stress-form-message ${classFromQuality(actionData.quality, "fg")}`,
    role: "alert",
    id: "save-message"
  }, actionData == null ? void 0 : actionData.message) : null)))));
}
function CatchBoundary() {
  const caught = (0, import_remix3.useCatch)();
  if (caught.status === 401) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "container"
    }, /* @__PURE__ */ React.createElement("h1", null));
  }
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Whoops! Something went wrong"), /* @__PURE__ */ React.createElement("p", null, "Oh dear me, apparently: ", error.message, "... Shall we", " ", /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, "Try again?")));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZW1peC1ydW4rZGV2QDEuMS4zL25vZGVfbW9kdWxlcy9AcmVtaXgtcnVuL2Rldi9jb21waWxlci9zaGltcy9yZWFjdC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVtaXhAMS4xLjMvbm9kZV9tb2R1bGVzL3JlbWl4L2NsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVtaXhAMS4xLjMvbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVtaXhAMS4xLjMvbm9kZV9tb2R1bGVzL3JlbWl4L3BsYXRmb3JtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZW1peEAxLjEuMy9ub2RlX21vZHVsZXMvcmVtaXgvaW5kZXguanMiLCAiPHN0ZGluPiIsICIuLi8uLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb250ZXh0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vYXBwL3N0cmVzc0xldmVsLnRzIiwgIi4uLy4uL2FwcC9ob29rcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL21sL3Byb2plY3RzL3N0cmVzcy1vLW1ldGVyL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0LFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+LFxuICApXG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSlcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBTb2NrZXQgfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICcuL3N0eWxlcy9pbmRleC5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTb2NrZXRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCdcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdLaXBwdW0gU3RyZXNzLW8tTWV0ZXInIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICB7XG4gICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgaHJlZjogc3R5bGVzVXJsLFxuICB9LFxuICB7XG4gICAgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsXG4gICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICBocmVmOiAnL2FwcGxlLXRvdWNoLWljb24ucG5nJyxcbiAgfSxcbiAge1xuICAgIHJlbDogJ2ljb24nLFxuICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIHNpemVzOiAnMzJ4MzInLFxuICAgIGhyZWY6ICcvZmF2aWNvbi0zMngzMi5wbmcnLFxuICB9LFxuICB7XG4gICAgcmVsOiAnaWNvbicsXG4gICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgc2l6ZXM6ICcxNngxNicsXG4gICAgaHJlZjogJy9mYXZpY29uLTE2eDE2LnBuZycsXG4gIH0sXG4gIHsgcmVsOiAnbWFuaWZlc3QnLCBocmVmOiAnL3NpdGUud2VibWFuaWZlc3QnIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlPFNvY2tldD4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3U29ja2V0ID0gaW8oKVxuICAgIHNldFNvY2tldChuZXdTb2NrZXQpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG5ld1NvY2tldC5jbG9zZSgpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc29ja2V0KSByZXR1cm5cbiAgICBzb2NrZXQub24oJ2NvbmZpcm1hdGlvbicsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG4gIH0sIFtzb2NrZXRdKVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFNvY2tldFByb3ZpZGVyIHNvY2tldD17c29ja2V0fT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvU29ja2V0UHJvdmlkZXI+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFNvY2tldCB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbnR5cGUgUHJvdmlkZXJQcm9wcyA9IHtcbiAgc29ja2V0OiBTb2NrZXQgfCB1bmRlZmluZWRcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufVxuXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTb2NrZXQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNvY2tldCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNvY2tldFByb3ZpZGVyKHsgc29ja2V0LCBjaGlsZHJlbiB9OiBQcm92aWRlclByb3BzKSB7XG4gIHJldHVybiA8Y29udGV4dC5Qcm92aWRlciB2YWx1ZT17c29ja2V0fT57Y2hpbGRyZW59PC9jb250ZXh0LlByb3ZpZGVyPlxufVxuIiwgImltcG9ydCB0eXBlIHsgU3RyZXNzIH0gZnJvbSAnfi9zdHJlc3NMZXZlbCdcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERFRkFVTFRfU1RSRVNTX0xFVkVMLCBTdHJlc3NMZXZlbCB9IGZyb20gJ34vc3RyZXNzTGV2ZWwnXG5pbXBvcnQgeyBMaW5rLCB1c2VDYXRjaCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHtcbiAgTUFYX1NUUkVTU19MRVZFTCxcbiAgTUlOX1NUUkVTU19MRVZFTCxcbiAgREVGQVVMVF9TVFJFU1NfU1RFUCxcbn0gZnJvbSAnfi9zdHJlc3NMZXZlbCdcbmltcG9ydCB7IHVzZUNsYXNzZXMgfSBmcm9tICd+L2hvb2tzJ1xuaW1wb3J0ICogYXMgU2xpZGVyIGZyb20gJ0ByYWRpeC11aS9yZWFjdC1zbGlkZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTb2NrZXQgfSBmcm9tICd+L2NvbnRleHQnXG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgdHlwZTogJ3N0cmVzcy11cGRhdGUnIHwgJ25vdGlmaWNhdGlvbidcbiAgbWVzc2FnZT86IHN0cmluZ1xuICBxdWFsaXR5OiAnZ29vZCcgfCAnd2FybmluZycgfCAnZGFuZ2VyJ1xufVxuXG5jb25zdCBjbGFzc0Zyb21RdWFsaXR5ID0gKHF1YWxpdHk6IHN0cmluZywgcHJlZml4OiAnYmcnIHwgJ2ZnJykgPT5cbiAgcHJlZml4ICsgJy0nICsgcXVhbGl0eVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3Qgc29ja2V0ID0gdXNlU29ja2V0KClcbiAgY29uc3QgW3NsLCBzZXRTTF0gPSB1c2VTdGF0ZTxTdHJlc3M+KFN0cmVzc0xldmVsKERFRkFVTFRfU1RSRVNTX0xFVkVMKSlcbiAgY29uc3QgW2FjdGlvbkRhdGEsIHNldEFjdGlvbkRhdGFdID0gdXNlU3RhdGU8QWN0aW9uRGF0YSB8IHVuZGVmaW5lZD4oKVxuXG4gIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSB1c2VDbGFzc2VzKFxuICAgICdjb250YWluZXInLFxuICAgIGNsYXNzRnJvbVF1YWxpdHkoc2wucXVhbGl0eSwgJ2JnJyksXG4gIClcblxuICBjb25zdCBkZXNjcmlwdGlvbkNsYXNzZXMgPSB1c2VDbGFzc2VzKFxuICAgICdzdHJlc3MtaGVhZGVyLWRlc2NyaXB0aW9uJyxcbiAgICBjbGFzc0Zyb21RdWFsaXR5KHNsLnF1YWxpdHksICdmZycpLFxuICApXG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGE6IFN0cmVzcykgPT4ge1xuICAgICAgc2V0U0woZGF0YSlcbiAgICB9LFxuICAgIFtzZXRTTF0sXG4gIClcblxuICBjb25zdCBoYW5kbGVOb3RpZmljYXRpb24gPSB1c2VDYWxsYmFjayhcbiAgICAoZGF0YTogQWN0aW9uRGF0YSkgPT4ge1xuICAgICAgc2V0QWN0aW9uRGF0YShkYXRhKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRBY3Rpb25EYXRhKHVuZGVmaW5lZCksIDMwMDApXG4gICAgfSxcbiAgICBbc2V0QWN0aW9uRGF0YV0sXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc29ja2V0KSByZXR1cm5cbiAgICBzb2NrZXQub24oJ3N0cmVzcy11cGRhdGUnLCBoYW5kbGVVcGRhdGUpXG4gICAgc29ja2V0Lm9uKCdub3RpZmljYXRpb24nLCBoYW5kbGVOb3RpZmljYXRpb24pXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNvY2tldC5vZmYoJ3N0cmVzcy11cGRhdGUnLCBoYW5kbGVVcGRhdGUpXG4gICAgICBzb2NrZXQub2ZmKCdub3RpZmljYXRpb24nLCBoYW5kbGVOb3RpZmljYXRpb24pXG4gICAgfVxuICB9LCBbc29ja2V0XSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc29ja2V0ICYmIHNvY2tldC5lbWl0KCdzdHJlc3MtdXBkYXRlJywgc2wpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfT5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nc3RyZXNzLW8tbWV0ZXInPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nc3RyZXNzLW8tbWV0ZXItaGVhZGVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdzaXRlLWhlYWRpbmcnPktpcHB1bSZhcG9zO3MgU3RyZXNzLW8tTWV0ZXI8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc2l0ZS1zdWJoZWFkaW5nJz5Ib3cgc3RyZXNzZWQgaXMgbXkgS2lwcHVtcz88L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci1jb250YWluZXInPlxuICAgICAgICAgIDxTbGlkZXIuUm9vdFxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzdHJlc3MtbWV0ZXInXG4gICAgICAgICAgICBtaW49e01JTl9TVFJFU1NfTEVWRUx9XG4gICAgICAgICAgICBtYXg9e01BWF9TVFJFU1NfTEVWRUx9XG4gICAgICAgICAgICB2YWx1ZT17W3NsPy5sZXZlbF19XG4gICAgICAgICAgICBzdGVwPXtERUZBVUxUX1NUUkVTU19TVEVQfVxuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17KFt2YWx1ZV0pID0+IHNldFNMKFN0cmVzc0xldmVsKHZhbHVlKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNsaWRlci5UcmFjayBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci10cmFjayc+XG4gICAgICAgICAgICAgIDxTbGlkZXIuUmFuZ2VcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzdHJlc3MtbWV0ZXItcmFuZ2UgJHtjbGFzc0Zyb21RdWFsaXR5KFxuICAgICAgICAgICAgICAgICAgc2wucXVhbGl0eSxcbiAgICAgICAgICAgICAgICAgICdiZycsXG4gICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TbGlkZXIuVHJhY2s+XG4gICAgICAgICAgICA8U2xpZGVyLlRodW1iIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLXRodW1iJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci10aHVtYi1wZXJjZW50Jz57c2w/LmxldmVsfSU8L2Rpdj5cbiAgICAgICAgICAgIDwvU2xpZGVyLlRodW1iPlxuICAgICAgICAgIDwvU2xpZGVyLlJvb3Q+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3N0cmVzcy1oZWFkZXInPlxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT0nc3RyZXNzLWhlYWRlci1zbWFsbCc+Q3VycmVudCBzdHJlc3MgbGV2ZWw6PC9zbWFsbD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uQ2xhc3Nlc30+e3NsPy5kZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nc3RyZXNzLWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0cmVzcy1mb3JtLWJ1dHRvbic+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzdHJlc3MtbWV0ZXItYnV0dG9uIGJnLXByaW1hcnknIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgICAgTG9jayBpbiBzdHJlc3MgbGV2ZWxcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhID8gKFxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzdHJlc3MtZm9ybS1tZXNzYWdlICR7Y2xhc3NGcm9tUXVhbGl0eShcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YS5xdWFsaXR5LFxuICAgICAgICAgICAgICAgICAgICAnZmcnLFxuICAgICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICAgICAgcm9sZT0nYWxlcnQnXG4gICAgICAgICAgICAgICAgICBpZD0nc2F2ZS1tZXNzYWdlJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuXG4gIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxoMT48L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8aDE+V2hvb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZzwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgT2ggZGVhciBtZSwgYXBwYXJlbnRseToge2Vycm9yLm1lc3NhZ2V9Li4uIFNoYWxsIHdleycgJ31cbiAgICAgICAgPExpbmsgdG89Jy8nPlRyeSBhZ2Fpbj88L0xpbms+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJleHBvcnQgY29uc3QgTUlOX1NUUkVTU19MRVZFTCA9IDBcbmV4cG9ydCBjb25zdCBNQVhfU1RSRVNTX0xFVkVMID0gMTAwXG5leHBvcnQgY29uc3QgREVGQVVMVF9TVFJFU1NfTEVWRUwgPSAxMFxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1RSRVNTX1NURVAgPSA1XG5cbmNvbnN0IHN0cmVzc0xldmVsRGVzY3JpcHRpb25zID0gW1xuICAnTGl0ZXJhbGx5IHNxdWlydGluZycsXG4gICdDcm9va3VzIGtpc3NlcycsXG4gICdQaWNuaWMgd2l0aCBNYXN0ZXInLFxuICAnQ3VkZGxlZCB1cCwgd2l0aCBhIHBpbGxvdyBvbiBoZWFkJyxcbiAgJ0Rvb3JkYXNoIGNhbWUgZWFybGllciB0aGFuIGV4cGVjdGVkJyxcbiAgJ05pY2Ugd2FybSBzaG93ZXInLFxuICAnUHJldHR5LCByZWxheGVkLCBhbmQgY3V0ZScsXG4gICdOb3QgdGhhdCBzdHJlc3NlZCcsXG4gICdTbGlnaHRseSB0ZW5zZScsXG4gICdTZWFzb24gZmluYWxlIG9mIFByb2plY3QgUnVud2F5JyxcbiAgJ0EgYml0IHNhZCBhbmQgcHJlb2NjdXBpZWQnLFxuICAnVGFpbCBpcyB0aHdvbXBpbmcgYSBiaXQnLFxuICAnV2hpc2tlcnMgYXJlIGEgbGl0dGxlIHR3aXRjaHknLFxuICAnV2hpc2tlcnMgYXJlIHB1bGxlZCBhIGJpdCB0b28gaGFyZCcsXG4gICdCaXRjb2luIGFsbC10aW1lIGxvdycsXG4gICdQZXJpb2QgdGltZSB0aW1lcycsXG4gICdIb21lMiBzb2xkIG91dCwgSVUgYmFza2V0YmFsbCBuaWdodCwgTmV3IEplcnNleSBIaWx0b24tSG9ub3JzIERpYW1vbmQgTWVtYmVyIHNvcm9yaXR5IG1vbSB5ZWxsaW5nIGFib3V0IHRoZSBob2xlIGluIGhlciB3YWxsIHRoYXQgaGVyIGh1c2JhbmQgcHVuY2hlZCcsXG4gIFwiTWFzdGVyJ3Mgd2lmaSB3ZW50IG91dFwiLFxuICAnVGhlIHBvd2VyIGlzIG91dCwgaXQgaXMgc3Rvcm1pbmcsIGFuZCB0aGUgaGVhdCBpcyBub3Qgd29ya2luZycsXG4gICdUaGUgTlRGIHdhbGxldCB0cmFuc2ZlciBpcyBub3Qgd29ya2luZycsXG4gICdIYXZpbmcgQ292aWQgYW5kIGEgZmxhdC10aXJlJyxcbl1cblxuZnVuY3Rpb24gZ2V0RGVzY3JpcHRpb25Gb3JTdHJlc3NMZXZlbChsZXZlbDogbnVtYmVyKSB7XG4gIHJldHVybiBzdHJlc3NMZXZlbERlc2NyaXB0aW9uc1tNYXRoLmZsb29yKGxldmVsIC8gNSldIHx8ICdOb3Qgc3RyZXNzZWQnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdHJlc3NMZXZlbChsZXZlbDogbnVtYmVyKTogU3RyZXNzIHtcbiAgcmV0dXJuIHtcbiAgICBsZXZlbCxcbiAgICBkZXNjcmlwdGlvbjogZ2V0RGVzY3JpcHRpb25Gb3JTdHJlc3NMZXZlbChsZXZlbCksXG4gICAgcXVhbGl0eTogbGV2ZWwgPCAzMyA/ICdnb29kJyA6IGxldmVsIDwgNjYgPyAnd2FybmluZycgOiAnZGFuZ2VyJyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTdHJlc3MgPSB7XG4gIGxldmVsOiBudW1iZXJcbiAgZGVzY3JpcHRpb246IHN0cmluZ1xuICBxdWFsaXR5OiAnZ29vZCcgfCAnd2FybmluZycgfCAnZGFuZ2VyJ1xufVxuIiwgImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNsYXNzZXMoLi4uY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpLCBjbGFzc2VzKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JD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
