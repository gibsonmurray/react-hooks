var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __moduleCache = /* @__PURE__ */ new WeakMap;
var __toCommonJS = (from) => {
  var entry = __moduleCache.get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function")
    __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    }));
  __moduleCache.set(from, entry);
  return entry;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS((exports2, module2) => {
  if (true) {
    (function() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
      }
      var ReactVersion = "18.3.1";
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var ReactCurrentDispatcher = {
        current: null
      };
      var ReactCurrentBatchConfig = {
        transition: null
      };
      var ReactCurrentActQueue = {
        current: null,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false
      };
      var ReactCurrentOwner = {
        current: null
      };
      var ReactDebugCurrentFrame = {};
      var currentExtraStackFrame = null;
      function setExtraStackFrame(stack) {
        {
          currentExtraStackFrame = stack;
        }
      }
      {
        ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
          {
            currentExtraStackFrame = stack;
          }
        };
        ReactDebugCurrentFrame.getCurrentStack = null;
        ReactDebugCurrentFrame.getStackAddendum = function() {
          var stack = "";
          if (currentExtraStackFrame) {
            stack += currentExtraStackFrame;
          }
          var impl = ReactDebugCurrentFrame.getCurrentStack;
          if (impl) {
            stack += impl() || "";
          }
          return stack;
        };
      }
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var ReactSharedInternals = {
        ReactCurrentDispatcher,
        ReactCurrentBatchConfig,
        ReactCurrentOwner
      };
      {
        ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
        ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
      }
      function warn(format) {
        {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;_key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
      }
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;_key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var didWarnStateUpdateForUnmountedComponent = {};
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
          var warningKey = componentName + "." + callerName;
          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }
          error("Can't call %s on a component that is not yet mounted. " + "This is a no-op, but it might indicate a bug in your application. " + "Instead, assign to `this.state` directly or define a `state = {};` " + "class property with the desired state in the %s component.", callerName, componentName);
          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }
      var ReactNoopUpdateQueue = {
        isMounted: function(publicInstance) {
          return false;
        },
        enqueueForceUpdate: function(publicInstance, callback, callerName) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, "setState");
        }
      };
      var assign = Object.assign;
      var emptyObject = {};
      {
        Object.freeze(emptyObject);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
          throw new Error("setState(...): takes an object of state variables to update or a " + "function which returns an object of state variables.");
        }
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      {
        var deprecatedAPIs = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in " + "componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see " + "https://github.com/facebook/react/issues/3236)."]
        };
        var defineDeprecationWarning = function(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function() {
              warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
              return;
            }
          });
        };
        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }
      function ComponentDummy() {
      }
      ComponentDummy.prototype = Component.prototype;
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy;
      pureComponentPrototype.constructor = PureComponent;
      assign(pureComponentPrototype, Component.prototype);
      pureComponentPrototype.isPureReactComponent = true;
      function createRef() {
        var refObject = {
          current: null
        };
        {
          Object.seal(refObject);
        }
        return refObject;
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s." + " This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error("Received an unexpected object in getComponentNameFromType(). " + "This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
          {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error("%s: `key` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://reactjs.org/link/special-props)", displayName);
            }
          }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
          {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error("%s: `ref` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://reactjs.org/link/special-props)", displayName);
            }
          }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }
      function warnIfStringRefCannotBeAutoConverted(config) {
        {
          if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". ' + "Support for string refs will be removed in a future major release. " + "This case cannot be automatically converted to an arrow function. " + "We ask you to manually fix this case by using useRef() or createRef() instead. " + "Learn more about using refs safely here: " + "https://reactjs.org/link/strict-mode-string-ref", componentName, config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      var ReactElement = function(type, key, ref, self2, source, owner, props) {
        var element = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self2
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function createElement(type, config, children) {
        var propName;
        var props = {};
        var key = null;
        var ref = null;
        var self2 = null;
        var source = null;
        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
            {
              warnIfStringRefCannotBeAutoConverted(config);
            }
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          self2 = config.__self === undefined ? null : config.__self;
          source = config.__source === undefined ? null : config.__source;
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0;i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }
          props.children = childArray;
        }
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }
        {
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }
        return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
      }
      function cloneElement(element, config, children) {
        if (element === null || element === undefined) {
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        }
        var propName;
        var props = assign({}, element.props);
        var key = element.key;
        var ref = element.ref;
        var self2 = element._self;
        var source = element._source;
        var owner = element._owner;
        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          var defaultProps;
          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === undefined && defaultProps !== undefined) {
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        }
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0;i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self2, source, owner, props);
      }
      function isValidElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var SEPARATOR = ".";
      var SUBSEPARATOR = ":";
      function escape2(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          "=": "=0",
          ":": "=2"
        };
        var escapedString = key.replace(escapeRegex, function(match) {
          return escaperLookup[match];
        });
        return "$" + escapedString;
      }
      var didWarnAboutMaps = false;
      var userProvidedKeyEscapeRegex = /\/+/g;
      function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, "$&/");
      }
      function getElementKey(element, index) {
        if (typeof element === "object" && element !== null && element.key != null) {
          {
            checkKeyStringCoercion(element.key);
          }
          return escape2("" + element.key);
        }
        return index.toString(36);
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === "undefined" || type === "boolean") {
          children = null;
        }
        var invokeCallback = false;
        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }
          }
        }
        if (invokeCallback) {
          var _child = children;
          var mappedChild = callback(_child);
          var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
          if (isArray(mappedChild)) {
            var escapedChildKey = "";
            if (childKey != null) {
              escapedChildKey = escapeUserProvidedKey(childKey) + "/";
            }
            mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
              return c;
            });
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              {
                if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                  checkKeyStringCoercion(mappedChild.key);
                }
              }
              mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
            }
            array.push(mappedChild);
          }
          return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0;
        var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (isArray(children)) {
          for (var i = 0;i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          }
        } else {
          var iteratorFn = getIteratorFn(children);
          if (typeof iteratorFn === "function") {
            var iterableChildren = children;
            {
              if (iteratorFn === iterableChildren.entries) {
                if (!didWarnAboutMaps) {
                  warn("Using Maps as children is not supported. " + "Use an array of keyed ReactElements instead.");
                }
                didWarnAboutMaps = true;
              }
            }
            var iterator = iteratorFn.call(iterableChildren);
            var step;
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getElementKey(child, ii++);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else if (type === "object") {
            var childrenString = String(children);
            throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). " + "If you meant to render a collection of children, use an array " + "instead.");
          }
        }
        return subtreeCount;
      }
      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }
        var result = [];
        var count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      }
      function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
          forEachFunc.apply(this, arguments);
        }, forEachContext);
      }
      function toArray(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      }
      function onlyChild(children) {
        if (!isValidElement(children)) {
          throw new Error("React.Children.only expected to receive a single React element child.");
        }
        return children;
      }
      function createContext(defaultValue) {
        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        {
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context
          };
          Object.defineProperties(Consumer, {
            Provider: {
              get: function() {
                if (!hasWarnedAboutUsingConsumerProvider) {
                  hasWarnedAboutUsingConsumerProvider = true;
                  error("Rendering <Context.Consumer.Provider> is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Provider> instead?");
                }
                return context.Provider;
              },
              set: function(_Provider) {
                context.Provider = _Provider;
              }
            },
            _currentValue: {
              get: function() {
                return context._currentValue;
              },
              set: function(_currentValue) {
                context._currentValue = _currentValue;
              }
            },
            _currentValue2: {
              get: function() {
                return context._currentValue2;
              },
              set: function(_currentValue2) {
                context._currentValue2 = _currentValue2;
              }
            },
            _threadCount: {
              get: function() {
                return context._threadCount;
              },
              set: function(_threadCount) {
                context._threadCount = _threadCount;
              }
            },
            Consumer: {
              get: function() {
                if (!hasWarnedAboutUsingNestedContextConsumers) {
                  hasWarnedAboutUsingNestedContextConsumers = true;
                  error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Consumer> instead?");
                }
                return context.Consumer;
              }
            },
            displayName: {
              get: function() {
                return context.displayName;
              },
              set: function(displayName) {
                if (!hasWarnedAboutDisplayNameOnConsumer) {
                  warn("Setting `displayName` on Context.Consumer has no effect. " + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                  hasWarnedAboutDisplayNameOnConsumer = true;
                }
              }
            }
          });
          context.Consumer = Consumer;
        }
        {
          context._currentRenderer = null;
          context._currentRenderer2 = null;
        }
        return context;
      }
      var Uninitialized = -1;
      var Pending = 0;
      var Resolved = 1;
      var Rejected = 2;
      function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
          var ctor = payload._result;
          var thenable = ctor();
          thenable.then(function(moduleObject2) {
            if (payload._status === Pending || payload._status === Uninitialized) {
              var resolved = payload;
              resolved._status = Resolved;
              resolved._result = moduleObject2;
            }
          }, function(error2) {
            if (payload._status === Pending || payload._status === Uninitialized) {
              var rejected = payload;
              rejected._status = Rejected;
              rejected._result = error2;
            }
          });
          if (payload._status === Uninitialized) {
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
          }
        }
        if (payload._status === Resolved) {
          var moduleObject = payload._result;
          {
            if (moduleObject === undefined) {
              error("lazy: Expected the result of a dynamic imp" + "ort() call. " + "Instead received: %s\n\nYour code should look like: \n  " + "const MyComponent = lazy(() => imp" + "ort('./MyComponent'))\n\n" + "Did you accidentally put curly braces around the import?", moduleObject);
            }
          }
          {
            if (!("default" in moduleObject)) {
              error("lazy: Expected the result of a dynamic imp" + "ort() call. " + "Instead received: %s\n\nYour code should look like: \n  " + "const MyComponent = lazy(() => imp" + "ort('./MyComponent'))", moduleObject);
            }
          }
          return moduleObject.default;
        } else {
          throw payload._result;
        }
      }
      function lazy(ctor) {
        var payload = {
          _status: Uninitialized,
          _result: ctor
        };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: payload,
          _init: lazyInitializer
        };
        {
          var defaultProps;
          var propTypes;
          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: true,
              get: function() {
                return defaultProps;
              },
              set: function(newDefaultProps) {
                error("React.lazy(...): It is not supported to assign `defaultProps` to " + "a lazy component import. Either specify them where the component " + "is defined, or create a wrapping component around it.");
                defaultProps = newDefaultProps;
                Object.defineProperty(lazyType, "defaultProps", {
                  enumerable: true
                });
              }
            },
            propTypes: {
              configurable: true,
              get: function() {
                return propTypes;
              },
              set: function(newPropTypes) {
                error("React.lazy(...): It is not supported to assign `propTypes` to " + "a lazy component import. Either specify them where the component " + "is defined, or create a wrapping component around it.");
                propTypes = newPropTypes;
                Object.defineProperty(lazyType, "propTypes", {
                  enumerable: true
                });
              }
            }
          });
        }
        return lazyType;
      }
      function forwardRef(render) {
        {
          if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
            error("forwardRef requires a render function but received a `memo` " + "component. Instead of forwardRef(memo(...)), use " + "memo(forwardRef(...)).");
          } else if (typeof render !== "function") {
            error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
          } else {
            if (render.length !== 0 && render.length !== 2) {
              error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
            }
          }
          if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) {
              error("forwardRef render functions do not support propTypes or defaultProps. " + "Did you accidentally pass a React component?");
            }
          }
        }
        var elementType = {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render
        };
        {
          var ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              if (!render.name && !render.displayName) {
                render.displayName = name;
              }
            }
          });
        }
        return elementType;
      }
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
            return true;
          }
        }
        return false;
      }
      function memo(type, compare) {
        {
          if (!isValidElementType(type)) {
            error("memo: The first argument must be a component. Instead " + "received: %s", type === null ? "null" : typeof type);
          }
        }
        var elementType = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: compare === undefined ? null : compare
        };
        {
          var ownName;
          Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
              return ownName;
            },
            set: function(name) {
              ownName = name;
              if (!type.name && !type.displayName) {
                type.displayName = name;
              }
            }
          });
        }
        return elementType;
      }
      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        {
          if (dispatcher === null) {
            error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for" + " one of the following reasons:\n" + "1. You might have mismatching versions of React and the renderer (such as React DOM)\n" + "2. You might be breaking the Rules of Hooks\n" + "3. You might have more than one copy of React in the same app\n" + "See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
          }
        }
        return dispatcher;
      }
      function useContext(Context) {
        var dispatcher = resolveDispatcher();
        {
          if (Context._context !== undefined) {
            var realContext = Context._context;
            if (realContext.Consumer === Context) {
              error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be " + "removed in a future major release. Did you mean to call useContext(Context) instead?");
            } else if (realContext.Provider === Context) {
              error("Calling useContext(Context.Provider) is not supported. " + "Did you mean to call useContext(Context) instead?");
            }
          }
        }
        return dispatcher.useContext(Context);
      }
      function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }
      function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
      }
      function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }
      function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
      }
      function useInsertionEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useInsertionEffect(create, deps);
      }
      function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
      }
      function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
      }
      function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
      }
      function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
      }
      function useDebugValue(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      }
      function useTransition() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useTransition();
      }
      function useDeferredValue(value) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDeferredValue(value);
      }
      function useId() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useId();
      }
      function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
      }
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error("disabledDepth fell below zero. " + "This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === undefined) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap;
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== undefined) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              c--;
            }
            for (;s >= 1 && c >= 0; s--, c--) {
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--;
                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component2) {
        var prototype = Component2.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = undefined;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s" + " `%s` is invalid; the type checker " + "function must return `null` or an `Error` but returned a %s. " + "You may have forgotten to pass an argument to the type checker " + "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " + "shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
          } else {
            setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentNameFromType(ReactCurrentOwner.current.type);
          if (name) {
            return "\n\nCheck the render method of `" + name + "`.";
          }
        }
        return "";
      }
      function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, "");
          var lineNumber = source.lineNumber;
          return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
        }
        return "";
      }
      function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) {
          return getSourceInfoErrorAddendum(elementProps.__source);
        }
        return "";
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
          var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }
        return info;
      }
      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        }
        {
          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.' + "%s%s See https://reactjs.org/link/warning-keys for more information.", currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        if (typeof node !== "object") {
          return;
        }
        if (isArray(node)) {
          for (var i = 0;i < node.length; i++) {
            var child = node[i];
            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
          if (typeof iteratorFn === "function") {
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === undefined || typeof type === "string") {
            return;
          }
          var propTypes;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
            error("getDefaultProps is only used on classic React.createClass " + "definitions. Use a static property named `defaultProps` instead.");
          }
        }
      }
      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i = 0;i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid prop `%s` supplied to `React.Fragment`. " + "React.Fragment can only have `key` and `children` props.", key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type);
        if (!validType) {
          var info = "";
          if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
            info += " You likely forgot to export your component from the file " + "it's defined in, or you might have mixed up default and named imports.";
          }
          var sourceInfo = getSourceInfoErrorAddendumForProps(props);
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }
          var typeString;
          if (type === null) {
            typeString = "null";
          } else if (isArray(type)) {
            typeString = "array";
          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
            info = " Did you accidentally export a JSX literal instead of a component?";
          } else {
            typeString = typeof type;
          }
          {
            error("React.createElement: type is invalid -- expected a string (for " + "built-in components) or a class/function (for composite " + "components) but got: %s.%s", typeString, info);
          }
        }
        var element = createElement.apply(this, arguments);
        if (element == null) {
          return element;
        }
        if (validType) {
          for (var i = 2;i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }
        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }
        return element;
      }
      var didWarnAboutDeprecatedCreateFactory = false;
      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        {
          if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn("React.createFactory() is deprecated and will be removed in " + "a future major release. Consider using JSX " + "or use React.createElement() directly instead.");
          }
          Object.defineProperty(validatedFactory, "type", {
            enumerable: false,
            get: function() {
              warn("Factory.type is deprecated. Access the class directly " + "before passing it to createFactory.");
              Object.defineProperty(this, "type", {
                value: type
              });
              return type;
            }
          });
        }
        return validatedFactory;
      }
      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for (var i = 2;i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }
      function startTransition(scope, options) {
        var prevTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition = {};
        var currentTransition = ReactCurrentBatchConfig.transition;
        {
          ReactCurrentBatchConfig.transition._updatedFibers = new Set;
        }
        try {
          scope();
        } finally {
          ReactCurrentBatchConfig.transition = prevTransition;
          {
            if (prevTransition === null && currentTransition._updatedFibers) {
              var updatedFibersCount = currentTransition._updatedFibers.size;
              if (updatedFibersCount > 10) {
                warn("Detected a large number of updates inside startTransition. " + "If this is due to a subscription please re-write it to use React provided hooks. " + "Otherwise concurrent mode guarantees are off the table.");
              }
              currentTransition._updatedFibers.clear();
            }
          }
        }
      }
      var didWarnAboutMessageChannel = false;
      var enqueueTaskImpl = null;
      function enqueueTask(task) {
        if (enqueueTaskImpl === null) {
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            var nodeRequire = module2 && module2[requireString];
            enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              {
                if (didWarnAboutMessageChannel === false) {
                  didWarnAboutMessageChannel = true;
                  if (typeof MessageChannel === "undefined") {
                    error("This browser does not have a MessageChannel implementation, " + "so enqueuing tasks via await act(async () => ...) will fail. " + "Please file an issue at https://github.com/facebook/react/issues " + "if you encounter this warning.");
                  }
                }
              }
              var channel = new MessageChannel;
              channel.port1.onmessage = callback;
              channel.port2.postMessage(undefined);
            };
          }
        }
        return enqueueTaskImpl(task);
      }
      var actScopeDepth = 0;
      var didWarnNoAwaitAct = false;
      function act(callback) {
        {
          var prevActScopeDepth = actScopeDepth;
          actScopeDepth++;
          if (ReactCurrentActQueue.current === null) {
            ReactCurrentActQueue.current = [];
          }
          var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
          var result;
          try {
            ReactCurrentActQueue.isBatchingLegacy = true;
            result = callback();
            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                flushActQueue(queue);
              }
            }
          } catch (error2) {
            popActScope(prevActScopeDepth);
            throw error2;
          } finally {
            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
          }
          if (result !== null && typeof result === "object" && typeof result.then === "function") {
            var thenableResult = result;
            var wasAwaited = false;
            var thenable = {
              then: function(resolve, reject) {
                wasAwaited = true;
                thenableResult.then(function(returnValue2) {
                  popActScope(prevActScopeDepth);
                  if (actScopeDepth === 0) {
                    recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                  } else {
                    resolve(returnValue2);
                  }
                }, function(error2) {
                  popActScope(prevActScopeDepth);
                  reject(error2);
                });
              }
            };
            {
              if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                Promise.resolve().then(function() {
                }).then(function() {
                  if (!wasAwaited) {
                    didWarnNoAwaitAct = true;
                    error("You called act(async () => ...) without await. " + "This could lead to unexpected testing behaviour, " + "interleaving multiple act calls and mixing their " + "scopes. " + "You should - await act(async () => ...);");
                  }
                });
              }
            }
            return thenable;
          } else {
            var returnValue = result;
            popActScope(prevActScopeDepth);
            if (actScopeDepth === 0) {
              var _queue = ReactCurrentActQueue.current;
              if (_queue !== null) {
                flushActQueue(_queue);
                ReactCurrentActQueue.current = null;
              }
              var _thenable = {
                then: function(resolve, reject) {
                  if (ReactCurrentActQueue.current === null) {
                    ReactCurrentActQueue.current = [];
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  } else {
                    resolve(returnValue);
                  }
                }
              };
              return _thenable;
            } else {
              var _thenable2 = {
                then: function(resolve, reject) {
                  resolve(returnValue);
                }
              };
              return _thenable2;
            }
          }
        }
      }
      function popActScope(prevActScopeDepth) {
        {
          if (prevActScopeDepth !== actScopeDepth - 1) {
            error("You seem to have overlapping act() calls, this is not supported. " + "Be sure to await previous act() calls before making a new one. ");
          }
          actScopeDepth = prevActScopeDepth;
        }
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        {
          var queue = ReactCurrentActQueue.current;
          if (queue !== null) {
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                if (queue.length === 0) {
                  ReactCurrentActQueue.current = null;
                  resolve(returnValue);
                } else {
                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                }
              });
            } catch (error2) {
              reject(error2);
            }
          } else {
            resolve(returnValue);
          }
        }
      }
      var isFlushing = false;
      function flushActQueue(queue) {
        {
          if (!isFlushing) {
            isFlushing = true;
            var i = 0;
            try {
              for (;i < queue.length; i++) {
                var callback = queue[i];
                do {
                  callback = callback(true);
                } while (callback !== null);
              }
              queue.length = 0;
            } catch (error2) {
              queue = queue.slice(i + 1);
              throw error2;
            } finally {
              isFlushing = false;
            }
          }
        }
      }
      var createElement$1 = createElementWithValidation;
      var cloneElement$1 = cloneElementWithValidation;
      var createFactory = createFactoryWithValidation;
      var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray,
        only: onlyChild
      };
      exports2.Children = Children;
      exports2.Component = Component;
      exports2.Fragment = REACT_FRAGMENT_TYPE;
      exports2.Profiler = REACT_PROFILER_TYPE;
      exports2.PureComponent = PureComponent;
      exports2.StrictMode = REACT_STRICT_MODE_TYPE;
      exports2.Suspense = REACT_SUSPENSE_TYPE;
      exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
      exports2.act = act;
      exports2.cloneElement = cloneElement$1;
      exports2.createContext = createContext;
      exports2.createElement = createElement$1;
      exports2.createFactory = createFactory;
      exports2.createRef = createRef;
      exports2.forwardRef = forwardRef;
      exports2.isValidElement = isValidElement;
      exports2.lazy = lazy;
      exports2.memo = memo;
      exports2.startTransition = startTransition;
      exports2.unstable_act = act;
      exports2.useCallback = useCallback;
      exports2.useContext = useContext;
      exports2.useDebugValue = useDebugValue;
      exports2.useDeferredValue = useDeferredValue;
      exports2.useEffect = useEffect;
      exports2.useId = useId;
      exports2.useImperativeHandle = useImperativeHandle;
      exports2.useInsertionEffect = useInsertionEffect;
      exports2.useLayoutEffect = useLayoutEffect;
      exports2.useMemo = useMemo;
      exports2.useReducer = useReducer;
      exports2.useRef = useRef;
      exports2.useState = useState;
      exports2.useSyncExternalStore = useSyncExternalStore;
      exports2.useTransition = useTransition;
      exports2.version = ReactVersion;
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error);
      }
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS((exports2, module2) => {
  if (false) {
  } else {
    module2.exports = require_react_development();
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS((exports2, module2) => {
  module2.exports = function() {
    var selection = document.getSelection();
    if (!selection.rangeCount) {
      return function() {
      };
    }
    var active = document.activeElement;
    var ranges = [];
    for (var i = 0;i < selection.rangeCount; i++) {
      ranges.push(selection.getRangeAt(i));
    }
    switch (active.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        active.blur();
        break;
      default:
        active = null;
        break;
    }
    selection.removeAllRanges();
    return function() {
      selection.type === "Caret" && selection.removeAllRanges();
      if (!selection.rangeCount) {
        ranges.forEach(function(range) {
          selection.addRange(range);
        });
      }
      active && active.focus();
    };
  };
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS((exports2, module2) => {
  function format(message) {
    var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
    return message.replace(/#{\s*key\s*}/g, copyKey);
  }
  function copy(text, options) {
    var debug, message, reselectPrevious, range, selection, mark, success = false;
    if (!options) {
      options = {};
    }
    debug = options.debug || false;
    try {
      reselectPrevious = deselectCurrent();
      range = document.createRange();
      selection = document.getSelection();
      mark = document.createElement("span");
      mark.textContent = text;
      mark.ariaHidden = "true";
      mark.style.all = "unset";
      mark.style.position = "fixed";
      mark.style.top = 0;
      mark.style.clip = "rect(0, 0, 0, 0)";
      mark.style.whiteSpace = "pre";
      mark.style.webkitUserSelect = "text";
      mark.style.MozUserSelect = "text";
      mark.style.msUserSelect = "text";
      mark.style.userSelect = "text";
      mark.addEventListener("copy", function(e) {
        e.stopPropagation();
        if (options.format) {
          e.preventDefault();
          if (typeof e.clipboardData === "undefined") {
            debug && console.warn("unable to use e.clipboardData");
            debug && console.warn("trying IE specific stuff");
            window.clipboardData.clearData();
            var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
            window.clipboardData.setData(format2, text);
          } else {
            e.clipboardData.clearData();
            e.clipboardData.setData(options.format, text);
          }
        }
        if (options.onCopy) {
          e.preventDefault();
          options.onCopy(e.clipboardData);
        }
      });
      document.body.appendChild(mark);
      range.selectNodeContents(mark);
      selection.addRange(range);
      var successful = document.execCommand("copy");
      if (!successful) {
        throw new Error("copy command was unsuccessful");
      }
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using execCommand: ", err);
      debug && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(options.format || "text", text);
        options.onCopy && options.onCopy(window.clipboardData);
        success = true;
      } catch (err2) {
        debug && console.error("unable to copy using clipboardData: ", err2);
        debug && console.error("falling back to prompt");
        message = format("message" in options ? options.message : defaultMessage);
        window.prompt(message, text);
      }
    } finally {
      if (selection) {
        if (typeof selection.removeRange == "function") {
          selection.removeRange(range);
        } else {
          selection.removeAllRanges();
        }
      }
      if (mark) {
        document.body.removeChild(mark);
      }
      reselectPrevious();
    }
    return success;
  }
  var deselectCurrent = require_toggle_selection();
  var clipboardToIE11Formatting = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  };
  var defaultMessage = "Copy to clipboard: #{key}, Enter";
  module2.exports = copy;
});

// node_modules/lodash/fp/_mapping.js
var require__mapping = __commonJS((exports2) => {
  exports2.aliasToReal = {
    each: "forEach",
    eachRight: "forEachRight",
    entries: "toPairs",
    entriesIn: "toPairsIn",
    extend: "assignIn",
    extendAll: "assignInAll",
    extendAllWith: "assignInAllWith",
    extendWith: "assignInWith",
    first: "head",
    conforms: "conformsTo",
    matches: "isMatch",
    property: "get",
    __: "placeholder",
    F: "stubFalse",
    T: "stubTrue",
    all: "every",
    allPass: "overEvery",
    always: "constant",
    any: "some",
    anyPass: "overSome",
    apply: "spread",
    assoc: "set",
    assocPath: "set",
    complement: "negate",
    compose: "flowRight",
    contains: "includes",
    dissoc: "unset",
    dissocPath: "unset",
    dropLast: "dropRight",
    dropLastWhile: "dropRightWhile",
    equals: "isEqual",
    identical: "eq",
    indexBy: "keyBy",
    init: "initial",
    invertObj: "invert",
    juxt: "over",
    omitAll: "omit",
    nAry: "ary",
    path: "get",
    pathEq: "matchesProperty",
    pathOr: "getOr",
    paths: "at",
    pickAll: "pick",
    pipe: "flow",
    pluck: "map",
    prop: "get",
    propEq: "matchesProperty",
    propOr: "getOr",
    props: "at",
    symmetricDifference: "xor",
    symmetricDifferenceBy: "xorBy",
    symmetricDifferenceWith: "xorWith",
    takeLast: "takeRight",
    takeLastWhile: "takeRightWhile",
    unapply: "rest",
    unnest: "flatten",
    useWith: "overArgs",
    where: "conformsTo",
    whereEq: "isMatch",
    zipObj: "zipObject"
  };
  exports2.aryMethod = {
    "1": [
      "assignAll",
      "assignInAll",
      "attempt",
      "castArray",
      "ceil",
      "create",
      "curry",
      "curryRight",
      "defaultsAll",
      "defaultsDeepAll",
      "floor",
      "flow",
      "flowRight",
      "fromPairs",
      "invert",
      "iteratee",
      "memoize",
      "method",
      "mergeAll",
      "methodOf",
      "mixin",
      "nthArg",
      "over",
      "overEvery",
      "overSome",
      "rest",
      "reverse",
      "round",
      "runInContext",
      "spread",
      "template",
      "trim",
      "trimEnd",
      "trimStart",
      "uniqueId",
      "words",
      "zipAll"
    ],
    "2": [
      "add",
      "after",
      "ary",
      "assign",
      "assignAllWith",
      "assignIn",
      "assignInAllWith",
      "at",
      "before",
      "bind",
      "bindAll",
      "bindKey",
      "chunk",
      "cloneDeepWith",
      "cloneWith",
      "concat",
      "conformsTo",
      "countBy",
      "curryN",
      "curryRightN",
      "debounce",
      "defaults",
      "defaultsDeep",
      "defaultTo",
      "delay",
      "difference",
      "divide",
      "drop",
      "dropRight",
      "dropRightWhile",
      "dropWhile",
      "endsWith",
      "eq",
      "every",
      "filter",
      "find",
      "findIndex",
      "findKey",
      "findLast",
      "findLastIndex",
      "findLastKey",
      "flatMap",
      "flatMapDeep",
      "flattenDepth",
      "forEach",
      "forEachRight",
      "forIn",
      "forInRight",
      "forOwn",
      "forOwnRight",
      "get",
      "groupBy",
      "gt",
      "gte",
      "has",
      "hasIn",
      "includes",
      "indexOf",
      "intersection",
      "invertBy",
      "invoke",
      "invokeMap",
      "isEqual",
      "isMatch",
      "join",
      "keyBy",
      "lastIndexOf",
      "lt",
      "lte",
      "map",
      "mapKeys",
      "mapValues",
      "matchesProperty",
      "maxBy",
      "meanBy",
      "merge",
      "mergeAllWith",
      "minBy",
      "multiply",
      "nth",
      "omit",
      "omitBy",
      "overArgs",
      "pad",
      "padEnd",
      "padStart",
      "parseInt",
      "partial",
      "partialRight",
      "partition",
      "pick",
      "pickBy",
      "propertyOf",
      "pull",
      "pullAll",
      "pullAt",
      "random",
      "range",
      "rangeRight",
      "rearg",
      "reject",
      "remove",
      "repeat",
      "restFrom",
      "result",
      "sampleSize",
      "some",
      "sortBy",
      "sortedIndex",
      "sortedIndexOf",
      "sortedLastIndex",
      "sortedLastIndexOf",
      "sortedUniqBy",
      "split",
      "spreadFrom",
      "startsWith",
      "subtract",
      "sumBy",
      "take",
      "takeRight",
      "takeRightWhile",
      "takeWhile",
      "tap",
      "throttle",
      "thru",
      "times",
      "trimChars",
      "trimCharsEnd",
      "trimCharsStart",
      "truncate",
      "union",
      "uniqBy",
      "uniqWith",
      "unset",
      "unzipWith",
      "without",
      "wrap",
      "xor",
      "zip",
      "zipObject",
      "zipObjectDeep"
    ],
    "3": [
      "assignInWith",
      "assignWith",
      "clamp",
      "differenceBy",
      "differenceWith",
      "findFrom",
      "findIndexFrom",
      "findLastFrom",
      "findLastIndexFrom",
      "getOr",
      "includesFrom",
      "indexOfFrom",
      "inRange",
      "intersectionBy",
      "intersectionWith",
      "invokeArgs",
      "invokeArgsMap",
      "isEqualWith",
      "isMatchWith",
      "flatMapDepth",
      "lastIndexOfFrom",
      "mergeWith",
      "orderBy",
      "padChars",
      "padCharsEnd",
      "padCharsStart",
      "pullAllBy",
      "pullAllWith",
      "rangeStep",
      "rangeStepRight",
      "reduce",
      "reduceRight",
      "replace",
      "set",
      "slice",
      "sortedIndexBy",
      "sortedLastIndexBy",
      "transform",
      "unionBy",
      "unionWith",
      "update",
      "xorBy",
      "xorWith",
      "zipWith"
    ],
    "4": [
      "fill",
      "setWith",
      "updateWith"
    ]
  };
  exports2.aryRearg = {
    "2": [1, 0],
    "3": [2, 0, 1],
    "4": [3, 2, 0, 1]
  };
  exports2.iterateeAry = {
    dropRightWhile: 1,
    dropWhile: 1,
    every: 1,
    filter: 1,
    find: 1,
    findFrom: 1,
    findIndex: 1,
    findIndexFrom: 1,
    findKey: 1,
    findLast: 1,
    findLastFrom: 1,
    findLastIndex: 1,
    findLastIndexFrom: 1,
    findLastKey: 1,
    flatMap: 1,
    flatMapDeep: 1,
    flatMapDepth: 1,
    forEach: 1,
    forEachRight: 1,
    forIn: 1,
    forInRight: 1,
    forOwn: 1,
    forOwnRight: 1,
    map: 1,
    mapKeys: 1,
    mapValues: 1,
    partition: 1,
    reduce: 2,
    reduceRight: 2,
    reject: 1,
    remove: 1,
    some: 1,
    takeRightWhile: 1,
    takeWhile: 1,
    times: 1,
    transform: 2
  };
  exports2.iterateeRearg = {
    mapKeys: [1],
    reduceRight: [1, 0]
  };
  exports2.methodRearg = {
    assignInAllWith: [1, 0],
    assignInWith: [1, 2, 0],
    assignAllWith: [1, 0],
    assignWith: [1, 2, 0],
    differenceBy: [1, 2, 0],
    differenceWith: [1, 2, 0],
    getOr: [2, 1, 0],
    intersectionBy: [1, 2, 0],
    intersectionWith: [1, 2, 0],
    isEqualWith: [1, 2, 0],
    isMatchWith: [2, 1, 0],
    mergeAllWith: [1, 0],
    mergeWith: [1, 2, 0],
    padChars: [2, 1, 0],
    padCharsEnd: [2, 1, 0],
    padCharsStart: [2, 1, 0],
    pullAllBy: [2, 1, 0],
    pullAllWith: [2, 1, 0],
    rangeStep: [1, 2, 0],
    rangeStepRight: [1, 2, 0],
    setWith: [3, 1, 2, 0],
    sortedIndexBy: [2, 1, 0],
    sortedLastIndexBy: [2, 1, 0],
    unionBy: [1, 2, 0],
    unionWith: [1, 2, 0],
    updateWith: [3, 1, 2, 0],
    xorBy: [1, 2, 0],
    xorWith: [1, 2, 0],
    zipWith: [1, 2, 0]
  };
  exports2.methodSpread = {
    assignAll: { start: 0 },
    assignAllWith: { start: 0 },
    assignInAll: { start: 0 },
    assignInAllWith: { start: 0 },
    defaultsAll: { start: 0 },
    defaultsDeepAll: { start: 0 },
    invokeArgs: { start: 2 },
    invokeArgsMap: { start: 2 },
    mergeAll: { start: 0 },
    mergeAllWith: { start: 0 },
    partial: { start: 1 },
    partialRight: { start: 1 },
    without: { start: 1 },
    zipAll: { start: 0 }
  };
  exports2.mutate = {
    array: {
      fill: true,
      pull: true,
      pullAll: true,
      pullAllBy: true,
      pullAllWith: true,
      pullAt: true,
      remove: true,
      reverse: true
    },
    object: {
      assign: true,
      assignAll: true,
      assignAllWith: true,
      assignIn: true,
      assignInAll: true,
      assignInAllWith: true,
      assignInWith: true,
      assignWith: true,
      defaults: true,
      defaultsAll: true,
      defaultsDeep: true,
      defaultsDeepAll: true,
      merge: true,
      mergeAll: true,
      mergeAllWith: true,
      mergeWith: true
    },
    set: {
      set: true,
      setWith: true,
      unset: true,
      update: true,
      updateWith: true
    }
  };
  exports2.realToAlias = function() {
    var hasOwnProperty = Object.prototype.hasOwnProperty, object = exports2.aliasToReal, result = {};
    for (var key in object) {
      var value = object[key];
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }
    return result;
  }();
  exports2.remap = {
    assignAll: "assign",
    assignAllWith: "assignWith",
    assignInAll: "assignIn",
    assignInAllWith: "assignInWith",
    curryN: "curry",
    curryRightN: "curryRight",
    defaultsAll: "defaults",
    defaultsDeepAll: "defaultsDeep",
    findFrom: "find",
    findIndexFrom: "findIndex",
    findLastFrom: "findLast",
    findLastIndexFrom: "findLastIndex",
    getOr: "get",
    includesFrom: "includes",
    indexOfFrom: "indexOf",
    invokeArgs: "invoke",
    invokeArgsMap: "invokeMap",
    lastIndexOfFrom: "lastIndexOf",
    mergeAll: "merge",
    mergeAllWith: "mergeWith",
    padChars: "pad",
    padCharsEnd: "padEnd",
    padCharsStart: "padStart",
    propertyOf: "get",
    rangeStep: "range",
    rangeStepRight: "rangeRight",
    restFrom: "rest",
    spreadFrom: "spread",
    trimChars: "trim",
    trimCharsEnd: "trimEnd",
    trimCharsStart: "trimStart",
    zipAll: "zip"
  };
  exports2.skipFixed = {
    castArray: true,
    flow: true,
    flowRight: true,
    iteratee: true,
    mixin: true,
    rearg: true,
    runInContext: true
  };
  exports2.skipRearg = {
    add: true,
    assign: true,
    assignIn: true,
    bind: true,
    bindKey: true,
    concat: true,
    difference: true,
    divide: true,
    eq: true,
    gt: true,
    gte: true,
    isEqual: true,
    lt: true,
    lte: true,
    matchesProperty: true,
    merge: true,
    multiply: true,
    overArgs: true,
    partial: true,
    partialRight: true,
    propertyOf: true,
    random: true,
    range: true,
    rangeRight: true,
    subtract: true,
    zip: true,
    zipObject: true,
    zipObjectDeep: true
  };
});

// node_modules/lodash/fp/placeholder.js
var require_placeholder = __commonJS((exports2, module2) => {
  module2.exports = {};
});

// node_modules/lodash/fp/_baseConvert.js
var require__baseConvert = __commonJS((exports2, module2) => {
  function baseArity(func, n) {
    return n == 2 ? function(a, b) {
      return func.apply(undefined, arguments);
    } : function(a) {
      return func.apply(undefined, arguments);
    };
  }
  function baseAry(func, n) {
    return n == 2 ? function(a, b) {
      return func(a, b);
    } : function(a) {
      return func(a);
    };
  }
  function cloneArray(array) {
    var length = array ? array.length : 0, result = Array(length);
    while (length--) {
      result[length] = array[length];
    }
    return result;
  }
  function createCloner(func) {
    return function(object) {
      return func({}, object);
    };
  }
  function flatSpread(func, start) {
    return function() {
      var length = arguments.length, lastIndex = length - 1, args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var array = args[start], otherArgs = args.slice(0, start);
      if (array) {
        push.apply(otherArgs, array);
      }
      if (start != lastIndex) {
        push.apply(otherArgs, args.slice(start + 1));
      }
      return func.apply(this, otherArgs);
    };
  }
  function wrapImmutable(func, cloner) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return;
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var result = args[0] = cloner.apply(undefined, args);
      func.apply(undefined, args);
      return result;
    };
  }
  function baseConvert(util, name, func, options) {
    var isLib = typeof name == "function", isObj = name === Object(name);
    if (isObj) {
      options = func;
      func = name;
      name = undefined;
    }
    if (func == null) {
      throw new TypeError;
    }
    options || (options = {});
    var config = {
      cap: "cap" in options ? options.cap : true,
      curry: "curry" in options ? options.curry : true,
      fixed: "fixed" in options ? options.fixed : true,
      immutable: "immutable" in options ? options.immutable : true,
      rearg: "rearg" in options ? options.rearg : true
    };
    var defaultHolder = isLib ? func : fallbackHolder, forceCurry = "curry" in options && options.curry, forceFixed = "fixed" in options && options.fixed, forceRearg = "rearg" in options && options.rearg, pristine = isLib ? func.runInContext() : undefined;
    var helpers = isLib ? func : {
      ary: util.ary,
      assign: util.assign,
      clone: util.clone,
      curry: util.curry,
      forEach: util.forEach,
      isArray: util.isArray,
      isError: util.isError,
      isFunction: util.isFunction,
      isWeakMap: util.isWeakMap,
      iteratee: util.iteratee,
      keys: util.keys,
      rearg: util.rearg,
      toInteger: util.toInteger,
      toPath: util.toPath
    };
    var { ary, assign: assign2, clone, curry, forEach: each, isArray, isError, isFunction, isWeakMap, keys, rearg, toInteger, toPath } = helpers;
    var aryMethodKeys = keys(mapping.aryMethod);
    var wrappers = {
      castArray: function(castArray) {
        return function() {
          var value = arguments[0];
          return isArray(value) ? castArray(cloneArray(value)) : castArray.apply(undefined, arguments);
        };
      },
      iteratee: function(iteratee) {
        return function() {
          var func2 = arguments[0], arity = arguments[1], result = iteratee(func2, arity), length = result.length;
          if (config.cap && typeof arity == "number") {
            arity = arity > 2 ? arity - 2 : 1;
            return length && length <= arity ? result : baseAry(result, arity);
          }
          return result;
        };
      },
      mixin: function(mixin) {
        return function(source) {
          var func2 = this;
          if (!isFunction(func2)) {
            return mixin(func2, Object(source));
          }
          var pairs2 = [];
          each(keys(source), function(key) {
            if (isFunction(source[key])) {
              pairs2.push([key, func2.prototype[key]]);
            }
          });
          mixin(func2, Object(source));
          each(pairs2, function(pair) {
            var value = pair[1];
            if (isFunction(value)) {
              func2.prototype[pair[0]] = value;
            } else {
              delete func2.prototype[pair[0]];
            }
          });
          return func2;
        };
      },
      nthArg: function(nthArg) {
        return function(n) {
          var arity = n < 0 ? 1 : toInteger(n) + 1;
          return curry(nthArg(n), arity);
        };
      },
      rearg: function(rearg2) {
        return function(func2, indexes) {
          var arity = indexes ? indexes.length : 0;
          return curry(rearg2(func2, indexes), arity);
        };
      },
      runInContext: function(runInContext) {
        return function(context) {
          return baseConvert(util, runInContext(context), options);
        };
      }
    };
    function castCap(name2, func2) {
      if (config.cap) {
        var indexes = mapping.iterateeRearg[name2];
        if (indexes) {
          return iterateeRearg(func2, indexes);
        }
        var n = !isLib && mapping.iterateeAry[name2];
        if (n) {
          return iterateeAry(func2, n);
        }
      }
      return func2;
    }
    function castCurry(name2, func2, n) {
      return forceCurry || config.curry && n > 1 ? curry(func2, n) : func2;
    }
    function castFixed(name2, func2, n) {
      if (config.fixed && (forceFixed || !mapping.skipFixed[name2])) {
        var data = mapping.methodSpread[name2], start = data && data.start;
        return start === undefined ? ary(func2, n) : flatSpread(func2, start);
      }
      return func2;
    }
    function castRearg(name2, func2, n) {
      return config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name2]) ? rearg(func2, mapping.methodRearg[name2] || mapping.aryRearg[n]) : func2;
    }
    function cloneByPath(object, path) {
      path = toPath(path);
      var index = -1, length = path.length, lastIndex = length - 1, result = clone(Object(object)), nested = result;
      while (nested != null && ++index < length) {
        var key = path[index], value = nested[key];
        if (value != null && !(isFunction(value) || isError(value) || isWeakMap(value))) {
          nested[key] = clone(index == lastIndex ? value : Object(value));
        }
        nested = nested[key];
      }
      return result;
    }
    function convertLib(options2) {
      return _.runInContext.convert(options2)(undefined);
    }
    function createConverter(name2, func2) {
      var realName = mapping.aliasToReal[name2] || name2, methodName = mapping.remap[realName] || realName, oldOptions = options;
      return function(options2) {
        var newUtil = isLib ? pristine : helpers, newFunc = isLib ? pristine[methodName] : func2, newOptions = assign2(assign2({}, oldOptions), options2);
        return baseConvert(newUtil, realName, newFunc, newOptions);
      };
    }
    function iterateeAry(func2, n) {
      return overArg(func2, function(func3) {
        return typeof func3 == "function" ? baseAry(func3, n) : func3;
      });
    }
    function iterateeRearg(func2, indexes) {
      return overArg(func2, function(func3) {
        var n = indexes.length;
        return baseArity(rearg(baseAry(func3, n), indexes), n);
      });
    }
    function overArg(func2, transform) {
      return function() {
        var length = arguments.length;
        if (!length) {
          return func2();
        }
        var args = Array(length);
        while (length--) {
          args[length] = arguments[length];
        }
        var index = config.rearg ? 0 : length - 1;
        args[index] = transform(args[index]);
        return func2.apply(undefined, args);
      };
    }
    function wrap(name2, func2, placeholder) {
      var result, realName = mapping.aliasToReal[name2] || name2, wrapped = func2, wrapper = wrappers[realName];
      if (wrapper) {
        wrapped = wrapper(func2);
      } else if (config.immutable) {
        if (mapping.mutate.array[realName]) {
          wrapped = wrapImmutable(func2, cloneArray);
        } else if (mapping.mutate.object[realName]) {
          wrapped = wrapImmutable(func2, createCloner(func2));
        } else if (mapping.mutate.set[realName]) {
          wrapped = wrapImmutable(func2, cloneByPath);
        }
      }
      each(aryMethodKeys, function(aryKey) {
        each(mapping.aryMethod[aryKey], function(otherName) {
          if (realName == otherName) {
            var data = mapping.methodSpread[realName], afterRearg = data && data.afterRearg;
            result = afterRearg ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey) : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);
            result = castCap(realName, result);
            result = castCurry(realName, result, aryKey);
            return false;
          }
        });
        return !result;
      });
      result || (result = wrapped);
      if (result == func2) {
        result = forceCurry ? curry(result, 1) : function() {
          return func2.apply(this, arguments);
        };
      }
      result.convert = createConverter(realName, func2);
      result.placeholder = func2.placeholder = placeholder;
      return result;
    }
    if (!isObj) {
      return wrap(name, func, defaultHolder);
    }
    var _ = func;
    var pairs = [];
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(key) {
        var func2 = _[mapping.remap[key] || key];
        if (func2) {
          pairs.push([key, wrap(key, func2, _)]);
        }
      });
    });
    each(keys(_), function(key) {
      var func2 = _[key];
      if (typeof func2 == "function") {
        var length = pairs.length;
        while (length--) {
          if (pairs[length][0] == key) {
            return;
          }
        }
        func2.convert = createConverter(key, func2);
        pairs.push([key, func2]);
      }
    });
    each(pairs, function(pair) {
      _[pair[0]] = pair[1];
    });
    _.convert = convertLib;
    _.placeholder = _;
    each(keys(_), function(key) {
      each(mapping.realToAlias[key] || [], function(alias) {
        _[alias] = _[key];
      });
    });
    return _;
  }
  var mapping = require__mapping();
  var fallbackHolder = require_placeholder();
  var push = Array.prototype.push;
  module2.exports = baseConvert;
});

// node_modules/lodash/identity.js
var require_identity = __commonJS((exports2, module2) => {
  function identity(value) {
    return value;
  }
  module2.exports = identity;
});

// node_modules/lodash/_freeGlobal.js
var require__freeGlobal = __commonJS((exports2, module2) => {
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  module2.exports = freeGlobal;
});

// node_modules/lodash/_root.js
var require__root = __commonJS((exports2, module2) => {
  var freeGlobal = require__freeGlobal();
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  module2.exports = root;
});

// node_modules/lodash/_Symbol.js
var require__Symbol = __commonJS((exports2, module2) => {
  var root = require__root();
  var Symbol2 = root.Symbol;
  module2.exports = Symbol2;
});

// node_modules/lodash/_getRawTag.js
var require__getRawTag = __commonJS((exports2, module2) => {
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var Symbol2 = require__Symbol();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined;
  module2.exports = getRawTag;
});

// node_modules/lodash/_objectToString.js
var require__objectToString = __commonJS((exports2, module2) => {
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  module2.exports = objectToString;
});

// node_modules/lodash/_baseGetTag.js
var require__baseGetTag = __commonJS((exports2, module2) => {
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var Symbol2 = require__Symbol();
  var getRawTag = require__getRawTag();
  var objectToString = require__objectToString();
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined;
  module2.exports = baseGetTag;
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS((exports2, module2) => {
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  module2.exports = isObject;
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS((exports2, module2) => {
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var baseGetTag = require__baseGetTag();
  var isObject = require_isObject();
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  module2.exports = isFunction;
});

// node_modules/lodash/_coreJsData.js
var require__coreJsData = __commonJS((exports2, module2) => {
  var root = require__root();
  var coreJsData = root["__core-js_shared__"];
  module2.exports = coreJsData;
});

// node_modules/lodash/_isMasked.js
var require__isMasked = __commonJS((exports2, module2) => {
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var coreJsData = require__coreJsData();
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  module2.exports = isMasked;
});

// node_modules/lodash/_toSource.js
var require__toSource = __commonJS((exports2, module2) => {
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  module2.exports = toSource;
});

// node_modules/lodash/_baseIsNative.js
var require__baseIsNative = __commonJS((exports2, module2) => {
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  var isFunction = require_isFunction();
  var isMasked = require__isMasked();
  var isObject = require_isObject();
  var toSource = require__toSource();
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype;
  var objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  module2.exports = baseIsNative;
});

// node_modules/lodash/_getValue.js
var require__getValue = __commonJS((exports2, module2) => {
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }
  module2.exports = getValue;
});

// node_modules/lodash/_getNative.js
var require__getNative = __commonJS((exports2, module2) => {
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }
  var baseIsNative = require__baseIsNative();
  var getValue = require__getValue();
  module2.exports = getNative;
});

// node_modules/lodash/_WeakMap.js
var require__WeakMap = __commonJS((exports2, module2) => {
  var getNative = require__getNative();
  var root = require__root();
  var WeakMap2 = getNative(root, "WeakMap");
  module2.exports = WeakMap2;
});

// node_modules/lodash/_metaMap.js
var require__metaMap = __commonJS((exports2, module2) => {
  var WeakMap2 = require__WeakMap();
  var metaMap = WeakMap2 && new WeakMap2;
  module2.exports = metaMap;
});

// node_modules/lodash/_baseSetData.js
var require__baseSetData = __commonJS((exports2, module2) => {
  var identity = require_identity();
  var metaMap = require__metaMap();
  var baseSetData = !metaMap ? identity : function(func, data) {
    metaMap.set(func, data);
    return func;
  };
  module2.exports = baseSetData;
});

// node_modules/lodash/_baseCreate.js
var require__baseCreate = __commonJS((exports2, module2) => {
  var isObject = require_isObject();
  var objectCreate = Object.create;
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }();
  module2.exports = baseCreate;
});

// node_modules/lodash/_createCtor.js
var require__createCtor = __commonJS((exports2, module2) => {
  function createCtor(Ctor) {
    return function() {
      var args = arguments;
      switch (args.length) {
        case 0:
          return new Ctor;
        case 1:
          return new Ctor(args[0]);
        case 2:
          return new Ctor(args[0], args[1]);
        case 3:
          return new Ctor(args[0], args[1], args[2]);
        case 4:
          return new Ctor(args[0], args[1], args[2], args[3]);
        case 5:
          return new Ctor(args[0], args[1], args[2], args[3], args[4]);
        case 6:
          return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
        case 7:
          return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
      }
      var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
      return isObject(result) ? result : thisBinding;
    };
  }
  var baseCreate = require__baseCreate();
  var isObject = require_isObject();
  module2.exports = createCtor;
});

// node_modules/lodash/_createBind.js
var require__createBind = __commonJS((exports2, module2) => {
  function createBind(func, bitmask, thisArg) {
    var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
    function wrapper() {
      var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
      return fn.apply(isBind ? thisArg : this, arguments);
    }
    return wrapper;
  }
  var createCtor = require__createCtor();
  var root = require__root();
  var WRAP_BIND_FLAG = 1;
  module2.exports = createBind;
});

// node_modules/lodash/_apply.js
var require__apply = __commonJS((exports2, module2) => {
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  module2.exports = apply;
});

// node_modules/lodash/_composeArgs.js
var require__composeArgs = __commonJS((exports2, module2) => {
  function composeArgs(args, partials, holders, isCurried) {
    var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
    while (++leftIndex < leftLength) {
      result[leftIndex] = partials[leftIndex];
    }
    while (++argsIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[holders[argsIndex]] = args[argsIndex];
      }
    }
    while (rangeLength--) {
      result[leftIndex++] = args[argsIndex++];
    }
    return result;
  }
  var nativeMax = Math.max;
  module2.exports = composeArgs;
});

// node_modules/lodash/_composeArgsRight.js
var require__composeArgsRight = __commonJS((exports2, module2) => {
  function composeArgsRight(args, partials, holders, isCurried) {
    var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
    while (++argsIndex < rangeLength) {
      result[argsIndex] = args[argsIndex];
    }
    var offset = argsIndex;
    while (++rightIndex < rightLength) {
      result[offset + rightIndex] = partials[rightIndex];
    }
    while (++holdersIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[offset + holders[holdersIndex]] = args[argsIndex++];
      }
    }
    return result;
  }
  var nativeMax = Math.max;
  module2.exports = composeArgsRight;
});

// node_modules/lodash/_countHolders.js
var require__countHolders = __commonJS((exports2, module2) => {
  function countHolders(array, placeholder) {
    var length = array.length, result = 0;
    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }
  module2.exports = countHolders;
});

// node_modules/lodash/_baseLodash.js
var require__baseLodash = __commonJS((exports2, module2) => {
  function baseLodash() {
  }
  module2.exports = baseLodash;
});

// node_modules/lodash/_LazyWrapper.js
var require__LazyWrapper = __commonJS((exports2, module2) => {
  function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = MAX_ARRAY_LENGTH;
    this.__views__ = [];
  }
  var baseCreate = require__baseCreate();
  var baseLodash = require__baseLodash();
  var MAX_ARRAY_LENGTH = 4294967295;
  LazyWrapper.prototype = baseCreate(baseLodash.prototype);
  LazyWrapper.prototype.constructor = LazyWrapper;
  module2.exports = LazyWrapper;
});

// node_modules/lodash/noop.js
var require_noop = __commonJS((exports2, module2) => {
  function noop() {
  }
  module2.exports = noop;
});

// node_modules/lodash/_getData.js
var require__getData = __commonJS((exports2, module2) => {
  var metaMap = require__metaMap();
  var noop = require_noop();
  var getData = !metaMap ? noop : function(func) {
    return metaMap.get(func);
  };
  module2.exports = getData;
});

// node_modules/lodash/_realNames.js
var require__realNames = __commonJS((exports2, module2) => {
  var realNames = {};
  module2.exports = realNames;
});

// node_modules/lodash/_getFuncName.js
var require__getFuncName = __commonJS((exports2, module2) => {
  function getFuncName(func) {
    var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
    while (length--) {
      var data = array[length], otherFunc = data.func;
      if (otherFunc == null || otherFunc == func) {
        return data.name;
      }
    }
    return result;
  }
  var realNames = require__realNames();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  module2.exports = getFuncName;
});

// node_modules/lodash/_LodashWrapper.js
var require__LodashWrapper = __commonJS((exports2, module2) => {
  function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
  }
  var baseCreate = require__baseCreate();
  var baseLodash = require__baseLodash();
  LodashWrapper.prototype = baseCreate(baseLodash.prototype);
  LodashWrapper.prototype.constructor = LodashWrapper;
  module2.exports = LodashWrapper;
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS((exports2, module2) => {
  var isArray = Array.isArray;
  module2.exports = isArray;
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS((exports2, module2) => {
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  module2.exports = isObjectLike;
});

// node_modules/lodash/_copyArray.js
var require__copyArray = __commonJS((exports2, module2) => {
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  module2.exports = copyArray;
});

// node_modules/lodash/_wrapperClone.js
var require__wrapperClone = __commonJS((exports2, module2) => {
  function wrapperClone(wrapper) {
    if (wrapper instanceof LazyWrapper) {
      return wrapper.clone();
    }
    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = copyArray(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }
  var LazyWrapper = require__LazyWrapper();
  var LodashWrapper = require__LodashWrapper();
  var copyArray = require__copyArray();
  module2.exports = wrapperClone;
});

// node_modules/lodash/wrapperLodash.js
var require_wrapperLodash = __commonJS((exports2, module2) => {
  function lodash(value) {
    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
      if (value instanceof LodashWrapper) {
        return value;
      }
      if (hasOwnProperty.call(value, "__wrapped__")) {
        return wrapperClone(value);
      }
    }
    return new LodashWrapper(value);
  }
  var LazyWrapper = require__LazyWrapper();
  var LodashWrapper = require__LodashWrapper();
  var baseLodash = require__baseLodash();
  var isArray = require_isArray();
  var isObjectLike = require_isObjectLike();
  var wrapperClone = require__wrapperClone();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  lodash.prototype = baseLodash.prototype;
  lodash.prototype.constructor = lodash;
  module2.exports = lodash;
});

// node_modules/lodash/_isLaziable.js
var require__isLaziable = __commonJS((exports2, module2) => {
  function isLaziable(func) {
    var funcName = getFuncName(func), other = lodash[funcName];
    if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
      return false;
    }
    if (func === other) {
      return true;
    }
    var data = getData(other);
    return !!data && func === data[0];
  }
  var LazyWrapper = require__LazyWrapper();
  var getData = require__getData();
  var getFuncName = require__getFuncName();
  var lodash = require_wrapperLodash();
  module2.exports = isLaziable;
});

// node_modules/lodash/_shortOut.js
var require__shortOut = __commonJS((exports2, module2) => {
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }
  var HOT_COUNT = 800;
  var HOT_SPAN = 16;
  var nativeNow = Date.now;
  module2.exports = shortOut;
});

// node_modules/lodash/_setData.js
var require__setData = __commonJS((exports2, module2) => {
  var baseSetData = require__baseSetData();
  var shortOut = require__shortOut();
  var setData = shortOut(baseSetData);
  module2.exports = setData;
});

// node_modules/lodash/_getWrapDetails.js
var require__getWrapDetails = __commonJS((exports2, module2) => {
  function getWrapDetails(source) {
    var match = source.match(reWrapDetails);
    return match ? match[1].split(reSplitDetails) : [];
  }
  var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
  var reSplitDetails = /,? & /;
  module2.exports = getWrapDetails;
});

// node_modules/lodash/_insertWrapDetails.js
var require__insertWrapDetails = __commonJS((exports2, module2) => {
  function insertWrapDetails(source, details) {
    var length = details.length;
    if (!length) {
      return source;
    }
    var lastIndex = length - 1;
    details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
    details = details.join(length > 2 ? ", " : " ");
    return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
  }
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
  module2.exports = insertWrapDetails;
});

// node_modules/lodash/constant.js
var require_constant = __commonJS((exports2, module2) => {
  function constant(value) {
    return function() {
      return value;
    };
  }
  module2.exports = constant;
});

// node_modules/lodash/_defineProperty.js
var require__defineProperty = __commonJS((exports2, module2) => {
  var getNative = require__getNative();
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  module2.exports = defineProperty;
});

// node_modules/lodash/_baseSetToString.js
var require__baseSetToString = __commonJS((exports2, module2) => {
  var constant = require_constant();
  var defineProperty = require__defineProperty();
  var identity = require_identity();
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      configurable: true,
      enumerable: false,
      value: constant(string),
      writable: true
    });
  };
  module2.exports = baseSetToString;
});

// node_modules/lodash/_setToString.js
var require__setToString = __commonJS((exports2, module2) => {
  var baseSetToString = require__baseSetToString();
  var shortOut = require__shortOut();
  var setToString = shortOut(baseSetToString);
  module2.exports = setToString;
});

// node_modules/lodash/_arrayEach.js
var require__arrayEach = __commonJS((exports2, module2) => {
  function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  module2.exports = arrayEach;
});

// node_modules/lodash/_baseFindIndex.js
var require__baseFindIndex = __commonJS((exports2, module2) => {
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  module2.exports = baseFindIndex;
});

// node_modules/lodash/_baseIsNaN.js
var require__baseIsNaN = __commonJS((exports2, module2) => {
  function baseIsNaN(value) {
    return value !== value;
  }
  module2.exports = baseIsNaN;
});

// node_modules/lodash/_strictIndexOf.js
var require__strictIndexOf = __commonJS((exports2, module2) => {
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1, length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  module2.exports = strictIndexOf;
});

// node_modules/lodash/_baseIndexOf.js
var require__baseIndexOf = __commonJS((exports2, module2) => {
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var baseFindIndex = require__baseFindIndex();
  var baseIsNaN = require__baseIsNaN();
  var strictIndexOf = require__strictIndexOf();
  module2.exports = baseIndexOf;
});

// node_modules/lodash/_arrayIncludes.js
var require__arrayIncludes = __commonJS((exports2, module2) => {
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }
  var baseIndexOf = require__baseIndexOf();
  module2.exports = arrayIncludes;
});

// node_modules/lodash/_updateWrapDetails.js
var require__updateWrapDetails = __commonJS((exports2, module2) => {
  function updateWrapDetails(details, bitmask) {
    arrayEach(wrapFlags, function(pair) {
      var value = "_." + pair[0];
      if (bitmask & pair[1] && !arrayIncludes(details, value)) {
        details.push(value);
      }
    });
    return details.sort();
  }
  var arrayEach = require__arrayEach();
  var arrayIncludes = require__arrayIncludes();
  var WRAP_BIND_FLAG = 1;
  var WRAP_BIND_KEY_FLAG = 2;
  var WRAP_CURRY_FLAG = 8;
  var WRAP_CURRY_RIGHT_FLAG = 16;
  var WRAP_PARTIAL_FLAG = 32;
  var WRAP_PARTIAL_RIGHT_FLAG = 64;
  var WRAP_ARY_FLAG = 128;
  var WRAP_REARG_FLAG = 256;
  var WRAP_FLIP_FLAG = 512;
  var wrapFlags = [
    ["ary", WRAP_ARY_FLAG],
    ["bind", WRAP_BIND_FLAG],
    ["bindKey", WRAP_BIND_KEY_FLAG],
    ["curry", WRAP_CURRY_FLAG],
    ["curryRight", WRAP_CURRY_RIGHT_FLAG],
    ["flip", WRAP_FLIP_FLAG],
    ["partial", WRAP_PARTIAL_FLAG],
    ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
    ["rearg", WRAP_REARG_FLAG]
  ];
  module2.exports = updateWrapDetails;
});

// node_modules/lodash/_setWrapToString.js
var require__setWrapToString = __commonJS((exports2, module2) => {
  function setWrapToString(wrapper, reference, bitmask) {
    var source = reference + "";
    return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
  }
  var getWrapDetails = require__getWrapDetails();
  var insertWrapDetails = require__insertWrapDetails();
  var setToString = require__setToString();
  var updateWrapDetails = require__updateWrapDetails();
  module2.exports = setWrapToString;
});

// node_modules/lodash/_createRecurry.js
var require__createRecurry = __commonJS((exports2, module2) => {
  function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
    var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
    bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
    bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
    if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
      bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
    }
    var newData = [
      func,
      bitmask,
      thisArg,
      newPartials,
      newHolders,
      newPartialsRight,
      newHoldersRight,
      argPos,
      ary,
      arity
    ];
    var result = wrapFunc.apply(undefined, newData);
    if (isLaziable(func)) {
      setData(result, newData);
    }
    result.placeholder = placeholder;
    return setWrapToString(result, func, bitmask);
  }
  var isLaziable = require__isLaziable();
  var setData = require__setData();
  var setWrapToString = require__setWrapToString();
  var WRAP_BIND_FLAG = 1;
  var WRAP_BIND_KEY_FLAG = 2;
  var WRAP_CURRY_BOUND_FLAG = 4;
  var WRAP_CURRY_FLAG = 8;
  var WRAP_PARTIAL_FLAG = 32;
  var WRAP_PARTIAL_RIGHT_FLAG = 64;
  module2.exports = createRecurry;
});

// node_modules/lodash/_getHolder.js
var require__getHolder = __commonJS((exports2, module2) => {
  function getHolder(func) {
    var object = func;
    return object.placeholder;
  }
  module2.exports = getHolder;
});

// node_modules/lodash/_isIndex.js
var require__isIndex = __commonJS((exports2, module2) => {
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  module2.exports = isIndex;
});

// node_modules/lodash/_reorder.js
var require__reorder = __commonJS((exports2, module2) => {
  function reorder(array, indexes) {
    var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
    while (length--) {
      var index = indexes[length];
      array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
    }
    return array;
  }
  var copyArray = require__copyArray();
  var isIndex = require__isIndex();
  var nativeMin = Math.min;
  module2.exports = reorder;
});

// node_modules/lodash/_replaceHolders.js
var require__replaceHolders = __commonJS((exports2, module2) => {
  function replaceHolders(array, placeholder) {
    var index = -1, length = array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }
  var PLACEHOLDER = "__lodash_placeholder__";
  module2.exports = replaceHolders;
});

// node_modules/lodash/_createHybrid.js
var require__createHybrid = __commonJS((exports2, module2) => {
  function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
    var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
    function wrapper() {
      var length = arguments.length, args = Array(length), index = length;
      while (index--) {
        args[index] = arguments[index];
      }
      if (isCurried) {
        var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
      }
      if (partials) {
        args = composeArgs(args, partials, holders, isCurried);
      }
      if (partialsRight) {
        args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
      }
      length -= holdersCount;
      if (isCurried && length < arity) {
        var newHolders = replaceHolders(args, placeholder);
        return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
      }
      var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
      length = args.length;
      if (argPos) {
        args = reorder(args, argPos);
      } else if (isFlip && length > 1) {
        args.reverse();
      }
      if (isAry && ary < length) {
        args.length = ary;
      }
      if (this && this !== root && this instanceof wrapper) {
        fn = Ctor || createCtor(fn);
      }
      return fn.apply(thisBinding, args);
    }
    return wrapper;
  }
  var composeArgs = require__composeArgs();
  var composeArgsRight = require__composeArgsRight();
  var countHolders = require__countHolders();
  var createCtor = require__createCtor();
  var createRecurry = require__createRecurry();
  var getHolder = require__getHolder();
  var reorder = require__reorder();
  var replaceHolders = require__replaceHolders();
  var root = require__root();
  var WRAP_BIND_FLAG = 1;
  var WRAP_BIND_KEY_FLAG = 2;
  var WRAP_CURRY_FLAG = 8;
  var WRAP_CURRY_RIGHT_FLAG = 16;
  var WRAP_ARY_FLAG = 128;
  var WRAP_FLIP_FLAG = 512;
  module2.exports = createHybrid;
});

// node_modules/lodash/_createCurry.js
var require__createCurry = __commonJS((exports2, module2) => {
  function createCurry(func, bitmask, arity) {
    var Ctor = createCtor(func);
    function wrapper() {
      var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper);
      while (index--) {
        args[index] = arguments[index];
      }
      var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
      length -= holders.length;
      if (length < arity) {
        return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
      }
      var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
      return apply(fn, this, args);
    }
    return wrapper;
  }
  var apply = require__apply();
  var createCtor = require__createCtor();
  var createHybrid = require__createHybrid();
  var createRecurry = require__createRecurry();
  var getHolder = require__getHolder();
  var replaceHolders = require__replaceHolders();
  var root = require__root();
  module2.exports = createCurry;
});

// node_modules/lodash/_createPartial.js
var require__createPartial = __commonJS((exports2, module2) => {
  function createPartial(func, bitmask, thisArg, partials) {
    var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
    function wrapper() {
      var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
      while (++leftIndex < leftLength) {
        args[leftIndex] = partials[leftIndex];
      }
      while (argsLength--) {
        args[leftIndex++] = arguments[++argsIndex];
      }
      return apply(fn, isBind ? thisArg : this, args);
    }
    return wrapper;
  }
  var apply = require__apply();
  var createCtor = require__createCtor();
  var root = require__root();
  var WRAP_BIND_FLAG = 1;
  module2.exports = createPartial;
});

// node_modules/lodash/_mergeData.js
var require__mergeData = __commonJS((exports2, module2) => {
  function mergeData(data, source) {
    var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
    var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
    if (!(isCommon || isCombo)) {
      return data;
    }
    if (srcBitmask & WRAP_BIND_FLAG) {
      data[2] = source[2];
      newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
    }
    var value = source[3];
    if (value) {
      var partials = data[3];
      data[3] = partials ? composeArgs(partials, value, source[4]) : value;
      data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
    }
    value = source[5];
    if (value) {
      partials = data[5];
      data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
      data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
    }
    value = source[7];
    if (value) {
      data[7] = value;
    }
    if (srcBitmask & WRAP_ARY_FLAG) {
      data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
    }
    if (data[9] == null) {
      data[9] = source[9];
    }
    data[0] = source[0];
    data[1] = newBitmask;
    return data;
  }
  var composeArgs = require__composeArgs();
  var composeArgsRight = require__composeArgsRight();
  var replaceHolders = require__replaceHolders();
  var PLACEHOLDER = "__lodash_placeholder__";
  var WRAP_BIND_FLAG = 1;
  var WRAP_BIND_KEY_FLAG = 2;
  var WRAP_CURRY_BOUND_FLAG = 4;
  var WRAP_CURRY_FLAG = 8;
  var WRAP_ARY_FLAG = 128;
  var WRAP_REARG_FLAG = 256;
  var nativeMin = Math.min;
  module2.exports = mergeData;
});

// node_modules/lodash/_trimmedEndIndex.js
var require__trimmedEndIndex = __commonJS((exports2, module2) => {
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var reWhitespace = /\s/;
  module2.exports = trimmedEndIndex;
});

// node_modules/lodash/_baseTrim.js
var require__baseTrim = __commonJS((exports2, module2) => {
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  var trimmedEndIndex = require__trimmedEndIndex();
  var reTrimStart = /^\s+/;
  module2.exports = baseTrim;
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS((exports2, module2) => {
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  var baseGetTag = require__baseGetTag();
  var isObjectLike = require_isObjectLike();
  var symbolTag = "[object Symbol]";
  module2.exports = isSymbol;
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS((exports2, module2) => {
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var baseTrim = require__baseTrim();
  var isObject = require_isObject();
  var isSymbol = require_isSymbol();
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  module2.exports = toNumber;
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS((exports2, module2) => {
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  var toNumber = require_toNumber();
  var INFINITY = 1 / 0;
  var MAX_INTEGER = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
  module2.exports = toFinite;
});

// node_modules/lodash/toInteger.js
var require_toInteger = __commonJS((exports2, module2) => {
  function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  var toFinite = require_toFinite();
  module2.exports = toInteger;
});

// node_modules/lodash/_createWrap.js
var require__createWrap = __commonJS((exports2, module2) => {
  function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
    if (!isBindKey && typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var length = partials ? partials.length : 0;
    if (!length) {
      bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
      partials = holders = undefined;
    }
    ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
    arity = arity === undefined ? arity : toInteger(arity);
    length -= holders ? holders.length : 0;
    if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
      var partialsRight = partials, holdersRight = holders;
      partials = holders = undefined;
    }
    var data = isBindKey ? undefined : getData(func);
    var newData = [
      func,
      bitmask,
      thisArg,
      partials,
      holders,
      partialsRight,
      holdersRight,
      argPos,
      ary,
      arity
    ];
    if (data) {
      mergeData(newData, data);
    }
    func = newData[0];
    bitmask = newData[1];
    thisArg = newData[2];
    partials = newData[3];
    holders = newData[4];
    arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
    if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
      bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
    }
    if (!bitmask || bitmask == WRAP_BIND_FLAG) {
      var result = createBind(func, bitmask, thisArg);
    } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
      result = createCurry(func, bitmask, arity);
    } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
      result = createPartial(func, bitmask, thisArg, partials);
    } else {
      result = createHybrid.apply(undefined, newData);
    }
    var setter = data ? baseSetData : setData;
    return setWrapToString(setter(result, newData), func, bitmask);
  }
  var baseSetData = require__baseSetData();
  var createBind = require__createBind();
  var createCurry = require__createCurry();
  var createHybrid = require__createHybrid();
  var createPartial = require__createPartial();
  var getData = require__getData();
  var mergeData = require__mergeData();
  var setData = require__setData();
  var setWrapToString = require__setWrapToString();
  var toInteger = require_toInteger();
  var FUNC_ERROR_TEXT = "Expected a function";
  var WRAP_BIND_FLAG = 1;
  var WRAP_BIND_KEY_FLAG = 2;
  var WRAP_CURRY_FLAG = 8;
  var WRAP_CURRY_RIGHT_FLAG = 16;
  var WRAP_PARTIAL_FLAG = 32;
  var WRAP_PARTIAL_RIGHT_FLAG = 64;
  var nativeMax = Math.max;
  module2.exports = createWrap;
});

// node_modules/lodash/ary.js
var require_ary = __commonJS((exports2, module2) => {
  function ary(func, n, guard) {
    n = guard ? undefined : n;
    n = func && n == null ? func.length : n;
    return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
  }
  var createWrap = require__createWrap();
  var WRAP_ARY_FLAG = 128;
  module2.exports = ary;
});

// node_modules/lodash/_baseAssignValue.js
var require__baseAssignValue = __commonJS((exports2, module2) => {
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    } else {
      object[key] = value;
    }
  }
  var defineProperty = require__defineProperty();
  module2.exports = baseAssignValue;
});

// node_modules/lodash/eq.js
var require_eq = __commonJS((exports2, module2) => {
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  module2.exports = eq;
});

// node_modules/lodash/_assignValue.js
var require__assignValue = __commonJS((exports2, module2) => {
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  var baseAssignValue = require__baseAssignValue();
  var eq = require_eq();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  module2.exports = assignValue;
});

// node_modules/lodash/_copyObject.js
var require__copyObject = __commonJS((exports2, module2) => {
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  var assignValue = require__assignValue();
  var baseAssignValue = require__baseAssignValue();
  module2.exports = copyObject;
});

// node_modules/lodash/_baseTimes.js
var require__baseTimes = __commonJS((exports2, module2) => {
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  module2.exports = baseTimes;
});

// node_modules/lodash/_baseIsArguments.js
var require__baseIsArguments = __commonJS((exports2, module2) => {
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  var baseGetTag = require__baseGetTag();
  var isObjectLike = require_isObjectLike();
  var argsTag = "[object Arguments]";
  module2.exports = baseIsArguments;
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS((exports2, module2) => {
  var baseIsArguments = require__baseIsArguments();
  var isObjectLike = require_isObjectLike();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  module2.exports = isArguments;
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS((exports2, module2) => {
  function stubFalse() {
    return false;
  }
  module2.exports = stubFalse;
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS((exports2, module2) => {
  var root = require__root();
  var stubFalse = require_stubFalse();
  var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
  var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root.Buffer : undefined;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  var isBuffer = nativeIsBuffer || stubFalse;
  module2.exports = isBuffer;
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS((exports2, module2) => {
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var MAX_SAFE_INTEGER = 9007199254740991;
  module2.exports = isLength;
});

// node_modules/lodash/_baseIsTypedArray.js
var require__baseIsTypedArray = __commonJS((exports2, module2) => {
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  var baseGetTag = require__baseGetTag();
  var isLength = require_isLength();
  var isObjectLike = require_isObjectLike();
  var argsTag = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  module2.exports = baseIsTypedArray;
});

// node_modules/lodash/_baseUnary.js
var require__baseUnary = __commonJS((exports2, module2) => {
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  module2.exports = baseUnary;
});

// node_modules/lodash/_nodeUtil.js
var require__nodeUtil = __commonJS((exports2, module2) => {
  var freeGlobal = require__freeGlobal();
  var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
  var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module2.exports = nodeUtil;
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS((exports2, module2) => {
  var baseIsTypedArray = require__baseIsTypedArray();
  var baseUnary = require__baseUnary();
  var nodeUtil = require__nodeUtil();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  module2.exports = isTypedArray;
});

// node_modules/lodash/_arrayLikeKeys.js
var require__arrayLikeKeys = __commonJS((exports2, module2) => {
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var baseTimes = require__baseTimes();
  var isArguments = require_isArguments();
  var isArray = require_isArray();
  var isBuffer = require_isBuffer();
  var isIndex = require__isIndex();
  var isTypedArray = require_isTypedArray();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  module2.exports = arrayLikeKeys;
});

// node_modules/lodash/_isPrototype.js
var require__isPrototype = __commonJS((exports2, module2) => {
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  var objectProto = Object.prototype;
  module2.exports = isPrototype;
});

// node_modules/lodash/_overArg.js
var require__overArg = __commonJS((exports2, module2) => {
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  module2.exports = overArg;
});

// node_modules/lodash/_nativeKeys.js
var require__nativeKeys = __commonJS((exports2, module2) => {
  var overArg = require__overArg();
  var nativeKeys = overArg(Object.keys, Object);
  module2.exports = nativeKeys;
});

// node_modules/lodash/_baseKeys.js
var require__baseKeys = __commonJS((exports2, module2) => {
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var isPrototype = require__isPrototype();
  var nativeKeys = require__nativeKeys();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  module2.exports = baseKeys;
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS((exports2, module2) => {
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  var isFunction = require_isFunction();
  var isLength = require_isLength();
  module2.exports = isArrayLike;
});

// node_modules/lodash/keys.js
var require_keys = __commonJS((exports2, module2) => {
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  var arrayLikeKeys = require__arrayLikeKeys();
  var baseKeys = require__baseKeys();
  var isArrayLike = require_isArrayLike();
  module2.exports = keys;
});

// node_modules/lodash/_baseAssign.js
var require__baseAssign = __commonJS((exports2, module2) => {
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  var copyObject = require__copyObject();
  var keys = require_keys();
  module2.exports = baseAssign;
});

// node_modules/lodash/_listCacheClear.js
var require__listCacheClear = __commonJS((exports2, module2) => {
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  module2.exports = listCacheClear;
});

// node_modules/lodash/_assocIndexOf.js
var require__assocIndexOf = __commonJS((exports2, module2) => {
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var eq = require_eq();
  module2.exports = assocIndexOf;
});

// node_modules/lodash/_listCacheDelete.js
var require__listCacheDelete = __commonJS((exports2, module2) => {
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var assocIndexOf = require__assocIndexOf();
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  module2.exports = listCacheDelete;
});

// node_modules/lodash/_listCacheGet.js
var require__listCacheGet = __commonJS((exports2, module2) => {
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }
  var assocIndexOf = require__assocIndexOf();
  module2.exports = listCacheGet;
});

// node_modules/lodash/_listCacheHas.js
var require__listCacheHas = __commonJS((exports2, module2) => {
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  var assocIndexOf = require__assocIndexOf();
  module2.exports = listCacheHas;
});

// node_modules/lodash/_listCacheSet.js
var require__listCacheSet = __commonJS((exports2, module2) => {
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var assocIndexOf = require__assocIndexOf();
  module2.exports = listCacheSet;
});

// node_modules/lodash/_ListCache.js
var require__ListCache = __commonJS((exports2, module2) => {
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  var listCacheClear = require__listCacheClear();
  var listCacheDelete = require__listCacheDelete();
  var listCacheGet = require__listCacheGet();
  var listCacheHas = require__listCacheHas();
  var listCacheSet = require__listCacheSet();
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  module2.exports = ListCache;
});

// node_modules/lodash/_stackClear.js
var require__stackClear = __commonJS((exports2, module2) => {
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }
  var ListCache = require__ListCache();
  module2.exports = stackClear;
});

// node_modules/lodash/_stackDelete.js
var require__stackDelete = __commonJS((exports2, module2) => {
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  module2.exports = stackDelete;
});

// node_modules/lodash/_stackGet.js
var require__stackGet = __commonJS((exports2, module2) => {
  function stackGet(key) {
    return this.__data__.get(key);
  }
  module2.exports = stackGet;
});

// node_modules/lodash/_stackHas.js
var require__stackHas = __commonJS((exports2, module2) => {
  function stackHas(key) {
    return this.__data__.has(key);
  }
  module2.exports = stackHas;
});

// node_modules/lodash/_Map.js
var require__Map = __commonJS((exports2, module2) => {
  var getNative = require__getNative();
  var root = require__root();
  var Map2 = getNative(root, "Map");
  module2.exports = Map2;
});

// node_modules/lodash/_nativeCreate.js
var require__nativeCreate = __commonJS((exports2, module2) => {
  var getNative = require__getNative();
  var nativeCreate = getNative(Object, "create");
  module2.exports = nativeCreate;
});

// node_modules/lodash/_hashClear.js
var require__hashClear = __commonJS((exports2, module2) => {
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  var nativeCreate = require__nativeCreate();
  module2.exports = hashClear;
});

// node_modules/lodash/_hashDelete.js
var require__hashDelete = __commonJS((exports2, module2) => {
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  module2.exports = hashDelete;
});

// node_modules/lodash/_hashGet.js
var require__hashGet = __commonJS((exports2, module2) => {
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }
  var nativeCreate = require__nativeCreate();
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  module2.exports = hashGet;
});

// node_modules/lodash/_hashHas.js
var require__hashHas = __commonJS((exports2, module2) => {
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }
  var nativeCreate = require__nativeCreate();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  module2.exports = hashHas;
});

// node_modules/lodash/_hashSet.js
var require__hashSet = __commonJS((exports2, module2) => {
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }
  var nativeCreate = require__nativeCreate();
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  module2.exports = hashSet;
});

// node_modules/lodash/_Hash.js
var require__Hash = __commonJS((exports2, module2) => {
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  var hashClear = require__hashClear();
  var hashDelete = require__hashDelete();
  var hashGet = require__hashGet();
  var hashHas = require__hashHas();
  var hashSet = require__hashSet();
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  module2.exports = Hash;
});

// node_modules/lodash/_mapCacheClear.js
var require__mapCacheClear = __commonJS((exports2, module2) => {
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash,
      map: new (Map2 || ListCache),
      string: new Hash
    };
  }
  var Hash = require__Hash();
  var ListCache = require__ListCache();
  var Map2 = require__Map();
  module2.exports = mapCacheClear;
});

// node_modules/lodash/_isKeyable.js
var require__isKeyable = __commonJS((exports2, module2) => {
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  module2.exports = isKeyable;
});

// node_modules/lodash/_getMapData.js
var require__getMapData = __commonJS((exports2, module2) => {
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var isKeyable = require__isKeyable();
  module2.exports = getMapData;
});

// node_modules/lodash/_mapCacheDelete.js
var require__mapCacheDelete = __commonJS((exports2, module2) => {
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var getMapData = require__getMapData();
  module2.exports = mapCacheDelete;
});

// node_modules/lodash/_mapCacheGet.js
var require__mapCacheGet = __commonJS((exports2, module2) => {
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  var getMapData = require__getMapData();
  module2.exports = mapCacheGet;
});

// node_modules/lodash/_mapCacheHas.js
var require__mapCacheHas = __commonJS((exports2, module2) => {
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  var getMapData = require__getMapData();
  module2.exports = mapCacheHas;
});

// node_modules/lodash/_mapCacheSet.js
var require__mapCacheSet = __commonJS((exports2, module2) => {
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var getMapData = require__getMapData();
  module2.exports = mapCacheSet;
});

// node_modules/lodash/_MapCache.js
var require__MapCache = __commonJS((exports2, module2) => {
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  var mapCacheClear = require__mapCacheClear();
  var mapCacheDelete = require__mapCacheDelete();
  var mapCacheGet = require__mapCacheGet();
  var mapCacheHas = require__mapCacheHas();
  var mapCacheSet = require__mapCacheSet();
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  module2.exports = MapCache;
});

// node_modules/lodash/_stackSet.js
var require__stackSet = __commonJS((exports2, module2) => {
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var ListCache = require__ListCache();
  var Map2 = require__Map();
  var MapCache = require__MapCache();
  var LARGE_ARRAY_SIZE = 200;
  module2.exports = stackSet;
});

// node_modules/lodash/_Stack.js
var require__Stack = __commonJS((exports2, module2) => {
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  var ListCache = require__ListCache();
  var stackClear = require__stackClear();
  var stackDelete = require__stackDelete();
  var stackGet = require__stackGet();
  var stackHas = require__stackHas();
  var stackSet = require__stackSet();
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  module2.exports = Stack;
});

// node_modules/lodash/_nativeKeysIn.js
var require__nativeKeysIn = __commonJS((exports2, module2) => {
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  module2.exports = nativeKeysIn;
});

// node_modules/lodash/_baseKeysIn.js
var require__baseKeysIn = __commonJS((exports2, module2) => {
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var isObject = require_isObject();
  var isPrototype = require__isPrototype();
  var nativeKeysIn = require__nativeKeysIn();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  module2.exports = baseKeysIn;
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS((exports2, module2) => {
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var arrayLikeKeys = require__arrayLikeKeys();
  var baseKeysIn = require__baseKeysIn();
  var isArrayLike = require_isArrayLike();
  module2.exports = keysIn;
});

// node_modules/lodash/_baseAssignIn.js
var require__baseAssignIn = __commonJS((exports2, module2) => {
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }
  var copyObject = require__copyObject();
  var keysIn = require_keysIn();
  module2.exports = baseAssignIn;
});

// node_modules/lodash/_cloneBuffer.js
var require__cloneBuffer = __commonJS((exports2, module2) => {
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  var root = require__root();
  var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
  var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root.Buffer : undefined;
  var allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
  module2.exports = cloneBuffer;
});

// node_modules/lodash/_arrayFilter.js
var require__arrayFilter = __commonJS((exports2, module2) => {
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  module2.exports = arrayFilter;
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS((exports2, module2) => {
  function stubArray() {
    return [];
  }
  module2.exports = stubArray;
});

// node_modules/lodash/_getSymbols.js
var require__getSymbols = __commonJS((exports2, module2) => {
  var arrayFilter = require__arrayFilter();
  var stubArray = require_stubArray();
  var objectProto = Object.prototype;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  module2.exports = getSymbols;
});

// node_modules/lodash/_copySymbols.js
var require__copySymbols = __commonJS((exports2, module2) => {
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  var copyObject = require__copyObject();
  var getSymbols = require__getSymbols();
  module2.exports = copySymbols;
});

// node_modules/lodash/_arrayPush.js
var require__arrayPush = __commonJS((exports2, module2) => {
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  module2.exports = arrayPush;
});

// node_modules/lodash/_getPrototype.js
var require__getPrototype = __commonJS((exports2, module2) => {
  var overArg = require__overArg();
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  module2.exports = getPrototype;
});

// node_modules/lodash/_getSymbolsIn.js
var require__getSymbolsIn = __commonJS((exports2, module2) => {
  var arrayPush = require__arrayPush();
  var getPrototype = require__getPrototype();
  var getSymbols = require__getSymbols();
  var stubArray = require_stubArray();
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };
  module2.exports = getSymbolsIn;
});

// node_modules/lodash/_copySymbolsIn.js
var require__copySymbolsIn = __commonJS((exports2, module2) => {
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }
  var copyObject = require__copyObject();
  var getSymbolsIn = require__getSymbolsIn();
  module2.exports = copySymbolsIn;
});

// node_modules/lodash/_baseGetAllKeys.js
var require__baseGetAllKeys = __commonJS((exports2, module2) => {
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  var arrayPush = require__arrayPush();
  var isArray = require_isArray();
  module2.exports = baseGetAllKeys;
});

// node_modules/lodash/_getAllKeys.js
var require__getAllKeys = __commonJS((exports2, module2) => {
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  var baseGetAllKeys = require__baseGetAllKeys();
  var getSymbols = require__getSymbols();
  var keys = require_keys();
  module2.exports = getAllKeys;
});

// node_modules/lodash/_getAllKeysIn.js
var require__getAllKeysIn = __commonJS((exports2, module2) => {
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }
  var baseGetAllKeys = require__baseGetAllKeys();
  var getSymbolsIn = require__getSymbolsIn();
  var keysIn = require_keysIn();
  module2.exports = getAllKeysIn;
});

// node_modules/lodash/_DataView.js
var require__DataView = __commonJS((exports2, module2) => {
  var getNative = require__getNative();
  var root = require__root();
  var DataView = getNative(root, "DataView");
  module2.exports = DataView;
});

// node_modules/lodash/_Promise.js
var require__Promise = __commonJS((exports2, module2) => {
  var getNative = require__getNative();
  var root = require__root();
  var Promise2 = getNative(root, "Promise");
  module2.exports = Promise2;
});

// node_modules/lodash/_Set.js
var require__Set = __commonJS((exports2, module2) => {
  var getNative = require__getNative();
  var root = require__root();
  var Set2 = getNative(root, "Set");
  module2.exports = Set2;
});

// node_modules/lodash/_getTag.js
var require__getTag = __commonJS((exports2, module2) => {
  var DataView = require__DataView();
  var Map2 = require__Map();
  var Promise2 = require__Promise();
  var Set2 = require__Set();
  var WeakMap2 = require__WeakMap();
  var baseGetTag = require__baseGetTag();
  var toSource = require__toSource();
  var mapTag = "[object Map]";
  var objectTag = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag = "[object Set]";
  var weakMapTag = "[object WeakMap]";
  var dataViewTag = "[object DataView]";
  var dataViewCtorString = toSource(DataView);
  var mapCtorString = toSource(Map2);
  var promiseCtorString = toSource(Promise2);
  var setCtorString = toSource(Set2);
  var weakMapCtorString = toSource(WeakMap2);
  var getTag = baseGetTag;
  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2) != setTag || WeakMap2 && getTag(new WeakMap2) != weakMapTag) {
    getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  module2.exports = getTag;
});

// node_modules/lodash/_initCloneArray.js
var require__initCloneArray = __commonJS((exports2, module2) => {
  function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  module2.exports = initCloneArray;
});

// node_modules/lodash/_Uint8Array.js
var require__Uint8Array = __commonJS((exports2, module2) => {
  var root = require__root();
  var Uint8Array = root.Uint8Array;
  module2.exports = Uint8Array;
});

// node_modules/lodash/_cloneArrayBuffer.js
var require__cloneArrayBuffer = __commonJS((exports2, module2) => {
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  var Uint8Array = require__Uint8Array();
  module2.exports = cloneArrayBuffer;
});

// node_modules/lodash/_cloneDataView.js
var require__cloneDataView = __commonJS((exports2, module2) => {
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  var cloneArrayBuffer = require__cloneArrayBuffer();
  module2.exports = cloneDataView;
});

// node_modules/lodash/_cloneRegExp.js
var require__cloneRegExp = __commonJS((exports2, module2) => {
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  var reFlags = /\w*$/;
  module2.exports = cloneRegExp;
});

// node_modules/lodash/_cloneSymbol.js
var require__cloneSymbol = __commonJS((exports2, module2) => {
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  var Symbol2 = require__Symbol();
  var symbolProto = Symbol2 ? Symbol2.prototype : undefined;
  var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
  module2.exports = cloneSymbol;
});

// node_modules/lodash/_cloneTypedArray.js
var require__cloneTypedArray = __commonJS((exports2, module2) => {
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var cloneArrayBuffer = require__cloneArrayBuffer();
  module2.exports = cloneTypedArray;
});

// node_modules/lodash/_initCloneByTag.js
var require__initCloneByTag = __commonJS((exports2, module2) => {
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);
      case boolTag:
      case dateTag:
        return new Ctor(+object);
      case dataViewTag:
        return cloneDataView(object, isDeep);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);
      case mapTag:
        return new Ctor;
      case numberTag:
      case stringTag:
        return new Ctor(object);
      case regexpTag:
        return cloneRegExp(object);
      case setTag:
        return new Ctor;
      case symbolTag:
        return cloneSymbol(object);
    }
  }
  var cloneArrayBuffer = require__cloneArrayBuffer();
  var cloneDataView = require__cloneDataView();
  var cloneRegExp = require__cloneRegExp();
  var cloneSymbol = require__cloneSymbol();
  var cloneTypedArray = require__cloneTypedArray();
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  module2.exports = initCloneByTag;
});

// node_modules/lodash/_initCloneObject.js
var require__initCloneObject = __commonJS((exports2, module2) => {
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  var baseCreate = require__baseCreate();
  var getPrototype = require__getPrototype();
  var isPrototype = require__isPrototype();
  module2.exports = initCloneObject;
});

// node_modules/lodash/_baseIsMap.js
var require__baseIsMap = __commonJS((exports2, module2) => {
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }
  var getTag = require__getTag();
  var isObjectLike = require_isObjectLike();
  var mapTag = "[object Map]";
  module2.exports = baseIsMap;
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS((exports2, module2) => {
  var baseIsMap = require__baseIsMap();
  var baseUnary = require__baseUnary();
  var nodeUtil = require__nodeUtil();
  var nodeIsMap = nodeUtil && nodeUtil.isMap;
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
  module2.exports = isMap;
});

// node_modules/lodash/_baseIsSet.js
var require__baseIsSet = __commonJS((exports2, module2) => {
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
  }
  var getTag = require__getTag();
  var isObjectLike = require_isObjectLike();
  var setTag = "[object Set]";
  module2.exports = baseIsSet;
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS((exports2, module2) => {
  var baseIsSet = require__baseIsSet();
  var baseUnary = require__baseUnary();
  var nodeUtil = require__nodeUtil();
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  module2.exports = isSet;
});

// node_modules/lodash/_baseClone.js
var require__baseClone = __commonJS((exports2, module2) => {
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function(subValue, key2) {
        result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
  }
  var Stack = require__Stack();
  var arrayEach = require__arrayEach();
  var assignValue = require__assignValue();
  var baseAssign = require__baseAssign();
  var baseAssignIn = require__baseAssignIn();
  var cloneBuffer = require__cloneBuffer();
  var copyArray = require__copyArray();
  var copySymbols = require__copySymbols();
  var copySymbolsIn = require__copySymbolsIn();
  var getAllKeys = require__getAllKeys();
  var getAllKeysIn = require__getAllKeysIn();
  var getTag = require__getTag();
  var initCloneArray = require__initCloneArray();
  var initCloneByTag = require__initCloneByTag();
  var initCloneObject = require__initCloneObject();
  var isArray = require_isArray();
  var isBuffer = require_isBuffer();
  var isMap = require_isMap();
  var isObject = require_isObject();
  var isSet = require_isSet();
  var keys = require_keys();
  var keysIn = require_keysIn();
  var CLONE_DEEP_FLAG = 1;
  var CLONE_FLAT_FLAG = 2;
  var CLONE_SYMBOLS_FLAG = 4;
  var argsTag = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var symbolTag = "[object Symbol]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  module2.exports = baseClone;
});

// node_modules/lodash/clone.js
var require_clone = __commonJS((exports2, module2) => {
  function clone(value) {
    return baseClone(value, CLONE_SYMBOLS_FLAG);
  }
  var baseClone = require__baseClone();
  var CLONE_SYMBOLS_FLAG = 4;
  module2.exports = clone;
});

// node_modules/lodash/curry.js
var require_curry = __commonJS((exports2, module2) => {
  function curry(func, arity, guard) {
    arity = guard ? undefined : arity;
    var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
    result.placeholder = curry.placeholder;
    return result;
  }
  var createWrap = require__createWrap();
  var WRAP_CURRY_FLAG = 8;
  curry.placeholder = {};
  module2.exports = curry;
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS((exports2, module2) => {
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var baseGetTag = require__baseGetTag();
  var getPrototype = require__getPrototype();
  var isObjectLike = require_isObjectLike();
  var objectTag = "[object Object]";
  var funcProto = Function.prototype;
  var objectProto = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  module2.exports = isPlainObject;
});

// node_modules/lodash/isError.js
var require_isError = __commonJS((exports2, module2) => {
  function isError(value) {
    if (!isObjectLike(value)) {
      return false;
    }
    var tag = baseGetTag(value);
    return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
  }
  var baseGetTag = require__baseGetTag();
  var isObjectLike = require_isObjectLike();
  var isPlainObject = require_isPlainObject();
  var domExcTag = "[object DOMException]";
  var errorTag = "[object Error]";
  module2.exports = isError;
});

// node_modules/lodash/isWeakMap.js
var require_isWeakMap = __commonJS((exports2, module2) => {
  function isWeakMap(value) {
    return isObjectLike(value) && getTag(value) == weakMapTag;
  }
  var getTag = require__getTag();
  var isObjectLike = require_isObjectLike();
  var weakMapTag = "[object WeakMap]";
  module2.exports = isWeakMap;
});

// node_modules/lodash/_setCacheAdd.js
var require__setCacheAdd = __commonJS((exports2, module2) => {
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  module2.exports = setCacheAdd;
});

// node_modules/lodash/_setCacheHas.js
var require__setCacheHas = __commonJS((exports2, module2) => {
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  module2.exports = setCacheHas;
});

// node_modules/lodash/_SetCache.js
var require__SetCache = __commonJS((exports2, module2) => {
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }
  var MapCache = require__MapCache();
  var setCacheAdd = require__setCacheAdd();
  var setCacheHas = require__setCacheHas();
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  module2.exports = SetCache;
});

// node_modules/lodash/_arraySome.js
var require__arraySome = __commonJS((exports2, module2) => {
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  module2.exports = arraySome;
});

// node_modules/lodash/_cacheHas.js
var require__cacheHas = __commonJS((exports2, module2) => {
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  module2.exports = cacheHas;
});

// node_modules/lodash/_equalArrays.js
var require__equalArrays = __commonJS((exports2, module2) => {
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  var SetCache = require__SetCache();
  var arraySome = require__arraySome();
  var cacheHas = require__cacheHas();
  var COMPARE_PARTIAL_FLAG = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  module2.exports = equalArrays;
});

// node_modules/lodash/_mapToArray.js
var require__mapToArray = __commonJS((exports2, module2) => {
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  module2.exports = mapToArray;
});

// node_modules/lodash/_setToArray.js
var require__setToArray = __commonJS((exports2, module2) => {
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  module2.exports = setToArray;
});

// node_modules/lodash/_equalByTag.js
var require__equalByTag = __commonJS((exports2, module2) => {
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  var Symbol2 = require__Symbol();
  var Uint8Array = require__Uint8Array();
  var eq = require_eq();
  var equalArrays = require__equalArrays();
  var mapToArray = require__mapToArray();
  var setToArray = require__setToArray();
  var COMPARE_PARTIAL_FLAG = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var symbolProto = Symbol2 ? Symbol2.prototype : undefined;
  var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
  module2.exports = equalByTag;
});

// node_modules/lodash/_equalObjects.js
var require__equalObjects = __commonJS((exports2, module2) => {
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && (("constructor" in object) && ("constructor" in other)) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var getAllKeys = require__getAllKeys();
  var COMPARE_PARTIAL_FLAG = 1;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  module2.exports = equalObjects;
});

// node_modules/lodash/_baseIsEqualDeep.js
var require__baseIsEqualDeep = __commonJS((exports2, module2) => {
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack);
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack);
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  var Stack = require__Stack();
  var equalArrays = require__equalArrays();
  var equalByTag = require__equalByTag();
  var equalObjects = require__equalObjects();
  var getTag = require__getTag();
  var isArray = require_isArray();
  var isBuffer = require_isBuffer();
  var isTypedArray = require_isTypedArray();
  var COMPARE_PARTIAL_FLAG = 1;
  var argsTag = "[object Arguments]";
  var arrayTag = "[object Array]";
  var objectTag = "[object Object]";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  module2.exports = baseIsEqualDeep;
});

// node_modules/lodash/_baseIsEqual.js
var require__baseIsEqual = __commonJS((exports2, module2) => {
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  var baseIsEqualDeep = require__baseIsEqualDeep();
  var isObjectLike = require_isObjectLike();
  module2.exports = baseIsEqual;
});

// node_modules/lodash/_baseIsMatch.js
var require__baseIsMatch = __commonJS((exports2, module2) => {
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0], objValue = object[key], srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack;
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  var Stack = require__Stack();
  var baseIsEqual = require__baseIsEqual();
  var COMPARE_PARTIAL_FLAG = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  module2.exports = baseIsMatch;
});

// node_modules/lodash/_isStrictComparable.js
var require__isStrictComparable = __commonJS((exports2, module2) => {
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  var isObject = require_isObject();
  module2.exports = isStrictComparable;
});

// node_modules/lodash/_getMatchData.js
var require__getMatchData = __commonJS((exports2, module2) => {
  function getMatchData(object) {
    var result = keys(object), length = result.length;
    while (length--) {
      var key = result[length], value = object[key];
      result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
  }
  var isStrictComparable = require__isStrictComparable();
  var keys = require_keys();
  module2.exports = getMatchData;
});

// node_modules/lodash/_matchesStrictComparable.js
var require__matchesStrictComparable = __commonJS((exports2, module2) => {
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== undefined || (key in Object(object)));
    };
  }
  module2.exports = matchesStrictComparable;
});

// node_modules/lodash/_baseMatches.js
var require__baseMatches = __commonJS((exports2, module2) => {
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }
  var baseIsMatch = require__baseIsMatch();
  var getMatchData = require__getMatchData();
  var matchesStrictComparable = require__matchesStrictComparable();
  module2.exports = baseMatches;
});

// node_modules/lodash/_isKey.js
var require__isKey = __commonJS((exports2, module2) => {
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var isArray = require_isArray();
  var isSymbol = require_isSymbol();
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var reIsPlainProp = /^\w*$/;
  module2.exports = isKey;
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS((exports2, module2) => {
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }
  var MapCache = require__MapCache();
  var FUNC_ERROR_TEXT = "Expected a function";
  memoize.Cache = MapCache;
  module2.exports = memoize;
});

// node_modules/lodash/_memoizeCapped.js
var require__memoizeCapped = __commonJS((exports2, module2) => {
  function memoizeCapped(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var memoize = require_memoize();
  var MAX_MEMOIZE_SIZE = 500;
  module2.exports = memoizeCapped;
});

// node_modules/lodash/_stringToPath.js
var require__stringToPath = __commonJS((exports2, module2) => {
  var memoizeCapped = require__memoizeCapped();
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  module2.exports = stringToPath;
});

// node_modules/lodash/_arrayMap.js
var require__arrayMap = __commonJS((exports2, module2) => {
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  module2.exports = arrayMap;
});

// node_modules/lodash/_baseToString.js
var require__baseToString = __commonJS((exports2, module2) => {
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray(value)) {
      return arrayMap(value, baseToString) + "";
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var Symbol2 = require__Symbol();
  var arrayMap = require__arrayMap();
  var isArray = require_isArray();
  var isSymbol = require_isSymbol();
  var INFINITY = 1 / 0;
  var symbolProto = Symbol2 ? Symbol2.prototype : undefined;
  var symbolToString = symbolProto ? symbolProto.toString : undefined;
  module2.exports = baseToString;
});

// node_modules/lodash/toString.js
var require_toString = __commonJS((exports2, module2) => {
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  var baseToString = require__baseToString();
  module2.exports = toString;
});

// node_modules/lodash/_castPath.js
var require__castPath = __commonJS((exports2, module2) => {
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }
  var isArray = require_isArray();
  var isKey = require__isKey();
  var stringToPath = require__stringToPath();
  var toString = require_toString();
  module2.exports = castPath;
});

// node_modules/lodash/_toKey.js
var require__toKey = __commonJS((exports2, module2) => {
  function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var isSymbol = require_isSymbol();
  var INFINITY = 1 / 0;
  module2.exports = toKey;
});

// node_modules/lodash/_baseGet.js
var require__baseGet = __commonJS((exports2, module2) => {
  function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return index && index == length ? object : undefined;
  }
  var castPath = require__castPath();
  var toKey = require__toKey();
  module2.exports = baseGet;
});

// node_modules/lodash/get.js
var require_get = __commonJS((exports2, module2) => {
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }
  var baseGet = require__baseGet();
  module2.exports = get;
});

// node_modules/lodash/_baseHasIn.js
var require__baseHasIn = __commonJS((exports2, module2) => {
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }
  module2.exports = baseHasIn;
});

// node_modules/lodash/_hasPath.js
var require__hasPath = __commonJS((exports2, module2) => {
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
  }
  var castPath = require__castPath();
  var isArguments = require_isArguments();
  var isArray = require_isArray();
  var isIndex = require__isIndex();
  var isLength = require_isLength();
  var toKey = require__toKey();
  module2.exports = hasPath;
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS((exports2, module2) => {
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }
  var baseHasIn = require__baseHasIn();
  var hasPath = require__hasPath();
  module2.exports = hasIn;
});

// node_modules/lodash/_baseMatchesProperty.js
var require__baseMatchesProperty = __commonJS((exports2, module2) => {
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }
  var baseIsEqual = require__baseIsEqual();
  var get = require_get();
  var hasIn = require_hasIn();
  var isKey = require__isKey();
  var isStrictComparable = require__isStrictComparable();
  var matchesStrictComparable = require__matchesStrictComparable();
  var toKey = require__toKey();
  var COMPARE_PARTIAL_FLAG = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  module2.exports = baseMatchesProperty;
});

// node_modules/lodash/_baseProperty.js
var require__baseProperty = __commonJS((exports2, module2) => {
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  module2.exports = baseProperty;
});

// node_modules/lodash/_basePropertyDeep.js
var require__basePropertyDeep = __commonJS((exports2, module2) => {
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }
  var baseGet = require__baseGet();
  module2.exports = basePropertyDeep;
});

// node_modules/lodash/property.js
var require_property = __commonJS((exports2, module2) => {
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }
  var baseProperty = require__baseProperty();
  var basePropertyDeep = require__basePropertyDeep();
  var isKey = require__isKey();
  var toKey = require__toKey();
  module2.exports = property;
});

// node_modules/lodash/_baseIteratee.js
var require__baseIteratee = __commonJS((exports2, module2) => {
  function baseIteratee(value) {
    if (typeof value == "function") {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == "object") {
      return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
  }
  var baseMatches = require__baseMatches();
  var baseMatchesProperty = require__baseMatchesProperty();
  var identity = require_identity();
  var isArray = require_isArray();
  var property = require_property();
  module2.exports = baseIteratee;
});

// node_modules/lodash/iteratee.js
var require_iteratee = __commonJS((exports2, module2) => {
  function iteratee(func) {
    return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
  }
  var baseClone = require__baseClone();
  var baseIteratee = require__baseIteratee();
  var CLONE_DEEP_FLAG = 1;
  module2.exports = iteratee;
});

// node_modules/lodash/_isFlattenable.js
var require__isFlattenable = __commonJS((exports2, module2) => {
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  var Symbol2 = require__Symbol();
  var isArguments = require_isArguments();
  var isArray = require_isArray();
  var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined;
  module2.exports = isFlattenable;
});

// node_modules/lodash/_baseFlatten.js
var require__baseFlatten = __commonJS((exports2, module2) => {
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  var arrayPush = require__arrayPush();
  var isFlattenable = require__isFlattenable();
  module2.exports = baseFlatten;
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS((exports2, module2) => {
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }
  var baseFlatten = require__baseFlatten();
  module2.exports = flatten;
});

// node_modules/lodash/_overRest.js
var require__overRest = __commonJS((exports2, module2) => {
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  var apply = require__apply();
  var nativeMax = Math.max;
  module2.exports = overRest;
});

// node_modules/lodash/_flatRest.js
var require__flatRest = __commonJS((exports2, module2) => {
  function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + "");
  }
  var flatten = require_flatten();
  var overRest = require__overRest();
  var setToString = require__setToString();
  module2.exports = flatRest;
});

// node_modules/lodash/rearg.js
var require_rearg = __commonJS((exports2, module2) => {
  var createWrap = require__createWrap();
  var flatRest = require__flatRest();
  var WRAP_REARG_FLAG = 256;
  var rearg = flatRest(function(func, indexes) {
    return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
  });
  module2.exports = rearg;
});

// node_modules/lodash/toPath.js
var require_toPath = __commonJS((exports2, module2) => {
  function toPath(value) {
    if (isArray(value)) {
      return arrayMap(value, toKey);
    }
    return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
  }
  var arrayMap = require__arrayMap();
  var copyArray = require__copyArray();
  var isArray = require_isArray();
  var isSymbol = require_isSymbol();
  var stringToPath = require__stringToPath();
  var toKey = require__toKey();
  var toString = require_toString();
  module2.exports = toPath;
});

// node_modules/lodash/fp/_util.js
var require__util = __commonJS((exports2, module2) => {
  module2.exports = {
    ary: require_ary(),
    assign: require__baseAssign(),
    clone: require_clone(),
    curry: require_curry(),
    forEach: require__arrayEach(),
    isArray: require_isArray(),
    isError: require_isError(),
    isFunction: require_isFunction(),
    isWeakMap: require_isWeakMap(),
    iteratee: require_iteratee(),
    keys: require__baseKeys(),
    rearg: require_rearg(),
    toInteger: require_toInteger(),
    toPath: require_toPath()
  };
});

// node_modules/lodash/fp/convert.js
var require_convert = __commonJS((exports2, module2) => {
  function convert(name, func, options) {
    return baseConvert(util, name, func, options);
  }
  var baseConvert = require__baseConvert();
  var util = require__util();
  module2.exports = convert;
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS((exports2, module2) => {
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  var baseIsEqual = require__baseIsEqual();
  module2.exports = isEqual;
});

// node_modules/lodash/fp/isEqual.js
var require_isEqual2 = __commonJS((exports2, module2) => {
  var convert = require_convert();
  var func = convert("isEqual", require_isEqual());
  func.placeholder = require_placeholder();
  module2.exports = func;
});

// index.ts
var exports_react_hooks = {};
__export(exports_react_hooks, {
  useWindowSize: () => useWindowSize,
  useUpdated: () => useUpdated,
  useUnmounted: () => useUnmounted,
  useToggle: () => useToggle,
  useTimeout: () => useTimeout,
  useStateValidation: () => useStateValidation,
  useStateHistory: () => useStateHistory,
  useSize: () => useSize,
  useSessionStorage: () => useSessionStorage,
  useScript: () => useScript,
  useRenderCount: () => useRenderCount,
  usePrevious: () => usePrevious,
  usePermission: () => usePermission,
  useOrientation: () => useOrientation,
  useOnlineStatus: () => useOnlineStatus,
  useOnScreen: () => useOnScreen,
  useMouse: () => useMouse,
  useMounted: () => useMounted,
  useMediaQuery: () => useMediaQuery,
  useMediaDevices: () => useMediaDevices,
  useLongPress: () => useLongPress,
  useLockScroll: () => useLockScroll,
  useLocalStorage: () => useLocalStorage,
  useKeyPress: () => useKeyPress,
  useImageLoad: () => useImageLoad,
  useIdle: () => useIdle,
  useHover: () => useHover,
  useGlobalState: () => useGlobalState,
  useGeolocation: () => useGeolocation,
  useForm: () => useForm,
  useFlipGSAP: () => useFlipGSAP,
  useFetch: () => useFetch,
  useEventListener: () => useEventListener,
  useDragDrop: () => useDragDrop,
  useDocumentTitle: () => useDocumentTitle,
  useDeepEffect: () => useDeepEffect,
  useDebug: () => useDebug,
  useDebounce: () => useDebounce,
  useDarkMode: () => useDarkMode,
  useCookie: () => useCookie,
  useClipboard: () => useClipboard,
  useClickOutside: () => useClickOutside,
  useArray: () => useArray
});
module.exports = __toCommonJS(exports_react_hooks);

// hooks/useArray.tsx
var import_react = __toESM(require_react());
function useArray(defaultValue) {
  const [array, setArray] = import_react.useState(defaultValue);
  function push(element) {
    setArray((a) => [...a, element]);
  }
  function filter(callback) {
    setArray((a) => a.filter(callback));
  }
  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length)
    ]);
  }
  function remove(index) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }
  function clear() {
    setArray([]);
  }
  return { array, set: setArray, push, filter, update, remove, clear };
}

// hooks/useEventListener.tsx
var import_react2 = __toESM(require_react());
function useEventListener(eventType, callback, element = window) {
  const callbackRef = import_react2.useRef(callback);
  import_react2.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  import_react2.useEffect(() => {
    const targetElement = element && "current" in element ? element.current : element;
    if (!targetElement)
      return;
    const handler = (e) => callbackRef.current(e);
    targetElement.addEventListener(eventType, handler);
    return () => targetElement.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

// hooks/useClickOutside.tsx
function useClickOutside(ref, callback) {
  useEventListener("click", (e) => {
    if (ref.current == null || ref.current.contains(e.target))
      return;
    callback(e);
  }, document);
}

// hooks/useClipboard.tsx
var import_react3 = __toESM(require_react());
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard());
function useClipboard() {
  const [value, setValue] = import_react3.useState(null);
  const [success, setSuccess] = import_react3.useState(null);
  const copyToClipboard = (text, options) => {
    const result = import_copy_to_clipboard.default(text, options);
    if (result)
      setValue(text);
    setSuccess(result);
  };
  return [copyToClipboard, { value, success }];
}

// hooks/useCookie.tsx
var import_react4 = __toESM(require_react());

// node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i = 1;i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 86400000);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
  }
  function get(name) {
    if (typeof document === "undefined" || arguments.length && !name) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0;i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);
        if (name === found) {
          break;
        }
      } catch (e) {
      }
    }
    return name ? jar[name] : jar;
  }
  return Object.create({
    set,
    get,
    remove: function(name, attributes) {
      set(name, "", assign({}, attributes, {
        expires: -1
      }));
    },
    withAttributes: function(attributes) {
      return init(this.converter, assign({}, this.attributes, attributes));
    },
    withConverter: function(converter2) {
      return init(assign({}, this.converter, converter2), this.attributes);
    }
  }, {
    attributes: { value: Object.freeze(defaultAttributes) },
    converter: { value: Object.freeze(converter) }
  });
}
/*! js-cookie v3.0.5 | MIT */
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
var api = init(defaultConverter, { path: "/" });

// hooks/useCookie.tsx
function useCookie(name, defaultValue = "") {
  const [value, setValue] = import_react4.useState(() => {
    const cookie = api.get(name);
    if (cookie)
      return cookie;
    api.set(name, defaultValue);
    return defaultValue;
  });
  const updateCookie = import_react4.useCallback((newValue, options) => {
    api.set(name, newValue, options);
    setValue(newValue);
  }, [name]);
  const deleteCookie = import_react4.useCallback(() => {
    api.remove(name);
    setValue(null);
  }, [name]);
  return [value, updateCookie, deleteCookie];
}

// hooks/useDarkMode.tsx
var import_react7 = __toESM(require_react());

// hooks/useMediaQuery.tsx
var import_react5 = __toESM(require_react());
function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = import_react5.useState(false);
  const [mediaQueryList, setMediaQueryList] = import_react5.useState(null);
  import_react5.useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);
  useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryList);
  return isMatch;
}

// hooks/useStorage.tsx
var import_react6 = __toESM(require_react());
function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = import_react6.useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null)
      return JSON.parse(jsonValue);
    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });
  import_react6.useEffect(() => {
    if (value === undefined)
      return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);
  const remove = import_react6.useCallback(() => {
    setValue(undefined);
  }, []);
  return [value, setValue, remove];
}
function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}
function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

// hooks/useDarkMode.tsx
function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;
  import_react7.useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);
  return [enabled, setDarkMode];
}

// hooks/useDebounce.tsx
var import_react9 = __toESM(require_react());

// hooks/useTimeout.tsx
var import_react8 = __toESM(require_react());
function useTimeout(callback, delay) {
  const callbackRef = import_react8.useRef(callback);
  const timeoutRef = import_react8.useRef(null);
  import_react8.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  const set = import_react8.useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);
  const clear = import_react8.useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);
  import_react8.useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);
  const reset = import_react8.useCallback(() => {
    clear();
    set();
  }, [clear, set]);
  return { reset, clear };
}

// hooks/useDebounce.tsx
function useDebounce(callback, delay = 1000, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  import_react9.useEffect(reset, [...dependencies, reset]);
  import_react9.useEffect(clear, []);
}

// hooks/useDebug.tsx
var import_react11 = __toESM(require_react());

// hooks/useRenderCount.tsx
var import_react10 = __toESM(require_react());
function useRenderCount() {
  const count = import_react10.useRef(1);
  import_react10.useEffect(() => {
    count.current++;
  });
  return count.current;
}

// hooks/useDebug.tsx
function useDebug(componentName, props) {
  const count = useRenderCount();
  const changedProps = import_react11.useRef({});
  const previousProps = import_react11.useRef(props);
  const lastRenderTimestamp = import_react11.useRef(Date.now());
  const propKeys = Object.keys({ ...props, ...previousProps });
  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key])
      return obj;
    return {
      ...obj,
      [key]: {
        previous: previousProps.current[key],
        current: props[key]
      }
    };
  }, {});
  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
    lastRenderTimestamp: lastRenderTimestamp.current
  };
  import_react11.useEffect(() => {
    previousProps.current = props;
    lastRenderTimestamp.current = Date.now();
    console.log("[debug-info]", componentName, info);
  });
  return info;
}

// hooks/useDeepEffect.tsx
var import_react12 = __toESM(require_react());
var import_isEqual = __toESM(require_isEqual2());
function useDeepEffect(callback, dependencies) {
  const currentDependenciesRef = import_react12.useRef([]);
  if (!import_isEqual.default(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }
  import_react12.useEffect(callback, [currentDependenciesRef.current]);
}

// hooks/useDocumentTitle.tsx
var import_react13 = __toESM(require_react());
function useDocumentTitle(title, revertOnUnmount = true) {
  const defaultTitle = typeof document !== "undefined" ? document.title : "";
  import_react13.useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = title;
    }
    return () => {
      if (revertOnUnmount && typeof document !== "undefined") {
        document.title = defaultTitle;
      }
    };
  }, [title, revertOnUnmount, defaultTitle]);
}

// hooks/useDragDrop.tsx
var import_react14 = __toESM(require_react());
function useDragDrop(onDrop) {
  const [state, setState] = import_react14.useState({
    isDragging: false,
    isOver: false,
    draggedItemId: null,
    overDropId: null
  });
  const handleDragStart = import_react14.useCallback((e, dragId) => {
    e.dataTransfer.setData("text/plain", dragId);
    e.dataTransfer.effectAllowed = "move";
    setState({
      isDragging: true,
      isOver: false,
      draggedItemId: dragId,
      overDropId: null
    });
  }, []);
  const handleDragOver = import_react14.useCallback((e, dropId) => {
    e.preventDefault();
    if (state.overDropId !== dropId) {
      setState((s) => ({ ...s, isOver: true, overDropId: dropId }));
    }
  }, [state.overDropId]);
  const handleDragEnter = import_react14.useCallback((e, dropId) => {
    e.preventDefault();
    setState((s) => ({ ...s, isOver: true, overDropId: dropId }));
  }, []);
  const handleDragLeave = import_react14.useCallback((e, dropId) => {
    e.preventDefault();
    if (state.overDropId === dropId) {
      setState((s) => ({ ...s, isOver: false, overDropId: null }));
    }
  }, [state.overDropId]);
  const handleDrop = import_react14.useCallback((e, dropId) => {
    e.preventDefault();
    const dragId = e.dataTransfer.getData("text/plain");
    setState({
      isDragging: false,
      isOver: false,
      draggedItemId: dragId,
      overDropId: dropId
    });
    onDrop(dragId, dropId);
  }, [onDrop]);
  return {
    state,
    bindDrag: (dragId) => ({
      draggable: true,
      onDragStart: (e) => handleDragStart(e, dragId)
    }),
    bindDrop: (dropId) => ({
      onDragOver: (e) => handleDragOver(e, dropId),
      onDragEnter: (e) => handleDragEnter(e, dropId),
      onDragLeave: (e) => handleDragLeave(e, dropId),
      onDrop: (e) => handleDrop(e, dropId)
    })
  };
}

// hooks/useAsync.tsx
var import_react15 = __toESM(require_react());
function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = import_react15.useState(true);
  const [error, setError] = import_react15.useState();
  const [value, setValue] = import_react15.useState();
  const callbackMemoized = import_react15.useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback().then(setValue).catch(setError).finally(() => setLoading(false));
  }, dependencies);
  import_react15.useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);
  return { loading, error, value };
}

// hooks/useFetch.tsx
function useFetch(url, options = {}, dependencies = []) {
  return useAsync(async () => {
    const res = await fetch(url, { ...DEFAULT_OPTIONS, ...options });
    const data = await res.json();
    if (res.ok)
      return data;
    throw data;
  }, dependencies);
}
var DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" }
};

// hooks/useFlipGSAP.tsx
var import_react17 = __toESM(require_react());

// node_modules/@gsap/react/src/index.js
var import_react16 = __toESM(require_react());

// node_modules/gsap/gsap-core.js
function _assertThisInitialized(self2) {
  if (self2 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
};
var _defaults = {
  duration: 0.5,
  overwrite: false,
  delay: 0
};
var _suppressOverwrites;
var _reverting;
var _context;
var _bigNum = 1e8;
var _tinyNum = 1 / _bigNum;
var _2PI = Math.PI * 2;
var _HALF_PI = _2PI / 4;
var _gsID = 0;
var _sqrt = Math.sqrt;
var _cos = Math.cos;
var _sin = Math.sin;
var _isString = function _isString2(value) {
  return typeof value === "string";
};
var _isFunction = function _isFunction2(value) {
  return typeof value === "function";
};
var _isNumber = function _isNumber2(value) {
  return typeof value === "number";
};
var _isUndefined = function _isUndefined2(value) {
  return typeof value === "undefined";
};
var _isObject = function _isObject2(value) {
  return typeof value === "object";
};
var _isNotFalse = function _isNotFalse2(value) {
  return value !== false;
};
var _windowExists = function _windowExists2() {
  return typeof window !== "undefined";
};
var _isFuncOrString = function _isFuncOrString2(value) {
  return _isFunction(value) || _isString(value);
};
var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
};
var _isArray = Array.isArray;
var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
var _relExp = /[+-]=-?[.\d]+/;
var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
var _globalTimeline;
var _win;
var _coreInitted;
var _doc;
var _globals = {};
var _installScope = {};
var _coreReady;
var _install = function _install2(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
};
var _missingPlugin = function _missingPlugin2(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
};
var _warn = function _warn2(message, suppress) {
  return !suppress && console.warn(message);
};
var _addGlobal = function _addGlobal2(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
};
var _emptyFunc = function _emptyFunc2() {
  return 0;
};
var _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
};
var _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
};
var _revertConfig = {
  suppressEvents: true
};
var _reservedProps = {};
var _lazyTweens = [];
var _lazyLookup = {};
var _lastRenderedFrame;
var _plugins = {};
var _effects = {};
var _nextGCFrame = 30;
var _harnessPlugins = [];
var _callbackNames = "";
var _harness = function _harness2(targets) {
  var target = targets[0], harnessPlugin, i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);
  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    i = _harnessPlugins.length;
    while (i-- && !_harnessPlugins[i].targetTest(target)) {
    }
    harnessPlugin = _harnessPlugins[i];
  }
  i = targets.length;
  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }
  return targets;
};
var _getCache = function _getCache2(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
};
var _getProperty = function _getProperty2(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
};
var _forEachName = function _forEachName2(names, func) {
  return (names = names.split(",")).forEach(func) || names;
};
var _round = function _round2(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
};
var _roundPrecise = function _roundPrecise2(value) {
  return Math.round(value * 1e7) / 1e7 || 0;
};
var _parseRelative = function _parseRelative2(start, value) {
  var operator = value.charAt(0), end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
};
var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
  var l = toFind.length, i = 0;
  for (;toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
  }
  return i < l;
};
var _lazyRender = function _lazyRender2() {
  var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
  _lazyLookup = {};
  _lazyTweens.length = 0;
  for (i = 0;i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
};
var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
  _lazyTweens.length && !_reverting && _lazyRender();
};
var _numericIfPossible = function _numericIfPossible2(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
};
var _passThrough = function _passThrough2(p) {
  return p;
};
var _setDefaults = function _setDefaults2(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }
  return obj;
};
var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
  return function(obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
};
var _merge = function _merge2(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }
  return base;
};
var _mergeDeep = function _mergeDeep2(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }
  return base;
};
var _copyExcluding = function _copyExcluding2(obj, excluding) {
  var copy2 = {}, p;
  for (p in obj) {
    p in excluding || (copy2[p] = obj[p]);
  }
  return copy2;
};
var _inheritDefaults = function _inheritDefaults2(vars) {
  var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }
  return vars;
};
var _arraysMatch = function _arraysMatch2(a1, a2) {
  var i = a1.length, match = i === a2.length;
  while (match && i-- && a1[i] === a2[i]) {
  }
  return i < 0;
};
var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === undefined) {
    firstProp = "_first";
  }
  if (lastProp === undefined) {
    lastProp = "_last";
  }
  var prev = parent[lastProp], t;
  if (sortBy) {
    t = child[sortBy];
    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }
  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }
  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }
  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
};
var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
  if (firstProp === undefined) {
    firstProp = "_first";
  }
  if (lastProp === undefined) {
    lastProp = "_last";
  }
  var { _prev: prev, _next: next } = child;
  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }
  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }
  child._next = child._prev = child.parent = null;
};
var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
};
var _uncache = function _uncache2(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    var a = animation;
    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }
  return animation;
};
var _recacheAncestors = function _recacheAncestors2(animation) {
  var parent = animation.parent;
  while (parent && parent.parent) {
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }
  return animation;
};
var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
};
var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
};
var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
};
var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
};
var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
};
var _setEnd = function _setEnd2(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
};
var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
  var parent = animation._dp;
  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
    _setEnd(animation);
    parent._dirty || _uncache(parent, animation);
  }
  return animation;
};
var _postAddChecks = function _postAddChecks2(timeline, child) {
  var t;
  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    t = _parentToChildTotalTime(timeline.rawTime(), child);
    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  }
  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    if (timeline._dur < timeline.duration()) {
      t = timeline;
      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime);
        t = t._dp;
      }
    }
    timeline._zTime = -_tinyNum;
  }
};
var _addToTimeline = function _addToTimeline2(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
  return timeline;
};
var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
};
var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);
  if (!tween._initted) {
    return 1;
  }
  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);
    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
};
var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
};
var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
};
var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
  if (repeatDelay && tween._repeat) {
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }
  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      return;
    }
    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
    suppressEvents || (suppressEvents = totalTime && !prevIteration);
    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);
      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
};
var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
  var child;
  if (time > prevTime) {
    child = animation._first;
    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }
      child = child._next;
    }
  } else {
    child = animation._last;
    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }
      child = child._prev;
    }
  }
};
var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 10000000000 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
};
var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
};
var _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
};
var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
  var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
  if (_isString(position) && (isNaN(position) || (position in labels))) {
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");
    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }
    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }
    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }
    return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }
  return position == null ? clippedDuration : +position;
};
var _createTweenType = function _createTweenType2(type, params, timeline) {
  var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;
  if (type) {
    irVars = vars;
    parent = timeline;
    while (parent && !("immediateRender" in irVars)) {
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }
    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
  }
  return new Tween(params[0], vars, params[varsIndex + 1]);
};
var _conditionalReturn = function _conditionalReturn2(value, func) {
  return value || value === 0 ? func(value) : func;
};
var _clamp = function _clamp2(min, max, value) {
  return value < min ? min : value > max ? max : value;
};
var getUnit = function getUnit2(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
};
var clamp = function clamp2(min, max, value) {
  return _conditionalReturn(value, function(v) {
    return _clamp(min, max, v);
  });
};
var _slice = [].slice;
var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || (value.length - 1 in value) && _isObject(value[0])) && !value.nodeType && value !== _win;
};
var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
  if (accumulator === undefined) {
    accumulator = [];
  }
  return ar.forEach(function(value) {
    var _accumulator;
    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
};
var toArray = function toArray2(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
};
var selector = function selector2(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function(v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
};
var shuffle = function shuffle2(a) {
  return a.sort(function() {
    return 0.5 - Math.random();
  });
};
var distribute = function distribute2(v) {
  if (_isFunction(v)) {
    return v;
  }
  var vars = _isObject(v) ? v : {
    each: v
  }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
  if (_isString(from)) {
    ratioX = ratioY = {
      center: 0.5,
      edges: 0.5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }
  return function(i, target, a) {
    var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
      if (!wrapAt) {
        max = -_bigNum;
        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
        }
        wrapAt < l && wrapAt--;
      }
      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;
      for (j = 0;j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }
      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0;
      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }
    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
  };
};
var _roundModifier = function _roundModifier2(v) {
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
  return function(raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
  };
};
var snap = function snap2(snapTo, value) {
  var isArray = _isArray(snapTo), radius, is2D;
  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;
    if (snapTo.values) {
      snapTo = toArray(snapTo.values);
      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius;
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }
  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function(raw) {
    var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }
      if (dx < min) {
        min = dx;
        closest = i;
      }
    }
    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
};
var random = function random2(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 0.00001) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
};
var pipe = function pipe2() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0;_key < _len; _key++) {
    functions[_key] = arguments[_key];
  }
  return function(value) {
    return functions.reduce(function(v, f) {
      return f(v);
    }, value);
  };
};
var unitize = function unitize2(func, unit) {
  return function(value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
};
var normalize = function normalize2(min, max, value) {
  return mapRange(min, max, 0, 1, value);
};
var _wrapArray = function _wrapArray2(a, wrapper, value) {
  return _conditionalReturn(value, function(index) {
    return a[~~wrapper(index)];
  });
};
var wrap = function wrap2(min, max, value) {
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
    return (range + (value2 - min) % range) % range + min;
  });
};
var wrapYoyo = function wrapYoyo2(min, max, value) {
  var range = max - min, total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
    value2 = (total + (value2 - min) % total) % total || 0;
    return min + (value2 > range ? total - value2 : value2);
  });
};
var _replaceRandom = function _replaceRandom2(value) {
  var prev = 0, s = "", i, nums, end, isArray;
  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 0.00001);
    prev = end + 1;
  }
  return s + value.substr(prev, value.length - prev);
};
var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin, outRange = outMax - outMin;
  return _conditionalReturn(value, function(value2) {
    return outMin + ((value2 - inMin) / inRange * outRange || 0);
  });
};
var interpolate = function interpolate2(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function(p2) {
    return (1 - p2) * start + p2 * end;
  };
  if (!func) {
    var isString = _isString(start), master = {}, p, i, interpolators, l, il;
    progress === true && (mutate = 1) && (progress = null);
    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;
      for (i = 1;i < l; i++) {
        interpolators.push(interpolate2(start[i - 1], start[i]));
      }
      l--;
      func = function func(p2) {
        p2 *= l;
        var i2 = Math.min(il, ~~p2);
        return interpolators[i2](p2 - i2);
      };
      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }
    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }
      func = function func(p2) {
        return _renderPropTweens(p2, master) || (isString ? start.p : start);
      };
    }
  }
  return _conditionalReturn(progress, func);
};
var _getLabelInDirection = function _getLabelInDirection2(timeline, fromTime, backward) {
  var labels = timeline.labels, min = _bigNum, p, distance, label;
  for (p in labels) {
    distance = labels[p] - fromTime;
    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }
  return label;
};
var _callback = function _callback2(animation, type, executeLazyFirst) {
  var v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx, params, scope, result;
  if (!callback) {
    return;
  }
  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender();
  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
};
var _interrupt = function _interrupt2(animation) {
  _removeFromParent(animation);
  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
};
var _quickTween;
var _registerPluginQueue = [];
var _createPlugin = function _createPlugin2(config) {
  if (!config)
    return;
  config = !config.name && config["default"] || config;
  if (_windowExists() || config.headless) {
    var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
      this._props = [];
    } : config, instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    }, statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };
    _wake();
    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }
      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
      _plugins[Plugin.prop = name] = Plugin;
      if (config.targetTest) {
        _harnessPlugins.push(Plugin);
        _reservedProps[name] = 1;
      }
      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }
    _addGlobal(name, Plugin);
    config.register && config.register(gsap, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config);
  }
};
var _255 = 255;
var _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
};
var _hue = function _hue2(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
};
var splitColor = function splitColor2(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
  if (!a) {
    if (v.substr(-1) === ",") {
      v = v.substr(0, v.length - 1);
    }
    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }
      if (v.length === 9) {
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }
      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);
      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1);
        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }
    a = a.map(Number);
  }
  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }
    a[0] = ~~(h + 0.5);
    a[1] = ~~(s * 100 + 0.5);
    a[2] = ~~(l * 100 + 0.5);
  }
  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
};
var _colorOrderData = function _colorOrderData2(v) {
  var values = [], c = [], i = -1;
  v.split(_colorExp).forEach(function(v2) {
    var a = v2.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
};
var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
  var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
  if (!colors) {
    return s;
  }
  colors = colors.map(function(color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });
  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;
    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;
      for (;i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }
  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;
    for (;i < l; i++) {
      result += shell[i] + colors[i];
    }
  }
  return result + shell[l];
};
var _colorExp = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }
  return new RegExp(s + ")", "gi");
}();
var _hslExp = /hsl[a]?\(/;
var _colorStringFilter = function _colorStringFilter2(a) {
  var combined = a.join(" "), toHSL;
  _colorExp.lastIndex = 0;
  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
    return true;
  }
};
var _tickerActive;
var _ticker = function() {
  var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;
    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }
    manual || (_id = _req(_tick));
    if (dispatch) {
      for (_i = 0;_i < _listeners.length; _i++) {
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };
  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
          _registerPluginQueue.forEach(_createPlugin);
        }
        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();
        _req = _raf || function(f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };
        _tickerActive = 1;
        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity;
      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function(t, d, f, v) {
        callback(t, d, f, v);
        _self.remove(func);
      } : callback;
      _self.remove(callback);
      _listeners[prioritize ? "unshift" : "push"](func);
      _wake();
      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners
  };
  return _self;
}();
var _wake = function _wake2() {
  return !_tickerActive && _ticker.wake();
};
var _easeMap = {};
var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
var _quotesExp = /["']/g;
var _parseObjectInString = function _parseObjectInString2(value) {
  var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
  for (;i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }
  return obj;
};
var _valueInParentheses = function _valueInParentheses2(value) {
  var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
};
var _configEaseFromString = function _configEaseFromString2(name) {
  var split = (name + "").split("("), ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
};
var _invertEase = function _invertEase2(ease) {
  return function(p) {
    return 1 - ease(1 - p);
  };
};
var _propagateYoyoEase = function _propagateYoyoEase2(timeline, isYoyo) {
  var child = timeline._first, ease;
  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase2(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase2(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }
    child = child._next;
  }
};
var _parseEase = function _parseEase2(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
};
var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
  if (easeOut === undefined) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }
  if (easeInOut === undefined) {
    easeInOut = function easeInOut(p) {
      return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }
  var ease = {
    easeIn,
    easeOut,
    easeInOut
  }, lowercaseName;
  _forEachName(names, function(name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });
  return ease;
};
var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
  return function(p) {
    return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
  };
};
var _configElastic = function _configElastic2(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  p2 = _2PI / p2;
  ease.config = function(amplitude2, period2) {
    return _configElastic2(type, amplitude2, period2);
  };
  return ease;
};
var _configBack = function _configBack2(type, overshoot) {
  if (overshoot === undefined) {
    overshoot = 1.70158;
  }
  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  ease.config = function(overshoot2) {
    return _configBack2(type, overshoot2);
  };
  return ease;
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
  var power = i < 5 ? i + 1 : i;
  _insertEase(name + ",Power" + (power - 1), i ? function(p) {
    return Math.pow(p, power);
  } : function(p) {
    return p;
  }, function(p) {
    return 1 - Math.pow(1 - p, power);
  }, function(p) {
    return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
  var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
  };
  _insertEase("Bounce", function(p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function(p) {
  return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === undefined) {
      steps = 1;
    }
    var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
    return function(p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
  return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache2(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /* @__PURE__ */ function() {
  function Animation2(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;
    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }
    this._ts = 1;
    _setDuration(this, +vars.duration, 1, 1);
    this.data = vars.data;
    if (_context) {
      this._ctx = _context;
      _context.data.push(this);
    }
    _tickerActive || _ticker.wake();
  }
  var _proto = Animation2.prototype;
  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }
    return this._delay;
  };
  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };
  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }
    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };
  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();
    if (!arguments.length) {
      return this._tTime;
    }
    var parent = this._dp;
    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);
      !parent._dp || parent.parent || _postAddChecks(parent, this);
      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }
        parent = parent.parent;
      }
      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }
    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      this._ts || (this._pTime = _totalTime);
      _lazySafeRender(this, _totalTime, suppressEvents);
    }
    return this;
  };
  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
  };
  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  };
  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };
  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  };
  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts;
    }
    if (this._rts === value) {
      return this;
    }
    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
    _setEnd(this);
    return _recacheAncestors(this);
  };
  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }
    if (this._ps !== value) {
      this._ps = value;
      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
        this._ts = this._act = 0;
      } else {
        _wake();
        this._ts = this._rts;
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
      }
    }
    return this;
  };
  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }
    return this._start;
  };
  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };
  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp;
    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };
  _proto.revert = function revert(config2) {
    if (config2 === undefined) {
      config2 = _revertConfig;
    }
    var prevIsReverting = _reverting;
    _reverting = config2;
    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config2);
      this.totalTime(-0.01, config2.suppressEvents);
    }
    this.data !== "nested" && config2.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };
  _proto.globalTime = function globalTime(rawTime) {
    var animation = this, time = arguments.length ? rawTime : animation.rawTime();
    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }
    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
  };
  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }
    return this._repeat === -2 ? Infinity : this._repeat;
  };
  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;
      _onUpdateTotalDuration(this);
      return time ? this.time(time) : this;
    }
    return this._rDelay;
  };
  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }
    return this._yoyo;
  };
  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };
  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };
  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };
  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };
  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };
  _proto.resume = function resume() {
    return this.paused(false);
  };
  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
      return this;
    }
    return this._rts < 0;
  };
  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };
  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp, start = this._start, rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };
  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;
    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }
      return this;
    }
    return vars[type];
  };
  _proto.then = function then(onFulfilled) {
    var self2 = this;
    return new Promise(function(resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
        var _then = self2.then;
        self2.then = null;
        _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
        resolve(f);
        self2.then = _then;
      };
      if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
        _resolve();
      } else {
        self2._prom = _resolve;
      }
    });
  };
  _proto.kill = function kill() {
    _interrupt(this);
  };
  return Animation2;
}();
_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
var Timeline = /* @__PURE__ */ function(_Animation) {
  _inheritsLoose(Timeline2, _Animation);
  function Timeline2(vars, position) {
    var _this;
    if (vars === undefined) {
      vars = {};
    }
    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }
  var _proto2 = Timeline2.prototype;
  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);
    return this;
  };
  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);
    return this;
  };
  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);
    return this;
  };
  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };
  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  };
  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };
  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }
      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;
      if (crossingStart) {
        dur || (prevTime = this._zTime);
        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }
      if (this._repeat) {
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration);
        if (tTime === tDur) {
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime;
          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            return this;
          }
          dur = this._dur;
          tDur = this._tDur;
          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }
          this._lock = 0;
          if (!this._ts && !prevPaused) {
            return this;
          }
          _propagateYoyoEase(this, isYoyo);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }
      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale;
      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0;
      }
      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          return this;
        }
      }
      if (time >= prevTime && totalTime >= 0) {
        child = this._first;
        while (child) {
          next = child._next;
          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
            if (time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum);
              break;
            }
          }
          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time;
        while (child) {
          next = child._prev;
          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
            if (time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
              break;
            }
          }
          child = next;
        }
      }
      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
        if (this._ts) {
          this._start = prevStart;
          _setEnd(this);
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
        if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
          if (!this._lock) {
            (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
              _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }
      }
    }
    return this;
  };
  _proto2.add = function add(child, position) {
    var _this2 = this;
    _isNumber(position) || (position = _parsePosition(this, position, child));
    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function(obj) {
          return _this2.add(obj, position);
        });
        return this;
      }
      if (_isString(child)) {
        return this.addLabel(child, position);
      }
      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }
    return this !== child ? _addToTimeline(this, child, position) : this;
  };
  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === undefined) {
      nested = true;
    }
    if (tweens === undefined) {
      tweens = true;
    }
    if (timelines === undefined) {
      timelines = true;
    }
    if (ignoreBeforeTime === undefined) {
      ignoreBeforeTime = -_bigNum;
    }
    var a = [], child = this._first;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }
      child = child._next;
    }
    return a;
  };
  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1), i = animations.length;
    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };
  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }
    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }
    _removeLinkedListItem(this, child);
    if (child === this._recent) {
      this._recent = this._last;
    }
    return _uncache(this);
  };
  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }
    this._forcing = 1;
    if (!this._dp && this._ts) {
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }
    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
    this._forcing = 0;
    return this;
  };
  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };
  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };
  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };
  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);
    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }
      child = child._next;
    }
  };
  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }
    return this;
  };
  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }
      child = child._next;
    }
    return a;
  };
  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};
    var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();
        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }
        _onStart && _onStart.apply(tween, onStartParams || []);
      }
    }, vars));
    return immediateRender ? tween.render(0) : tween;
  };
  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };
  _proto2.recent = function recent() {
    return this._recent;
  };
  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === undefined) {
      afterTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };
  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === undefined) {
      beforeTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };
  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };
  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === undefined) {
      ignoreBeforeTime = 0;
    }
    var child = this._first, labels = this.labels, p;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }
      child = child._next;
    }
    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }
    return _uncache(this);
  };
  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;
    while (child) {
      child.invalidate(soft);
      child = child._next;
    }
    return _Animation.prototype.invalidate.call(this, soft);
  };
  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === undefined) {
      includeLabels = true;
    }
    var child = this._first, next;
    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }
    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };
  _proto2.totalDuration = function totalDuration(value) {
    var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
    if (arguments.length) {
      return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
    }
    if (self2._dirty) {
      parent = self2.parent;
      while (child) {
        prev = child._prev;
        child._dirty && child.totalDuration();
        start = child._start;
        if (start > prevStart && self2._sort && child._ts && !self2._lock) {
          self2._lock = 1;
          _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }
        if (start < 0 && child._ts) {
          max -= start;
          if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
            self2._start += start / self2._ts;
            self2._time -= start;
            self2._tTime -= start;
          }
          self2.shiftChildren(-start, false, -Infinity);
          prevStart = 0;
        }
        child._end > max && child._ts && (max = child._end);
        child = prev;
      }
      _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
      self2._dirty = 0;
    }
    return self2._tDur;
  };
  Timeline2.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
      _lastRenderedFrame = _ticker.frame;
    }
    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) {
        if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }
          child || _ticker.sleep();
        }
      }
    }
  };
  return Timeline2;
}(Animation);
_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
  pt.b = start;
  pt.e = end;
  start += "";
  end += "";
  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }
  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop);
    start = a[0];
    end = a[1];
  }
  startNums = start.match(_complexStringNumExp) || [];
  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);
    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }
    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0;
      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }
  pt.c = index < end.length ? end.substring(index, end.length) : "";
  pt.fp = funcParam;
  if (_relExp.test(end) || hasRandom) {
    pt.e = 0;
  }
  this._pt = pt;
  return pt;
};
var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
      if (pt || pt === 0) {
        end = pt;
      }
    }
  }
  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }
    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
};
var _processVars = function _processVars2(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }
  var copy2 = {}, p;
  for (p in vars) {
    copy2[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }
  return copy2;
};
var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;
  if (_plugins[property] && (plugin = new _plugins[property]).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
      i = plugin._props.length;
      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }
  return plugin;
};
var _overwritingTween;
var _forceAllPropTweens;
var _initTween = function _initTween2(tween, time, tTime) {
  var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
  if (yoyoEase && tween._yoyo && !tween._repeat) {
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }
  tween._from = !tl && !!vars.runBackwards;
  if (!tl || keyframes && !vars.stagger) {
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop];
    cleanVars = _copyExcluding(vars, _reservedProps);
    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1);
      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
      prevStartAt._lazy = 0;
    }
    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function() {
          return _callback(tween, "onUpdate");
        },
        stagger: 0
      }, startAt)));
      tween._startAt._dp = 0;
      tween._startAt._sat = tween;
      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          time && (tween._zTime = time);
          return;
        }
      }
    } else if (runBackwards && dur) {
      if (!prevStartAt) {
        time && (immediateRender = false);
        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender,
          stagger: 0,
          parent
        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars);
        _removeFromParent(tween._startAt = Tween.set(targets, p));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;
        if (!immediateRender) {
          _initTween2(tween._startAt, _tinyNum, _tinyNum);
        } else if (!time) {
          return;
        }
      }
    }
    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;
    for (i = 0;i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
      index = fullTargets === targets ? i : fullTargets.indexOf(target);
      if (harness && (plugin = new harness).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
        plugin._props.forEach(function(name) {
          ptLookup[name] = pt;
        });
        plugin.priority && (hasPriority = 1);
      }
      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }
      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;
        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
        overwritten = !tween.parent;
        _overwritingTween = 0;
      }
      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }
    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween);
  }
  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten;
  keyframes && time <= 0 && tl.render(_bigNum, true, true);
};
var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;
    while (i--) {
      pt = lookup[i][property];
      if (pt && pt.d && pt.d._pt) {
        pt = pt.d._pt;
        while (pt && pt.p !== property && pt.fp !== property) {
          pt = pt._next;
        }
      }
      if (!pt) {
        _forceAllPropTweens = 1;
        tween.vars[property] = "+=0";
        _initTween(tween, time);
        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset") : 1;
      }
      ptCache.push(pt);
    }
  }
  i = ptCache.length;
  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT;
    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
  }
};
var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy2, p, i, aliases;
  if (!propertyAliases) {
    return vars;
  }
  copy2 = _merge({}, vars);
  for (p in propertyAliases) {
    if (p in copy2) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;
      while (i--) {
        copy2[aliases[i]] = copy2[p];
      }
    }
  }
  return copy2;
};
var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut", p, a;
  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []);
    obj.forEach(function(value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
};
var _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
};
var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
var _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
  return _staggerPropsToSkip[name] = 1;
});
var Tween = /* @__PURE__ */ function(_Animation2) {
  _inheritsLoose(Tween2, _Animation2);
  function Tween2(targets, vars, position, skipInherit) {
    var _this3;
    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }
    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : ("length" in vars)) ? [targets] : toArray(targets), tl, i, copy2, l, p, curTarget, staggerFunc, staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = [];
    _this3._overwrite = overwrite;
    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;
      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);
        if (_isObject(stagger)) {
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }
        for (i = 0;i < l; i++) {
          copy2 = _copyExcluding(vars, _staggerPropsToSkip);
          copy2.stagger = 0;
          yoyoEase && (copy2.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy2, staggerVarsToMerge);
          curTarget = parsedTargets[i];
          copy2.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy2.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
          if (!stagger && l === 1 && copy2.delay) {
            _this3._delay = delay = copy2.delay;
            _this3._start += delay;
            copy2.delay = 0;
          }
          tl.to(curTarget, copy2, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }
        tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));
        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0, a, kf, v;
        if (_isArray(keyframes)) {
          keyframes.forEach(function(frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration();
        } else {
          copy2 = {};
          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy2, keyframes.easeEach);
          }
          for (p in copy2) {
            a = copy2[p].sort(function(a2, b) {
              return a2.t - b.t;
            });
            time = 0;
            for (i = 0;i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }
          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          });
        }
      }
      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0;
    }
    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);
      _globalTimeline.killTweensOf(parsedTargets);
      _overwritingTween = 0;
    }
    _addToTimeline(parent, _assertThisInitialized(_this3), position);
    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);
    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum;
      _this3.render(Math.max(0, -delay) || 0);
    }
    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }
  var _proto3 = Tween2.prototype;
  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      time = tTime;
      timeline = this.timeline;
      if (this._repeat) {
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration);
        if (tTime === tDur) {
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        isYoyo = this._yoyo && iteration & 1;
        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          this._tTime = tTime;
          return this;
        }
        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
          if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
            this._lock = force = 1;
            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }
      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0;
          return this;
        }
        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          return this;
        }
        if (dur !== this._dur) {
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._tTime = tTime;
      this._time = time;
      if (!this._act && this._ts) {
        this._act = 1;
        this._lazy = 0;
      }
      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }
      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          return this;
        }
      }
      pt = this._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
        _callback(this, "onUpdate");
      }
      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto3.targets = function targets() {
    return this._targets;
  };
  _proto3.invalidate = function invalidate(soft) {
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };
  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur);
    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1);
    }
    _alignPlayhead(this, 0);
    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };
  _proto3.kill = function kill(targets, vars) {
    if (vars === undefined) {
      vars = "all";
    }
    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }
    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
      return this;
    }
    var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }
    overwrittenProps = this._op = this._op || [];
    if (vars !== "all") {
      if (_isString(vars)) {
        p = {};
        _forEachName(vars, function(name) {
          return p[name] = 1;
        });
        vars = p;
      }
      vars = _addAliasesToVars(parsedTargets, vars);
    }
    i = parsedTargets.length;
    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];
        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }
        for (p in props) {
          pt = curLookup && curLookup[p];
          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }
            delete curLookup[p];
          }
          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }
    this._initted && !this._pt && firstPT && _interrupt(this);
    return this;
  };
  Tween2.to = function to(targets, vars) {
    return new Tween2(targets, vars, arguments[2]);
  };
  Tween2.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };
  Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween2(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };
  Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };
  Tween2.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween2(targets, vars);
  };
  Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };
  return Tween2;
}(Animation);
_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
  Tween[name] = function() {
    var tl = new Timeline, params = _slice.call(arguments, 0);
    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
var _setterPlain = function _setterPlain2(target, property, value) {
  return target[property] = value;
};
var _setterFunc = function _setterFunc2(target, property, value) {
  return target[property](value);
};
var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
  return target[property](data.fp, value);
};
var _setterAttribute = function _setterAttribute2(target, property, value) {
  return target.setAttribute(property, value);
};
var _getSetter = function _getSetter2(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
};
var _renderPlain = function _renderPlain2(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
};
var _renderBoolean = function _renderBoolean2(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
};
var _renderComplexString = function _renderComplexString2(ratio, data) {
  var pt = data._pt, s = "";
  if (!ratio && data.b) {
    s = data.b;
  } else if (ratio === 1 && data.e) {
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
      pt = pt._next;
    }
    s += data.c;
  }
  data.set(data.t, data.p, s, data);
};
var _renderPropTweens = function _renderPropTweens2(ratio, data) {
  var pt = data._pt;
  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
};
var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
  var pt = this._pt, next;
  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
};
var _killPropTweensOf = function _killPropTweensOf2(property) {
  var pt = this._pt, hasNonDependentRemaining, next;
  while (pt) {
    next = pt._next;
    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }
    pt = next;
  }
  return !hasNonDependentRemaining;
};
var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
};
var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
  var pt = parent._pt, next, pt2, first, last;
  while (pt) {
    next = pt._next;
    pt2 = first;
    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }
    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }
    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }
    pt = next;
  }
  parent._pt = first;
};
var PropTween = /* @__PURE__ */ function() {
  function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;
    if (next) {
      next._prev = this;
    }
  }
  var _proto4 = PropTween2.prototype;
  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set;
    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target;
    this.tween = tween;
  };
  return PropTween2;
}();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
  return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [];
var _listeners = {};
var _emptyArray = [];
var _lastMediaTime = 0;
var _contextID = 0;
var _dispatch = function _dispatch2(type) {
  return (_listeners[type] || _emptyArray).map(function(f) {
    return f();
  });
};
var _onMediaChange = function _onMediaChange2() {
  var time = Date.now(), matches = [];
  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");
    _media.forEach(function(c) {
      var { queries, conditions } = c, match, p, anyMatch, toggled;
      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches;
        match && (anyMatch = 1);
        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }
      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });
    _dispatch("matchMediaRevert");
    matches.forEach(function(c) {
      return c.onMatch(c, function(func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;
    _dispatch("matchMedia");
  }
};
var Context = /* @__PURE__ */ function() {
  function Context2(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = [];
    this.isReverted = false;
    this.id = _contextID++;
    func && this.add(func);
  }
  var _proto5 = Context2.prototype;
  _proto5.add = function add(name, func, scope) {
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }
    var self2 = this, f = function f() {
      var prev = _context, prevSelector = self2.selector, result;
      prev && prev !== self2 && prev.data.push(self2);
      scope && (self2.selector = selector(scope));
      _context = self2;
      result = func.apply(self2, arguments);
      _isFunction(result) && self2._r.push(result);
      _context = prev;
      self2.selector = prevSelector;
      self2.isReverted = false;
      return result;
    };
    self2.last = f;
    return name === _isFunction ? f(self2, function(func2) {
      return self2.add(null, func2);
    }) : name ? self2[name] = f : f;
  };
  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };
  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function(e) {
      return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };
  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };
  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;
    if (revert) {
      (function() {
        var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
        while (i2--) {
          t = _this4.data[i2];
          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function(tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        }
        tweens.map(function(t2) {
          return {
            g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
            t: t2
          };
        }).sort(function(a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function(o) {
          return o.t.revert(revert);
        });
        i2 = _this4.data.length;
        while (i2--) {
          t = _this4.data[i2];
          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill();
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }
        _this4._r.forEach(function(f) {
          return f(revert, _this4);
        });
        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function(e) {
        return e.kill && e.kill();
      });
    }
    this.clear();
    if (matchMedia) {
      var i = _media.length;
      while (i--) {
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };
  _proto5.revert = function revert(config2) {
    this.kill(config2 || {});
  };
  return Context2;
}();
var MatchMedia = /* @__PURE__ */ function() {
  function MatchMedia2(scope) {
    this.contexts = [];
    this.scope = scope;
    _context && _context.data.push(this);
  }
  var _proto6 = MatchMedia2.prototype;
  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
    _context && !context.selector && (context.selector = _context.selector);
    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;
    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);
        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }
    active && func(context, function(f) {
      return context.add(null, f);
    });
    return this;
  };
  _proto6.revert = function revert(config2) {
    this.kill(config2 || {});
  };
  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function(c) {
      return c.kill(revert, true);
    });
  };
  return MatchMedia2;
}();
var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;_key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    args.forEach(function(config3) {
      return _createPlugin(config3);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]);
    var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
    unit === "native" && (unit = "");
    return !target ? target : !property ? function(property2, unit2, uncache2) {
      return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);
    if (target.length > 1) {
      var setters = target.map(function(t) {
        return gsap.quickSetter(t, property, unit);
      }), l = setters.length;
      return function(value) {
        var i = l;
        while (i--) {
          setters[i](value);
        }
      };
    }
    target = target[0] || {};
    var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
      var p2 = new Plugin;
      _quickTween._pt = 0;
      p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p2.render(1, p2);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);
    return Plugin ? setter : function(value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge22;
    var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };
    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config2(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var { name, effect, plugins, defaults: defaults2, extendTimeline } = _ref3;
    (plugins || "").split(",").forEach(function(pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });
    _effects[name] = function(targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
    };
    if (extendTimeline) {
      Timeline.prototype[name] = function(targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === undefined) {
      vars = {};
    }
    var tl = new Timeline(vars), child, next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
    _globalTimeline.remove(tl);
    tl._dp = 0;
    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;
    while (child) {
      next = child._next;
      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }
      child = next;
    }
    _addToTimeline(_globalTimeline, tl, 0);
    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function(c) {
      var cond = c.conditions, found, p;
      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }
      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap,
    wrapYoyo,
    distribute,
    random,
    snap,
    normalize,
    getUnit,
    clamp,
    splitColor,
    toArray,
    selector,
    mapRange,
    pipe,
    unitize,
    interpolate,
    shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween,
    globals: _addGlobal,
    Tween,
    Timeline,
    Animation,
    getCache: _getCache,
    _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context2(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);
        toAdd._ctx = _context;
      }
      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
  return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
  duration: 0
});
var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
  var pt = plugin._pt;
  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }
  return pt;
};
var _addModifiers = function _addModifiers2(tween, modifiers) {
  var targets = tween._targets, p, i, pt;
  for (p in modifiers) {
    i = targets.length;
    while (i--) {
      pt = tween._ptLookup[i][p];
      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          pt = _getPluginPropTween(pt, p);
        }
        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
};
var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
  return {
    name,
    rawVars: 1,
    init: function init(target, vars, tween) {
      tween._onInit = function(tween2) {
        var temp, p;
        if (_isString(vars)) {
          temp = {};
          _forEachName(vars, function(name2) {
            return temp[name2] = 1;
          });
          vars = temp;
        }
        if (modifier) {
          temp = {};
          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }
          vars = temp;
        }
        _addModifiers(tween2, vars);
      };
    }
  };
};
var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init2(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;
    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v;
      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;
    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init3(target, value) {
    var i = value.length;
    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap.version = "3.12.5";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0;
var Power1 = _easeMap.Power1;
var Power2 = _easeMap.Power2;
var Power3 = _easeMap.Power3;
var Power4 = _easeMap.Power4;
var Linear = _easeMap.Linear;
var Quad = _easeMap.Quad;
var Cubic = _easeMap.Cubic;
var Quart = _easeMap.Quart;
var Quint = _easeMap.Quint;
var Strong = _easeMap.Strong;
var Elastic = _easeMap.Elastic;
var Back = _easeMap.Back;
var SteppedEase = _easeMap.SteppedEase;
var Bounce = _easeMap.Bounce;
var Sine = _easeMap.Sine;
var Expo = _easeMap.Expo;
var Circ = _easeMap.Circ;

// node_modules/gsap/CSSPlugin.js
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _win2;
var _doc2;
var _docElement;
var _pluginInitted;
var _tempDiv;
var _tempDivStyler;
var _recentSetterPlugin;
var _reverting2;
var _windowExists3 = function _windowExists4() {
  return typeof window !== "undefined";
};
var _transformProps = {};
var _RAD2DEG = 180 / Math.PI;
var _DEG2RAD = Math.PI / 180;
var _atan2 = Math.atan2;
var _bigNum2 = 1e8;
var _capsExp = /([A-Z])/g;
var _horizontalExp = /(left|right|width|margin|padding|x)/i;
var _complexExp = /[\s,\(]\S/;
var _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
};
var _renderCSSProp = function _renderCSSProp2(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
};
var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
};
var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
};
var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
};
var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
  return target.style[property] = value;
};
var _setterCSSProp = function _setterCSSProp2(target, property, value) {
  return target.style.setProperty(property, value);
};
var _setterTransform = function _setterTransform2(target, property, value) {
  return target._gsap[property] = value;
};
var _setterScale = function _setterScale2(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
};
var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
};
var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
};
var _transformProp = "transform";
var _transformOriginProp = _transformProp + "Origin";
var _saveStyle = function _saveStyle2(property, isNotCSS) {
  var _this = this;
  var target = this.target, style = target.style, cache = target._gsap;
  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};
    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function(a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function(p) {
        return _saveStyle2.call(_this, p, isNotCSS);
      });
    }
    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }
    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }
    property = _transformProp;
  }
  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
};
var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
};
var _revertStyle = function _revertStyle2() {
  var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
  for (i = 0;i < props.length; i += 3) {
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
  }
  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }
    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }
    i = _reverting2();
    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);
      if (cache.zOrigin && style[_transformOriginProp]) {
        style[_transformOriginProp] += " " + cache.zOrigin + "px";
        cache.zOrigin = 0;
        cache.renderTransform();
      }
      cache.uncache = 1;
    }
  }
};
var _getStyleSaver = function _getStyleSaver2(target, properties) {
  var saver = {
    target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || gsap.core.getCache(target);
  properties && properties.split(",").forEach(function(p) {
    return saver.save(p);
  });
  return saver;
};
var _supports3D;
var _createElement = function _createElement2(type, ns) {
  var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
  return e && e.style ? e : _doc2.createElement(type);
};
var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
};
var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
  var e = element || _tempDiv, s = e.style, i = 5;
  if (property in s && !preferPrefix) {
    return property;
  }
  property = property.charAt(0).toUpperCase() + property.substr(1);
  while (i-- && !(_prefixes[i] + property in s)) {
  }
  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
};
var _initCore = function _initCore2() {
  if (_windowExists3() && window.document) {
    _win2 = window;
    _doc2 = _win2.document;
    _docElement = _doc2.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
    _supports3D = !!_checkPropPrefix("perspective");
    _reverting2 = gsap.core.reverting;
    _pluginInitted = 1;
  }
};
var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
  _docElement.appendChild(svg);
  svg.appendChild(this);
  this.style.display = "block";
  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox;
      this.getBBox = _getBBoxHack2;
    } catch (e) {
    }
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }
  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }
  _docElement.removeChild(svg);
  this.style.cssText = oldCSS;
  return bbox;
};
var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
  var i = attributesArray.length;
  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
};
var _getBBox = function _getBBox2(target) {
  var bounds;
  try {
    bounds = target.getBBox();
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }
  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
};
var _isSVG = function _isSVG2(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
};
var _removeProperty = function _removeProperty2(target, property) {
  if (property) {
    var style = target.style, first2Chars;
    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }
    if (style.removeProperty) {
      first2Chars = property.substr(0, 2);
      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        property = "-" + property;
      }
      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      style.removeAttribute(property);
    }
  }
};
var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;
  plugin._props.push(property);
  return pt;
};
var _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
};
var _nonStandardLayouts = {
  grid: 1,
  flex: 1
};
var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
  var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }
  curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);
  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
  }
  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }
  if (!parent || parent === _doc2 || !parent.appendChild) {
    parent = _doc2.body;
  }
  cache = parent._gsap;
  if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
    return _round(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
    }
    if (horizontal && toPercent) {
      cache = _getCache(parent);
      cache.time = _ticker.time;
      cache.width = parent[measureProperty];
    }
  }
  return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
};
var _get = function _get2(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();
  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];
    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }
  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];
    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
    }
  }
  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
};
var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
  if (!start || start === "none") {
    var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor");
    }
  }
  var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
  pt.b = start;
  pt.e = end;
  start += "";
  end += "";
  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }
  a = [start, end];
  _colorStringFilter(a);
  start = a[0];
  end = a[1];
  startValues = start.match(_numWithUnitExp) || [];
  endValues = end.match(_numWithUnitExp) || [];
  if (endValues.length) {
    while (result = _numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }
      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _numWithUnitExp.lastIndex - endUnit.length;
        if (!endUnit) {
          endUnit = endUnit || _config.units[prop] || startUnit;
          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }
        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        }
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }
  _relExp.test(end) && (pt.e = 0);
  this._pt = pt;
  return pt;
};
var _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
};
var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
  var split = value.split(" "), x = split[0], y = split[1] || "50%";
  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    value = x;
    x = y;
    y = value;
  }
  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
};
var _renderClearProps = function _renderClearProps2(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;
      while (--i > -1) {
        prop = props[i];
        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }
        _removeProperty(target, prop);
      }
    }
    if (clearTransforms) {
      _removeProperty(target, _transformProp);
      if (cache) {
        cache.svg && target.removeAttribute("transform");
        _parseTransform(target, 1);
        cache.uncache = 1;
        _removeIndependentTransforms(style);
      }
    }
  }
};
var _specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;
      plugin._props.push(property);
      return 1;
    }
  }
};
var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
var _rotationalProperties = {};
var _isNullTransform = function _isNullTransform2(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
};
var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
  var matrixString = _getComputedProperty(target, _transformProp);
  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
};
var _getMatrix = function _getMatrix2(target, force2D) {
  var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix;
    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;
    if (!parent || !target.offsetParent) {
      addedToDOM = 1;
      nextSibling = target.nextElementSibling;
      _docElement.appendChild(target);
    }
    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");
    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }
  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
};
var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }
  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }
  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px";
  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }
  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
};
var _parseTransform = function _parseTransform2(target, uncache) {
  var cache = target._gsap || new GSCache(target);
  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }
  var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  if (cs.translate) {
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }
    style.scale = style.rotate = style.translate = "none";
  }
  matrix = _getMatrix(target, cache.svg);
  if (cache.svg) {
    if (cache.uncache) {
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin");
    }
    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }
  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;
  if (matrix !== _identity2DMatrix) {
    a = matrix[0];
    b = matrix[1];
    c = matrix[2];
    d = matrix[3];
    x = a12 = matrix[4];
    y = a22 = matrix[5];
    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      }
    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      }
      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      }
      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }
      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }
      scaleX = _round(Math.sqrt(a * a + b * b + c * c));
      scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }
    if (cache.svg) {
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }
  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }
  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = _round(scaleX);
  cache.scaleY = _round(scaleY);
  cache.rotation = _round(rotation) + deg;
  cache.rotationX = _round(rotationX) + deg;
  cache.rotationY = _round(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;
  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }
  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
};
var _firstTwoOnly = function _firstTwoOnly2(value) {
  return (value = value.split(" "))[0] + " " + value[1];
};
var _addPxTranslate = function _addPxTranslate2(target, start, value) {
  var unit = getUnit(start);
  return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
};
var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;
  _renderCSSTransforms(ratio, cache);
};
var _zeroDeg = "0deg";
var _zeroPx = "0px";
var _endParenthesis = ") ";
var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
  var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }
  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }
  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }
  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }
  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }
  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }
  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }
  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }
  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }
  target.style[_transformProp] = transforms || "translate(0, 0)";
};
var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
  var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);
  if (skewY) {
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }
  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;
    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;
      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }
    a11 = _round(a11);
    a21 = _round(a21);
    a12 = _round(a12);
    a22 = _round(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }
  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }
  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }
  if (xPercent || yPercent) {
    temp = target.getBBox();
    tx = _round(tx + xPercent / 100 * temp.width);
    ty = _round(ty + yPercent / 100 * temp.height);
  }
  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp);
};
var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
  var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
  if (isString) {
    direction = endValue.split("_")[1];
    if (direction === "short") {
      change %= cap;
      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }
    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
    }
  }
  plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";
  plugin._props.push(property);
  return pt;
};
var _assign = function _assign2(target, source) {
  for (var p in source) {
    target[p] = source[p];
  }
  return target;
};
var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
  var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    _removeProperty(target, _transformProp);
    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }
  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];
    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      startUnit = getUnit(startValue);
      endUnit = getUnit(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;
      plugin._props.push(p);
    }
  }
  _assign(endCache, startCache);
};
_forEachName("padding,margin,Width,Radius", function(name, index) {
  var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
    return index < 2 ? name + side : "border" + side + name;
  });
  _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
    var a, vars;
    if (arguments.length < 4) {
      a = props.map(function(prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }
    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function(prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});
var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init4(target, vars, tween, index, targets) {
    var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
    _pluginInitted || _initCore();
    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;
    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }
      endValue = vars[p];
      if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
        continue;
      }
      type = typeof endValue;
      specialProp = _specialProps[p];
      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }
      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = _replaceRandom(endValue);
      }
      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _colorExp.lastIndex = 0;
        if (!_colorExp.test(startValue)) {
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
        }
        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
          getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
        } else {
          startValue = _get(target, p);
        }
        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);
        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              startNum = 0;
            }
            inlineProps.push("visibility", 0, style.visibility);
            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }
          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }
        isTransformRelated = p in _transformProps;
        if (isTransformRelated) {
          this.styles.save(p);
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
            transformPropTween.dep = 1;
          }
          if (p === "scale") {
            this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue);
            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0;
              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }
            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);
            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);
            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }
        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0);
          endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;
          if (startUnit !== endUnit && endUnit !== "%") {
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            _missingPlugin(p, endValue);
            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }
        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }
    hasPriority && _sortPropTweensByPriority(this);
  },
  render: function render2(ratio, data) {
    if (data.tween._time || !_reverting2()) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
  },
  core: {
    _removeProperty,
    _getMatrix
  }
};
gsap.utils.checkPrefix = _checkPropPrefix;
gsap.core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
  var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
    _transformProps[name] = 1;
  });
  _forEachName(rotation, function(name) {
    _config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });
  _propertyAliases[all[13]] = positionAndScale + "," + rotation;
  _forEachName(aliases, function(name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
  _config.units[name] = "px";
});
gsap.registerPlugin(CSSPlugin);

// node_modules/gsap/index.js
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
var TweenMaxWithCSS = gsapWithCSS.core.Tween;

// node_modules/@gsap/react/src/index.js
/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react16.useLayoutEffect : import_react16.useEffect;
var isConfig = (value) => value && !Array.isArray(value) && typeof value === "object";
var emptyArray = [];
var defaultConfig = {};
var _gsap2 = gsapWithCSS;
var useGSAP = (callback, dependencies = emptyArray) => {
  let config3 = defaultConfig;
  if (isConfig(callback)) {
    config3 = callback;
    callback = null;
    dependencies = "dependencies" in config3 ? config3.dependencies : emptyArray;
  } else if (isConfig(dependencies)) {
    config3 = dependencies;
    dependencies = "dependencies" in config3 ? config3.dependencies : emptyArray;
  }
  callback && typeof callback !== "function" && console.warn("First parameter must be a function or config object");
  const { scope, revertOnUpdate } = config3, mounted = import_react16.useRef(false), context3 = import_react16.useRef(_gsap2.context(() => {
  }, scope)), contextSafe = import_react16.useRef((func) => context3.current.add(null, func)), deferCleanup = dependencies && dependencies.length && !revertOnUpdate;
  useIsomorphicLayoutEffect(() => {
    callback && context3.current.add(callback, scope);
    if (!deferCleanup || !mounted.current) {
      return () => context3.current.revert();
    }
  }, dependencies);
  deferCleanup && useIsomorphicLayoutEffect(() => {
    mounted.current = true;
    return () => context3.current.revert();
  }, emptyArray);
  return { context: context3.current, contextSafe: contextSafe.current };
};
useGSAP.register = (core) => {
  _gsap2 = core;
};
useGSAP.headless = true;

// node_modules/gsap/utils/matrix.js
function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
  if (!element || !element.parentNode || (_doc3 || _setDoc(element)).documentElement === element) {
    return new Matrix2D;
  }
  var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
  parent.removeChild(container);
  if (zeroScales) {
    b1 = zeroScales.length;
    while (b1--) {
      b2 = zeroScales[b1];
      b2.scaleX = b2.scaleY = 0;
      b2.renderTransform(1, b2);
    }
  }
  return inverse ? m.inverse() : m;
}
/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _doc3;
var _win3;
var _docElement2;
var _body;
var _divContainer;
var _svgContainer;
var _identityMatrix;
var _gEl;
var _transformProp2 = "transform";
var _transformOriginProp2 = _transformProp2 + "Origin";
var _hasOffsetBug;
var _setDoc = function _setDoc2(element) {
  var doc = element.ownerDocument || element;
  if (!(_transformProp2 in element.style) && "msTransform" in element.style) {
    _transformProp2 = "msTransform";
    _transformOriginProp2 = _transformProp2 + "Origin";
  }
  while (doc.parentNode && (doc = doc.parentNode)) {
  }
  _win3 = window;
  _identityMatrix = new Matrix2D;
  if (doc) {
    _doc3 = doc;
    _docElement2 = doc.documentElement;
    _body = doc.body;
    _gEl = _doc3.createElementNS("http://www.w3.org/2000/svg", "g");
    _gEl.style.transform = "none";
    var d1 = doc.createElement("div"), d2 = doc.createElement("div"), root = doc && (doc.body || doc.firstElementChild);
    if (root && root.appendChild) {
      root.appendChild(d1);
      d1.appendChild(d2);
      d1.setAttribute("style", "position:static;transform:translate3d(0,0,1px)");
      _hasOffsetBug = d2.offsetParent !== d1;
      root.removeChild(d1);
    }
  }
  return doc;
};
var _forceNonZeroScale = function _forceNonZeroScale2(e) {
  var a, cache;
  while (e && e !== _body) {
    cache = e._gsap;
    cache && cache.uncache && cache.get(e, "x");
    if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
      cache.scaleX = cache.scaleY = 0.0001;
      cache.renderTransform(1, cache);
      a ? a.push(cache) : a = [cache];
    }
    e = e.parentNode;
  }
  return a;
};
var _svgTemps = [];
var _divTemps = [];
var _getDocScrollTop = function _getDocScrollTop2() {
  return _win3.pageYOffset || _doc3.scrollTop || _docElement2.scrollTop || _body.scrollTop || 0;
};
var _getDocScrollLeft = function _getDocScrollLeft2() {
  return _win3.pageXOffset || _doc3.scrollLeft || _docElement2.scrollLeft || _body.scrollLeft || 0;
};
var _svgOwner = function _svgOwner2(element) {
  return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
};
var _isFixed = function _isFixed2(element) {
  if (_win3.getComputedStyle(element).position === "fixed") {
    return true;
  }
  element = element.parentNode;
  if (element && element.nodeType === 1) {
    return _isFixed2(element);
  }
};
var _createSibling = function _createSibling2(element, i) {
  if (element.parentNode && (_doc3 || _setDoc(element))) {
    var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc3.createElementNS ? _doc3.createElementNS(ns.replace(/^https/, "http"), type) : _doc3.createElement(type);
    if (i) {
      if (!svg) {
        if (!_divContainer) {
          _divContainer = _createSibling2(element);
          _divContainer.style.cssText = css;
        }
        e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
        _divContainer.appendChild(e);
      } else {
        _svgContainer || (_svgContainer = _createSibling2(element));
        e.setAttribute("width", 0.01);
        e.setAttribute("height", 0.01);
        e.setAttribute("transform", "translate(" + x + "," + y + ")");
        _svgContainer.appendChild(e);
      }
    }
    return e;
  }
  throw "Need document and parent.";
};
var _consolidate = function _consolidate2(m) {
  var c = new Matrix2D, i = 0;
  for (;i < m.numberOfItems; i++) {
    c.multiply(m.getItem(i).matrix);
  }
  return c;
};
var _getCTM = function _getCTM2(svg) {
  var m = svg.getCTM(), transform;
  if (!m) {
    transform = svg.style[_transformProp2];
    svg.style[_transformProp2] = "none";
    svg.appendChild(_gEl);
    m = _gEl.getCTM();
    svg.removeChild(_gEl);
    transform ? svg.style[_transformProp2] = transform : svg.style.removeProperty(_transformProp2.replace(/([A-Z])/g, "-$1").toLowerCase());
  }
  return m || _identityMatrix.clone();
};
var _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
  var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
  if (element === _win3) {
    return element;
  }
  siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
  container = svg ? _svgContainer : _divContainer;
  if (svg) {
    if (isRootSVG) {
      b = _getCTM(element);
      x = -b.e / b.a;
      y = -b.f / b.d;
      m = _identityMatrix;
    } else if (element.getBBox) {
      b = element.getBBox();
      m = element.transform ? element.transform.baseVal : {};
      m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
      x = m.a * b.x + m.c * b.y;
      y = m.b * b.x + m.d * b.y;
    } else {
      m = new Matrix2D;
      x = y = 0;
    }
    if (adjustGOffset && element.tagName.toLowerCase() === "g") {
      x = y = 0;
    }
    (isRootSVG ? svg : parent).appendChild(container);
    container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
  } else {
    x = y = 0;
    if (_hasOffsetBug) {
      m = element.offsetParent;
      b = element;
      while (b && (b = b.parentNode) && b !== m && b.parentNode) {
        if ((_win3.getComputedStyle(b)[_transformProp2] + "").length > 4) {
          x = b.offsetLeft;
          y = b.offsetTop;
          b = 0;
        }
      }
    }
    cs = _win3.getComputedStyle(element);
    if (cs.position !== "absolute" && cs.position !== "fixed") {
      m = element.offsetParent;
      while (parent && parent !== m) {
        x += parent.scrollLeft || 0;
        y += parent.scrollTop || 0;
        parent = parent.parentNode;
      }
    }
    b = container.style;
    b.top = element.offsetTop - y + "px";
    b.left = element.offsetLeft - x + "px";
    b[_transformProp2] = cs[_transformProp2];
    b[_transformOriginProp2] = cs[_transformOriginProp2];
    b.position = cs.position === "fixed" ? "fixed" : "absolute";
    element.parentNode.appendChild(container);
  }
  return container;
};
var _setMatrix = function _setMatrix2(m, a, b, c, d, e, f) {
  m.a = a;
  m.b = b;
  m.c = c;
  m.d = d;
  m.e = e;
  m.f = f;
  return m;
};
var Matrix2D = /* @__PURE__ */ function() {
  function Matrix2D2(a, b, c, d, e, f) {
    if (a === undefined) {
      a = 1;
    }
    if (b === undefined) {
      b = 0;
    }
    if (c === undefined) {
      c = 0;
    }
    if (d === undefined) {
      d = 1;
    }
    if (e === undefined) {
      e = 0;
    }
    if (f === undefined) {
      f = 0;
    }
    _setMatrix(this, a, b, c, d, e, f);
  }
  var _proto = Matrix2D2.prototype;
  _proto.inverse = function inverse() {
    var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 0.0000000001;
    return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
  };
  _proto.multiply = function multiply(matrix) {
    var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
    return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
  };
  _proto.clone = function clone() {
    return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
  };
  _proto.equals = function equals(matrix) {
    var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
    return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
  };
  _proto.apply = function apply(point, decoratee) {
    if (decoratee === undefined) {
      decoratee = {};
    }
    var { x, y } = point, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
    decoratee.x = x * a + y * c + e || 0;
    decoratee.y = x * b + y * d + f || 0;
    return decoratee;
  };
  return Matrix2D2;
}();

// node_modules/gsap/Flip.js
/*!
 * Flip 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _id = 1;
var _toArray;
var gsap2;
var _batch;
var _batchAction;
var _body2;
var _closestTenth;
var _getStyleSaver3;
var _forEachBatch = function _forEachBatch2(batch, name) {
  return batch.actions.forEach(function(a) {
    return a.vars[name] && a.vars[name](a);
  });
};
var _batchLookup = {};
var _RAD2DEG2 = 180 / Math.PI;
var _DEG2RAD2 = Math.PI / 180;
var _emptyObj = {};
var _dashedNameLookup = {};
var _memoizedRemoveProps = {};
var _listToArray = function _listToArray2(list) {
  return typeof list === "string" ? list.split(" ").join("").split(",") : list;
};
var _callbacks = _listToArray("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt");
var _removeProps = _listToArray("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight");
var _getEl = function _getEl2(target) {
  return _toArray(target)[0] || console.warn("Element not found:", target);
};
var _round3 = function _round4(value) {
  return Math.round(value * 1e4) / 1e4 || 0;
};
var _toggleClass = function _toggleClass2(targets, className, action) {
  return targets.forEach(function(el) {
    return el.classList[action](className);
  });
};
var _reserved = {
  zIndex: 1,
  kill: 1,
  simple: 1,
  spin: 1,
  clearProps: 1,
  targets: 1,
  toggleClass: 1,
  onComplete: 1,
  onUpdate: 1,
  onInterrupt: 1,
  onStart: 1,
  delay: 1,
  repeat: 1,
  repeatDelay: 1,
  yoyo: 1,
  scale: 1,
  fade: 1,
  absolute: 1,
  props: 1,
  onEnter: 1,
  onLeave: 1,
  custom: 1,
  paused: 1,
  nested: 1,
  prune: 1,
  absoluteOnLeave: 1
};
var _fitReserved = {
  zIndex: 1,
  simple: 1,
  clearProps: 1,
  scale: 1,
  absolute: 1,
  fitChild: 1,
  getVars: 1,
  props: 1
};
var _camelToDashed = function _camelToDashed2(p) {
  return p.replace(/([A-Z])/g, "-$1").toLowerCase();
};
var _copy = function _copy2(obj, exclude) {
  var result = {}, p;
  for (p in obj) {
    exclude[p] || (result[p] = obj[p]);
  }
  return result;
};
var _memoizedProps = {};
var _memoizeProps = function _memoizeProps2(props) {
  var p = _memoizedProps[props] = _listToArray(props);
  _memoizedRemoveProps[props] = p.concat(_removeProps);
  return p;
};
var _getInverseGlobalMatrix = function _getInverseGlobalMatrix2(el) {
  var cache = el._gsap || gsap2.core.getCache(el);
  if (cache.gmCache === gsap2.ticker.frame) {
    return cache.gMatrix;
  }
  cache.gmCache = gsap2.ticker.frame;
  return cache.gMatrix = getGlobalMatrix(el, true, false, true);
};
var _getDOMDepth = function _getDOMDepth2(el, invert, level) {
  if (level === undefined) {
    level = 0;
  }
  var parent = el.parentNode, inc = 1000 * Math.pow(10, level) * (invert ? -1 : 1), l = invert ? -inc * 900 : 0;
  while (el) {
    l += inc;
    el = el.previousSibling;
  }
  return parent ? l + _getDOMDepth2(parent, invert, level + 1) : l;
};
var _orderByDOMDepth = function _orderByDOMDepth2(comps, invert, isElStates) {
  comps.forEach(function(comp) {
    return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
  });
  comps.sort(function(c1, c2) {
    return c1.d - c2.d;
  });
  return comps;
};
var _recordInlineStyles = function _recordInlineStyles2(elState, props) {
  var style = elState.element.style, a = elState.css = elState.css || [], i = props.length, p, v;
  while (i--) {
    p = props[i];
    v = style[p] || style.getPropertyValue(p);
    a.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
  }
  return style;
};
var _applyInlineStyles = function _applyInlineStyles2(state) {
  var css = state.css, style = state.element.style, i = 0;
  state.cache.uncache = 1;
  for (;i < css.length; i += 2) {
    css[i + 1] ? style[css[i]] = css[i + 1] : style.removeProperty(css[i]);
  }
  if (!css[css.indexOf("transform") + 1] && style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
};
var _setFinalStates = function _setFinalStates2(comps, onlyTransforms) {
  comps.forEach(function(c) {
    return c.a.cache.uncache = 1;
  });
  onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
};
var _absoluteProps = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(",");
var _makeAbsolute = function _makeAbsolute2(elState, fallbackNode, ignoreBatch) {
  var { element, width, height, uncache, getProp } = elState, style = element.style, i = 4, result, displayIsNone, cs;
  typeof fallbackNode !== "object" && (fallbackNode = elState);
  if (_batch && ignoreBatch !== 1) {
    _batch._abs.push({
      t: element,
      b: elState,
      a: elState,
      sd: 0
    });
    _batch._final.push(function() {
      return (elState.cache.uncache = 1) && _applyInlineStyles(elState);
    });
    return element;
  }
  displayIsNone = getProp("display") === "none";
  if (!elState.isVisible || displayIsNone) {
    displayIsNone && (_recordInlineStyles(elState, ["display"]).display = fallbackNode.display);
    elState.matrix = fallbackNode.matrix;
    elState.width = width = elState.width || fallbackNode.width;
    elState.height = height = elState.height || fallbackNode.height;
  }
  _recordInlineStyles(elState, _absoluteProps);
  cs = window.getComputedStyle(element);
  while (i--) {
    style[_absoluteProps[i]] = cs[_absoluteProps[i]];
  }
  style.gridArea = "1 / 1 / 1 / 1";
  style.transition = "none";
  style.position = "absolute";
  style.width = width + "px";
  style.height = height + "px";
  style.top || (style.top = "0px");
  style.left || (style.left = "0px");
  if (uncache) {
    result = new ElementState(element);
  } else {
    result = _copy(elState, _emptyObj);
    result.position = "absolute";
    if (elState.simple) {
      var bounds = element.getBoundingClientRect();
      result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
    } else {
      result.matrix = getGlobalMatrix(element, false, false, true);
    }
  }
  result = _fit(result, elState, true);
  elState.x = _closestTenth(result.x, 0.01);
  elState.y = _closestTenth(result.y, 0.01);
  return element;
};
var _filterComps = function _filterComps2(comps, targets) {
  if (targets !== true) {
    targets = _toArray(targets);
    comps = comps.filter(function(c) {
      if (targets.indexOf((c.sd < 0 ? c.b : c.a).element) !== -1) {
        return true;
      } else {
        c.t._gsap.renderTransform(1);
        if (c.b.isVisible) {
          c.t.style.width = c.b.width + "px";
          c.t.style.height = c.b.height + "px";
        }
      }
    });
  }
  return comps;
};
var _makeCompsAbsolute = function _makeCompsAbsolute2(comps) {
  return _orderByDOMDepth(comps, true).forEach(function(c) {
    return (c.a.isVisible || c.b.isVisible) && _makeAbsolute(c.sd < 0 ? c.b : c.a, c.b, 1);
  });
};
var _findElStateInState = function _findElStateInState2(state, other) {
  return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
};
var _parseElementState = function _parseElementState2(elOrNode, props, simple, other) {
  return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
};
var _recordProps = function _recordProps2(elState, props) {
  var getProp = gsap2.getProperty(elState.element, null, "native"), obj = elState.props = {}, i = props.length;
  while (i--) {
    obj[props[i]] = (getProp(props[i]) + "").trim();
  }
  obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
  return elState;
};
var _applyProps = function _applyProps2(element, props) {
  var style = element.style || element, p;
  for (p in props) {
    style[p] = props[p];
  }
};
var _getID = function _getID2(el) {
  var id = el.getAttribute("data-flip-id");
  id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
  return id;
};
var _elementsFromElementStates = function _elementsFromElementStates2(elStates) {
  return elStates.map(function(elState) {
    return elState.element;
  });
};
var _handleCallback = function _handleCallback2(callback, elStates, tl) {
  return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
};
var _fit = function _fit2(fromState, toState, scale, applyProps, fitChild, vars) {
  var { element, cache, parent, x, y } = fromState, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, bounds = toState.bounds, styles = vars && _getStyleSaver3 && _getStyleSaver3(element, "transform"), dimensionState = fromState, _toState$matrix = toState.matrix, e = _toState$matrix.e, f = _toState$matrix.f, deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild, skewX, fromPoint, toPoint, getProp, parentMatrix, matrix, bbox;
  if (simple || !parent) {
    scaleX = scaleY = 1;
    rotation = skewX = 0;
  } else {
    parentMatrix = _getInverseGlobalMatrix(parent);
    matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix);
    rotation = _round3(Math.atan2(matrix.b, matrix.a) * _RAD2DEG2);
    skewX = _round3(Math.atan2(matrix.c, matrix.d) * _RAD2DEG2 + rotation) % 360;
    scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
    scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD2);
    if (fitChild) {
      fitChild = _toArray(fitChild)[0];
      getProp = gsap2.getProperty(fitChild);
      bbox = fitChild.getBBox && typeof fitChild.getBBox === "function" && fitChild.getBBox();
      dimensionState = {
        scaleX: getProp("scaleX"),
        scaleY: getProp("scaleY"),
        width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
        height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
      };
    }
    cache.rotation = rotation + "deg";
    cache.skewX = skewX + "deg";
  }
  if (scale) {
    scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width;
    scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
    cache.scaleX = scaleX;
    cache.scaleY = scaleY;
  } else {
    width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
    height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
    element.style.width = width + "px";
    element.style.height = height + "px";
  }
  applyProps && _applyProps(element, toState.props);
  if (simple || !parent) {
    x += e - fromState.matrix.e;
    y += f - fromState.matrix.f;
  } else if (deep || parent !== toState.parent) {
    cache.renderTransform(1, cache);
    matrix = getGlobalMatrix(fitChild || element, false, false, true);
    fromPoint = parentMatrix.apply({
      x: matrix.e,
      y: matrix.f
    });
    toPoint = parentMatrix.apply({
      x: e,
      y: f
    });
    x += toPoint.x - fromPoint.x;
    y += toPoint.y - fromPoint.y;
  } else {
    parentMatrix.e = parentMatrix.f = 0;
    toPoint = parentMatrix.apply({
      x: e - fromState.matrix.e,
      y: f - fromState.matrix.f
    });
    x += toPoint.x;
    y += toPoint.y;
  }
  x = _closestTenth(x, 0.02);
  y = _closestTenth(y, 0.02);
  if (vars && !(vars instanceof ElementState)) {
    styles && styles.revert();
  } else {
    cache.x = x + "px";
    cache.y = y + "px";
    cache.renderTransform(1, cache);
  }
  if (vars) {
    vars.x = x;
    vars.y = y;
    vars.rotation = rotation;
    vars.skewX = skewX;
    if (scale) {
      vars.scaleX = scaleX;
      vars.scaleY = scaleY;
    } else {
      vars.width = width;
      vars.height = height;
    }
  }
  return vars || cache;
};
var _parseState = function _parseState2(targetsOrState, vars) {
  return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
};
var _getChangingElState = function _getChangingElState2(toState, fromState, id) {
  var to1 = toState.idLookup[id], to2 = toState.alt[id];
  return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
};
var _bodyMetrics = [];
var _bodyProps = "width,height,overflowX,overflowY".split(",");
var _bodyLocked;
var _lockBodyScroll = function _lockBodyScroll2(lock) {
  if (lock !== _bodyLocked) {
    var s = _body2.style, w = _body2.clientWidth === window.outerWidth, h = _body2.clientHeight === window.outerHeight, i = 4;
    if (lock && (w || h)) {
      while (i--) {
        _bodyMetrics[i] = s[_bodyProps[i]];
      }
      if (w) {
        s.width = _body2.clientWidth + "px";
        s.overflowY = "hidden";
      }
      if (h) {
        s.height = _body2.clientHeight + "px";
        s.overflowX = "hidden";
      }
      _bodyLocked = lock;
    } else if (_bodyLocked) {
      while (i--) {
        _bodyMetrics[i] ? s[_bodyProps[i]] = _bodyMetrics[i] : s.removeProperty(_camelToDashed(_bodyProps[i]));
      }
      _bodyLocked = lock;
    }
  }
};
var _fromTo = function _fromTo2(fromState, toState, vars, relative) {
  fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
  vars = vars || {};
  var _vars = vars, clearProps2 = _vars.clearProps, onEnter = _vars.onEnter, onLeave = _vars.onLeave, absolute = _vars.absolute, absoluteOnLeave = _vars.absoluteOnLeave, custom = _vars.custom, delay = _vars.delay, paused = _vars.paused, repeat = _vars.repeat, repeatDelay = _vars.repeatDelay, yoyo = _vars.yoyo, toggleClass = _vars.toggleClass, nested = _vars.nested, _zIndex = _vars.zIndex, scale = _vars.scale, fade = _vars.fade, stagger = _vars.stagger, spin = _vars.spin, prune = _vars.prune, props = ("props" in vars ? vars : fromState).props, tweenVars = _copy(vars, _reserved), animation = gsap2.timeline({
    delay,
    paused,
    repeat,
    repeatDelay,
    yoyo,
    data: "isFlip"
  }), remainingProps = tweenVars, entering = [], leaving = [], comps = [], swapOutTargets = [], spinNum = spin === true ? 1 : spin || 0, spinFunc = typeof spin === "function" ? spin : function() {
    return spinNum;
  }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[relative !== 1 ? "to" : "from"], v, p, endTime, i, el, comp, state, targets, finalStates, fromNode, toNode, run, a, b;
  for (p in toState.idLookup) {
    toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
    el = toNode.element;
    fromNode = fromState.idLookup[p];
    fromState.alt[p] && el === fromNode.element && (fromState.alt[p].isVisible || !toNode.isVisible) && (fromNode = fromState.alt[p]);
    if (fromNode) {
      comp = {
        t: el,
        b: fromNode,
        a: toNode,
        sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
      };
      comps.push(comp);
      if (comp.sd) {
        if (comp.sd < 0) {
          comp.b = toNode;
          comp.a = fromNode;
        }
        interrupted && _recordInlineStyles(comp.b, props ? _memoizedRemoveProps[props] : _removeProps);
        fade && comps.push(comp.swap = {
          t: fromNode.element,
          b: comp.b,
          a: comp.a,
          sd: -comp.sd,
          swap: comp
        });
      }
      el._flip = fromNode.element._flip = _batch ? _batch.timeline : animation;
    } else if (toNode.isVisible) {
      comps.push({
        t: el,
        b: _copy(toNode, {
          isVisible: 1
        }),
        a: toNode,
        sd: 0,
        entering: 1
      });
      el._flip = _batch ? _batch.timeline : animation;
    }
  }
  props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function(p2) {
    return tweenVars[p2] = function(i2) {
      return comps[i2].a.props[p2];
    };
  });
  comps.finalStates = finalStates = [];
  run = function run() {
    _orderByDOMDepth(comps);
    _lockBodyScroll(true);
    for (i = 0;i < comps.length; i++) {
      comp = comps[i];
      a = comp.a;
      b = comp.b;
      if (prune && !a.isDifferent(b) && !comp.entering) {
        comps.splice(i--, 1);
      } else {
        el = comp.t;
        nested && !(comp.sd < 0) && i && (a.matrix = getGlobalMatrix(el, false, false, true));
        if (b.isVisible && a.isVisible) {
          if (comp.sd < 0) {
            state = new ElementState(el, props, fromState.simple);
            _fit(state, a, scale, 0, 0, state);
            state.matrix = getGlobalMatrix(el, false, false, true);
            state.css = comp.b.css;
            comp.a = a = state;
            fade && (el.style.opacity = interrupted ? b.opacity : a.opacity);
            stagger && swapOutTargets.push(el);
          } else if (comp.sd > 0 && fade) {
            el.style.opacity = interrupted ? a.opacity - b.opacity : "0";
          }
          _fit(a, b, scale, props);
        } else if (b.isVisible !== a.isVisible) {
          if (!b.isVisible) {
            a.isVisible && entering.push(a);
            comps.splice(i--, 1);
          } else if (!a.isVisible) {
            b.css = a.css;
            leaving.push(b);
            comps.splice(i--, 1);
            absolute && nested && _fit(a, b, scale, props);
          }
        }
        if (!scale) {
          el.style.maxWidth = Math.max(a.width, b.width) + "px";
          el.style.maxHeight = Math.max(a.height, b.height) + "px";
          el.style.minWidth = Math.min(a.width, b.width) + "px";
          el.style.minHeight = Math.min(a.height, b.height) + "px";
        }
        nested && toggleClass && el.classList.add(toggleClass);
      }
      finalStates.push(a);
    }
    var classTargets;
    if (toggleClass) {
      classTargets = finalStates.map(function(s) {
        return s.element;
      });
      nested && classTargets.forEach(function(e) {
        return e.classList.remove(toggleClass);
      });
    }
    _lockBodyScroll(false);
    if (scale) {
      tweenVars.scaleX = function(i2) {
        return comps[i2].a.scaleX;
      };
      tweenVars.scaleY = function(i2) {
        return comps[i2].a.scaleY;
      };
    } else {
      tweenVars.width = function(i2) {
        return comps[i2].a.width + "px";
      };
      tweenVars.height = function(i2) {
        return comps[i2].a.height + "px";
      };
      tweenVars.autoRound = vars.autoRound || false;
    }
    tweenVars.x = function(i2) {
      return comps[i2].a.x + "px";
    };
    tweenVars.y = function(i2) {
      return comps[i2].a.y + "px";
    };
    tweenVars.rotation = function(i2) {
      return comps[i2].a.rotation + (spin ? spinFunc(i2, targets[i2], targets) * 360 : 0);
    };
    tweenVars.skewX = function(i2) {
      return comps[i2].a.skewX;
    };
    targets = comps.map(function(c) {
      return c.t;
    });
    if (_zIndex || _zIndex === 0) {
      tweenVars.modifiers = {
        zIndex: function zIndex() {
          return _zIndex;
        }
      };
      tweenVars.zIndex = _zIndex;
      tweenVars.immediateRender = vars.immediateRender !== false;
    }
    fade && (tweenVars.opacity = function(i2) {
      return comps[i2].sd < 0 ? 0 : comps[i2].sd > 0 ? comps[i2].a.opacity : "+=0";
    });
    if (swapOutTargets.length) {
      stagger = gsap2.utils.distribute(stagger);
      var dummyArray = targets.slice(swapOutTargets.length);
      tweenVars.stagger = function(i2, el2) {
        return stagger(~swapOutTargets.indexOf(el2) ? targets.indexOf(comps[i2].swap.t) : i2, el2, dummyArray);
      };
    }
    _callbacks.forEach(function(name) {
      return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
    });
    if (custom && targets.length) {
      remainingProps = _copy(tweenVars, _reserved);
      if ("scale" in custom) {
        custom.scaleX = custom.scaleY = custom.scale;
        delete custom.scale;
      }
      for (p in custom) {
        v = _copy(custom[p], _fitReserved);
        v[p] = tweenVars[p];
        !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
        v.stagger = tweenVars.stagger;
        addFunc.call(animation, targets, v, 0);
        delete remainingProps[p];
      }
    }
    if (targets.length || leaving.length || entering.length) {
      toggleClass && animation.add(function() {
        return _toggleClass(classTargets, toggleClass, animation._zTime < 0 ? "remove" : "add");
      }, 0) && !paused && _toggleClass(classTargets, toggleClass, "add");
      targets.length && addFunc.call(animation, targets, remainingProps, 0);
    }
    _handleCallback(onEnter, entering, animation);
    _handleCallback(onLeave, leaving, animation);
    var batchTl = _batch && _batch.timeline;
    if (batchTl) {
      batchTl.add(animation, 0);
      _batch._final.push(function() {
        return _setFinalStates(comps, !clearProps2);
      });
    }
    endTime = animation.duration();
    animation.call(function() {
      var forward = animation.time() >= endTime;
      forward && !batchTl && _setFinalStates(comps, !clearProps2);
      toggleClass && _toggleClass(classTargets, toggleClass, forward ? "remove" : "add");
    });
  };
  absoluteOnLeave && (absolute = comps.filter(function(comp2) {
    return !comp2.sd && !comp2.a.isVisible && comp2.b.isVisible;
  }).map(function(comp2) {
    return comp2.a.element;
  }));
  if (_batch) {
    var _batch$_abs;
    absolute && (_batch$_abs = _batch._abs).push.apply(_batch$_abs, _filterComps(comps, absolute));
    _batch._run.push(run);
  } else {
    absolute && _makeCompsAbsolute(_filterComps(comps, absolute));
    run();
  }
  var anim = _batch ? _batch.timeline : animation;
  anim.revert = function() {
    return _killFlip(anim, 1, 1);
  };
  return anim;
};
var _interrupt3 = function _interrupt4(tl) {
  tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
  tl.getChildren(true, false, true).forEach(_interrupt4);
};
var _killFlip = function _killFlip2(tl, action, force) {
  if (tl && tl.progress() < 1 && (!tl.paused() || force)) {
    if (action) {
      _interrupt3(tl);
      action < 2 && tl.progress(1);
      tl.kill();
    }
    return true;
  }
};
var _createLookup = function _createLookup2(state) {
  var lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i = elStates.length, elState;
  while (i--) {
    elState = elStates[i];
    lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
  }
};
var FlipState = /* @__PURE__ */ function() {
  function FlipState2(targets, vars, targetsAreElementStates) {
    this.props = vars && vars.props;
    this.simple = !!(vars && vars.simple);
    if (targetsAreElementStates) {
      this.targets = _elementsFromElementStates(targets);
      this.elementStates = targets;
      _createLookup(this);
    } else {
      this.targets = _toArray(targets);
      var soft = vars && (vars.kill === false || vars.batch && !vars.kill);
      _batch && !soft && _batch._kill.push(this);
      this.update(soft || !!_batch);
    }
  }
  var _proto = FlipState2.prototype;
  _proto.update = function update(soft) {
    var _this = this;
    this.elementStates = this.targets.map(function(el) {
      return new ElementState(el, _this.props, _this.simple);
    });
    _createLookup(this);
    this.interrupt(soft);
    this.recordInlineStyles();
    return this;
  };
  _proto.clear = function clear() {
    this.targets.length = this.elementStates.length = 0;
    _createLookup(this);
    return this;
  };
  _proto.fit = function fit(state, scale, nested) {
    var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i = 0, fromNode, toNode;
    for (;i < elStatesInOrder.length; i++) {
      fromNode = elStatesInOrder[i];
      nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
      toNode = toElStates[fromNode.id];
      toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
      fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
    }
    return this;
  };
  _proto.getProperty = function getProperty(element, property) {
    var es = this.getElementState(element) || _emptyObj;
    return (property in es ? es : es.props || _emptyObj)[property];
  };
  _proto.add = function add(state) {
    var i = state.targets.length, lookup = this.idLookup, alt = this.alt, index, es, es2;
    while (i--) {
      es = state.elementStates[i];
      es2 = lookup[es.id];
      if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
        index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
        this.targets.splice(index, 1, state.targets[i]);
        this.elementStates.splice(index, 1, es);
      } else {
        this.targets.push(state.targets[i]);
        this.elementStates.push(es);
      }
    }
    state.interrupted && (this.interrupted = true);
    state.simple || (this.simple = false);
    _createLookup(this);
    return this;
  };
  _proto.compare = function compare(state) {
    var l1 = state.idLookup, l2 = this.idLookup, unchanged = [], changed = [], enter = [], leave = [], targets = [], a1 = state.alt, a2 = this.alt, place = function place(s12, s22, el2) {
      return (s12.isVisible !== s22.isVisible ? s12.isVisible ? enter : leave : s12.isVisible ? changed : unchanged).push(el2) && targets.push(el2);
    }, placeIfDoesNotExist = function placeIfDoesNotExist(s12, s22, el2) {
      return targets.indexOf(el2) < 0 && place(s12, s22, el2);
    }, s1, s2, p, el, s1Alt, s2Alt, c1, c2;
    for (p in l1) {
      s1Alt = a1[p];
      s2Alt = a2[p];
      s1 = !s1Alt ? l1[p] : _getChangingElState(state, this, p);
      el = s1.element;
      s2 = l2[p];
      if (s2Alt) {
        c2 = s2.isVisible || !s2Alt.isVisible && el === s2.element ? s2 : s2Alt;
        c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1;
        if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
          (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
          targets.push(c1.element, c2.element);
        } else {
          place(c1, c2, c1.element);
        }
        s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p]);
        placeIfDoesNotExist(c1.element !== s2.element && s1Alt ? s1Alt : c1, s2, s2.element);
        placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
        s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s2, s1Alt.element);
      } else {
        !s2 ? enter.push(el) : !s2.isDifferent(s1) ? unchanged.push(el) : place(s1, s2, el);
        s1Alt && placeIfDoesNotExist(s1Alt, s2, s1Alt.element);
      }
    }
    for (p in l2) {
      if (!l1[p]) {
        leave.push(l2[p].element);
        a2[p] && leave.push(a2[p].element);
      }
    }
    return {
      changed,
      unchanged,
      enter,
      leave
    };
  };
  _proto.recordInlineStyles = function recordInlineStyles() {
    var props = _memoizedRemoveProps[this.props] || _removeProps, i = this.elementStates.length;
    while (i--) {
      _recordInlineStyles(this.elementStates[i], props);
    }
  };
  _proto.interrupt = function interrupt(soft) {
    var _this2 = this;
    var timelines = [];
    this.targets.forEach(function(t) {
      var tl = t._flip, foundInProgress = _killFlip(tl, soft ? 0 : 1);
      soft && foundInProgress && timelines.indexOf(tl) < 0 && tl.add(function() {
        return _this2.updateVisibility();
      });
      foundInProgress && timelines.push(tl);
    });
    !soft && timelines.length && this.updateVisibility();
    this.interrupted || (this.interrupted = !!timelines.length);
  };
  _proto.updateVisibility = function updateVisibility() {
    this.elementStates.forEach(function(es) {
      var b = es.element.getBoundingClientRect();
      es.isVisible = !!(b.width || b.height || b.top || b.left);
      es.uncache = 1;
    });
  };
  _proto.getElementState = function getElementState(element) {
    return this.elementStates[this.targets.indexOf(_getEl(element))];
  };
  _proto.makeAbsolute = function makeAbsolute() {
    return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
  };
  return FlipState2;
}();
var ElementState = /* @__PURE__ */ function() {
  function ElementState2(element, props, simple) {
    this.element = element;
    this.update(props, simple);
  }
  var _proto2 = ElementState2.prototype;
  _proto2.isDifferent = function isDifferent(state) {
    var b1 = this.bounds, b2 = state.bounds;
    return b1.top !== b2.top || b1.left !== b2.left || b1.width !== b2.width || b1.height !== b2.height || !this.matrix.equals(state.matrix) || this.opacity !== state.opacity || this.props && state.props && JSON.stringify(this.props) !== JSON.stringify(state.props);
  };
  _proto2.update = function update(props, simple) {
    var self2 = this, element = self2.element, getProp = gsap2.getProperty(element), cache = gsap2.core.getCache(element), bounds = element.getBoundingClientRect(), bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(), m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
    self2.getProp = getProp;
    self2.element = element;
    self2.id = _getID(element);
    self2.matrix = m;
    self2.cache = cache;
    self2.bounds = bounds;
    self2.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
    self2.display = getProp("display");
    self2.position = getProp("position");
    self2.parent = element.parentNode;
    self2.x = getProp("x");
    self2.y = getProp("y");
    self2.scaleX = cache.scaleX;
    self2.scaleY = cache.scaleY;
    self2.rotation = getProp("rotation");
    self2.skewX = getProp("skewX");
    self2.opacity = getProp("opacity");
    self2.width = bbox ? bbox.width : _closestTenth(getProp("width", "px"), 0.04);
    self2.height = bbox ? bbox.height : _closestTenth(getProp("height", "px"), 0.04);
    props && _recordProps(self2, _memoizedProps[props] || _memoizeProps(props));
    self2.ctm = element.getCTM && element.nodeName.toLowerCase() === "svg" && _getCTM(element).inverse();
    self2.simple = simple || _round3(m.a) === 1 && !_round3(m.b) && !_round3(m.c) && _round3(m.d) === 1;
    self2.uncache = 0;
  };
  return ElementState2;
}();
var FlipAction = /* @__PURE__ */ function() {
  function FlipAction2(vars, batch) {
    this.vars = vars;
    this.batch = batch;
    this.states = [];
    this.timeline = batch.timeline;
  }
  var _proto3 = FlipAction2.prototype;
  _proto3.getStateById = function getStateById(id) {
    var i = this.states.length;
    while (i--) {
      if (this.states[i].idLookup[id]) {
        return this.states[i];
      }
    }
  };
  _proto3.kill = function kill() {
    this.batch.remove(this);
  };
  return FlipAction2;
}();
var FlipBatch = /* @__PURE__ */ function() {
  function FlipBatch2(id) {
    this.id = id;
    this.actions = [];
    this._kill = [];
    this._final = [];
    this._abs = [];
    this._run = [];
    this.data = {};
    this.state = new FlipState;
    this.timeline = gsap2.timeline();
  }
  var _proto4 = FlipBatch2.prototype;
  _proto4.add = function add(config3) {
    var result = this.actions.filter(function(action) {
      return action.vars === config3;
    });
    if (result.length) {
      return result[0];
    }
    result = new FlipAction(typeof config3 === "function" ? {
      animate: config3
    } : config3, this);
    this.actions.push(result);
    return result;
  };
  _proto4.remove = function remove(action) {
    var i = this.actions.indexOf(action);
    i >= 0 && this.actions.splice(i, 1);
    return this;
  };
  _proto4.getState = function getState(merge) {
    var _this3 = this;
    var prevBatch = _batch, prevAction = _batchAction;
    _batch = this;
    this.state.clear();
    this._kill.length = 0;
    this.actions.forEach(function(action) {
      if (action.vars.getState) {
        action.states.length = 0;
        _batchAction = action;
        action.state = action.vars.getState(action);
      }
      merge && action.states.forEach(function(s) {
        return _this3.state.add(s);
      });
    });
    _batchAction = prevAction;
    _batch = prevBatch;
    this.killConflicts();
    return this;
  };
  _proto4.animate = function animate() {
    var _this4 = this;
    var prevBatch = _batch, tl = this.timeline, i = this.actions.length, finalStates, endTime;
    _batch = this;
    tl.clear();
    this._abs.length = this._final.length = this._run.length = 0;
    this.actions.forEach(function(a) {
      a.vars.animate && a.vars.animate(a);
      var onEnter = a.vars.onEnter, onLeave = a.vars.onLeave, targets = a.targets, s, result;
      if (targets && targets.length && (onEnter || onLeave)) {
        s = new FlipState;
        a.states.forEach(function(state) {
          return s.add(state);
        });
        result = s.compare(Flip.getState(targets));
        result.enter.length && onEnter && onEnter(result.enter);
        result.leave.length && onLeave && onLeave(result.leave);
      }
    });
    _makeCompsAbsolute(this._abs);
    this._run.forEach(function(f) {
      return f();
    });
    endTime = tl.duration();
    finalStates = this._final.slice(0);
    tl.add(function() {
      if (endTime <= tl.time()) {
        finalStates.forEach(function(f) {
          return f();
        });
        _forEachBatch(_this4, "onComplete");
      }
    });
    _batch = prevBatch;
    while (i--) {
      this.actions[i].vars.once && this.actions[i].kill();
    }
    _forEachBatch(this, "onStart");
    tl.restart();
    return this;
  };
  _proto4.loadState = function loadState(done) {
    done || (done = function done() {
      return 0;
    });
    var queue = [];
    this.actions.forEach(function(c) {
      if (c.vars.loadState) {
        var i, f = function f(targets) {
          targets && (c.targets = targets);
          i = queue.indexOf(f);
          if (~i) {
            queue.splice(i, 1);
            queue.length || done();
          }
        };
        queue.push(f);
        c.vars.loadState(f);
      }
    });
    queue.length || done();
    return this;
  };
  _proto4.setState = function setState() {
    this.actions.forEach(function(c) {
      return c.targets = c.vars.setState && c.vars.setState(c);
    });
    return this;
  };
  _proto4.killConflicts = function killConflicts(soft) {
    this.state.interrupt(soft);
    this._kill.forEach(function(state) {
      return state.interrupt(soft);
    });
    return this;
  };
  _proto4.run = function run(skipGetState, merge) {
    var _this5 = this;
    if (this !== _batch) {
      skipGetState || this.getState(merge);
      this.loadState(function() {
        if (!_this5._killed) {
          _this5.setState();
          _this5.animate();
        }
      });
    }
    return this;
  };
  _proto4.clear = function clear(stateOnly) {
    this.state.clear();
    stateOnly || (this.actions.length = 0);
  };
  _proto4.getStateById = function getStateById(id) {
    var i = this.actions.length, s;
    while (i--) {
      s = this.actions[i].getStateById(id);
      if (s) {
        return s;
      }
    }
    return this.state.idLookup[id] && this.state;
  };
  _proto4.kill = function kill() {
    this._killed = 1;
    this.clear();
    delete _batchLookup[this.id];
  };
  return FlipBatch2;
}();
var Flip = /* @__PURE__ */ function() {
  function Flip2() {
  }
  Flip2.getState = function getState(targets, vars) {
    var state = _parseState(targets, vars);
    _batchAction && _batchAction.states.push(state);
    vars && vars.batch && Flip2.batch(vars.batch).state.add(state);
    return state;
  };
  Flip2.from = function from(state, vars) {
    vars = vars || {};
    "clearProps" in vars || (vars.clearProps = true);
    return _fromTo(state, _parseState(vars.targets || state.targets, {
      props: vars.props || state.props,
      simple: vars.simple,
      kill: !!vars.kill
    }), vars, -1);
  };
  Flip2.to = function to(state, vars) {
    return _fromTo(state, _parseState(vars.targets || state.targets, {
      props: vars.props || state.props,
      simple: vars.simple,
      kill: !!vars.kill
    }), vars, 1);
  };
  Flip2.fromTo = function fromTo(fromState, toState, vars) {
    return _fromTo(fromState, toState, vars);
  };
  Flip2.fit = function fit(fromEl, toEl, vars) {
    var v = vars ? _copy(vars, _fitReserved) : {}, _ref = vars || v, absolute = _ref.absolute, scale = _ref.scale, getVars = _ref.getVars, props = _ref.props, runBackwards = _ref.runBackwards, onComplete = _ref.onComplete, simple = _ref.simple, fitChild = vars && vars.fitChild && _getEl(vars.fitChild), before = _parseElementState(toEl, props, simple, fromEl), after = _parseElementState(fromEl, 0, simple, before), inlineProps = props ? _memoizedRemoveProps[props] : _removeProps, ctx = gsap2.context();
    props && _applyProps(v, before.props);
    _recordInlineStyles(after, inlineProps);
    if (runBackwards) {
      "immediateRender" in v || (v.immediateRender = true);
      v.onComplete = function() {
        _applyInlineStyles(after);
        onComplete && onComplete.apply(this, arguments);
      };
    }
    absolute && _makeAbsolute(after, before);
    v = _fit(after, before, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
    ctx && !getVars && ctx.add(function() {
      return function() {
        return _applyInlineStyles(after);
      };
    });
    return getVars ? v : v.duration ? gsap2.to(after.element, v) : null;
  };
  Flip2.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
    return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
  };
  Flip2.batch = function batch(id) {
    id || (id = "default");
    return _batchLookup[id] || (_batchLookup[id] = new FlipBatch(id));
  };
  Flip2.killFlipsOf = function killFlipsOf(targets, complete) {
    (targets instanceof FlipState ? targets.targets : _toArray(targets)).forEach(function(t) {
      return t && _killFlip(t._flip, complete !== false ? 1 : 2);
    });
  };
  Flip2.isFlipping = function isFlipping(target) {
    var f = Flip2.getByTarget(target);
    return !!f && f.isActive();
  };
  Flip2.getByTarget = function getByTarget(target) {
    return (_getEl(target) || _emptyObj)._flip;
  };
  Flip2.getElementState = function getElementState(target, props) {
    return new ElementState(_getEl(target), props);
  };
  Flip2.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
    var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
    return point ? m.apply(point) : m;
  };
  Flip2.register = function register(core) {
    _body2 = typeof document !== "undefined" && document.body;
    if (_body2) {
      gsap2 = core;
      _setDoc(_body2);
      _toArray = gsap2.utils.toArray;
      _getStyleSaver3 = gsap2.core.getStyleSaver;
      var snap3 = gsap2.utils.snap(0.1);
      _closestTenth = function _closestTenth(value, add) {
        return snap3(parseFloat(value) + add);
      };
    }
  };
  return Flip2;
}();
Flip.version = "3.12.5";
typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip);

// hooks/useFlipGSAP.tsx
function useFlipGSAP(target, options = {
  revertOnUpdate: false
}) {
  const [isFlipped, setIsFlipped] = import_react17.useState(false);
  const flipStateRef = import_react17.useRef(null);
  const scopeRef = import_react17.useRef(null);
  const { props, simple, revertOnUpdate, ...vars } = options;
  const captureState = import_react17.useCallback(() => {
    const mergedVars = { props, simple, targets: target };
    flipStateRef.current = Flip.getState(target, mergedVars);
  }, [target, props, simple]);
  const play = import_react17.useCallback(() => {
    captureState();
    setIsFlipped((prev) => !prev);
  }, [captureState]);
  useGSAP(() => {
    if (flipStateRef.current) {
      Flip.from(flipStateRef.current, vars);
      flipStateRef.current = null;
    }
  }, {
    scope: scopeRef,
    dependencies: [isFlipped],
    revertOnUpdate
  });
  return { isFlipped, play, scopeRef };
}
gsapWithCSS.registerPlugin(Flip);

// hooks/useForm.tsx
var import_react19 = __toESM(require_react());
function useForm(initialValues, validate) {
  const [values, setValues] = import_react19.useState(initialValues);
  const [errors, setErrors] = import_react19.useState(() => createInitialErrorsState(initialValues));
  const [touched, setTouched] = import_react19.useState(() => createInitialTouchedState(initialValues));
  const [isSubmitting, setIsSubmitting] = import_react19.useState(false);
  const [submissionStatus, setSubmissionStatus] = import_react19.useState("idle");
  const handleChange = import_react19.useCallback((e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }, []);
  const handleBlur = import_react19.useCallback((e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }
  }, [values, validate]);
  const handleSubmit = import_react19.useCallback(async (e, callback) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("idle");
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      setTouched((t) => createAllTouchedState(values, t));
      const isValid = !Object.values(validationErrors).some((error) => error);
      if (isValid) {
        try {
          await callback(values);
          setSubmissionStatus("success");
        } catch (error) {
          setSubmissionStatus("error");
        }
      } else {
        setSubmissionStatus("error");
      }
    }
    setIsSubmitting(false);
  }, [values, validate]);
  const resetForm = import_react19.useCallback(() => {
    setValues(initialValues);
    setErrors(createInitialErrorsState(initialValues));
    setTouched(createInitialTouchedState(initialValues));
    setIsSubmitting(false);
    setSubmissionStatus("idle");
  }, [initialValues]);
  import_react19.useEffect(() => {
    if (validate) {
      const newErrors = validate(values);
      if (!areErrorsEqual(errors, newErrors)) {
        setErrors(newErrors);
      }
    }
  }, [values, validate, errors]);
  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isSubmitting,
    submissionStatus
  };
}
function areErrorsEqual(errors1, errors2) {
  const keys = Object.keys(errors1);
  return keys.every((key) => errors1[key] === errors2[key]);
}
function createInitialErrorsState(initialValues) {
  return Object.keys(initialValues).reduce((acc, key) => {
    acc[key] = undefined;
    return acc;
  }, {});
}
function createInitialTouchedState(initialValues) {
  return Object.keys(initialValues).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {});
}
function createAllTouchedState(values, currentTouched) {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = true;
    return acc;
  }, currentTouched);
}

// hooks/useGeolocation.tsx
var import_react20 = __toESM(require_react());
function useGeolocation(options) {
  const [loading, setLoading] = import_react20.useState(true);
  const [error, setError] = import_react20.useState(null);
  const [data, setData] = import_react20.useState({});
  import_react20.useEffect(() => {
    const successHandler = (e) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };
    const errorHandler = (e) => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
    const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);
    return () => navigator.geolocation.clearWatch(id);
  }, [options]);
  return { loading, error, data };
}

// hooks/useGlobalState.tsx
var import_react21 = __toESM(require_react());
function useGlobalState(key, initialValue) {
  const [value, setValue] = import_react21.useState(() => {
    if (!globalState.has(key) && initialValue !== undefined) {
      globalState.set(key, initialValue);
    }
    return globalState.get(key);
  });
  import_react21.useEffect(() => {
    const listener = () => {
      setValue(globalState.get(key));
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [key]);
  const setGlobalState = import_react21.useCallback((newValue) => {
    const updatedValue = typeof newValue === "function" ? newValue(globalState.get(key)) : newValue;
    globalState.set(key, updatedValue);
    listeners.forEach((listener) => listener());
  }, [key]);
  return [value, setGlobalState];
}
var globalState = new Map;
var listeners = new Set;

// hooks/useHover.tsx
var import_react22 = __toESM(require_react());
function useHover(ref) {
  const [hovered, setHovered] = import_react22.useState(false);
  useEventListener("mouseover", () => setHovered(true), ref.current);
  useEventListener("mouseout", () => setHovered(false), ref.current);
  return hovered;
}

// hooks/useIdle.tsx
var import_react23 = __toESM(require_react());
function useIdle(idleTime) {
  const [isIdle, setIsIdle] = import_react23.useState(false);
  const idleTimerRef = import_react23.useRef();
  const handleActivity = import_react23.useCallback(() => {
    setIsIdle(false);
    if (idleTimerRef.current)
      clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true);
    }, idleTime);
  }, [idleTime]);
  import_react23.useEffect(() => {
    const events = ["mousemove", "keydown", "scroll"];
    events.forEach((event) => window.addEventListener(event, handleActivity));
    return () => {
      if (idleTimerRef.current)
        clearTimeout(idleTimerRef.current);
      events.forEach((event) => window.removeEventListener(event, handleActivity));
    };
  }, [handleActivity]);
  return isIdle;
}

// hooks/useImageLoad.tsx
var import_react24 = __toESM(require_react());
function useImageLoad({ thumbnailSrc, fullSrc, lazyLoad = false }, imgRef) {
  const [state, setState] = import_react24.useState({
    src: lazyLoad ? "" : thumbnailSrc,
    isLoading: !lazyLoad,
    isLoaded: false,
    hasError: false
  });
  const loadImage = import_react24.useCallback((imageSrc) => {
    if (!imgRef.current)
      return;
    setState((prevState) => ({ ...prevState, isLoading: true }));
    const img = new Image;
    img.src = imageSrc;
    img.onload = () => {
      setState({
        src: imageSrc,
        isLoading: false,
        isLoaded: true,
        hasError: false
      });
      if (imageSrc === thumbnailSrc && fullSrc) {
        loadImage(fullSrc);
      }
    };
    img.onerror = () => {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        hasError: true
      }));
    };
  }, [thumbnailSrc, fullSrc, imgRef]);
  import_react24.useEffect(() => {
    if (typeof window === "undefined")
      return;
    if (!lazyLoad) {
      loadImage(thumbnailSrc);
    } else if (imgRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage(thumbnailSrc);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(imgRef.current);
      return () => observer.disconnect();
    }
  }, [thumbnailSrc, lazyLoad, loadImage, imgRef]);
  return state;
}

// hooks/useKeyPress.tsx
var import_react25 = __toESM(require_react());
function useKeyPress(targetKey, options = {}) {
  const [keyPressed, setKeyPressed] = import_react25.useState(false);
  const debounceTimeout = import_react25.useRef(null);
  const { debounce = 0, targetElement = null } = options;
  const handleKeyEvent = import_react25.useCallback((event) => {
    const keyboardEvent = event;
    if (keyboardEvent.key === targetKey) {
      if (debounceTimeout.current)
        clearTimeout(debounceTimeout.current);
      debounceTimeout.current = window.setTimeout(() => {
        setKeyPressed(keyboardEvent.type === "keydown");
      }, debounce);
    }
  }, [targetKey, debounce]);
  import_react25.useEffect(() => {
    const target = targetElement || window;
    target.addEventListener("keydown", handleKeyEvent);
    target.addEventListener("keyup", handleKeyEvent);
    return () => {
      target.removeEventListener("keydown", handleKeyEvent);
      target.removeEventListener("keyup", handleKeyEvent);
      if (debounceTimeout.current)
        clearTimeout(debounceTimeout.current);
    };
  }, [handleKeyEvent, targetElement]);
  return keyPressed;
}

// hooks/useLockScroll.tsx
var import_react26 = __toESM(require_react());
function useLockScroll(lock = true) {
  import_react26.useLayoutEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (lock) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (lock) {
        document.body.style.overflow = originalStyle;
      }
    };
  }, [lock]);
}

// hooks/useMounted.tsx
var import_react27 = __toESM(require_react());
function useMounted(callback) {
  import_react27.useEffect(callback, []);
}

// hooks/useLongPress.tsx
function useLongPress(ref, cb, { delay = 250 } = {}) {
  const { reset, clear } = useTimeout(cb, delay);
  useMounted(clear);
  useEventListener("mousedown", reset, ref.current);
  useEventListener("touchstart", reset, ref.current);
  useEventListener("mouseup", clear, ref.current);
  useEventListener("mouseleave", clear, ref.current);
  useEventListener("touchend", clear, ref.current);
}

// hooks/useMediaDevices.tsx
var import_react28 = __toESM(require_react());
function useMediaDevices(requestPermission = false) {
  const [state, setState] = import_react28.useState({
    devices: [],
    isLoading: false,
    error: null
  });
  import_react28.useEffect(() => {
    if (typeof navigator === "undefined" || typeof navigator.mediaDevices === "undefined") {
      setState((s) => ({
        ...s,
        error: "Media devices are not available"
      }));
      return;
    }
    const handleDeviceChange = async () => {
      try {
        if (requestPermission) {
          await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
          });
        }
        const devices = await navigator.mediaDevices.enumerateDevices();
        setState({
          devices: devices.map((device) => ({
            id: device.deviceId,
            kind: device.kind,
            label: device.label || "Unknown Device"
          })),
          isLoading: false,
          error: null
        });
      } catch (error) {
        setState((s) => ({
          ...s,
          isLoading: false,
          error: "Unable to enumerate devices"
        }));
      }
    };
    setState((s) => ({ ...s, isLoading: true }));
    handleDeviceChange();
    navigator.mediaDevices.addEventListener("devicechange", handleDeviceChange);
    return () => {
      navigator.mediaDevices.removeEventListener("devicechange", handleDeviceChange);
    };
  }, [requestPermission]);
  return state;
}

// hooks/useMouse.tsx
var import_react29 = __toESM(require_react());
function useMouse(ref, options = {
  offsetX: 10,
  offsetY: 10,
  avoidEdges: false,
  relativeToWindow: false
}) {
  const [mousePosition, setMousePosition] = import_react29.useState({
    x: 0,
    y: 0,
    position: "bottomRight"
  });
  const updateMousePosition = import_react29.useCallback((ev) => {
    const {
      offsetX,
      offsetY,
      avoidEdges,
      tooltipWidth = 100,
      tooltipHeight = 50,
      relativeToWindow
    } = options;
    let newX = ev.clientX + offsetX;
    let newY = ev.clientY + offsetY;
    let newPosition = "bottomRight";
    if (avoidEdges) {
      if (relativeToWindow) {
        if (newX + tooltipWidth > window.innerWidth) {
          newX = ev.clientX - tooltipWidth - offsetX;
          newPosition = "bottomLeft";
        }
        if (newY + tooltipHeight > window.innerHeight) {
          newY = ev.clientY - tooltipHeight - offsetY;
          newPosition = newPosition === "bottomLeft" ? "topLeft" : "topRight";
        }
      } else {
        const rect = ref?.current?.getBoundingClientRect();
        if (rect) {
          if (newX + tooltipWidth > rect.right) {
            newX = ev.clientX - tooltipWidth - offsetX;
            newPosition = "bottomLeft";
          }
          if (newY + tooltipHeight > rect.bottom) {
            newY = ev.clientY - tooltipHeight - offsetY;
            newPosition = newPosition === "bottomLeft" ? "topLeft" : "topRight";
          }
        }
      }
    }
    setMousePosition({ x: newX, y: newY, position: newPosition });
  }, [options, ref]);
  import_react29.useEffect(() => {
    const handleMouseMove = (ev) => {
      if (!ref || options.relativeToWindow) {
        updateMousePosition(ev);
      } else if (ref.current && ref.current.contains(ev.target)) {
        updateMousePosition(ev);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [updateMousePosition, options.relativeToWindow, ref]);
  return mousePosition;
}

// hooks/useOnlineStatus.tsx
var import_react30 = __toESM(require_react());
function useOnlineStatus() {
  const [online, setOnline] = import_react30.useState(navigator.onLine);
  useEventListener("online", () => setOnline(navigator.onLine));
  useEventListener("offline", () => setOnline(navigator.onLine));
  return online;
}

// hooks/useOnScreen.tsx
var import_react31 = __toESM(require_react());
function useOnScreen(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = import_react31.useState(false);
  import_react31.useEffect(() => {
    if (ref.current == null)
      return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { rootMargin });
    observer.observe(ref.current);
    return () => {
      if (ref.current == null)
        return;
      observer.unobserve(ref.current);
    };
  }, [ref.current, rootMargin]);
  return isVisible;
}

// hooks/useOrientation.tsx
var import_react32 = __toESM(require_react());
function useOrientation(elementRef, trackWindow = false) {
  const getOrientation = () => {
    const orientationData = {
      angle: 0,
      type: undefined,
      aspectRatio: undefined,
      elementOrientation: undefined
    };
    if (trackWindow && typeof window !== "undefined" && window.screen.orientation) {
      const { angle, type } = window.screen.orientation;
      orientationData.angle = angle;
      orientationData.type = type;
    }
    if (!trackWindow && elementRef?.current) {
      const { offsetWidth, offsetHeight } = elementRef.current;
      orientationData.aspectRatio = offsetWidth / offsetHeight;
      orientationData.elementOrientation = offsetWidth > offsetHeight ? "landscape" : "portrait";
    }
    return orientationData;
  };
  const [orientation, setOrientation] = import_react32.useState(getOrientation);
  const handleOrientationChange = import_react32.useCallback(() => {
    setOrientation(getOrientation());
  }, [elementRef, trackWindow]);
  import_react32.useEffect(() => {
    handleOrientationChange();
    window.addEventListener("resize", handleOrientationChange);
    if (trackWindow) {
      window.addEventListener("orientationchange", handleOrientationChange);
    }
    return () => {
      window.removeEventListener("resize", handleOrientationChange);
      if (trackWindow) {
        window.removeEventListener("orientationchange", handleOrientationChange);
      }
    };
  }, [handleOrientationChange, trackWindow]);
  return orientation;
}

// hooks/usePermission.tsx
var import_react33 = __toESM(require_react());
function usePermission(permissionName) {
  const [permission, setPermission] = import_react33.useState({
    state: "prompt",
    isLoading: false,
    error: null
  });
  import_react33.useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.permissions) {
      setPermission({
        state: "denied",
        isLoading: false,
        error: "Permissions API is not supported"
      });
      return;
    }
    const queryPermission = async () => {
      setPermission((prev) => ({ ...prev, isLoading: true }));
      try {
        const permissionStatus = await navigator.permissions.query({
          name: permissionName
        });
        setPermission({
          state: permissionStatus.state,
          isLoading: false,
          error: null
        });
        permissionStatus.onchange = () => {
          setPermission({
            state: permissionStatus.state,
            isLoading: false,
            error: null
          });
        };
      } catch (error) {
        setPermission({
          state: "denied",
          isLoading: false,
          error: error instanceof Error ? `Error querying ${permissionName} permission: ${error.message}` : "Unknown error"
        });
      }
    };
    queryPermission();
  }, [permissionName]);
  return permission;
}

// hooks/usePrevious.tsx
var import_react34 = __toESM(require_react());
function usePrevious(value) {
  const currentRef = import_react34.useRef(value);
  const previousRef = import_react34.useRef();
  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }
  return previousRef.current;
}

// hooks/useScript.tsx
function useScript(url) {
  return useAsync(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    return new Promise((resolve, reject) => {
      script.addEventListener("load", resolve);
      script.addEventListener("error", reject);
      document.body.appendChild(script);
    });
  }, [url]);
}

// hooks/useSize.tsx
var import_react35 = __toESM(require_react());
function useSize(ref) {
  const [size, setSize] = import_react35.useState({});
  import_react35.useEffect(() => {
    if (ref.current == null)
      return;
    const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return size;
}

// hooks/useStateHistory.tsx
var import_react36 = __toESM(require_react());
function useStateHistory(defaultValue, { capacity = 10 } = {}) {
  const [value, setValue] = import_react36.useState(defaultValue);
  const historyRef = import_react36.useRef([value]);
  const pointerRef = import_react36.useRef(0);
  const set = import_react36.useCallback((v) => {
    const resolvedValue = typeof v === "function" ? v(value) : v;
    if (historyRef.current[pointerRef.current] !== resolvedValue) {
      if (pointerRef.current < historyRef.current.length - 1) {
        historyRef.current.splice(pointerRef.current + 1);
      }
      historyRef.current.push(resolvedValue);
      while (historyRef.current.length > capacity) {
        historyRef.current.shift();
      }
      pointerRef.current = historyRef.current.length - 1;
    }
    setValue(resolvedValue);
  }, [capacity, value]);
  const back = import_react36.useCallback(() => {
    if (pointerRef.current <= 0)
      return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);
  const forward = import_react36.useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1)
      return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);
  const go = import_react36.useCallback((index) => {
    if (index < 0 || index > historyRef.current.length - 1)
      return;
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);
  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go
    }
  ];
}

// hooks/useStateValidation.tsx
var import_react37 = __toESM(require_react());
function useStateValidation(validationFunc, initialValue) {
  const [state, setState] = import_react37.useState(initialValue);
  const [isValid, setIsValid] = import_react37.useState(() => validationFunc(state));
  const onChange = import_react37.useCallback((nextState) => {
    const value = typeof nextState === "function" ? nextState(state) : nextState;
    setState(value);
    setIsValid(validationFunc(value));
  }, [validationFunc]);
  return [state, onChange, isValid];
}

// hooks/useToggle.tsx
var import_react38 = __toESM(require_react());
function useToggle(defaultValue) {
  const [value, setValue] = import_react38.useState(defaultValue);
  function toggleValue(value2) {
    setValue((currentValue) => typeof value2 === "boolean" ? value2 : !currentValue);
  }
  return [value, toggleValue];
}

// hooks/useUnmounted.tsx
var import_react39 = __toESM(require_react());
function useUnmounted(callback) {
  import_react39.useEffect(() => callback, []);
}

// hooks/useUpdated.tsx
var import_react40 = __toESM(require_react());
function useUpdated(callback, dependencies) {
  const firstRenderRef = import_react40.useRef(true);
  import_react40.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}

// hooks/useWindowSize.tsx
var import_react41 = __toESM(require_react());
function useWindowSize() {
  const [windowSize, setWindowSize] = import_react41.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });
  return windowSize;
}
