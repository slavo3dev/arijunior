import { useState, useEffect } from "react";
import { Pet } from "@/components";

interface PetProps {
	id: string | number;
	animal: string;
	name: string;
	breed: string;
}
export const SearchParams = () => {
	const [location, updateLocation] = useState("");
	const [animal, updateAnimal] = useState("");
	const [breed, updateBreed] = useState("");
	const [pets, setPets] = useState([]);
	const breeds: [] = [];
	const ANIMALS: [string, string, string, string, string] = [
		"bird",
		"cat",
		"dog",
		"rabbit",
		"reptile"
	];

	async function requestPets() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
		);
		const json = await res.json();

		setPets(json.pets);
	}

	useEffect(() => {
		requestPets();
	}, []);

	return (
		<div className="search-params">
			<form>
				<label htmlFor="location">
					Location
					<input
						id="location"
						value={location}
						placeholder="Location"
						onChange={(e) => updateLocation(e.target.value)}
					/>
				</label>
				<label htmlFor="animal">
					Animal
					<select
						id="animal"
						value={animal}
						onChange={(e) => {
							updateAnimal(e.target.value);
							updateBreed("");
						}}
						onBlur={(e) => {
							updateAnimal(e.target.value);
							updateBreed("");
						}}>
						<option />
						{ANIMALS.map((animal: string) => (
							<option key={animal} value={animal}>
								{animal}
							</option>
						))}
					</select>
				</label>
				<label htmlFor="breed">
					Breed
					<select
						disabled={!breeds.length}
						id="breed"
						value={breed}
						onChange={(e) => updateBreed(e.target.value)}
						onBlur={(e) => updateBreed(e.target.value)}>
						<option />
						{breeds.map((breed) => (
							<option key={breed} value={breed}>
								{breed}
							</option>
						))}
					</select>
				</label>
				<button>Submit</button>
			</form>
			{pets.map((pet: PetProps) => (
				<Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
			))}
		</div>
	);
};
