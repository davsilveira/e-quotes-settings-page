const { __ } = wp.i18n;
const {
	useState,
	useEffect,
} = wp.element;

const {
	Placeholder,
	Spinner,
} = wp.components;

const Attachment = ( {id} ) => {

	const [attachment, setAttachment] = useState( null );
	const [isAPILoaded, setIsAPILoaded] = useState( false );

	useEffect(() => {
		const media = new wp.api.models.Media( { id: id } );
		console.log(id);
		setIsAPILoaded( true );
		setAttachment( null );

		if( parseInt( id ) > 0 ) {
			media.fetch().then((response) => {
				setAttachment(response.media_details.sizes.thumbnail);
				setIsAPILoaded(true);
			});
		}
	}, [id] );

	if ( ! isAPILoaded ) {
		return (
			<Placeholder>
				<Spinner />
			</Placeholder>
		);
	}

	if ( isAPILoaded && attachment === null ) {
		return (
			<Placeholder>{ __( 'No image', 'e-quotes' ) }</Placeholder>
		);
	}

	return (
		<img
			src={ attachment.source_url }
			width={ attachment.width }
			height={ attachment.height }
			alt="attachment"
			className="attachment"
			/>
	)
}

export default Attachment;
