import type { INodeProperties } from 'n8n-workflow';

export const brandingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					]
				}
			},
			"options": [
				{
					"name": "Get Branding Conf",
					"value": "Get Branding Conf",
					"action": "Get branding configuration",
					"description": "Get all web interface customization parameters",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/branding"
						}
					}
				},
				{
					"name": "Update B Randing Conf",
					"value": "Update B Randing Conf",
					"action": "Update web interface customization",
					"description": "change color, logo, label etc.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/branding"
						}
					}
				},
				{
					"name": "Reload Branding Conf",
					"value": "Reload Branding Conf",
					"action": "Reload branding file",
					"description": "Reload the configuration from file",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/branding/reload"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /branding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Get Branding Conf"
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
						"🧩 Branding"
					],
					"operation": [
						"Get Branding Conf"
					]
				}
			}
		},
		{
			"displayName": "POST /branding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Bar Color",
			"name": "barColor",
			"type": "json",
			"default": "{\n  \"alpha\": 0.5,\n  \"blue\": 0.235,\n  \"green\": 0.01,\n  \"red\": 0.2\n}",
			"routing": {
				"send": {
					"property": "barColor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Display Bar",
			"name": "displayBar",
			"type": "boolean",
			"default": true,
			"description": "Whether header bar is displayed or not",
			"routing": {
				"send": {
					"property": "displayBar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Display Bar Login",
			"name": "displayBarLogin",
			"type": "boolean",
			"default": true,
			"description": "Whether header bar is displayed in login page or not",
			"routing": {
				"send": {
					"property": "displayBarLogin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Display Label",
			"name": "displayLabel",
			"type": "boolean",
			"default": true,
			"description": "Whether header bar's label is displayed or not",
			"routing": {
				"send": {
					"property": "displayLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Display Motd",
			"name": "displayMotd",
			"type": "boolean",
			"default": true,
			"description": "Whether the message of the day is displayed in login page or not",
			"routing": {
				"send": {
					"property": "displayMotd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label Color",
			"name": "labelColor",
			"type": "json",
			"default": "{\n  \"alpha\": 0.5,\n  \"blue\": 0.235,\n  \"green\": 0.01,\n  \"red\": 0.2\n}",
			"routing": {
				"send": {
					"property": "labelColor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label Text",
			"name": "labelText",
			"type": "string",
			"default": "Production",
			"description": "The header bar's label title",
			"routing": {
				"send": {
					"property": "labelText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Motd",
			"name": "motd",
			"type": "string",
			"default": "Welcome, please sign in:",
			"description": "Message of the day in login page",
			"routing": {
				"send": {
					"property": "motd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Small Logo",
			"name": "smallLogo",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "smallLogo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Wide Logo",
			"name": "wideLogo",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "wideLogo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
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
						"🧩 Branding"
					],
					"operation": [
						"Update B Randing Conf"
					]
				}
			}
		},
		{
			"displayName": "POST /branding/reload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"🧩 Branding"
					],
					"operation": [
						"Reload Branding Conf"
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
						"🧩 Branding"
					],
					"operation": [
						"Reload Branding Conf"
					]
				}
			}
		},
];
