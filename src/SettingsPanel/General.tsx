import {
	Attachment,
	AttachmentBox,
} from '../Components/Attachment';

const { __ } = wp.i18n;
const { dispatch } = wp.data;
const {
	useState,
	useEffect,
} = wp.element;
const {
	Flex,
	FlexBlock,
	FlexItem,
	Icon,
	Button,
	BaseControl,
	TextControl,
	SelectControl,
	ColorPicker,
	Placeholder,
	Spinner,
} = wp.components;

const { MediaUpload } = wp.mediaUtils;

const IMAGE_SIZE = 'thumbnail';
const PRIMARY_COLOR = "#ff3366";
const SECONDARY_COLOR = "#333333";

const GeneralSettings = () => {

	const [ fantasyName, setFantasyName ] = useState( '' );
	const [ corporateName, setCorporateName ] = useState( '' );
	const [ mainLogo, setMainLogo ] = useState( 0 );
	const [ primaryColor, setPrimaryColor ] = useState();
	const [ secondaryColor, setSecondaryColor ] = useState();
	const [ currency, setCurrency ] = useState( '' );
	const [ isAPILoaded, setIsAPILoaded ] = useState( false );

	useEffect( () => {
		wp.api.loadPromise.then( () => {
			const settings = new wp.api.models.Settings();

			if ( isAPILoaded === false ) {
				settings.fetch().then( ( response ) => {
					setFantasyName( response[ 'e_quotes_fantasy_name' ] );
					setCorporateName( response[ 'e_quotes_corporate_name' ] );
					setMainLogo( response[ 'e_quotes_main_logo' ] );
					setPrimaryColor( response['e_quotes_primary_color'] );
					setSecondaryColor( response['e_quotes_secondary_color'] );
					setCurrency( response[ 'e_quotes_currency' ] );
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
			[ 'e_quotes_primary_color' ]: primaryColor,
			[ 'e_quotes_secondary_color' ]: secondaryColor,
			[ 'e_quotes_currency' ]: currency,
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
			<Flex>
				<FlexBlock>
					<TextControl
						label={__('Corporate name', 'e-quotes')}
						onChange={(corporateName) => setCorporateName(corporateName)}
						value={corporateName}
					/>
				</FlexBlock>
				<FlexBlock>
					<TextControl
						label={__('Fantasy name', 'e-quotes')}
						onChange={(fantasyName) => setFantasyName(fantasyName)}
						value={fantasyName}
					/>
				</FlexBlock>
			</Flex>
			<Flex>
				<FlexBlock>
					<BaseControl
						help={ __( 'This image will be used on several different templates', 'e-quotes') }
						label={ __( 'Company logo', 'e-quotes' ) }>
						<MediaUpload
							onSelect={ ( media ) =>
								setMainLogo( media.id )
							}
							allowedTypes={ [ 'image' ] }
							value={ "media" }
							render={ ( { open } ) => {
								return (
									<>
										<AttachmentBox size={ IMAGE_SIZE }>
											<Attachment id={ mainLogo } onClick={ open }  />
											<Icon icon="remove" onClick={ () => { setMainLogo( 0 ); } } />
										</AttachmentBox>
										<Button
											isSecondary
											onClick={ open }> { __( 'Choose file', 'e-quotes' ) }
										</Button>
									</>
								)
							} }
						/>
					</BaseControl>
				</FlexBlock>
			</Flex>
			<Flex>
				<FlexBlock>
					<BaseControl
						label={ __( 'Primary color', 'e-quotes' ) }
						help={ __( 'Used on main controls.', 'e-quotes') }>
						<ColorPicker
							color={primaryColor}
							onChange={setPrimaryColor}
							defaultValue={PRIMARY_COLOR}
						/>
					</BaseControl>
				</FlexBlock>
				<FlexBlock>
					<BaseControl
						label={ __( 'Secondary color', 'e-quotes' ) }
						help={ __( 'Used on texts and secondary buttons.', 'e-quotes') }>
						<ColorPicker
							color={secondaryColor}
							onChange={setSecondaryColor}
							defaultValue={SECONDARY_COLOR}
						/>
					</BaseControl>
				</FlexBlock>
			</Flex>
			<FlexBlock>
				<SelectControl
					onChange={(currency) => setCurrency(currency)}
					value={currency}
					options={[
						{
							label: __( 'Dollar (USA)', 'equotes' ),
							value: 'USD'
						},
						{
							label: __( 'Brazilian Real', 'equotes' ),
							value: 'BRL'
						}
					]}
				/>
			</FlexBlock>
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
