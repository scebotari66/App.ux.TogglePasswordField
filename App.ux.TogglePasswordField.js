/**
 * @class App.ux.TogglePasswordField
 */
Ext.define('App.ux.TogglePasswordField', {
	extend: 'Ext.form.field.Text',
	xtype: 'ux-togglepasswordfield',

	config: {
		/**
		 * @cfg {Boolean} [charsVisibility=true]
		 * Whether or not to display the password
		 */
		charsVisibility: false,
		/**
		 * @cfg {String} [showPassHint='Show password']
		 * The text used for the trigger's tooltip to show the password
		 */
		showPassHint: 'Show password',
		/**
		 * @cfg {String} [hidePassHint='Hide password']
		 * The text used for the trigger's tooltip to hide the password
		 */
		hidePassHint: 'Hide password'
	},

	triggers: {
		toggle: {
			cls: 'x-fa',
			handler: function (field) {
				field.setCharsVisibility(!field.getCharsVisibility());
			}
		}
	},

	applyCharsVisibility: function (value) {
		var trigger = this.getTrigger('toggle'),
			triggerEl = trigger.getEl();

		if (this.rendered) {
			this.inputEl.dom.type = value ? 'text' : 'password';
			triggerEl.toggleCls('fa-eye', !value);
			triggerEl.toggleCls('fa-eye-slash', value);
			trigger.setTooltip(value ? this.hidePassHint : this.showPassHint);
		}

		return value;
	},
	/**
	 * Reapply the "charsVisibility" config value because it needs the component to be rendered in
	 * order change the input's type
	 */
	afterRender: function () {
		this.setCharsVisibility(this.getCharsVisibility());
		this.callParent(arguments);
	}
});