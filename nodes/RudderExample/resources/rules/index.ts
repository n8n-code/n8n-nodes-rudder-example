import type { INodeProperties } from 'n8n-workflow';

export const rulesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					]
				}
			},
			"options": [
				{
					"name": "List Rules",
					"value": "List Rules",
					"action": "List all rules",
					"description": "List all rules",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rules"
						}
					}
				},
				{
					"name": "Create Rule",
					"value": "Create Rule",
					"action": "Create a rule",
					"description": "Create a new rule. You can specify a source rule to clone it.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/rules"
						}
					}
				},
				{
					"name": "Create Rule Category",
					"value": "Create Rule Category",
					"action": "Create a rule category",
					"description": "Create a new rule category",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/rules/categories"
						}
					}
				},
				{
					"name": "Delete Rule Category",
					"value": "Delete Rule Category",
					"action": "Delete group category",
					"description": "Delete a group category. It must have no child groups and no children categories.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/rules/categories/{{$parameter[\"ruleCategoryId\"]}}"
						}
					}
				},
				{
					"name": "Get Rule Category Details",
					"value": "Get Rule Category Details",
					"action": "Get rule category details",
					"description": "Get detailed information about a rule category",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rules/categories/{{$parameter[\"ruleCategoryId\"]}}"
						}
					}
				},
				{
					"name": "Update Rule Category",
					"value": "Update Rule Category",
					"action": "Update rule category details",
					"description": "Update detailed information about a rule category",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/rules/categories/{{$parameter[\"ruleCategoryId\"]}}"
						}
					}
				},
				{
					"name": "Get Rule Tree",
					"value": "Get Rule Tree",
					"action": "Get rules tree",
					"description": "Get all available rules and their categories in a tree",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rules/tree"
						}
					}
				},
				{
					"name": "Delete Rule",
					"value": "Delete Rule",
					"action": "Delete a rule",
					"description": "Delete a rule.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/rules/{{$parameter[\"ruleId\"]}}"
						}
					}
				},
				{
					"name": "Rule Details",
					"value": "Rule Details",
					"action": "Get a rule details",
					"description": "Get the details of a rule",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rules/{{$parameter[\"ruleId\"]}}"
						}
					}
				},
				{
					"name": "Update Rule",
					"value": "Update Rule",
					"action": "Update a rule details",
					"description": "Update the details of a rule",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/rules/{{$parameter[\"ruleId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"List Rules"
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
						"Rules"
					],
					"operation": [
						"List Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca",
			"description": "The parent category id. If provided, the new rule will be in this parent category",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "Directives",
			"name": "directives",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Directives linked to the rule",
			"routing": {
				"send": {
					"property": "directives",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "Security policy",
			"description": "Rule name",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Is the rule enabled",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
			"description": "Rule id",
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
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "Long Description",
			"name": "longDescription",
			"type": "string",
			"default": "This rules should be applied to all Linux nodes required basic hardening",
			"description": "Rule documentation",
			"routing": {
				"send": {
					"property": "longDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "Short Description",
			"name": "shortDescription",
			"type": "string",
			"default": "Baseline applying CIS guidelines",
			"description": "One line rule description",
			"routing": {
				"send": {
					"property": "shortDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
			"description": "The id of the rule the clone will be based onto. If this parameter if provided, the new rule will be a clone of this source. Other value will override values from the source.",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "System",
			"name": "system",
			"type": "boolean",
			"default": false,
			"description": "If true it is an internal Rudder rule",
			"routing": {
				"send": {
					"property": "system",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"customer\": \"MyCompany\"\n  }\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "Targets",
			"name": "targets",
			"type": "json",
			"default": "[\n  {\n    \"exclude\": {\n      \"or\": [\n        \"policyServer:root\",\n        \"group:cd377524-808b-4b42-8724-6ef308efeac7\"\n      ]\n    },\n    \"include\": {\n      \"or\": [\n        \"special:all\"\n      ]\n    }\n  }\n]",
			"description": "Node and special groups targeted by that rule",
			"routing": {
				"send": {
					"property": "targets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule"
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
						"Rules"
					],
					"operation": [
						"Create Rule"
					]
				}
			}
		},
		{
			"displayName": "PUT /rules/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule Category"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Baseline applying CIS guidelines",
			"description": "Rules category description",
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
						"Rules"
					],
					"operation": [
						"Create Rule Category"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "32d013f7-b6d8-46c8-99d3-016307fa66c0",
			"description": "Rule category id, only provide it when needed.",
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
						"Rules"
					],
					"operation": [
						"Create Rule Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Security policies",
			"description": "Name of the rule category",
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
						"Rules"
					],
					"operation": [
						"Create Rule Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parent",
			"name": "parent",
			"type": "string",
			"default": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
			"description": "The parent category of the rules",
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Create Rule Category"
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
						"Rules"
					],
					"operation": [
						"Create Rule Category"
					]
				}
			}
		},
		{
			"displayName": "DELETE /rules/categories/{ruleCategoryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Delete Rule Category"
					]
				}
			}
		},
		{
			"displayName": "Rule Category ID",
			"name": "ruleCategoryId",
			"required": true,
			"default": "e0a311fa-f7b2-4f9e-89a9-db517b9c6b90",
			"type": "string",
			"description": "Rule category id",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Delete Rule Category"
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
						"Rules"
					],
					"operation": [
						"Delete Rule Category"
					]
				}
			}
		},
		{
			"displayName": "GET /rules/categories/{ruleCategoryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Get Rule Category Details"
					]
				}
			}
		},
		{
			"displayName": "Rule Category ID",
			"name": "ruleCategoryId",
			"required": true,
			"default": "e0a311fa-f7b2-4f9e-89a9-db517b9c6b90",
			"type": "string",
			"description": "Rule category id",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Get Rule Category Details"
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
						"Rules"
					],
					"operation": [
						"Get Rule Category Details"
					]
				}
			}
		},
		{
			"displayName": "POST /rules/categories/{ruleCategoryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule Category"
					]
				}
			}
		},
		{
			"displayName": "Rule Category ID",
			"name": "ruleCategoryId",
			"required": true,
			"default": "e0a311fa-f7b2-4f9e-89a9-db517b9c6b90",
			"type": "string",
			"description": "Rule category id",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule Category"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Baseline applying CIS guidelines",
			"description": "Rules category description",
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
						"Rules"
					],
					"operation": [
						"Update Rule Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Security policies",
			"description": "Name of the rule category",
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
						"Rules"
					],
					"operation": [
						"Update Rule Category"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parent",
			"name": "parent",
			"type": "string",
			"default": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
			"description": "The parent category of the rules",
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule Category"
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
						"Rules"
					],
					"operation": [
						"Update Rule Category"
					]
				}
			}
		},
		{
			"displayName": "GET /rules/tree",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Get Rule Tree"
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
						"Rules"
					],
					"operation": [
						"Get Rule Tree"
					]
				}
			}
		},
		{
			"displayName": "DELETE /rules/{ruleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Delete Rule"
					]
				}
			}
		},
		{
			"displayName": "Rule ID",
			"name": "ruleId",
			"required": true,
			"description": "Id of the target rule",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Delete Rule"
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
						"Rules"
					],
					"operation": [
						"Delete Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /rules/{ruleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Rule Details"
					]
				}
			}
		},
		{
			"displayName": "Rule ID",
			"name": "ruleId",
			"required": true,
			"description": "Id of the target rule",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Rule Details"
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
						"Rules"
					],
					"operation": [
						"Rule Details"
					]
				}
			}
		},
		{
			"displayName": "POST /rules/{ruleId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "Rule ID",
			"name": "ruleId",
			"required": true,
			"description": "Id of the target rule",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "38e0c6ea-917f-47b8-82e0-e6a1d3dd62ca",
			"description": "The parent category id.",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "Directives",
			"name": "directives",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Directives linked to the rule",
			"routing": {
				"send": {
					"property": "directives",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "Security policy",
			"description": "Rule name",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Is the rule enabled",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "0c1713ae-cb9d-4f7b-abda-ca38c5d643ea",
			"description": "Rule id",
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
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "Long Description",
			"name": "longDescription",
			"type": "string",
			"default": "This rules should be applied to all Linux nodes required basic hardening",
			"description": "Rule documentation",
			"routing": {
				"send": {
					"property": "longDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "Short Description",
			"name": "shortDescription",
			"type": "string",
			"default": "Baseline applying CIS guidelines",
			"description": "One line rule description",
			"routing": {
				"send": {
					"property": "shortDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "System",
			"name": "system",
			"type": "boolean",
			"default": false,
			"description": "If true it is an internal Rudder rule",
			"routing": {
				"send": {
					"property": "system",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"customer\": \"MyCompany\"\n  }\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
		{
			"displayName": "Targets",
			"name": "targets",
			"type": "json",
			"default": "[\n  {\n    \"exclude\": {\n      \"or\": [\n        \"policyServer:root\",\n        \"group:cd377524-808b-4b42-8724-6ef308efeac7\"\n      ]\n    },\n    \"include\": {\n      \"or\": [\n        \"special:all\"\n      ]\n    }\n  }\n]",
			"description": "Node and special groups targeted by that rule",
			"routing": {
				"send": {
					"property": "targets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Rules"
					],
					"operation": [
						"Update Rule"
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
						"Rules"
					],
					"operation": [
						"Update Rule"
					]
				}
			}
		},
];
