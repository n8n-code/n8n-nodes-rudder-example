import type { INodeProperties } from 'n8n-workflow';

export const statusDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					]
				}
			},
			"options": [
				{
					"name": "None",
					"value": "None",
					"action": "Check if Rudder is alive",
					"description": "An unauthenticated API to check if Rudder web application is up and running. Be careful: this API does not follow other Rudder's API convention: \n- it is not versioned, so the path is just `/api/status`;\n- it returns a plain text message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"None"
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
						"Status"
					],
					"operation": [
						"None"
					]
				}
			}
		},
];
