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
