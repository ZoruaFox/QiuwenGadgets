/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://meta.wikimedia.org/wiki/User:Xiplus/js/quick-patrol.js}
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickPatrol}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/QuickPatrol/QuickPatrol.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/QuickPatrol/modules/patrolPages.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/QuickPatrol/options.json
var version = "2.0";
//! src/QuickPatrol/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QuickPatrol/".concat(version));
//! src/QuickPatrol/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Patrol: (0, import_ext_gadget2.localize)({
      en: "Patrol",
      "zh-hans": "巡查",
      "zh-hant": "巡查"
    }),
    "Patrol all pages": (0, import_ext_gadget2.localize)({
      en: "Patrol all pages",
      "zh-hans": "巡查所有页面？",
      "zh-hant": "巡查全部頁面？"
    }),
    "Patrol all pages?": (0, import_ext_gadget2.localize)({
      en: "Patrol all pages?",
      "zh-hans": "确定巡查所有页面？",
      "zh-hant": "確定巡查全部頁面？"
    }),
    Patrolled: (0, import_ext_gadget2.localize)({
      en: "Patrolled",
      "zh-hans": "已巡查",
      "zh-hant": "已巡查"
    }),
    AJAX: (0, import_ext_gadget2.localize)({
      en: "AJAX failure",
      "zh-hans": "AJAX失败",
      "zh-hant": "AJAX失敗"
    }),
    API: (0, import_ext_gadget2.localize)({
      en: "API failure: ",
      "zh-hans": "API失败：",
      "zh-hant": "API失敗："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/QuickPatrol/modules/patrolPages.tsx
var patrolAllPages = ($body) => /* @__PURE__ */ import_ext_gadget3.default.createElement("li", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
  id: "gadget-quick_patrol__all",
  onClick: () => {
    if (!confirm(getMessage("Patrol all pages?"))) {
      return;
    }
    $body.find(".not-patrolled").each((index) => {
      const $element = $("#gadget-quick_patrol__".concat(index));
      if ($element.css("pointer-events") !== "none") {
        $element.trigger("click");
      }
    });
  }
}, "[".concat(getMessage("Patrol all pages"), "]")));
var patrolSinglePage = (index, revId) => /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
  className: "gadget-quick_patrol__patrolbtn",
  id: "gadget-quick_patrol__".concat(index),
  dataset: {
    btnid: index.toString(),
    revid: revId
  },
  onClick: (event) => {
    const {
      btnid,
      revid
    } = event.currentTarget.dataset;
    const params = {
      action: "patrol",
      format: "json",
      revid: Number(revid)
    };
    void api.postWithToken("patrol", params).done(({
      error
    }) => {
      if (error) {
        void mw.notify(getMessage("API") + error["info"], {
          tag: "QuickPatrol",
          type: "error"
        });
        $("#gadget-quick_patrol__".concat(btnid)).css("color", "#f00");
      } else {
        $("#gadget-quick_patrol__".concat(btnid)).css({
          pointerEvents: "none",
          color: "#888"
        }).text(getMessage("Patrolled"));
      }
    }).fail((error) => {
      void mw.notify(getMessage("AJAX"), {
        tag: "QuickPatrol",
        type: "error"
      });
      $("#gadget-quick_patrol__".concat(btnid)).css("color", "#f00");
      console.error("[QuickPatrol] Ajax error:", error);
    });
  }
}, "[".concat(getMessage("Patrol"), "]"));
//! src/QuickPatrol/QuickPatrol.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(function quickPatrol($body) {
  if (mw.config.get("wgCanonicalSpecialPageName") !== "Newpages") {
    return;
  }
  for (var _i = 0, _Object$entries = Object.entries($body.find(".not-patrolled")); _i < _Object$entries.length; _i++) {
    const [index, element] = _Object$entries[_i];
    const $element = $(element);
    const $time = $element.find("a");
    if (!$time.length) {
      continue;
    }
    const timeHref = $time.attr("href");
    if (!timeHref) {
      continue;
    }
    const revIds = timeHref === null || timeHref === void 0 ? void 0 : timeHref.match(/oldid=([0-9]+)/);
    if (!revIds || !revIds[1]) {
      continue;
    }
    element.append(patrolSinglePage(index, revIds[1]));
  }
  $body.find("#mw-content-text ul").append(patrolAllPages($body));
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvcGF0cm9sUGFnZXMudHN4IiwgInNyYy9RdWlja1BhdHJvbC9vcHRpb25zLmpzb24iLCAic3JjL1F1aWNrUGF0cm9sL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWlja1BhdHJvbC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1F1aWNrUGF0cm9sL1F1aWNrUGF0cm9sLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwYXRyb2xBbGxQYWdlcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pID0+IChcblx0PGxpPlxuXHRcdDxhXG5cdFx0XHRpZD1cImdhZGdldC1xdWlja19wYXRyb2xfX2FsbFwiXG5cdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmICghY29uZmlybShnZXRNZXNzYWdlKCdQYXRyb2wgYWxsIHBhZ2VzPycpKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHQkYm9keS5maW5kKCcubm90LXBhdHJvbGxlZCcpLmVhY2goKGluZGV4KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoYCNnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2luZGV4fWApO1xuXHRcdFx0XHRcdGlmICgkZWxlbWVudC5jc3MoJ3BvaW50ZXItZXZlbnRzJykgIT09ICdub25lJykge1xuXHRcdFx0XHRcdFx0JGVsZW1lbnQudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHR7YFske2dldE1lc3NhZ2UoJ1BhdHJvbCBhbGwgcGFnZXMnKX1dYH1cblx0XHQ8L2E+XG5cdDwvbGk+XG4pO1xuXG5jb25zdCBwYXRyb2xTaW5nbGVQYWdlID0gKGluZGV4OiBzdHJpbmcsIHJldklkOiBzdHJpbmcpID0+IChcblx0PGFcblx0XHRjbGFzc05hbWU9XCJnYWRnZXQtcXVpY2tfcGF0cm9sX19wYXRyb2xidG5cIlxuXHRcdGlkPXtgZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fJHtpbmRleH1gfVxuXHRcdGRhdGFzZXQ9e3tcblx0XHRcdGJ0bmlkOiBpbmRleC50b1N0cmluZygpLFxuXHRcdFx0cmV2aWQ6IHJldklkLFxuXHRcdH19XG5cdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB7YnRuaWQsIHJldmlkfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGF0cm9sUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXRyb2wnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0cmV2aWQ6IE51bWJlcihyZXZpZCksXG5cdFx0XHR9O1xuXHRcdFx0dm9pZCBhcGlcblx0XHRcdFx0LnBvc3RXaXRoVG9rZW4oJ3BhdHJvbCcsIHBhcmFtcylcblx0XHRcdFx0LmRvbmUoKHtlcnJvcn0pOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ0FQSScpICsgZXJyb3JbJ2luZm8nXSwge1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdRdWlja1BhdHJvbCcsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdCQoYCNnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2J0bmlkfWApLmNzcygnY29sb3InLCAnI2YwMCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkKGAjZ2FkZ2V0LXF1aWNrX3BhdHJvbF9fJHtidG5pZH1gKVxuXHRcdFx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHRwb2ludGVyRXZlbnRzOiAnbm9uZScsXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICcjODg4Jyxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LnRleHQoZ2V0TWVzc2FnZSgnUGF0cm9sbGVkJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LmZhaWwoKGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnQUpBWCcpLCB7XG5cdFx0XHRcdFx0XHR0YWc6ICdRdWlja1BhdHJvbCcsXG5cdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQoYCNnYWRnZXQtcXVpY2tfcGF0cm9sX18ke2J0bmlkfWApLmNzcygnY29sb3InLCAnI2YwMCcpO1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tRdWlja1BhdHJvbF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdH0pO1xuXHRcdH19XG5cdD5cblx0XHR7YFske2dldE1lc3NhZ2UoJ1BhdHJvbCcpfV1gfVxuXHQ8L2E+XG4pO1xuXG5leHBvcnQge3BhdHJvbEFsbFBhZ2VzLCBwYXRyb2xTaW5nbGVQYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja1BhdHJvbC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRQYXRyb2w6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6UnLFxuXHRcdH0pLFxuXHRcdCdQYXRyb2wgYWxsIHBhZ2VzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2wgYWxsIHBhZ2VzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeaJgOaciemhtemdou+8nycsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlhajpg6jpoIHpnaLvvJ8nLFxuXHRcdH0pLFxuXHRcdCdQYXRyb2wgYWxsIHBhZ2VzPyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sIGFsbCBwYWdlcz8nLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu5a6a5beh5p+l5omA5pyJ6aG16Z2i77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuWumuW3oeafpeWFqOmDqOmggemdou+8nycsXG5cdFx0fSksXG5cdFx0UGF0cm9sbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7Llt6Hmn6UnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5beh5p+lJyxcblx0XHR9KSxcblx0XHRBSkFYOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FKQVggZmFpbHVyZScsXG5cdFx0XHQnemgtaGFucyc6ICdBSkFY5aSx6LSlJyxcblx0XHRcdCd6aC1oYW50JzogJ0FKQVjlpLHmlZcnLFxuXHRcdH0pLFxuXHRcdEFQSTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBUEkgZmFpbHVyZTogJyxcblx0XHRcdCd6aC1oYW5zJzogJ0FQSeWksei0pe+8micsXG5cdFx0XHQnemgtaGFudCc6ICdBUEnlpLHmlZfvvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge3BhdHJvbEFsbFBhZ2VzLCBwYXRyb2xTaW5nbGVQYWdlfSBmcm9tICcuL21vZHVsZXMvcGF0cm9sUGFnZXMnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHF1aWNrUGF0cm9sKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKSAhPT0gJ05ld3BhZ2VzJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qIFBhdHJvbCBzaW5nbGUgcGFnZSAqL1xuXHRmb3IgKGNvbnN0IFtpbmRleCwgZWxlbWVudF0gb2YgT2JqZWN0LmVudHJpZXMoJGJvZHkuZmluZCgnLm5vdC1wYXRyb2xsZWQnKSkpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdGNvbnN0ICR0aW1lOiBKUXVlcnkgPSAkZWxlbWVudC5maW5kKCdhJyk7XG5cdFx0aWYgKCEkdGltZS5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRpbWVIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkdGltZS5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCF0aW1lSHJlZikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmV2SWRzOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHRpbWVIcmVmPy5tYXRjaCgvb2xkaWQ9KFswLTldKykvKTtcblx0XHRpZiAoIXJldklkcyB8fCAhcmV2SWRzWzFdKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRlbGVtZW50LmFwcGVuZChwYXRyb2xTaW5nbGVQYWdlKGluZGV4LCByZXZJZHNbMV0pKTtcblx0fVxuXG5cdC8qIFBhdHJvbCBhbGwgcGFnZXMgKi9cblx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCB1bCcpLmFwcGVuZChwYXRyb2xBbGxQYWdlcygkYm9keSkpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0NqQixJQUFBQyxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkYsUUFBQSxpQkFBQTtBQUV4QixJQUFNRyxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGVBQUFDLE9BQWlDSixPQUFPLENBQUU7O0FDSDlELElBQUFLLHFCQUF1Qk4sUUFBQSxpQkFBQTtBQUV2QixJQUFNTyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLG1CQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QscUJBQUEsR0FBb0JKLG1CQUFBRyxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsc0JBQUEsR0FBcUJKLG1CQUFBRyxVQUFTO01BQzdCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFlBQUEsR0FBV0wsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsT0FBQSxHQUFNTixtQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLE1BQUEsR0FBS1AsbUJBQUFHLFVBQVM7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QVNILEtBQUssR0FBRztBQUN2QyxRQUFJLENBQUM0QyxNQUFNRixRQUFRO0FBQ2xCO0lBQ0Q7QUFFQSxVQUFNRyxXQUErQkQsTUFBTUUsS0FBSyxNQUFNO0FBQ3RELFFBQUksQ0FBQ0QsVUFBVTtBQUNkO0lBQ0Q7QUFFQSxVQUFNRSxTQUFrQ0YsYUFBQSxRQUFBQSxhQUFBLFNBQUEsU0FBQUEsU0FBVUcsTUFBTSxnQkFBZ0I7QUFDeEUsUUFBSSxDQUFDRCxVQUFVLENBQUNBLE9BQU8sQ0FBQyxHQUFHO0FBQzFCO0lBQ0Q7QUFFQUosWUFBUU0sT0FBTzFDLGlCQUFpQkwsT0FBTzZDLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDbEQ7QUFHQXJELFFBQU1NLEtBQUsscUJBQXFCLEVBQUVpRCxPQUFPeEQsZUFBZUMsS0FBSyxDQUFDO0FBQy9ELENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlBhdHJvbCIsICJsb2NhbGl6ZSIsICJlbiIsICJQYXRyb2xsZWQiLCAiQUpBWCIsICJBUEkiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInBhdHJvbEFsbFBhZ2VzIiwgIiRib2R5IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJvbkNsaWNrIiwgImNvbmZpcm0iLCAiZmluZCIsICJlYWNoIiwgImluZGV4IiwgIiRlbGVtZW50IiwgIiQiLCAiY3NzIiwgInRyaWdnZXIiLCAicGF0cm9sU2luZ2xlUGFnZSIsICJyZXZJZCIsICJjbGFzc05hbWUiLCAiZGF0YXNldCIsICJidG5pZCIsICJ0b1N0cmluZyIsICJyZXZpZCIsICJldmVudCIsICJjdXJyZW50VGFyZ2V0IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgIk51bWJlciIsICJwb3N0V2l0aFRva2VuIiwgImRvbmUiLCAiZXJyb3IiLCAibXciLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgInBvaW50ZXJFdmVudHMiLCAiY29sb3IiLCAidGV4dCIsICJmYWlsIiwgImNvbnNvbGUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImdldEJvZHkiLCAidGhlbiIsICJxdWlja1BhdHJvbCIsICJjb25maWciLCAiZ2V0IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAiZWxlbWVudCIsICIkdGltZSIsICJ0aW1lSHJlZiIsICJhdHRyIiwgInJldklkcyIsICJtYXRjaCIsICJhcHBlbmQiXQp9Cg==
