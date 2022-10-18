const {
	useState,
	useEffect,
} = wp.element;

const {
	Button,
	TextControl,
	Placeholder,
	Spinner,
	SnackbarList,
} = wp.components;

const { __ } = wp.i18n;

const GeneralSettings = () => {

	const [ fantasyName, setFantasyName ] = useState( '' );
	const [ corporateName, setCorporateName ] = useState( '' );
	const [ isAPILoaded, setIsAPILoaded ] = useState( false );

	useEffect( () => {
		wp.api.loadPromise.then( () => {
			const settings = new wp.api.models.Settings();

			if ( isAPILoaded === false ) {
				settings.fetch().then( ( response ) => {
					setFantasyName( response[ 'e-quotes-fantasy-name' ] );
					setCorporateName( response[ 'e-quotes-corporate-name' ] );
					setIsAPILoaded( true );
				});
			}
		});
	}, []);

	const saveSettings = () => {
		const settings = new wp.api.models.Settings( {
			[ 'e-quotes-corporate-name' ]: corporateName,
			[ 'e-quotes-fantasy-name' ]: fantasyName,
		} );
		settings.save();
	};

	if ( ! isAPILoaded ) {
		return (
			<Placeholder>
				<Spinner />
			</Placeholder>
		);
	}

	return (
		<>
			<TextControl
				label={__('Corporate name', 'e-quotes')}
				onChange={(corporateName) => setCorporateName(corporateName)}
				value={corporateName}
			/>
			<TextControl
				label={__('Fantasy name', 'e-quotes')}
				onChange={(fantasyName) => setFantasyName(fantasyName)}
				value={fantasyName}
			/>
			<Button
				isPrimary
				isLarge
				onClick={ saveSettings }
			>
				{ __( 'Save settings', 'e-quotes' ) }
			</Button>
		</>
	)
}

export default GeneralSettings;
