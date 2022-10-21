import './App.scss';
import SettingsPanel from './SettingsPanel';
const { __ } = wp.i18n;
const { store } = wp.notices;
const {	Icon } = wp.components;
const { Fragment } = wp.element;
const { SnackbarList } = wp.components;
const {
	useDispatch,
	useSelect,
} = wp.data;

const Notices = () => {
	const notices = useSelect(
		( select ) =>
			select( store )
				.getNotices()
				.filter( ( notice ) => notice.type === 'snackbar' ),
		[]
	);
	const { removeNotice } = useDispatch( store );
	return (
		<SnackbarList
			className="edit-site-notices"
			notices={ notices }
			onRemove={ removeNotice }
		/>
	);
};

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
			<div className="e-quotes__notices">
				<Notices/>
			</div>
		</Fragment>
	);
};
export default App;
