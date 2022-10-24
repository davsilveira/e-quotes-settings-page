import './Attachment.scss';

const { __ } = wp.i18n;
const {
	useState,
	useEffect,
} = wp.element;

const {
	Placeholder,
	Spinner,
} = wp.components;

const AttachmentBox = ( { size, children } ) => {
	size = ! size ? 'thumbnail' : size;
	const attachmentBoxClasses = `attachment-box attachment-box--size-${size}`;

	return (
		<div className={attachmentBoxClasses}>
			<div className="attachment-box__item">{ children }</div>
		</div>
	);
}

const Attachment = ( { id, imageSize = null, onClick = null } ) => {

	const [attachment, setAttachment] = useState( null );
	const [isAPILoaded, setIsAPILoaded] = useState( false );

	imageSize = ! imageSize ? 'thumbnail' : imageSize;
	onClick = ! onClick ? () => {} : onClick;

	useEffect(() => {
		const media = new wp.api.models.Media( { id: id } );

		setAttachment( null );

		if( parseInt( id ) > 0 ) {
			media.fetch().then((response) => {
				setAttachment(response.media_details.sizes[imageSize]);
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
			<Placeholder onClick={ onClick }>{ __( 'No image selected. Click to add.', 'e-quotes' ) }</Placeholder>
		);
	}

	return (
		<img
			src={ attachment.source_url }
			width={ attachment.width }
			height={ attachment.height }
			alt="attachment"
			className="attachment"
			onClick={onClick}
			/>
	)
}

export { Attachment, AttachmentBox };
