sap.ui.define([
		"vpm/setup/mara/fields/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("vpm.setup.mara.fields.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);