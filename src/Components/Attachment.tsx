const {
	useState,
	useEffect,
} = wp.element;

const {
	Placeholder,
	Spinner,
} = wp.components;

const Attachment = ( props ) => {

	const [attachment, setAttachment] = useState({});
	const [isAPILoaded, setIsAPILoaded] = useState(false);

	useEffect(() => {
		if( ! props.id ) {
			return;
		}
		const media = new wp.api.models.Media( { id: props.id } );
		// TODO Use backbone to fetch: https://developer.wordpress.org/rest-api/using-the-rest-api/backbone-javascript-client/
	}, []);

	if ( ! isAPILoaded ) {
		return (
			<Placeholder>
				<Spinner />
			</Placeholder>
		);
	}

	return (
		<img
			src={ attachment.src }
			width={ attachment.width }
			height={ attachment.height }
			alt="attachment"
			className="attachment"
			/>
	)
}

export default Attachment;
