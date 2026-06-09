import type { INodeProperties } from 'n8n-workflow';

export const techniquesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					]
				}
			},
			"options": [
				{
					"name": "Methods",
					"value": "Methods",
					"action": "List methods",
					"description": "Get all generic methods metadata",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/methods"
						}
					}
				},
				{
					"name": "Reload Methods",
					"value": "Reload Methods",
					"action": "Reload methods",
					"description": "Reload methods metadata from file system",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/methods/reload"
						}
					}
				},
				{
					"name": "List Techniques",
					"value": "List Techniques",
					"action": "List all techniques",
					"description": "List all technique with their versions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/techniques"
						}
					}
				},
				{
					"name": "Create Technique",
					"value": "Create Technique",
					"action": "Create technique",
					"description": "Create a new technique in Rudder from a technique in the technique editor",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/techniques"
						}
					}
				},
				{
					"name": "Technique Categories",
					"value": "Technique Categories",
					"action": "List categories",
					"description": "Get all technique categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/techniques/categories"
						}
					}
				},
				{
					"name": "Techniques",
					"value": "Techniques",
					"action": "Reload techniques",
					"description": "Reload all techniques metadata from file system",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/techniques/reload"
						}
					}
				},
				{
					"name": "List Techniques Versions",
					"value": "List Techniques Versions",
					"action": "List versions",
					"description": "List all techniques version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/techniques/versions"
						}
					}
				},
				{
					"name": "Get Technique All Version",
					"value": "Get Technique All Version",
					"action": "Technique metadata by ID",
					"description": "Get each Technique's versions with their metadata by ID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/techniques/{{$parameter[\"techniqueId\"]}}"
						}
					}
				},
				{
					"name": "List Techniques Directives",
					"value": "List Techniques Directives",
					"action": "List all directives based on a technique",
					"description": "List all directives based on all version of a technique",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/techniques/{{$parameter[\"techniqueId\"]}}/directives"
						}
					}
				},
				{
					"name": "Delete Technique",
					"value": "Delete Technique",
					"action": "Delete technique",
					"description": "Delete a technique from technique editor",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/techniques/{{$parameter[\"techniqueId\"]}}/{{$parameter[\"techniqueVersion\"]}}"
						}
					}
				},
				{
					"name": "Get Technique All Version ID",
					"value": "Get Technique All Version ID",
					"action": "Technique metadata by version and ID",
					"description": "Get Technique metadata",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/techniques/{{$parameter[\"techniqueId\"]}}/{{$parameter[\"techniqueVersion\"]}}"
						}
					}
				},
				{
					"name": "Update Technique",
					"value": "Update Technique",
					"action": "Update technique",
					"description": "Update technique created with technique editor",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/techniques/{{$parameter[\"techniqueId\"]}}/{{$parameter[\"techniqueVersion\"]}}"
						}
					}
				},
				{
					"name": "List Technique Version Directives",
					"value": "List Technique Version Directives",
					"action": "List all directives based on a version of a technique",
					"description": "List all directives based on a version of a technique",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/techniques/{{$parameter[\"techniqueId\"]}}/{{$parameter[\"techniqueVersion\"]}}/directives"
						}
					}
				},
				{
					"name": "Get Techniques Resources",
					"value": "Get Techniques Resources",
					"action": "Technique's resources",
					"description": "Get currently deployed resources of a technique",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/techniques/{{$parameter[\"techniqueId\"]}}/{{$parameter[\"techniqueVersion\"]}}/resources"
						}
					}
				},
				{
					"name": "Technique Revisions",
					"value": "Technique Revisions",
					"action": "Technique's revisions",
					"description": "Get revisions for given technique",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/techniques/{{$parameter[\"techniqueId\"]}}/{{$parameter[\"techniqueVersion\"]}}/revisions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Methods"
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
						"Techniques"
					],
					"operation": [
						"Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /methods/reload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Reload Methods"
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
						"Techniques"
					],
					"operation": [
						"Reload Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /techniques",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"List Techniques"
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
						"Techniques"
					],
					"operation": [
						"List Techniques"
					]
				}
			}
		},
		{
			"displayName": "PUT /techniques",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Create Technique"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"calls\": [\n    {\n      \"component\": \"Install apache2\",\n      \"condition\": \"linux.package_present_vim_repaired\",\n      \"disableReporting\": true,\n      \"id\": \"6a8de98f-7829-4c1b-b4e7-b9387f27f279\",\n      \"method\": \"package_present\",\n      \"parameters\": [\n        {\n          \"name\": \"package\",\n          \"value\": \"apache2\"\n        }\n      ]\n    }\n  ],\n  \"category\": \"user_techniques\",\n  \"description\": \"This techniques apply generic security policies\",\n  \"id\": \"security-policy\",\n  \"name\": \"Security Policy\",\n  \"parameters\": [\n    {\n      \"description\": \"Name of a package to install\",\n      \"id\": \"6a8de98f-7829-4c1b-b4e7-b9387f27f279\",\n      \"mayBeEmpty\": true,\n      \"name\": \"Package to install\"\n    }\n  ],\n  \"resources\": [\n    {\n      \"name\": \"conf/my/app/new\",\n      \"state\": \"modified\"\n    }\n  ],\n  \"source\": \"editor\",\n  \"version\": \"1.0\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Create Technique"
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
						"Techniques"
					],
					"operation": [
						"Create Technique"
					]
				}
			}
		},
		{
			"displayName": "GET /techniques/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Technique Categories"
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
						"Techniques"
					],
					"operation": [
						"Technique Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /techniques/reload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Techniques"
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
						"Techniques"
					],
					"operation": [
						"Techniques"
					]
				}
			}
		},
		{
			"displayName": "GET /techniques/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"List Techniques Versions"
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
						"Techniques"
					],
					"operation": [
						"List Techniques Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /techniques/{techniqueId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Get Technique All Version"
					]
				}
			}
		},
		{
			"displayName": "Technique ID",
			"name": "techniqueId",
			"required": true,
			"description": "Technique ID",
			"default": "userManagement",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Get Technique All Version"
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
						"Techniques"
					],
					"operation": [
						"Get Technique All Version"
					]
				}
			}
		},
		{
			"displayName": "GET /techniques/{techniqueId}/directives",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"List Techniques Directives"
					]
				}
			}
		},
		{
			"displayName": "Technique ID",
			"name": "techniqueId",
			"required": true,
			"description": "Technique ID",
			"default": "userManagement",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"List Techniques Directives"
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
						"Techniques"
					],
					"operation": [
						"List Techniques Directives"
					]
				}
			}
		},
		{
			"displayName": "DELETE /techniques/{techniqueId}/{techniqueVersion}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Delete Technique"
					]
				}
			}
		},
		{
			"displayName": "Technique ID",
			"name": "techniqueId",
			"required": true,
			"description": "Technique ID",
			"default": "userManagement",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Delete Technique"
					]
				}
			}
		},
		{
			"displayName": "Technique Version",
			"name": "techniqueVersion",
			"required": true,
			"description": "Technique version",
			"default": "6.0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Delete Technique"
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
						"Techniques"
					],
					"operation": [
						"Delete Technique"
					]
				}
			}
		},
		{
			"displayName": "GET /techniques/{techniqueId}/{techniqueVersion}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Get Technique All Version ID"
					]
				}
			}
		},
		{
			"displayName": "Technique ID",
			"name": "techniqueId",
			"required": true,
			"description": "Technique ID",
			"default": "userManagement",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Get Technique All Version ID"
					]
				}
			}
		},
		{
			"displayName": "Technique Version",
			"name": "techniqueVersion",
			"required": true,
			"description": "Technique version",
			"default": "6.0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Get Technique All Version ID"
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
						"Techniques"
					],
					"operation": [
						"Get Technique All Version ID"
					]
				}
			}
		},
		{
			"displayName": "POST /techniques/{techniqueId}/{techniqueVersion}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Update Technique"
					]
				}
			}
		},
		{
			"displayName": "Technique ID",
			"name": "techniqueId",
			"required": true,
			"description": "Technique ID",
			"default": "userManagement",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Update Technique"
					]
				}
			}
		},
		{
			"displayName": "Technique Version",
			"name": "techniqueVersion",
			"required": true,
			"description": "Technique version",
			"default": "6.0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Update Technique"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"calls\": [\n    {\n      \"component\": \"Install apache2\",\n      \"condition\": \"linux.package_present_vim_repaired\",\n      \"disableReporting\": true,\n      \"id\": \"6a8de98f-7829-4c1b-b4e7-b9387f27f279\",\n      \"method\": \"package_present\",\n      \"parameters\": [\n        {\n          \"name\": \"package\",\n          \"value\": \"apache2\"\n        }\n      ]\n    }\n  ],\n  \"category\": \"user_techniques\",\n  \"description\": \"This techniques apply generic security policies\",\n  \"id\": \"security-policy\",\n  \"name\": \"Security Policy\",\n  \"parameters\": [\n    {\n      \"description\": \"Name of a package to install\",\n      \"id\": \"6a8de98f-7829-4c1b-b4e7-b9387f27f279\",\n      \"mayBeEmpty\": true,\n      \"name\": \"Package to install\"\n    }\n  ],\n  \"resources\": [\n    {\n      \"name\": \"conf/my/app/new\",\n      \"state\": \"modified\"\n    }\n  ],\n  \"source\": \"editor\",\n  \"version\": \"1.0\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Update Technique"
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
						"Techniques"
					],
					"operation": [
						"Update Technique"
					]
				}
			}
		},
		{
			"displayName": "GET /techniques/{techniqueId}/{techniqueVersion}/directives",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"List Technique Version Directives"
					]
				}
			}
		},
		{
			"displayName": "Technique ID",
			"name": "techniqueId",
			"required": true,
			"description": "Technique ID",
			"default": "userManagement",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"List Technique Version Directives"
					]
				}
			}
		},
		{
			"displayName": "Technique Version",
			"name": "techniqueVersion",
			"required": true,
			"description": "Technique version",
			"default": "6.0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"List Technique Version Directives"
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
						"Techniques"
					],
					"operation": [
						"List Technique Version Directives"
					]
				}
			}
		},
		{
			"displayName": "GET /techniques/{techniqueId}/{techniqueVersion}/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Get Techniques Resources"
					]
				}
			}
		},
		{
			"displayName": "Technique ID",
			"name": "techniqueId",
			"required": true,
			"description": "Technique ID",
			"default": "userManagement",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Get Techniques Resources"
					]
				}
			}
		},
		{
			"displayName": "Technique Version",
			"name": "techniqueVersion",
			"required": true,
			"description": "Technique version",
			"default": "6.0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Get Techniques Resources"
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
						"Techniques"
					],
					"operation": [
						"Get Techniques Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /techniques/{techniqueId}/{techniqueVersion}/revisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Technique Revisions"
					]
				}
			}
		},
		{
			"displayName": "Technique ID",
			"name": "techniqueId",
			"required": true,
			"description": "Technique ID",
			"default": "userManagement",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Technique Revisions"
					]
				}
			}
		},
		{
			"displayName": "Technique Version",
			"name": "techniqueVersion",
			"required": true,
			"description": "Technique version",
			"default": "6.0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Techniques"
					],
					"operation": [
						"Technique Revisions"
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
						"Techniques"
					],
					"operation": [
						"Technique Revisions"
					]
				}
			}
		},
];
