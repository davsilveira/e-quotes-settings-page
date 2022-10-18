import GeneralSettings from './General';
const {
	Panel,
	PanelBody,
} = wp.components;
const { __ } = wp.i18n;

const onSelect = ( tabName ) => {
	console.log( 'Selecting tab', tabName );
};

const SettingsPanel = () => (
	<Panel>
		<PanelBody
			title={ __( 'General', 'e-quotes' ) }
			icon="admin-tools"
		>
			<GeneralSettings></GeneralSettings>
		</PanelBody>
	</Panel>
);

export default SettingsPanel;
