interface Pet {
	name: string;
	animal: string;
	breed: string;
}

export const Pet: React.FC<Pet> = ({ name, animal, breed }: Pet) => {
	return (
		<>
			<h1>{name}</h1>
			<h2>{animal}</h2>
			<h2>{breed}</h2>
		</>
	);
};
