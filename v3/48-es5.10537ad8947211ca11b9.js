function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{mTnQ:function(e,t,o){"use strict";o.r(t);var n,r,i,a=o("ofXK"),c=o("lDlI"),d=o("tyNb"),l=o("fXoL"),s=o("MJ5V"),u=o("W3pz"),m=o("mrSG"),f=o("uBmD"),p=o("3Pt+"),b=o("kmnG"),h=o("d3UM"),g=o("FKr1"),v=function(){return{autoIndent:!0,cursorBlinking:"phase"}},w=((n=function(){function e(){_classCallCheck(this,e),this.editorTheme="vs",this.editorVal='var rows = prompt("How many rows for your multiplication table?");\nvar cols = prompt("How many columns for your multiplication table?");\nif(rows == "" || rows == null)\n  rows = 10;\nif(cols== "" || cols== null)\n  cols = 10;\ncreateTable(rows, cols);\nfunction createTable(rows, cols) {\n  var j=1;\n  var output = "<table border=\'1\' width=\'500\' cellspacing=\'0\'cellpadding=\'5\'>";\n  for(i=1;i<=rows;i++) {\n    output = output + "<tr>";\n    while(j<=cols) {\n      output = output + "<td>" + i*j + "</td>";\n      j = j+1;\n    }\n    output = output + "</tr>";\n    j = 1;\n  }\n  output = output + "</table>";\n  document.write(output);\n}\n'}return _createClass(e,[{key:"configChanged",value:function(e){monaco.editor.setTheme(e),this.getModel()}},{key:"editorInitialized",value:function(e){this._editor=e}},{key:"getModel",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._editor.getModel();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=l.Nb({type:n,selectors:[["code-editor-demo-monaco"]],decls:13,vars:5,consts:[["data-cy","td-code-editor","flex","","language","javascript",3,"editorOptions","ngModel","theme","ngModelChange","editorInitialized","editorConfigurationChanged"],["editor",""],["layout","row","layout-align","start center",1,"pad-sm"],["flex","none","hide-xs","",1,"push-right","mat-body-1"],["floatLabel","never"],["placeholder","Editor Theme",3,"ngModel","ngModelChange"],["value","vs-dark"],["value","hc-black"],["value","vs"]],template:function(e,t){if(1&e){var o=l.Zb();l.Yb(0,"td-code-editor",0,1),l.gc("ngModelChange",(function(e){return t.editorVal=e}))("editorInitialized",(function(e){return t.editorInitialized(e)}))("editorConfigurationChanged",(function(e){l.Hc(o);var n=l.Ec(1);return t.configChanged(n.theme)})),l.Xb(),l.Yb(2,"div",2),l.Yb(3,"span",3),l.Qc(4,"Editor Theme"),l.Xb(),l.Yb(5,"mat-form-field",4),l.Yb(6,"mat-select",5),l.gc("ngModelChange",(function(e){return t.editorTheme=e})),l.Yb(7,"mat-option",6),l.Qc(8,"Dark"),l.Xb(),l.Yb(9,"mat-option",7),l.Qc(10,"High Contrast"),l.Xb(),l.Yb(11,"mat-option",8),l.Qc(12,"Light"),l.Xb(),l.Xb(),l.Xb(),l.Xb()}2&e&&(l.qc("editorOptions",l.tc(4,v))("ngModel",t.editorVal)("theme",t.editorTheme),l.Fb(6),l.qc("ngModel",t.editorTheme))},directives:[f.a,p.l,p.o,b.b,h.a,g.l],styles:["td-code-editor{height:400px}"]}),n),C=[{path:"",component:(r=function e(){_classCallCheck(this,e)},r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=l.Nb({type:r,selectors:[["code-editor-demo"]],decls:4,vars:4,consts:[[3,"demoId","demoTitle"]],template:function(e,t){1&e&&(l.Yb(0,"demo-component",0),l.Ub(1,"code-editor-demo-basic"),l.Xb(),l.Yb(2,"demo-component",0),l.Ub(3,"code-editor-demo-monaco"),l.Xb()),2&e&&(l.qc("demoId","code-editor-demo-basic")("demoTitle","Basic"),l.Fb(2),l.qc("demoId","code-editor-demo-monaco")("demoTitle","Code Editor with Monaco"))},directives:[s.a,u.a,w],styles:[""]}),r)}],y=((i=function e(){_classCallCheck(this,e)}).\u0275mod=l.Rb({type:i}),i.\u0275inj=l.Qb({factory:function(e){return new(e||i)},imports:[[d.f.forChild(C)],d.f]}),i),k=o("Krbs"),M=o("rb+I");o.d(t,"CodeEditorDemoModule",(function(){return X}));var T,X=((T=function e(){_classCallCheck(this,e)}).\u0275mod=l.Rb({type:T}),T.\u0275inj=l.Qb({factory:function(e){return new(e||T)},imports:[[M.a,k.a,y,c.a,a.c,p.h,b.d,h.b]]}),T)}}]);