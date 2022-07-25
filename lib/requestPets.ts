export async function requestPets(
	animal: string,
	location: string,
	breed: string,
	setPets: (arg0: string) => void
) {
	const res = await fetch(
		`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
	);
	const json = await res.json();

	setPets(json.pets);
}
