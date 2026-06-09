import type { INodeProperties } from 'n8n-workflow';

export const userManagementDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					]
				}
			},
			"options": [
				{
					"name": "Add User",
					"value": "Add User",
					"action": "Add user",
					"description": "Add a new user",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/usermanagement"
						}
					}
				},
				{
					"name": "Get Role",
					"value": "Get Role",
					"action": "List all roles",
					"description": "Get all available roles and their rights",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/usermanagement/roles"
						}
					}
				},
				{
					"name": "Update User",
					"value": "Update User",
					"action": "Update user's infos",
					"description": "Rename, change password (pre-hashed or not) and change permission of an user. If a parameter is empty, it will be ignored.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/usermanagement/update/{{$parameter[\"username\"]}}"
						}
					}
				},
				{
					"name": "Get User Info",
					"value": "Get User Info",
					"action": "List all users",
					"description": "Get the list of all present users and their permissions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/usermanagement/users"
						}
					}
				},
				{
					"name": "Reload User Conf",
					"value": "Reload User Conf",
					"action": "Reload user",
					"description": "Reload the users from the file system, in the configuration file",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/usermanagement/users/reload"
						}
					}
				},
				{
					"name": "Delete User",
					"value": "Delete User",
					"action": "Delete an user",
					"description": "Delete the user and his permissions",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/usermanagement/{{$parameter[\"username\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /usermanagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Is Pre Hahed",
			"name": "isPreHahed",
			"type": "options",
			"default": true,
			"description": "If you want to provide hashed password set this property to `true` otherwise we will hash the plain password and store the hash",
			"options": [
				{
					"name": "False",
					"value": false
				},
				{
					"name": "True",
					"value": true
				}
			],
			"routing": {
				"send": {
					"property": "isPreHahed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "passwdWillBeStoredHashed",
			"description": "this password will be hashed for you if the `isPreHashed` is set on false",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "role",
			"type": "json",
			"default": "[\n  \"user\"\n]",
			"description": "Defined user's permissions",
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "John Doe",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Add User"
					]
				}
			}
		},
		{
			"displayName": "GET /usermanagement/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Get Role"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Get Role"
					]
				}
			}
		},
		{
			"displayName": "POST /usermanagement/update/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "Username of an user (unique)",
			"default": "JaneDoe",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Is Pre Hahed",
			"name": "isPreHahed",
			"type": "options",
			"default": true,
			"description": "If you want to provide hashed password set this property to `true` otherwise we will hash the plain password and store the hash",
			"options": [
				{
					"name": "False",
					"value": false
				},
				{
					"name": "True",
					"value": true
				}
			],
			"routing": {
				"send": {
					"property": "isPreHahed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "passwdWillBeStoredHashed",
			"description": "this password will be hashed for you if the `isPreHashed` is set on false",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "role",
			"type": "json",
			"default": "[\n  \"user\"\n]",
			"description": "Defined user's permissions",
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "John Doe",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Update User"
					]
				}
			}
		},
		{
			"displayName": "GET /usermanagement/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Get User Info"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Get User Info"
					]
				}
			}
		},
		{
			"displayName": "GET /usermanagement/users/reload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Reload User Conf"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Reload User Conf"
					]
				}
			}
		},
		{
			"displayName": "DELETE /usermanagement/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "Username of an user (unique)",
			"default": "JaneDoe",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "X API Token (Header)",
			"name": "security_api_tokens",
			"type": "string",
			"default": "",
			"description": "Apart for the status API, authenticating is mandatory for every request, as sensitive information like inventories or configuration rules may get exposed. It is done using a dedicated API Account, than can be created in the web interface on the 'API Accounts' page located inside the Administration part.\n\n![API Tokens settings](assets/APISettings.png \"API Tokens settings\")\n\nAPI Accounts are not linked to standard user accounts, and currently give full administrative privileges: they must be secured adequately. Once you have created an API account, you get a token that will be needed to authenticate every request. This token is the API equivalent of a password, and must be secured just like a password would be.\n\nOn any call to the API, you will need to add a **X-API-Token** header to your request to authenticate:\n\n\n    curl --request GET --header \"X-API-Token: yourToken\" https://rudder.example.com/rudder/api/latest/rules\n\n\nIf you perform any action (creation, update, deletion) using the API, the event log generated will record the API account as the user.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 User Management"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
];
