import type { INodeProperties } from 'n8n-workflow';

export const settingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get All Settings",
					"value": "Get All Settings",
					"action": "List all settings",
					"description": "Get the current value of all the settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/settings"
						}
					}
				},
				{
					"name": "Get Allowed Networks",
					"value": "Get Allowed Networks",
					"action": "Get allowed networks for a policy server",
					"description": "Get the list of allowed networks for a policy server",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/settings/allowed_networks/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Set Allowed Networks",
					"value": "Set Allowed Networks",
					"action": "Set allowed networks for a policy server",
					"description": "Set the list of allowed networks for a policy server",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/settings/allowed_networks/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Modify Allowed Networks",
					"value": "Modify Allowed Networks",
					"action": "Modify allowed networks for a policy server",
					"description": "Add or delete allowed networks for a policy server",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/settings/allowed_networks/{{$parameter[\"nodeId\"]}}/diff"
						}
					}
				},
				{
					"name": "Get Setting",
					"value": "Get Setting",
					"action": "Get the value of a setting",
					"description": "Get the current value of a specific setting",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/settings/{{$parameter[\"settingId\"]}}"
						}
					}
				},
				{
					"name": "Modify Setting",
					"value": "Modify Setting",
					"action": "Set the value of a setting",
					"description": "Set the current value of a specific setting",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/settings/{{$parameter[\"settingId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Get All Settings"
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
						"Settings"
					],
					"operation": [
						"Get All Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /settings/allowed_networks/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Get Allowed Networks"
					]
				}
			}
		},
		{
			"displayName": "Node Id",
			"name": "nodeId",
			"required": true,
			"description": "Policy server ID for which you want to manage allowed networks.",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Get Allowed Networks"
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
						"Settings"
					],
					"operation": [
						"Get Allowed Networks"
					]
				}
			}
		},
		{
			"displayName": "POST /settings/allowed_networks/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Set Allowed Networks"
					]
				}
			}
		},
		{
			"displayName": "Node Id",
			"name": "nodeId",
			"required": true,
			"description": "Policy server ID for which you want to manage allowed networks.",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Set Allowed Networks"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "\"enforce\"",
			"description": "New value of the allowed networks",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Set Allowed Networks"
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
						"Settings"
					],
					"operation": [
						"Set Allowed Networks"
					]
				}
			}
		},
		{
			"displayName": "POST /settings/allowed_networks/{nodeId}/diff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Modify Allowed Networks"
					]
				}
			}
		},
		{
			"displayName": "Node Id",
			"name": "nodeId",
			"required": true,
			"description": "Policy server ID for which you want to manage allowed networks.",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Modify Allowed Networks"
					]
				}
			}
		},
		{
			"displayName": "Allowed Networks",
			"name": "allowed_networks",
			"type": "json",
			"default": "{\n  \"add\": [\n    \"192.168.2.0/24\",\n    \"192.168.0.0/16\"\n  ],\n  \"delete\": [\n    \"162.168.1.0/24\"\n  ]\n}",
			"routing": {
				"send": {
					"property": "allowed_networks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Modify Allowed Networks"
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
						"Settings"
					],
					"operation": [
						"Modify Allowed Networks"
					]
				}
			}
		},
		{
			"displayName": "GET /settings/{settingId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Get Setting"
					]
				}
			}
		},
		{
			"displayName": "Setting Id",
			"name": "settingId",
			"required": true,
			"description": "Id of the setting to set",
			"default": "global_policy_mode",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Get Setting"
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
						"Settings"
					],
					"operation": [
						"Get Setting"
					]
				}
			}
		},
		{
			"displayName": "POST /settings/{settingId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Modify Setting"
					]
				}
			}
		},
		{
			"displayName": "Setting Id",
			"name": "settingId",
			"required": true,
			"description": "Id of the setting to set",
			"default": "global_policy_mode",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Modify Setting"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "enforce",
			"description": "New value of the setting",
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
						"Settings"
					],
					"operation": [
						"Modify Setting"
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
						"Settings"
					],
					"operation": [
						"Modify Setting"
					]
				}
			}
		},
];
