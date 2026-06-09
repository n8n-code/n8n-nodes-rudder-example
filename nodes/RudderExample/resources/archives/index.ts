import type { INodeProperties } from 'n8n-workflow';

export const archivesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Archives"
					]
				}
			},
			"options": [
				{
					"name": "Export",
					"value": "Export",
					"action": "Get a ZIP archive of the requested items and their dependencies",
					"description": "Get a ZIP archive or rules, directives, techniques and groups with optionally their dependencies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/archives/export"
						}
					}
				},
				{
					"name": "Import",
					"value": "Import",
					"action": "Import a ZIP archive of policies into Rudder",
					"description": "Import a ZIP archive of techniques, directives, groups and rules in a saved in a normalized format into Rudder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/archives/import"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /archives/export",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Archives"
					],
					"operation": [
						"Export"
					]
				}
			}
		},
		{
			"displayName": "Rules",
			"name": "rules",
			"description": "IDs (optionally with revision, '+' need to be escaped as '%2B') of rules to include",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "rules",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Archives"
					],
					"operation": [
						"Export"
					]
				}
			}
		},
		{
			"displayName": "Directives",
			"name": "directives",
			"description": "IDs (optionally with revision, '+' need to be escaped as '%2B') of directives to include",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "directives",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Archives"
					],
					"operation": [
						"Export"
					]
				}
			}
		},
		{
			"displayName": "Techniques",
			"name": "techniques",
			"description": "IDs, ie technique name/technique version (optionally with revision, '+' need to be escaped as '%2B') of techniques to include",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "techniques",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Archives"
					],
					"operation": [
						"Export"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"description": "IDs (optionally with revision, '+' need to be escaped as '%2B') of groups to include",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "groups",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Archives"
					],
					"operation": [
						"Export"
					]
				}
			}
		},
		{
			"displayName": "Include",
			"name": "include",
			"description": "Scope of dependencies to include in archive, where rule as directives and groups dependencies, directives have techniques dependencies, and techniques and groups don't have dependencies. 'none' means no dependencies will be include, 'all' means that the whole tree will,  'directives' and 'groups' means to include them specifically, 'techniques' means to include both directives and techniques.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "include",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Archives"
					],
					"operation": [
						"Export"
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
						"Archives"
					],
					"operation": [
						"Export"
					]
				}
			}
		},
		{
			"displayName": "POST /archives/import",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Archives"
					],
					"operation": [
						"Import"
					]
				}
			}
		},
		{
			"displayName": "POST /archives/import<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Archives"
					],
					"operation": [
						"Import"
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
						"Archives"
					],
					"operation": [
						"Import"
					]
				}
			}
		},
];
