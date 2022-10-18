import './App.scss';
import SettingsPanel from './SettingsPanel';
const {	Icon } = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

const App = () => {
	return (
		<Fragment>
			<div className="e-quotes__header">
				<div className="e-quotes__container">
					<div className="e-quotes__title">
						<h1>{ __( 'E-Quotes Settings', 'e-quotes' ) } <Icon icon="admin-plugins" /></h1>
					</div>
				</div>
			</div>
			<div className="e-quotes__main">
				<SettingsPanel></SettingsPanel>
			</div>
		</Fragment>
	);
};
export default App;
