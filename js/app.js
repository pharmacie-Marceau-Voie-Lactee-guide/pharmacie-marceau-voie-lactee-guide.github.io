/*
 * Guide d'intégration — code du site.
 * Le contenu est dans le dossier data/ ; ce fichier ne contient que l'affichage.
 * Aucune requête réseau, aucun cookie. Seuls les scores des quiz sont gardés
 * dans le navigateur (localStorage), sur cet appareil uniquement.
 */
(function () {
  "use strict";

  var G = window.GUIDE || {};
  var site = G.site || {};
  var TODO = "À COMPLÉTER";
  var STORE_KEY = "guide-integration:quiz:v1";
  var app = document.getElementById("app");
  var SITE_TITLE = (site.nomOfficine || TODO) + " - Guide d'intégration";

  /* ---------- Construction du DOM (jamais d'innerHTML : le contenu est toujours traité comme du texte) ---------- */

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === "class") node.className = v;
        else if (k.slice(0, 2) === "on" && typeof v === "function") node.addEventListener(k.slice(2), v);
        else if (v === true) node.setAttribute(k, "");
        else node.setAttribute(k, String(v));
      });
    }
    add(node, children);
    return node;
  }

  function add(node, c) {
    if (c === null || c === undefined || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { add(node, x); }); return; }
    if (typeof c === "string" || typeof c === "number") {
      var s = String(c);
      var t = s.indexOf(TODO);
      if (t !== -1) {
        // Partie à compléter : discrète en temps normal, bien visible en « mode relecture ».
        if (t > 0) node.appendChild(document.createTextNode(s.slice(0, t)));
        var m = document.createElement("mark");
        m.className = "todo" + (t === 0 ? " todo-whole" : "");
        var full = document.createElement("span"); full.className = "todo-full"; full.textContent = s.slice(t);
        var short = document.createElement("span"); short.className = "todo-short"; short.textContent = "information à venir";
        m.appendChild(full); m.appendChild(short);
        node.appendChild(m);
      } else {
        node.appendChild(document.createTextNode(s));
      }
      return;
    }
    node.appendChild(c);
  }

  function svg(tag, attrs, children) {
    var node = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs || {}).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    (children || []).forEach(function (c) {
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function list(items, ordered, cls) {
    items = Array.isArray(items) && items.length ? items : [TODO];
    return el(ordered ? "ol" : "ul", { class: cls }, items.map(function (t) { return el("li", null, t); }));
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function hasTodo(obj) {
    return JSON.stringify(obj || "").indexOf(TODO) !== -1;
  }

  function isValidated(v) {
    return !!(v && v.par && v.le && String(v.par + v.le).indexOf(TODO) === -1);
  }

  function statusPill(v, what) {
    if (isValidated(v)) {
      return el("p", { class: "status status-ok" }, [uiIcon("quiz"), el("span", null, "Validé par " + v.par + " le " + v.le)]);
    }
    return el("p", { class: "status status-draft" }, [uiIcon("horloge"), el("span", null, [el("strong", null, "Version de travail"), " · " + (what || "contenu") + " en attente de validation par la pharmacienne"])]);
  }

  function validationLine(v) {
    v = v || {};
    return el("p", { class: "meta" }, ["Validé par : ", v.par || TODO, " — le : ", v.le || TODO]);
  }

  function todoBanner(text) {
    return el("p", { class: "callout callout-todo", role: "note" }, text);
  }

  function findById(arr, id) {
    return (arr || []).filter(function (x) { return x.id === id; })[0];
  }

  // Icônes d'interface (traits, 24×24), dessinées ici : aucune ressource externe.
  var UI_ICONS = {
    fiches: "M9 4h6v3H9zM7 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1M8 12h8M8 16h5",
    pill: "M10.5 20.5a5 5 0 0 1-7-7l7-7a5 5 0 0 1 7 7zM7 10l7 7",
    play: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM10 8.5l5.5 3.5-5.5 3.5z",
    quiz: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12.5l2.7 2.7L16.5 9.5",
    book: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5",
    phone: "M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z",
    box: "M3 7.5 12 3l9 4.5v9L12 21l-9-4.5zM3 7.5l9 4.5 9-4.5M12 12v9",
    chat: "M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.8A8 8 0 1 1 21 12z",
    help: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9.2a2.6 2.6 0 0 1 5 .9c0 1.8-2.5 2.2-2.5 3.9M12 17h.01",
    compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z",
    alert: "M12 3 2 20h20zM12 10v4M12 17h.01",
    hand: "M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4.5a1.5 1.5 0 0 1 3 0V12M14 11.5V6a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7h-.5A6.5 6.5 0 0 1 4 15.5L3.2 12a1.5 1.5 0 0 1 2.8-1L8 14",
    cross: "M9 3h6v6h6v6h-6v6H9v-6H3V9h6z",
    search: "M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM16 16l5 5",
    menu: "M4 6h16M4 12h16M4 18h16",
    home: "M3 11l9-8 9 8M5 9.5V21h5v-6h4v6h5V9.5",
    more: "M5 12h.01M12 12h.01M19 12h.01",
    gorge: "M12 3a4.5 4.5 0 0 0-4.5 4.5V10a4.5 4.5 0 0 0 9 0V7.5A4.5 4.5 0 0 0 12 3zM9.5 14.5V21M14.5 14.5V21M10.5 9.5h3",
    toux: "M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7",
    goutte: "M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z",
    thermo: "M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0zM12 9v7",
    intestin: "M4 7c3-3 6 3 9 0s6 3 7 0M4 12c3-3 6 3 9 0s6 3 7 0M4 17c3-3 6 3 9 0s6 3 7 0",
    flamme: "M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-6 1 1 2 2 3 2 0-2-1-4 0-6z",
    sablier: "M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9",
    fleur: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM12 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM10 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM14 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0z",
    insecte: "M9 7a3 3 0 0 1 6 0M8 10h8v5a4 4 0 0 1-8 0zM12 10v9M4 13h4M16 13h4M5 8l3 2M19 8l-3 2M5 19l3-2M19 19l-3-2",
    soleil: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
    peigne: "M3 8h18v4H3zM5 12v7M8 12v7M11 12v7M14 12v7M17 12v7M20 12v7",
    urine: "M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11zM12 11v6M9 14h6",
    horloge: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
    chevron: "M6 9l6 6 6-6",
    baby: "M12 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM10 22v-5l-1.5-1c-1-.7-1.5-1.8-1.3-3l.6-3.4A3 3 0 0 1 10.8 7h1.6a3 3 0 0 1 2.7 1.7c2.2.6 3.4 2.7 2.9 4.9-.4 1.6-1.8 2.7-3.5 2.8L14 22",
    car: "M5 16h14M5 16l1.5-5a2 2 0 0 1 1.9-1.4h7.2a2 2 0 0 1 1.9 1.4L19 16M5 16v3h2.5v-3M16.5 16v3H19v-3M7.5 13h.01M16.5 13h.01",
    glass: "M7 3h10l-1.5 9a3.5 3.5 0 0 1-7 0zM12 15.5V21M8.5 21h7M4 4l16 16",
    child: "M12 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM8 22l1.5-8L7 10.5M16 22l-1.5-8 2.5-3.5M9.5 9h5",
    cube: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5M12 12v9",
    rx: "M6 4h5a3.5 3.5 0 0 1 0 7H6zM6 11v9M10 11l8 9M18 13l-6 7",
    drop2: "M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11zM5 5l14 14",
    tree: "M12 3v5M12 8l-6 5M12 8l6 5M6 13v3M18 13v3M3 19h6M15 19h6M9 16H3v6h6zM21 16h-6v6h6z",
    book2: "M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z",
    star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
    clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2"
  };

  function uiIcon(name, cls) {
    var d = UI_ICONS[name];
    if (!d) return null;
    return svg("svg", { viewBox: "0 0 24 24", class: "ui-icon " + (cls || ""), "aria-hidden": "true", focusable: "false" },
      [svg("path", { d: d })]);
  }

  var COLORS = ["green", "blue", "purple", "orange", "teal", "pink", "red", "gray"];

  /* ---------- Illustrations des fiches (dessinées ici, 64 × 64) ----------
   * Chaque entrée : [couleur de fond, [formes]]. Ombres et reflets en couches semi-transparentes.
   */
  var SH = function (cx, cy, rx) { return ["ellipse", { cx: cx, cy: cy, rx: rx, ry: rx * 0.22, fill: "#000", opacity: ".08" }]; };
  var HL = function (d, w) { return ["path", { d: d, stroke: "#fff", "stroke-width": w || 2.2, fill: "none", "stroke-linecap": "round", opacity: ".7" }]; };
  var ART = {
    "mal-de-gorge": ["#fde9df", [
      SH(32, 56, 16),
      ["path", { d: "M21 56c1-7 3-12 3-17h16c0 5 2 10 3 17z", fill: "#e9b08d" }],
      ["path", { d: "M24 39h16c0 3-.5 5-1 7H25c-.5-2-1-4-1-7z", fill: "#d99a76" }],
      ["circle", { cx: 32, cy: 24, r: 14, fill: "#f6c9a7" }],
      ["path", { d: "M18.5 20c2-9 9-12 15-12s11 3 12 9c-5-4-12-4-18-1-3 1.5-6 3-9 4z", fill: "#6b4a3a" }],
      ["circle", { cx: 27, cy: 25, r: 1.4, fill: "#5a3d30" }], ["circle", { cx: 37, cy: 25, r: 1.4, fill: "#5a3d30" }],
      ["path", { d: "M28.5 32c2.2 1.6 4.8 1.6 7 0", stroke: "#b5654f", "stroke-width": 1.8, fill: "none", "stroke-linecap": "round" }],
      ["ellipse", { cx: 32, cy: 45, rx: 6, ry: 4, fill: "#ef5a43", opacity: ".85" }],
      ["ellipse", { cx: 32, cy: 45, rx: 3, ry: 2, fill: "#ff8a6e" }],
      ["path", { d: "M42 42l5-2.5M42.5 46.5h5.5M42 50.5l4.5 2.5", stroke: "#ef5a43", "stroke-width": 2, "stroke-linecap": "round" }],
      HL("M24 16c2-2 5-3 8-3", 1.8)]],
    "toux": ["#e6f0fb", [
      SH(26, 52, 13),
      ["circle", { cx: 26, cy: 32, r: 15, fill: "#f6c9a7" }],
      ["path", { d: "M12 28c1-9 8-13 14-13 7 0 13 4 14 11-6-3-12-3-17-1-4 1.5-8 2.5-11 3z", fill: "#3f3a36" }],
      ["path", { d: "M20 31c1.5-1 3-1 4.5 0", stroke: "#5a3d30", "stroke-width": 1.6, fill: "none", "stroke-linecap": "round" }],
      ["path", { d: "M29 30c1.5-1 3-1 4.5 0", stroke: "#5a3d30", "stroke-width": 1.6, fill: "none", "stroke-linecap": "round" }],
      ["ellipse", { cx: 35.5, cy: 38.5, rx: 3.2, ry: 3.6, fill: "#a8423b" }],
      ["path", { d: "M15 38c2 2 4 2 6 1", stroke: "#e8a88a", "stroke-width": 2, fill: "none", "stroke-linecap": "round", opacity: ".8" }],
      ["circle", { cx: 46, cy: 33, r: 5.5, fill: "#a9c9ee" }], ["circle", { cx: 53.5, cy: 39, r: 4.5, fill: "#bfd7f3" }], ["circle", { cx: 47, cy: 44, r: 3.8, fill: "#d3e3f7" }],
      ["circle", { cx: 54, cy: 29, r: 2.6, fill: "#d3e3f7" }],
      HL("M44 31c1-1 2.5-1.5 4-1.2", 1.6)]],
    "rhume": ["#e7f2fa", [
      SH(30, 55, 15),
      ["path", { d: "M15 24c5-3 21-3 27 0l3 26c-8 3-24 3-31 0z", fill: "#ffffff", stroke: "#c8d8e4", "stroke-width": 1.3 }],
      ["path", { d: "M15 24c5 3 21 3 27 0", fill: "#eef4f8", stroke: "#c8d8e4", "stroke-width": 1.3 }],
      ["path", { d: "M20 33c5 1.5 14 1.5 19 0M20.5 40c5 1.5 14 1.5 19 0", stroke: "#dbe7f0", "stroke-width": 1.4, fill: "none" }],
      ["path", { d: "M29 15c3-4 7-4 9 0-1 3-3 5-4.5 9-1.5-4-3.5-6-4.5-9z", fill: "#ffffff", stroke: "#c8d8e4", "stroke-width": 1.2 }],
      ["path", { d: "M49 14s5.5 6.5 5.5 10a5.5 5.5 0 0 1-11 0c0-3.5 5.5-10 5.5-10z", fill: "#4f9be0" }],
      ["path", { d: "M47 22c0-1.5 1-3 2-4", stroke: "#fff", "stroke-width": 1.5, "stroke-linecap": "round", opacity: ".8" }],
      ["path", { d: "M52 34s3.5 4 3.5 6.3a3.5 3.5 0 0 1-7 0c0-2.3 3.5-6.3 3.5-6.3z", fill: "#82bbee" }]]],
    "douleur-fievre": ["#fde9e7", [
      SH(32, 57, 11),
      ["rect", { x: 27, y: 8, width: 11, height: 37, rx: 5.5, fill: "#ffffff", stroke: "#cfd8dc", "stroke-width": 1.5 }],
      ["rect", { x: 30, y: 18, width: 5, height: 29, rx: 2.5, fill: "#e0412d" }],
      ["circle", { cx: 32.5, cy: 48, r: 8, fill: "#e0412d" }],
      ["circle", { cx: 30, cy: 45.5, r: 2.4, fill: "#ff8a78" }],
      ["path", { d: "M40 14h5M40 20h3M40 26h5M40 32h3M40 38h5", stroke: "#aab6bb", "stroke-width": 1.5, "stroke-linecap": "round" }],
      HL("M29.5 12v6", 1.6),
      ["path", { d: "M14 20c2 2 2 5 0 7M10 17c3.5 3.5 3.5 9.5 0 13", stroke: "#f28b70", "stroke-width": 2, fill: "none", "stroke-linecap": "round", opacity: ".8" }]]],
    "diarrhee": ["#e7f4ec", [
      SH(32, 55, 17),
      ["rect", { x: 13, y: 20, width: 28, height: 28, rx: 4, fill: "#ffffff", stroke: "#d2dbd8", "stroke-width": 1.4 }],
      ["path", { d: "M13 26h28", stroke: "#e6ecea", "stroke-width": 1.4 }],
      ["ellipse", { cx: 41, cy: 34, rx: 9, ry: 14, fill: "#f4f7f6", stroke: "#d2dbd8", "stroke-width": 1.4 }],
      ["ellipse", { cx: 41, cy: 34, rx: 3.4, ry: 5.8, fill: "#c3cfcb" }],
      ["path", { d: "M17 31h8M17 36h10M17 41h7", stroke: "#e6ecea", "stroke-width": 1.4 }],
      ["path", { d: "M52 12s4.5 5.5 4.5 8.4a4.5 4.5 0 0 1-9 0c0-2.9 4.5-8.4 4.5-8.4z", fill: "#4f9be0" }],
      HL("M50.3 19c0-1.2.6-2.4 1.4-3.3", 1.3)]],
    "brulures-estomac": ["#fff0e3", [
      SH(34, 55, 15),
      ["path", { d: "M23 22c11-5 24 0 26 13 2 12-6 19-16 19-7 0-11-3-13-8 7 0 13-2 15-8 1.5-5-2.5-9-8-8.5z", fill: "#f19b76" }],
      ["path", { d: "M27 41c6 0 11-2 13-7", stroke: "#d8714e", "stroke-width": 2, fill: "none", "stroke-linecap": "round", opacity: ".7" }],
      HL("M30 24c5-1.5 10-.5 13 2.5", 2),
      ["path", { d: "M34 6c1.5 5 6.5 6.5 6.5 11.5a6.5 6.5 0 0 1-13 0c0-2.5 1.2-4 2.5-5 1.2 1.2 2.5 1.4 3.6 1.4 0-2.6-1-5 .4-7.9z", fill: "#f2811a" }],
      ["path", { d: "M34 13c.8 2.6 3.4 3.4 3.4 5.8a3.4 3.4 0 0 1-6.8 0c0-1.2.7-2 1.3-2.5.7.6 1.3.7 1.9.7 0-1.3-.4-2.6.2-4z", fill: "#ffd25e" }]]],
    "constipation": ["#f6eee4", [
      SH(32, 55, 17),
      ["path", { d: "M17 22c4-5 8 5 12 0s8 5 12 0 6 5 6 2M17 32c4-5 8 5 12 0s8 5 12 0 6 5 6 2M17 42c4-5 8 5 12 0s8 5 12 0", stroke: "#e5a083", "stroke-width": 6, fill: "none", "stroke-linecap": "round" }],
      ["path", { d: "M17 22c4-5 8 5 12 0s8 5 12 0M17 32c4-5 8 5 12 0s8 5 12 0M17 42c4-5 8 5 12 0s8 5 12 0", stroke: "#f6c2aa", "stroke-width": 2, fill: "none", "stroke-linecap": "round", opacity: ".9" }],
      ["path", { d: "M45 10h12M45 34h12", stroke: "#8b7a66", "stroke-width": 2, "stroke-linecap": "round" }],
      ["path", { d: "M46.5 10.5c0 5 9 6.5 9 11.5s-9 6.5-9 11.5M55.5 10.5c0 5-9 6.5-9 11.5s9 6.5 9 11.5", fill: "#fff", stroke: "#8b7a66", "stroke-width": 1.6 }],
      ["path", { d: "M48 31.5c1-2 2.2-3 3-3.5.8.5 2 1.5 3 3.5z", fill: "#e9c27a" }],
      ["path", { d: "M49 14.5h4c-.5 1.5-1.5 2.5-2 3-.5-.5-1.5-1.5-2-3z", fill: "#e9c27a" }]]],
    "allergie-saisonniere": ["#fff6db", [
      SH(32, 57, 12),
      ["path", { d: "M32 56V34", stroke: "#4f9e61", "stroke-width": 3, "stroke-linecap": "round" }],
      ["path", { d: "M32 47c-7 0-10-4.5-10-8 6 0 10 3.5 10 8z", fill: "#6fbd7f" }],
      ["path", { d: "M32 51c6 0 8.5-3.5 8.5-6.5-5 0-8.5 3-8.5 6.5z", fill: "#86cb94" }],
      ["circle", { cx: 32, cy: 15, r: 6.5, fill: "#f497ae" }], ["circle", { cx: 42, cy: 22, r: 6.5, fill: "#f497ae" }], ["circle", { cx: 22, cy: 22, r: 6.5, fill: "#f497ae" }],
      ["circle", { cx: 37, cy: 31, r: 6.5, fill: "#ef8aa3" }], ["circle", { cx: 27, cy: 31, r: 6.5, fill: "#ef8aa3" }],
      ["circle", { cx: 32, cy: 24, r: 6, fill: "#ffc928" }], ["circle", { cx: 30.5, cy: 22.5, r: 2, fill: "#ffe48a" }],
      ["circle", { cx: 49, cy: 11, r: 1.8, fill: "#e8a915" }], ["circle", { cx: 53, cy: 17, r: 1.4, fill: "#e8a915" }], ["circle", { cx: 46, cy: 7, r: 1.2, fill: "#e8a915" }], ["circle", { cx: 54, cy: 9, r: 1, fill: "#e8a915" }]]],
    "piqures-insectes": ["#fff5da", [
      SH(32, 57, 12),
      ["ellipse", { cx: 22, cy: 23, rx: 9, ry: 6.5, fill: "#e2f1fa", stroke: "#b9d7e8", "stroke-width": 1, transform: "rotate(-28 22 23)" }],
      ["ellipse", { cx: 42, cy: 21, rx: 9, ry: 6.5, fill: "#e2f1fa", stroke: "#b9d7e8", "stroke-width": 1, transform: "rotate(28 42 21)" }],
      ["ellipse", { cx: 32, cy: 38, rx: 10, ry: 13, fill: "#ffc52e" }],
      ["path", { d: "M22.6 33h18.8M22 39.5h20M23.8 46h16.4", stroke: "#33302c", "stroke-width": 3.4 }],
      HL("M26 29c1.5-2 3.5-3 5.5-3", 1.6),
      ["circle", { cx: 32, cy: 24, r: 5.5, fill: "#33302c" }],
      ["path", { d: "M29 19.5l-3-4M35 19.5l3-4", stroke: "#33302c", "stroke-width": 1.5, "stroke-linecap": "round" }],
      ["path", { d: "M32 51l0 5", stroke: "#33302c", "stroke-width": 2, "stroke-linecap": "round" }]]],
    "brulures-peau": ["#fff4d8", [
      ["circle", { cx: 32, cy: 32, r: 11.5, fill: "#ffb81f" }],
      ["circle", { cx: 32, cy: 32, r: 8, fill: "#ffcd45" }],
      ["path", { d: "M32 10v7M32 47v7M10 32h7M47 32h7M16.5 16.5l5 5M42.5 42.5l5 5M16.5 47.5l5-5M42.5 21.5l5-5", stroke: "#ffb81f", "stroke-width": 3.6, "stroke-linecap": "round" }],
      ["circle", { cx: 28.5, cy: 28.5, r: 3, fill: "#ffe7a0" }]]],
    "poux": ["#f2ecfa", [
      SH(32, 54, 18),
      ["rect", { x: 12, y: 20, width: 40, height: 10, rx: 3, fill: "#b58d63" }],
      ["rect", { x: 12, y: 20, width: 40, height: 3.5, rx: 1.75, fill: "#cba57d" }],
      ["path", { d: "M15 30v16M19 30v16M23 30v16M27 30v16M31 30v16M35 30v16M39 30v16M43 30v16M47 30v16", stroke: "#a17b53", "stroke-width": 2.4, "stroke-linecap": "round" }],
      ["ellipse", { cx: 51, cy: 13, rx: 2.4, ry: 1.6, fill: "#6b5b4b" }], ["ellipse", { cx: 45, cy: 10, rx: 1.8, ry: 1.2, fill: "#6b5b4b" }]]],
    "cystite": ["#e7f2fb", [
      SH(32, 57, 12),
      ["path", { d: "M19 14h26l-3.5 38a3 3 0 0 1-3 2.7h-13a3 3 0 0 1-3-2.7z", fill: "#ffffff", stroke: "#c6d6e3", "stroke-width": 1.4 }],
      ["path", { d: "M21.8 28h20.4l-2.3 24a2 2 0 0 1-2 1.8H26.1a2 2 0 0 1-2-1.8z", fill: "#8fc5f0" }],
      ["path", { d: "M21.8 28c4 2 7 2 10.2 0s6.2-2 10.2 0", fill: "#a8d3f4" }],
      HL("M24 18l2 30", 1.8),
      ["circle", { cx: 36, cy: 40, r: 1.5, fill: "#fff", opacity: ".8" }], ["circle", { cx: 31, cy: 46, r: 1.1, fill: "#fff", opacity: ".8" }]]],
    "contraception-urgence": ["#ecf2fb", [
      SH(30, 56, 15),
      ["circle", { cx: 27, cy: 29, r: 15, fill: "#ffffff", stroke: "#c3cfe3", "stroke-width": 2 }],
      ["circle", { cx: 27, cy: 29, r: 1.6, fill: "#3d5fa8" }],
      ["path", { d: "M27 19v10l6.5 4", stroke: "#3d5fa8", "stroke-width": 2.6, fill: "none", "stroke-linecap": "round" }],
      ["path", { d: "M27 15.5v2M27 40.5v2M13.5 29h2M38.5 29h2", stroke: "#a9b6cf", "stroke-width": 1.6, "stroke-linecap": "round" }],
      ["rect", { x: 37, y: 39, width: 19, height: 10, rx: 5, fill: "#f497ae", transform: "rotate(-30 46.5 44)" }],
      ["rect", { x: 46.5, y: 39, width: 9.5, height: 10, rx: 0, fill: "#ffffff", opacity: ".55", transform: "rotate(-30 46.5 44)" }],
      HL("M40 41.5l5-3", 1.4)]]
  };

  function ficheArt(id, size) {
    var a = ART[id];
    if (!a) return null;
    return svg("svg", { viewBox: "0 0 64 64", width: size || 64, height: size || 64, class: "fiche-art", "aria-hidden": "true", focusable: "false" },
      [svg("circle", { cx: 32, cy: 32, r: 32, fill: a[0] })].concat(a[1].map(function (p) { return svg(p[0], p[1]); })));
  }

  function card(href, title, text, color, icon, artId) {
    return el("li", null, el("a", { class: "card c-" + (color || "green"), href: href }, [
      artId && ART[artId] ? el("span", { class: "card-art" }, ficheArt(artId, 56)) : (icon ? el("span", { class: "card-icon" }, uiIcon(icon)) : null),
      el("span", { class: "card-body" }, [
        el("span", { class: "card-title" }, title),
        text ? el("span", { class: "card-text" }, text) : null
      ])
    ]));
  }

  // Partie repliable d'une fiche (ouverte d'office sur grand écran).
  function fold(id, text, icon, color, content, extraClass) {
    var wide = window.matchMedia && window.matchMedia("(min-width: 861px)").matches;
    return el("details", { class: "fold c-" + color + (extraClass ? " " + extraClass : ""), open: wide }, [
      el("summary", null, [
        el("span", { class: "sec-icon" }, uiIcon(icon)),
        el("h2", { id: id, class: "sec-title c-" + color }, text),
        el("span", { class: "fold-chev", "aria-hidden": "true" }, uiIcon("chevron"))
      ]),
      el("div", { class: "fold-body" }, content)
    ]);
  }

  function sectionTitle(id, text, icon, color) {
    return el("h2", { id: id, class: "sec-title c-" + color }, [el("span", { class: "sec-icon" }, uiIcon(icon)), el("span", null, text)]);
  }

  // Saut vers une section de la page sans modifier l'adresse (le # sert au routage).
  function jumpTo(id) {
    return function (e) {
      var t = document.getElementById(id);
      if (!t) return;
      e.preventDefault();
      t.focus();
      t.scrollIntoView({ block: "start" });
    };
  }

  /* ---------- Stockage local des scores ---------- */

  function readScores() {
    try {
      var raw = window.localStorage.getItem(STORE_KEY);
      var data = raw ? JSON.parse(raw) : {};
      return data && typeof data === "object" ? data : {};
    } catch (e) { return {}; }
  }

  function saveScore(quizId, score, total) {
    try {
      var all = readScores();
      var entry = all[quizId] || { essais: [] };
      entry.essais = (entry.essais || []).concat([{ date: new Date().toISOString(), score: score, total: total }]).slice(-10);
      all[quizId] = entry;
      window.localStorage.setItem(STORE_KEY, JSON.stringify(all));
      return true;
    } catch (e) { return false; }
  }

  function clearScores() {
    try { window.localStorage.removeItem(STORE_KEY); } catch (e) { /* stockage indisponible */ }
  }

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" });
    } catch (e) { return iso; }
  }

  /* ---------- Navigation ---------- */

  var NAV = [
    { href: "#/", label: "Accueil", key: "" },
    { href: "#/fiches", label: "Fiches", key: "fiches" },
    { href: "#/medicaments", label: "Médicaments", key: "medicaments" },
    { href: "#/animations", label: "Animations", key: "animations" },
    { href: "#/quiz", label: "Quiz", key: "quiz" },
    { href: "#/glossaire", label: "Glossaire", key: "glossaire" },
    { href: "#/sources", label: "Sources", key: "sources" }
  ];
  (G.pages || []).forEach(function (p) {
    if (p.menu) NAV.push({ href: "#/page/" + encodeURIComponent(p.id), label: p.menuTitre || p.titre, key: "page/" + p.id });
  });

  var SECTION_OF = { fiche: "fiches", animation: "animations" };

  function buildNav() {
    var ul = document.getElementById("nav-list");
    NAV.forEach(function (n) {
      ul.appendChild(el("li", null, el("a", { href: n.href, "data-key": n.key }, n.label)));
    });
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("main-nav");
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); }
    });
    var brand = document.getElementById("brand");
    brand.textContent = "";
    brand.appendChild(el("span", { class: "brand-logo" }, uiIcon("cross")));
    brand.appendChild(el("span", { class: "brand-full" }, SITE_TITLE));
    brand.appendChild(el("span", { class: "brand-short" }, site.nomOfficine || SITE_TITLE));
    document.getElementById("search-btn").appendChild(uiIcon("search"));
    toggle.appendChild(uiIcon("menu"));
    toggle.appendChild(el("span", { class: "hdr-label" }, "Menu"));
    document.getElementById("footer-text").textContent = avertissement();
  }

  function buildBottomNav() {
    var items = [["#/", "Accueil", "home", ""], ["#/fiches", "Fiches", "fiches", "fiches"], ["#/recherche", "Chercher", "search", "recherche"], ["#/quiz", "Quiz", "quiz", "quiz"]];
    var bar = el("nav", { class: "bottom-nav", "aria-label": "Navigation rapide" }, el("ul", null, items.map(function (it) {
      return el("li", null, el("a", { href: it[0], "data-key": it[3] }, [uiIcon(it[2]), el("span", null, it[1])]));
    }).concat([el("li", null, el("button", { type: "button", class: "bn-more", onclick: function () {
      document.querySelector(".nav-toggle").click();
      window.scrollTo(0, 0);
    } }, [uiIcon("more"), el("span", null, "Plus")]))])));
    document.body.appendChild(bar);
  }

  function setCurrentNav(key) {
    document.querySelectorAll(".bottom-nav a").forEach(function (a) {
      if (a.getAttribute("data-key") === key) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.querySelectorAll("#nav-list a").forEach(function (a) {
      if (a.getAttribute("data-key") === key) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function avertissement() {
    if (!site.nomPharmacienne || site.nomPharmacienne.indexOf(TODO) !== -1) return "Contenu à usage interne. Ne pas diffuser aux patients.";
    return (site.avertissement || "Contenu à usage interne, validé par {pharmacienne}. Ne pas diffuser aux patients.")
      .replace("{pharmacienne}", site.nomPharmacienne || TODO);
  }

  /* ---------- Vues ---------- */

  function viewHome() {
    return {
      title: "Accueil",
      node: el("div", null, [
        el("div", { class: "hero" + (site.photoAccueil ? " has-photo" : "") }, [
          site.photoAccueil ? el("img", { class: "hero-photo", src: site.photoAccueil, alt: site.photoAccueilTexte || "" }) : null,
          el("div", { class: "hero-copy" }, [
          el("span", { class: "hero-badge" }, uiIcon("cross")),
          el("div", null, [
            el("p", { class: "hero-kicker" }, site.nomOfficine || TODO),
            el("h1", null, "Guide d'intégration"),
            el("p", { class: "hero-text" }, site.presentation || TODO)
          ])
          ])
        ]),
        searchForm("").form,
        favBlock(),
        seasonBlock(),
        el("div", { class: "home-note", role: "note" }, [
          el("span", { class: "hn-icon" }, uiIcon("alert")),
          el("p", null, [el("strong", null, "Usage interne. "), avertissement(),
            site.brouillon ? el("span", { class: "hn-draft" }, " Version de travail : le contenu est en cours de validation par la pharmacienne.") : null])
        ]),
        el("h2", null, "Mode d'emploi"),
        el("ol", { class: "how-to" }, (site.modeEmploi || [TODO]).map(function (t, i) {
          return el("li", { class: "c-" + ["green", "blue", "red"][i % 3] }, [el("span", { class: "how-num", "aria-hidden": "true" }, String(i + 1)), el("span", null, t)]);
        })),
        el("h2", null, "Accès rapide"),
        el("ul", { class: "cards" }, [
          card("#/fiches", "Fiches par situation", "Questions à poser, orientations, quand passer la main.", "green", "fiches"),
          card("#/medicaments", "Types de médicaments", "Classes, rôles, exemples, vigilance.", "blue", "pill"),
          card("#/animations", "Animations", "Comment agit une classe de médicaments, étape par étape.", "purple", "play"),
          card("#/quiz", "Quiz J0 et J30", "Vérifiez vos acquis. Les scores restent sur cet appareil.", "orange", "quiz"),
          card("#/sources", "Sources", "Notices et documents de référence.", "gray", "book")
        ].concat((G.pages || []).filter(function (p) { return p.menu; }).map(function (p, i) {
          var look = { urgences: ["red", "phone"], "reception-commandes": ["teal", "box"] }[p.id] || [COLORS[(i + 4) % COLORS.length], "fiches"];
          return card("#/page/" + encodeURIComponent(p.id), p.titre || TODO, p.resume, look[0], look[1]);
        })))
      ])
    };
  }

  function viewFiches() {
    var fiches = G.fiches || [];
    return {
      title: "Fiches par situation",
      node: el("div", null, [
        el("h1", null, "Fiches par situation"),
        el("p", null, "Choisissez la situation qui correspond à la demande du patient."),
        fiches.length
          ? el("ul", { class: "cards" }, fiches.map(function (f, i) { return card("#/fiche/" + encodeURIComponent(f.id), f.titre || TODO, (f.resume && f.resume.souvent) || f.motif, COLORS[i % 6], f.icone || "fiches", f.id); }))
          : todoBanner(TODO + " : aucune fiche dans data/fiches.js.")
      ])
    };
  }

  function viewFiche(id) {
    var fiches = G.fiches || [];
    var f = findById(fiches, id);
    if (!f) return viewNotFound();
    var i = fiches.indexOf(f);
    var prev = fiches[i - 1], next = fiches[i + 1];

    var essentiel = f.resume ? el("section", { class: "essentiel", "aria-labelledby": "h-essentiel" }, [
      el("h2", { id: "h-essentiel" }, "L'essentiel en 10 secondes"),
      el("ul", null, [
        ["compass", "Le plus souvent", f.resume.souvent, "c-green"],
        ["star", "La règle à retenir", f.resume.regle, "c-blue"],
        ["alert", "Pharmacien si", f.resume.alerte, "c-red"]
      ].filter(function (r) { return r[2]; }).map(function (r) {
        return el("li", { class: r[3] }, [el("span", { class: "ess-icon" }, uiIcon(r[0])), el("span", null, [el("strong", null, r[1] + " : "), r[2]])]);
      }))
    ]) : null;

    var toc = [["h-motif", "Motif de la demande"], ["h-questions", "Questions à poser"], ["h-orient", "Orientations"]]
      .concat(f.aDire ? [["h-adire", "À dire au patient"]] : [], f.produits ? [["h-produits", "Produits"]] : [], [["h-vigil", "Vigilance"], ["passer-la-main", "Passer la main"]]);
    var tocNav = el("nav", { class: "fiche-toc", "aria-label": "Sommaire de la fiche" }, [
      el("p", { class: "toc-title" }, "Sur cette fiche"),
      el("ol", null, toc.map(function (t) {
        return el("li", null, el("a", { href: "#" + t[0], onclick: function (e) {
          e.preventDefault();
          var target = document.getElementById(t[0]);
          if (!target) return;
          var d = target.closest("details"); if (d) d.open = true;
          (target.closest("details, section") || target).scrollIntoView({ behavior: "smooth", block: "start" });
        } }, t[1]));
      }))
    ]);

    var main = el("div", { class: "fiche-main" }, [
      el("section", { class: "sec c-blue", "aria-labelledby": "h-motif" }, [sectionTitle("h-motif", "Motif de la demande", "chat", "blue"), el("p", null, f.motif || TODO)]),
      el("div", { class: "fold-tools" }, [
        el("button", { type: "button", class: "btn btn-ghost btn-small", onclick: function (e) {
          var folds = e.currentTarget.closest("article").querySelectorAll("details.fold");
          var anyClosed = Array.prototype.some.call(folds, function (d) { return !d.open; });
          folds.forEach(function (d) { d.open = anyClosed; });
          e.currentTarget.textContent = anyClosed ? "Tout replier" : "Tout déplier";
        } }, window.matchMedia && window.matchMedia("(min-width: 861px)").matches ? "Tout replier" : "Tout déplier")
      ]),
      f.chiffres && f.chiffres.length ? el("section", { class: "chiffres", "aria-label": "Repères chiffrés" }, f.chiffres.map(function (c) {
        return el("div", { class: "chiffre" }, [el("span", { class: "ch-val" }, c.valeur), el("span", { class: "ch-txt" }, c.texte)]);
      })) : null,
      fold("h-questions", "Questions à poser au patient", "help", "teal", list(f.questions, true, "num-list")),
      fold("h-orient", "Orientations possibles", "compass", "green", list(f.orientations, false, "check-list")),
      f.aDire && f.aDire.length ? fold("h-adire", "À dire au patient", "chat", "green", el("ul", { class: "a-dire" }, f.aDire.map(function (t) { return el("li", null, el("q", null, t)); }))) : null,
      f.produits ? fold("h-produits", f.produits.titre || "Les produits", "pill", "purple", productsBlock(f.produits, true), "products") : null,
      fold("h-vigil", "Points de vigilance", "alert", "orange", list(f.vigilance), "fold-warn"),
      el("section", { class: "callout callout-alert", id: "passer-la-main", tabindex: "-1", "aria-labelledby": "h-main" }, [
        sectionTitle("h-main", "Quand passer la main au pharmacien", "hand", "red"),
        list(f.passerLaMain)
      ]),
      el("p", null, el("a", { href: "#/sources/" + encodeURIComponent(f.id) }, "Voir les sources de cette fiche")),
      el("nav", { class: "pager", "aria-label": "Fiches précédente et suivante" }, [
        prev ? el("a", { href: "#/fiche/" + encodeURIComponent(prev.id), rel: "prev" }, [el("span", { class: "pg-label" }, "Fiche précédente"), el("span", null, "← " + (prev.titre || ""))]) : el("span"),
        next ? el("a", { href: "#/fiche/" + encodeURIComponent(next.id), rel: "next", class: "pg-next" }, [el("span", { class: "pg-label" }, "Fiche suivante"), el("span", null, (next.titre || "") + " →")]) : el("span")
      ])
    ]);

    var aside = el("aside", { class: "fiche-aside", "aria-label": "Résumé de la fiche" }, [
      essentiel,
      el("div", { class: "fiche-actions" }, [
        (G.arbres || {})[f.id] ? el("a", { class: "btn btn-primary btn-tree", href: "#/arbre/" + encodeURIComponent(f.id) }, [uiIcon("tree"), el("span", null, "Suivre l'arbre de décision")]) : null,
        favButton(f)
      ]),
      tocNav
    ]);

    return {
      title: f.titre || "Fiche",
      section: "fiches",
      node: el("article", { class: "fiche" }, [
        el("p", { class: "breadcrumb" }, el("a", { href: "#/fiches" }, "← Toutes les fiches")),
        el("header", { class: "fiche-header" }, [
          el("div", { class: "fiche-head" }, [ART[f.id] ? el("span", { class: "fiche-art-big" }, ficheArt(f.id, 72)) : el("span", { class: "fiche-icon" }, uiIcon(f.icone || "fiches")), el("h1", null, f.titre || TODO)]),
          statusPill(f.validation, "fiche")
        ]),
        el("div", { class: "fiche-layout" }, [aside, main])
      ])
    };
  }

  // Filtre du tableau par famille (boutons « Tout », « Douleur et fièvre »…).
  function familyFilter(m) {
    var fams = m.familles || [];
    if (!fams.length) return null;
    var status = el("p", { class: "visually-hidden", "aria-live": "polite" });
    var bar = el("div", { class: "filter-bar", role: "group", "aria-label": "Filtrer par famille" });
    function choose(id, btn) {
      bar.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      var n = 0;
      document.querySelectorAll(".meds-table [data-famille]").forEach(function (tr) {
        var show = id === "tout" || tr.getAttribute("data-famille") === id;
        tr.hidden = !show; if (show) n++;
      });
      status.textContent = n + " famille" + (n > 1 ? "s" : "") + " de médicaments affichée" + (n > 1 ? "s" : "");
    }
    [{ id: "tout", nom: "Tout" }].concat(fams).forEach(function (f, i) {
      var b = el("button", { type: "button", class: "filter-chip", "aria-pressed": String(i === 0) }, f.nom);
      b.addEventListener("click", function () { choose(f.id, b); });
      bar.appendChild(b);
    });
    return el("div", null, [bar, status]);
  }

  function viewMedicaments() {
    var m = G.medicaments || {};
    var rows = m.lignes || [];
    return {
      title: "Types de médicaments",
      node: el("div", null, [
        el("h1", null, "Types de médicaments"),
        statusPill(m.validation, "tableau"),
        m.introduction ? el("p", null, m.introduction) : null,
        familyFilter(m),
        pictoLegend(),
        el("ul", { class: "med-grid meds-table", "aria-label": "Classes de médicaments" }, rows.map(function (r) {
          var fam = (m.familles || []).filter(function (x) { return x.id === r.famille; })[0];
          return el("li", { class: "med-card fam-" + (r.famille || "autre"), "data-famille": r.famille || "autre" }, [
            r.photo ? el("img", { class: "med-photo", src: r.photo, alt: r.photoTexte || "", loading: "lazy" }) : null,
            el("div", { class: "med-top" }, [
              el("span", { class: "med-fam" }, fam ? fam.nom : ""),
              el("h2", { class: "med-title" }, el("span", { class: "no-gloss" }, r.classe || TODO)),
              el("p", { class: "med-role" }, r.role || TODO),
              pictoBadges(r.pictos)
            ]),
            el("div", { class: "med-body" }, [
              el("h3", null, "Exemples"), list(r.exemples, false, "compact"),
              el("h3", null, "Points de vigilance"), list(r.vigilance, false, "compact med-vig")
            ])
          ]);
        })),
        (m.comparaisons || []).map(comparisonBlock),
        el("p", null, el("a", { href: "#/sources/medicaments" }, "Voir les sources de ce tableau"))
      ])
    };
  }

  // Icônes dessinées (aucune image externe). Formes : pastille, spray, bain-de-bouche, sirop, comprime.
  var ICONS = {
    pastille: [
      ["ellipse", { cx: 15, cy: 22, rx: 10, ry: 8, class: "ic-fill" }],
      ["ellipse", { cx: 27, cy: 18, rx: 10, ry: 8, class: "ic-fill" }],
      ["path", { d: "M23 14.5c2-1.5 5-1.6 7-.3", class: "ic-line" }]
    ],
    spray: [
      ["rect", { x: 12, y: 16, width: 14, height: 20, rx: 3, class: "ic-fill" }],
      ["rect", { x: 15, y: 9, width: 8, height: 7, rx: 1.5, class: "ic-fill" }],
      ["path", { d: "M23 11h5", class: "ic-line" }],
      ["circle", { cx: 32, cy: 8, r: 1.4, class: "ic-dot" }],
      ["circle", { cx: 34, cy: 12, r: 1.4, class: "ic-dot" }],
      ["circle", { cx: 32, cy: 15, r: 1.4, class: "ic-dot" }]
    ],
    "bain-de-bouche": [
      ["path", { d: "M13 14h14v20a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3z", class: "ic-fill" }],
      ["rect", { x: 15, y: 7, width: 10, height: 7, rx: 1.5, class: "ic-fill" }],
      ["path", { d: "M13 24h14", class: "ic-line" }],
      ["path", { d: "M29 28h6l-1 8h-4z", class: "ic-fill" }]
    ],
    sirop: [
      ["path", { d: "M14 15h12v19a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3z", class: "ic-fill" }],
      ["rect", { x: 16, y: 8, width: 8, height: 7, rx: 1.5, class: "ic-fill" }],
      ["rect", { x: 16, y: 22, width: 8, height: 7, rx: 1, class: "ic-line" }],
      ["path", { d: "M28 34c3 0 6-2 6-4h-6z", class: "ic-fill" }]
    ],
    comprime: [
      ["rect", { x: 7, y: 15, width: 26, height: 11, rx: 5.5, class: "ic-fill", transform: "rotate(-25 20 20)" }],
      ["path", { d: "M20 13v15", class: "ic-line", transform: "rotate(-25 20 20)" }]
    ]
  };

  function formIcon(forme) {
    var parts = ICONS[forme];
    if (!parts) return null;
    return svg("svg", { viewBox: "0 0 40 40", class: "form-icon", "aria-hidden": "true", focusable: "false" },
      parts.map(function (p) { return svg(p[0], p[1]); }));
  }

  var FORM_LABEL = { pastille: "Pastilles", spray: "Spray", "bain-de-bouche": "Bain de bouche", sirop: "Sirop", comprime: "Comprimés" };

  function productItem(x) {
    if (typeof x === "string") return el("li", { class: "prod-item" }, [el("span", { class: "form-icon-empty", "aria-hidden": "true" }), el("span", null, x)]);
    return el("li", { class: "prod-item" + (x.indisponible ? " is-unavailable" : "") }, [
      x.photo ? el("img", { class: "prod-photo", src: x.photo, alt: "Boîte de " + x.nom, loading: "lazy" }) : (formIcon(x.forme) || el("span", { class: "form-icon-empty", "aria-hidden": "true" })),
      el("span", { class: "prod-text" }, [
        el("strong", null, x.nom || TODO),
        x.forme && FORM_LABEL[x.forme] ? el("span", { class: "prod-form" }, " · " + FORM_LABEL[x.forme]) : null,
        x.detail ? el("span", { class: "prod-detail" }, x.detail) : null,
        pictoBadges(x.pictos)
      ])
    ]);
  }

  // Encart « produits » d'une fiche (data/fiches.js > "produits").
  function productsBlock(pr, inner) {
    function row(label, value) {
      if (!value || (Array.isArray(value) && !value.length)) return null;
      return el("div", { class: "prod-row" }, [
        el("dt", null, label),
        el("dd", null, Array.isArray(value) ? list(value, false, "compact") : value)
      ]);
    }
    var parts = [
      inner ? null : el("h2", { id: "h-produits" }, pr.titre || "Les produits"),
      pr.introduction ? el("p", null, pr.introduction) : null,
      el("div", { class: "prod-grid" }, (pr.types || []).map(function (t) {
        return el("article", { class: "prod-card t-" + (t.cle || "autre") }, [
          el("h3", null, [el("span", { class: "type-dot", "aria-hidden": "true" }), t.nom || TODO]),
          el("p", { class: "prod-what" }, t.cestQuoi || TODO),
          t.exemples && t.exemples.length
            ? el("ul", { class: "prod-items", "aria-label": "Produits" }, t.exemples.map(productItem))
            : null,
          el("dl", null, [
            row("Quand le proposer", t.quand),
            row("Attention", t.attention)
          ])
        ]);
      })),
      pr.choix ? comparisonBlock(pr.choix) : null
    ];
    return inner ? parts : el("section", { class: "products", id: "produits", "aria-labelledby": "h-produits" }, parts);
  }

  // Tableau comparatif (ex : AINS / IPP), défini dans data/medicaments.js > "comparaisons".
  function comparisonBlock(c) {
    var capId = "cmp-" + c.id;
    var cols = c.colonnes || [];
    return el("section", { id: "comparaison-" + c.id, tabindex: "-1", class: "comparison" }, [
      el("h2", null, c.titre || TODO),
      c.introduction ? el("p", null, c.introduction) : null,
      el("div", { class: "table-wrap", role: "region", "aria-labelledby": capId, tabindex: "0" },
        el("table", null, [
          el("caption", { id: capId }, c.titre || "Comparaison"),
          el("thead", null, el("tr", null, cols.map(function (h, i) {
            return el(i === 0 ? "td" : "th", i === 0 ? null : { scope: "col" }, h);
          }))),
          el("tbody", null, (c.lignes || []).map(function (row) {
            return el("tr", null, row.map(function (cell, i) {
              return i === 0 ? el("th", { scope: "row" }, cell) : el("td", null, cell);
            }));
          }))
        ])
      ),
      c.note ? el("p", { class: "callout callout-warning", role: "note" }, c.note) : null
    ]);
  }

  function viewAnimations() {
    var anims = G.animations || [];
    return {
      title: "Animations",
      node: el("div", null, [
        el("h1", null, "Animations"),
        el("p", null, "Chaque animation montre, étape par étape, comment agit une classe de médicaments. Avancez à votre rythme avec les boutons ou les flèches du clavier."),
        el("p", null, el("a", { href: "#/medicaments/ains-ipp" }, "AINS ou IPP : voir le tableau des différences")),
        anims.length
          ? el("ul", { class: "anim-grid" }, anims.map(function (a) {
              var n = (a.etapes || []).length;
              return el("li", null, el("a", { class: "anim-card", href: "#/animation/" + encodeURIComponent(a.id) }, [
                el("span", { class: "anim-thumb" }, [el("img", { src: PLATE.src, alt: "", loading: "lazy" }), el("span", { class: "anim-play" }, uiIcon("play"))]),
                el("span", { class: "anim-info" }, [
                  el("span", { class: "anim-kind" }, a.classe || ""),
                  el("span", { class: "anim-title" }, a.titre || TODO),
                  el("span", { class: "meta" }, n + " étapes · environ 2 minutes")
                ])
              ]));
            }))
          : todoBanner(TODO + " : aucune animation dans data/animations.js.")
      ])
    };
  }

  /* ---------- Schéma anatomique (dessiné ici, repère 0–400 × 0–600, vue de face) ----------
   * Gauche de l'image = côté droit du patient (convention anatomique).
   */
  /* ---------- Planche anatomique ----------
   * Fond : illustration de l'appareil digestif de Mariana Ruiz Villarreal (LadyofHats),
   * Wikimedia Commons, domaine public (assets/planche-digestif.jpg, repère 316 × 632).
   * Ajoutés par-dessus : cœur anatomique, vaisseaux, reins, zone douloureuse, trajet du médicament.
   * Gauche de l'image = côté droit du patient. Marges de -122 à 438 pour les légendes.
   */
  var PLATE = { w: 316, h: 632, src: "assets/planche-digestif.jpg", x0: -122, x1: 438 };

  var ZONES = {
    bouche:   { label: "Bouche",               x: 88,  y: 100, labels: ["bouche", "pharynx", "oesophage"],
                hl: [["ellipse", { cx: 92, cy: 106, rx: 26, ry: 22 }], ["path", { d: "M100 104 L148 116 L153 150 L154 230 L160 300 L166 340", "stroke-width": 16 }]] },
    coeur:    { label: "Cœur",                 x: 196, y: 272, labels: ["coeur"],
                hl: [["ellipse", { cx: 196, cy: 262, rx: 44, ry: 52 }]] },
    sang:     { label: "Circulation sanguine", x: 196, y: 272, labels: ["coeur", "aorte", "veine-cave", "poumons"],
                hl: [["ellipse", { cx: 196, cy: 262, rx: 44, ry: 52 }]] },
    foie:     { label: "Foie",                 x: 108, y: 388, labels: ["foie", "veine-porte"],
                hl: [["ellipse", { cx: 112, cy: 394, rx: 74, ry: 50 }]] },
    estomac:  { label: "Estomac",              x: 212, y: 388, labels: ["estomac"],
                hl: [["ellipse", { cx: 216, cy: 386, rx: 40, ry: 46 }]] },
    intestin: { label: "Intestin grêle",       x: 175, y: 540, labels: ["intestin"],
                hl: [["ellipse", { cx: 170, cy: 552, rx: 84, ry: 68 }]] },
    rein:     { label: "Reins",                x: 50,  y: 458, labels: ["rein-d", "rein-g"],
                hl: [["ellipse", { cx: 46, cy: 458, rx: 22, ry: 32 }], ["ellipse", { cx: 272, cy: 458, rx: 22, ry: 32 }]] },
    cible:    { label: "Zone douloureuse",     x: 34,  y: 205, labels: ["epaule"],
                hl: [["circle", { cx: 34, cy: 205, r: 26 }]] }
  };

  // Trajets anatomiques réels entre deux zones.
  var P = {
    tubeDigestif: [[88, 100], [112, 104], [134, 110], [149, 120], [153, 146], [152, 190], [154, 240], [157, 290], [161, 322], [167, 342], [180, 358], [200, 372], [212, 388]],
    versDuodenum: [[212, 388], [210, 410], [190, 420], [164, 422], [136, 424], [118, 440], [122, 462], [140, 476], [152, 500], [166, 522], [175, 540]],
    veinePorte:   [[175, 540], [166, 512], [156, 486], [144, 458], [130, 430], [118, 410], [108, 388]],
    foieAuCoeur:  [[108, 388], [124, 372], [140, 360], [146, 340], [146, 310], [154, 290], [168, 280], [178, 272], [186, 244], [200, 232], [236, 228], [244, 236], [226, 248], [212, 262], [204, 280], [196, 272]],
    coeurEpaule:  [[196, 272], [190, 250], [187, 228], [190, 214], [178, 208], [150, 204], [110, 202], [70, 204], [34, 205]],
    epauleRein:   [[34, 205], [70, 210], [110, 212], [150, 214], [166, 222], [170, 246], [176, 268], [192, 262], [198, 240], [206, 218], [216, 226], [214, 260], [196, 300], [172, 330], [170, 380], [170, 440], [130, 452], [90, 456], [50, 458]],
    coeurEstomac: [[196, 272], [190, 250], [187, 228], [196, 214], [214, 222], [214, 260], [196, 300], [172, 330], [170, 372], [190, 380], [212, 388]]
  };
  var ROUTES = {
    "bouche>estomac": P.tubeDigestif,
    "estomac>intestin": P.versDuodenum,
    "intestin>foie": P.veinePorte,
    "foie>sang": P.foieAuCoeur,
    "intestin>sang": P.veinePorte.concat(P.foieAuCoeur.slice(1)),
    "sang>cible": P.coeurEpaule,
    "cible>rein": P.epauleRein,
    "sang>estomac": P.coeurEstomac
  };

  // Légendes fixes des deux côtés : [id, texte, côté, y du texte, x cible, y cible]
  var PLATE_LABELS = [
    ["bouche", "Bouche", "L", 98, 84, 102],
    ["pharynx", "Pharynx", "L", 140, 148, 126],
    ["epaule", "Épaule (zone douloureuse)", "L", 194, 20, 205],
    ["veine-cave", "Veine cave", "L", 300, 145, 300],
    ["foie", "Foie", "L", 352, 80, 372],
    ["vesicule", "Vésicule biliaire", "L", 400, 92, 405],
    ["veine-porte", "Veine porte", "L", 434, 134, 446],
    ["rein-d", "Rein", "L", 472, 32, 462],
    ["colon", "Côlon (gros intestin)", "L", 530, 66, 524],
    ["appendice", "Appendice", "L", 600, 108, 598],
    ["oesophage", "Œsophage", "R", 160, 158, 170],
    ["aorte", "Aorte", "R", 200, 214, 212],
    ["poumons", "Vers les poumons", "R", 232, 244, 232],
    ["coeur", "Cœur", "R", 286, 224, 280],
    ["estomac", "Estomac", "R", 352, 232, 364],
    ["pancreas", "Pancréas", "R", 420, 230, 424],
    ["rein-g", "Rein", "R", 476, 286, 462],
    ["intestin", "Intestin grêle", "R", 546, 228, 546]
  ];

  function routeBetween(a, b) {
    if (!ZONES[a] || !ZONES[b] || a === b) return null;
    return ROUTES[a + ">" + b] || [[ZONES[a].x, ZONES[a].y], [ZONES[b].x, ZONES[b].y]];
  }

  function rg(id, c1, c2) {
    return svg("radialGradient", { id: id, cx: "35%", cy: "30%", r: "85%" }, [
      svg("stop", { offset: "0%", "stop-color": c1 }), svg("stop", { offset: "100%", "stop-color": c2 })
    ]);
  }

  // Cœur en vue antérieure : oreillette droite, ventricules, sillon interventriculaire,
  // aorte (crosse et branches), tronc pulmonaire, veine cave supérieure, coronaires.
  function anatomicalHeart() {
    return svg("g", { class: "add heart3" }, [
      svg("path", { class: "h-svc", d: "M168 206 L168 258" }),
      svg("path", { class: "h-aorta", d: "M188 256 C186 238 184 222 192 212 C200 203 214 204 219 214 C223 222 222 238 220 252" }),
      svg("path", { class: "h-branch", d: "M193 210 L190 192 M202 206 L202 188 M210 207 L213 190" }),
      svg("path", { class: "h-pulm", d: "M182 262 C180 246 188 236 200 236 L232 232 M198 236 C188 232 178 230 166 232" }),
      svg("path", { class: "h-body", d: "M170 254 C158 264 156 286 164 302 C174 320 200 330 224 320 C236 312 240 298 233 282 C226 266 214 254 198 249 C186 246 177 248 170 254 Z" }),
      svg("path", { class: "h-ra", d: "M170 254 C156 258 152 280 160 296 C164 302 171 300 173 291 C176 276 178 262 170 254 Z" }),
      svg("path", { class: "h-la", d: "M226 262 C234 260 240 268 236 276 C232 280 228 276 226 272 Z" }),
      svg("path", { class: "h-fat", d: "M196 254 C198 278 206 300 224 320" }),
      svg("path", { class: "h-cor", d: "M196 254 C198 278 206 300 224 320 M176 262 C178 282 186 302 200 316 M214 262 C220 280 224 296 226 306" }),
      svg("path", { class: "h-shine", d: "M178 270 C182 262 190 258 198 258" })
    ]);
  }

  function plateFigure(cibleLabel, usesCible) {
    var holes = svg("g", { class: "holes" });
    return [
      svg("defs", {}, [
        svg("mask", { id: "spot", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: PLATE.w, height: PLATE.h }, [
          svg("rect", { x: 0, y: 0, width: PLATE.w, height: PLATE.h, fill: "#fff" }), holes
        ]),
        rg("g-myo", "#e86a63", "#8e1b22"), rg("g-ra", "#b0505e", "#6e2333"), rg("g-kid2", "#d88b72", "#8a3a2b"),
        svg("marker", { id: "arr", viewBox: "0 0 8 8", refX: 7, refY: 4, markerWidth: 6, markerHeight: 6, orient: "auto-start-reverse" },
          [svg("path", { d: "M0 0 L8 4 L0 8 Z", fill: "#3d4a46" })]),
        svg("marker", { id: "arr-on", viewBox: "0 0 8 8", refX: 7, refY: 4, markerWidth: 6, markerHeight: 6, orient: "auto-start-reverse" },
          [svg("path", { d: "M0 0 L8 4 L0 8 Z", fill: "#0a6447" })])
      ]),
      svg("rect", { x: PLATE.x0, y: 0, width: PLATE.x1 - PLATE.x0, height: PLATE.h, class: "plate-bg" }),
      svg("image", { href: PLATE.src, x: 0, y: 0, width: PLATE.w, height: PLATE.h, preserveAspectRatio: "none" }),
      svg("rect", { class: "veil", x: 0, y: 0, width: PLATE.w, height: PLATE.h, mask: "url(#spot)" }),
      // Vaisseaux (ajoutés) : veine cave inférieure, veines hépatiques, veine porte, aorte descendante, artères rénales et sous-clavière
      svg("g", { class: "add vessels" }, [
        svg("path", { class: "vein2", d: "M146 628 L146 360 C146 330 152 300 170 280" }),
        svg("path", { class: "vein2", d: "M118 380 C128 372 138 364 146 356" }),
        svg("path", { class: "portal2", d: "M175 540 C166 512 156 486 144 458 C134 436 124 420 116 406" }),
        svg("path", { class: "artery2", d: "M218 250 C214 280 196 300 172 330 L170 628" }),
        svg("path", { class: "artery2", d: "M170 452 L52 458 M170 452 L268 458" }),
        svg("path", { class: "artery2", d: "M190 212 C176 206 140 202 34 205" }),
        svg("path", { class: "artery2 thin", d: "M170 372 C182 376 196 382 210 386" })
      ]),
      svg("g", { class: "add kidneys" }, [
        svg("path", { d: "M46 428 C32 428 26 444 27 456 C28 472 34 488 47 486 C56 485 54 474 50 468 C45 461 46 454 52 448 C59 441 57 428 46 428 Z" }),
        svg("path", { d: "M272 428 C286 428 292 444 291 456 C290 472 284 488 271 486 C262 485 264 474 268 468 C273 461 272 454 266 448 C259 441 261 428 272 428 Z" })
      ]),
      anatomicalHeart(),
      usesCible ? svg("circle", { class: "add target2", cx: 34, cy: 205, r: 16 }) : null,
      svg("g", { class: "hl-rings" }),
      // Légendes avec flèches
      svg("g", { class: "plabels" }, PLATE_LABELS.filter(function (l) { return usesCible || l[0] !== "epaule"; }).map(function (l) {
        var left = l[2] === "L";
        var tx = left ? -8 : 324, lx = left ? -4 : 320;
        var text = l[0] === "epaule" && cibleLabel ? cibleLabel.replace(/^Zone douloureuse \(ex : (.*)\)$/, function (m, a) { return a.charAt(0).toUpperCase() + a.slice(1) + " (zone douloureuse)"; }) : l[1];
        return svg("g", { class: "plabel", "data-label": l[0] }, [
          svg("line", { x1: lx, y1: l[3] - 4, x2: l[4], y2: l[5], "marker-end": "url(#arr)" }),
          labelText(text, tx, l[3], left ? "end" : "start")
        ]);
      }))
    ].filter(Boolean);
  }

  // Étiquette sur une ou deux lignes (coupure avant une parenthèse).
  function labelText(txt, x, y, anchor) {
    var cut = txt.indexOf(" (");
    if (cut < 0) return svg("text", { x: x, y: y, "text-anchor": anchor }, [txt]);
    return svg("text", { x: x, y: y - 7, "text-anchor": anchor }, [
      svg("tspan", { x: x }, [txt.slice(0, cut)]),
      svg("tspan", { x: x, dy: 14, class: "sub" }, [txt.slice(cut + 1)])
    ]);
  }

  // Met en évidence une zone : trou dans le voile, anneau lumineux, légendes en vert.
  function plateSetActive(figure, zoneKey) {
    var z = ZONES[zoneKey];
    var holes = figure.querySelector(".holes");
    var rings = figure.querySelector(".hl-rings");
    holes.textContent = ""; rings.textContent = "";
    figure.classList.toggle("has-active", !!z);
    figure.classList.toggle("blood-on", ["sang", "cible", "rein", "coeur", "foie"].indexOf(zoneKey) !== -1);
    figure.classList.toggle("kidney-on", zoneKey === "rein");
    var on = z ? z.labels : [];
    figure.querySelectorAll(".plabel").forEach(function (g) {
      var act = on.indexOf(g.getAttribute("data-label")) !== -1;
      g.classList.toggle("active", act);
      g.querySelector("line").setAttribute("marker-end", act ? "url(#arr-on)" : "url(#arr)");
    });
    if (!z) return;
    z.hl.forEach(function (h) {
      var attrs = Object.assign({}, h[1]);
      var isLine = h[0] === "path";
      holes.appendChild(svg(h[0], Object.assign({}, attrs, isLine ? { fill: "none", stroke: "#000", "stroke-linecap": "round", "stroke-linejoin": "round" } : { fill: "#000" })));
      if (!isLine) rings.appendChild(svg(h[0], Object.assign({}, attrs, { class: "ring" })));
    });
  }

  function viewAnimation(id) {
    var a = findById(G.animations, id);
    if (!a) return viewNotFound();
    var steps = (a.etapes && a.etapes.length) ? a.etapes : [{ zone: "", titre: TODO, texte: TODO }];
    var current = 0;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var usesCible = steps.some(function (s) { return s.zone === "cible"; });
    var firstGut = -1;
    steps.forEach(function (s, i) { if (firstGut < 0 && s.zone === "intestin") firstGut = i; });

    var svgTitle = svg("title", { id: "anim-svg-title" });
    var svgDesc = svg("desc", { id: "anim-svg-desc" });
    var trails = svg("g", { class: "trails" });
    var pill = svg("g", { class: "pill" }, [
      svg("rect", { x: -13, y: -7, width: 26, height: 14, rx: 7, class: "pill-a" }),
      svg("path", { d: "M0 -7 H6 A7 7 0 0 1 6 7 H0 Z", class: "pill-b" })
    ]);
    var mol = svg("g", { class: "mol" }, [
      svg("circle", { cx: -7, cy: -3, r: 4.5 }), svg("circle", { cx: 5, cy: -6, r: 4.5 }),
      svg("circle", { cx: 2, cy: 6, r: 4.5 }), svg("circle", { cx: 10, cy: 4, r: 3.5 })
    ]);
    var mover = svg("g", { class: "mover" }, [pill, mol]);

    var figure = svg("svg", {
      viewBox: PLATE.x0 + " 0 " + (PLATE.x1 - PLATE.x0) + " " + PLATE.h, class: "body-diagram anatomy plate" + (usesCible ? "" : " no-target"), role: "img",
      "aria-labelledby": "anim-svg-title anim-svg-desc", focusable: "false"
    }, [svgTitle, svgDesc].concat(plateFigure(a.cibleLabel, usesCible), [trails, mover]));

    var counter = el("p", { class: "step-counter" });
    var stepTime = el("p", { class: "step-time" });
    var stepTitle = el("h2", { class: "step-title" });
    var stepText = el("p", { class: "step-text" });
    var bigNum = el("span", { class: "step-big", "aria-hidden": "true" });
    var stepBar = el("div", { class: "step-bar", "aria-hidden": "true" }, el("span"));
    var live = el("div", { class: "step-panel", "aria-live": "polite", "aria-atomic": "true" }, [
      el("div", { class: "step-head" }, [bigNum, el("div", null, [counter, stepTime])]), stepBar, stepTitle, stepText]);

    var timeline = el("ol", { class: "timeline", "aria-label": "Chronologie" }, steps.map(function (s, i) {
      var z = ZONES[s.zone];
      return el("li", null, el("button", { type: "button", onclick: function () { go(i, true); } }, [
        el("span", { class: "tl-dot", "aria-hidden": "true" }, String(i + 1)),
        el("span", { class: "tl-time" }, s.temps || "—"),
        el("span", { class: "tl-zone" }, z ? z.label : "")
      ]));
    }));

    var btnPrev = el("button", { type: "button", class: "btn", onclick: function () { go(current - 1, true); } }, "← Précédent");
    var btnNext = el("button", { type: "button", class: "btn btn-primary", onclick: function () { go(current + 1); } }, "Suivant →");
    var btnReset = el("button", { type: "button", class: "btn btn-ghost", onclick: function () { go(0, true); btnNext.focus(); } }, "Recommencer");

    function setText(node, s) { node.textContent = ""; add(node, s || TODO); }

    var raf = null;
    function place(x, y) { mover.setAttribute("transform", "translate(" + x + " " + y + ") scale(.75)"); }

    function animateAlong(pts, done) {
      if (raf) cancelAnimationFrame(raf);
      if (reduce || !pts || pts.length < 2) { var e = pts && pts[pts.length - 1]; if (e) place(e[0], e[1]); done && done(); return; }
      var segs = [], total = 0;
      for (var i = 1; i < pts.length; i++) {
        var d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
        segs.push(d); total += d;
      }
      var dur = Math.min(5200, 600 + total * 5.5), t0 = null;
      function frame(ts) {
        if (t0 === null) t0 = ts;
        var k = Math.min(1, (ts - t0) / dur);
        k = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; // accélère puis ralentit
        var dist = k * total, j = 0;
        while (j < segs.length - 1 && dist > segs[j]) { dist -= segs[j]; j++; }
        var r = segs[j] ? dist / segs[j] : 1;
        place(pts[j][0] + (pts[j + 1][0] - pts[j][0]) * r, pts[j][1] + (pts[j + 1][1] - pts[j][1]) * r);
        if (k < 1) raf = requestAnimationFrame(frame); else { raf = null; done && done(); }
      }
      raf = requestAnimationFrame(frame);
    }

    function drawTrails(upTo) {
      trails.textContent = "";
      for (var i = 1; i <= upTo; i++) {
        var r = routeBetween(steps[i - 1].zone, steps[i].zone);
        if (!r) continue;
        trails.appendChild(svg("polyline", {
          points: r.map(function (p) { return p.join(","); }).join(" "),
          class: "trail" + (i === upTo ? " current" + (reduce ? "" : " drawing") : "")
        }));
      }
    }

    function go(n, jump) {
      var prev = current;
      current = Math.max(0, Math.min(steps.length - 1, n));
      var s = steps[current];
      var z = ZONES[s.zone];
      counter.textContent = "Étape " + (current + 1) + " sur " + steps.length;
      bigNum.textContent = String(current + 1);
      stepBar.firstChild.style.width = Math.round(100 * (current + 1) / steps.length) + "%";
      stepTime.textContent = "";
      if (s.temps) add(stepTime, [uiIcon("clock"), el("span", null, s.temps)]);
      setText(stepTitle, s.titre);
      setText(stepText, s.texte);
      svgTitle.textContent = (a.titre || "Animation") + " — étape " + (current + 1) + " sur " + steps.length;
      svgDesc.textContent = (s.titre || "") + ". " + (s.temps ? "Repère de temps : " + s.temps + ". " : "") +
        (z ? "Organe mis en évidence : " + z.label + ". " : "") + (s.texte || "");

      plateSetActive(figure, s.zone);
      // Avant l'intestin : comprimé entier. Après : molécules dans le sang.
      figure.classList.toggle("absorbed", firstGut >= 0 && current > firstGut);

      Array.prototype.forEach.call(timeline.children, function (li, i) {
        li.className = i === current ? "current" : (i < current ? "done" : "");
        var b = li.firstChild;
        if (i === current) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
      });
      btnPrev.disabled = current === 0;
      btnNext.disabled = current === steps.length - 1;

      drawTrails(current);
      mover.style.opacity = z ? "1" : "0";
      var route = (!jump && current === prev + 1) ? routeBetween(steps[prev].zone, s.zone) : null;
      if (route) animateAlong(route);
      else if (z) { if (raf) cancelAnimationFrame(raf); place(z.x, z.y); }
    }

    var region = el("section", {
      class: "animation", "aria-label": "Animation interactive",
      onkeydown: function (e) {
        if (e.target.tagName === "BUTTON" && e.target.closest(".timeline")) return;
        if (e.key === "ArrowRight") { go(current + 1); e.preventDefault(); }
        else if (e.key === "ArrowLeft") { go(current - 1, true); e.preventDefault(); }
      }
    }, [
      el("figure", { class: "animation-figure" }, [figure]),
      el("div", { class: "animation-side" }, [
        live,
        el("div", { class: "controls" }, [btnPrev, btnNext, btnReset]),
        el("p", { class: "hint" }, "Les durées sont des repères approximatifs chez l'adulte. Flèches ← → du clavier pour avancer.")
      ]),
      el("div", { class: "animation-timeline" }, [el("h2", { class: "tl-title" }, "Chronologie"), timeline])
    ]);

    go(0, true);

    return {
      title: a.titre || "Animation",
      section: "animations",
      node: el("div", null, [
        el("p", { class: "breadcrumb" }, el("a", { href: "#/animations" }, "← Toutes les animations")),
        el("h1", null, a.titre || TODO),
        statusPill(a.validation, "animation"),
        el("p", null, a.introduction || TODO),
        region,
        el("details", { class: "text-version" }, [
          el("summary", null, "Version texte de toute l'animation"),
          el("ol", null, steps.map(function (s) {
            var z = ZONES[s.zone];
            return el("li", null, [el("strong", null, s.titre || TODO), z ? " (" + z.label + (s.temps ? ", " + s.temps : "") + ")" : "", " : ", s.texte || TODO]);
          }))
        ]),
        el("p", null, el("a", { href: "#/medicaments/ains-ipp" }, "AINS ou IPP : voir le tableau des différences")),
        el("p", null, el("a", { href: "#/sources/" + encodeURIComponent(a.id) }, "Voir les sources de cette animation"))
      ])
    };
  }

  function viewQuizList() {
    var quizzes = G.quiz || [];
    var status = el("p", { class: "visually-hidden", "aria-live": "polite" });
    var grid = el("ul", { class: "quiz-tiles" });

    function fillHistory() {
      var scores = readScores();
      grid.textContent = "";
      quizzes.forEach(function (q, i) {
        var essais = (scores[q.id] && scores[q.id].essais) || [];
        var last = essais[essais.length - 1];
        var best = essais.reduce(function (b, e) { return !b || e.score / e.total > b.score / b.total ? e : b; }, null);
        var n = (q.questions || []).length;
        grid.appendChild(el("li", null, el("article", { class: "quiz-tile" }, [
          el("p", { class: "qt-kicker" }, i === 0 ? "Premier jour" : "Après un mois"),
          el("h2", null, q.titre || q.id),
          el("p", { class: "qt-desc" }, q.description || ""),
          el("dl", { class: "qt-stats" }, [
            el("div", null, [el("dt", null, "Questions"), el("dd", null, String(n))]),
            el("div", null, [el("dt", null, "Dernier score"), el("dd", null, last ? last.score + "/" + last.total : "—")]),
            el("div", null, [el("dt", null, "Meilleur"), el("dd", null, best ? best.score + "/" + best.total : "—")])
          ]),
          last ? el("p", { class: "meta" }, "Dernier essai le " + formatDate(last.date) + " · " + essais.length + " essai" + (essais.length > 1 ? "s" : "")) : el("p", { class: "meta" }, "Pas encore fait"),
          el("a", { class: "btn btn-primary", href: "#/quiz/" + encodeURIComponent(q.id) }, last ? "Refaire le quiz" : "Commencer le quiz")
        ])));
      });
    }
    fillHistory();

    return {
      title: "Quiz",
      node: el("div", null, [
        el("h1", null, "Quiz"),
        el("p", null, "Deux quiz de dix questions : le quiz J0 à faire le premier jour, le quiz J30 après un mois. Chaque réponse est corrigée immédiatement."),
        grid,
        el("p", { class: "meta" }, "Les résultats sont enregistrés uniquement dans ce navigateur. Ils ne sont jamais envoyés et personne d'autre ne les voit."),
        el("button", { type: "button", class: "btn btn-ghost btn-small", onclick: function () {
          if (window.confirm("Effacer tous vos résultats de quiz sur cet appareil ?")) {
            clearScores(); fillHistory(); status.textContent = "Résultats effacés.";
          }
        } }, "Effacer mes résultats"),
        status
      ])
    };
  }

  function viewQuiz(id) {
    var q = findById(G.quiz, id);
    if (!q) return viewNotFound();
    var questions = q.questions || [];
    var idx = 0, score = 0, answered = false;
    var stage = el("div", { class: "quiz-stage" });
    var feedback = el("div", { class: "quiz-feedback", "aria-live": "polite" });

    function renderQuestion() {
      answered = false;
      var item = questions[idx];
      var name = "q-" + idx;
      var choices = Array.isArray(item.choix) ? item.choix : [];
      var actionBtn = el("button", { type: "submit", class: "btn btn-primary" }, "Valider ma réponse");
      var error = el("p", { class: "form-error", "aria-live": "assertive" });

      var form = el("form", { class: "quiz-form", novalidate: true }, [
        el("div", { class: "quiz-progress", "aria-hidden": "true" }, el("span", { style: "width:" + Math.round(100 * (idx + 1) / questions.length) + "%" })),
        el("fieldset", null, [
          el("legend", null, [el("span", { class: "step-counter" }, "Question " + (idx + 1) + " sur " + questions.length), el("span", { class: "quiz-question" }, item.question || TODO)]),
          // Réponses mélangées à chaque affichage ; "value" garde la position d'origine (celle de bonneReponse).
          el("div", { class: "choices" }, shuffle(choices.map(function (c, i) { return i; })).map(function (i) {
            var c = choices[i];
            var cid = name + "-" + i;
            return el("div", { class: "choice", "data-index": String(i) }, [
              el("input", { type: "radio", name: name, id: cid, value: String(i) }),
              el("label", { for: cid }, c)
            ]);
          }))
        ]),
        error,
        el("div", { class: "controls" }, actionBtn)
      ]);

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (answered) { next(); return; }
        var picked = form.querySelector("input:checked");
        if (!picked) { error.textContent = "Choisissez une réponse avant de valider."; return; }
        error.textContent = "";
        answered = true;
        var chosen = Number(picked.value);
        var good = Number(item.bonneReponse);
        var ok = chosen === good;
        if (ok) score++;
        form.querySelectorAll("input").forEach(function (inp) { inp.disabled = true; });
        form.querySelectorAll(".choice").forEach(function (div) {
          var i = Number(div.getAttribute("data-index"));
          if (i === good) { div.classList.add("is-correct"); div.appendChild(el("span", { class: "tag tag-ok" }, "Bonne réponse")); }
          else if (i === chosen) { div.classList.add("is-wrong"); div.appendChild(el("span", { class: "tag tag-ko" }, "Votre réponse")); }
        });
        feedback.textContent = "";
        add(feedback, el("div", { class: "callout " + (ok ? "callout-ok" : "callout-alert") }, [
          el("p", null, el("strong", null, ok ? "Correct." : "Incorrect. La bonne réponse est : " + (choices[good] !== undefined ? choices[good] : TODO))),
          el("p", null, item.explication || TODO)
        ]));
        actionBtn.textContent = idx < questions.length - 1 ? "Question suivante →" : "Voir mon score";
        actionBtn.focus();
      });

      stage.textContent = "";
      feedback.textContent = "";
      stage.appendChild(form);
      var first = form.querySelector("input");
      if (first && idx > 0) first.focus();
    }

    function next() {
      idx++;
      if (idx < questions.length) renderQuestion(); else renderEnd();
    }

    function renderEnd() {
      var saved = saveScore(q.id, score, questions.length);
      feedback.textContent = "";
      stage.textContent = "";
      var total = questions.length, pct = total ? Math.round(100 * score / total) : 0;
      var essais = ((readScores()[q.id] || {}).essais) || [];
      var before = essais.length > 1 ? essais[essais.length - 2] : null;
      var msg = pct === 100 ? ["Parfait !", "Toutes les réponses sont justes."]
        : pct >= 80 ? ["Très bien", "Relisez les quelques points manqués dans les fiches."]
        : pct >= 50 ? ["Bon début", "Reprenez les fiches concernées, puis refaites le quiz."]
        : ["À retravailler", "Relisez les fiches et les « essentiels », puis réessayez."];
      var R = 52, C = 2 * Math.PI * R;
      var gauge = svg("svg", { viewBox: "0 0 120 120", class: "gauge" + (pct >= 80 ? " g-ok" : pct >= 50 ? " g-mid" : " g-low"), "aria-hidden": "true" }, [
        svg("circle", { cx: 60, cy: 60, r: R, class: "g-track" }),
        svg("circle", { cx: 60, cy: 60, r: R, class: "g-bar", "stroke-dasharray": C, "stroke-dashoffset": C * (1 - pct / 100), transform: "rotate(-90 60 60)" }),
        svg("text", { x: 60, y: 58, "text-anchor": "middle", class: "g-num" }, [score + "/" + total]),
        svg("text", { x: 60, y: 78, "text-anchor": "middle", class: "g-pct" }, [pct + " %"])
      ]);
      var heading = el("h2", { tabindex: "-1" }, msg[0]);
      var delta = before ? score - before.score : null;
      add(stage, el("div", { class: "quiz-end" }, [
        el("div", { class: "qe-top" }, [gauge, el("div", null, [
          heading,
          el("p", { class: "qe-msg" }, msg[1]),
          el("p", { class: "visually-hidden" }, "Score : " + score + " sur " + total + "."),
          delta !== null ? el("p", { class: "qe-delta " + (delta > 0 ? "up" : delta < 0 ? "down" : "same") },
            delta > 0 ? "+" + delta + " par rapport à l'essai précédent" : delta < 0 ? delta + " par rapport à l'essai précédent" : "Même score qu'à l'essai précédent") : null
        ])]),
        el("p", { class: "meta" }, saved ? "Score enregistré sur cet appareil uniquement." : "Le score n'a pas pu être enregistré (stockage du navigateur indisponible). Il n'est envoyé nulle part."),
        el("div", { class: "controls" }, [
          el("button", { type: "button", class: "btn btn-primary", onclick: function () { idx = 0; score = 0; renderQuestion(); stage.querySelector("input") && stage.querySelector("input").focus(); } }, "Recommencer ce quiz"),
          el("a", { class: "btn btn-ghost", href: "#/quiz" }, "Retour aux quiz")
        ])
      ]));
      heading.focus();
    }

    var body = el("div", null, [
      el("p", { class: "breadcrumb" }, el("a", { href: "#/quiz" }, "← Tous les quiz")),
      el("h1", null, q.titre || TODO),
      hasTodo(q) ? todoBanner("Ce quiz contient des questions ou réponses à compléter : le score n'est pas significatif.") : null,
      q.description ? el("p", null, q.description) : null,
      stage,
      feedback
    ]);
    if (questions.length) renderQuestion(); else add(stage, todoBanner(TODO + " : aucune question dans ce quiz."));
    return { title: q.titre || "Quiz", section: "quiz", node: body };
  }

  function refList(refs) {
    refs = refs && refs.length ? refs : [{ titre: TODO }];
    return el("ul", { class: "refs" }, refs.map(function (r) {
      var safe = typeof r.lien === "string" && /^https?:\/\//i.test(r.lien);
      var host = safe ? r.lien.replace(/^https?:\/\//, "").split("/")[0].replace(/^www\./, "") : "";
      return el("li", { class: "ref" }, [
        el("span", { class: "ref-type" }, r.type || "Source"),
        safe ? el("a", { href: r.lien, target: "_blank", rel: "noopener noreferrer" }, r.titre || r.lien) : el("span", { class: "ref-title" }, r.titre || TODO),
        host ? el("span", { class: "ref-host" }, host) : null,
        r.consulteLe ? el("span", { class: "meta" }, " — consulté le " + r.consulteLe) : null
      ]);
    }));
  }

  function labelForSourceKey(key) {
    var f = findById(G.fiches, key);
    if (f) return { label: "Fiche : " + (f.titre || key), href: "#/fiche/" + encodeURIComponent(key) };
    var a = findById(G.animations, key);
    if (a) return { label: "Animation : " + (a.titre || key), href: "#/animation/" + encodeURIComponent(key) };
    if (key === "medicaments") return { label: "Tableau « Types de médicaments »", href: "#/medicaments" };
    var qz = key.indexOf("quiz-") === 0 && findById(G.quiz, key.slice(5));
    if (qz) return { label: qz.titre || key, href: "#/quiz/" + encodeURIComponent(qz.id) };
    return { label: key, href: null };
  }

  function viewSources(focusKey) {
    var s = G.sources || {};
    var par = s.parFiche || {};
    var sections = Object.keys(par).map(function (k) {
      var info = labelForSourceKey(k);
      return el("section", { id: "src-" + k, tabindex: "-1", class: "source-block" }, [
        el("h3", null, info.href ? el("a", { href: info.href }, info.label) : info.label),
        refList(par[k])
      ]);
    });
    var node = el("div", null, [
      el("h1", null, "Sources"),
      el("p", null, "Notices, bases officielles et documents de référence utilisés pour rédiger chaque contenu du guide."),
      statusPill(s.verification, "liste des sources"),

      el("h2", null, "Sources générales"),
      refList(s.generales),
      el("h2", null, "Sources par contenu"),
      sections
    ]);
    return { title: "Sources", section: "sources", node: node, focusId: focusKey ? "src-" + focusKey : null };
  }

  function phoneTiles(items) {
    return el("ul", { class: "phone-tiles" }, items.map(function (t) {
      var m = t.match(/^(\d{2,4}) : (.*)$/);
      return el("li", null, el("a", { class: "phone-tile" + (m[1] === "15" || m[1] === "112" ? " urgent" : ""), href: "tel:" + m[1] }, [
        el("span", { class: "pt-num" }, m[1]), el("span", { class: "pt-label" }, m[2])
      ]));
    }));
  }

  function viewPage(id) {
    var p = findById(G.pages, id);
    if (!p) return viewNotFound();
    return {
      title: p.titre || "Page",
      section: "page/" + p.id,
      node: el("div", null, [
        el("h1", null, p.titre || TODO),
        p.validation ? statusPill(p.validation, "procédure") : null,
        p.introduction ? el("p", { class: "lead" }, p.introduction) : null,
        (p.sections || []).map(function (sec) {
          return el("section", { class: sec.relecture ? "review-only" : null }, [
            sec.titre ? el("h2", null, sec.titre) : null,
            (sec.paragraphes || []).map(function (t) { return el("p", null, t); }),
            sec.etapes && sec.etapes.length ? list(sec.etapes, true, "steps-list") : null,
            sec.liste && sec.liste.length ? (sec.liste.every(function (t) { return /^\d{2,4} : /.test(t); }) ? phoneTiles(sec.liste) : list(sec.liste)) : null,
            sec.attention && sec.attention.length
              ? el("div", { class: "callout callout-warning", role: "note" }, [el("p", null, el("strong", null, "Attention")), list(sec.attention)])
              : null
          ]);
        })
      ])
    };
  }

  /* ---------- Arbres de décision ---------- */

  var NIVEAUX = {
    urgence:    { titre: "Prévenir le pharmacien immédiatement", icon: "alert", cls: "lvl-urgence" },
    pharmacien: { titre: "Passer la main au pharmacien", icon: "hand", cls: "lvl-pharmacien" },
    conseil:    { titre: "Conseil possible au comptoir", icon: "quiz", cls: "lvl-conseil" }
  };

  function viewArbre(id) {
    var f = findById(G.fiches, id);
    var tree = (G.arbres || {})[id];
    if (!f || !tree) return viewNotFound();
    var etapes = tree.etapes || [];
    var box = el("div", { class: "tree", "aria-live": "polite" });
    var answers = [];

    function finQ() { return tree.fin && tree.fin.q ? tree.fin : null; }
    var total = etapes.length + (finQ() ? 1 : 0);

    function ask(i) {
      box.textContent = "";
      var isFin = i >= etapes.length;
      var step = isFin ? finQ() : etapes[i];
      if (!step) return result(tree.fin || { niveau: "pharmacien", texte: TODO });
      var bar = el("div", { class: "quiz-progress", "aria-hidden": "true" }, el("span", { style: "width:" + Math.round(100 * (i + 1) / total) + "%" }));
      var yes = el("button", { type: "button", class: "btn tree-yes", onclick: function () { answer(i, step, true); } }, "Oui");
      var no = el("button", { type: "button", class: "btn tree-no", onclick: function () { answer(i, step, false); } }, "Non");
      add(box, [bar,
        el("p", { class: "step-counter" }, "Question " + (i + 1) + " sur " + total),
        el("h2", { class: "tree-q", tabindex: "-1" }, step.q),
        el("div", { class: "tree-buttons" }, [yes, no]),
        i > 0 ? el("button", { type: "button", class: "btn btn-ghost btn-small", onclick: function () { answers.pop(); ask(i - 1); } }, "← Question précédente") : null
      ]);
      var h = box.querySelector(".tree-q"); if (h && answers.length) h.focus();
    }

    function answer(i, step, oui) {
      answers = answers.slice(0, i);
      answers.push({ q: step.q, r: oui ? "Oui" : "Non" });
      var res = oui ? step.oui : step.non;
      if (res) return result(res);
      if (i + 1 < etapes.length || (i + 1 === etapes.length && finQ())) return ask(i + 1);
      result(i >= etapes.length ? { niveau: "pharmacien", texte: TODO } : tree.fin);
    }

    function result(res) {
      box.textContent = "";
      var n = NIVEAUX[res.niveau] || NIVEAUX.pharmacien;
      var lien = res.lien && findById(G.fiches, res.lien);
      add(box, [
        el("div", { class: "tree-result " + n.cls, tabindex: "-1" }, [
          el("span", { class: "tr-icon" }, uiIcon(n.icon)),
          el("div", null, [el("h2", null, n.titre), el("p", null, res.texte || TODO),
            lien ? el("p", null, el("a", { href: "#/fiche/" + encodeURIComponent(lien.id) }, "Ouvrir la fiche « " + lien.titre + " »")) : null])
        ]),
        res.niveau === "conseil" ? el("p", { class: "meta" }, "Au moindre doute, ou si le patient pose une question à laquelle vous ne savez pas répondre : demandez au pharmacien.") : null,
        answers.length ? el("details", { class: "tree-recap" }, [el("summary", null, "Revoir les réponses données"),
          el("ol", null, answers.map(function (a) { return el("li", null, [a.q, " ", el("strong", null, a.r)]); }))]) : null,
        el("div", { class: "controls" }, [
          el("button", { type: "button", class: "btn btn-primary", onclick: function () { answers = []; ask(0); } }, "Recommencer"),
          el("a", { class: "btn btn-ghost", href: "#/fiche/" + encodeURIComponent(f.id) }, "Voir la fiche complète")
        ])
      ]);
      box.querySelector(".tree-result").focus();
    }

    ask(0);
    return {
      title: "Arbre de décision : " + f.titre, section: "fiches",
      node: el("div", null, [
        el("p", { class: "breadcrumb" }, el("a", { href: "#/fiche/" + encodeURIComponent(f.id) }, "← Fiche « " + f.titre + " »")),
        el("div", { class: "fiche-head" }, [el("span", { class: "fiche-icon" }, uiIcon(f.icone || "fiches")), el("h1", null, f.titre)]),
        el("p", { class: "lead" }, "Répondez aux questions dans l'ordre, en les posant au patient. Le guide vous indique s'il faut passer la main ou si un conseil est possible."),
        statusPill(f.validation, "arbre de décision"),
        box
      ])
    };
  }

  /* ---------- Pictogrammes ---------- */

  var PICTOS = {
    grossesse:   ["baby", "Grossesse : avis du pharmacien", "p-red"],
    conduite:    ["car", "Somnolence : conduite", "p-orange"],
    alcool:      ["glass", "Pas d'alcool", "p-orange"],
    age:         ["child", "Âge minimum", "p-blue"],
    sucre:       ["cube", "Contient du sucre", "p-blue"],
    ordonnance:  ["rx", "Sur ordonnance", "p-purple"],
    anticoag:    ["drop2", "Pas avec un anticoagulant", "p-red"],
    espacer:     ["horloge", "2 h d'écart", "p-teal"],
    duree:       ["horloge", "Durée limitée", "p-teal"],
    fausseroute: ["alert", "Risque de fausse route", "p-orange"],
    ruche:       ["insecte", "Allergie aux produits de la ruche", "p-red"],
    soleil:      ["soleil", "Pas de soleil", "p-orange"]
  };

  function pictoBadges(list) {
    if (!list || !list.length) return null;
    return el("span", { class: "pictos" }, list.map(function (p) {
      var k = p.split(":")[0], label = p.indexOf(":") > -1 ? p.slice(p.indexOf(":") + 1) : null;
      var d = PICTOS[k];
      if (!d) return null;
      return el("span", { class: "picto " + d[2], title: label || d[1] }, [uiIcon(d[0]), el("span", null, label || d[1])]);
    }));
  }

  function pictoLegend() {
    return el("details", { class: "picto-legend" }, [
      el("summary", null, "Que veulent dire les pictogrammes ?"),
      el("ul", null, Object.keys(PICTOS).map(function (k) { return el("li", null, pictoBadges([k])); }))
    ]);
  }

  /* ---------- Glossaire ---------- */

  function glossSlug(t) { return norm(t).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  function viewGlossaire(slug) {
    var items = (G.glossaire || []).slice().sort(function (a, b) { return a.terme.localeCompare(b.terme, "fr"); });
    var letters = {};
    items.forEach(function (g) { var l = norm(g.terme).charAt(0).toUpperCase(); (letters[/[A-Z]/.test(l) ? l : "#"] = letters[/[A-Z]/.test(l) ? l : "#"] || []).push(g); });
    return {
      title: "Glossaire", section: "glossaire", focusId: slug ? "g-" + slug : null,
      node: el("div", null, [
        el("h1", null, "Glossaire"),
        el("p", { class: "lead" }, "Les mots et sigles du comptoir, expliqués simplement. Dans tout le guide, les mots soulignés en pointillés renvoient ici : touchez-les pour voir leur définition."),
        el("nav", { class: "alpha", "aria-label": "Lettres" }, Object.keys(letters).sort().map(function (l) {
          return el("a", { href: "#/glossaire/lettre-" + l.toLowerCase(), onclick: jumpTo("lettre-" + l.toLowerCase()) }, l);
        })),
        Object.keys(letters).sort().map(function (l) {
          return el("section", { id: "lettre-" + l.toLowerCase(), tabindex: "-1" }, [
            el("h2", { class: "alpha-h" }, l),
            el("dl", { class: "gloss-list" }, letters[l].map(function (g) {
              return el("div", { id: "g-" + glossSlug(g.terme), tabindex: "-1", class: "gloss-item" }, [el("dt", null, g.terme), el("dd", null, g.definition)]);
            }))
          ]);
        })
      ])
    };
  }

  var GLOSS_RE = null, GLOSS_MAP = {};
  function glossRegex() {
    if (GLOSS_RE !== null) return GLOSS_RE;
    var forms = [];
    (G.glossaire || []).forEach(function (g) {
      [g.terme].concat(g.variantes || []).forEach(function (f) { GLOSS_MAP[f.toLowerCase()] = { g: g, form: f }; forms.push(f); });
    });
    if (!forms.length) return (GLOSS_RE = false);
    forms.sort(function (a, b) { return b.length - a.length; });
    var esc = forms.map(function (f) { return f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    GLOSS_RE = new RegExp("(^|[^A-Za-zÀ-ÖØ-öø-ÿ0-9-])(" + esc.join("|") + ")(?![A-Za-zÀ-ÖØ-öø-ÿ0-9-])", "i");
    return GLOSS_RE;
  }

  // Rend cliquable la première apparition de chaque terme du glossaire dans la page.
  function linkGlossary(root) {
    var re = glossRegex();
    if (!re) return;
    var seen = {};
    var skip = "H1,H2,H3,BUTTON,A,SUMMARY,MARK,LABEL,LEGEND,TEXTAREA,INPUT,SVG,DT";
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        for (var p = n.parentNode; p && p !== root; p = p.parentNode) {
          if (skip.indexOf(p.nodeName.toUpperCase()) > -1 || (p.classList && (p.classList.contains("gloss") || p.classList.contains("no-gloss") || p.classList.contains("gloss-pop") || p.classList.contains("pictos") || p.classList.contains("step-counter")))) return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var text = node.nodeValue, m, out = [], last = 0, guard = 0;
      var local = new RegExp(re.source, "gi");
      while ((m = local.exec(text)) && guard++ < 20) {
        var word = m[2], hit = GLOSS_MAP[word.toLowerCase()];
        if (!hit) continue;
        var g = hit.g;
        if (seen[g.terme]) continue;
        // Sigles en majuscules (IPP, AINS…) : seulement la forme exacte, pas « ipp » dans un autre mot.
        if (hit.form === hit.form.toUpperCase() && /[A-Z]/.test(hit.form) && word !== hit.form) continue;
        seen[g.terme] = true;
        var start = m.index + m[1].length;
        out.push(document.createTextNode(text.slice(last, start)));
        out.push(glossButton(word, g));
        last = start + word.length;
      }
      if (!out.length) return;
      out.push(document.createTextNode(text.slice(last)));
      var frag = document.createDocumentFragment();
      out.forEach(function (n) { frag.appendChild(n); });
      node.parentNode.replaceChild(frag, node);
    });
  }

  function glossButton(word, g) {
    var pop = el("span", { class: "gloss-pop", role: "note", hidden: true }, [
      el("strong", null, g.terme + " : "), g.definition, " ",
      el("a", { href: "#/glossaire/" + glossSlug(g.terme) }, "Glossaire")
    ]);
    var btn = el("button", { type: "button", class: "gloss", "aria-expanded": "false", onclick: function (e) {
      e.stopPropagation();
      var open = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".gloss[aria-expanded='true']").forEach(function (b) { b.setAttribute("aria-expanded", "false"); b.nextSibling.hidden = true; });
      if (!open) { btn.setAttribute("aria-expanded", "true"); pop.hidden = false; }
    } }, word);
    var wrap = document.createDocumentFragment();
    wrap.appendChild(btn); wrap.appendChild(pop);
    return wrap;
  }
  document.addEventListener("click", function () {
    document.querySelectorAll(".gloss[aria-expanded='true']").forEach(function (b) { b.setAttribute("aria-expanded", "false"); b.nextSibling.hidden = true; });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.querySelectorAll(".gloss[aria-expanded='true']").forEach(function (b) { b.setAttribute("aria-expanded", "false"); b.nextSibling.hidden = true; b.focus(); });
  });

  /* ---------- Favoris ---------- */

  var FAV_KEY = "guide-integration:favoris:v1";
  function getFavs() { try { var v = JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
  function setFavs(v) { try { localStorage.setItem(FAV_KEY, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function isFav(id) { return getFavs().indexOf(id) !== -1; }

  function favButton(f) {
    var btn = el("button", { type: "button", class: "fav-btn", "aria-pressed": String(isFav(f.id)) });
    function paint() {
      var on = isFav(f.id);
      btn.setAttribute("aria-pressed", String(on));
      btn.setAttribute("aria-label", on ? "Retirer « " + f.titre + " » des favoris" : "Ajouter « " + f.titre + " » aux favoris");
      btn.textContent = "";
      add(btn, [uiIcon("star"), el("span", null, on ? "Dans mes favoris" : "Ajouter aux favoris")]);
    }
    btn.addEventListener("click", function () {
      var v = getFavs(), i = v.indexOf(f.id);
      if (i === -1) v.push(f.id); else v.splice(i, 1);
      setFavs(v); paint();
    });
    paint();
    return btn;
  }

  /* ---------- Conseils du moment ---------- */

  var SAISONS = [
    { mois: [2, 3, 4], nom: "Printemps", texte: "Saison des pollens.", ids: ["allergie-saisonniere", "piqures-insectes", "rhume"] },
    { mois: [5, 6, 7], nom: "Été", texte: "Soleil, insectes et voyages.", ids: ["brulures-peau", "piqures-insectes", "diarrhee"] },
    { mois: [8, 9], nom: "Rentrée", texte: "Retour à l'école et premiers rhumes.", ids: ["poux", "rhume", "mal-de-gorge"] },
    { mois: [10, 11, 0, 1], nom: "Hiver", texte: "Virus de l'hiver.", ids: ["rhume", "toux", "mal-de-gorge", "douleur-fievre", "diarrhee"] }
  ];

  function seasonBlock() {
    var m = new Date().getMonth();
    var s = SAISONS.filter(function (x) { return x.mois.indexOf(m) !== -1; })[0];
    if (!s) return null;
    var fiches = s.ids.map(function (id) { return findById(G.fiches, id); }).filter(Boolean);
    if (!fiches.length) return null;
    return el("section", { class: "season", "aria-labelledby": "h-season" }, [
      el("h2", { id: "h-season" }, ["En ce moment · ", s.nom]),
      el("p", { class: "meta" }, s.texte + " Les demandes les plus fréquentes au comptoir :"),
      el("ul", { class: "chips" }, fiches.map(function (f) {
        return el("li", null, el("a", { href: "#/fiche/" + encodeURIComponent(f.id), class: "chip-link" }, [ficheArt(f.id, 30) || uiIcon(f.icone || "fiches"), el("span", null, f.titre)]));
      }))
    ]);
  }

  function favBlock() {
    var favs = getFavs().map(function (id) { return findById(G.fiches, id); }).filter(Boolean);
    if (!favs.length) return null;
    return el("section", { class: "favs", "aria-labelledby": "h-favs" }, [
      el("h2", { id: "h-favs" }, "Mes fiches favorites"),
      el("ul", { class: "chips" }, favs.map(function (f) {
        return el("li", null, el("a", { href: "#/fiche/" + encodeURIComponent(f.id), class: "chip-link fav" }, [ficheArt(f.id, 30) || uiIcon(f.icone || "fiches"), el("span", null, f.titre)]));
      }))
    ]);
  }

  /* ---------- Recherche ---------- */

  function norm(t) {
    return String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe");
  }

  function flat(x) {
    if (x == null) return [];
    if (typeof x === "string") return [x];
    if (Array.isArray(x)) return x.reduce(function (a, v) { return a.concat(flat(v)); }, []);
    if (typeof x === "object") return Object.keys(x).reduce(function (a, k) { return k === "id" || k === "forme" || k === "cle" ? a : a.concat(flat(x[k])); }, []);
    return [];
  }

  var SEARCH_INDEX = null;
  function searchIndex() {
    if (SEARCH_INDEX) return SEARCH_INDEX;
    var idx = [];
    (G.fiches || []).forEach(function (f) {
      idx.push({ kind: "Fiche", title: f.titre, href: "#/fiche/" + encodeURIComponent(f.id),
        parts: [f.titre].concat(flat(f.resume), [f.motif], flat(f.questions), flat(f.orientations), flat(f.produits), flat(f.vigilance), flat(f.passerLaMain)) });
    });
    var m = G.medicaments || {};
    (m.lignes || []).forEach(function (r) {
      idx.push({ kind: "Médicaments", title: r.classe, href: "#/medicaments", parts: [r.classe, r.role].concat(flat(r.exemples), flat(r.vigilance)) });
    });
    (m.comparaisons || []).forEach(function (c) {
      idx.push({ kind: "Médicaments", title: c.titre, href: "#/medicaments/" + encodeURIComponent(c.id), parts: [c.titre, c.introduction].concat(flat(c.lignes), [c.note]) });
    });
    (G.animations || []).forEach(function (a) {
      idx.push({ kind: "Animation", title: a.titre, href: "#/animation/" + encodeURIComponent(a.id), parts: [a.titre, a.classe, a.introduction].concat(flat(a.etapes)) });
    });
    (G.glossaire || []).forEach(function (g) {
      idx.push({ kind: "Glossaire", title: g.terme, href: "#/glossaire/" + glossSlug(g.terme), parts: [g.terme, g.definition].concat(g.variantes || []) });
    });
    (G.pages || []).forEach(function (p) {
      idx.push({ kind: "Page", title: p.titre, href: "#/page/" + encodeURIComponent(p.id), parts: [p.titre, p.introduction].concat(flat(p.sections)) });
    });
    idx.forEach(function (e) {
      e.parts = e.parts.filter(function (t) { return t && String(t).indexOf(TODO) === -1; });
      e.normParts = e.parts.map(norm);
      e.normTitle = norm(e.title);
    });
    return (SEARCH_INDEX = idx);
  }

  function runSearch(q) {
    var terms = norm(q).split(/[^a-z0-9]+/).filter(function (t) { return t.length > 1; });
    if (!terms.length) return [];
    return searchIndex().map(function (e) {
      var all = e.normParts.join(" ");
      if (!terms.every(function (t) { return all.indexOf(t) !== -1; })) return null;
      var score = terms.reduce(function (s, t) { return s + (e.normTitle.indexOf(t) !== -1 ? 10 : 0); }, 0);
      var hit = -1;
      for (var i = 0; i < e.normParts.length && hit < 0; i++) if (e.normParts[i].indexOf(terms[0]) !== -1) hit = i;
      return { e: e, score: score, snippet: hit >= 0 ? snippet(e.parts[hit], e.normParts[hit], terms) : "" };
    }).filter(Boolean).sort(function (a, b) { return b.score - a.score; });
  }

  // Extrait de texte autour du premier mot trouvé, avec les mots surlignés.
  function snippet(text, nText, terms) {
    var pos = nText.indexOf(terms[0]);
    var start = Math.max(0, pos - 50), end = Math.min(text.length, pos + 110);
    var part = (start > 0 ? "… " : "") + text.slice(start, end) + (end < text.length ? " …" : "");
    var nPart = norm(part);
    var marks = [];
    terms.forEach(function (t) {
      var i = 0;
      while ((i = nPart.indexOf(t, i)) !== -1) { marks.push([i, i + t.length]); i += t.length; }
    });
    marks.sort(function (a, b) { return a[0] - b[0]; });
    var out = [], last = 0;
    marks.forEach(function (mk) {
      if (mk[0] < last) return;
      out.push(part.slice(last, mk[0])); out.push(el("mark", { class: "hit" }, part.slice(mk[0], mk[1]))); last = mk[1];
    });
    out.push(part.slice(last));
    return out;
  }

  function searchForm(initial, live) {
    var input = el("input", { type: "search", id: "q", name: "q", value: initial || "", placeholder: "Ex : toux, Strepsils, fièvre, ordonnance…", autocomplete: "off", "aria-label": "Rechercher dans le guide" });
    var form = el("form", { class: "search-form", role: "search" }, [
      el("span", { class: "search-icon", "aria-hidden": "true" }, uiIcon("search")), input,
      el("button", { type: "submit", class: "btn btn-primary" }, "Chercher")
    ]);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (live) live(input.value, true); else location.hash = "#/recherche/" + encodeURIComponent(input.value.trim());
    });
    if (live) input.addEventListener("input", function () { live(input.value, false); });
    return { form: form, input: input };
  }

  function viewSearch(q) {
    var results = el("div", { class: "search-results", "aria-live": "polite" });
    function render(value, commit) {
      results.textContent = "";
      var v = (value || "").trim();
      try { history.replaceState(null, "", "#/recherche/" + encodeURIComponent(v)); } catch (e) { /* file:// */ }
      if (v.length < 2) {
        add(results, el("p", { class: "meta" }, "Tapez au moins deux lettres : un symptôme, un nom de médicament, une procédure…"));
        return;
      }
      var res = runSearch(v);
      add(results, el("p", { class: "meta" }, res.length ? res.length + " résultat" + (res.length > 1 ? "s" : "") : "Aucun résultat. Essayez un autre mot, ou demandez au pharmacien."));
      add(results, el("ul", { class: "result-list" }, res.slice(0, 30).map(function (r) {
        return el("li", null, el("a", { href: r.e.href, class: "result" }, [
          el("span", { class: "result-kind" }, r.e.kind),
          el("span", { class: "result-title" }, r.e.title),
          r.snippet ? el("span", { class: "result-snippet" }, r.snippet) : null
        ]));
      })));
      if (commit && res.length === 1) location.hash = res[0].e.href;
    }
    var f = searchForm(q, render);
    render(q, false);
    setTimeout(function () { f.input.focus(); var n = f.input.value.length; try { f.input.setSelectionRange(n, n); } catch (e) {} }, 0);
    return { title: "Recherche", section: "recherche", node: el("div", null, [el("h1", null, "Rechercher"), f.form, results]) };
  }

  // Regroupe le titre et l'introduction des pages en un bandeau d'en-tête.
  var PAGE_ICONS = { fiches: "fiches", medicaments: "pill", animations: "play", quiz: "quiz", sources: "book", glossaire: "book2", recherche: "search", "page/urgences": "phone", "page/reception-commandes": "box", "page/installer": "home" };
  function pageHead(root, key) {
    var first = root.firstElementChild;
    if (!first) return;
    var h1 = first.querySelector(":scope > h1");
    if (!h1 || first.querySelector(":scope > .hero, :scope > .fiche-header") || first.classList.contains("fiche")) return;
    if (h1.closest(".fiche-head")) return;
    var head = el("header", { class: "page-head" });
    var icon = PAGE_ICONS[key];
    var textBox = el("div", { class: "ph-text" });
    if (icon) head.appendChild(el("span", { class: "ph-icon" }, uiIcon(icon)));
    head.appendChild(textBox);
    h1.parentNode.insertBefore(head, h1);
    textBox.appendChild(h1);
    var n = head.nextElementSibling;
    while (n && (n.matches("p.status") || (n.tagName === "P" && !n.querySelector("a.btn") && n.textContent.length > 30 && !textBox.querySelector("p:not(.status)")))) {
      var nx = n.nextElementSibling; textBox.appendChild(n); n = nx;
    }
  }

  function viewNotFound() {
    return {
      title: "Page introuvable",
      node: el("div", null, [el("h1", null, "Page introuvable"), el("p", null, el("a", { href: "#/" }, "Retour à l'accueil"))])
    };
  }

  /* ---------- Routeur (adresse après le #) ---------- */

  var firstRender = true;

  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/").map(function (p) {
      try { return decodeURIComponent(p); } catch (e) { return p; }
    });
    var section = parts[0] || "", id = parts[1];

    // Ancre classique (ex. #main) : si l'élément existe on y va, sinon on affiche l'accueil.
    if (location.hash && location.hash.indexOf("#/") !== 0) {
      var target = document.getElementById(location.hash.slice(1));
      if (target && app.firstChild && !firstRender) { target.focus(); return; }
      section = "";
    }

    var v;
    switch (section) {
      case "": v = viewHome(); break;
      case "fiches": v = viewFiches(); break;
      case "fiche": v = viewFiche(id); break;
      case "medicaments": v = viewMedicaments(); if (id) v.focusId = "comparaison-" + id; break;
      case "animations": v = viewAnimations(); break;
      case "animation": v = viewAnimation(id); break;
      case "quiz": v = id ? viewQuiz(id) : viewQuizList(); break;
      case "sources": v = viewSources(id); break;
      case "page": v = viewPage(id); break;
      case "recherche": v = viewSearch(id || ""); break;
      case "arbre": v = viewArbre(id); break;
      case "glossaire": v = viewGlossaire(id && id.indexOf("lettre-") === 0 ? null : id); if (id && id.indexOf("lettre-") === 0) v.focusId = id; break;
      default: v = viewNotFound();
    }

    app.textContent = "";
    app.appendChild(v.node);
    if (section !== "glossaire" && section !== "recherche" && section !== "quiz") { try { linkGlossary(app); } catch (e) { /* sans glossaire */ } }
    tidyDrafts(app);
    pageHead(app, v.section || SECTION_OF[section] || section);
    app.classList.remove("page-enter"); void app.offsetWidth; app.classList.add("page-enter");
    document.title = v.title + " – " + SITE_TITLE;
    setCurrentNav(v.section || SECTION_OF[section] || section);

    var focusTarget = (v.focusId && document.getElementById(v.focusId)) || null;
    if (focusTarget) {
      focusTarget.focus();
      focusTarget.scrollIntoView();
    } else if (!firstRender) {
      var h1 = app.querySelector("h1");
      if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus(); }
      window.scrollTo(0, 0);
    }
    firstRender = false;
  }

  // Installation comme application + hors connexion (uniquement en ligne, pas en double-clic).
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }

  var REVIEW_KEY = "guide-integration:relecture";
  function reviewOn() { try { return localStorage.getItem(REVIEW_KEY) === "1"; } catch (e) { return false; } }
  function applyReview() { document.body.classList.toggle("review", reviewOn()); }

  // En temps normal, on masque les lignes qui ne contiennent qu'une information à venir.
  function tidyDrafts(root) {
    if (reviewOn()) return;
    root.querySelectorAll("li, p").forEach(function (n) {
      var kids = Array.prototype.filter.call(n.childNodes, function (c) { return c.nodeType === 1 || c.textContent.trim(); });
      if (kids.length === 1 && kids[0].classList && kids[0].classList.contains("todo-whole")) n.classList.add("draft-hidden");
    });
    root.querySelectorAll("ul, ol").forEach(function (l) {
      if (l.children.length && Array.prototype.every.call(l.children, function (li) { return li.classList.contains("draft-hidden"); })) l.classList.add("draft-hidden");
    });
    root.querySelectorAll(".callout").forEach(function (c) {
      var visible = c.querySelectorAll("li:not(.draft-hidden), p:not(.draft-hidden)");
      var onlyLabel = Array.prototype.every.call(visible, function (n) { return n.textContent.trim() === "Attention"; });
      if (!visible.length || onlyLabel) c.classList.add("draft-hidden");
    });
  }

  function reviewToggle() {
    var btn = el("button", { type: "button", class: "review-btn" });
    function paint() { btn.textContent = reviewOn() ? "Quitter le mode relecture" : "Mode relecture (pharmacienne)"; btn.setAttribute("aria-pressed", String(reviewOn())); }
    btn.addEventListener("click", function () {
      try { localStorage.setItem(REVIEW_KEY, reviewOn() ? "0" : "1"); } catch (e) {}
      applyReview(); paint(); route();
    });
    paint();
    return btn;
  }

  function buildFooter() {
    var f = document.querySelector(".site-footer");
    var keep = Array.prototype.slice.call(f.children);
    f.textContent = "";
    f.appendChild(el("div", { class: "foot-inner" }, [
      el("div", { class: "foot-brand" }, [el("span", { class: "brand-logo" }, uiIcon("cross")), el("div", null, [
        el("strong", null, site.nomOfficine || ""),
        el("p", null, site.adresse || ""),
        el("p", null, "Guide d'intégration des apprentis · usage interne")
      ])]),
      el("nav", { class: "foot-links", "aria-label": "Liens du pied de page" }, [
        el("a", { href: "#/fiches" }, "Fiches"), el("a", { href: "#/glossaire" }, "Glossaire"), el("a", { href: "#/page/urgences" }, "Urgences"),
        el("a", { href: "#/sources" }, "Sources"), el("a", { href: "#/page/installer" }, "Installer le guide")
      ]),
      el("div", { class: "foot-legal" }, keep.filter(function (n) { return !n.querySelector('a[href="#/page/installer"]'); }))
    ]));
  }

  buildNav();
  buildBottomNav();
  buildFooter();
  applyReview();
  document.querySelector(".foot-legal").appendChild(el("p", null, reviewToggle()));
  // Impression : tout déplier pour que la fiche papier soit complète.
  window.addEventListener("beforeprint", function () { document.querySelectorAll("details").forEach(function (d) { d.open = true; }); });
  document.querySelector(".skip-link").addEventListener("click", jumpTo("main"));
  window.addEventListener("hashchange", route);
  route();
})();
