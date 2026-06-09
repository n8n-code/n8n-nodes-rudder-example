import type { INodeProperties } from 'n8n-workflow';

export const changeRequestsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					]
				}
			},
			"options": [
				{
					"name": "List Change Requests",
					"value": "List Change Requests",
					"action": "List all change requests",
					"description": "List all change requests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/changeRequests"
						}
					}
				},
				{
					"name": "Decline Change Request",
					"value": "Decline Change Request",
					"action": "Decline a request details",
					"description": "Refuse a change request",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/changeRequests/{{$parameter[\"changeRequestId\"]}}"
						}
					}
				},
				{
					"name": "Change Request Details",
					"value": "Change Request Details",
					"action": "Get a change request details",
					"description": "Get a change request details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/changeRequests/{{$parameter[\"changeRequestId\"]}}"
						}
					}
				},
				{
					"name": "Update Change Request",
					"value": "Update Change Request",
					"action": "Update a request details",
					"description": "Update a change request",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/changeRequests/{{$parameter[\"changeRequestId\"]}}"
						}
					}
				},
				{
					"name": "Accept Change Request",
					"value": "Accept Change Request",
					"action": "Accept a request details",
					"description": "Accept a change request",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/changeRequests/{{$parameter[\"changeRequestId\"]}}/accept"
						}
					}
				},
				{
					"name": "List Users",
					"value": "List Users",
					"action": "List user",
					"description": "List all validated and unvalidated users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Save Workflow User",
					"value": "Save Workflow User",
					"action": "Update validated user list",
					"description": "Add and remove user from validated users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/validatedUsers"
						}
					}
				},
				{
					"name": "Remove Validated User",
					"value": "Remove Validated User",
					"action": "Remove an user from validated user list",
					"description": "The user is again subject to workflow validation",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/validatedUsers/{{$parameter[\"username\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/changeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"List Change Requests"
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
						"🧩 Change Requests"
					],
					"operation": [
						"List Change Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /changeRequests/{changeRequestId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Decline Change Request"
					]
				}
			}
		},
		{
			"displayName": "Change Request ID",
			"name": "changeRequestId",
			"required": true,
			"default": 37,
			"type": "number",
			"description": "Change request id",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Decline Change Request"
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
						"🧩 Change Requests"
					],
					"operation": [
						"Decline Change Request"
					]
				}
			}
		},
		{
			"displayName": "GET /changeRequests/{changeRequestId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Change Request Details"
					]
				}
			}
		},
		{
			"displayName": "Change Request ID",
			"name": "changeRequestId",
			"required": true,
			"default": 37,
			"type": "number",
			"description": "Change request id",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Change Request Details"
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
						"🧩 Change Requests"
					],
					"operation": [
						"Change Request Details"
					]
				}
			}
		},
		{
			"displayName": "POST /changeRequests/{changeRequestId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Update Change Request"
					]
				}
			}
		},
		{
			"displayName": "Change Request ID",
			"name": "changeRequestId",
			"required": true,
			"default": 37,
			"type": "number",
			"description": "Change request id",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Update Change Request"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Change request description",
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
						"🧩 Change Requests"
					],
					"operation": [
						"Update Change Request"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "Change request name",
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
						"🧩 Change Requests"
					],
					"operation": [
						"Update Change Request"
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
						"🧩 Change Requests"
					],
					"operation": [
						"Update Change Request"
					]
				}
			}
		},
		{
			"displayName": "POST /changeRequests/{changeRequestId}/accept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Accept Change Request"
					]
				}
			}
		},
		{
			"displayName": "Change Request ID",
			"name": "changeRequestId",
			"required": true,
			"default": 37,
			"type": "number",
			"description": "Change request id",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Accept Change Request"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "deployed",
			"description": "New status of the change request",
			"options": [
				{
					"name": "Pending Deployment",
					"value": "pending deployment"
				},
				{
					"name": "Deployed",
					"value": "deployed"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Accept Change Request"
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
						"🧩 Change Requests"
					],
					"operation": [
						"Accept Change Request"
					]
				}
			}
		},
		{
			"displayName": "GET /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"List Users"
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
						"🧩 Change Requests"
					],
					"operation": [
						"List Users"
					]
				}
			}
		},
		{
			"displayName": "POST /validatedUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Save Workflow User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Validated Users",
			"name": "validatedUsers",
			"type": "json",
			"default": "[\n  \"John Do\"\n]",
			"description": "list of user to put in validated list",
			"routing": {
				"send": {
					"property": "validatedUsers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Save Workflow User"
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
						"🧩 Change Requests"
					],
					"operation": [
						"Save Workflow User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /validatedUsers/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Change Requests"
					],
					"operation": [
						"Remove Validated User"
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
						"🧩 Change Requests"
					],
					"operation": [
						"Remove Validated User"
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
						"🧩 Change Requests"
					],
					"operation": [
						"Remove Validated User"
					]
				}
			}
		},
];
