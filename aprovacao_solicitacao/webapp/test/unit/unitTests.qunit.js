/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"vicentedesafio5p/aprovacao_solicitacao/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
