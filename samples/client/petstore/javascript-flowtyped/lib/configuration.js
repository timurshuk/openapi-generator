function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

export var Configuration =
/**
 * parameter for oauth2 security
 * @param name security name
 * @param scopes oauth2 scope
 * @memberof Configuration
 */

/**
 * parameter for basic security
 *
 * @type {string}
 * @memberof Configuration
 */
function Configuration() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Configuration);

    if (param.apiKey) {
        this.apiKey = param.apiKey;
    }
    if (param.username) {
        this.username = param.username;
    }
    if (param.password) {
        this.password = param.password;
    }
    if (param.accessToken) {
        this.accessToken = param.accessToken;
    }
    if (param.basePath) {
        this.basePath = param.basePath;
    }
}
/**
 * override base path
 *
 * @type {string}
 * @memberof Configuration
 */

/**
 * parameter for basic security
 *
 * @type {string}
 * @memberof Configuration
 */

/**
 * parameter for apiKey security
 * @param name security name
 * @memberof Configuration
 */
;
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */