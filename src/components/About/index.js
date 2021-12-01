import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
	// objects in an array
	const theTeam = [
		{ first_name: 'Phillip', last_name: 'Mugabi', age: 25 },
		{ first_name: 'Joshua', last_name: 'Kisakye', age: 24 },
		{ first_name: 'Linda', last_name: 'Parvaz', age: 41 },
	];
	return (
		<section>
			<h1 id='about'>Who am I</h1>
			<img src={coverImage} alt='cover image' />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eveniet
				unde velit, ullam tempore nobis esse cumque laborum, saepe, aliquid cum
				odio quibusdam? Odit eaque soluta error ipsa maxime natus.
			</p>
		</section>
	);
}
export default About;
