import React from 'react';
import Button from './Button';

const Page = (): JSX.Element => {
	return (
		<div>
			<Button
				content='Hello'
				href='nope'
				type='none'
				bgColor='teal'
				fColor='white'></Button>
		</div>
	);
};

export default Page;
