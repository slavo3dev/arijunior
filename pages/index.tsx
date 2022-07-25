import type { NextPage } from "next";
import { SearchParams } from "@/components";

const Home: NextPage = () => {
	return (
		<div className="container mx-auto">
			<h1 className="pet">Adopt Me</h1>
			<SearchParams />
		</div>
	);
};

export default Home;
