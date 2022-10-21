import Attachment from '../Components/Attachment';

const { __ } = wp.i18n;
const { dispatch } = wp.data;
const {
	useState,
	useEffect,
} = wp.element;
const {
	Icon,
	Button,
	TextControl,
	Placeholder,
	Spinner,
} = wp.components;

const { MediaUpload } = wp.mediaUtils;

const GeneralSettings = () => {

	const [ fantasyName, setFantasyName ] = useState( '' );
	const [ corporateName, setCorporateName ] = useState( '' );
	const [ mainLogo, setMainLogo ] = useState( 0 );
	const [ isAPILoaded, setIsAPILoaded ] = useState( false );

	useEffect( () => {
		wp.api.loadPromise.then( () => {
			const settings = new wp.api.models.Settings();

			if ( isAPILoaded === false ) {
				settings.fetch().then( ( response ) => {
					setFantasyName( response[ 'e_quotes_fantasy_name' ] );
					setCorporateName( response[ 'e_quotes_corporate_name' ] );
					setMainLogo( response[ 'e_quotes_main_logo' ] );
					setIsAPILoaded( true );
				});
			}
		});
	}, []);

	const saveSettings = () => {
		const settings = new wp.api.models.Settings( {
			[ 'e_quotes_corporate_name' ]: corporateName,
			[ 'e_quotes_fantasy_name' ]: fantasyName,
			[ 'e_quotes_main_logo' ]: mainLogo,
		} );
		settings.save();
		dispatch('core/notices').createNotice(
			'success',
			__( 'Settings Saved', 'e-quotes' ),
			{
				type: 'snackbar',
				isDismissible: true,
			}
		);
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

			<MediaUpload
				onSelect={ ( media ) =>
					setMainLogo( media.id )
				}
				allowedTypes={ [ 'image' ] }
				value={ "media" }
				render={ ( { open } ) => {
					return (
						<>
							<div>
								<Attachment id={ mainLogo } />
								<Icon icon="remove" />
							</div>
							<Button
								isSecondary
								onClick={ open }> { __( 'Choose file', 'e-quotes' ) }
							</Button>
						</>
					)
				} }
			/>
			<hr className="e-quotes__divider" />
			<Button
				isPrimary
				onClick={ saveSettings }
			>
				{ __( 'Save settings', 'e-quotes' ) }
			</Button>
		</>
	)
}

export default GeneralSettings;
