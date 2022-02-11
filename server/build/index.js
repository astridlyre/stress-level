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
Array.prototype.findRight = function findRight(fn) {
  for (let i = this.length - 1; i >= 0; i--) {
    const value = this[i];
    if (fn(value)) {
      return value;
    }
  }
};
function Index() {
  const socket = useSocket();
  const [stressLevels, setStressLevels] = (0, import_react6.useState)();
  const [currentStressLevel, setCurrentStressLevel] = (0, import_react6.useState)(StressLevel(DEFAULT_STRESS_LEVEL));
  const [actionData, setActionData] = (0, import_react6.useState)();
  const [showAddForm, setShowAddForm] = (0, import_react6.useState)(false);
  const updateStressLevel = ([value]) => {
    const newStressLevel2 = value < currentStressLevel.level ? stressLevels == null ? void 0 : stressLevels.findRight((sl) => sl.level <= value) : stressLevels == null ? void 0 : stressLevels.find((sl) => sl.level >= value);
    newStressLevel2 && setCurrentStressLevel(newStressLevel2);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByZW1peC1ydW4rZGV2QDEuMS4zL25vZGVfbW9kdWxlcy9AcmVtaXgtcnVuL2Rldi9jb21waWxlci9zaGltcy9yZWFjdC50cyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVtaXhAMS4xLjMvbm9kZV9tb2R1bGVzL3JlbWl4L2NsaWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVtaXhAMS4xLjMvbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVtaXhAMS4xLjMvbm9kZV9tb2R1bGVzL3JlbWl4L3BsYXRmb3JtLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZW1peEAxLjEuMy9ub2RlX21vZHVsZXMvcmVtaXgvaW5kZXguanMiLCAiPHN0ZGluPiIsICIuLi8uLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb250ZXh0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vYXBwL3N0cmVzc0xldmVsLnRzIiwgIi4uLy4uL2FwcC9ob29rcy50cyIsICIuLi8uLi9hcHAvdXRpbHMudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL3N0cmVzcy1vLW1ldGVyLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9hZGQtc3RyZXNzLWxldmVsLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvbWwvcHJvamVjdHMvc3RyZXNzLW8tbWV0ZXIvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL21sL3Byb2plY3RzL3N0cmVzcy1vLW1ldGVyL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0LFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+LFxuICApXG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSlcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBTb2NrZXQgfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tICcuL3N0eWxlcy9pbmRleC5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTb2NrZXRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCdcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdLaXBwdW0gU3RyZXNzLW8tTWV0ZXInIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW1xuICB7XG4gICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgaHJlZjogc3R5bGVzVXJsLFxuICB9LFxuICB7XG4gICAgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsXG4gICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICBocmVmOiAnL2FwcGxlLXRvdWNoLWljb24ucG5nJyxcbiAgfSxcbiAge1xuICAgIHJlbDogJ2ljb24nLFxuICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIHNpemVzOiAnMzJ4MzInLFxuICAgIGhyZWY6ICcvZmF2aWNvbi0zMngzMi5wbmcnLFxuICB9LFxuICB7XG4gICAgcmVsOiAnaWNvbicsXG4gICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgc2l6ZXM6ICcxNngxNicsXG4gICAgaHJlZjogJy9mYXZpY29uLTE2eDE2LnBuZycsXG4gIH0sXG4gIHsgcmVsOiAnbWFuaWZlc3QnLCBocmVmOiAnL3NpdGUud2VibWFuaWZlc3QnIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlPFNvY2tldD4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3U29ja2V0ID0gaW8oKVxuICAgIHNldFNvY2tldChuZXdTb2NrZXQpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG5ld1NvY2tldC5jbG9zZSgpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc29ja2V0KSByZXR1cm5cbiAgICBzb2NrZXQub24oJ2NvbmZpcm1hdGlvbicsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG4gIH0sIFtzb2NrZXRdKVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFNvY2tldFByb3ZpZGVyIHNvY2tldD17c29ja2V0fT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvU29ja2V0UHJvdmlkZXI+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFNvY2tldCB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbnR5cGUgUHJvdmlkZXJQcm9wcyA9IHtcbiAgc29ja2V0OiBTb2NrZXQgfCB1bmRlZmluZWRcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufVxuXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTb2NrZXQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZClcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNvY2tldCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNvY2tldFByb3ZpZGVyKHsgc29ja2V0LCBjaGlsZHJlbiB9OiBQcm92aWRlclByb3BzKSB7XG4gIHJldHVybiA8Y29udGV4dC5Qcm92aWRlciB2YWx1ZT17c29ja2V0fT57Y2hpbGRyZW59PC9jb250ZXh0LlByb3ZpZGVyPlxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgdHlwZSB7IFN0cmVzcywgQWN0aW9uRGF0YSB9IGZyb20gJ34vc3RyZXNzTGV2ZWwnXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgREVGQVVMVF9TVFJFU1NfTEVWRUwsIFN0cmVzc0xldmVsIH0gZnJvbSAnfi9zdHJlc3NMZXZlbCdcbmltcG9ydCB7IHVzZVNvY2tldCB9IGZyb20gJ34vY29udGV4dCdcbmltcG9ydCB7IExpbmssIHVzZUNhdGNoIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VDbGFzc2VzIH0gZnJvbSAnfi9ob29rcydcbmltcG9ydCB7IGNsYXNzRnJvbVF1YWxpdHkgfSBmcm9tICd+L3V0aWxzJ1xuaW1wb3J0IFN0cmVzc09NZXRlciBmcm9tICd+L2NvbXBvbmVudHMvc3RyZXNzLW8tbWV0ZXInXG5pbXBvcnQgQWRkU3RyZXNzTGV2ZWwgZnJvbSAnfi9jb21wb25lbnRzL2FkZC1zdHJlc3MtbGV2ZWwnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEFycmF5PFQ+IHtcbiAgICBbaW5kZXg6IG51bWJlcl06IFRcbiAgICBmaW5kUmlnaHQoZm46ICh2OiBUKSA9PiBib29sZWFuKTogVCB8IG51bGxcbiAgfVxufVxuXG5BcnJheS5wcm90b3R5cGUuZmluZFJpZ2h0ID0gZnVuY3Rpb24gZmluZFJpZ2h0KGZuOiAodjogdW5rbm93bikgPT4gYm9vbGVhbikge1xuICBmb3IgKGxldCBpID0gdGhpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpc1tpXVxuICAgIGlmIChmbih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3Qgc29ja2V0ID0gdXNlU29ja2V0KClcbiAgY29uc3QgW3N0cmVzc0xldmVscywgc2V0U3RyZXNzTGV2ZWxzXSA9IHVzZVN0YXRlPFN0cmVzc1tdIHwgdW5kZWZpbmVkPigpXG5cbiAgY29uc3QgW2N1cnJlbnRTdHJlc3NMZXZlbCwgc2V0Q3VycmVudFN0cmVzc0xldmVsXSA9IHVzZVN0YXRlPFN0cmVzcz4oXG4gICAgU3RyZXNzTGV2ZWwoREVGQVVMVF9TVFJFU1NfTEVWRUwpLFxuICApXG5cbiAgY29uc3QgW2FjdGlvbkRhdGEsIHNldEFjdGlvbkRhdGFdID0gdXNlU3RhdGU8QWN0aW9uRGF0YSB8IHVuZGVmaW5lZD4oKVxuICBjb25zdCBbc2hvd0FkZEZvcm0sIHNldFNob3dBZGRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHVwZGF0ZVN0cmVzc0xldmVsID0gKFt2YWx1ZV06IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgbmV3U3RyZXNzTGV2ZWwgPVxuICAgICAgdmFsdWUgPCBjdXJyZW50U3RyZXNzTGV2ZWwubGV2ZWxcbiAgICAgICAgPyBzdHJlc3NMZXZlbHM/LmZpbmRSaWdodCgoc2wpID0+IHNsLmxldmVsIDw9IHZhbHVlKVxuICAgICAgICA6IHN0cmVzc0xldmVscz8uZmluZCgoc2wpID0+IHNsLmxldmVsID49IHZhbHVlKVxuICAgIG5ld1N0cmVzc0xldmVsICYmIHNldEN1cnJlbnRTdHJlc3NMZXZlbChuZXdTdHJlc3NMZXZlbClcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSB1c2VDbGFzc2VzKFxuICAgICdjb250YWluZXInLFxuICAgIGNsYXNzRnJvbVF1YWxpdHkoY3VycmVudFN0cmVzc0xldmVsLnF1YWxpdHksICdiZycpLFxuICApXG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGE6IFN0cmVzc1tdKSA9PiB7XG4gICAgICBzZXRTaG93QWRkRm9ybShmYWxzZSlcbiAgICAgIHNldFN0cmVzc0xldmVscyhkYXRhKVxuICAgICAgc2V0Q3VycmVudFN0cmVzc0xldmVsKFxuICAgICAgICBkYXRhLmZpbmQoKHNsKSA9PiBzbC5pc0N1cnJlbnQpID8/IFN0cmVzc0xldmVsKERFRkFVTFRfU1RSRVNTX0xFVkVMKSxcbiAgICAgIClcbiAgICB9LFxuICAgIFtzZXRDdXJyZW50U3RyZXNzTGV2ZWxdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlTm90aWZpY2F0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGE6IEFjdGlvbkRhdGEpID0+IHtcbiAgICAgIHNldEFjdGlvbkRhdGEoZGF0YSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0QWN0aW9uRGF0YSh1bmRlZmluZWQpLCAzMDAwKVxuICAgIH0sXG4gICAgW3NldEFjdGlvbkRhdGFdLFxuICApXG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdHJlc3NMZXZlbClcbiAgICBzb2NrZXQgJiYgc29ja2V0LmVtaXQoJ2RlbGV0ZS1zdHJlc3MtbGV2ZWwnLCBjdXJyZW50U3RyZXNzTGV2ZWwpXG4gIH0sIFtzb2NrZXQsIGN1cnJlbnRTdHJlc3NMZXZlbF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNvY2tldCkgcmV0dXJuXG4gICAgc29ja2V0Lm9uKCdzdHJlc3MtdXBkYXRlJywgaGFuZGxlVXBkYXRlKVxuICAgIHNvY2tldC5vbignbm90aWZpY2F0aW9uJywgaGFuZGxlTm90aWZpY2F0aW9uKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQub2ZmKCdzdHJlc3MtdXBkYXRlJywgaGFuZGxlVXBkYXRlKVxuICAgICAgc29ja2V0Lm9mZignbm90aWZpY2F0aW9uJywgaGFuZGxlTm90aWZpY2F0aW9uKVxuICAgIH1cbiAgfSwgW3NvY2tldF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3Nlc30+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J3N0cmVzcy1vLW1ldGVyJz5cbiAgICAgICAge3Nob3dBZGRGb3JtID8gKFxuICAgICAgICAgIDxBZGRTdHJlc3NMZXZlbCBzb2NrZXQ9e3NvY2tldH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8U3RyZXNzT01ldGVyXG4gICAgICAgICAgICBjdXJyZW50U3RyZXNzTGV2ZWw9e2N1cnJlbnRTdHJlc3NMZXZlbH1cbiAgICAgICAgICAgIHVwZGF0ZVN0cmVzc0xldmVsPXt1cGRhdGVTdHJlc3NMZXZlbH1cbiAgICAgICAgICAgIHNvY2tldD17c29ja2V0fVxuICAgICAgICAgICAgYWN0aW9uRGF0YT17YWN0aW9uRGF0YX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nanVzdGlmeS1yaWdodCc+XG4gICAgICAgICAgeyFzaG93QWRkRm9ybSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgICB0aXRsZT0nRGVsZXRlIGxldmVsJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci1idXR0b24gYmctZGFuZ2VyJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEZWxldGUgbGV2ZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FkZEZvcm0oIXNob3dBZGRGb3JtKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLWJ1dHRvbiBiZy1ncmF5IG1yLWF1dG8nXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Nob3dBZGRGb3JtID8gJ0NhbmNlbCcgOiAnQWRkIG5ldyBsZXZlbCd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpXG5cbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwMSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGgxPk9oIG5vPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGgxPldob29wcyEgU29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gxPlxuICAgICAgPHA+XG4gICAgICAgIE9oIGRlYXIgbWUsIGFwcGFyZW50bHk6IHtlcnJvci5tZXNzYWdlfS4uLiBTaGFsbCB3ZXsnICd9XG4gICAgICAgIDxMaW5rIHRvPScvJz5UcnkgYWdhaW4/PC9MaW5rPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiZXhwb3J0IGNvbnN0IE1JTl9TVFJFU1NfTEVWRUwgPSAwXG5leHBvcnQgY29uc3QgTUFYX1NUUkVTU19MRVZFTCA9IDEwMFxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1RSRVNTX0xFVkVMID0gMTBcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NUUkVTU19TVEVQID0gNVxuXG5jb25zdCBzdHJlc3NMZXZlbERlc2NyaXB0aW9ucyA9IFtcbiAgJ0xpdGVyYWxseSBzcXVpcnRpbmcnLFxuICAnQ3Jvb2t1cyBraXNzZXMnLFxuICAnUGljbmljIHdpdGggTWFzdGVyJyxcbiAgJ0N1ZGRsZWQgdXAsIHdpdGggYSBwaWxsb3cgb24gaGVhZCcsXG4gICdEb29yZGFzaCBjYW1lIGVhcmxpZXIgdGhhbiBleHBlY3RlZCcsXG4gICdOaWNlIHdhcm0gc2hvd2VyJyxcbiAgJ1ByZXR0eSwgcmVsYXhlZCwgYW5kIGN1dGUnLFxuICAnTm90IHRoYXQgc3RyZXNzZWQnLFxuICAnU2xpZ2h0bHkgdGVuc2UnLFxuICAnU2Vhc29uIGZpbmFsZSBvZiBQcm9qZWN0IFJ1bndheScsXG4gICdBIGJpdCBzYWQgYW5kIHByZW9jY3VwaWVkJyxcbiAgJ1RhaWwgaXMgdGh3b21waW5nIGEgYml0JyxcbiAgJ1doaXNrZXJzIGFyZSBhIGxpdHRsZSB0d2l0Y2h5JyxcbiAgJ1doaXNrZXJzIGFyZSBwdWxsZWQgYSBiaXQgdG9vIGhhcmQnLFxuICAnQml0Y29pbiBhbGwtdGltZSBsb3cnLFxuICAnUGVyaW9kIHRpbWUgdGltZXMnLFxuICAnSG9tZTIgc29sZCBvdXQsIElVIGJhc2tldGJhbGwgbmlnaHQsIE5ldyBKZXJzZXkgSGlsdG9uLUhvbm9ycyBEaWFtb25kIE1lbWJlciBzb3Jvcml0eSBtb20geWVsbGluZyBhYm91dCB0aGUgaG9sZSBpbiBoZXIgd2FsbCB0aGF0IGhlciBodXNiYW5kIHB1bmNoZWQnLFxuICBcIk1hc3RlcidzIHdpZmkgd2VudCBvdXRcIixcbiAgJ1RoZSBwb3dlciBpcyBvdXQsIGl0IGlzIHN0b3JtaW5nLCBhbmQgdGhlIGhlYXQgaXMgbm90IHdvcmtpbmcnLFxuICAnVGhlIE5URiB3YWxsZXQgdHJhbnNmZXIgaXMgbm90IHdvcmtpbmcnLFxuICAnSGF2aW5nIENvdmlkIGFuZCBhIGZsYXQtdGlyZScsXG5dXG5cbmZ1bmN0aW9uIGdldERlc2NyaXB0aW9uRm9yU3RyZXNzTGV2ZWwobGV2ZWw6IG51bWJlcikge1xuICByZXR1cm4gc3RyZXNzTGV2ZWxEZXNjcmlwdGlvbnNbTWF0aC5mbG9vcihsZXZlbCAvIDUpXSB8fCAnTm90IHN0cmVzc2VkJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RyZXNzTGV2ZWwobGV2ZWw6IG51bWJlcik6IFN0cmVzcyB7XG4gIHJldHVybiB7XG4gICAgbGV2ZWwsXG4gICAgZGVzY3JpcHRpb246IGdldERlc2NyaXB0aW9uRm9yU3RyZXNzTGV2ZWwobGV2ZWwpLFxuICAgIHF1YWxpdHk6IGxldmVsIDwgMzMgPyAnZ29vZCcgOiBsZXZlbCA8IDY2ID8gJ3dhcm5pbmcnIDogJ2RhbmdlcicsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3RyZXNzID0ge1xuICBsZXZlbDogbnVtYmVyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgcXVhbGl0eTogJ2dvb2QnIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcidcbiAgaXNDdXJyZW50PzogYm9vbGVhblxuICBpZD86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25EYXRhID0ge1xuICB0eXBlOiAnc3RyZXNzLXVwZGF0ZScgfCAnbm90aWZpY2F0aW9uJ1xuICBtZXNzYWdlPzogc3RyaW5nXG4gIHF1YWxpdHk6ICdnb29kJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInXG59XG4iLCAiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xhc3NlcyguLi5jbGFzc2VzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiBjbGFzc2VzLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyksIGNsYXNzZXMpXG59XG4iLCAiZXhwb3J0IGNvbnN0IGNsYXNzRnJvbVF1YWxpdHkgPSAocXVhbGl0eTogc3RyaW5nLCBwcmVmaXg6ICdiZycgfCAnZmcnKSA9PlxuICBwcmVmaXggKyAnLScgKyBxdWFsaXR5XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCB0eXBlIHsgU3RyZXNzLCBBY3Rpb25EYXRhIH0gZnJvbSAnfi9zdHJlc3NMZXZlbCdcbmltcG9ydCB0eXBlIHsgU29ja2V0IH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbmltcG9ydCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTUFYX1NUUkVTU19MRVZFTCwgTUlOX1NUUkVTU19MRVZFTCB9IGZyb20gJ34vc3RyZXNzTGV2ZWwnXG5pbXBvcnQgeyB1c2VDbGFzc2VzIH0gZnJvbSAnfi9ob29rcydcbmltcG9ydCAqIGFzIFNsaWRlciBmcm9tICdAcmFkaXgtdWkvcmVhY3Qtc2xpZGVyJ1xuaW1wb3J0IHsgY2xhc3NGcm9tUXVhbGl0eSB9IGZyb20gJ34vdXRpbHMnXG5cbnR5cGUgU3RyZXNzT01ldGVyUHJvcHMgPSB7XG4gIGN1cnJlbnRTdHJlc3NMZXZlbDogU3RyZXNzXG4gIHVwZGF0ZVN0cmVzc0xldmVsOiAodmFsdWU6IG51bWJlcltdKSA9PiB2b2lkXG4gIHNvY2tldDogU29ja2V0IHwgdW5kZWZpbmVkXG4gIGFjdGlvbkRhdGE6IEFjdGlvbkRhdGEgfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RyZXNzT01ldGVyKHtcbiAgY3VycmVudFN0cmVzc0xldmVsLFxuICB1cGRhdGVTdHJlc3NMZXZlbCxcbiAgc29ja2V0LFxuICBhY3Rpb25EYXRhLFxufTogU3RyZXNzT01ldGVyUHJvcHMpIHtcbiAgY29uc3QgZGVzY3JpcHRpb25DbGFzc2VzID0gdXNlQ2xhc3NlcyhcbiAgICAnc3RyZXNzLWhlYWRlci1kZXNjcmlwdGlvbicsXG4gICAgY2xhc3NGcm9tUXVhbGl0eShjdXJyZW50U3RyZXNzTGV2ZWwucXVhbGl0eSwgJ2ZnJyksXG4gIClcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc29ja2V0ICYmIHNvY2tldC5lbWl0KCdzdHJlc3MtdXBkYXRlJywgY3VycmVudFN0cmVzc0xldmVsKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3N0cmVzcy1vLW1ldGVyLWhlYWRlcic+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3NpdGUtaGVhZGluZyc+S2lwcHVtJmFwb3M7cyBTdHJlc3Mtby1NZXRlcjwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nc2l0ZS1zdWJoZWFkaW5nJz5Ib3cgc3RyZXNzZWQgaXMgbXkgS2lwcHVtcz88L3A+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLWNvbnRhaW5lcic+XG4gICAgICAgIDxTbGlkZXIuUm9vdFxuICAgICAgICAgIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyJ1xuICAgICAgICAgIG1pbj17TUlOX1NUUkVTU19MRVZFTH1cbiAgICAgICAgICBtYXg9e01BWF9TVFJFU1NfTEVWRUx9XG4gICAgICAgICAgdmFsdWU9e1tjdXJyZW50U3RyZXNzTGV2ZWw/LmxldmVsXX1cbiAgICAgICAgICBvblZhbHVlQ2hhbmdlPXt1cGRhdGVTdHJlc3NMZXZlbH1cbiAgICAgICAgPlxuICAgICAgICAgIDxTbGlkZXIuVHJhY2sgY2xhc3NOYW1lPSdzdHJlc3MtbWV0ZXItdHJhY2snPlxuICAgICAgICAgICAgPFNsaWRlci5SYW5nZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzdHJlc3MtbWV0ZXItcmFuZ2UgJHtjbGFzc0Zyb21RdWFsaXR5KFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJlc3NMZXZlbC5xdWFsaXR5LFxuICAgICAgICAgICAgICAgICdiZycsXG4gICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TbGlkZXIuVHJhY2s+XG4gICAgICAgICAgPFNsaWRlci5UaHVtYiBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci10aHVtYic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLXRodW1iLXBlcmNlbnQnPlxuICAgICAgICAgICAgICB7Y3VycmVudFN0cmVzc0xldmVsPy5sZXZlbH0lXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NsaWRlci5UaHVtYj5cbiAgICAgICAgPC9TbGlkZXIuUm9vdD5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3N0cmVzcy1oZWFkZXInPlxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9J3N0cmVzcy1oZWFkZXItc21hbGwnPkN1cnJlbnQgc3RyZXNzIGxldmVsOjwvc21hbGw+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17ZGVzY3JpcHRpb25DbGFzc2VzfT5cbiAgICAgICAgICAgIHtjdXJyZW50U3RyZXNzTGV2ZWw/LmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J3N0cmVzcy1mb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RyZXNzLWZvcm0tYnV0dG9uJz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdzdHJlc3MtbWV0ZXItYnV0dG9uIGJnLXByaW1hcnknIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgIExvY2sgaW4gc3RyZXNzIGxldmVsXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhID8gKFxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHN0cmVzcy1mb3JtLW1lc3NhZ2UgJHtjbGFzc0Zyb21RdWFsaXR5KFxuICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YS5xdWFsaXR5LFxuICAgICAgICAgICAgICAgICAgJ2ZnJyxcbiAgICAgICAgICAgICAgICApfWB9XG4gICAgICAgICAgICAgICAgcm9sZT0nYWxlcnQnXG4gICAgICAgICAgICAgICAgaWQ9J3NhdmUtbWVzc2FnZSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5tZXNzYWdlfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBGb3JtRXZlbnQsIEJhc2VTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBTb2NrZXQgfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IHsgREVGQVVMVF9TVFJFU1NfTEVWRUwsIFN0cmVzcyB9IGZyb20gJ34vc3RyZXNzTGV2ZWwnXG5pbXBvcnQgeyBNQVhfU1RSRVNTX0xFVkVMLCBNSU5fU1RSRVNTX0xFVkVMIH0gZnJvbSAnfi9zdHJlc3NMZXZlbCdcbmltcG9ydCAqIGFzIFNsaWRlciBmcm9tICdAcmFkaXgtdWkvcmVhY3Qtc2xpZGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNsYXNzRnJvbVF1YWxpdHkgfSBmcm9tICd+L3V0aWxzJ1xuXG50eXBlIEFkZFN0cmVzc0xldmVsUHJvcHMgPSB7XG4gIHNvY2tldDogU29ja2V0IHwgdW5kZWZpbmVkXG59XG5cbmNvbnN0IG5ld1N0cmVzc0xldmVsID0gKGxldmVsOiBudW1iZXIsIGRlc2NyaXB0aW9uOiBzdHJpbmcpOiBTdHJlc3MgPT4gKHtcbiAgbGV2ZWwsXG4gIGRlc2NyaXB0aW9uLFxuICBxdWFsaXR5OiBsZXZlbCA8IDMzID8gJ2dvb2QnIDogbGV2ZWwgPCA2NiA/ICd3YXJuaW5nJyA6ICdkYW5nZXInLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkU3RyZXNzTGV2ZWwoeyBzb2NrZXQgfTogQWRkU3RyZXNzTGV2ZWxQcm9wcykge1xuICBjb25zdCBbc3RyZXNzTGV2ZWwsIHNldFN0cmVzc0xldmVsXSA9IHVzZVN0YXRlPFN0cmVzcz4oXG4gICAgbmV3U3RyZXNzTGV2ZWwoREVGQVVMVF9TVFJFU1NfTEVWRUwsICcnKSxcbiAgKVxuXG4gIGNvbnN0IHVwZGF0ZURlc2MgPSAoZTogQmFzZVN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgc2V0U3RyZXNzTGV2ZWwoKHNsKSA9PiBuZXdTdHJlc3NMZXZlbChzbC5sZXZlbCwgZS50YXJnZXQudmFsdWUpKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlTGV2ZWwgPSAoW3ZhbHVlXTogbnVtYmVyW10pID0+IHtcbiAgICBzZXRTdHJlc3NMZXZlbCgoc2wpID0+IG5ld1N0cmVzc0xldmVsKHZhbHVlLCBzbC5kZXNjcmlwdGlvbikpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coc3RyZXNzTGV2ZWwpXG4gICAgc29ja2V0ICYmIHNvY2tldC5lbWl0KCduZXctc3RyZXNzLWxldmVsJywgc3RyZXNzTGV2ZWwpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0xJz5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdzdHJlc3Mtby1tZXRlci1oZWFkZXInPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdzaXRlLWhlYWRpbmcnPkFkZCBzdHJlc3MgbGV2ZWw8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3NpdGUtc3ViaGVhZGluZyc+Q3JlYXRlIGEgbmV3IGxldmVsIG9mIHN0cmVzczwvcD5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSdhZGQtZm9ybScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdzbC1kZXNjcmlwdGlvbicgY2xhc3NOYW1lPSdsYWJlbGVkLWlucHV0Jz5cbiAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZURlc2N9XG4gICAgICAgICAgICB2YWx1ZT17c3RyZXNzTGV2ZWwuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0J1xuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nc2wtaW50ZW5zaXR5JyBjbGFzc05hbWU9J2xhYmVsZWQtaW5wdXQnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWItYmFzZSc+SW50ZW5zaXR5PC9wPlxuICAgICAgICAgIDxTbGlkZXIuUm9vdFxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzdHJlc3MtbWV0ZXInXG4gICAgICAgICAgICBtaW49e01JTl9TVFJFU1NfTEVWRUx9XG4gICAgICAgICAgICBtYXg9e01BWF9TVFJFU1NfTEVWRUx9XG4gICAgICAgICAgICB2YWx1ZT17W3N0cmVzc0xldmVsPy5sZXZlbF19XG4gICAgICAgICAgICBzdGVwPXsxfVxuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17dXBkYXRlTGV2ZWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNsaWRlci5UcmFjayBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci10cmFjayc+XG4gICAgICAgICAgICAgIDxTbGlkZXIuUmFuZ2VcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzdHJlc3MtbWV0ZXItcmFuZ2UgJHtjbGFzc0Zyb21RdWFsaXR5KFxuICAgICAgICAgICAgICAgICAgc3RyZXNzTGV2ZWwucXVhbGl0eSxcbiAgICAgICAgICAgICAgICAgICdiZycsXG4gICAgICAgICAgICAgICAgKX1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TbGlkZXIuVHJhY2s+XG4gICAgICAgICAgICA8U2xpZGVyLlRodW1iIGNsYXNzTmFtZT0nc3RyZXNzLW1ldGVyLXRodW1iJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci10aHVtYi1wZXJjZW50Jz5cbiAgICAgICAgICAgICAgICB7c3RyZXNzTGV2ZWw/LmxldmVsfSVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NsaWRlci5UaHVtYj5cbiAgICAgICAgICA8L1NsaWRlci5Sb290PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHRpdGxlPSdTYXZlJyBjbGFzc05hbWU9J3N0cmVzcy1tZXRlci1idXR0b24gYmctd2FybmluZyBtdC1zbSc+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG9CQUFvQjtBQUFBLE1BQ2pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUM1SWxDO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNwRDFDO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ2hDakM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFNBQVM7QUFDYixRQUFJLFNBQVM7QUFDYixRQUFJLFdBQVc7QUFJZixXQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztBQUN4QyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBR25DLFdBQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO0FBQ3hDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFHbkMsV0FBTyxLQUFLLFVBQVUsUUFBUSxTQUFVLEdBQUc7QUFDMUMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ25DckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStCO0FBQy9CLG1CQUE0QjtBQUdiLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFHbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBQ2xCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU9PO0FBR1Asb0JBQW1COzs7Ozs7QUFFbkIsb0JBQW9DOzs7QUNacEM7QUFFQSxtQkFBMEM7QUFPMUMsSUFBTSxVQUFVLGdDQUFrQztBQUUzQyxxQkFBcUI7QUFDMUIsU0FBTyw2QkFBVztBQUFBO0FBR2Isd0JBQXdCLEVBQUUsUUFBUSxZQUEyQjtBQUNsRSxTQUFPLG9DQUFDLFFBQVEsVUFBVDtBQUFBLElBQWtCLE9BQU87QUFBQSxLQUFTO0FBQUE7OztBRERwQyxJQUFNLE9BQXFCLE1BQU07QUFDdEMsU0FBTyxFQUFFLE9BQU87QUFBQTtBQUdYLElBQU0sUUFBdUIsTUFBTTtBQUFBLEVBQ3hDO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUE7QUFBQSxFQUVSO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxFQUVSO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxFQUVSO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxFQUVSLEVBQUUsS0FBSyxZQUFZLE1BQU07QUFBQTtBQUdaLGVBQWU7QUFDNUIsUUFBTSxDQUFDLFFBQVEsYUFBYTtBQUU1QiwrQkFBVSxNQUFNO0FBQ2QsVUFBTSxZQUFZO0FBQ2xCLGNBQVU7QUFDVixXQUFPLE1BQU07QUFDWCxnQkFBVTtBQUFBO0FBQUEsS0FFWDtBQUVILCtCQUFVLE1BQU07QUFDZCxRQUFJLENBQUM7QUFBUTtBQUNiLFdBQU8sR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTO0FBQ2xDLGNBQVEsSUFBSTtBQUFBO0FBQUEsS0FFYixDQUFDO0FBRUosU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVCxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLE1BQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQVcsU0FBUTtBQUFBLE1BQzlCLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsUUFFRixvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsZ0JBQUQ7QUFBQSxJQUFnQjtBQUFBLEtBQ2Qsb0NBQUMsc0JBQUQsUUFFRixvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQ0Esb0NBQUMsMEJBQUQ7QUFBQTs7O0FFNUVSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsb0JBQTRCOzs7QUNGNUI7QUFBTyxJQUFNLG1CQUFtQjtBQUN6QixJQUFNLG1CQUFtQjtBQUN6QixJQUFNLHVCQUF1QjtBQUdwQyxJQUFNLDBCQUEwQjtBQUFBLEVBQzlCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQTtBQUdGLHNDQUFzQyxPQUFlO0FBQ25ELFNBQU8sd0JBQXdCLEtBQUssTUFBTSxRQUFRLE9BQU87QUFBQTtBQUdwRCxxQkFBcUIsT0FBdUI7QUFDakQsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBLGFBQWEsNkJBQTZCO0FBQUEsSUFDMUMsU0FBUyxRQUFRLEtBQUssU0FBUyxRQUFRLEtBQUssWUFBWTtBQUFBO0FBQUE7OztBRGhDNUQsb0JBQStCO0FBQy9CLG9CQUFvQzs7O0FFTnBDO0FBQUEsb0JBQXdCO0FBRWpCLHVCQUF1QixTQUFtQjtBQUMvQyxTQUFPLDJCQUFRLE1BQU0sUUFBUSxPQUFPLFNBQVMsS0FBSyxNQUFNO0FBQUE7OztBQ0gxRDtBQUFPLElBQU0sbUJBQW1CLENBQUMsU0FBaUIsV0FDaEQsU0FBUyxNQUFNOzs7QUNEakI7QUFNQSxhQUF3QjtBQVVULHNCQUFzQjtBQUFBLEVBQ25DO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsR0FDb0I7QUFDcEIsUUFBTSxxQkFBcUIsV0FDekIsNkJBQ0EsaUJBQWlCLG1CQUFtQixTQUFTO0FBRy9DLFFBQU0sZUFBZSxDQUFDLE1BQWlCO0FBQ3JDLE1BQUU7QUFDRixjQUFVLE9BQU8sS0FBSyxpQkFBaUI7QUFBQTtBQUd6QyxTQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWUsNEJBQzdCLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFrQixpQ0FFakMsb0NBQUMsV0FBRDtBQUFBLElBQVMsV0FBVTtBQUFBLEtBQ2pCLG9DQUFRLGFBQVI7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLE9BQU8sQ0FBQyx5REFBb0I7QUFBQSxJQUM1QixlQUFlO0FBQUEsS0FFZixvQ0FBUSxjQUFSO0FBQUEsSUFBYyxXQUFVO0FBQUEsS0FDdEIsb0NBQVEsY0FBUjtBQUFBLElBQ0UsV0FBVyxzQkFBc0IsaUJBQy9CLG1CQUFtQixTQUNuQjtBQUFBLE9BSU4sb0NBQVEsY0FBUjtBQUFBLElBQWMsV0FBVTtBQUFBLEtBQ3RCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNaLHlEQUFvQixPQUFNLFFBSWpDLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUNoQixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FBc0IsMEJBQ3ZDLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVc7QUFBQSxLQUNaLHlEQUFvQixlQUd6QixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsSUFBYyxVQUFVO0FBQUEsS0FDdEMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLElBQWlDLE1BQUs7QUFBQSxLQUFTLHlCQUdoRSxhQUNDLG9DQUFDLEtBQUQ7QUFBQSxJQUNFLFdBQVcsdUJBQXVCLGlCQUNoQyxXQUFXLFNBQ1g7QUFBQSxJQUVGLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxLQUVGLHlDQUFZLFdBRWI7QUFBQTs7O0FDbEZoQjtBQUlBLGNBQXdCO0FBQ3hCLG9CQUF5QjtBQU96QixJQUFNLGlCQUFpQixDQUFDLE9BQWUsZ0JBQWlDO0FBQUEsRUFDdEU7QUFBQSxFQUNBO0FBQUEsRUFDQSxTQUFTLFFBQVEsS0FBSyxTQUFTLFFBQVEsS0FBSyxZQUFZO0FBQUE7QUFHM0Msd0JBQXdCLEVBQUUsVUFBK0I7QUFDdEUsUUFBTSxDQUFDLGFBQWEsa0JBQWtCLDRCQUNwQyxlQUFlLHNCQUFzQjtBQUd2QyxRQUFNLGFBQWEsQ0FBQyxNQUEwQjtBQUM1QyxtQkFBZSxDQUFDLE9BQU8sZUFBZSxHQUFHLE9BQU8sRUFBRSxPQUFPO0FBQUE7QUFHM0QsUUFBTSxjQUFjLENBQUMsQ0FBQyxXQUFxQjtBQUN6QyxtQkFBZSxDQUFDLE9BQU8sZUFBZSxPQUFPLEdBQUc7QUFBQTtBQUdsRCxRQUFNLGVBQWUsQ0FBQyxNQUFpQjtBQUNyQyxNQUFFO0FBQ0YsWUFBUSxJQUFJO0FBQ1osY0FBVSxPQUFPLEtBQUssb0JBQW9CO0FBQUE7QUFHNUMsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FDaEIsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWUscUJBQzdCLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFrQixrQ0FFakMsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQVcsVUFBVTtBQUFBLEtBQ25DLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFpQixXQUFVO0FBQUEsS0FBZ0IsZUFFeEQsb0NBQUMsU0FBRDtBQUFBLElBQ0UsVUFBVTtBQUFBLElBQ1YsT0FBTyxZQUFZO0FBQUEsSUFDbkIsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLE9BR1Qsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQWUsV0FBVTtBQUFBLEtBQ3RDLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFVLGNBQ3ZCLG9DQUFRLGNBQVI7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEtBQUs7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLE9BQU8sQ0FBQywyQ0FBYTtBQUFBLElBQ3JCLE1BQU07QUFBQSxJQUNOLGVBQWU7QUFBQSxLQUVmLG9DQUFRLGVBQVI7QUFBQSxJQUFjLFdBQVU7QUFBQSxLQUN0QixvQ0FBUSxlQUFSO0FBQUEsSUFDRSxXQUFXLHNCQUFzQixpQkFDL0IsWUFBWSxTQUNaO0FBQUEsT0FJTixvQ0FBUSxlQUFSO0FBQUEsSUFBYyxXQUFVO0FBQUEsS0FDdEIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osMkNBQWEsT0FBTSxTQUs1QixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FBdUM7QUFBQTs7O0FMM0Q5RSxNQUFNLFVBQVUsWUFBWSxtQkFBbUIsSUFBNkI7QUFDMUUsV0FBUyxJQUFJLEtBQUssU0FBUyxHQUFHLEtBQUssR0FBRyxLQUFLO0FBQ3pDLFVBQU0sUUFBUSxLQUFLO0FBQ25CLFFBQUksR0FBRyxRQUFRO0FBQ2IsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUtFLGlCQUFpQjtBQUM5QixRQUFNLFNBQVM7QUFDZixRQUFNLENBQUMsY0FBYyxtQkFBbUI7QUFFeEMsUUFBTSxDQUFDLG9CQUFvQix5QkFBeUIsNEJBQ2xELFlBQVk7QUFHZCxRQUFNLENBQUMsWUFBWSxpQkFBaUI7QUFDcEMsUUFBTSxDQUFDLGFBQWEsa0JBQWtCLDRCQUFTO0FBRS9DLFFBQU0sb0JBQW9CLENBQUMsQ0FBQyxXQUFxQjtBQUMvQyxVQUFNLGtCQUNKLFFBQVEsbUJBQW1CLFFBQ3ZCLDZDQUFjLFVBQVUsQ0FBQyxPQUFPLEdBQUcsU0FBUyxTQUM1Qyw2Q0FBYyxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVM7QUFDN0MsdUJBQWtCLHNCQUFzQjtBQUFBO0FBRzFDLFFBQU0sbUJBQW1CLFdBQ3ZCLGFBQ0EsaUJBQWlCLG1CQUFtQixTQUFTO0FBRy9DLFFBQU0sZUFBZSwrQkFDbkIsQ0FBQyxTQUFtQjtBQUNsQixtQkFBZTtBQUNmLG9CQUFnQjtBQUNoQiwwQkFDRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEdBQUcsY0FBYyxZQUFZO0FBQUEsS0FHbkQsQ0FBQztBQUdILFFBQU0scUJBQXFCLCtCQUN6QixDQUFDLFNBQXFCO0FBQ3BCLGtCQUFjO0FBQ2QsZUFBVyxNQUFNLGNBQWMsU0FBWTtBQUFBLEtBRTdDLENBQUM7QUFHSCxRQUFNLGVBQWUsK0JBQVksTUFBTTtBQUNyQyxZQUFRLElBQUk7QUFDWixjQUFVLE9BQU8sS0FBSyx1QkFBdUI7QUFBQSxLQUM1QyxDQUFDLFFBQVE7QUFFWiwrQkFBVSxNQUFNO0FBQ2QsUUFBSSxDQUFDO0FBQVE7QUFDYixXQUFPLEdBQUcsaUJBQWlCO0FBQzNCLFdBQU8sR0FBRyxnQkFBZ0I7QUFDMUIsV0FBTyxNQUFNO0FBQ1gsYUFBTyxJQUFJLGlCQUFpQjtBQUM1QixhQUFPLElBQUksZ0JBQWdCO0FBQUE7QUFBQSxLQUU1QixDQUFDO0FBRUosU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFXO0FBQUEsS0FDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDYixjQUNDLG9DQUFDLGdCQUFEO0FBQUEsSUFBZ0I7QUFBQSxPQUVoQixvQ0FBQyxjQUFEO0FBQUEsSUFDRTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLE1BR0osb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osQ0FBQyxlQUNBLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULE9BQU07QUFBQSxJQUNOLFdBQVU7QUFBQSxLQUNYLGlCQUlILG9DQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFNBQVMsTUFBTSxlQUFlLENBQUM7QUFBQSxJQUMvQixXQUFVO0FBQUEsS0FFVCxjQUFjLFdBQVc7QUFBQTtBQVEvQix5QkFBeUI7QUFDOUIsUUFBTSxTQUFTO0FBRWYsTUFBSSxPQUFPLFdBQVcsS0FBSztBQUN6QixXQUNFLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLFdBQVU7QUFBQSxPQUNiLG9DQUFDLE1BQUQsTUFBSTtBQUFBO0FBQUE7QUFNTCx1QkFBdUIsRUFBRSxTQUEyQjtBQUN6RCxVQUFRLE1BQU07QUFFZCxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQsTUFBSSxpQ0FDSixvQ0FBQyxLQUFELE1BQUcsNEJBQ3dCLE1BQU0sU0FBUSxnQkFBYSxLQUNwRCxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQUk7QUFBQTs7O0FKM0lyQixvQkFBa0M7QUFDM0IsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGdCQUFnQjtBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
