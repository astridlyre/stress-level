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
var styles_default = "/build/_assets/index-3P2UVHRD.css";

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
var import_react5 = __toModule(require("react"));

// app/stressLevel.ts
init_react();
var MIN_STRESS_LEVEL = 0;
var MAX_STRESS_LEVEL = 100;
var DEFAULT_STRESS_LEVEL = 10;
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
var import_react6 = __toModule(require("react"));

// app/hooks.ts
init_react();
var import_react3 = __toModule(require("react"));
function useClasses(...classes) {
  return (0, import_react3.useMemo)(() => classes.filter(Boolean).join(" "), classes);
}

// app/utils.tsx
init_react();
var classFromQuality = (quality, prefix) => prefix + "-" + quality;

// app/components/stress-o-meter.tsx
init_react();
var Slider = __toModule(require("@radix-ui/react-slider"));
function StressOMeter({
  currentStressLevel,
  updateStressLevel,
  socket,
  actionData
}) {
  const descriptionClasses = useClasses("stress-header-description", classFromQuality(currentStressLevel.quality, "fg"));
  const handleSubmit = (e) => {
    e.preventDefault();
    socket && socket.emit("stress-update", currentStressLevel);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", {
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
    value: [currentStressLevel == null ? void 0 : currentStressLevel.level],
    step: 1,
    onValueChange: updateStressLevel
  }, /* @__PURE__ */ React.createElement(Slider.Track, {
    className: "stress-meter-track"
  }, /* @__PURE__ */ React.createElement(Slider.Range, {
    className: `stress-meter-range ${classFromQuality(currentStressLevel.quality, "bg")}`
  })), /* @__PURE__ */ React.createElement(Slider.Thumb, {
    className: "stress-meter-thumb"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "stress-meter-thumb-percent"
  }, currentStressLevel == null ? void 0 : currentStressLevel.level, "%"))), /* @__PURE__ */ React.createElement("header", {
    className: "stress-header"
  }, /* @__PURE__ */ React.createElement("small", {
    className: "stress-header-small"
  }, "Current stress level:"), /* @__PURE__ */ React.createElement("h2", {
    className: descriptionClasses
  }, currentStressLevel == null ? void 0 : currentStressLevel.description)), /* @__PURE__ */ React.createElement("form", {
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
  }, actionData == null ? void 0 : actionData.message) : null))));
}

// app/components/add-stress-level.tsx
init_react();
var Slider2 = __toModule(require("@radix-ui/react-slider"));
var import_react4 = __toModule(require("react"));
var newStressLevel = (level, description) => ({
  level,
  description,
  quality: level < 33 ? "good" : level < 66 ? "warning" : "danger"
});
function AddStressLevel({ socket }) {
  const [stressLevel, setStressLevel] = (0, import_react4.useState)(newStressLevel(DEFAULT_STRESS_LEVEL, ""));
  const updateDesc = (e) => {
    setStressLevel((sl) => newStressLevel(sl.level, e.target.value));
  };
  const updateLevel = ([value]) => {
    setStressLevel((sl) => newStressLevel(value, sl.description));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stressLevel);
    socket && socket.emit("new-stress-level", stressLevel);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-1"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "stress-o-meter-header"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "site-heading"
  }, "Add stress level"), /* @__PURE__ */ React.createElement("p", {
    className: "site-subheading"
  }, "Create a new level of stress")), /* @__PURE__ */ React.createElement("form", {
    className: "add-form",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "sl-description",
    className: "labeled-input"
  }, "Description", /* @__PURE__ */ React.createElement("input", {
    onChange: updateDesc,
    value: stressLevel.description,
    className: "input",
    type: "text"
  })), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "sl-intensity",
    className: "labeled-input"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-base"
  }, "Intensity"), /* @__PURE__ */ React.createElement(Slider2.Root, {
    className: "stress-meter",
    min: MIN_STRESS_LEVEL,
    max: MAX_STRESS_LEVEL,
    value: [stressLevel == null ? void 0 : stressLevel.level],
    step: 1,
    onValueChange: updateLevel
  }, /* @__PURE__ */ React.createElement(Slider2.Track, {
    className: "stress-meter-track"
  }, /* @__PURE__ */ React.createElement(Slider2.Range, {
    className: `stress-meter-range ${classFromQuality(stressLevel.quality, "bg")}`
  })), /* @__PURE__ */ React.createElement(Slider2.Thumb, {
    className: "stress-meter-thumb"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "stress-meter-thumb-percent"
  }, stressLevel == null ? void 0 : stressLevel.level, "%")))), /* @__PURE__ */ React.createElement("button", {
    title: "Save",
    className: "stress-meter-button bg-warning mt-sm"
  }, "Save")));
}

// route-module:/home/ml/projects/stress-o-meter/app/routes/index.tsx
function Index() {
  const socket = useSocket();
  const [stressLevels, setStressLevels] = (0, import_react6.useState)();
  const [currentStressLevel, setCurrentStressLevel] = (0, import_react6.useState)(StressLevel(DEFAULT_STRESS_LEVEL));
  const [actionData, setActionData] = (0, import_react6.useState)();
  const [showAddForm, setShowAddForm] = (0, import_react6.useState)(false);
  const updateStressLevel = ([value]) => {
    const newStressLevel2 = stressLevels == null ? void 0 : stressLevels.find((sl) => sl.level >= value);
    setCurrentStressLevel(newStressLevel2);
  };
  const containerClasses = useClasses("container", classFromQuality(currentStressLevel.quality, "bg"));
  const handleUpdate = (0, import_react5.useCallback)((data) => {
    setShowAddForm(false);
    setStressLevels(data);
    setCurrentStressLevel(data.find((sl) => sl.isCurrent) ?? StressLevel(DEFAULT_STRESS_LEVEL));
  }, [setCurrentStressLevel]);
  const handleNotification = (0, import_react5.useCallback)((data) => {
    setActionData(data);
    setTimeout(() => setActionData(void 0), 3e3);
  }, [setActionData]);
  const handleDelete = (0, import_react5.useCallback)(() => {
    console.log(currentStressLevel);
    socket && socket.emit("delete-stress-level", currentStressLevel);
  }, [socket, currentStressLevel]);
  (0, import_react6.useEffect)(() => {
    if (!socket)
      return;
    socket.on("stress-update", handleUpdate);
    socket.on("notification", handleNotification);
    return () => {
      socket.off("stress-update", handleUpdate);
      socket.off("notification", handleNotification);
    };
  }, [socket]);
  return /* @__PURE__ */ React.createElement("div", {
    className: containerClasses
  }, /* @__PURE__ */ React.createElement("main", {
    className: "stress-o-meter"
  }, showAddForm ? /* @__PURE__ */ React.createElement(AddStressLevel, {
    socket
  }) : /* @__PURE__ */ React.createElement(StressOMeter, {
    currentStressLevel,
    updateStressLevel,
    socket,
    actionData
  }), /* @__PURE__ */ React.createElement("div", {
    className: "justify-right"
  }, !showAddForm && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: handleDelete,
    title: "Delete level",
    className: "stress-meter-button bg-danger"
  }, "Delete level"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setShowAddForm(!showAddForm),
    className: "stress-meter-button bg-gray mr-auto"
  }, showAddForm ? "Cancel" : "Add new level"))));
}
function CatchBoundary() {
  const caught = (0, import_remix3.useCatch)();
  if (caught.status === 401) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "container"
    }, /* @__PURE__ */ React.createElement("h1", null, "Oh no"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZW1peC1ydW4rZGV2QDEuMS4zL25vZGVfbW9kdWxlcy9AcmVtaXgtcnVuL2Rldi9jb21waWxlci9zaGltcy9yZWFjdC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVtaXhAMS4xLjMvbm9kZV9tb2R1bGVzL3JlbWl4L2NsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVtaXhAMS4xLjMvbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVtaXhAMS4xLjMvbm9kZV9tb2R1bGVzL3JlbWl4L3BsYXRmb3JtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZW1peEAxLjEuMy9ub2RlX21vZHVsZXMvcmVtaXgvaW5kZXguanMiLCAiPHN0ZGluPiIsICIuLi8uLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb250ZXh0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vYXBwL3N0cmVzc0xldmVsLnRzIiwgIi4uLy4uL2FwcC9ob29rcy50cyIsICIuLi8uLi9hcHAvdXRpbHMudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL3N0cmVzcy1vLW1ldGVyLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9hZGQtc3RyZXNzLWxldmVsLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL21sL3Byb2plY3RzL3N0cmVzcy1vLW1ldGVyL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0LFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+LFxuICApXG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSlcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBTb2NrZXQgfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICcuL3N0eWxlcy9pbmRleC5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTb2NrZXRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCdcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdLaXBwdW0gU3RyZXNzLW8tTWV0ZXInIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICB7XG4gICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgaHJlZjogc3R5bGVzVXJsLFxuICB9LFxuICB7XG4gICAgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsXG4gICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICBocmVmOiAnL2FwcGxlLXRvdWNoLWljb24ucG5nJyxcbiAgfSxcbiAge1xuICAgIHJlbDogJ2ljb24nLFxuICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIHNpemVzOiAnMzJ4MzInLFxuICAgIGhyZWY6ICcvZmF2aWNvbi0zMngzMi5wbmcnLFxuICB9LFxuICB7XG4gICAgcmVsOiAnaWNvbicsXG4gICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgc2l6ZXM6ICcxNngxNicsXG4gICAgaHJlZjogJy9mYXZpY29uLTE2eDE2LnBuZycsXG4gIH0sXG4gIHsgcmVsOiAnbWFuaWZlc3QnLCBocmVmOiAnL3NpdGUud2VibWFuaWZlc3QnIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlPFNvY2tldD4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3U29ja2V0ID0gaW8oKVxuICAgIHNldFNvY2tldChuZXdTb2NrZXQpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG5ld1NvY2tldC5jbG9zZSgpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc29ja2V0KSByZXR1cm5cbiAgICBzb2NrZXQub24oJ2NvbmZpcm1hdGlvbicsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG4gIH0sIFtzb2NrZXRdKVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFNvY2tldFByb3ZpZGVyIHNvY2tldD17c29ja2V0fT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvU29ja2V0UHJvdmlkZXI+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFNvY2tldCB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbnR5cGUgUHJvdmlkZXJQcm9wcyA9IHtcbiAgc29ja2V0OiBTb2NrZXQgfCB1bmRlZmluZWRcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufVxuXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTb2NrZXQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNvY2tldCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNvY2tldFByb3ZpZGVyKHsgc29ja2V0LCBjaGlsZHJlbiB9OiBQcm92aWRlclByb3BzKSB7XG4gIHJldHVybiA8Y29udGV4dC5Qcm92aWRlciB2YWx1ZT17c29ja2V0fT57Y2hpbGRyZW59PC9jb250ZXh0LlByb3ZpZGVyPlxufVxuIiwgImltcG9ydCB0eXBlIHsgU3RyZXNzLCBBY3Rpb25EYXRhIH0gZnJvbSAnfi9zdHJlc3NMZXZlbCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBERUZBVUxUX1NUUkVTU19MRVZFTCwgU3RyZXNzTGV2ZWwgfSBmcm9tICd+L3N0cmVzc0xldmVsJ1xuaW1wb3J0IHsgdXNlU29ja2V0IH0gZnJvbSAnfi9jb250ZXh0J1xuaW1wb3J0IHsgTGluaywgdXNlQ2F0Y2ggfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUNsYXNzZXMgfSBmcm9tICd+L2hvb2tzJ1xuaW1wb3J0IHsgY2xhc3NGcm9tUXVhbGl0eSB9IGZyb20gJ34vdXRpbHMnXG5pbXBvcnQgU3RyZXNzT01ldGVyIGZyb20gJ34vY29tcG9uZW50cy9zdHJlc3Mtby1tZXRlcidcbmltcG9ydCBBZGRTdHJlc3NMZXZlbCBmcm9tICd+L2NvbXBvbmVudHMvYWRkLXN0cmVzcy1sZXZlbCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHNvY2tldCA9IHVzZVNvY2tldCgpXG4gIGNvbnN0IFtzdHJlc3NMZXZlbHMsIHNldFN0cmVzc0xldmVsc10gPSB1c2VTdGF0ZTxTdHJlc3NbXSB8IHVuZGVmaW5lZD4oKVxuXG4gIGNvbnN0IFtjdXJyZW50U3RyZXNzTGV2ZWwsIHNldEN1cnJlbnRTdHJlc3NMZXZlbF0gPSB1c2VTdGF0ZTxTdHJlc3M+KFxuICAgIFN0cmVzc0xldmVsKERFRkFVTFRfU1RSRVNTX0xFVkVMKSxcbiAgKVxuXG4gIGNvbnN0IFthY3Rpb25EYXRhLCBzZXRBY3Rpb25EYXRhXSA9IHVzZVN0YXRlPEFjdGlvbkRhdGEgfCB1bmRlZmluZWQ+KClcbiAgY29uc3QgW3Nob3dBZGRGb3JtLCBzZXRTaG93QWRkRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB1cGRhdGVTdHJlc3NMZXZlbCA9IChbdmFsdWVdOiBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IG5ld1N0cmVzc0xldmVsID0gc3RyZXNzTGV2ZWxzPy5maW5kKChzbCkgPT4gc2wubGV2ZWwgPj0gdmFsdWUpXG4gICAgc2V0Q3VycmVudFN0cmVzc0xldmVsKG5ld1N0cmVzc0xldmVsISlcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSB1c2VDbGFzc2VzKFxuICAgICdjb250YWluZXInLFxuICAgIGNsYXNzRnJvbVF1YWxpdHkoY3VycmVudFN0cmVzc0xldmVsLnF1YWxpdHksICdiZycpLFxuICApXG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGE6IFN0cmVzc1tdKSA9PiB7XG4gICAgICBzZXRTaG93QWRkRm9ybShmYWxzZSlcbiAgICAgIHNldFN0cmVzc0xldmVscyhkYXRhKVxuICAgICAgc2V0Q3VycmVudFN0cmVzc0xldmVsKFxuICAgICAgICBkYXRhLmZpbmQoKHNsKSA9PiBzbC5pc0N1cnJlbnQpID8/IFN0cmVzc0xldmVsKERFRkFVTFRfU1RSRVNTX0xFVkVMKSxcbiAgICAgIClcbiAgICB9LFxuICAgIFtzZXRDdXJyZW50U3RyZXNzTGV2ZWxdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlTm90aWZpY2F0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGE6IEFjdGlvbkRhdGEpID0+IHtcbiAgICAgIHNldEFjdGlvbkRhdGEoZGF0YSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QWN0aW9uRGF0YSh1bmRlZmluZWQpLCAzMDAwKVxuICAgIH0sXG4gICAgW3NldEFjdGlvbkRhdGFdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdHJlc3NMZXZlbClcbiAgICBzb2NrZXQgJiYgc29ja2V0LmVtaXQoJ2RlbGV0ZS1zdHJlc3MtbGV2ZWwnLCBjdXJyZW50U3RyZXNzTGV2ZWwpXG4gIH0sIFtzb2NrZXQsIGN1cnJlbnRTdHJlc3NMZXZlbF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNvY2tldCkgcmV0dXJuXG4gICAgc29ja2V0Lm9uKCdzdHJlc3MtdXBkYXRlJywgaGFuZGxlVXBkYXRlKVxuICAgIHNvY2tldC5vbignbm90aWZpY2F0aW9uJywgaGFuZGxlTm90aWZpY2F0aW9uKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQub2ZmKCdzdHJlc3MtdXBkYXRlJywgaGFuZGxlVXBkYXRlKVxuICAgICAgc29ja2V0Lm9mZignbm90aWZpY2F0aW9uJywgaGFuZGxlTm90aWZpY2F0aW9uKVxuICAgIH1cbiAgfSwgW3NvY2tldF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3Nlc30+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J3N0cmVzcy1vLW1ldGVyJz5cbiAgICAgICAge3Nob3dBZGRGb3JtID8gKFxuICAgICAgICAgIDxBZGRTdHJlc3NMZXZlbCBzb2NrZXQ9e3NvY2tldH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8U3RyZXNzT01ldGVyXG4gICAgICAgICAgICBjdXJyZW50U3RyZXNzTGV2ZWw9e2N1cnJlbnRTdHJlc3NMZXZlbH1cbiAgICAgICAgICAgIHVwZGF0ZVN0cmVzc0xldmVsPXt1cGRhdGVTdHJlc3NMZXZlbH1cbiAgICAgICAgICAgIHNvY2tldD17c29ja2V0fVxuICAgICAgICAgICAgYWN0aW9uRGF0YT17YWN0aW9uRGF0YX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nanVzdGlmeS1yaWdodCc+XG4gICAgICAgICAgeyFzaG93QWRkRm9ybSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgICB0aXRsZT0nRGVsZXRlIGxldmVsJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci1idXR0b24gYmctZGFuZ2VyJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEZWxldGUgbGV2ZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZEZvcm0oIXNob3dBZGRGb3JtKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLWJ1dHRvbiBiZy1ncmF5IG1yLWF1dG8nXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Nob3dBZGRGb3JtID8gJ0NhbmNlbCcgOiAnQWRkIG5ldyBsZXZlbCd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpXG5cbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwMSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGgxPk9oIG5vPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGgxPldob29wcyEgU29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIE9oIGRlYXIgbWUsIGFwcGFyZW50bHk6IHtlcnJvci5tZXNzYWdlfS4uLiBTaGFsbCB3ZXsnICd9XG4gICAgICAgIDxMaW5rIHRvPScvJz5UcnkgYWdhaW4/PC9MaW5rPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IGNvbnN0IE1JTl9TVFJFU1NfTEVWRUwgPSAwXG5leHBvcnQgY29uc3QgTUFYX1NUUkVTU19MRVZFTCA9IDEwMFxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1RSRVNTX0xFVkVMID0gMTBcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NUUkVTU19TVEVQID0gNVxuXG5jb25zdCBzdHJlc3NMZXZlbERlc2NyaXB0aW9ucyA9IFtcbiAgJ0xpdGVyYWxseSBzcXVpcnRpbmcnLFxuICAnQ3Jvb2t1cyBraXNzZXMnLFxuICAnUGljbmljIHdpdGggTWFzdGVyJyxcbiAgJ0N1ZGRsZWQgdXAsIHdpdGggYSBwaWxsb3cgb24gaGVhZCcsXG4gICdEb29yZGFzaCBjYW1lIGVhcmxpZXIgdGhhbiBleHBlY3RlZCcsXG4gICdOaWNlIHdhcm0gc2hvd2VyJyxcbiAgJ1ByZXR0eSwgcmVsYXhlZCwgYW5kIGN1dGUnLFxuICAnTm90IHRoYXQgc3RyZXNzZWQnLFxuICAnU2xpZ2h0bHkgdGVuc2UnLFxuICAnU2Vhc29uIGZpbmFsZSBvZiBQcm9qZWN0IFJ1bndheScsXG4gICdBIGJpdCBzYWQgYW5kIHByZW9jY3VwaWVkJyxcbiAgJ1RhaWwgaXMgdGh3b21waW5nIGEgYml0JyxcbiAgJ1doaXNrZXJzIGFyZSBhIGxpdHRsZSB0d2l0Y2h5JyxcbiAgJ1doaXNrZXJzIGFyZSBwdWxsZWQgYSBiaXQgdG9vIGhhcmQnLFxuICAnQml0Y29pbiBhbGwtdGltZSBsb3cnLFxuICAnUGVyaW9kIHRpbWUgdGltZXMnLFxuICAnSG9tZTIgc29sZCBvdXQsIElVIGJhc2tldGJhbGwgbmlnaHQsIE5ldyBKZXJzZXkgSGlsdG9uLUhvbm9ycyBEaWFtb25kIE1lbWJlciBzb3Jvcml0eSBtb20geWVsbGluZyBhYm91dCB0aGUgaG9sZSBpbiBoZXIgd2FsbCB0aGF0IGhlciBodXNiYW5kIHB1bmNoZWQnLFxuICBcIk1hc3RlcidzIHdpZmkgd2VudCBvdXRcIixcbiAgJ1RoZSBwb3dlciBpcyBvdXQsIGl0IGlzIHN0b3JtaW5nLCBhbmQgdGhlIGhlYXQgaXMgbm90IHdvcmtpbmcnLFxuICAnVGhlIE5URiB3YWxsZXQgdHJhbnNmZXIgaXMgbm90IHdvcmtpbmcnLFxuICAnSGF2aW5nIENvdmlkIGFuZCBhIGZsYXQtdGlyZScsXG5dXG5cbmZ1bmN0aW9uIGdldERlc2NyaXB0aW9uRm9yU3RyZXNzTGV2ZWwobGV2ZWw6IG51bWJlcikge1xuICByZXR1cm4gc3RyZXNzTGV2ZWxEZXNjcmlwdGlvbnNbTWF0aC5mbG9vcihsZXZlbCAvIDUpXSB8fCAnTm90IHN0cmVzc2VkJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RyZXNzTGV2ZWwobGV2ZWw6IG51bWJlcik6IFN0cmVzcyB7XG4gIHJldHVybiB7XG4gICAgbGV2ZWwsXG4gICAgZGVzY3JpcHRpb246IGdldERlc2NyaXB0aW9uRm9yU3RyZXNzTGV2ZWwobGV2ZWwpLFxuICAgIHF1YWxpdHk6IGxldmVsIDwgMzMgPyAnZ29vZCcgOiBsZXZlbCA8IDY2ID8gJ3dhcm5pbmcnIDogJ2RhbmdlcicsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3RyZXNzID0ge1xuICBsZXZlbDogbnVtYmVyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgcXVhbGl0eTogJ2dvb2QnIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcidcbiAgaXNDdXJyZW50PzogYm9vbGVhblxuICBpZD86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25EYXRhID0ge1xuICB0eXBlOiAnc3RyZXNzLXVwZGF0ZScgfCAnbm90aWZpY2F0aW9uJ1xuICBtZXNzYWdlPzogc3RyaW5nXG4gIHF1YWxpdHk6ICdnb29kJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInXG59XG4iLCAiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xhc3NlcyguLi5jbGFzc2VzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyksIGNsYXNzZXMpXG59XG4iLCAiZXhwb3J0IGNvbnN0IGNsYXNzRnJvbVF1YWxpdHkgPSAocXVhbGl0eTogc3RyaW5nLCBwcmVmaXg6ICdiZycgfCAnZmcnKSA9PlxuICBwcmVmaXggKyAnLScgKyBxdWFsaXR5XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB0eXBlIHsgU3RyZXNzLCBBY3Rpb25EYXRhIH0gZnJvbSAnfi9zdHJlc3NMZXZlbCdcbmltcG9ydCB0eXBlIHsgU29ja2V0IH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbmltcG9ydCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTUFYX1NUUkVTU19MRVZFTCwgTUlOX1NUUkVTU19MRVZFTCB9IGZyb20gJ34vc3RyZXNzTGV2ZWwnXG5pbXBvcnQgeyB1c2VDbGFzc2VzIH0gZnJvbSAnfi9ob29rcydcbmltcG9ydCAqIGFzIFNsaWRlciBmcm9tICdAcmFkaXgtdWkvcmVhY3Qtc2xpZGVyJ1xuaW1wb3J0IHsgY2xhc3NGcm9tUXVhbGl0eSB9IGZyb20gJ34vdXRpbHMnXG5cbnR5cGUgU3RyZXNzT01ldGVyUHJvcHMgPSB7XG4gIGN1cnJlbnRTdHJlc3NMZXZlbDogU3RyZXNzXG4gIHVwZGF0ZVN0cmVzc0xldmVsOiAodmFsdWU6IG51bWJlcltdKSA9PiB2b2lkXG4gIHNvY2tldDogU29ja2V0IHwgdW5kZWZpbmVkXG4gIGFjdGlvbkRhdGE6IEFjdGlvbkRhdGEgfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RyZXNzT01ldGVyKHtcbiAgY3VycmVudFN0cmVzc0xldmVsLFxuICB1cGRhdGVTdHJlc3NMZXZlbCxcbiAgc29ja2V0LFxuICBhY3Rpb25EYXRhLFxufTogU3RyZXNzT01ldGVyUHJvcHMpIHtcbiAgY29uc3QgZGVzY3JpcHRpb25DbGFzc2VzID0gdXNlQ2xhc3NlcyhcbiAgICAnc3RyZXNzLWhlYWRlci1kZXNjcmlwdGlvbicsXG4gICAgY2xhc3NGcm9tUXVhbGl0eShjdXJyZW50U3RyZXNzTGV2ZWwucXVhbGl0eSwgJ2ZnJyksXG4gIClcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc29ja2V0ICYmIHNvY2tldC5lbWl0KCdzdHJlc3MtdXBkYXRlJywgY3VycmVudFN0cmVzc0xldmVsKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3N0cmVzcy1vLW1ldGVyLWhlYWRlcic+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3NpdGUtaGVhZGluZyc+S2lwcHVtJmFwb3M7cyBTdHJlc3Mtby1NZXRlcjwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc2l0ZS1zdWJoZWFkaW5nJz5Ib3cgc3RyZXNzZWQgaXMgbXkgS2lwcHVtcz88L3A+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLWNvbnRhaW5lcic+XG4gICAgICAgIDxTbGlkZXIuUm9vdFxuICAgICAgICAgIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyJ1xuICAgICAgICAgIG1pbj17TUlOX1NUUkVTU19MRVZFTH1cbiAgICAgICAgICBtYXg9e01BWF9TVFJFU1NfTEVWRUx9XG4gICAgICAgICAgdmFsdWU9e1tjdXJyZW50U3RyZXNzTGV2ZWw/LmxldmVsXX1cbiAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9e3VwZGF0ZVN0cmVzc0xldmVsfVxuICAgICAgICA+XG4gICAgICAgICAgPFNsaWRlci5UcmFjayBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci10cmFjayc+XG4gICAgICAgICAgICA8U2xpZGVyLlJhbmdlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHN0cmVzcy1tZXRlci1yYW5nZSAke2NsYXNzRnJvbVF1YWxpdHkoXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmVzc0xldmVsLnF1YWxpdHksXG4gICAgICAgICAgICAgICAgJ2JnJyxcbiAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1NsaWRlci5UcmFjaz5cbiAgICAgICAgICA8U2xpZGVyLlRodW1iIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLXRodW1iJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdHJlc3MtbWV0ZXItdGh1bWItcGVyY2VudCc+XG4gICAgICAgICAgICAgIHtjdXJyZW50U3RyZXNzTGV2ZWw/LmxldmVsfSVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2xpZGVyLlRodW1iPlxuICAgICAgICA8L1NsaWRlci5Sb290PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nc3RyZXNzLWhlYWRlcic+XG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT0nc3RyZXNzLWhlYWRlci1zbWFsbCc+Q3VycmVudCBzdHJlc3MgbGV2ZWw6PC9zbWFsbD5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtkZXNjcmlwdGlvbkNsYXNzZXN9PlxuICAgICAgICAgICAge2N1cnJlbnRTdHJlc3NMZXZlbD8uZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nc3RyZXNzLWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdHJlc3MtZm9ybS1idXR0b24nPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci1idXR0b24gYmctcHJpbWFyeScgdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgTG9jayBpbiBzdHJlc3MgbGV2ZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAge2FjdGlvbkRhdGEgPyAoXG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3RyZXNzLWZvcm0tbWVzc2FnZSAke2NsYXNzRnJvbVF1YWxpdHkoXG4gICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhLnF1YWxpdHksXG4gICAgICAgICAgICAgICAgICAnZmcnLFxuICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICByb2xlPSdhbGVydCdcbiAgICAgICAgICAgICAgICBpZD0nc2F2ZS1tZXNzYWdlJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEZvcm1FdmVudCwgQmFzZVN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFNvY2tldCB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgeyBERUZBVUxUX1NUUkVTU19MRVZFTCwgU3RyZXNzIH0gZnJvbSAnfi9zdHJlc3NMZXZlbCdcbmltcG9ydCB7IE1BWF9TVFJFU1NfTEVWRUwsIE1JTl9TVFJFU1NfTEVWRUwgfSBmcm9tICd+L3N0cmVzc0xldmVsJ1xuaW1wb3J0ICogYXMgU2xpZGVyIGZyb20gJ0ByYWRpeC11aS9yZWFjdC1zbGlkZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY2xhc3NGcm9tUXVhbGl0eSB9IGZyb20gJ34vdXRpbHMnXG5cbnR5cGUgQWRkU3RyZXNzTGV2ZWxQcm9wcyA9IHtcbiAgc29ja2V0OiBTb2NrZXQgfCB1bmRlZmluZWRcbn1cblxuY29uc3QgbmV3U3RyZXNzTGV2ZWwgPSAobGV2ZWw6IG51bWJlciwgZGVzY3JpcHRpb246IHN0cmluZyk6IFN0cmVzcyA9PiAoe1xuICBsZXZlbCxcbiAgZGVzY3JpcHRpb24sXG4gIHF1YWxpdHk6IGxldmVsIDwgMzMgPyAnZ29vZCcgOiBsZXZlbCA8IDY2ID8gJ3dhcm5pbmcnIDogJ2RhbmdlcicsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRTdHJlc3NMZXZlbCh7IHNvY2tldCB9OiBBZGRTdHJlc3NMZXZlbFByb3BzKSB7XG4gIGNvbnN0IFtzdHJlc3NMZXZlbCwgc2V0U3RyZXNzTGV2ZWxdID0gdXNlU3RhdGU8U3RyZXNzPihcbiAgICBuZXdTdHJlc3NMZXZlbChERUZBVUxUX1NUUkVTU19MRVZFTCwgJycpLFxuICApXG5cbiAgY29uc3QgdXBkYXRlRGVzYyA9IChlOiBCYXNlU3ludGhldGljRXZlbnQpID0+IHtcbiAgICBzZXRTdHJlc3NMZXZlbCgoc2wpID0+IG5ld1N0cmVzc0xldmVsKHNsLmxldmVsLCBlLnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICBjb25zdCB1cGRhdGVMZXZlbCA9IChbdmFsdWVdOiBudW1iZXJbXSkgPT4ge1xuICAgIHNldFN0cmVzc0xldmVsKChzbCkgPT4gbmV3U3RyZXNzTGV2ZWwodmFsdWUsIHNsLmRlc2NyaXB0aW9uKSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBGb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyhzdHJlc3NMZXZlbClcbiAgICBzb2NrZXQgJiYgc29ja2V0LmVtaXQoJ25ldy1zdHJlc3MtbGV2ZWwnLCBzdHJlc3NMZXZlbClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21iLTEnPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3N0cmVzcy1vLW1ldGVyLWhlYWRlcic+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3NpdGUtaGVhZGluZyc+QWRkIHN0cmVzcyBsZXZlbDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc2l0ZS1zdWJoZWFkaW5nJz5DcmVhdGUgYSBuZXcgbGV2ZWwgb2Ygc3RyZXNzPC9wPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J2FkZC1mb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3NsLWRlc2NyaXB0aW9uJyBjbGFzc05hbWU9J2xhYmVsZWQtaW5wdXQnPlxuICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlRGVzY31cbiAgICAgICAgICAgIHZhbHVlPXtzdHJlc3NMZXZlbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQnXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdzbC1pbnRlbnNpdHknIGNsYXNzTmFtZT0nbGFiZWxlZC1pbnB1dCc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdtYi1iYXNlJz5JbnRlbnNpdHk8L3A+XG4gICAgICAgICAgPFNsaWRlci5Sb290XG4gICAgICAgICAgICBjbGFzc05hbWU9J3N0cmVzcy1tZXRlcidcbiAgICAgICAgICAgIG1pbj17TUlOX1NUUkVTU19MRVZFTH1cbiAgICAgICAgICAgIG1heD17TUFYX1NUUkVTU19MRVZFTH1cbiAgICAgICAgICAgIHZhbHVlPXtbc3RyZXNzTGV2ZWw/LmxldmVsXX1cbiAgICAgICAgICAgIHN0ZXA9ezF9XG4gICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXt1cGRhdGVMZXZlbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2xpZGVyLlRyYWNrIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLXRyYWNrJz5cbiAgICAgICAgICAgICAgPFNsaWRlci5SYW5nZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHN0cmVzcy1tZXRlci1yYW5nZSAke2NsYXNzRnJvbVF1YWxpdHkoXG4gICAgICAgICAgICAgICAgICBzdHJlc3NMZXZlbC5xdWFsaXR5LFxuICAgICAgICAgICAgICAgICAgJ2JnJyxcbiAgICAgICAgICAgICAgICApfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NsaWRlci5UcmFjaz5cbiAgICAgICAgICAgIDxTbGlkZXIuVGh1bWIgY2xhc3NOYW1lPSdzdHJlc3MtbWV0ZXItdGh1bWInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLXRodW1iLXBlcmNlbnQnPlxuICAgICAgICAgICAgICAgIHtzdHJlc3NMZXZlbD8ubGV2ZWx9JVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2xpZGVyLlRodW1iPlxuICAgICAgICAgIDwvU2xpZGVyLlJvb3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gdGl0bGU9J1NhdmUnIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLWJ1dHRvbiBiZy13YXJuaW5nIG10LXNtJz5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFB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
