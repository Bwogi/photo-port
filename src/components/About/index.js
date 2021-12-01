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
			<section>
				<table>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Age</th>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Age</th>
						</tr>
					</tfoot>
					<tbody>
						{theTeam.map((team) => (
							<tr>
								<td>{team.first_name}</td>
								<td>{team.last_name}</td>
								<td>{team.age}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</section>
	);
}
export default About;
