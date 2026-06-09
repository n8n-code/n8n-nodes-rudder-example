import type { INodeProperties } from 'n8n-workflow';

export const apiInfoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API Info"
					]
				}
			},
			"options": [
				{
					"name": "Api General Informations",
					"value": "Api General Informations",
					"action": "List all endoints",
					"description": "List all endpoints and their version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info"
						}
					}
				},
				{
					"name": "Api Informations",
					"value": "Api Informations",
					"action": "Get information about one API endpoint",
					"description": "Get the description and the list of supported version for one API endpoint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info/details/{{$parameter[\"endpointName\"]}}"
						}
					}
				},
				{
					"name": "Api Sub Informations",
					"value": "Api Sub Informations",
					"action": "Get information on endpoint in a section",
					"description": "Get all endpoints in the given section with their supported version.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info/{{$parameter[\"sectionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Info"
					],
					"operation": [
						"Api General Informations"
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
						"API Info"
					],
					"operation": [
						"Api General Informations"
					]
				}
			}
		},
		{
			"displayName": "GET /info/details/{endpointName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Info"
					],
					"operation": [
						"Api Informations"
					]
				}
			}
		},
		{
			"displayName": "Endpoint Name",
			"name": "endpointName",
			"required": true,
			"description": "Name of the endpoint for which one wants information",
			"default": "listAcceptedNodes",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Info"
					],
					"operation": [
						"Api Informations"
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
						"API Info"
					],
					"operation": [
						"Api Informations"
					]
				}
			}
		},
		{
			"displayName": "GET /info/{sectionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Info"
					],
					"operation": [
						"Api Sub Informations"
					]
				}
			}
		},
		{
			"displayName": "Section Id",
			"name": "sectionId",
			"required": true,
			"description": "Id of the API section",
			"default": "nodes",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Info"
					],
					"operation": [
						"Api Sub Informations"
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
						"API Info"
					],
					"operation": [
						"Api Sub Informations"
					]
				}
			}
		},
];
