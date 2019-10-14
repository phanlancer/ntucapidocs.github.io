define({ "api": [  {    "type": "post",    "url": "/check-campaign-availability:id",    "title": "Check Campaign Availability",    "description": "<p>To check if fest or not</p>",    "version": "1.0.0",    "name": "checkCampaignAvailability",    "group": "Campaign",    "permission": [      {        "name": "public"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "profileCode",            "description": "<p>User profile code</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "isCampaignActive",            "description": "<p>Is Campaign Active</p>"          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "hasRedeemed",            "description": "<p>To check gift redeemed or not by user</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "link",            "description": "<p>Share link</p>"          }        ]      }    },    "filename": "src/routes/campaigns.route.js",    "groupTitle": "Campaign"  },  {    "type": "get",    "url": "/nationalities",    "title": "List nationalities",    "description": "<p>Get a list of nationalities</p>",    "version": "1.0.0",    "name": "ListNationalities",    "group": "Nationality",    "permission": [      {        "name": "public"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "nationalities",            "description": "<p>List of nationalities.</p>"          }        ]      }    },    "filename": "src/routes/nationality.route.js",    "groupTitle": "Nationality"  },  {    "type": "get",    "url": "/products",    "title": "List products",    "description": "<p>Get a list of products</p>",    "version": "1.0.0",    "name": "ListProducts",    "group": "Product",    "permission": [      {        "name": "public"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "products",            "description": "<p>List of products.</p>"          }        ]      }    },    "filename": "src/routes/product.route.js",    "groupTitle": "Product"  },  {    "type": "post",    "url": "/users/profileCode",    "title": "",    "description": "<p>Get user detail by profile code</p>",    "version": "1.0.0",    "name": "GetUserByProfileCode",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "content-type",            "description": "<p>application/json</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "profileCode",            "description": "<p>User profile code</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Success message</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ]      }    },    "filename": "src/routes/user.route.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/users/redeem-gift",    "title": "Redeem Gift",    "description": "<p>Redeem Gift</p>",    "version": "1.0.0",    "name": "RedeemGift",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "content-type",            "description": "<p>application/json</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "campaignId",            "description": "<p>Campaign Id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "profileCode",            "description": "<p>User profile code</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "passcode",            "description": "<p>Campaign passcode</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Success message</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ]      }    },    "filename": "src/routes/user.route.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/users/register",    "title": "Register a User",    "description": "<p>Register a new user and send a OTP to the user's mobile</p>",    "version": "1.0.0",    "name": "RegisterUser",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "content-type",            "description": "<p>application/json</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "size": "1..128",            "optional": false,            "field": "name",            "description": "<p>User's name</p>"          },          {            "group": "Parameter",            "type": "String",            "size": "6..20",            "optional": false,            "field": "mobile",            "description": "<p>Mobile phone number</p>"          },          {            "group": "Parameter",            "type": "Number",            "size": "1-",            "optional": false,            "field": "nationalityId",            "description": "<p>Nationality id</p>"          },          {            "group": "Parameter",            "type": "Number",            "size": "1-",            "optional": false,            "field": "campaignId",            "description": "<p>Campaign id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "referrerProfileCode",            "description": "<p>Referrer profile code</p>"          }        ]      }    },    "success": {      "fields": {        "Created 201": [          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Success message</p>"          },          {            "group": "Created 201",            "type": "Number",            "optional": false,            "field": "user.id",            "description": "<p>User's id</p>"          },          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "user.name",            "description": "<p>User's name</p>"          },          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "user.mobile",            "description": "<p>Mobile phone number</p>"          },          {            "group": "Created 201",            "type": "Number",            "optional": false,            "field": "user.nationalityId",            "description": "<p>Nationality id</p>"          },          {            "group": "Created 201",            "type": "Number",            "optional": false,            "field": "user.campaignId",            "description": "<p>Campaign id</p>"          },          {            "group": "Created 201",            "type": "Number",            "optional": false,            "field": "user.referrerId",            "description": "<p>Referrer id</p>"          },          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "user.profileCode",            "description": "<p>User's profile code</p>"          },          {            "group": "Created 201",            "type": "Boolean",            "optional": false,            "field": "user.mobileVerified",            "description": "<p>Boolean if mobile is verified or not</p>"          },          {            "group": "Created 201",            "type": "Boolean",            "optional": false,            "field": "user.hasRedeemed",            "description": "<p>Boolean if redeemed a gift</p>"          },          {            "group": "Created 201",            "type": "Date",            "optional": false,            "field": "user.createdAt",            "description": "<p>Timestamp</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ]      }    },    "filename": "src/routes/user.route.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/users/resend-otp",    "title": "Resend OTP",    "description": "<p>Resend OTP</p>",    "version": "1.0.0",    "name": "ResendOTP",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "content-type",            "description": "<p>application/json</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userId",            "description": "<p>User's id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Success message</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ]      }    },    "filename": "src/routes/user.route.js",    "groupTitle": "User"  },  {    "type": "patch",    "url": "v1/users/:id",    "title": "Update User",    "description": "<p>Update some fields of a user record</p>",    "version": "1.0.0",    "name": "UpdateUser",    "group": "User",    "permission": [      {        "name": "user"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "content-type",            "description": "<p>application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Access token</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "size": "1..128",            "optional": true,            "field": "name",            "description": "<p>User's name</p>"          },          {            "group": "Parameter",            "type": "String",            "size": "6..20",            "optional": true,            "field": "mobile",            "description": "<p>Mobile phone number</p>"          },          {            "group": "Parameter",            "type": "Number",            "size": "1-",            "optional": true,            "field": "nationalityId",            "description": "<p>Nationality id</p>"          },          {            "group": "Parameter",            "type": "Number",            "size": "1-",            "optional": true,            "field": "campaignId",            "description": "<p>Campaign id</p>"          },          {            "group": "Parameter",            "type": "Number",            "size": "1-",            "optional": true,            "field": "referrerId",            "description": "<p>Referrer id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "email",            "description": "<p>User's email</p>"          },          {            "group": "Parameter",            "type": "String",            "size": "6..128",            "optional": true,            "field": "productId",            "description": "<p>Product id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>User's id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>User's name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "mobile",            "description": "<p>Mobile phone number</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User's email</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "nationalityId",            "description": "<p>Nationality id</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "campaignId",            "description": "<p>Campaign id</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "referrerId",            "description": "<p>Referrer id</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "productId",            "description": "<p>Product id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "profileCode",            "description": "<p>User's profile code</p>"          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "mobileVerified",            "description": "<p>Boolean if mobile is verified or not</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "product",            "description": "<p>If product selected then product detail</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "createdAt",            "description": "<p>Timestamp</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "updatedAt",            "description": "<p>Timestamp</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ],        "Unauthorized 401": [          {            "group": "Unauthorized 401",            "optional": false,            "field": "Unauthorized",            "description": "<p>Only authenticated users can modify the data</p>"          }        ],        "Forbidden 403": [          {            "group": "Forbidden 403",            "optional": false,            "field": "Forbidden",            "description": "<p>Only user with same id can modify the data</p>"          }        ],        "Not Found 404": [          {            "group": "Not Found 404",            "optional": false,            "field": "NotFound",            "description": "<p>User does not exist</p>"          }        ]      }    },    "filename": "src/routes/user.route.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/users/verify-otp",    "title": "Verify OTP",    "description": "<p>Verify OTP</p>",    "version": "1.0.0",    "name": "VerifyOTP",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "content-type",            "description": "<p>application/json</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "userId",            "description": "<p>User's id</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "otp",            "description": "<p>OTP to verify</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "tokenType",            "description": "<p>Access Token's type</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "accessToken",            "description": "<p>Authorization Token</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "refreshToken",            "description": "<p>Token to get a new accessToken after expiration time</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "expiresIn",            "description": "<p>Access Token's expiration time in milliseconds</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ]      }    },    "filename": "src/routes/user.route.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/users/pre-registration-check",    "title": "Pre Registration Check",    "description": "<p>Pre Registration Check</p>",    "version": "1.0.0",    "name": "checkUserTypeAndCampaign",    "group": "User",    "permission": [      {        "name": "public"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "content-type",            "description": "<p>application/json</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "referrerProfileCode",            "description": "<p>Referrer Profile Code</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "campaignId",            "description": "<p>Campaign Id</p>"          },          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "idCampaignActive",            "description": "<p>Check Campaign Active</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "userId",            "description": "<p>User Id</p>"          }        ]      }    },    "error": {      "fields": {        "Bad Request 400": [          {            "group": "Bad Request 400",            "optional": false,            "field": "ValidationError",            "description": "<p>Some parameters may contain invalid values</p>"          }        ]      }    },    "filename": "src/routes/user.route.js",    "groupTitle": "User"  }] });
