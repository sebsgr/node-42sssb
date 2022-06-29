export { };

// required strictNullChecks=true

declare let notNullableString: string;
declare let nullableString: string | null;

notNullableString = "test";
notNullableString = null;
notNullableString = undefined;

nullableString = "test";
nullableString = null;
nullableString = undefined;


          