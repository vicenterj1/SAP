/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"vicenteaprovacaosolicitacao/aprovacaosolicitacao/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
