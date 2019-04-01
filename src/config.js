/**
 * Create and export configuration variables.
 */

// General container for all the environments.
const environments = {};

// Staging (default) environment.
environments.staging = {
	httpPort: 3000,
	environmentName: 'staging',
	hashingSecret: 'thisIsASecret',
	tokenLifetime: 24 * 60 * 60,
	stripe: {
		host: 'api.stripe.com',
		secretKey: 'sk_test_rqn5uYU1NhNGDg91RR9fuvyQ00K3skiNXx'
	},
	mailgun: {
		domainName: 'sandboxd9bf66827ccf4abebbfdbfe0f2d5a1ba.mailgun.org',
		host:
			'https://api.mailgun.net/v3/sandboxd9bf66827ccf4abebbfdbfe0f2d5a1ba.mailgun.org',
		authUsername: 'api',
		privateKey: 'ed081c499fdb0a6663a0a723bf402e04-2416cf28-a9d6a725',
		from: 'postmaster@sandboxd9bf66827ccf4abebbfdbfe0f2d5a1ba.mailgun.org'
	},
	templateGlobals: {
		appName: 'Pizza Delivery'
	}
};

// Production environment.
environments.production = {
	httpPort: 5000,
	environmentName: 'production',
	hashingSecret: 'thisIsAlsoASecret',
	tokenLifetime: 1000 * 60 * 60,
	stripe: {
		host: 'api.stripe.com',
		secretKey: 'sk_test_XXXXXXXXXXXXXXXXXXXXXX'
	},
	mailgun: {
		domainName: 'sandboxXXXXXXXXXXXXXXXXXX.mailgun.org',
		host: 'api.mailgun.net',
		authUsername: 'api',
		privateKey: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
		from: 'postmaster@sandboxXXXXXXXXXXXXXXXXXX.mailgun.org'
	}
};

// Determine which environment was passed as command-line argument.
const currentEnvironment =
	typeof process.env.NODE_ENV === 'string'
		? process.env.NODE_ENV.toLocaleLowerCase()
		: '';

// Check that current environment is one of the environments above, if not, default to staging.
const environmentToExport =
	typeof environments[currentEnvironment] === 'object'
		? environments[currentEnvironment]
		: environments.staging;

// Export the module.
module.exports = environmentToExport;
