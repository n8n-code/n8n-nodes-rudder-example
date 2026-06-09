import type { INodeProperties } from 'n8n-workflow';

export const complianceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					]
				}
			},
			"options": [
				{
					"name": "Get Global Compliance",
					"value": "Get Global Compliance",
					"action": "Global compliance",
					"description": "Get current global compliance of a Rudder server",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/compliance"
						}
					}
				},
				{
					"name": "Get Nodes Compliance",
					"value": "Get Nodes Compliance",
					"action": "Compliance details for all nodes",
					"description": "Get current compliance of all the nodes of a Rudder server",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/compliance/nodes"
						}
					}
				},
				{
					"name": "Get Node Compliance",
					"value": "Get Node Compliance",
					"action": "Compliance details by node",
					"description": "Get current compliance of a node of a Rudder server",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/compliance/nodes/{{$parameter[\"nodeId\"]}}"
						}
					}
				},
				{
					"name": "Get Rules Compliance",
					"value": "Get Rules Compliance",
					"action": "Compliance details for all rules",
					"description": "Get current compliance of all the rules of a Rudder server",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/compliance/rules"
						}
					}
				},
				{
					"name": "Get Rule Compliance",
					"value": "Get Rule Compliance",
					"action": "Compliance details by rule",
					"description": "Get current compliance of a rule of a Rudder server",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/compliance/rules/{{$parameter[\"ruleId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /compliance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Global Compliance"
					]
				}
			}
		},
		{
			"displayName": "Precision",
			"name": "precision",
			"description": "Number of digits after comma in compliance percent figures",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "precision",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Global Compliance"
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
						"Compliance"
					],
					"operation": [
						"Get Global Compliance"
					]
				}
			}
		},
		{
			"displayName": "GET /compliance/nodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Nodes Compliance"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "level",
			"description": "Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)",
			"default": 4,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "level",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Nodes Compliance"
					]
				}
			}
		},
		{
			"displayName": "Precision",
			"name": "precision",
			"description": "Number of digits after comma in compliance percent figures",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "precision",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Nodes Compliance"
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
						"Compliance"
					],
					"operation": [
						"Get Nodes Compliance"
					]
				}
			}
		},
		{
			"displayName": "GET /compliance/nodes/{nodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Node Compliance"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "level",
			"description": "Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)",
			"default": 4,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "level",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Node Compliance"
					]
				}
			}
		},
		{
			"displayName": "Precision",
			"name": "precision",
			"description": "Number of digits after comma in compliance percent figures",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "precision",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Node Compliance"
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
						"Compliance"
					],
					"operation": [
						"Get Node Compliance"
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
						"Compliance"
					],
					"operation": [
						"Get Node Compliance"
					]
				}
			}
		},
		{
			"displayName": "GET /compliance/rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Rules Compliance"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "level",
			"description": "Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)",
			"default": 4,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "level",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Rules Compliance"
					]
				}
			}
		},
		{
			"displayName": "Precision",
			"name": "precision",
			"description": "Number of digits after comma in compliance percent figures",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "precision",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Rules Compliance"
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
						"Compliance"
					],
					"operation": [
						"Get Rules Compliance"
					]
				}
			}
		},
		{
			"displayName": "GET /compliance/rules/{ruleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Rule Compliance"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "level",
			"description": "Number of depth level of compliance objects to display (1:rules, 2:directives, 3:components, 4:nodes, 5:values, 6:reports)",
			"default": 4,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "level",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Rule Compliance"
					]
				}
			}
		},
		{
			"displayName": "Precision",
			"name": "precision",
			"description": "Number of digits after comma in compliance percent figures",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "precision",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Rule Compliance"
					]
				}
			}
		},
		{
			"displayName": "Rule Id",
			"name": "ruleId",
			"required": true,
			"description": "Id of the target rule",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Compliance"
					],
					"operation": [
						"Get Rule Compliance"
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
						"Compliance"
					],
					"operation": [
						"Get Rule Compliance"
					]
				}
			}
		},
];
