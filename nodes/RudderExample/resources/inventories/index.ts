import type { INodeProperties } from 'n8n-workflow';

export const inventoriesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Inventories"
					]
				}
			},
			"options": [
				{
					"name": "Queue Information",
					"value": "Queue Information",
					"action": "Get information about inventory processing queue",
					"description": "Provide information about the current state of the inventory processor",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/inventories/info"
						}
					}
				},
				{
					"name": "Upload Inventory",
					"value": "Upload Inventory",
					"action": "Upload an inventory for processing",
					"description": "Upload an inventory to the web application",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/inventories/upload"
						}
					}
				},
				{
					"name": "File Watcher Restart",
					"value": "File Watcher Restart",
					"action": "Restart inventory watcher",
					"description": "Restart the inventory watcher if necessary",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/inventories/watcher/restart"
						}
					}
				},
				{
					"name": "File Watcher Start",
					"value": "File Watcher Start",
					"action": "Start inventory watcher",
					"description": "Start the inventory watcher if necessary",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/inventories/watcher/start"
						}
					}
				},
				{
					"name": "File Watcher Stop",
					"value": "File Watcher Stop",
					"action": "Stop inventory watcher",
					"description": "Stop the inventory watcher if necessary",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/inventories/watcher/stop"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /inventories/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inventories"
					],
					"operation": [
						"Queue Information"
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
						"Inventories"
					],
					"operation": [
						"Queue Information"
					]
				}
			}
		},
		{
			"displayName": "POST /inventories/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inventories"
					],
					"operation": [
						"Upload Inventory"
					]
				}
			}
		},
		{
			"displayName": "POST /inventories/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inventories"
					],
					"operation": [
						"Upload Inventory"
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
						"Inventories"
					],
					"operation": [
						"Upload Inventory"
					]
				}
			}
		},
		{
			"displayName": "POST /inventories/watcher/restart",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inventories"
					],
					"operation": [
						"File Watcher Restart"
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
						"Inventories"
					],
					"operation": [
						"File Watcher Restart"
					]
				}
			}
		},
		{
			"displayName": "POST /inventories/watcher/start",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inventories"
					],
					"operation": [
						"File Watcher Start"
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
						"Inventories"
					],
					"operation": [
						"File Watcher Start"
					]
				}
			}
		},
		{
			"displayName": "POST /inventories/watcher/stop",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inventories"
					],
					"operation": [
						"File Watcher Stop"
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
						"Inventories"
					],
					"operation": [
						"File Watcher Stop"
					]
				}
			}
		},
];
