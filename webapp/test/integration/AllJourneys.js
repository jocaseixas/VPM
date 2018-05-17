jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"vpm/setup/mara/fields/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"vpm/setup/mara/fields/test/integration/pages/Worklist",
		"vpm/setup/mara/fields/test/integration/pages/Object",
		"vpm/setup/mara/fields/test/integration/pages/NotFound",
		"vpm/setup/mara/fields/test/integration/pages/Browser",
		"vpm/setup/mara/fields/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "vpm.setup.mara.fields.view."
	});

	sap.ui.require([
		"vpm/setup/mara/fields/test/integration/WorklistJourney",
		"vpm/setup/mara/fields/test/integration/ObjectJourney",
		"vpm/setup/mara/fields/test/integration/NavigationJourney",
		"vpm/setup/mara/fields/test/integration/NotFoundJourney",
		"vpm/setup/mara/fields/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});