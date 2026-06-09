import type { INodeProperties } from 'n8n-workflow';

export const directivesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					]
				}
			},
			"options": [
				{
					"name": "List Directives",
					"value": "List Directives",
					"action": "List all directives",
					"description": "List all directives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directives"
						}
					}
				},
				{
					"name": "Create Directive",
					"value": "Create Directive",
					"action": "Create a directive",
					"description": "Create a new directive from provided parameters. You can specify a source directive to clone it.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/directives"
						}
					}
				},
				{
					"name": "Delete Directive",
					"value": "Delete Directive",
					"action": "Delete a directive",
					"description": "Delete a directive",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directives/{{$parameter[\"directiveId\"]}}"
						}
					}
				},
				{
					"name": "Directive Details",
					"value": "Directive Details",
					"action": "Get directive details",
					"description": "Get all information about a given directive",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directives/{{$parameter[\"directiveId\"]}}"
						}
					}
				},
				{
					"name": "Update Directive",
					"value": "Update Directive",
					"action": "Update a directive details",
					"description": "Update directive information",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directives/{{$parameter[\"directiveId\"]}}"
						}
					}
				},
				{
					"name": "Check Directive",
					"value": "Check Directive",
					"action": "Check that update on a directive is valid",
					"description": "Check that update on a directive is valid",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directives/{{$parameter[\"directiveId\"]}}/check"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directives",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"List Directives"
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
						"Directives"
					],
					"operation": [
						"List Directives"
					]
				}
			}
		},
		{
			"displayName": "PUT /directives",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "91252ea2-feb2-412d-8599-c6945fee02c4",
			"description": "Human readable name of the directive",
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
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Is the directive enabled",
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
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "91252ea2-feb2-412d-8599-c6945fee02c4",
			"description": "Directive id",
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
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "Long Description",
			"name": "longDescription",
			"type": "string",
			"default": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
			"description": "Description of the technique (rendered as markdown)",
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
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "Parameters",
			"name": "parameters",
			"type": "json",
			"default": "{\n  \"name\": \"sections\",\n  \"sections\": [\n    {\n      \"section\": {\n        \"name\": \"File to manage\",\n        \"sections\": [\n          {\n            \"section\": {\n              \"name\": \"File\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_PATH\",\n                    \"value\": \"/root/test\"\n                  }\n                }\n              ]\n            }\n          },\n          {\n            \"section\": {\n              \"name\": \"File cleaning options\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_DELETION_DAYS\",\n                    \"value\": \"0\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_DELETION_OPTION\",\n                    \"value\": \"none\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_DELETION_PATTERN\",\n                    \"value\": \".*\"\n                  }\n                }\n              ]\n            }\n          },\n          {\n            \"section\": {\n              \"name\": \"Permissions\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS\",\n                    \"value\": \"false\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_GROUP\",\n                    \"value\": \"\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_OWNER\",\n                    \"value\": \"\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_PERM\",\n                    \"value\": \"000\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_RECURSIVE\",\n                    \"value\": \"1\"\n                  }\n                }\n              ]\n            }\n          },\n          {\n            \"section\": {\n              \"name\": \"Post-modification hook\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND\",\n                    \"value\": \"\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN\",\n                    \"value\": \"false\"\n                  }\n                }\n              ]\n            }\n          }\n        ],\n        \"vars\": [\n          {\n            \"var\": {\n              \"name\": \"FILE_AND_FOLDER_MANAGEMENT_ACTION\",\n              \"value\": \"copy\"\n            }\n          },\n          {\n            \"var\": {\n              \"name\": \"FILE_AND_FOLDER_MANAGEMENT_SOURCE\",\n              \"value\": \"/vagrant/node.sh\"\n            }\n          },\n          {\n            \"var\": {\n              \"name\": \"FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE\",\n              \"value\": \"false\"\n            }\n          }\n        ]\n      }\n    }\n  ]\n}",
			"description": "Directive parameters (depends on the source technique)",
			"routing": {
				"send": {
					"property": "parameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "number",
			"default": 5,
			"description": "Directive priority. `0` has highest priority.",
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "Short Description",
			"name": "shortDescription",
			"type": "string",
			"default": "91252ea2-feb2-412d-8599-c6945fee02c4",
			"description": "One line directive description",
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
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "b9f6d98a-28bc-4d80-90f7-d2f14269e215",
			"description": "The id of the directive the clone will be based onto. If this parameter if provided,  the new directive will be a clone of this source. Other value will override values from the source.",
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
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "System",
			"name": "system",
			"type": "boolean",
			"default": false,
			"description": "If true it is an internal Rudder directive",
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
						"Directives"
					],
					"operation": [
						"Create Directive"
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
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "Technique Name",
			"name": "techniqueName",
			"type": "string",
			"default": "userManagement",
			"description": "Directive id",
			"routing": {
				"send": {
					"property": "techniqueName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "Technique Version",
			"name": "techniqueVersion",
			"type": "string",
			"default": "8.0",
			"description": "Directive id",
			"routing": {
				"send": {
					"property": "techniqueVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Create Directive"
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
						"Directives"
					],
					"operation": [
						"Create Directive"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directives/{directiveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Delete Directive"
					]
				}
			}
		},
		{
			"displayName": "Directive Id",
			"name": "directiveId",
			"required": true,
			"description": "Id of the directive",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Delete Directive"
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
						"Directives"
					],
					"operation": [
						"Delete Directive"
					]
				}
			}
		},
		{
			"displayName": "GET /directives/{directiveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Directive Details"
					]
				}
			}
		},
		{
			"displayName": "Directive Id",
			"name": "directiveId",
			"required": true,
			"description": "Id of the directive",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Directive Details"
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
						"Directives"
					],
					"operation": [
						"Directive Details"
					]
				}
			}
		},
		{
			"displayName": "POST /directives/{directiveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Directive Id",
			"name": "directiveId",
			"required": true,
			"description": "Id of the directive",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "91252ea2-feb2-412d-8599-c6945fee02c4",
			"description": "Human readable name of the directive",
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
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Is the directive enabled",
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
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "91252ea2-feb2-412d-8599-c6945fee02c4",
			"description": "Directive id",
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
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Long Description",
			"name": "longDescription",
			"type": "string",
			"default": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
			"description": "Description of the technique (rendered as markdown)",
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
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Parameters",
			"name": "parameters",
			"type": "json",
			"default": "{\n  \"name\": \"sections\",\n  \"sections\": [\n    {\n      \"section\": {\n        \"name\": \"File to manage\",\n        \"sections\": [\n          {\n            \"section\": {\n              \"name\": \"File\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_PATH\",\n                    \"value\": \"/root/test\"\n                  }\n                }\n              ]\n            }\n          },\n          {\n            \"section\": {\n              \"name\": \"File cleaning options\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_DELETION_DAYS\",\n                    \"value\": \"0\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_DELETION_OPTION\",\n                    \"value\": \"none\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_DELETION_PATTERN\",\n                    \"value\": \".*\"\n                  }\n                }\n              ]\n            }\n          },\n          {\n            \"section\": {\n              \"name\": \"Permissions\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS\",\n                    \"value\": \"false\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_GROUP\",\n                    \"value\": \"\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_OWNER\",\n                    \"value\": \"\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_PERM\",\n                    \"value\": \"000\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_RECURSIVE\",\n                    \"value\": \"1\"\n                  }\n                }\n              ]\n            }\n          },\n          {\n            \"section\": {\n              \"name\": \"Post-modification hook\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND\",\n                    \"value\": \"\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN\",\n                    \"value\": \"false\"\n                  }\n                }\n              ]\n            }\n          }\n        ],\n        \"vars\": [\n          {\n            \"var\": {\n              \"name\": \"FILE_AND_FOLDER_MANAGEMENT_ACTION\",\n              \"value\": \"copy\"\n            }\n          },\n          {\n            \"var\": {\n              \"name\": \"FILE_AND_FOLDER_MANAGEMENT_SOURCE\",\n              \"value\": \"/vagrant/node.sh\"\n            }\n          },\n          {\n            \"var\": {\n              \"name\": \"FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE\",\n              \"value\": \"false\"\n            }\n          }\n        ]\n      }\n    }\n  ]\n}",
			"description": "Directive parameters (depends on the source technique)",
			"routing": {
				"send": {
					"property": "parameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Policy Mode",
			"name": "policyMode",
			"type": "options",
			"default": "audit",
			"description": "Policy mode of the directive",
			"options": [
				{
					"name": "Enforce",
					"value": "enforce"
				},
				{
					"name": "Audit",
					"value": "audit"
				}
			],
			"routing": {
				"send": {
					"property": "policyMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "number",
			"default": 5,
			"description": "Directive priority. `0` has highest priority.",
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Short Description",
			"name": "shortDescription",
			"type": "string",
			"default": "91252ea2-feb2-412d-8599-c6945fee02c4",
			"description": "One line directive description",
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
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "System",
			"name": "system",
			"type": "boolean",
			"default": false,
			"description": "If true it is an internal Rudder directive",
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
						"Directives"
					],
					"operation": [
						"Update Directive"
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
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Technique Name",
			"name": "techniqueName",
			"type": "string",
			"default": "userManagement",
			"description": "Directive id",
			"routing": {
				"send": {
					"property": "techniqueName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "Technique Version",
			"name": "techniqueVersion",
			"type": "string",
			"default": "8.0",
			"description": "Directive id",
			"routing": {
				"send": {
					"property": "techniqueVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Update Directive"
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
						"Directives"
					],
					"operation": [
						"Update Directive"
					]
				}
			}
		},
		{
			"displayName": "POST /directives/{directiveId}/check",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Directive Id",
			"name": "directiveId",
			"required": true,
			"description": "Id of the directive",
			"default": "9a1773c9-0889-40b6-be89-f6504443ac1b",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "91252ea2-feb2-412d-8599-c6945fee02c4",
			"description": "Human readable name of the directive",
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
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "Is the directive enabled",
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
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "91252ea2-feb2-412d-8599-c6945fee02c4",
			"description": "Directive id",
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
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Long Description",
			"name": "longDescription",
			"type": "string",
			"default": "# Documentation\n* [Ticket link](https://tickets.example.com/issues/3456)",
			"description": "Description of the technique (rendered as markdown)",
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
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Parameters",
			"name": "parameters",
			"type": "json",
			"default": "{\n  \"name\": \"sections\",\n  \"sections\": [\n    {\n      \"section\": {\n        \"name\": \"File to manage\",\n        \"sections\": [\n          {\n            \"section\": {\n              \"name\": \"File\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_PATH\",\n                    \"value\": \"/root/test\"\n                  }\n                }\n              ]\n            }\n          },\n          {\n            \"section\": {\n              \"name\": \"File cleaning options\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_DELETION_DAYS\",\n                    \"value\": \"0\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_DELETION_OPTION\",\n                    \"value\": \"none\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_DELETION_PATTERN\",\n                    \"value\": \".*\"\n                  }\n                }\n              ]\n            }\n          },\n          {\n            \"section\": {\n              \"name\": \"Permissions\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_CHECK_PERMISSIONS\",\n                    \"value\": \"false\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_GROUP\",\n                    \"value\": \"\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_OWNER\",\n                    \"value\": \"\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_PERM\",\n                    \"value\": \"000\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_RECURSIVE\",\n                    \"value\": \"1\"\n                  }\n                }\n              ]\n            }\n          },\n          {\n            \"section\": {\n              \"name\": \"Post-modification hook\",\n              \"vars\": [\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_COMMAND\",\n                    \"value\": \"\"\n                  }\n                },\n                {\n                  \"var\": {\n                    \"name\": \"FILE_AND_FOLDER_MANAGEMENT_POST_HOOK_RUN\",\n                    \"value\": \"false\"\n                  }\n                }\n              ]\n            }\n          }\n        ],\n        \"vars\": [\n          {\n            \"var\": {\n              \"name\": \"FILE_AND_FOLDER_MANAGEMENT_ACTION\",\n              \"value\": \"copy\"\n            }\n          },\n          {\n            \"var\": {\n              \"name\": \"FILE_AND_FOLDER_MANAGEMENT_SOURCE\",\n              \"value\": \"/vagrant/node.sh\"\n            }\n          },\n          {\n            \"var\": {\n              \"name\": \"FILE_AND_FOLDER_MANAGEMENT_SYMLINK_ENFORCE\",\n              \"value\": \"false\"\n            }\n          }\n        ]\n      }\n    }\n  ]\n}",
			"description": "Directive parameters (depends on the source technique)",
			"routing": {
				"send": {
					"property": "parameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Policy Mode",
			"name": "policyMode",
			"type": "options",
			"default": "audit",
			"description": "Policy mode of the directive",
			"options": [
				{
					"name": "Enforce",
					"value": "enforce"
				},
				{
					"name": "Audit",
					"value": "audit"
				}
			],
			"routing": {
				"send": {
					"property": "policyMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "number",
			"default": 5,
			"description": "Directive priority. `0` has highest priority.",
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Short Description",
			"name": "shortDescription",
			"type": "string",
			"default": "91252ea2-feb2-412d-8599-c6945fee02c4",
			"description": "One line directive description",
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
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "System",
			"name": "system",
			"type": "boolean",
			"default": false,
			"description": "If true it is an internal Rudder directive",
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
						"Directives"
					],
					"operation": [
						"Check Directive"
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
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Technique Name",
			"name": "techniqueName",
			"type": "string",
			"default": "userManagement",
			"description": "Directive id",
			"routing": {
				"send": {
					"property": "techniqueName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
		{
			"displayName": "Technique Version",
			"name": "techniqueVersion",
			"type": "string",
			"default": "8.0",
			"description": "Directive id",
			"routing": {
				"send": {
					"property": "techniqueVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Directives"
					],
					"operation": [
						"Check Directive"
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
						"Directives"
					],
					"operation": [
						"Check Directive"
					]
				}
			}
		},
];
