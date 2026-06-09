import type { INodeProperties } from 'n8n-workflow';

export const scaleOutRelayDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Scale Out Relay"
					]
				}
			},
			"options": [
				{
					"name": "Demote To Node",
					"value": "Demote To Node",
					"action": "Demote a relay to simple node",
					"description": "Demote a relay to a simple node.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/scaleoutrelay/demote/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Promote To Relay",
					"value": "Promote To Relay",
					"action": "Promote a node to relay",
					"description": "Promote a node to relay",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/scaleoutrelay/promote/{{$parameter[\"nodeId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /scaleoutrelay/demote/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Scale Out Relay"
					],
					"operation": [
						"Demote To Node"
					]
				}
			}
		},
		{
			"displayName": "Node Id",
			"name": "nodeId",
			"required": true,
			"description": "Id of the target node",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Scale Out Relay"
					],
					"operation": [
						"Demote To Node"
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
						"🧩 Scale Out Relay"
					],
					"operation": [
						"Demote To Node"
					]
				}
			}
		},
		{
			"displayName": "POST /scaleoutrelay/promote/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Scale Out Relay"
					],
					"operation": [
						"Promote To Relay"
					]
				}
			}
		},
		{
			"displayName": "Node Id",
			"name": "nodeId",
			"required": true,
			"description": "Id of the target node",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Scale Out Relay"
					],
					"operation": [
						"Promote To Relay"
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
						"🧩 Scale Out Relay"
					],
					"operation": [
						"Promote To Relay"
					]
				}
			}
		},
];
