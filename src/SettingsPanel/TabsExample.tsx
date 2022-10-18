const {
	Panel,
	PanelBody,
	TabPanel,
} = wp.components;
const { __ } = wp.i18n;

const onSelect = ( tabName ) => {
	console.log( 'Selecting tab', tabName );
};

const SettingsPanel = () => (
	<Panel>
		<PanelBody
			title={ __( 'Main settings', 'e-quotes' ) }
			icon="admin-plugins"
		>
			<TabPanel
				className="e-quotes-settings-panel"
				activeClass="active-tab"
				onSelect={ onSelect }
				tabs={ [
					{
						name: 'general',
						title: __( 'General', 'e-quotes' ),
						className: 'tab-general',
					},
					{
						name: 'proposals',
						title: __( 'Proposals', 'e-quotes' ),
						className: 'tab-proposals',
					},
					{
						name: 'orders',
						title: __( 'Orders', 'e-quotes' ),
						className: 'tab-orders',
					},
					{
						name: 'notifications',
						title: __( 'Notifications', 'e-quotes' ),
						className: 'tab-notifications',
					},
					{
						name: 'sharing',
						title: __( 'Sharing', 'e-quotes' ),
						className: 'tab-sharing',
					},
				] }
			>
				{ ( tab ) => <p>{ tab.title }</p> }
			</TabPanel>
		</PanelBody>
	</Panel>
);

export { SettingsPanel };
