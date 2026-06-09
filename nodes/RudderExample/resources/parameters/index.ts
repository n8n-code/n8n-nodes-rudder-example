import type { INodeProperties } from 'n8n-workflow';

export const parametersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					]
				}
			},
			"options": [
				{
					"name": "List Parameters",
					"value": "List Parameters",
					"action": "List all global parameters",
					"description": "Get the current value of all the global parameters",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/parameters"
						}
					}
				},
				{
					"name": "Create Parameter",
					"value": "Create Parameter",
					"action": "Create a new parameter",
					"description": "Create a new global parameter",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/parameters"
						}
					}
				},
				{
					"name": "Delete Parameter",
					"value": "Delete Parameter",
					"action": "Delete a parameter",
					"description": "Delete an existing parameter",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/parameters/{{$parameter[\"parameterId\"]}}"
						}
					}
				},
				{
					"name": "Parameter Details",
					"value": "Parameter Details",
					"action": "Get the value of a parameter",
					"description": "Get the current value of a given parameter",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/parameters/{{$parameter[\"parameterId\"]}}"
						}
					}
				},
				{
					"name": "Update Parameter",
					"value": "Update Parameter",
					"action": "Update a parameter's value",
					"description": "Update the properties of a parameter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/parameters/{{$parameter[\"parameterId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /parameters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					],
					"operation": [
						"List Parameters"
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
						"Parameters"
					],
					"operation": [
						"List Parameters"
					]
				}
			}
		},
		{
			"displayName": "PUT /parameters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					],
					"operation": [
						"Create Parameter"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Default inform message put in footer of managed files by Rudder",
			"description": "Description of the parameter",
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
						"Parameters"
					],
					"operation": [
						"Create Parameter"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "rudder_file_edit_footer",
			"description": "Name of the parameter",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					],
					"operation": [
						"Create Parameter"
					]
				}
			}
		},
		{
			"displayName": "Overridable",
			"name": "overridable",
			"type": "boolean",
			"default": false,
			"description": "Is the global parameter overridable by node",
			"routing": {
				"send": {
					"property": "overridable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					],
					"operation": [
						"Create Parameter"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "### End of file managed by Rudder ###",
			"description": "Value of the parameter",
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
						"Parameters"
					],
					"operation": [
						"Create Parameter"
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
						"Parameters"
					],
					"operation": [
						"Create Parameter"
					]
				}
			}
		},
		{
			"displayName": "DELETE /parameters/{parameterId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					],
					"operation": [
						"Delete Parameter"
					]
				}
			}
		},
		{
			"displayName": "Parameter Id",
			"name": "parameterId",
			"required": true,
			"description": "Id of the parameter to manage",
			"default": "rudder_file_edit_header",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					],
					"operation": [
						"Delete Parameter"
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
						"Parameters"
					],
					"operation": [
						"Delete Parameter"
					]
				}
			}
		},
		{
			"displayName": "GET /parameters/{parameterId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					],
					"operation": [
						"Parameter Details"
					]
				}
			}
		},
		{
			"displayName": "Parameter Id",
			"name": "parameterId",
			"required": true,
			"description": "Id of the parameter to manage",
			"default": "rudder_file_edit_header",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					],
					"operation": [
						"Parameter Details"
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
						"Parameters"
					],
					"operation": [
						"Parameter Details"
					]
				}
			}
		},
		{
			"displayName": "POST /parameters/{parameterId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					],
					"operation": [
						"Update Parameter"
					]
				}
			}
		},
		{
			"displayName": "Parameter Id",
			"name": "parameterId",
			"required": true,
			"description": "Id of the parameter to manage",
			"default": "rudder_file_edit_header",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Parameters"
					],
					"operation": [
						"Update Parameter"
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
						"Parameters"
					],
					"operation": [
						"Update Parameter"
					]
				}
			}
		},
];
