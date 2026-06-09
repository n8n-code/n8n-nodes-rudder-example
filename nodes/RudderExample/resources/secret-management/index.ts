import type { INodeProperties } from 'n8n-workflow';

export const secretManagementDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					]
				}
			},
			"options": [
				{
					"name": "Get All Secrets",
					"value": "Get All Secrets",
					"action": "List all secrets",
					"description": "Get the list of all secrets without their value",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/secret/"
						}
					}
				},
				{
					"name": "Update Secret",
					"value": "Update Secret",
					"action": "Update a secret",
					"description": "Update a secret and override the value, the name cannot be overridden",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/secret/"
						}
					}
				},
				{
					"name": "Add Secret",
					"value": "Add Secret",
					"action": "Create a secret",
					"description": "Add a secret",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/secret/"
						}
					}
				},
				{
					"name": "Delete Secret",
					"value": "Delete Secret",
					"action": "Delete a secret",
					"description": "Remove the secret by his unique name",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/secret/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "Get Secret",
					"value": "Get Secret",
					"action": "Get one secret",
					"description": "Get one secret by his unique name",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/secret/{{$parameter[\"name\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /secret/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Get All Secrets"
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
						"🧩 Secret Management"
					],
					"operation": [
						"Get All Secrets"
					]
				}
			}
		},
		{
			"displayName": "POST /secret/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Update Secret"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Password of my super secret user account",
			"description": "The description of the secret to identify it more easily",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Update Secret"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "secret-password",
			"description": "The name of the secret used as a reference on the value",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Update Secret"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "nj-k;EO32!kFWewn2Nk,u",
			"description": "The value of the secret it will not be exposed in the interface",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Update Secret"
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
						"🧩 Secret Management"
					],
					"operation": [
						"Update Secret"
					]
				}
			}
		},
		{
			"displayName": "PUT /secret/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Add Secret"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Password of my super secret user account",
			"description": "The description of the secret to identify it more easily",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Add Secret"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "secret-password",
			"description": "The name of the secret used as a reference on the value",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Add Secret"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "nj-k;EO32!kFWewn2Nk,u",
			"description": "The value of the secret it will not be exposed in the interface",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Add Secret"
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
						"🧩 Secret Management"
					],
					"operation": [
						"Add Secret"
					]
				}
			}
		},
		{
			"displayName": "DELETE /secret/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Delete Secret"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "Unique name of the secret",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Delete Secret"
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
						"🧩 Secret Management"
					],
					"operation": [
						"Delete Secret"
					]
				}
			}
		},
		{
			"displayName": "GET /secret/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Get Secret"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "Unique name of the secret",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Secret Management"
					],
					"operation": [
						"Get Secret"
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
						"🧩 Secret Management"
					],
					"operation": [
						"Get Secret"
					]
				}
			}
		},
];
