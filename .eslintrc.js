/* eslint-disable no-undef */
module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		indent: [2, "tab"],
		"no-tabs": 0,
		"linebreak-style": ["error", "unix"],
		"react/react-in-jsx-scope": "off",
		quotes: ["error", "double"],
		semi: ["error", "always"]
	}
};
